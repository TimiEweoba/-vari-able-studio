import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

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

    const text = "We run your product launches so you can focus on growth. vari—able is a digital product studio delivering template-first builds, production engineering, and payment integrations — clean, tested, and ready to scale in 14 days.";
    const words = text.split(" ");

    let charCounter = 0;

    return (
        <section
            ref={containerRef}
            className="py-32 md:py-48 min-h-[80vh] flex items-center bg-[#161719]"
        >
            <div className="container mx-auto px-4 md:px-8">
                <p className="text-[11vw] md:text-[8.5vw] lg:text-[7.5vw] font-bold tracking-tighter leading-[0.85] -ml-[0.05em] flex flex-wrap gap-x-[0.25em] gap-y-2">
                    {words.map((word, wordIndex) => {
                        const wordChars = word.split("");
                        return (
                            <span key={wordIndex} className="inline-block whitespace-nowrap">
                                {wordChars.map((char, charIndex) => {
                                    const globalIndex = charCounter;
                                    charCounter++; // Increment for this character

                                    const start = globalIndex / text.length;
                                    const hardOpacity = progress > start ? 1 : 0.1;

                                    return (
                                        <span
                                            key={charIndex}
                                            style={{ opacity: hardOpacity }}
                                            className="text-white transition-opacity duration-75"
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
