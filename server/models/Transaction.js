const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    reference: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending',
    },
    plan: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        default: 'NGN',
    },
    provider: {
        type: String,
        enum: ['paystack', 'flutterwave'],
        default: 'paystack',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    metadata: {
        type: mongoose.Schema.Types.Mixed,
        default: {},
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);
