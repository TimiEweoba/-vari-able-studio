import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useQuery, useMutation } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
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

export default function CaseStudiesPage() {
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);
    const [isReaderOpen, setIsReaderOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { toast } = useToast();

    const { data: projects, isLoading } = useQuery<Project[]>({
        queryKey: ["/api/projects"],
    });

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
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="mb-32"
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-all mb-12 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Studio</span>
                        </Link>

                        <h1 className="text-[12vw] md:text-[10vw] font-bold text-white tracking-tighter leading-[0.8] mb-16">
                            Case <br />Studies.
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/10 pt-12">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs font-bold text-white/40 uppercase tracking-[0.3em]">Engineering Proof</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                                    Real products, real impact. <br />Behind the <span className="text-primary italic">architecture</span> of success.
                                </h2>
                            </div>
                            <p className="text-white/30 text-sm max-w-[280px] italic leading-relaxed md:text-right border-r-2 border-primary/20 pr-6">
                                Explore how we helped founders launch and scale their ideas with production-grade engineering.
                            </p>
                        </div>
                    </motion.div>

                    {/* Projects Listing */}
                    {isLoading ? (
                        <div className="h-96 flex flex-col items-center justify-center gap-6">
                            <Loader2 className="w-12 h-12 text-primary animate-spin" />
                            <p className="text-white/20 font-mono text-sm tracking-widest uppercase">Loading Archive...</p>
                        </div>
                    ) : (
                        <div className="space-y-40">
                            {projects?.map((project, idx) => (
                                <motion.section
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="group"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                                        <div className="lg:col-span-7">
                                            <div className="relative aspect-[16/10] bg-[#141415] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group-hover:border-primary/20 transition-all duration-700">
                                                <img
                                                    src={project.imageUrl}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                                                    <Plus size={24} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-5 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 mb-8">
                                                <span className="text-xs font-bold text-primary tracking-[0.4em] uppercase">{project.category}</span>
                                                <div className="h-px flex-1 bg-white/5" />
                                                <span className="text-xs font-mono text-white/20">0{idx + 1} —</span>
                                            </div>

                                            <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-xl text-white/40 leading-relaxed font-medium italic mb-12">
                                                {project.description}
                                            </p>

                                            <div className="flex gap-6 items-center">
                                                <button
                                                    onClick={() => {
                                                        if (project.title.includes("XPlus")) {
                                                            setIsReaderOpen(true);
                                                        }
                                                    }}
                                                    className="flex items-center gap-3 text-sm font-black text-white hover:text-primary transition-all uppercase tracking-[0.2em] group/btn"
                                                >
                                                    View full breakdown
                                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.section>
                            ))}
                        </div>
                    )}

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
                article={xPlusArticle}
            />

            <Footer />
        </div>
    );
}
