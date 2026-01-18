import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, User, FileText, Code2, ShieldCheck, Calendar, Sparkles, Target, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: "01",
    step: "Step 01",
    title: "Discover & Align",
    time: "Day 0",
    description: "Objective: define the brief and lock scope. We ship what you actually need — no nice-to-haves without agreement.",
    details: [
      "Deliverables: project brief, technical roadmap.",
      "Client deliverable: brand assets, billing decision.",
      "Success criteria: signed SOW + $500 deposit."
    ],
    owner: "You + Timi (Operations)",
    icon: <Target className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
    visualType: "checklist",
    items: ["Scope locked", "Assets received", "Deposit paid"]
  },
  {
    id: "02",
    step: "Step 02",
    title: "Build & Brand",
    time: "Days 1–7",
    description: "Objective: rapid implementation of the locked brief. Design → build → test. We show you progress, not excuses.",
    details: [
      "Deliverables: staging URL, core feature implementation, auth.",
      "Stripe test integration & admin panel stub.",
      "Success criteria: internal QA pass."
    ],
    owner: "Ele (Design) + Dennis (Backend)",
    icon: <Layers className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000",
    visualType: "progress",
    progress: 80
  },
  {
    id: "03",
    step: "Step 03",
    title: "QA, Demo & Tweak",
    time: "Days 8–12",
    description: "Objective: client review, final polish, and acceptance testing. Demo, tweak once, ship.",
    details: [
      "Deliverables: demo walkthrough video, list of fixes.",
      "Final test pass.",
      "Success criteria: demo sign-off."
    ],
    owner: "Team + Client",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1504384153582-8f2894b1277a?q=80&w=2000",
    visualType: "video",
    videoDuration: "1:24"
  },
  {
    id: "04",
    step: "Step 04",
    title: "Launch & Transfer",
    time: "Day 13–14",
    description: "Objective: push to production, hand over code & DB export. You own the code after final payment.",
    details: [
      "Deliverables: production deployment, handover.",
      "30-day priority patch window.",
      "Success criteria: live site, full ownership."
    ],
    owner: "Dennis (Deploy) + You (Payment)",
    icon: <Zap className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000",
    visualType: "badge"
  }
];

export function Process() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="process" className="py-32 bg-[#050505] text-[#E3DBD8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-[#1C1D20] mb-12 select-none"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
              <span className="block text-2xl font-bold mb-1 text-white leading-none">003</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Workflow</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                A scope-first playbook for <span className="text-primary italic">predictable</span> success.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                We've stripped away the noise. No endless meetings, no scope creep. Just high-fidelity execution at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Main Process Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/5 bg-[#0A0A0B] rounded-[3rem] overflow-hidden min-h-[700px] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] relative">

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          {/* Left Side: Visual Experience (7 cols) */}
          <div className="lg:col-span-7 h-[400px] lg:h-full relative group overflow-hidden bg-black/60 border-b lg:border-b-0 lg:border-r border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  className="w-full h-full object-cover scale-110 lg:group-hover:scale-100 transition-transform duration-[2000ms] opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-[#050505]/40 to-transparent" />

                {/* Visual Overlay Components */}
                <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative w-full max-w-[360px] lg:max-w-[400px] aspect-square bg-[#0D0D0E]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 flex flex-col items-center justify-center shadow-2xl"
                  >
                    {/* Floating Glow */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full" />

                    {/* Content Based on Visual Type */}
                    {steps[currentStep].visualType === "checklist" && (
                      <div className="w-full space-y-4 lg:space-y-6">
                        <div className="flex items-center gap-4 mb-4 lg:mb-8">
                          <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shadow-xl shadow-primary/10">
                            {steps[currentStep].icon}
                          </div>
                          <div>
                            <div className="text-[8px] lg:text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Status</div>
                            <div className="text-base lg:text-lg font-bold text-white tracking-tight leading-none">Requirement Lock</div>
                          </div>
                        </div>
                        {steps[currentStep].items?.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3 lg:gap-4 py-2 lg:py-3 border-b border-white/5 last:border-0"
                          >
                            <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                              <CheckCircle2 className="w-3 lg:w-3.5 h-3 lg:h-3.5" />
                            </div>
                            <span className="text-xs lg:text-sm font-medium text-white/80">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {steps[currentStep].visualType === "progress" && (
                      <div className="w-full">
                        <div className="flex justify-between items-end mb-4 lg:mb-6">
                          <div>
                            <div className="text-[8px] lg:text-[10px] text-primary/60 font-black uppercase tracking-[0.3em] mb-1 lg:mb-2">Build Status</div>
                            <div className="text-4xl lg:text-6xl font-bold text-white tracking-tighter tabular-nums leading-none">{steps[currentStep].progress}%</div>
                          </div>
                          <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-primary opacity-20 animate-pulse mb-1 lg:mb-2" />
                        </div>
                        <div className="w-full h-3 lg:h-4 bg-white/5 rounded-full overflow-hidden mb-6 lg:mb-10 border border-white/5">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary/80 to-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${steps[currentStep].progress}%` }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-2 lg:gap-3">
                          {["Database Schema", "Auth Flow", "Stripe Integration"].map((task, i) => (
                            <div key={i} className="flex items-center justify-between p-3 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl border border-white/5">
                              <span className="text-[10px] lg:text-xs font-semibold text-white/60">{task}</span>
                              <div className={`text-[8px] lg:text-[9px] font-black uppercase px-2 py-1 rounded ${i < 2 ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/20'}`}>
                                {i < 2 ? 'Completed' : 'Pending'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {steps[currentStep].visualType === "video" && (
                      <div className="w-full h-full relative group/vid cursor-pointer overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] bg-black">
                        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/vid:opacity-40 transition-opacity duration-700" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 lg:gap-6">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 flex items-center justify-center text-primary group-hover/vid:bg-primary group-hover/vid:text-white transition-all duration-500 shadow-2xl"
                          >
                            <div className="w-0 h-0 border-t-[8px] lg:border-t-[10px] border-t-transparent border-l-[14px] lg:border-l-[18px] border-l-current border-b-[8px] lg:border-b-[10px] border-b-transparent ml-1 lg:ml-2" />
                          </motion.div>
                          <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white">Watch Demo Video</div>
                        </div>
                        <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 px-2 py-1 lg:px-3 lg:py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[8px] lg:text-[10px] text-white font-mono border border-white/10">
                          {steps[currentStep].videoDuration}
                        </div>
                      </div>
                    )}

                    {steps[currentStep].visualType === "badge" && (
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="relative mb-6 lg:mb-10">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
                            className="w-24 h-24 lg:w-32 lg:h-32 rounded-[2rem] lg:rounded-[2.5rem] bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-xl shadow-primary/40"
                          >
                            <ShieldCheck className="w-12 lg:w-16 h-12 lg:h-16" />
                          </motion.div>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-3 lg:-inset-4 border-2 border-dashed border-primary/20 rounded-[2.5rem] lg:rounded-[3rem] pointer-events-none"
                          />
                        </div>
                        <div className="space-y-1 lg:space-y-2">
                          <h4 className="text-xl lg:text-2xl font-bold text-white tracking-tight">Full Handover</h4>
                          <p className="text-[10px] lg:text-sm text-white/40 max-w-[160px] lg:max-w-[200px] leading-relaxed italic">The keys to the kingdom are now yours.</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col relative z-20">

            {/* Steps Navigation Bar */}
            <div className="h-24 border-b border-white/5 flex items-center justify-between px-10 bg-[#0A0A0B]/80 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Phase</span>
                <span className="text-sm font-bold text-white">{steps[currentStep].id}</span>
              </div>
              <div className="flex gap-2">
                {steps.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className="group py-2 px-1 focus:outline-none"
                  >
                    <motion.div
                      className={`h-1 rounded-full transition-colors ${idx === currentStep ? 'bg-primary' : 'bg-white/10 group-hover:bg-white/30'}`}
                      animate={{ width: idx === currentStep ? 32 : 12 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white/40 uppercase tracking-widest whitespace-nowrap">
                      {steps[currentStep].time}
                    </div>
                    <div className="h-[1px] w-12 bg-white/10" />
                  </div>

                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-none">
                    {steps[currentStep].title}
                  </h4>

                  <p className="text-white/60 leading-relaxed text-lg mb-12 max-w-sm">
                    {steps[currentStep].description}
                  </p>

                  <div className="space-y-4">
                    <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Deliverables</div>
                    {steps[currentStep].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3 group/item cursor-default"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                        <span className="text-sm font-medium text-white/50 group-hover/item:text-white/90 transition-colors leading-relaxed">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Nav & Info - FIXED FOR MOBILE OVERLAP & LONG TEXT */}
            <div className="min-h-[120px] lg:h-40 border-t border-white/5 flex flex-col sm:flex-row bg-black/20 overflow-hidden">
              <div className="flex-1 border-b sm:border-b-0 sm:border-r border-white/5 p-6 lg:p-8 flex items-center gap-4 lg:gap-5 min-w-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <User className="w-4 lg:w-5 h-4 lg:h-5 text-white/30" />
                </div>
                <div className="min-w-0">
                  <div className="text-[8px] lg:text-[9px] text-white/20 font-black uppercase tracking-[0.2em] mb-1">Ownership</div>
                  <div className="text-[10px] lg:text-xs font-bold text-white/80 truncate pr-4">{steps[currentStep].owner}</div>
                </div>
              </div>
              <div className="p-4 lg:px-10 flex items-center justify-center gap-3 shrink-0 bg-black/10 sm:bg-transparent">
                <motion.button
                  onClick={prevStep}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-lg hover:shadow-primary/20"
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextStep}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:bg-primary hover:border-primary transition-all duration-500 shadow-lg hover:shadow-primary/20"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Call to Action */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 py-8 px-12 bg-primary/5 border border-primary/10 rounded-[2.5rem] backdrop-blur-md">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/40">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h5 className="text-xl font-bold text-white mb-1">Predictable Delivery.</h5>
              <p className="text-sm text-white/40">Lock in your launch date today.</p>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-black hover:bg-primary hover:text-white px-10 h-16 rounded-2xl font-bold text-lg transition-all group shadow-2xl flex items-center gap-4"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
