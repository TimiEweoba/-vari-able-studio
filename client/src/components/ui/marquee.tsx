import { motion } from "framer-motion";

interface MarqueeItem {
    name: string;
    logo: string;
}

interface MarqueeProps {
    items: MarqueeItem[];
    direction?: "left" | "right";
    speed?: number;
}

export function Marquee({ items, direction = "left", speed = 40 }: MarqueeProps) {
    return (
        <div className="flex overflow-hidden select-none py-6 md:py-8 border-y border-white/5 bg-black/20">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{ duration: speed, ease: "linear", repeat: Infinity }}
                className="flex flex-shrink-0 items-center justify-around min-w-full gap-12 md:gap-16 px-4"
            >
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-500">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="h-8 md:h-12 w-auto grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500"
                        />
                        <span className="text-xl md:text-2xl font-bold text-white/20 group-hover:text-white transition-colors duration-500 whitespace-nowrap tracking-tighter">
                            {item.name}
                        </span>
                    </div>
                ))}
                {/* Duplicate for seamless effect */}
                {items.map((item, idx) => (
                    <div key={`duplicate-${idx}`} className="flex items-center gap-6 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-500">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="h-8 md:h-12 w-auto grayscale brightness-200 group-hover:grayscale-0 transition-all duration-500"
                        />
                        <span className="text-xl md:text-2xl font-bold text-white/20 group-hover:text-white transition-colors duration-500 whitespace-nowrap tracking-tighter">
                            {item.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
