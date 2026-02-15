import mongoose from 'mongoose';
import { type User, type Project, type ContactRequest, type Payment } from '@shared/schema';
import crypto from 'crypto';

// Ensure connection
export const connectToMongo = async () => {
    if (mongoose.connection.readyState >= 1) return;
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI not set");
    await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000, // Fail fast (5s)
        family: 4, // Force IPv4 (Fixes many local DNS/ESERVFAIL issues)
    });
};

// Schemas
const userSchema = new mongoose.Schema({
    id: { type: String, default: () => crypto.randomUUID(), unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
    id: { type: String, default: () => crypto.randomUUID(), unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String },
    featured: { type: String, default: "false" },
});

const contactRequestSchema = new mongoose.Schema({
    id: { type: String, default: () => crypto.randomUUID(), unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const paymentSchema = new mongoose.Schema({
    id: { type: String, default: () => crypto.randomUUID(), unique: true },
    txRef: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    amount: { type: String, required: true }, // Keeping as string to match schema
    currency: { type: String, required: true },
    status: { type: String, default: "pending" },
    data: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// Models
// We use `mongoose.models.X || mongoose.model('X', schema)` to prevent overwrite errors in serverless (hot reload)
export const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export const ProjectModel = mongoose.models.Project || mongoose.model('Project', projectSchema);
export const ContactRequestModel = mongoose.models.ContactRequest || mongoose.model('ContactRequest', contactRequestSchema);
export const PaymentModel = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
