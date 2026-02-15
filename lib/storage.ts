import { users, contactRequests, projects, payments, type User, type InsertUser, type ContactRequest, type InsertContactRequest, type Project, type InsertProject, type Payment, type InsertPayment } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { connectToMongo, UserModel, ProjectModel, ContactRequestModel, PaymentModel } from "./mongo";
import * as mongoose from "mongoose";

export interface IStorage {
    getUser(id: string): Promise<User | undefined>;
    getUserByUsername(username: string): Promise<User | undefined>;
    createUser(user: InsertUser): Promise<User>;
    createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
    getProjects(): Promise<Project[]>;
    createProject(project: InsertProject): Promise<Project>;
    createPayment(payment: InsertPayment): Promise<Payment>;
    getPaymentByTxRef(txRef: string): Promise<Payment | undefined>;
    updatePaymentStatus(txRef: string, status: string, data?: string): Promise<Payment>;
}

export class MongoStorage implements IStorage {
    constructor() {
        connectToMongo().catch(err => console.error("MongoDB connection error:", err));
    }

    private mapDoc<T>(doc: any): T {
        const obj = doc.toObject();
        // Convert _id to string if needed, but we used explicit 'id' field.
        // Convert Dates to ISO strings to match Drizzle schema types
        if (obj.createdAt instanceof Date) obj.createdAt = obj.createdAt.toISOString();
        delete obj._id;
        delete obj.__v;
        return obj as T;
    }

    private async ensureConnection() {
        if (mongoose.connection.readyState !== 1) {
            try {
                await connectToMongo();
            } catch (err) {
                console.error("MongoDB still disconnected. Operation may fail or timeout.");
                throw err;
            }
        }
    }

    async getUser(id: string): Promise<User | undefined> {
        try {
            await this.ensureConnection();
            const user = await UserModel.findOne({ id });
            return user ? this.mapDoc<User>(user) : undefined;
        } catch (e) {
            console.error("MongoStorage.getUser fallback error:", e);
            return undefined;
        }
    }

    async getUserByUsername(username: string): Promise<User | undefined> {
        try {
            await this.ensureConnection();
            const user = await UserModel.findOne({ username });
            return user ? this.mapDoc<User>(user) : undefined;
        } catch (e) {
            console.error("MongoStorage.getUserByUsername fallback error:", e);
            return undefined;
        }
    }

    async createUser(insertUser: InsertUser): Promise<User> {
        await this.ensureConnection();
        const user = await UserModel.create(insertUser);
        return this.mapDoc<User>(user);
    }

    async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
        await this.ensureConnection();
        const request = await ContactRequestModel.create(insertRequest);
        return this.mapDoc<ContactRequest>(request);
    }

    async getProjects(): Promise<Project[]> {
        try {
            if (mongoose.connection.readyState !== 1) {
                console.warn("[MongoStorage] MongoDB not connected, returning empty list or fallback projects would be better here.");
                // We'll try to connect but if it fails, we fall back to an empty list to prevent 10s timeout
                await Promise.race([
                    this.ensureConnection(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000))
                ]);
            }

            const allProjects = await ProjectModel.find().lean();
            if (allProjects.length === 0) {
                // ... (existing seeding logic)
                const initialProjects: InsertProject[] = [
                    {
                        title: "TenantFlow — Landlord CRM template",
                        description: "A vertical starter product for small landlords. Listings, tenant onboarding, rent collection, and basic analytics.",
                        category: "Featured",
                        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
                        link: "#",
                        featured: "true",
                    },
                    {
                        title: "XPlus Commerce",
                        description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
                        category: "E-commerce",
                        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                        link: "https://xplus.com.ng",
                        featured: "true",
                    },
                    {
                        title: "Stripe Billing",
                        description: "Customer portal, subscriptions.",
                        category: "Integration",
                        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                        link: "#",
                        featured: "false",
                    },
                    {
                        title: "Admin Panel",
                        description: "Role management, user controls.",
                        category: "Infrastructure",
                        imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
                        link: "#",
                        featured: "false",
                    }
                ];

                for (const p of initialProjects) {
                    try { await ProjectModel.create(p); } catch (e) { }
                }
                const seeded = await ProjectModel.find().lean();
                return seeded.map(p => this.mapDoc<Project>(p));
            }
            return allProjects.map((p: any) => this.mapDoc<Project>(p));
        } catch (e) {
            console.error("[MongoStorage] Critical failure, returning static fallback projects:", e);
            // Dynamic fallback to prevent empty page
            return [
                {
                    id: "fb-1",
                    title: "System Online (Offline Mode)",
                    description: "The database is currently unreachable. Some projects might be hidden.",
                    category: "Service",
                    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                    link: "#",
                    featured: "true",
                }
            ] as any;
        }
    }

    async createProject(insertProject: InsertProject): Promise<Project> {
        await this.ensureConnection();
        const project = await ProjectModel.create(insertProject);
        return this.mapDoc<Project>(project);
    }

    async createPayment(insertPayment: InsertPayment): Promise<Payment> {
        try {
            await this.ensureConnection();
            const payment = await PaymentModel.create(insertPayment);
            return this.mapDoc<Payment>(payment);
        } catch (e) {
            console.error("[MongoStorage] createPayment failed, falling back to transaction log:", e);
            // If Mongo fails, we return a virtual object so the payment can at least BEGIN.
            // But we warn that it won't be saved.
            return {
                ...insertPayment,
                id: randomUUID(),
                status: "pending",
                createdAt: new Date().toISOString(),
                data: insertPayment.data || null
            } as Payment;
        }
    }

    async getPaymentByTxRef(txRef: string): Promise<Payment | undefined> {
        try {
            await this.ensureConnection();
            const payment = await PaymentModel.findOne({ txRef });
            return payment ? this.mapDoc<Payment>(payment) : undefined;
        } catch (e) {
            return undefined;
        }
    }

    async updatePaymentStatus(txRef: string, status: string, data?: string): Promise<Payment> {
        try {
            await this.ensureConnection();
            const payment = await PaymentModel.findOneAndUpdate(
                { txRef },
                { status, data },
                { new: true }
            );
            if (!payment) throw new Error("Payment not found");
            return this.mapDoc<Payment>(payment);
        } catch (e) {
            console.error("[MongoStorage] updatePaymentStatus failed:", e);
            throw e;
        }
    }
}

export class DatabaseStorage implements IStorage {
    async getUser(id: string): Promise<User | undefined> {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user;
    }

    async getUserByUsername(username: string): Promise<User | undefined> {
        const [user] = await db.select().from(users).where(eq(users.username, username));
        return user;
    }

    async createUser(insertUser: InsertUser): Promise<User> {
        const [user] = await db.insert(users).values(insertUser).returning();
        return user;
    }

    async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
        const [request] = await db.insert(contactRequests).values(insertRequest).returning();
        return request;
    }

    async getProjects(): Promise<Project[]> {
        const allProjects = await db.select().from(projects);
        if (allProjects.length === 0) {
            const initialProjects: InsertProject[] = [
                {
                    title: "TenantFlow — Landlord CRM template",
                    description: "A vertical starter product for small landlords. Listings, tenant onboarding, rent collection, and basic analytics.",
                    category: "Featured",
                    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
                    link: "#",
                    featured: "true",
                },
                {
                    title: "XPlus Commerce",
                    description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
                    category: "E-commerce",
                    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                    link: "https://xplus.com.ng",
                    featured: "true",
                },
                {
                    title: "Stripe Billing",
                    description: "Customer portal, subscriptions.",
                    category: "Integration",
                    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                    link: "#",
                    featured: "false",
                },
                {
                    title: "Admin Panel",
                    description: "Role management, user controls.",
                    category: "Infrastructure",
                    imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
                    link: "#",
                    featured: "false",
                }
            ];

            for (const p of initialProjects) {
                try {
                    await db.insert(projects).values(p);
                } catch (e) {
                    console.warn("Failed to seed project (might already exist):", p.title);
                }
            }
            return await db.select().from(projects);
        }
        return allProjects;
    }

    async createProject(insertProject: InsertProject): Promise<Project> {
        const [project] = await db.insert(projects).values(insertProject).returning();
        return project;
    }

    async createPayment(insertPayment: InsertPayment): Promise<Payment> {
        const [payment] = await db.insert(payments).values(insertPayment).returning();
        return payment;
    }

    async getPaymentByTxRef(txRef: string): Promise<Payment | undefined> {
        const [payment] = await db.select().from(payments).where(eq(payments.txRef, txRef));
        return payment;
    }

    async updatePaymentStatus(txRef: string, status: string, data?: string): Promise<Payment> {
        const [payment] = await db.update(payments)
            .set({ status, data })
            .where(eq(payments.txRef, txRef))
            .returning();
        if (!payment) throw new Error("Payment not found");
        return payment;
    }
}

// Fallback MemStorage
export class MemStorage implements IStorage {
    private users: Map<string, User>;
    private contactRequests: Map<string, ContactRequest>;
    private projects: Map<string, Project>;
    private payments: Map<string, Payment>;

    constructor() {
        this.users = new Map();
        this.contactRequests = new Map();
        this.projects = new Map();
        this.payments = new Map();
        this.seedProjects();
    }

    private seedProjects() {
        const initialProjects: InsertProject[] = [
            {
                title: "TenantFlow — Landlord CRM template",
                description: "A vertical starter product for small landlords. Listings, tenant onboarding, rent collection, and basic analytics.",
                category: "Featured",
                imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
                link: "#",
                featured: "true",
            },
            {
                title: "XPlus Commerce",
                description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
                category: "E-commerce",
                imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
                link: "https://xplus.com.ng",
                featured: "true",
            },
            {
                title: "Stripe Billing",
                description: "Customer portal, subscriptions.",
                category: "Integration",
                imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
                link: "#",
                featured: "false",
            },
            {
                title: "Admin Panel",
                description: "Role management, user controls.",
                category: "Infrastructure",
                imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
                link: "#",
                featured: "false",
            }
        ];

        initialProjects.forEach(p => {
            const id = randomUUID();
            this.projects.set(id, { ...p, id, link: p.link ?? null, featured: p.featured ?? "false" });
        });
    }

    async getUser(id: string): Promise<User | undefined> { return this.users.get(id); }
    async getUserByUsername(username: string): Promise<User | undefined> {
        return Array.from(this.users.values()).find(u => u.username === username);
    }
    async createUser(insertUser: InsertUser): Promise<User> {
        const id = randomUUID();
        const user = { ...insertUser, id };
        this.users.set(id, user);
        return user;
    }
    async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
        const id = randomUUID();
        const req = { ...insertRequest, id, company: insertRequest.company ?? null, createdAt: new Date().toISOString() };
        this.contactRequests.set(id, req);
        return req;
    }
    async getProjects(): Promise<Project[]> { return Array.from(this.projects.values()); }
    async createProject(insertProject: InsertProject): Promise<Project> {
        const id = randomUUID();
        const p = { ...insertProject, id, link: insertProject.link ?? null, featured: insertProject.featured ?? "false" };
        this.projects.set(id, p);
        return p;
    }
    async createPayment(insertPayment: InsertPayment): Promise<Payment> {
        const id = randomUUID();
        const p = { ...insertPayment, id, status: insertPayment.status ?? "pending", data: insertPayment.data ?? null, createdAt: new Date().toISOString() };
        this.payments.set(id, p);
        return p;
    }
    async getPaymentByTxRef(txRef: string): Promise<Payment | undefined> {
        return Array.from(this.payments.values()).find(p => p.txRef === txRef);
    }
    async updatePaymentStatus(txRef: string, status: string, data?: string): Promise<Payment> {
        const p = Array.from(this.payments.values()).find(x => x.txRef === txRef);
        if (!p) throw new Error("Payment not found");
        p.status = status;
        if (data) p.data = data;
        return p;
    }
}

// Initial storage setup
export let storage: IStorage = new MemStorage();

async function initializeStorage() {
    const MONGO_URI = process.env.MONGO_URI;
    const DATABASE_URL = process.env.DATABASE_URL;

    if (MONGO_URI) {
        try {
            console.log("[Storage] Attempting to connect to MongoDB...");
            // Attempt to connect to Mongo with a timeout
            await mongoose.connect(MONGO_URI, {
                serverSelectionTimeoutMS: 5000, // Fail fast (5s) instead of hanging for 30s
            });
            console.log("[Storage] Using MongoDB Storage");
            storage = new MongoStorage();
            return;
        } catch (e: any) {
            console.error("[Storage] MongoDB connection failed:", e.message);
        }
    }

    const isPostgres = !!DATABASE_URL && (DATABASE_URL.startsWith("postgres") || DATABASE_URL.startsWith("neondb"));

    if (isPostgres) {
        console.log("[Storage] Using Database Storage (Postgres)");
        storage = new DatabaseStorage();
    } else {
        console.warn("[Storage] Using In-Memory Storage (Data will be lost on restart)");
        storage = new MemStorage();
    }
}

// Start initialization
initializeStorage().catch(err => {
    console.error("[Storage] Critical initialization error:", err);
});
