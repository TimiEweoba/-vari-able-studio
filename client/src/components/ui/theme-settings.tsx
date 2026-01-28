import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, Palette, Terminal as TerminalIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ACCENT_COLORS = [
    { name: "Original", color: "#FA6E43" },
    { name: "Cyan", color: "#00F5FF" },
    { name: "Lime", color: "#BFFF00" },
    { name: "Violet", color: "#9D00FF" },
];

export function ThemeSettings() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeColor, setActiveColor] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('veriable-accent-color') || ACCENT_COLORS[0].color;
        }
        return ACCENT_COLORS[0].color;
    });

    useEffect(() => {
        localStorage.setItem('veriable-accent-color', activeColor);
        const root = document.documentElement;

        // Helper to convert hex to RGB for components that might need it
        const hexToRgb = (hex: string) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `${r}, ${g}, ${b}`;
        };

        const rgbString = hexToRgb(activeColor);

        // Apply theme variables that Tailwind 4 @theme inline uses
        root.style.setProperty("--primary", activeColor);
        root.style.setProperty("--accent", activeColor);
        root.style.setProperty("--primary-rgb", rgbString);

        // Direct Tailwind variable overrides for immediate reactivity
        root.style.setProperty("--color-primary", activeColor);
        root.style.setProperty("--color-accent", activeColor);
        root.style.setProperty("--color-ring", activeColor);

        // Update body data attribute for conditional styling
        document.body.setAttribute('data-theme-color', activeColor);
    }, [activeColor]);

    return (
        <div className="fixed bottom-6 right-6 z-[1000]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-[#1C1D20]/80 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all group backdrop-blur-xl pointer-events-auto"
            >
                {isOpen ? <X className="w-5 h-5 text-white" /> : <Settings2 className="w-5 h-5 text-white group-hover:rotate-45 transition-transform" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-16 right-0 bg-[#1C1D20]/95 border border-white/10 p-6 rounded-2xl backdrop-blur-2xl w-64 shadow-2xl pointer-events-auto"
                    >
                        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                            <Palette className="w-4 h-4 text-primary" />
                            <span className="text-xs uppercase tracking-widest font-black text-white/40">Lab Experiments</span>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] uppercase tracking-widest font-black text-white/20 block mb-3">Accent Module</label>
                                <div className="flex gap-2">
                                    {ACCENT_COLORS.map((c) => (
                                        <button
                                            key={c.name}
                                            onClick={() => setActiveColor(c.color)}
                                            className={cn(
                                                "w-8 h-8 rounded-lg border-2 transition-all flex-shrink-0",
                                                activeColor === c.color ? "border-white scale-110 shadow-lg" : "border-transparent opacity-80 hover:opacity-100"
                                            )}
                                            style={{ backgroundColor: c.color }}
                                            title={c.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <button
                                    onClick={() => {
                                        window.dispatchEvent(new CustomEvent('toggle-terminal'));
                                        setIsOpen(false);
                                    }}
                                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-xs font-bold text-white/60 group"
                                >
                                    <span>Open Console</span>
                                    <TerminalIcon className="w-4 h-4 group-hover:text-primary transition-colors" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
