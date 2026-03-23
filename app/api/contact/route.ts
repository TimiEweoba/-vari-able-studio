import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';
import { insertContactSchema } from '@shared/schema';
import { sendContactNotification } from '@lib/email';
import { analyzeIntake } from '@lib/agent';
import { z } from 'zod';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = insertContactSchema.parse(body);

        // Run intake agent analysis (graceful fallback if it fails)
        const intake = await analyzeIntake(
            data.name,
            data.email,
            data.message,
            data.company
        );

        // Save to database with agent analysis
        const result = await storage.createContactRequest({
            ...data,
            intentScore: String(intake.intentScore),
            agentSummary: `[${intake.suggestedTier.toUpperCase()}] ${intake.summary}`,
        });

        // Send real emails (studio notification + guest confirmation)
        await sendContactNotification({
            name: data.name,
            email: data.email,
            company: data.company,
            message: data.message,
        });

        console.log(`[IntakeAgent] Lead scored: ${intake.intentScore}/10 → ${intake.suggestedTier} | ${data.email}`);

        return NextResponse.json(result);
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "Invalid request data", errors: error.errors }, { status: 400 });
        }
        return NextResponse.json({ message: error.message || "Invalid request data" }, { status: 400 });
    }
}
