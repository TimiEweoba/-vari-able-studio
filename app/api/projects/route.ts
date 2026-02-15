import { NextResponse } from 'next/server';
import { storage } from '@lib/storage';

export async function GET() {
    try {
        console.log("[API] Fetching projects...");
        const projects = await storage.getProjects();
        console.log(`[API] Returning ${projects.length} projects`);
        return NextResponse.json(projects);
    } catch (error: any) {
        console.error("[API] Error fetching projects:", error);
        return NextResponse.json({ message: error.message || "Failed to fetch projects" }, { status: 500 });
    }
}
