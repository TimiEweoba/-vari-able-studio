import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '@shared/schema';

if (!process.env.DATABASE_URL && !process.env.MONGO_URI) {
    console.warn("DATABASE_URL is not set and MONGO_URI is missing. Database features will not work.");
}

// Validate that the URL is actually for Postgres/Neon before attempting connection
const isPostgres = process.env.DATABASE_URL && (process.env.DATABASE_URL.startsWith("postgres") || process.env.DATABASE_URL.startsWith("neondb"));

if (process.env.DATABASE_URL && !isPostgres) {
    console.warn("DATABASE_URL is set but does not look like a Postgres URL (e.g. MongoDB). Falling back to in-memory storage.");
}

export const db = isPostgres
    ? drizzle(neon(process.env.DATABASE_URL!), { schema })
    : null as any;
