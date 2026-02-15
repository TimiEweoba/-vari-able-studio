import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';
import { initializePayment } from '@lib/flutterwave';
import crypto from "crypto";

export async function POST(req: Request) {
    try {
        const { email, amount, currency, name, description, packageName } = await req.json();

        if (!email || !amount) {
            return NextResponse.json({ message: "Email and amount are required" }, { status: 400 });
        }

        const tx_ref = `VS-${crypto.randomUUID()}`;
        // Using simple environment variable or defaulting to URL origin if possible, strictly mostly ENV in serverless
        const clientUrl = process.env.CLIENT_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
        // NOTE: dev is typically localhost:3000 in Next.js, but vite was 5173. 
        // We will run nextjs on 3000 usually. We need to check if user wants to keep 5173 or not. 
        // Next.js defaults to 3000. I'll stick to dynamic 3000 default or env.

        const callback_url = `${clientUrl}/payment/callback`;

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
            currency: currency || "NGN",
            tx_ref,
            redirect_url: callback_url,
            customer_name: name,
        });

        return NextResponse.json(result);
    } catch (error: any) {
        console.error("Payment initialization error:", error);
        return NextResponse.json({ message: error.message || "Failed to initialize payment" }, { status: 500 });
    }
}
