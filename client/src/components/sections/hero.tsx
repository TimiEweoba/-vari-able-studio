import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Activity, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function Hero() {

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Top Tagline */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-4 md:left-6 text-muted-foreground/60 text-sm hidden md:block"
                >
                    Building the future of digital.
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Main Headline */}
                    <div className="lg:col-span-12">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-[11vw] md:text-[8.5vw] lg:text-[7.5vw] font-bold tracking-tighter text-white leading-[0.85] mb-8"
                        >
                            <span className="block border-t-4 border-primary w-24 mb-6 md:mb-8"></span>
                            Launch <br />
                            production-ready <br />
                            products in <br />
                            <span className="text-primary">7–14 days.</span>
                        </motion.h1>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                    {/* Action Area */}
                    <div className="lg:col-span-6 space-y-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">See veri—able in action</h3>
                            <p className="text-muted-foreground max-w-lg leading-relaxed mb-8">
                                Join our guided tour and explore the product, billing flow, and deployment live. We convert services into monetizable products — white-label code, Stripe billing, one-click deploys, and 30-day priority support.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 flex items-center gap-2 group w-full sm:w-auto"
                                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book a Demo
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-6 text-base rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-primary transition-all w-full sm:w-auto"
                                    onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    Reserve a Spot — $500 / ₦500k
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Area */}
                    <div className="lg:col-span-6 flex flex-col md:flex-row gap-8 lg:gap-12 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h4 className="text-white font-medium text-lg mb-1">Average launch time</h4>
                            <p className="text-3xl font-bold text-primary">7–14 days <span className="text-base font-normal text-muted-foreground">(pilot)</span></p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col justify-center"
                        >
                            <h4 className="text-white font-medium text-lg mb-1">Includes</h4>
                            <p className="text-muted-foreground">White-label ownership</p>
                            <p className="text-muted-foreground">30-day priority support</p>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
