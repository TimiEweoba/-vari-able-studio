import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';

export async function POST(req: Request) {
    const secretHash = process.env.FLW_WEBHOOK_HASH;
    const signature = req.headers.get("verif-hash");

    if (!signature || signature !== secretHash) {
        return new NextResponse(null, { status: 401 });
    }

    try {
        const payload = await req.json();
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

        return new NextResponse(null, { status: 200 });
    } catch (error) {
        console.error("Webhook processing error:", error);
        return new NextResponse(null, { status: 500 });
    }
}
