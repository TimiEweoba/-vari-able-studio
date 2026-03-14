"use client";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

export function Intro() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.7", "start 0.3"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    const text = "We build beautiful, fast websites at incredible speed. veri—able is your secret weapon for getting online and growing your business.";
    const emphasizedWords = ["beautiful,", "fast", "speed.", "secret", "weapon", "growing"];
    const words = text.split(" ");

    let charCounter = 0;

    return (
        <section
            ref={containerRef}
            className="py-24 md:py-32 bg-[#161719] relative overflow-hidden border-t border-white/5"
        >
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                    {/* Action Area with Content Reveal */}
                    <div className="lg:col-span-7 space-y-8 pb-4">
                        <div className="space-y-6">
                            {/* Animated Text replacing "See veri-able in action" */}
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.2] flex flex-wrap gap-x-[0.2em] gap-y-1 mb-6">
                                {words.map((word, wordIndex) => {
                                    const wordChars = word.split("");
                                    const isEmphasized = emphasizedWords.includes(word.replace(/[,.]/g, ""));

                                    return (
                                        <span key={wordIndex} className={cn(
                                            "inline-block whitespace-nowrap transition-all duration-700",
                                            isEmphasized ? "text-primary italic" : "text-white"
                                        )}>
                                            {wordChars.map((char, charIndex) => {
                                                const globalIndex = charCounter;
                                                charCounter++;

                                                const start = globalIndex / text.length;
                                                const hardOpacity = progress > start ? 1 : 0.15;

                                                return (
                                                    <span
                                                        key={charIndex}
                                                        style={{ opacity: hardOpacity }}
                                                        className="transition-opacity duration-150"
                                                    >
                                                        {char}
                                                    </span>
                                                );
                                            })}
                                        </span>
                                    );
                                })}
                            </p>


                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button
                                    onClick={() => window.location.href = "/promo"}
                                    className="group relative inline-flex items-center gap-4 glass-panel rounded-full px-6 py-3 md:py-4 transition-all overflow-hidden w-full sm:w-auto justify-center shadow-2xl interactive cursor-pointer border-none"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <span className="text-white font-black text-xs md:text-sm tracking-tight relative z-10 uppercase flex items-center gap-2">
                                        <Gift className="w-4 h-4" />
                                        Free Preview Promo
                                    </span>
                                    <div className="w-8 h-8 shrink-0 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500 relative z-10 shadow-xl shadow-primary/40">
                                        <ArrowRight className="w-4 h-4 leading-none" />
                                    </div>
                                </button>
                                <button
                                    onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                                    className="inline-flex items-center justify-center px-6 py-3 md:py-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-primary transition-all font-bold text-xs md:text-sm uppercase tracking-tight interactive w-full sm:w-auto"
                                >
                                    Reserve a Spot — $500 / ₦500k
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Area (Moved from Hero) */}
                    <div className="lg:col-span-5 flex flex-col md:flex-row gap-8 lg:gap-12 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 lg:justify-end pb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-white font-medium text-lg mb-1">Typical delivery time</h4>
                            <p className="text-3xl font-bold text-primary">7–14 days <span className="text-base font-normal text-muted-foreground">(pilot)</span></p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col justify-center min-w-0"
                        >
                            <h4 className="text-white font-medium text-lg mb-1">Includes</h4>
                            <p className="text-muted-foreground whitespace-normal break-words">100% yours to own</p>
                            <p className="text-muted-foreground whitespace-normal break-words">30 days of dedicated help</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Gradient transition to next section (Dark) */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-[#161719] to-[#050505] z-0 pointer-events-none" />
        </section >
    );
}



