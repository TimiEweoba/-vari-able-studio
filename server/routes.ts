import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { initializePayment } from "./flutterwave";
import crypto from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const result = await storage.createContactRequest(data);

      // Simulate/Trigger Email Notification for internal routing
      console.log(`[Email Notification] Routing message from ${data.email} to contact@veriable.xyz`);

      res.json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request data" });
    }
  });

  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to fetch projects" });
    }
  });

  app.post("/api/payments/initialize", async (req, res) => {
    try {
      const { email, amount, currency, name, description, packageName } = req.body;

      if (!email || !amount) {
        return res.status(400).json({ message: "Email and amount are required" });
      }

      const tx_ref = `VS-${crypto.randomUUID()}`;
      const callback_url = `${req.protocol}://${req.get("host")}/success`;

      // Save to storage
      await storage.createPayment({
        txRef: tx_ref,
        email,
        amount: amount.toString(),
        currency: currency || "USD",
        status: "pending",
        data: JSON.stringify({ name, description, packageName }),
      });

      const result = await initializePayment({
        email,
        amount,
        currency: currency || "USD",
        tx_ref,
        callback_url,
        customer_name: name,
      });

      res.json(result);
    } catch (error: any) {
      console.error("Payment initialization error:", error);
      res.status(500).json({ message: error.message || "Failed to initialize payment" });
    }
  });

  app.get("/api/payments/verify/:txRef", async (req, res) => {
    try {
      const { txRef } = req.params;
      const payment = await storage.getPaymentByTxRef(txRef);

      if (!payment) {
        return res.status(404).json({ message: "Payment not found" });
      }

      res.json({ status: payment.status });
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to verify payment" });
    }
  });

  app.post("/api/webhooks/flutterwave", async (req, res) => {
    const secretHash = process.env.FLUTTERWAVE_WEBHOOK_SECRET_HASH;
    const signature = req.headers["verif-hash"];

    if (!signature || signature !== secretHash) {
      return res.status(401).end();
    }

    const payload = req.body;
    console.log("Flutterwave Webhook received:", payload);

    if (payload.status === "successful" || payload.event === "charge.completed") {
      const txRef = payload.tx_ref || (payload.data && payload.data.tx_ref);
      if (txRef) {
        await storage.updatePaymentStatus(txRef, "successful", JSON.stringify(payload));
      }
    } else if (payload.status === "failed") {
      const txRef = payload.tx_ref || (payload.data && payload.data.tx_ref);
      if (txRef) {
        await storage.updatePaymentStatus(txRef, "failed", JSON.stringify(payload));
      }
    }

    res.status(200).end();
  });

  const httpServer = createServer(app);

  return httpServer;
}
