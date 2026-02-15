"use client";

import React, { useEffect, useState } from "react";
// Dynamically import the App component to ensure it runs only on client
// or strict client usage. 
// Given the current structure, we might need to adjust imports if 'client/src/App' 
// relies on Vite-specific things (like import.meta.env) which we might need to shim 
// or if it works out of the box.
// A common pattern is to just mount the App.

import App from "@/App";

export function ClientWrapper() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid hydration mismatch for SPA

    return <App />;
}
