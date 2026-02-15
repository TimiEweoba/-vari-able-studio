import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';
import { insertContactSchema } from '@shared/schema';
import { z } from 'zod';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = insertContactSchema.parse(body);
        const result = await storage.createContactRequest(data);

        // Simulate/Trigger Email Notification for internal routing
        console.log(`[Email Notification] Routing message from ${data.email} to contact@veriable.xyz`);

        return NextResponse.json(result);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "Invalid request data", errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ message: error.message || "Invalid request data" }, { status: 400 });
    }
}
