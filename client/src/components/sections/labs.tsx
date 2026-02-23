import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LabsReader } from "@/components/ui/labs-reader";

export function Labs() {
    const [selectedArticle, setSelectedArticle] = useState<any>(null);
    const [isReaderOpen, setIsReaderOpen] = useState(false);

    const openArticle = (article: any) => {
        setSelectedArticle(article);
        setIsReaderOpen(true);
    };

    const articles = [
        {
            author: "Timi Eweoba",
            authorImage: "/images/team/timi.png",
            date: "Monday, April 28, 2025",
            title: "How we launched a landlord CRM in 14 days",
            image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2573&auto=format&fit=crop",
            content: `
                <p>Speed isn't just about coding faster; it's about making decisions faster. When we set out to build the Landlord CRM for a UK-based property group, we had a strict 14-day timeline. Here's how we pulled it off.</p>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">The Constraints</h3>
                <p>To hit the deadline, we had to be ruthless with scope. We agreed on three core features: Tenant Onboarding, Rent Collection (via Stripe), and Maintenance Requests. Anything else was pushed to v2. This "constraint-first" approach is why veri—able launches succeed where others stall.</p>
                <div class="my-10 p-6 bg-black rounded-xl border border-white/10 font-mono text-sm overflow-hidden relative group">
                    <div class="absolute top-0 right-0 p-2 text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-primary transition-colors">Strategy</div>
                    <div class="text-primary/40 mb-4">// The 14-Day Protocol</div>
                    <ul class="list-disc pl-4 text-white/80 space-y-2">
                        <li>Day 0-1: Discovery & Scope Lock</li>
                        <li>Day 2-5: Database & Auth Implementation</li>
                        <li>Day 6-10: Frontend & Stripe Integration</li>
                        <li>Day 11-13: QA & Client Demo</li>
                        <li>Day 14: Production Deploy</li>
                    </ul>
                </div>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">The Stack</h3>
                <p>We used our internal <strong>veri—able Core</strong> boilerplate. It comes pre-wired with Authentication, PostgreSQL schema, and UI components. This saved us about 100 hours of initial setup, allowing us to focus purely on the business logic of property management.</p>
            `
        },
        {
            author: "Okpandu Dennis",
            authorImage: "/images/team/dennis.jpg",
            date: "Friday, February 6, 2026",
            title: "Web3 Social Media & Digital Content Architecture: The Pearl Hope Case Study",
            image: "/backgrounds/pearl.png",
            images: [
                "/casestudypics/pearl/pearl1.png",
                "/casestudypics/pearl/pearl2.png",
                "/casestudypics/pearl/pearl3.png",
                "/casestudypics/pearl/pearl4.png",
                "/casestudypics/pearl/pearl5.png",
                "/casestudypics/pearl/pearl6.png",
                "/casestudypics/pearl/pearl7.png",
                "/casestudypics/pearl/pearl8.png",
                "/casestudypics/pearl/pearl9.png",
                "/casestudypics/pearl/pearl10.png"
            ],
            content: `
                <p>Building a digital presence in the Web3 space requires more than just a list of skills; it requires a narrative. For Pearl Hope, a Web3 Social Media Intern and Writer, we designed a portfolio that serves as both a resume and a proof of work.</p>
                <div class="my-10 p-6 bg-black rounded-xl border border-white/10 font-mono text-sm overflow-hidden relative group">
                    <div class="absolute top-0 right-0 p-2 text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-primary transition-colors">Digital Identity</div>
                    <div class="text-primary/40 mb-4">// Portfolio Overview</div>
                    <ul class="list-disc pl-4 text-white/80 space-y-2">
                        <li><strong>Role:</strong> Web3 Social Media Intern & Writer</li>
                        <li><strong>Website:</strong> <a href="https://www.web3pearl.online/" target="_blank" class="text-primary hover:underline">www.web3pearl.online</a></li>
                        <li><strong>Focus:</strong> Content Strategy, Community Building, Technical Writing</li>
                    </ul>
                </div>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">Functional Presence</h3>
                <p>In the decentralized world, accessibility is key. We designed a professional ecosystem that ensures founders and collaborators can understand her value proposition immediately.</p>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">Linked Projects & Digital Products</h3>
                <p>The portfolio isn't just static text—it's a hub for her digital products and projects. From Web3 guides to community-focused content, everything is linked to provide a comprehensive look at her contributions to the ecosystem.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div class="p-4 bg-white/5 rounded-lg border border-white/10 transition-colors hover:border-primary/50">
                        <h4 class="text-white font-bold mb-2">Web3 Social Strategy</h4>
                        <p class="text-sm text-white/60">Comprehensive guides on building community in a decentralized landscape.</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded-lg border border-white/10 transition-colors hover:border-primary/50">
                        <h4 class="text-white font-bold mb-2">Technical Writing</h4>
                        <p class="text-sm text-white/60">In-depth breakdowns of blockchain protocols and DeFi ecosystems.</p>
                    </div>
                </div>
            `
        },
        {
            author: "Timi Eweoba",
            authorImage: "/images/team/timi.png",
            date: "Wednesday, March 5, 2025",
            title: "Packaging an agency service into a template that sells",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            content: `
                <p>The transition from "selling your time" to "selling a product" is the hardest leap for an agency. We did it by identifying our most repeated service—web development—and turning it into a fixed-price, fixed-scope SKU.</p>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">Standardization is Key</h3>
                <p>You can't productize chaos. We documented every step of our build process. We created a "Master Template" in Figma that covers 80% of client needs. Now, when a client signs up, we aren't starting from a blank canvas; we are customizing a proven system.</p>
                <p>This allows us to offer transparent pricing (see our Pricing page) because we know exactly how many hours a project will take. No variability, no scope creep, just delivery.</p>
            `
        },
        {
            author: "Eleojo Arawa",
            authorImage: "/images/team/eleojo.jpg",
            date: "Sunday, February 2, 2025",
            title: "Landing page teardown: 5 hooks that drive+20% conversion",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
            content: `
                <p>Your hero section has 3 seconds to answer one question: "What do I get?" If the user has to scroll to find out, you've lost them. I focus on high-impact typography and visual hierarchy to guide the eye.</p>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">1. The Value Proposition</h3>
                <p>Don't be clever, be clear. "We use AI to optimize synergy" means nothing. "Get paid 2x faster" means everything. I always push our clients to focus on the benefit, not the features.</p>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">2. Visual Continuity</h3>
                <p>The colors and fonts in your ad or social post must match the landing page 1:1. Any disconnect causes cognitive dissonance and increases bounce rates. We maintain a shared design token system (variables.css) that powers both our marketing assets and the production app.</p>
            `
        },
        {
            author: "Timi Eweoba",
            authorImage: "/images/team/timi.png",
            date: "Tuesday, June 17, 2025",
            title: "Engineering XPlus: Launching a high-performance e-commerce engine in 7 days",
            image: "/images/xplus-hero.png",
            content: `
                <p>Building a production-ready e-commerce platform in a single week sounds impossible. For XPlus, it was a necessity. Operating in Nigeria's fast-paced tech market, they needed a solution that was robust, secure, and lightning-fast. Here's how we engineered the XPlus engine.</p>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">The Performance Results</h3>
                <div class="my-10 grid grid-cols-2 gap-4">
                    <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <div class="text-primary text-3xl font-bold mb-1">99.9%</div>
                        <div class="text-[10px] text-white/40 uppercase tracking-widest font-black">Uptime</div>
                    </div>
                    <div class="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <div class="text-primary text-3xl font-bold mb-1">0.8s</div>
                        <div class="text-[10px] text-white/40 uppercase tracking-widest font-black">Avg. Load Time</div>
                    </div>
                </div>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">The Modern Commerce Stack</h3>
                <p>We leveraged a production-ready stack designed for performance and type safety. By sharing Zod schemas between the React 18 frontend and Node.js/Express 5 backend, we eliminated entire classes of data-related bugs before they could even occur.</p>
                <div class="my-10 p-6 bg-black rounded-xl border border-white/10 font-mono text-sm overflow-hidden relative group">
                    <div class="absolute top-0 right-0 p-2 text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-primary transition-colors">Tech Architecture</div>
                    <div class="text-primary/40 mb-4">// Production Specifications</div>
                    <ul class="list-disc pl-4 text-white/80 space-y-2">
                        <li><strong>Frontend:</strong> React 18, Vite, Tailwind CSS, Radix UI, Framer Motion</li>
                        <li><strong>Backend:</strong> Node.js, Express 5, Passport.js, WebSocket</li>
                        <li><strong>Database:</strong> PostgreSQL with Drizzle ORM</li>
                        <li><strong>Integrations:</strong> Flutterwave API (Payments), TanStack Query</li>
                        <li><strong>Deployment:</strong> Vercel Infrastructure</li>
                    </ul>
                </div>
                <h3 class="text-white text-2xl font-bold mt-12 mb-4">Flutterwave & Local Optimization</h3>
                <p>For the Nigerian market, payment reliability is everything. We implemented a robust Flutterwave integration with smart webhooks and automated reconciliation. The result is a checkout experience that handles high-volume traffic with zero friction, optimized for local mobile speeds and network conditions.</p>
            `
        },
        {
            author: "Okpandu Dennis",
            authorImage: "/images/team/dennis.jpg",
            date: "Monday, February 9, 2026",
            title: "ChatApp: Stephen Kodaolu's Enterprise-Grade Messaging Case Study",
            image: "/backgrounds/stephen.png",
            images: [
                "/casestudypics/stephen/chatapp1.png",
                "/casestudypics/stephen/chatapp2.png",
                "/casestudypics/stephen/chatapp3.png",
                "/casestudypics/stephen/chatapp4.png",
                "/casestudypics/stephen/chatapp5.png",
                "/casestudypics/stephen/chatapp6.png",
                "/casestudypics/stephen/chatapp8.png",
                "/casestudypics/stephen/chatapp9.png",
                "/casestudypics/stephen/chatapp10.png"
            ],
            content: `
                <p>ChatApp is a premium, end-to-end encrypted messaging platform featuring a modern Orange-accented design with full Light/Dark mode support. Built as a secure real-time communication tool, it bridges the gap between high-level security and consumer-grade usability.</p>
                
                <div class="my-10 p-6 bg-black rounded-xl border border-white/10 font-mono text-sm overflow-hidden relative group">
                    <div class="absolute top-0 right-0 p-2 text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-primary transition-colors">Tech Stack</div>
                    <div class="text-primary/40 mb-4">// System Architecture</div>
                    <ul class="list-disc pl-4 text-white/80 space-y-2">
                        <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Framer Motion</li>
                        <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
                        <li><strong>Real-Time:</strong> Socket.io (Typing indicators, Online status)</li>
                        <li><strong>Security:</strong> Web Crypto API (RSA-OAEP / AES-GCM)</li>
                    </ul>
                </div>

                <h3 class="text-white text-2xl font-bold mt-12 mb-4">Robust Security (E2EE)</h3>
                <p>At the core of ChatApp is a zero-knowledge security model. Messages are encrypted on the sender's device and can only be decrypted by the intended recipient. The server never sees plain text, ensuring absolute privacy. We also implemented self-healing keys that automatically repair encryption if local storage is cleared.</p>

                <h3 class="text-white text-2xl font-bold mt-12 mb-4">Premium Design System</h3>
                <p>The UI utilizes a "Glassmorphism" aesthetic with vibrant Orange branding. We built a dual-theme engine for instant switching between Light and Dark modes, paired with fluid animations from Framer Motion to create a premium, reactive experience.</p>

                <div class="my-10 p-6 bg-[#1A1A1A] rounded-xl border border-white/10">
                    <h4 class="text-primary font-bold mb-4 uppercase tracking-tighter italic">Live Preview Available</h4>
                    <p class="text-white/80 text-sm mb-4">Explore the architectural implementation and secure messaging flow.</p>
                    <a href="https://chatapp-nine-mu.vercel.app" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/80 transition-all">
                        Launch ChatApp Demo
                    </a>
                </div>
            `
        }
    ];
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
        }
    };



    return (
        <section id="labs" className="py-24 bg-[#050505] text-[#E3DBD8]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-white/20 mb-12 select-none"
                    >
                        veri—able Labs®
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
                            <span className="block text-2xl font-bold mb-1 text-white leading-none">009</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Intelligence</span>
                        </div>
                        <div className="md:col-span-6">
                            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                                Case studies, launch playbooks, billing guides, template teardowns.
                            </h3>
                        </div>
                        <div className="md:col-span-4 flex items-end justify-end md:h-full">
                            <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                                Actionable posts meant to attract founders and agencies. Proven systems that actually work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 md:px-6">
                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: idx * 0.1, ...fadeInUp.visible.transition } } }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => openArticle(article)}
                            className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-[#1C1D20] border border-white/5 cursor-pointer interactive"
                            data-cursor="Read"
                        >
                            {/* Background Image */}
                            <img
                                src={article.image}
                                alt={article.title}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 md:opacity-60 md:grayscale group-hover:grayscale-0 group-hover:opacity-100"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:from-black/70 transition-all duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                                <div className="flex justify-between items-start text-[10px] tracking-widest uppercase font-black text-white/40">
                                    <span>{article.author}</span>
                                    <span>{article.date}</span>
                                </div>

                                <div className="mb-20 md:mb-0">
                                    <h3 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] max-w-lg mb-8 group-hover:text-primary transition-colors duration-500 tracking-tighter">
                                        {article.title}
                                    </h3>
                                </div>

                                {/* Button */}
                                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                                    <div className="w-14 h-14 bg-white/5 backdrop-blur-md group-hover:bg-primary border border-white/10 group-hover:border-primary rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-active:scale-95 shadow-2xl">
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <LabsReader
                    isOpen={isReaderOpen}
                    onClose={() => setIsReaderOpen(false)}
                    article={selectedArticle}
                />
            </div>
        </section>
    );
}
