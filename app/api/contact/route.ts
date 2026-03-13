import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';
import { insertContactSchema } from '@shared/schema';
import { sendContactNotification } from '@lib/email';
import { z } from 'zod';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = insertContactSchema.parse(body);

        // Save to database
        const result = await storage.createContactRequest(data);

        // Send real emails (studio notification + guest confirmation)
        await sendContactNotification({
            name: data.name,
            email: data.email,
            company: data.company,
            message: data.message,
        });

        return NextResponse.json(result);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "Invalid request data", errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ message: error.message || "Invalid request data" }, { status: 400 });
    }
}
