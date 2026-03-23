import Groq from "groq-sdk";


export interface IntakeResult {
    intentScore: number;   // 1–10 how serious/qualified the lead is
    summary: string;       // one-paragraph summary for the team
    suggestedTier: string; // starter | growth | studio | agent
}

const SYSTEM_PROMPT = `You are an intake analyst for veri—able studio, a digital product studio that builds websites, apps, and deploys autonomous AI agents.

Given a contact form message, analyze it and return a JSON object with:
- intentScore: 1-10 integer. 1 = spam/tire-kicker, 10 = enterprise-ready, high-budget, urgent.
- summary: A concise 1-2 sentence summary of what the client wants and their readiness level.
- suggestedTier: One of "starter", "growth", "studio", or "agent" based on the complexity described.

Scoring guide:
- 1-3: Vague, no budget signal, generic inquiry
- 4-6: Specific project idea, some detail, moderate scope
- 7-9: Clear requirements, budget awareness, urgency
- 10: Enterprise, multi-system, explicit budget, immediate need

Respond ONLY with valid JSON. No markdown, no explanation.`;

export async function analyzeIntake(
    name: string,
    email: string,
    message: string,
    company?: string | null
): Promise<IntakeResult> {
    try {
        const context = [
            `Name: ${name}`,
            `Email: ${email}`,
            company ? `Company: ${company}` : null,
            `Message: ${message}`,
        ]
            .filter(Boolean)
            .join("\n");

        if (!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY is not configured.");
        }

        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });

        const response = await groq.chat.completions.create({
            model: "llama-3.1-70b-versatile",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: context },
            ],
            temperature: 0.3,
            max_tokens: 300,
            response_format: { type: "json_object" }
        });

        const content = response.choices[0]?.message?.content?.trim();
        if (!content) throw new Error("Empty response from Groq");

        const parsed = JSON.parse(content) as IntakeResult;

        // Validate and clamp
        return {
            intentScore: Math.max(1, Math.min(10, Math.round(parsed.intentScore || 5))),
            summary: parsed.summary || "No summary generated.",
            suggestedTier: ["starter", "growth", "studio", "agent"].includes(parsed.suggestedTier)
                ? parsed.suggestedTier
                : "starter",
        };
    } catch (error: any) {
        console.error("[IntakeAgent] Analysis failed:", error.message);
        // Graceful fallback — never block the contact request
        return {
            intentScore: 5,
            summary: "Agent analysis unavailable — manual review required.",
            suggestedTier: "starter",
        };
    }
}
