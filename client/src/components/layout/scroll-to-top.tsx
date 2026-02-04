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
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 500); // Wait for page transition and content load
        }
    }, [location]);

    return null;
}
