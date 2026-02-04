
const FLUTTERWAVE_CLIENT_ID = process.env.FLUTTERWAVE_CLIENT_ID;
const FLUTTERWAVE_CLIENT_SECRET = process.env.FLUTTERWAVE_CLIENT_SECRET;
const API_BASE_URL = "https://api.flutterwave.com/v3";
const TOKEN_URL = "https://idp.flutterwave.com/realms/flutterwave/protocol/openid-connect/token";

interface TokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}

let cachedToken: { token: string; expiry: number } | null = null;

async function getAccessToken(): Promise<string> {
    if (cachedToken && cachedToken.expiry > Date.now()) {
        return cachedToken.token;
    }

    const response = await fetch(TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: FLUTTERWAVE_CLIENT_ID || "",
            client_secret: FLUTTERWAVE_CLIENT_SECRET || "",
            grant_type: "client_credentials",
        }).toString(),
    });

    if (!response.ok) {
        let error;
        const text = await response.text();
        try {
            error = JSON.parse(text);
        } catch {
            error = text;
        }
        throw new Error(`Flutterwave Auth Error: ${JSON.stringify(error)}`);
    }

    const text = await response.text();
    let data;
    try {
        data = JSON.parse(text) as TokenResponse;
    } catch {
        throw new Error(`Flutterwave Auth Parsing Error: ${text}`);
    }
    cachedToken = {
        token: data.access_token,
        expiry: Date.now() + (data.expires_in - 60) * 1000, // Expire 1 minute early for safety
    };

    return data.access_token;
}

export interface PaymentInitializationParams {
    amount: number;
    currency: string;
    email: string;
    tx_ref: string;
    callback_url: string;
    customer_name?: string;
}

export async function initializePayment(params: PaymentInitializationParams) {
    const token = await getAccessToken();

    const response = await fetch(`${API_BASE_URL}/payments`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tx_ref: params.tx_ref,
            amount: params.amount,
            currency: params.currency,
            redirect_url: params.callback_url,
            customer: {
                email: params.email,
                name: params.customer_name || "Customer",
            },
            customizations: {
                title: "vari—able studio",
                description: "Project Reservation Deposit",
            }
        }),
    });

    if (!response.ok) {
        let error;
        const text = await response.text();
        try {
            error = JSON.parse(text);
        } catch {
            error = text;
        }
        throw new Error(`Flutterwave Payment Initialization Error: ${JSON.stringify(error)}`);
    }

    return await response.json();
}

export async function verifyTransaction(transactionId: string) {
    const token = await getAccessToken();

    const response = await fetch(`${API_BASE_URL}/transactions/${transactionId}/verify`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Flutterwave Verification Error: ${JSON.stringify(error)}`);
    }

    return await response.json();
}
