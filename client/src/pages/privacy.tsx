import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ParticleBackground } from "@/components/ui/particle-background";

export default function PrivacyPage() {
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
            title: "Data Collection",
            content: "We collect only what is essential: your contact info for collaboration, project-specific technical data, and anonymous site usage for performance tuning."
        },
        {
            id: "2",
            title: "Storage Policy",
            content: "Project data is stored in encrypted production databases. Source code is held in private, secure repositories with strict access control and rotate logging."
        },
        {
            id: "3",
            title: "Third-Party Tools",
            content: "We use vetted partners like Stripe (billing) and Vercel (hosting). We never sell your contact info or project data to outside brokers or advertisers."
        },
        {
            id: "4",
            title: "Cookie Usage",
            content: "We use minimal functional cookies to manage sessions and preferences. No invasive tracking or persistent third-party advertising pixels are used by default."
        },
        {
            id: "5",
            title: "Ownership & Portability",
            content: "Your data is yours. Upon project completion or request, we provide full exports of your database and project files as part of our total ownership promise."
        },
        {
            id: "6",
            title: "Communication",
            content: "We only contact you regarding active projects or if you've explicitly joined our insights newsletter. You can opt-out of newsletter comms at any time."
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
                            Privacy Policy
                        </h1>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/10 pt-12 relative">
                            <div className="absolute top-0 left-0 w-px h-12 bg-primary -translate-y-full mt-12" />
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-xs font-bold text-white/30 uppercase tracking-[0.3em]">Trust & Transparency</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-[1.1]">
                                    How we protect and manage <br />your data at <span className="text-primary italic">veri—able</span>
                                </h2>
                                <div className="mt-8 flex items-center gap-3">
                                    <span className="text-sm text-white/40">Reviewed by</span>
                                    <span className="text-sm font-bold text-white">Legal Ops Team</span>
                                    <span className="text-sm text-white/20">veri—able Studio</span>
                                </div>
                            </div>
                            <div className="text-white/20 font-mono text-sm tracking-widest uppercase">
                                Last Updated 01.28.2026
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
                                    <Link href="/privacy" className="text-primary font-bold text-xl hover:translate-x-2 transition-transform">Privacy Policy</Link>
                                    <Link href="/compliance" className="text-white/30 hover:text-white transition-all text-xl hover:translate-x-2">GDPR Compliance</Link>
                                    <Link href="/compliance" className="text-white/30 hover:text-white transition-all text-xl hover:translate-x-2">Data Protection</Link>
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
