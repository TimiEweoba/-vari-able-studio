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
        id: "2",
        title: "XPlus Commerce",
        description: "A high-performance e-commerce platform built for the Nigerian market. Features real-time inventory, secure payments via Flutterwave, and a modular architecture for rapid scaling.",
        category: "E-commerce",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
        link: "https://xplus.com.ng",
        featured: "true",
    },
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
        featured: "false",
    }
];
