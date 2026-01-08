import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const updatePosition = (x: number, y: number) => {
            mouseX.set(x - 16);
            mouseY.set(y - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handlePointerMove = (e: PointerEvent) => {
            updatePosition(e.clientX, e.clientY);
        };

        const handlePointerOver = (e: PointerEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, [role="button"], .interactive');
            const customCursorText = target.dataset.cursor;

            if (isClickable) {
                setIsHovered(true);
                if (customCursorText) {
                    setCursorText(customCursorText);
                }
            } else {
                setIsHovered(false);
                setCursorText("");
            }
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerover", handlePointerOver);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerover", handlePointerOver);
        };
    }, [mouseX, mouseY, isVisible]);

    return (
        <motion.div
            className={`fixed top-0 left-0 w-8 h-8 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
                x: cursorX,
                y: cursorY,
                scale: isHovered ? 1.5 : 1,
            }}
        >
            {cursorText && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[4px] uppercase font-black text-black tracking-tighter"
                >
                    {cursorText}
                </motion.span>
            )}
        </motion.div>
    );
}
