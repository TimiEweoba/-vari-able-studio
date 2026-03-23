"use client";
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
    description: "We sit down, understand your idea, and agree on exactly what we're building — no surprises.",
    details: [
      "What you get: a clear project outline and timeline.",
      "What we need from you: your logo, brand colours, and payment preferences.",
      "How we start: sign the agreement and lock your slot — completely free."
    ],
    owner: "You + Timi (Operations)",
    icon: <Target className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
    visualType: "checklist",
    items: ["Plan confirmed", "Assets received", "Slot reserved"]
  },
  {
    id: "02",
    step: "Step 02",
    title: "Build & Brand",
    time: "Days 1–7",
    description: "We start designing and building based on the agreed plan. You'll see real progress, not empty promises.",
    details: [
      "What you get: a preview link to see your site taking shape.",
      "Payment system setup & admin dashboard started.",
      "Milestone: everything tested and working internally."
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
    description: "You review the site, we make final tweaks, and everything gets polished for launch.",
    details: [
      "What you get: a full review checklist and final fixes.",
      "Speed and safety checks completed.",
      "Milestone: your approval to go live."
    ],
    owner: "Team + Client",
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000",
    visualType: "audit"
  },
  {
    id: "04",
    step: "Step 04",
    title: "Launch & Transfer",
    time: "Day 13–14",
    description: "We launch your site for the world to see and hand over everything to you. After final payment, it's 100% yours.",
    details: [
      "What you get: your live website, fully launched.",
      "30 days of priority fixes included.",
      "Milestone: site is live and you own everything."
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
    <section id="process" className="py-24 md:py-32 bg-[#050505] text-[#E3DBD8] overflow-hidden relative">
      {/* Dynamic Background Text */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none -translate-y-1/2 flex items-center whitespace-nowrap z-0">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="text-[40vw] font-black leading-none flex gap-[0.5em]"
        >
          <span>CREATING</span>
          <span>SPEED</span>
          <span>QUALITY</span>
          <span>DELIVERING</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-white/20 mb-12 select-none"
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
                A clear, step-by-step plan for <span className="text-primary italic">guaranteed</span> results.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                No endless meetings, no surprise changes. Just great work, delivered on time.
              </p>
            </div>
          </div>
        </div>

        {/* Main Process Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 glass-panel rounded-3xl overflow-hidden min-h-[700px] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] relative group/main">

          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          {/* Left Side: Visual Experience (7 cols) */}
          <div className="lg:col-span-7 h-[400px] lg:h-full relative group overflow-hidden bg-black/60 border-b lg:border-b-0 lg:border-r border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  className="w-full h-full object-cover scale-110 lg:group-hover:scale-105 transition-transform duration-[4000ms] opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-[#050505]/20 to-transparent" />

                {/* Visual Overlay Components */}
                <div className="absolute inset-0 flex items-center justify-center p-6 lg:p-12">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-[360px] lg:max-w-[400px] aspect-square bg-[#0D0D0E]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-6 lg:p-10 flex flex-col items-center justify-center shadow-2xl group/card"
                  >
                    {/* Floating Glow */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 blur-[80px] rounded-full group-hover/card:bg-primary/20 transition-colors duration-1000" />
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
                            <div className="text-base lg:text-lg font-bold text-white tracking-tight leading-none">Plan Confirmed</div>
                          </div>
                        </div>
                        {steps[currentStep].items?.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
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
                            <div className="text-[8px] lg:text-[10px] text-primary/60 font-black uppercase tracking-[0.3em] mb-1 lg:mb-2">Progress</div>
                            <div className="text-4xl lg:text-6xl font-bold text-white tracking-tighter tabular-nums leading-none">{steps[currentStep].progress}%</div>
                          </div>
                          <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-primary opacity-20 animate-pulse mb-1 lg:mb-2" />
                        </div>
                        <div className="w-full h-3 lg:h-4 bg-white/5 rounded-full overflow-hidden mb-6 lg:mb-10 border border-white/5">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary/80 to-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${steps[currentStep].progress}%` }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-2 lg:gap-3">
                          {["Data Setup", "User Login", "Payment System"].map((task, i) => (
                            <div key={i} className="flex items-center justify-between p-3 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl border border-white/5 group/task cursor-default hover:bg-white/10 transition-colors">
                              <span className="text-[10px] lg:text-xs font-semibold text-white/60 group-hover/task:text-white/90 transition-colors">{task}</span>
                              <div className={`text-[8px] lg:text-[9px] font-black uppercase px-2 py-1 rounded ${i < 2 ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/20'}`}>
                                {i < 2 ? 'Completed' : 'Pending'}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {steps[currentStep].visualType === "audit" && (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 lg:p-8 relative bg-transparent">
                        {/* High-tech background grid */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                        </div>

                        {/* Central Hub with Scanning Effect */}
                        <div className="relative mb-6 lg:mb-10 flex flex-col items-center justify-center">
                          {/* Outer Pulsing Rings */}
                          <motion.div
                            className="absolute border border-primary/20 rounded-full w-36 h-36 lg:w-48 lg:h-48"
                            animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                          />
                          <motion.div
                            className="absolute border border-primary/10 rounded-full w-48 h-48 lg:w-60 lg:h-60"
                            animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                          />

                          <div className="relative w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                            {/* Scanning Line */}
                            <motion.div
                              className="absolute left-0 right-0 h-[2px] bg-primary/40 shadow-[0_0_15px_var(--color-primary)] z-30 pointer-events-none"
                              animate={{ top: ['10%', '90%', '10%'] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 100 100">
                              <circle
                                cx="50"
                                cy="50"
                                r="46"
                                className="fill-none stroke-white/5"
                                strokeWidth="4"
                              />
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="46"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
                                className="fill-none stroke-primary"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                            </svg>

                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center"
                              >
                                <span className="text-5xl lg:text-7xl font-bold text-white tracking-tighter block leading-none drop-shadow-2xl">
                                  100
                                </span>
                              </motion.div>
                                                        </div>
                          </div>
                          
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-[10px] lg:text-xs text-primary font-black uppercase tracking-[0.3em] block whitespace-nowrap mt-4 z-40 relative"
                          >
                             Quality Score
                          </motion.span>
                        </div>

                        {/* Metric Grid Display */}
                        <div className="grid grid-cols-2 gap-2 lg:gap-3 w-full max-w-[320px] relative z-40">
                          {[
                            { label: "Performance", val: "100" },
                            { label: "Security", val: "A+" },
                            { label: "Stability", val: "MAX" },
                            { label: "Uptime", val: "99.9%" }
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.5 + (i * 0.1), duration: 0.6 }}
                              className="p-3 lg:p-4 bg-white/[0.03] border border-white/5 rounded-xl lg:rounded-2xl backdrop-blur-xl relative group/item overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-primary/5 translate-x-full group-hover/item:translate-x-0 transition-transform duration-500" />
                              <div className="relative z-10">
                                <span className="text-[7px] lg:text-[8px] font-black text-white/30 uppercase tracking-[0.15em] lg:tracking-[0.2em] mb-1 block">{item.label}</span>
                                <div className="flex items-center justify-between">
                                  <span className="text-xl lg:text-2xl font-bold text-white tracking-tight">{item.val}</span>
                                  <motion.div
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                    className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {steps[currentStep].visualType === "badge" && (
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="relative mb-6 lg:mb-10">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
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
                          <p className="text-[10px] lg:text-sm text-white/40 max-w-[160px] lg:max-w-[200px] leading-relaxed italic">Everything is now in your hands.</p>
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
            <div className="h-24 border-b border-white/5 flex items-center justify-between px-10 bg-[#0A0A0B]/20 backdrop-blur-xl">
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
                      className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentStep ? 'bg-primary shadow-[0_0_12px_var(--color-primary)]' : 'bg-white/10 group-hover:bg-white/30'}`}
                      animate={{ width: idx === currentStep ? 40 : 12 }}
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
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-widest whitespace-nowrap">
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
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-4 group/item cursor-default"
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-all duration-300 group-hover/item:scale-125" />
                        <span className="text-sm font-medium text-white/50 group-hover/item:text-white/90 transition-colors leading-relaxed">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Nav & Info */}
            <div className="min-h-[120px] lg:h-40 border-t border-white/5 flex flex-col sm:flex-row bg-[#0A0A0B]/50 backdrop-blur-3xl overflow-hidden">
              <div className="flex-1 border-b sm:border-b-0 sm:border-r border-white/5 p-6 lg:p-8 flex items-center gap-4 lg:gap-5 min-w-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <User className="w-4 lg:w-5 h-4 lg:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[8px] lg:text-[9px] text-white/20 font-black uppercase tracking-[0.2em] mb-1">Ownership</div>
                  <div className="text-[10px] lg:text-xs font-bold text-white truncate pr-4">{steps[currentStep].owner}</div>
                </div>
              </div>
              <div className="p-4 lg:px-10 flex items-center justify-center gap-3 shrink-0 bg-white/[0.02]">
                <motion.button
                  onClick={prevStep}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all duration-500 shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextStep}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-white transition-all duration-500 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 py-10 px-12 glass-panel rounded-3xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-[2rem] bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <Calendar className="w-8 h-8 relative z-10" />
            </div>
            <div>
              <h5 className="text-2xl font-bold text-white mb-1">A Straightforward Path to Launch.</h5>
              <p className="text-sm text-white/40 tracking-tight">No fluff. Fast turnaround. You'll always know what's happening.</p>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative inline-flex items-center gap-8 glass-panel rounded-full px-8 md:px-12 py-5 md:py-7 transition-all overflow-hidden w-full md:w-auto justify-center shadow-2xl interactive cursor-pointer border-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="text-white font-black text-sm md:text-xl tracking-tight relative z-10 uppercase">
                Secure Your Slot
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500 relative z-10 shadow-xl shadow-primary/40">
                <Zap className="w-5 h-5 md:w-6 md:h-6 leading-none" />
              </div>
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}



