import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useMutation } from "@tanstack/react-query";
import { projects, type Project } from "@/lib/projects";
import { ArrowRight, Loader2, ArrowLeft, Plus, CheckCircle2 } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Link } from "wouter";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { LabsReader } from "@/components/ui/labs-reader";

import { Meta } from "@/components/ui/meta";

const xPlusArticle = {
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
        <ul class="list-disc pl-4 text-white/80 space-y-2 mb-8">
            <li><strong>Frontend:</strong> React 18, Vite, Tailwind CSS, Radix UI, Framer Motion</li>
            <li><strong>Backend:</strong> Node.js, Express 5, Passport.js, WebSocket</li>
            <li><strong>Database:</strong> PostgreSQL with Drizzle ORM</li>
            <li><strong>Integrations:</strong> Flutterwave API (Payments), TanStack Query</li>
        </ul>
        <p>For the Nigerian market, payment reliability is everything. We implemented a robust Flutterwave integration with smart webhooks and automated reconciliation. The result is a checkout experience that handles high-volume traffic with zero friction, optimized for local mobile speeds and network conditions.</p>
    `
};

const pearlArticle = {
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
    `
};

const stephenArticle = {
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
            </ul>
        </div>
    `
};

export default function CaseStudiesPage() {
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);
    const [isReaderOpen, setIsReaderOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<any>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { toast } = useToast();


    const openArticle = (project: Project) => {
        if (project.title.toLowerCase().includes("xplus")) {
            setSelectedArticle(xPlusArticle);
        } else if (project.title.toLowerCase().includes("pearl")) {
            setSelectedArticle(pearlArticle);
        } else if (project.title.toLowerCase().includes("chatapp")) {
            setSelectedArticle(stephenArticle);
        } else {
            // Default or fallback
            setSelectedArticle({
                title: project.title,
                author: "veri—able Team",
                date: "Recent",
                image: project.imageUrl,
                content: `<p>${project.description}</p>`
            });
        }
        setIsReaderOpen(true);
    };

    const inquiryMutation = useMutation({
        mutationFn: async (data: { name: string; email: string; message: string; company: string }) => {
            const res = await apiRequest("POST", "/api/contact", data);
            return res.json();
        },
        onSuccess: () => {
            toast({
                title: "Inquiry Sent",
                description: "Your project brief has been routed to contact@veriable.xyz",
            });
            setIsInquiryOpen(false);
            setName("");
            setEmail("");
            setMessage("");
        },
        onError: (error: Error) => {
            toast({
                title: "Error",
                description: error.message || "Failed to send inquiry.",
                variant: "destructive",
            });
        },
    });

    const handleInquirySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        inquiryMutation.mutate({ name, email, message, company: "Case Study Inquiry" });
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0B] text-[#E3DBD8] font-sans relative selection:bg-primary/30">
            <Meta
                title="Selected Work"
                description="Explore our portfolio of high-performance digital products and technical infrastructure."
            />
            <ParticleBackground />
            <Navbar />

            <main className="pt-40 pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Hero Section */}
                    <div className="mb-40 relative">
                        <Link href="/" className="inline-flex items-center gap-3 text-white/30 hover:text-white transition-all mb-20 group">
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.2em]">Return to Studio</span>
                        </Link>

                        <div className="relative overflow-hidden mb-12 md:mb-24">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(3.5rem,18vw,12rem)] md:text-[14vw] font-bold text-white tracking-tighter leading-[0.75]"
                            >
                                Selected <br />
                                <span className="text-primary italic">Works.</span>
                            </motion.h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-12 md:pt-20 border-t border-white/5 items-start">
                            <div className="lg:col-span-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="flex items-center gap-6 mb-8"
                                >
                                    <div className="h-px w-12 bg-primary" />
                                    <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">Architecture of Success</span>
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-3xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]"
                                >
                                    Real products, real impact. <br />
                                    <span className="text-white/40">Measured in results, not just code.</span>
                                </motion.h2>
                            </div>
                            <div className="lg:col-span-4 lg:text-right flex flex-col items-start lg:items-end justify-between h-full py-4">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="text-white/30 text-sm max-w-[320px] leading-relaxed italic border-l-2 lg:border-l-0 lg:border-r-2 border-primary/20 pl-6 lg:pl-0 lg:pr-6"
                                >
                                    A curated archive of high-performance digital products and technical infrastructure engineered by veri—able.
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Projects Listing */}
                    <div className="space-y-32 md:space-y-64">
                        {projects.map((project, idx) => (
                            <motion.section
                                key={project.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative"
                            >
                                {/* Number Indicator */}
                                <div className="absolute -top-8 md:-top-12 left-0 text-[15vw] md:text-[10vw] font-bold text-white/[0.02] select-none leading-none z-0 pointer-events-none transition-colors group-hover:text-primary/[0.02]">
                                    0{idx + 1}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
                                    <div className="lg:col-span-7">
                                        <div
                                            className="relative aspect-[16/10] bg-[#141415] rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-primary/20 transition-all duration-700 cursor-pointer"
                                            onClick={() => openArticle(project)}
                                        >
                                            <motion.img
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                                            {/* Hover Overlay Title */}
                                            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl">
                                                    <Plus size={32} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 flex flex-col justify-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4 mb-8"
                                        >
                                            <span className="text-[10px] font-black text-primary tracking-[0.5em] uppercase px-3 py-1 bg-primary/10 rounded-full">{project.category}</span>
                                            <div className="h-px w-8 bg-white/10" />
                                        </motion.div>

                                        <h3 className="text-4xl md:text-8xl font-bold text-white mb-6 md:mb-10 tracking-tighter leading-[0.85] group-hover:text-primary transition-colors duration-500">
                                            {project.title.split(" ").map((word, i) => (
                                                <span key={i} className="inline-block mr-4">{word}</span>
                                            ))}
                                        </h3>

                                        <p className="text-lg md:text-2xl text-white/40 leading-relaxed font-medium mb-8 md:mb-12 max-w-lg">
                                            {project.description}
                                        </p>

                                        <div className="flex gap-6 items-center">
                                            <button
                                                onClick={() => openArticle(project)}
                                                className="relative flex items-center gap-4 py-3 px-6 md:py-4 md:px-8 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary rounded-2xl min-h-0 text-sm font-black text-white transition-all group/btn overflow-hidden"
                                            >
                                                <span className="relative z-10 uppercase tracking-[0.2em]">View breakdown</span>
                                                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    {/* Bottom Call to Action */}
                    <section className="mt-60 py-32 border-t border-white/5 text-center relative overflow-hidden rounded-[3rem] bg-white/[0.02]">
                        <div className="relative z-10">
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-12 leading-none">
                                Start your <br /><span className="text-primary italic">next chapter</span> with us.
                            </h2>
                            <button
                                onClick={() => setIsInquiryOpen(true)}
                                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 transition-all flex items-center gap-4 mx-auto"
                            >
                                Inquire about a project
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            <Dialog open={isInquiryOpen} onOpenChange={setIsInquiryOpen}>
                <DialogContent className="bg-[#161719] border-white/10 text-white sm:max-w-[500px] rounded-[2rem]">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-bold tracking-tight">Project Inquiry</DialogTitle>
                        <DialogDescription className="text-white/40">
                            Tell us about your project brief. We'll route this to contact@veriable.xyz and respond within 24 hours.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleInquirySubmit} className="space-y-6 mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="inquiry-name" className="text-sm font-medium text-white/80">Your Name</Label>
                            <Input
                                id="inquiry-name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-white/5 border-white/10 focus:border-primary text-white h-12 rounded-xl"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="inquiry-email" className="text-sm font-medium text-white/80">Email Address</Label>
                            <Input
                                id="inquiry-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white/5 border-white/10 focus:border-primary text-white h-12 rounded-xl"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="inquiry-message" className="text-sm font-medium text-white/80">Project Brief</Label>
                            <textarea
                                id="inquiry-message"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:border-primary text-white outline-none text-sm transition-colors resize-none"
                                placeholder="Describe your project goals, timeline, and budget..."
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={inquiryMutation.isPending}
                            className="w-full h-14 text-base font-bold rounded-xl"
                        >
                            {inquiryMutation.isPending ? (
                                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            ) : (
                                <>
                                    Send Inquiry
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

            <LabsReader
                isOpen={isReaderOpen}
                onClose={() => setIsReaderOpen(false)}
                article={selectedArticle}
            />

            <Footer />
        </div>
    );
}
