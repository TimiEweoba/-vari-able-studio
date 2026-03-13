import { NextResponse } from 'next/server';
import { sendNewsletterNotification } from '@lib/email';
import { z } from 'zod';

const newsletterSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = newsletterSchema.parse(body);

        await sendNewsletterNotification({ name: data.name, email: data.email });

        return NextResponse.json({ success: true, message: "Subscribed successfully" });
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "Invalid request data", errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ message: error.message || "Failed to subscribe" }, { status: 500 });
    }
}
