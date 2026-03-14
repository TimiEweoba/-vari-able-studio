"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Activity, Zap, Gift, Lightbulb, PhoneCall, FastForward, CheckCircle2, TrendingUp } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

// Custom Animated Icons
const IdeaAnimation = ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
        <motion.div
            className="absolute w-4 h-4 bg-primary rounded-full blur-[3px]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute w-2 h-2 bg-white rounded-full z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute w-full h-full border-2 border-primary/30 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
    </div>
);

const ConnectionAnimation = ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center gap-[4px]", className)}>
        <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
        />
        <motion.div
            className="w-1.5 h-1.5 bg-primary/80 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
            className="w-1.5 h-1.5 bg-primary/60 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
        />
    </div>
);

const ResponseAnimation = ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
        <svg viewBox="0 0 24 24" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
                d="M13 19L20 12L13 5"
                animate={{ x: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M5 19L12 12L5 5"
                animate={{ x: [0, 4, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            />
        </svg>
    </div>
);

const AlignmentAnimation = ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
        <motion.div
            className="w-4 h-4 border-2 border-primary rounded-sm"
            animate={{ rotate: [0, 90, 90, 0], scale: [1, 1.2, 1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute w-4 h-4 bg-white/20 rounded-sm"
            animate={{ x: [10, 0, 0, 10], y: [-10, 0, 0, -10], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute w-2 h-2 bg-primary rounded-full z-10"
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
    </div>
);

const ImpactAnimation = ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-end justify-center gap-1.5", className)}>
        <div className="flex items-end h-[60%] gap-1.5">
            <motion.div
                className="w-1.5 bg-primary/40 rounded-t-full"
                animate={{ height: ["40%", "70%", "40%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            />
            <motion.div
                className="w-1.5 bg-primary/70 rounded-t-full"
                animate={{ height: ["50%", "85%", "50%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
                className="w-1.5 bg-primary rounded-t-full relative"
                animate={{ height: ["60%", "100%", "60%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
                <motion.div
                    className="absolute -top-1 -right-0.5 w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_8px_white]"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
            </motion.div>
        </div>
    </div>
);

const workflowSteps = [
    {
        icon: IdeaAnimation,
        title: "The Idea",
        description: "Have an idea for a website or app? We're here to help.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&h=800&auto=format&fit=crop" // minimal desk/office
    },
    {
        icon: ConnectionAnimation,
        title: "The Connection",
        description: "Get in touch with us — let's make it happen.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&h=800&auto=format&fit=crop" // tech connection/team
    },
    {
        icon: ResponseAnimation,
        title: "Quick Response",
        description: "We get back to you right away.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&h=800&auto=format&fit=crop" // office/communication/speed
    },
    {
        icon: AlignmentAnimation,
        title: "The Alignment",
        description: "We agree on what to build, the timeline, and the cost.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&h=800&auto=format&fit=crop" // handshake/agreement/professional
    },
    {
        icon: ImpactAnimation,
        title: "The Impact",
        description: "Your finished website, ready to grow your business.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=800&auto=format&fit=crop" // analytics/growth/laptop
    }
];

export function Hero() {
    const [currentStep, setCurrentStep] = useState(0);



    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Preload workflow images out of sight to avoid blink during animation */}
            {/* Next.js Image component handles optimization automatically. */}

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Top Tagline */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-4 md:left-6 text-muted-foreground/60 text-sm hidden md:block"
                >
                    Turning your ideas into real websites.
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-8 items-center">

                    {/* Main Headline */}
                    <div className="lg:col-span-7">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-[11vw] md:text-[8.5vw] lg:text-[7.5vw] font-display font-bold tracking-tight text-white leading-[0.85] mb-4 md:mb-8"
                        >
                            <span className="block border-t-4 border-primary w-24 mb-6 md:mb-8"></span>
                            Get your <br />
                            website up and <br />
                            running in <br />
                            <span className="text-primary">7–14 days.</span>
                        </motion.h1>
                    </div>

                    {/* Dynamic Visuals Showroom */}
                    <div className="lg:col-span-5 relative mt-8 md:mt-12 lg:mt-0 lg:pl-10">
                        <div className="relative w-full max-w-[500px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
                            {/* Slide Background Image */}
                            <div className="absolute inset-0 z-0 bg-[#0A0A0B]">
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 0.8, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <Image
                                            src={workflowSteps[currentStep].image}
                                            alt="Slide Background"
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/95 via-[#0A0A0B]/50 to-[#0A0A0B]/20 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            <div className="relative z-10 p-8 md:p-12 w-full h-full">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors duration-1000" />

                                <div className="flex justify-between items-center mb-12">
                                    <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black">Delivery Process</h3>
                                    <div className="bg-primary/20 text-primary text-[10px] font-black tracking-widest px-3 py-1 rounded-full border border-primary/20 backdrop-blur-md">
                                        0{currentStep + 1} / 0{workflowSteps.length}
                                    </div>
                                </div>

                                <div className="relative h-[220px] md:h-[240px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className="absolute inset-0 flex flex-col"
                                        >
                                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 md:mb-8 shadow-inner relative overflow-hidden backdrop-blur-md">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                {(() => {
                                                    const Icon = workflowSteps[currentStep].icon;
                                                    return <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary relative z-10" />
                                                })()}
                                            </div>

                                            <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight drop-shadow-md">
                                                {workflowSteps[currentStep].title}
                                            </h4>
                                            <p className="text-white/80 text-base leading-relaxed max-w-[95%] drop-shadow-md font-medium">
                                                {workflowSteps[currentStep].description}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-1.5">
                                    {workflowSteps.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentStep(idx)}
                                            className={cn(
                                                "transition-all duration-500 rounded-full cursor-pointer relative overflow-hidden",
                                                idx === currentStep ? "w-4 h-1 bg-primary" : "w-1 h-1 bg-white/20 hover:bg-white/40"
                                            )}
                                        >
                                            {idx === currentStep && (
                                                <motion.div
                                                    layoutId="active-progress"
                                                    className="absolute inset-0 bg-primary"
                                                    initial={{ transformOrigin: "left", scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 5, ease: "linear" }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}




