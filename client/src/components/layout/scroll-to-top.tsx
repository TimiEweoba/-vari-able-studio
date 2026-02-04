import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
    const [location] = useLocation();

    useEffect(() => {
        // Always reset scroll to top on route change
        window.scrollTo(0, 0);

        // Handle hash if present
        const hash = window.location.hash;
        if (hash) {
            // Using a requestAnimationFrame to ensure the DOM is ready
            requestAnimationFrame(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    // If Lenis is active on window (custom property we'll add) or just scroll
                    if ((window as any).lenis) {
                        (window as any).lenis.scrollTo(element, { offset: -100, duration: 1.5 });
                    } else {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }
            });
        }
    }, [location]);

    return null;
}
