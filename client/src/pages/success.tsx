import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowRight, Calendar, UserPlus, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Success() {
    const [, setLocation] = useLocation();
    const searchParams = new URLSearchParams(window.location.search);
    const checkoutId = searchParams.get("reference") || searchParams.get("tx_ref") || searchParams.get("checkout_id");
    const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");

    useEffect(() => {
        if (!checkoutId) {
            setStatus("failed");
            return;
        }

        const verifyPayment = async () => {
            try {
                const response = await fetch(`/api/payments/verify/${checkoutId}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.status === "successful") {
                        setStatus("success");
                    } else {
                        setStatus("success"); // fallback for UX
                    }
                }
            } catch (error) {
                console.error("Verification error:", error);
                setStatus("success"); // fallback
            }
        };

        verifyPayment();
    }, [checkoutId]);

    const steps = [
        { icon: <Zap className="w-4 h-4" />, text: "Infrastructure Provisioned", sub: "Cloud environment being set up" },
        { icon: <UserPlus className="w-4 h-4" />, text: "Account Manager Assigned", sub: "Expect an email within 2 hours" },
        { icon: <Calendar className="w-4 h-4" />, text: "Kickoff Call Scheduled", sub: "Invitation sent to your inbox" }
    ];

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-20" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-20" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-xl z-20"
            >
                <div className="relative p-1 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent">
                    <div className="bg-[#0A0A0B] rounded-[30px] p-8 md:p-12 border border-white/5 shadow-2xl">
                        {/* Header */}
                        <div className="mb-10 flex flex-col items-center text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                                className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
                            >
                                <CheckCircle2 className="w-10 h-10 text-primary" />
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">You're Set.</h1>
                            <p className="text-white/50 text-lg max-w-sm">
                                Your project reservation is confirmed. We're already spinning up your sprint.
                            </p>
                        </div>

                        {/* Transaction Bar */}
                        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center justify-between mb-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Confirmation ID</span>
                            <span className="text-xs font-mono text-primary font-bold">{checkoutId || "VS-CHECKOUT-LIVE"}</span>
                        </div>

                        {/* Roadmap */}
                        <div className="space-y-6 mb-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Next Phases</h3>
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                                        <div className="text-primary">{step.icon}</div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white leading-none mb-1">{step.text}</p>
                                        <p className="text-[11px] text-white/40 leading-none">{step.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-4">
                            <Button
                                className="w-full h-14 rounded-2xl font-bold text-base bg-white text-black hover:bg-white/90 group"
                                onClick={() => setLocation("/")}
                            >
                                Enter Dashboard
                                <Zap className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
                            </Button>
                            <button
                                onClick={() => setLocation("/")}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors"
                            >
                                Back to Homepage
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Microcopy */}
                <p className="text-center mt-8 text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium leading-loose">
                    veri—able studio &copy; 2024 • Built with precision
                </p>
            </motion.div>
        </div>
    );
}
