export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    link: string;
    featured: string;
}

export const projects: Project[] = [
    {
        id: "3",
        title: "Pearl Hope Portfolio",
        description: "A premium Web3-focused digital identity and content architecture hub.",
        category: "Digital Presence",
        imageUrl: "/backgrounds/pearl.png",
        link: "https://www.web3pearl.online/",
        featured: "true",
    },
    {
        id: "4",
        title: "ChatApp",
        description: "Enterprise-grade end-to-end encrypted messaging platform with a premium design.",
        category: "Messaging",
        imageUrl: "/backgrounds/stephen.png",
        link: "https://chatapp-nine-mu.vercel.app",
        featured: "true",
    },
    {
        id: "1",
        title: "TenantFlow — Landlord CRM template",
        description: "A vertical starter product for small landlords. Listings, tenant onboarding, rent collection, and basic analytics.",
        category: "Featured",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        link: "#",
        featured: "false",
    },
    {
        id: "2",
        title: "XPlus Commerce",
        description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
        category: "E-commerce",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
        link: "https://xplus.com.ng",
        featured: "false",
    },
    {
        id: "5",
        title: "Stripe Billing",
        description: "Customer portal, subscriptions.",
        category: "Integration",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        link: "#",
        featured: "false",
    },
    {
        id: "6",
        title: "Admin Panel",
        description: "Role management, user controls.",
        category: "Infrastructure",
        imageUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
        link: "#",
        featured: "false",
    }
];
