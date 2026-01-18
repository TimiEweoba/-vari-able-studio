import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function Intro() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.5"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    const text = "We build high-performance digital products at extraordinary velocity. veri—able is your competitive edge in shipping and scaling the future of software.";
    const emphasizedWords = ["high-performance", "velocity.", "competitive", "edge", "shipping", "scaling"];
    const words = text.split(" ");

    let charCounter = 0;

    return (
        <section
            ref={containerRef}
            className="py-32 md:py-48 min-h-[80vh] flex items-center bg-[#161719]"
        >
            <div className="container mx-auto px-4 md:px-8">
                <p className="text-[9vw] md:text-[7vw] lg:text-[6.5vw] font-bold tracking-tighter leading-[0.9] -ml-[0.05em] flex flex-wrap gap-x-[0.3em] gap-y-2">
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
            </div>
            {/* Gradient transition to next section (Dark) */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-[#161719] to-[#050505]" />
        </section>
    );
}
