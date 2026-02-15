import { users, contactRequests, projects, payments, type User, type InsertUser, type ContactRequest, type InsertContactRequest, type Project, type InsertProject, type Payment, type InsertPayment } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

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

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;
  private projects: Map<string, Project>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.projects = new Map();
    this.payments = new Map();
    this.seedProjects();
  }

  private payments: Map<string, Payment>;

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const request: ContactRequest = {
      ...insertRequest,
      id,
      company: insertRequest.company ?? null,
      createdAt: new Date().toISOString()
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      id,
      title: insertProject.title,
      description: insertProject.description,
      category: insertProject.category,
      imageUrl: insertProject.imageUrl,
      link: insertProject.link ?? null,
      featured: insertProject.featured ?? "false"
    };
    this.projects.set(id, project);
    return project;
  }

  async createPayment(insertPayment: InsertPayment): Promise<Payment> {
    const id = randomUUID();
    const payment: Payment = {
      ...insertPayment,
      id,
      status: insertPayment.status ?? "pending",
      data: insertPayment.data ?? null,
      createdAt: new Date().toISOString()
    };
    this.payments.set(id, payment);
    return payment;
  }

  async getPaymentByTxRef(txRef: string): Promise<Payment | undefined> {
    return Array.from(this.payments.values()).find(p => p.txRef === txRef);
  }

  async updatePaymentStatus(txRef: string, status: string, data?: string): Promise<Payment> {
    const payment = Array.from(this.payments.values()).find(p => p.txRef === txRef);
    if (!payment) throw new Error("Payment not found");
    payment.status = status;
    if (data) payment.data = data;
    return payment;
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
        imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
        link: "#",
        featured: "false",
      },
      {
        title: "Pearl Hope Portfolio",
        description: "A premium Web3-focused digital identity and content architecture hub.",
        category: "Digital Presence",
        imageUrl: "/backgrounds/pearl.png",
        link: "https://www.web3pearl.online/",
        featured: "true",
      },
      {
        title: "ChatApp",
        description: "Enterprise-grade end-to-end encrypted messaging platform with a premium design.",
        category: "Messaging",
        imageUrl: "/backgrounds/stephen.png",
        link: "https://chatapp-nine-mu.vercel.app",
        featured: "true",
      }
    ];

    initialProjects.forEach(p => {
      const id = randomUUID();
      this.projects.set(id, {
        id,
        title: p.title,
        description: p.description,
        category: p.category,
        imageUrl: p.imageUrl,
        link: p.link ?? null,
        featured: p.featured ?? "false"
      });
    });
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
      // Seed default projects if database is empty
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
          title: "Pearl Hope Portfolio",
          description: "A premium Web3-focused digital identity and content architecture hub.",
          category: "Digital Presence",
          imageUrl: "/backgrounds/pearl.png",
          link: "https://www.web3pearl.online/",
          featured: "true",
        },
        {
          title: "ChatApp",
          description: "Enterprise-grade end-to-end encrypted messaging platform with a premium design.",
          category: "Messaging",
          imageUrl: "/backgrounds/stephen.png",
          link: "https://chatapp-nine-mu.vercel.app",
          featured: "true",
        }
      ];

      for (const p of initialProjects) {
        await db.insert(projects).values(p);
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

// For local development without DATABASE_URL, we default to MemStorage
// In production, DATABASE_URL should be set to use DatabaseStorage
export const storage = new MemStorage();
