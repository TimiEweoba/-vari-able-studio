"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
    const location = usePathname();

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={location}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}



