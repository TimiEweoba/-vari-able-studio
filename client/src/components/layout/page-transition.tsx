import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
    const [location] = useLocation();

    return (
        <AnimatePresence>
            <motion.div
                key={location.split('#')[0]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
