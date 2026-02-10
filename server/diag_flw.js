const axios = require('axios');
require('dotenv').config();

const FLW_SECRET_KEY = process.env.FLW_SECRET_KEY;
const FLW_PUBLIC_KEY = process.env.FLW_PUBLIC_KEY;

async function diagnose() {
    console.log('--- Flutterwave V3 Diagnostic ---');
    console.log('Public Key:', FLW_PUBLIC_KEY ? 'Exists' : 'MISSING');
    console.log('Secret Key:', FLW_SECRET_KEY ? 'Exists' : 'MISSING');

    if (!FLW_PUBLIC_KEY || !FLW_SECRET_KEY) {
        console.error('Missing credentials in .env');
        return;
    }

    try {
        console.log('\n1. Testing v3/payments (Standard)...');
        const paymentsRes = await axios.post(
            'https://api.flutterwave.com/v3/payments',
            {
                tx_ref: 'test-diag-v3-' + Date.now(),
                amount: 100,
                currency: 'NGN',
                redirect_url: 'https://example.com',
                payment_options: 'card',
                customer: { email: 'test@example.com' }
            },
            {
                headers: {
                    Authorization: `Bearer ${FLW_SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('✅ v3/payments Success:', paymentsRes.data.data.link);
    } catch (error) {
        console.error('❌ v3/payments Error:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
    }

    try {
        console.log('\n2. Testing v3/transactions (Verification/Search)...');
        const testRef = 'test-diag-v3-' + Date.now(); // Dummy ref
        const verifyRes = await axios.get(
            `https://api.flutterwave.com/v3/transactions`,
            {
                params: {
                    tx_ref: testRef,
                    from: '2024-01-01'
                },
                headers: {
                    Authorization: `Bearer ${FLW_SECRET_KEY}`,
                }
            }
        );
        console.log('✅ v3/transactions Success. Response status:', verifyRes.status);
    } catch (error) {
        console.error('❌ v3/transactions Error:', error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
    }
}

diagnose();

