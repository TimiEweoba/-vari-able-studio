import { type User, type InsertUser, type ContactRequest, type InsertContactRequest, type Project, type InsertProject, projects } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactRequests: Map<string, ContactRequest>;
  private projects: Map<string, Project>;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.projects = new Map();
    this.seedProjects();
  }

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

export const storage = new MemStorage();
