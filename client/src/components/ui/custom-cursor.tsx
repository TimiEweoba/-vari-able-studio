import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useLocation } from "wouter";

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    const [location] = useLocation();
    const lastMousePos = useRef({ x: 0, y: 0 });

    // Function to update cursor state based on element at coordinates
    const syncCursorState = (x: number, y: number) => {
        const element = document.elementFromPoint(x, y);
        if (!element) return;

        const interactive = element.closest('a, button, [role="button"], .interactive') as HTMLElement;
        const cursorElement = element.closest('[data-cursor]') as HTMLElement;

        if (interactive) {
            setIsHovered(true);
            setCursorText(cursorElement?.dataset.cursor || "");
        } else {
            setIsHovered(false);
            setCursorText("");
        }
    };

    // Reset and re-sync cursor state on navigation
    useEffect(() => {
        // Small delay to allow DOM to update after navigation
        const timer = setTimeout(() => {
            syncCursorState(lastMousePos.current.x, lastMousePos.current.y);
        }, 50);
        return () => clearTimeout(timer);
    }, [location]);

    useEffect(() => {
        const updatePosition = (x: number, y: number) => {
            mouseX.set(x - 16);
            mouseY.set(y - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handlePointerMove = (e: PointerEvent) => {
            lastMousePos.current = { x: e.clientX, y: e.clientY };
            updatePosition(e.clientX, e.clientY);
        };

        const handlePointerOver = (e: PointerEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, [role="button"], .interactive') as HTMLElement;
            const cursorElement = target.closest('[data-cursor]') as HTMLElement;

            if (interactive) {
                setIsHovered(true);
                setCursorText(cursorElement?.dataset.cursor || "");
            } else {
                setIsHovered(false);
                setCursorText("");
            }
        };

        const handleMouseDown = () => {
            setIsHovered(false);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerover", handlePointerOver);
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerover", handlePointerOver);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [mouseX, mouseY, isVisible]);

    return (
        <motion.div
            className={`fixed top-0 left-0 w-8 h-8 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] hidden md:flex items-center justify-center overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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
