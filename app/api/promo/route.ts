import { NextResponse } from 'next/server';
import { sendPromoRequestNotification } from '@lib/email';
import { z } from 'zod';

const promoSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    projectDesc: z.string().min(10, "Please tell us a bit more about your project"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = promoSchema.parse(body);

        await sendPromoRequestNotification({
            name: data.name,
            email: data.email,
            projectDesc: data.projectDesc,
        });

        return NextResponse.json({ success: true, message: "Preview request received" });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "Invalid request data", errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ message: error.message || "Failed to submit request" }, { status: 500 });
    }
}
