"use client";

import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageTransition } from "@/components/layout/page-transition";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import React, { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // We must render QueryClientProvider even during SSR to prevent client components failing
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                {mounted ? (
                    <SmoothScroll>
                        <ScrollToTop />
                        <Toaster />
                        <CustomCursor />
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </SmoothScroll>
                ) : (
                    <div className="opacity-0">
                        {children}
                    </div>
                )}
            </TooltipProvider>
        </QueryClientProvider>
    );
}
