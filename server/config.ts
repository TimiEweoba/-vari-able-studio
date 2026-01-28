import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
    POLAR_ACCESS_TOKEN: z.string().min(1, "POLAR_ACCESS_TOKEN is required"),
    POLAR_WEBHOOK_SECRET: z.string().min(1, "POLAR_WEBHOOK_SECRET is required"),
    POLAR_PRODUCT_STARTER: z.string().optional(),
    POLAR_PRODUCT_SCALE: z.string().optional(),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.string().default("5000"),
});

export function validateConfig() {
    try {
        return envSchema.parse(process.env);
    } catch (err) {
        if (err instanceof z.ZodError) {
            const missing = err.errors.map(e => e.path.join(".")).join(", ");
            console.error(`❌ Missing or invalid environment variables: ${missing}`);
            // In production, we want to fail fast
            if (process.env.NODE_ENV === "production") {
                process.exit(1);
            }
        }
        return null;
    }
}

export const config = envSchema.parse(process.env);
