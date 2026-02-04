import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, ArrowRight, Cpu, Layers, Zap, Shield, Database, Layout } from "lucide-react";
import { Link } from "wouter";
import { ParticleBackground } from "@/components/ui/particle-background";

const techStacks = [
    {
        id: "01",
        title: "Modular UI Foundations",
        description: "Our proprietary React components and Framer Motion orchestrations allow us to ship premium, reactive interfaces in days, not months.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        tags: ["React", "Tailwind", "Framer Motion"],
        icon: <Layout className="w-6 h-6" />
    },
    {
        id: "02",
        title: "Backend Engines",
        description: "High-performance Node.js and Drizzle-powered infrastructures with opinionated schema patterns for rapid data iteration.",
        image: "https://images.unsplash.com/photo-1544383335-c54997007543?q=80&w=2626&auto=format&fit=crop",
        tags: ["Node.js", "PostgreSQL", "Drizzle"],
        icon: <Database className="w-6 h-6" />
    },
    {
        id: "03",
        title: "Cloud Infrastructure",
        description: "One-click deployment pipelines using Vercel and Docker. We automate CI/CD so your delivery is always continuous.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        tags: ["Vercel", "AWS", "Docker"],
        icon: <Layers className="w-6 h-6" />
    },
    {
        id: "04",
        title: "Security & Operations",
        description: "System hardening, automated backups, and SOC2-ready hosting configurations are standard on all our production builds.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
        tags: ["SSL", "Auth.js", "RBAC"],
        icon: <Shield className="w-6 h-6" />
    }
];

import { Meta } from "@/components/ui/meta";

export default function TechStackPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0B] text-[#E3DBD8] font-sans relative">
            <Meta
                title="The Stack"
                description="Our proprietary technical stack designed for speed, security, and infinite scale."
            />
            <ParticleBackground />
            <Navbar />

            <main className="pt-40 pb-32">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-32"
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-all mb-12 group">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-medium">Back to Studio</span>
                        </Link>

                        <h1 className="text-[12vw] md:text-[8vw] font-bold text-white tracking-tighter leading-[0.85] mb-12">
                            Tech Stack
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/10 pt-12">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-xs font-bold text-white/40 uppercase tracking-[0.3em]">Engineering excellence</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                                    Our opinionated foundation for <br /><span className="text-primary italic">high-performance</span> digital products.
                                </h2>
                            </div>
                            <p className="text-white/30 text-sm max-w-[240px] italic leading-relaxed md:text-right">
                                We don't just build features; we build systems. Every stack is chosen for maximum durability and speed.
                            </p>
                        </div>
                    </motion.div>

                    {/* Detailed Tech List */}
                    <div className="space-y-32">
                        {techStacks.map((stack, i) => (
                            <motion.section
                                key={stack.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                            >
                                <div className="flex-1 w-full">
                                    <div className="aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative group">
                                        <img
                                            src={stack.image}
                                            alt={stack.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-10 left-10 flex gap-3">
                                            {stack.tags.map(tag => (
                                                <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 max-w-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                            {stack.icon}
                                        </div>
                                        <span className="text-sm font-bold text-primary tracking-[0.3em]">ENGINE — {stack.id}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-none">
                                        {stack.title}
                                    </h3>
                                    <p className="text-xl text-white/40 leading-relaxed italic mb-12">
                                        {stack.description}
                                    </p>
                                    <div className="h-px w-full bg-white/10" />
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <section className="mt-48 py-32 border-t border-white/5 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-12 leading-none">
                            Ready to build on a <br /><span className="text-primary italic">proven</span> foundation?
                        </h2>
                        <Link href="/#contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 flex items-center gap-4 mx-auto"
                            >
                                Start your Technical Brief
                                <Zap size={20} />
                            </motion.button>
                        </Link>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
