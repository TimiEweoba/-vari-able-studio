import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import { ArrowRight, Loader2, ArrowLeft, Plus } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Link } from "wouter";

import { Meta } from "@/components/ui/meta";

export default function CaseStudiesPage() {
    const { data: projects, isLoading } = useQuery<Project[]>({
        queryKey: ["/api/projects"],
    });

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
                                                <button className="flex items-center gap-3 text-sm font-black text-white hover:text-primary transition-all uppercase tracking-[0.2em] group/btn">
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
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 hover:scale-105 transition-all flex items-center gap-4 mx-auto"
                            >
                                Inquire about a project
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
