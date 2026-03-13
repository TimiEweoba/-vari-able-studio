import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';
import { initializePayment } from '@lib/flutterwave';
import { sendPaymentReservationNotification } from '@lib/email';
import crypto from "crypto";

export async function POST(req: Request) {
    try {
        const { email, amount, currency, name, description, packageName } = await req.json();

        if (!email || !amount) {
            return NextResponse.json({ message: "Email and amount are required" }, { status: 400 });
        }

        const tx_ref = `VS-${crypto.randomUUID()}`;
        const clientUrl = process.env.CLIENT_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
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

        // Send reservation notification emails
        await sendPaymentReservationNotification({
            name,
            email,
            packageName: packageName || "Unknown Package",
            amount,
            currency: currency || "USD",
            txRef: tx_ref,
            description,
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
