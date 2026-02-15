import { useEffect, ReactNode, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "wouter";

export function SmoothScroll({ children }: { children: ReactNode }) {
    const [location] = useLocation();
    const lenisRef = useRef<Lenis | null>(null);
    const rafIdRef = useRef<number | null>(null);

    useEffect(() => {
        // Disable Lenis on mobile/touch for better performance
        if (window.innerWidth < 1024 || 'ontouchstart' in window) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;
        (window as any).lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        }

        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
            lenis.destroy();
            (window as any).lenis = null;
        };
    }, []);

    useEffect(() => {
        // Stop Lenis during transition
        if (lenisRef.current) {
            lenisRef.current.stop();
        }

        // Reset scroll position immediately
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Wait for DOM to settle, then restart Lenis
        const restartTimer = setTimeout(() => {
            if (lenisRef.current) {
                lenisRef.current.start();
                lenisRef.current.resize();
            }
        }, 100);

        // Handle hash scrolling after everything is ready
        const hash = window.location.hash;
        if (hash) {
            const scrollTimer = setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element && lenisRef.current) {
                    lenisRef.current.scrollTo(element, { offset: -100, duration: 1.5 });
                }
            }, 400);
            return () => {
                clearTimeout(restartTimer);
                clearTimeout(scrollTimer);
            };
        }

        return () => clearTimeout(restartTimer);
    }, [location]);

    return <>{children}</>;
}
