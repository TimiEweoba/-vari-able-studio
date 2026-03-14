import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';

export async function POST(req: Request) {
    const secretHash = process.env.FLW_WEBHOOK_HASH;
    const signature = req.headers.get("verif-hash");

    // 1. Signature Verification
    if (!signature || signature !== secretHash) {
        console.error("[Webhook] Unauthorized attempt - Invalid secret hash");
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const payload = await req.json();
        console.log(`[Webhook] Received Flutterwave event: ${payload.event || payload.status}`);

        const data = payload.data || payload;
        const txRef = data.tx_ref;

        if (!txRef) {
            console.warn("[Webhook] Missing tx_ref in payload");
            return new NextResponse("Missing transaction reference", { status: 400 });
        }

        // 2. Fetch original transaction from database
        const paymentRecord = await storage.getPaymentByTxRef(txRef);
        if (!paymentRecord) {
            console.error(`[Webhook] Transaction record not found for ref: ${txRef}`);
            return new NextResponse("Transaction not found", { status: 200 }); // Return 200 to FLW to stop retries
        }

        // 3. Status Handling & Reconciliation
        if (payload.event === "charge.completed" || payload.status === "successful") {
            // SECURITY: Verify amount and currency to prevent tampering
            const receivedAmount = Number(data.amount);
            const expectedAmount = Number(paymentRecord.amount);
            const receivedCurrency = data.currency;
            const expectedCurrency = paymentRecord.currency;

            if (receivedAmount >= expectedAmount && receivedCurrency === expectedCurrency) {
                console.log(`[Webhook] Payment verified successfully for ${txRef}`);
                await storage.updatePaymentStatus(txRef, "successful", JSON.stringify(payload));
                // Note: In a real production app, you might trigger an email here too
            } else {
                console.error(`[Webhook] Tampering detected! Ref: ${txRef}. Expected ${expectedAmount}${expectedCurrency}, received ${receivedAmount}${receivedCurrency}`);
                await storage.updatePaymentStatus(txRef, "amount_mismatch", JSON.stringify({
                    error: "Amount or currency mismatch",
                    expected: { amount: expectedAmount, currency: expectedCurrency },
                    received: { amount: receivedAmount, currency: receivedCurrency },
                    full_payload: payload
                }));
            }
        } else if (payload.status === "failed") {
            console.log(`[Webhook] Payment failed for ${txRef}`);
            await storage.updatePaymentStatus(txRef, "failed", JSON.stringify(payload));
        }

        return new NextResponse("Webhook processed", { status: 200 });
    } catch (error) {
        console.error("[Webhook] Critical processing error:", error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}
