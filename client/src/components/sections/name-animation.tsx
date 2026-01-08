import { motion } from "framer-motion";

const MarqueeRow = ({
    text,
    subText,
    speed = 20,
    className = "",
    reverse = false
}: {
    text: string,
    subText: string,
    speed?: number,
    className?: string,
    reverse?: boolean
}) => {
    const items = [...Array(10)].map((_, i) => (
        <div key={i} className="flex flex-col items-center justify-center px-6 md:px-16 shrink-0">
            <span className="font-medium tracking-tighter leading-none relative">
                {text}
                <sup className="absolute -top-2 -right-6 md:-top-8 md:-right-12 text-[10px] md:text-2xl font-normal opacity-60">TM</sup>
            </span>
            <span className="text-[10px] md:text-lg font-normal tracking-wide mt-1 md:mt-4 opacity-80 text-center max-w-[150px] md:max-w-none whitespace-normal md:whitespace-nowrap">
                {subText}
            </span>
        </div>
    ));

    return (
        <div className="flex relative overflow-hidden w-full">
            <motion.div
                animate={{
                    x: reverse ? [0, "50%"] : ["0%", "-50%"]
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                className={`flex whitespace-nowrap ${className}`}
            >
                {items}
                {items}
            </motion.div>
        </div>
    );
};

export function NameAnimation() {
    return (
        <>
            <section className="py-16 md:py-24 bg-primary text-white overflow-hidden flex flex-col gap-4 md:gap-8 select-none border-t border-white/10">

                {/* Top Row - Small */}
                <MarqueeRow
                    text="vari—able"
                    subText="Your software business, streamlined for growth."
                    speed={60}
                    className="text-[10vw] md:text-[5vw] text-white/90"
                />

                {/* Middle Row - Medium */}
                <MarqueeRow
                    text="vari—able"
                    subText="The smarter way to build, run, and scale software."
                    speed={50}
                    className="text-[18vw] md:text-[10vw] text-white"
                />

                {/* Bottom Row - Large */}
                <MarqueeRow
                    text="vari—able"
                    subText="Where running and growing your software business gets simple."
                    speed={40}
                    className="text-[28vw] md:text-[18vw] text-white/90"
                />

            </section>
        </>
    );
}
