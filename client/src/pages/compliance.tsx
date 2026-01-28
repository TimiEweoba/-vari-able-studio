import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ParticleBackground } from "@/components/ui/particle-background";

export default function CompliancePage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
        }
    };

    const sections = [
        {
            id: "1",
            title: "GDPR Alignment",
            content: "All our modular builds are designed with 'Privacy by Design' as a default. We handle data subject requests, portability, and right-to-be-forgotten logic effortlessly."
        },
        {
            id: "2",
            title: "Data Residency",
            content: "We configure your cloud infrastructure to keep data in your preferred region (EU, US, etc.), ensuring compliance with local jurisdictional requirements from day one."
        },
        {
            id: "3",
            title: "Security Hardening",
            content: "Production code includes CORS hardening, rate limiting, and encrypted environment variables. We provide a 'Hardening Checklist' with every technical handover."
        },
        {
            id: "4",
            title: "Access Control",
            content: "We implement fine-grained multi-tier auth systems (Role-Based Access Control) to ensure your internal team members only see the data they need to perform their roles."
        },
        {
            id: "5",
            title: "Audit Readiness",
            content: "While we are a studio and not a hosting provider, our stack is pre-optimized for SOC2 and ISO27001 readiness, making your future auditing process 10x smoother."
        },
        {
            id: "6",
            title: "Monitoring",
            content: "We integrate uptime monitoring, error tracking, and performance profiling into every launch, so you can respond to technical or security incidents in real-time."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0B] text-[#E3DBD8] font-sans selection:bg-primary/30 relative">
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

                        <h1 className="text-[12vw] md:text-[8vw] font-bold text-white tracking-tighter leading-[0.85] mb-16">
                            Compliance
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/10 pt-12 relative">
                            <div className="absolute top-0 left-0 w-px h-12 bg-primary -translate-y-full mt-12" />
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-xs font-bold text-white/30 uppercase tracking-[0.3em]">Global Standards</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-[1.1]">
                                    Engineering products that meet <br />international <span className="text-primary italic">compliance</span> standards
                                </h2>
                                <div className="mt-8 flex items-center gap-3">
                                    <span className="text-sm text-white/40">Directed by</span>
                                    <span className="text-sm font-bold text-white">Technical Architecture Team</span>
                                    <span className="text-sm text-white/20">veri—able Studio</span>
                                </div>
                            </div>
                            <div className="text-white/20 font-mono text-sm tracking-widest uppercase">
                                Verified 01.28.2026
                            </div>
                        </div>
                    </motion.div>

                    {/* Body Section with Sidebar */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Sidebar Navigation */}
                        <aside className="lg:col-span-3">
                            <div className="sticky top-32">
                                <div className="flex items-center gap-3 text-primary mb-10 group cursor-pointer">
                                    <ArrowRight size={18} className="rotate-90 group-hover:translate-y-1 transition-transform" />
                                    <span className="text-xs font-black uppercase tracking-[0.3em]">Quick Links</span>
                                </div>
                                <nav className="flex flex-col gap-6">
                                    <Link href="/terms" className="text-white/30 hover:text-white transition-all text-xl hover:translate-x-2">Terms of Service</Link>
                                    <Link href="/privacy" className="text-white/30 hover:text-white transition-all text-xl hover:translate-x-2">Privacy Policy</Link>
                                    <Link href="/compliance" className="text-primary font-bold text-xl hover:translate-x-2 transition-transform">GDPR Compliance</Link>
                                    <Link href="/compliance" className="text-primary font-bold text-xl hover:translate-x-2 transition-transform">Data Protection</Link>
                                </nav>
                            </div>
                        </aside>

                        {/* Content Grid */}
                        <div className="lg:col-span-9">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
                                {sections.map((section) => (
                                    <div key={section.id} className="bg-[#0A0A0B] p-12 hover:bg-white/[0.02] transition-all group border border-white/5">
                                        <div className="mb-8 flex items-center gap-4">
                                            <span className="text-2xl font-bold text-white/10 group-hover:text-primary transition-colors">{section.id} —</span>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">{section.title}</h3>
                                        </div>
                                        <p className="text-white/40 leading-relaxed text-lg font-medium italic">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
