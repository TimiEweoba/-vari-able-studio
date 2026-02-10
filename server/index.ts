import dotenv from "dotenv";
import path from "path";
// Load .env from the server folder if it exists, otherwise root
const envPath = path.resolve(process.cwd(), "server", ".env");
dotenv.config({ path: envPath });
dotenv.config();

// Verify required env vars on startup
const requiredEnvVars = ["FLW_SECRET_KEY"];
const missingVars = requiredEnvVars.filter(v => !process.env[v]);
if (missingVars.length > 0) {
    console.warn(`[WARNING] Missing environment variables: ${missingVars.join(", ")}`);
    console.warn(`[WARNING] Checked path: ${envPath}`);
} else {
    console.log("[INFO] Environment variables loaded successfully");
}

import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();

// Middlewares
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json());

// Heartbeat route
app.get("/", (_req, res) => {
    res.json({
        status: "active",
        service: "veri—able studio API",
        timestamp: new Date().toISOString(),
        endpoints: ["/api/projects", "/api/contact", "/api/payments/initialize"]
    });
});

// Routes
const startServer = async () => {
    try {
        const server = await registerRoutes(app);

        const PORT = Number(process.env.PORT) || 5000;
        server.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
            console.log(`API routes registered successfully`);
        });
    } catch (err: any) {
        console.error('Failed to start server:', err.message);
        process.exit(1);
    }
};

startServer();
