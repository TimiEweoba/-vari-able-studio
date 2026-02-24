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
        offset: ["start 1.2", "end 1.3"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    const text = "We build high-performance digital products at extraordinary speed. veri—able is your competitive edge in shipping and scaling your future software.";
    const emphasizedWords = ["high-performance", "speed.", "competitive", "edge", "shipping", "scaling"];
    const words = text.split(" ");

    let charCounter = 0;

    return (
        <section
            ref={containerRef}
            className="py-24 md:py-32 bg-[#161719] relative overflow-hidden border-t border-white/5"
        >
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                    {/* Action Area with Content Reveal */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-6">
                            {/* Animated Text replacing "See veri-able in action" */}
                            <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-[1.2] flex flex-wrap gap-x-[0.2em] gap-y-1 mb-6">
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

                            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-8">
                                Join our guided tour and explore the product, billing flow, and deployment live. We convert services into monetizable products — white-label code, Stripe billing, one-click deploys, and 30-day priority support.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 flex items-center gap-2 group w-full sm:w-auto"
                                        onClick={() => window.location.href = "/promo"}
                                    >
                                        <Gift className="w-5 h-5" />
                                        Free Preview Promo 🎁
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
                        </div>
                    </div>

                    {/* Stats Area (Moved from Hero) */}
                    <div className="lg:col-span-5 flex flex-col md:flex-row gap-8 lg:gap-12 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-white font-medium text-lg mb-1">Average launch time</h4>
                            <p className="text-3xl font-bold text-primary">7–14 days <span className="text-base font-normal text-muted-foreground">(pilot)</span></p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col justify-center"
                        >
                            <h4 className="text-white font-medium text-lg mb-1">Includes</h4>
                            <p className="text-muted-foreground">White-label ownership</p>
                            <p className="text-muted-foreground">30-day priority support</p>
                        </motion.div>
                    </div>

                </div>
            </div>
            {/* Gradient transition to next section (Dark) */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-[#161719] to-[#050505]" />
        </section>
    );
}
