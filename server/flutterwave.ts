/**
 * Flutterwave V4 API Integration
 * Uses OAuth 2.0 Client Credentials Flow
 */

const FLUTTERWAVE_CLIENT_ID = process.env.FLUTTERWAVE_CLIENT_ID;
const FLUTTERWAVE_CLIENT_SECRET = process.env.FLUTTERWAVE_CLIENT_SECRET;
const TOKEN_URL = "https://idp.flutterwave.com/realms/flutterwave/protocol/openid-connect/token";
// Standard API endpoint for V3/V4 unified access
const API_BASE_URL = "https://api.flutterwave.com";

interface TokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}

let cachedToken: { token: string; expiry: number } | null = null;

async function getAccessToken(): Promise<string> {
    // Return cached token if still valid
    if (cachedToken && cachedToken.expiry > Date.now()) {
        console.log("[Flutterwave] Using cached access token");
        return cachedToken.token;
    }

    console.log("[Flutterwave] Requesting new access token...");
    console.log("[Flutterwave] Client ID:", FLUTTERWAVE_CLIENT_ID ? "Present" : "MISSING");
    console.log("[Flutterwave] Client Secret:", FLUTTERWAVE_CLIENT_SECRET ? "Present" : "MISSING");

    if (!FLUTTERWAVE_CLIENT_ID || !FLUTTERWAVE_CLIENT_SECRET) {
        throw new Error("Flutterwave credentials not configured. Set FLUTTERWAVE_CLIENT_ID and FLUTTERWAVE_CLIENT_SECRET in .env");
    }

    const body = new URLSearchParams({
        client_id: FLUTTERWAVE_CLIENT_ID,
        client_secret: FLUTTERWAVE_CLIENT_SECRET,
        grant_type: "client_credentials",
    });

    console.log("[Flutterwave] Token request URL:", TOKEN_URL);

    const response = await fetch(TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
    });

    const responseText = await response.text();
    console.log("[Flutterwave] Token response status:", response.status);
    console.log("[Flutterwave] Token response:", responseText.substring(0, 200));

    if (!response.ok) {
        throw new Error(`Flutterwave Auth Error (${response.status}): ${responseText}`);
    }

    let data: TokenResponse;
    try {
        data = JSON.parse(responseText);
    } catch (e) {
        throw new Error(`Failed to parse token response: ${responseText}`);
    }

    if (!data.access_token) {
        throw new Error(`No access token in response: ${responseText}`);
    }

    // Cache the token (expire 1 minute early for safety)
    cachedToken = {
        token: data.access_token,
        expiry: Date.now() + (data.expires_in - 60) * 1000,
    };

    console.log("[Flutterwave] Got new access token, expires in:", data.expires_in, "seconds");
    return data.access_token;
}

export interface PaymentInitializationParams {
    amount: number;
    currency: string;
    email: string;
    tx_ref: string;
    redirect_url: string;
    customer_name?: string;
    phone_number?: string;
}

export async function initializePayment(params: PaymentInitializationParams) {
    console.log("[Flutterwave] Initializing payment:", {
        tx_ref: params.tx_ref,
        amount: params.amount,
        currency: params.currency,
        email: params.email,
    });

    const token = await getAccessToken();

    const payload = {
        tx_ref: params.tx_ref,
        amount: params.amount,
        currency: params.currency,
        redirect_url: params.redirect_url,
        customer: {
            email: params.email,
            name: params.customer_name || "Customer",
        },
        customizations: {
            title: "veri—able studio",
            description: "Project Reservation Deposit",
        },
    };

    console.log("[Flutterwave] Payment payload:", JSON.stringify(payload, null, 2));

    const response = await fetch(`${API_BASE_URL}/v3/payments`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`[Flutterwave] Payment Request to: ${API_BASE_URL}/v3/payments`);
    console.log(`[Flutterwave] Response Status: ${response.status}`);
    console.log(`[Flutterwave] Response Body: ${responseText}`);

    if (!response.ok) {
        let errorMessage = `Payment failed (${response.status})`;
        try {
            const errorData = JSON.parse(responseText);
            const detail = errorData.message || errorData.error || errorData.data || errorData;
            errorMessage = typeof detail === 'object' ? JSON.stringify(detail) : detail;
        } catch {
            errorMessage = responseText || errorMessage;
        }
        console.error(`[Flutterwave] Error Detail: ${errorMessage}`);
        throw new Error(errorMessage);
    }

    let data;
    try {
        data = JSON.parse(responseText);
    } catch {
        throw new Error(`Invalid JSON response: ${responseText}`);
    }

    if (data.status !== "success") {
        throw new Error(data.message || "Payment initialization failed");
    }

    return data;
}

export async function verifyTransaction(transactionId: string) {
    const token = await getAccessToken();

    const response = await fetch(`${API_BASE_URL}/v3/transactions/${transactionId}/verify`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    const responseText = await response.text();

    if (!response.ok) {
        let errorMessage = `Verification failed (${response.status})`;
        try {
            const errorData = JSON.parse(responseText);
            errorMessage = errorData.message || errorMessage;
        } catch {
            errorMessage = responseText || errorMessage;
        }
        throw new Error(errorMessage);
    }

    return JSON.parse(responseText);
}
