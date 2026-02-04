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
            title: "Data Collection & Usage",
            content: "We collect essential contact information (name, email, company) provided through our inquiry forms and reservation portal. This data is used solely for project communication, technical alignment, and providing the services requested. We do not sell or trade your personal information."
        },
        {
            id: "2",
            title: "Reservation & Refund Policy",
            content: "Reservation deposits ($500 / ₦500,000) are fully refundable if requested within 5 business days after onboarding and before any active development or asset provisioning begins. If veri—able Studio declines a project for any reason, the deposit will be returned in full within 7-10 business days."
        },
        {
            id: "3",
            title: "Intellectual Property & Handover",
            content: "Total ownership is our standard. Upon final payment, all source code, database architectures, and design assets are transferred to the client. No recurring licensing fees or vendor lock-ins apply to custom-built deliverables."
        },
        {
            id: "4",
            title: "Security & Retention",
            content: "We implement industry-standard security measures (HTTPS, encryption-at-rest) to protect sensitive project data. We retain client data only as long as necessary for support or legal compliance, typically for 24 months post-handover."
        },
        {
            id: "5",
            title: "Third-Party Services",
            content: "We use trusted partners for core operations: Stripe & Flutterwave for secure payments, and Vercel/Supabase for deployment. Each partner has their own strict privacy standards. We do not share project briefs with external marketing entities."
        },
        {
            id: "6",
            title: "User Rights",
            content: "Clients have the right to request a copy of all information we hold on them, or to request the deletion of their data from our systems. Contact contact@veriable.xyz for all data-related inquiries."
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
