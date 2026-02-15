import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';

export async function GET(req: Request, { params }: { params: { txRef: string } }) {
    try {
        const { txRef } = params;
        const payment = await storage.getPaymentByTxRef(txRef);

        if (!payment) {
            return NextResponse.json({ message: "Payment not found" }, { status: 404 });
        }

        return NextResponse.json({ status: payment.status });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Failed to verify payment" }, { status: 500 });
    }
}
