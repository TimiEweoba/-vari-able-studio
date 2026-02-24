import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Activity, Zap, Gift } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const workflowSteps = [
    {
        image: "/images/idea.png",
        title: "The Idea",
        description: "Have a project idea for a web solution? We're here to help."
    },
    {
        image: "/images/call.png",
        title: "The Connection",
        description: "Reach out to Veriable to bring your vision to life."
    },
    {
        image: "/images/response.png",
        title: "Strategic Response",
        description: "We respond and attend to your needs immediately."
    },
    {
        image: "/images/agreement.png",
        title: "The Alignment",
        description: "We reach an agreement on the project scope and goals."
    },
    {
        image: "/images/results.png",
        title: "The Impact",
        description: "Your finished digital product, ready to scale and succeed."
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

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Top Tagline */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-4 md:left-6 text-muted-foreground/60 text-sm hidden md:block"
                >
                    Building the future of digital.
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-8 items-center">

                    {/* Main Headline */}
                    <div className="lg:col-span-7">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-[11vw] md:text-[8.5vw] lg:text-[7.5vw] font-bold tracking-tighter text-white leading-[0.85] mb-4 md:mb-8"
                        >
                            <span className="block border-t-4 border-primary w-24 mb-6 md:mb-8"></span>
                            Launch <br />
                            production-ready <br />
                            products in <br />
                            <span className="text-primary">7–14 days.</span>
                        </motion.h1>
                    </div>

                    {/* Dynamic Visuals Showroom */}
                    <div className="lg:col-span-5 relative mt-4 md:mt-12 lg:mt-0">
                        <div className="relative w-full max-w-[500px] mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        x: 0,
                                        y: ["-1%", "1%"],
                                    }}
                                    exit={{ opacity: 0, scale: 1.1, x: -20 }}
                                    transition={{
                                        duration: 0.6,
                                        y: {
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }
                                    }}
                                    className="flex flex-col items-center"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square w-full p-4 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/10">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
                                        <img
                                            src={workflowSteps[currentStep].image}
                                            alt={workflowSteps[currentStep].title}
                                            className="w-full h-full object-contain rounded-2xl"
                                        />

                                        {/* Desktop-only Floating Caption Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="hidden md:block absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10"
                                        >
                                            <h4 className="text-primary font-display text-xl font-bold mb-1 uppercase tracking-wider">
                                                {workflowSteps[currentStep].title}
                                            </h4>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                {workflowSteps[currentStep].description}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Mobile-only Caption below image */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="md:hidden mt-8 text-center px-4"
                                    >
                                        <h4 className="text-primary font-display text-2xl font-bold mb-2 uppercase tracking-wider">
                                            {workflowSteps[currentStep].title}
                                        </h4>
                                        <p className="text-white/80 text-base leading-relaxed">
                                            {workflowSteps[currentStep].description}
                                        </p>
                                    </motion.div>

                                    {/* Progress Indicators */}
                                    <div className="mt-8 flex gap-2">
                                        {workflowSteps.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentStep ? "w-8 bg-primary" : "w-2 bg-white/20"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

