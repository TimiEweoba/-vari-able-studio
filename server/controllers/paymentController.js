const axios = require('axios');
const Transaction = require('../models/Transaction');

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

exports.initializePayment = async (req, res) => {
    const { email, amount, plan } = req.body;

    try {
        const response = await axios.post(
            'https://api.paystack.co/transaction/initialize',
            {
                email,
                amount: amount * 100, // Paystack expects amount in kobo
            },
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const { authorization_url, reference } = response.data.data;

        // Save transaction to DB
        const transaction = new Transaction({
            email,
            amount,
            reference,
            plan,
        });
        await transaction.save();

        res.status(200).json({ authorization_url, reference });
    } catch (error) {
        console.error('Paystack Initialization Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Paystack initialization failed', error: error.message });
    }
};

exports.verifyPayment = async (req, res) => {
    const { reference } = req.params;

    try {
        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                },
            }
        );

        const { status, amount, customer } = response.data.data;

        if (status === 'success') {
            // Update transaction in DB
            await Transaction.findOneAndUpdate(
                { reference },
                { status: 'success' },
                { new: true }
            );
            return res.status(200).json({ message: 'Payment successful', status: 'success' });
        } else {
            await Transaction.findOneAndUpdate(
                { reference },
                { status: 'failed' },
                { new: true }
            );
            return res.status(200).json({ message: 'Payment failed or pending', status });
        }
    } catch (error) {
        console.error('Paystack Verification Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Paystack verification failed', error: error.message });
    }
};

exports.webhook = async (req, res) => {
    // Paystack sends a POST request to this endpoint
    // We should verify the signature here (skipped for simplicity, but recommended for production)
    const event = req.body;

    if (event.event === 'charge.success') {
        const reference = event.data.reference;
        await Transaction.findOneAndUpdate(
            { reference },
            { status: 'success' },
            { new: true }
        );
    }

    res.sendStatus(200);
};
