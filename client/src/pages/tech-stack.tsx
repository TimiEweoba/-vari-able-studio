"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Monitor, Smartphone, PenTool, Video, Zap } from "lucide-react";
import Link from "next/link";
import dynamic from 'next/dynamic';
const ParticleBackground = dynamic(() => import('@/components/ui/particle-background').then(mod => mod.ParticleBackground), { ssr: false });;

const techStacks = [
    {
        id: "01",
        title: "Full-Stack Web Engineering",
        description: "We don't just build sites; we architect digital platforms. Utilizing component-driven frontends and highly secure backends to guarantee unmatched speed, scalability, and SEO dominance.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
        tags: [
            { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postgresql.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg" }
        ],
        icon: <Monitor className="w-6 h-6" />
    },
    {
        id: "02",
        title: "Native & Cross-Platform Mobile",
        description: "Delivering iOS and Android experiences that feel incredibly fluid and native. We focus on battery efficiency, low latency, and offline-first capabilities to keep users hooked.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
        tags: [
            { name: "React Native", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg" },
            { name: "Swift", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/swift.svg" },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/kotlin.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/firebase.svg" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/flutter.svg" }
        ],
        icon: <Smartphone className="w-6 h-6" />
    },
    {
        id: "03",
        title: "UI/UX & Product Design",
        description: "A product is only as good as its interface. We conduct deep UX research and design world-class, premium UI systems that are intuitive, beautiful, and strictly aligned with your brand.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        tags: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/figma.svg" },
            { name: "Framer", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/framer.svg" },
            { name: "Spline", icon: "/icons/spline.svg" },
            { name: "Adobe CC", icon: "/icons/cc.svg" }
        ],
        icon: <PenTool className="w-6 h-6" />
    },
    {
        id: "04",
        title: "2D & 3D Motion Graphics",
        description: "Static is boring. We breathe life into your brand through custom 3D models, smooth web micro-interactions, and narrative-driven motion graphics that leave a lasting impression.",
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2532&auto=format&fit=crop",
        tags: [
            { name: "Blender", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/blender.svg" },
            { name: "Cinema 4D", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cinema4d.svg" },
            { name: "After Effects", icon: "/icons/ae.svg" },
            { name: "Lottie", icon: "/icons/lottiefiles.svg" }
        ],
        icon: <Video className="w-6 h-6" />
    }
];



export default function TechStackPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0B] text-[#E3DBD8] font-sans relative">

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
                            What We Build
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/10 pt-12">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-xs font-bold text-white/40 uppercase tracking-[0.3em]">Engineering excellence</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                                    From complex engineering to <br /><span className="text-primary italic">stunning visuals</span>.
                                </h2>
                            </div>
                            <p className="text-white/30 text-sm max-w-[240px] italic leading-relaxed md:text-right">
                                We are a full-service technical studio. We design, engineer, and animate digital products that stand out globally.
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
                                        <Image
                                            src={stack.image}
                                            alt={stack.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 pr-6 flex flex-wrap gap-2 md:gap-3">
                                            {stack.tags.map(tag => (
                                                <div key={tag.name} className="flex items-center gap-1.5 md:gap-2 px-3 flex-shrink-0 md:px-4 py-1.5 md:py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 group/tag hover:bg-white/10 transition-colors">
                                                    <img src={tag.icon} alt={tag.name} className="w-3 h-3 md:w-3.5 md:h-3.5 opacity-70 group-hover/tag:opacity-100 transition-opacity invert brightness-0" />
                                                    <span className="text-[9px] md:text-[10px] whitespace-nowrap font-bold text-white/80 uppercase tracking-widest leading-none">
                                                        {tag.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 max-w-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                            {stack.icon}
                                        </div>
                                        <span className="text-sm font-bold text-primary tracking-[0.3em]">SERVICE — {stack.id}</span>
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
                            Ready to build an <br /><span className="text-primary italic">exceptional</span> product?
                        </h2>
                        <Link href="/#contact" className="group relative inline-flex items-center gap-8 glass-panel rounded-full px-8 md:px-12 py-5 md:py-7 transition-all overflow-hidden w-full md:w-auto justify-center shadow-2xl interactive cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span className="text-white font-black text-sm md:text-xl tracking-tight relative z-10 uppercase">
                                Start your Technical Brief
                            </span>
                            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500 relative z-10 shadow-xl shadow-primary/40">
                                <Zap className="w-5 h-5 md:w-6 md:h-6 leading-none" />
                            </div>
                        </Link>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}




