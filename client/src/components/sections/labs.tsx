import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Labs() {
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
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#52525B] mb-12"
                    >
                        vari—able Labs®
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l-2 border-primary/20 pl-6 md:pl-0 md:border-l-0">
                        <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6">
                            <span className="block text-2xl font-bold mb-1">009</span>
                            <span className="text-sm text-muted-foreground">vari—able</span>
                        </div>
                        <div className="md:col-span-6">
                            <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                                Case studies, launch playbooks, billing guides, template teardowns.
                            </h3>
                        </div>
                        <div className="md:col-span-4 flex items-end justify-end">
                            <p className="text-muted-foreground text-right max-w-[200px]">
                                Actionable posts meant to attract founders and agencies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 md:px-6">
                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            author: "Timi Eweoba",
                            date: "Monday, April 28, 2025",
                            title: "How we launched a landlord CRM in 14 days",
                            image: "/images/landlord-crm.png"
                        },
                        {
                            author: "Dennis Okpandu",
                            date: "Wednesday, April 2, 2025",
                            title: "Stripe flows that convert: the exact steps we use",
                            image: "/images/stripe-flows.png"
                        },
                        {
                            author: "Timi Eweoba",
                            date: "Wednesday, March 5, 2025",
                            title: "Packaging an agency service into a template that sells",
                            image: "/images/agency-template.png"
                        },
                        {
                            author: "Eleojo Arawa",
                            date: "Sunday, February 2, 2025",
                            title: "Landing page teardown: 5 hooks that drive +20% conversion",
                            image: "/images/landing-page-teardown.png"
                        }
                    ].map((article, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: idx * 0.1, ...fadeInUp.visible.transition } } }}
                            className="group relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-[#1C1D20] border border-white/5"
                        >
                            {/* Background Image */}
                            <img
                                src={article.image}
                                alt={article.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                                <div className="flex justify-between items-start text-sm font-medium text-white/80">
                                    <span>Written by {article.author}</span>
                                    <span>{article.date}</span>
                                </div>

                                <div className="mb-20 md:mb-0">
                                    <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight max-w-lg mb-8 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                </div>

                                {/* Button */}
                                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                                    <button className="w-14 h-14 bg-[#FA6E43] hover:bg-[#FA6E43]/90 rounded-2xl flex items-center justify-center text-white transition-all hover:scale-105">
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
