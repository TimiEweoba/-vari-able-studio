const axios = require('axios');
const Transaction = require('../models/Transaction');

const FLW_SECRET_KEY = process.env.FLW_SECRET_KEY;
const FLW_ENCRYPTION_KEY = process.env.FLW_ENCRYPTION_KEY;

// No need for separate token fetching in V3 standard flow, use Secret Key directly.

exports.initializePayment = async (req, res) => {
    const { email, amount, plan } = req.body;

    try {
        const reference = `flw${Date.now()}${Math.floor(Math.random() * 1000)}`;

        // Flutterwave V3 Standard Payment Endpoint
        const response = await axios.post(
            'https://api.flutterwave.com/v3/payments',
            {
                tx_ref: reference,
                amount,
                currency: 'NGN',
                redirect_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/payment/callback`,
                payment_options: "card, account, banktransfer, ussd, mobilemoneygh, mobilemoneyfranco, mobilemoneyug, mobilemoneyrw, mobilemoneyzm, mobilemoneyks, barter, ozeemoney, payattitude, pwa, credit, 1ach, bank_transfer",
                customer: {
                    email,
                },
                customizations: {
                    title: 'Veri-able Studio Payment',
                    description: `Payment for ${plan} plan`,
                    logo: 'https://assets.piedpiper.com/logo.png', // Optional: Replace with your actual logo URL
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${FLW_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const authorization_url = response.data.data.link;

        if (!authorization_url) {
            console.error('Flutterwave V3: No redirect URL found in response', response.data);
            throw new Error('Failed to get payment link from Flutterwave V3');
        }

        // Save transaction to DB
        const transaction = new Transaction({
            email,
            amount,
            reference,
            plan,
            provider: 'flutterwave',
            metadata: { version: 'v3_standard' }
        });
        await transaction.save();

        res.status(200).json({
            authorization_url,
            link: authorization_url, // For compatibility with CheckoutDialog.tsx
            reference
        });
    } catch (error) {
        if (error.response && error.response.data) {
            console.error('Flutterwave V3 Initialization Full Error:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Flutterwave V3 Initialization Error:', error.message);
        }
        res.status(500).json({
            message: 'Flutterwave V3 initialization failed. Please try again later.',
            error: error.message
        });
    }
};

exports.verifyPayment = async (req, res) => {
    const { reference } = req.params;

    try {
        // In V3, we usually verify by Transaction ID, but if we only have reference, 
        // we can use the 'Get Transaction by Reference' logic or list transactions with tx_ref.
        // However, standard V3 verification usually takes an ID. 
        // Let's use the 'Verify Transaction' endpoint if we had the ID, 
        // but since we rely on tx_ref flow, let's look it up or verify by tx_ref if supported.
        // 
        // Actually, best practice in V3 with just tx_ref is often to use the 
        // "Get transaction by tx_ref" endpoint (often exposed as a list filter).

        const response = await axios.get(
            `https://api.flutterwave.com/v3/transactions`,
            {
                params: {
                    tx_ref: reference,
                    from: '2020-01-01', // Wide range to ensure we find it
                },
                headers: {
                    Authorization: `Bearer ${FLW_SECRET_KEY}`,
                },
            }
        );

        const transactions = response.data.data;
        // In V3 search, it returns an array.
        const transactionResult = transactions && transactions.length > 0 ? transactions[0] : null;

        if (transactionResult && (transactionResult.status === 'successful')) {
            // Optional: Double check amounts matching here

            await Transaction.findOneAndUpdate(
                { reference: reference },
                { status: 'success', metadata: { flutterwaveId: transactionResult.id } },
                { new: true }
            );
            return res.status(200).json({ message: 'Payment successful', status: 'success', data: transactionResult });
        } else {
            await Transaction.findOneAndUpdate(
                { reference: reference },
                { status: 'failed' },
                { new: true }
            );
            return res.status(200).json({
                message: 'Payment failed, pending, or not found',
                status: transactionResult ? transactionResult.status : 'not_found'
            });
        }
    } catch (error) {
        console.error('Flutterwave V3 Verification Error:', error.response ? error.response.data : error.message);
        res.status(500).json({
            message: 'Flutterwave V3 verification failed',
            error: error.message,
            details: error.response ? error.response.data : null
        });
    }
};

exports.webhook = async (req, res) => {
    const payload = req.body;
    const signature = req.headers['verif-hash'];

    if (!signature || signature !== process.env.FLW_WEBHOOK_HASH) {
        // Silently ignore or log warning
        // return res.status(401).end();
    }

    // Standard V3 Webhook structure
    if (payload.status === 'successful' && payload.event === 'charge.completed') {
        const tx_ref = payload.data.tx_ref;
        if (tx_ref) {
            await Transaction.findOneAndUpdate(
                { reference: tx_ref },
                { status: 'success', metadata: { flutterwaveId: payload.data.id } },
                { new: true }
            );
        }
    }

    res.sendStatus(200);
};

