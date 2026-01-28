import { Polar } from "@polar-sh/sdk";

if (!process.env.POLAR_ACCESS_TOKEN) {
    throw new Error("POLAR_ACCESS_TOKEN is not set in environment variables");
}

export const polar = new Polar({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    server: "sandbox", // Defaulting to sandbox for safety; change to "production" when ready.
});
