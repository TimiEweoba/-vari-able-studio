import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, User, FileText, Upload, Code2, ShieldCheck, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "Step 01",
    title: "Discover & Align",
    time: "Day 0",
    description: "Objective: pick the right template and lock scope. We ship what they actually need — no nice-to-haves without agreement.",
    details: [
      "Deliverables: project brief, prioritized feature list.",
      "Client deliverable: brand assets, billing decision.",
      "Success criteria: signed SOW + $500 deposit."
    ],
    owner: "You + Timi (Operations)",
    visualType: "checklist",
    items: ["Scope locked", "Assets received", "Deposit paid"]
  },
  {
    step: "Step 02",
    title: "Build & Brand",
    time: "Days 1–7",
    description: "Objective: implement the template, connect Stripe, and brand the UI. Design → build → test. We show you progress, not excuses.",
    details: [
      "Deliverables: staging URL, branded landing, auth.",
      "Stripe test integration & admin panel stub.",
      "Success criteria: internal QA pass."
    ],
    owner: "Ele (Design) + Dennis (Backend)",
    visualType: "progress",
    progress: 80
  },
  {
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
    visualType: "video",
    videoDuration: "1:24"
  },
  {
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
    <section id="process" className="py-24 bg-[#050505] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#333] mb-12"
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l-2 border-white/10 pl-6 md:pl-0 md:border-l-0">
            <div className="md:col-span-2 hidden md:block border-l-2 border-[#FA6E43] pl-6">
              <span className="block text-2xl font-bold mb-1 text-white">003</span>
              <span className="text-sm text-muted-foreground">vari-able</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Optimized launches through a simple, repeatable workflow.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <p className="text-muted-foreground text-right max-w-[200px]">
                We use a template-first playbook so launches are predictable, fast, and low-risk.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout - Modeled after reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#0A0A0A] rounded-[2rem] overflow-hidden min-h-[600px]">

          {/* Column 1: Visual (4 cols) */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden bg-black/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                {/* Background Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FA6E43]/10 blur-[100px] rounded-full" />

                {/* Visual Content Container */}
                <div className="relative w-full aspect-square max-w-[320px] bg-[#111] border border-white/10 rounded-3xl p-6 flex items-center justify-center shadow-2xl ring-1 ring-white/5">

                  {steps[currentStep].visualType === "checklist" && (
                    <div className="w-full space-y-4">
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                        <div className="w-10 h-10 rounded-xl bg-[#FA6E43]/10 flex items-center justify-center text-[#FA6E43]">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="text-sm font-medium text-white">Requirement Lock</div>
                      </div>
                      {steps[currentStep].items?.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#FA6E43] flex items-center justify-center text-black">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          <span className="text-sm text-white/80">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {steps[currentStep].visualType === "progress" && (
                    <div className="w-full">
                      <div className="flex justify-between items-end mb-4">
                        <span className="text-4xl font-bold text-white">{steps[currentStep].progress}%</span>
                        <span className="text-sm text-muted-foreground pb-1">Built</span>
                      </div>
                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-8">
                        <motion.div
                          className="h-full bg-[#FA6E43]"
                          initial={{ width: 0 }}
                          animate={{ width: `${steps[currentStep].progress}%` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>Database Schema</span>
                          <span className="text-[#FA6E43]">Done</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>Auth Flow</span>
                          <span className="text-[#FA6E43]">Done</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-white/60">
                          <span>Stripe Integ.</span>
                          <span className="text-white">Pending</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {steps[currentStep].visualType === "video" && (
                    <div className="w-full h-full relative group cursor-pointer overflow-hidden rounded-2xl bg-black">
                      <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/80 rounded text-[10px] text-white font-mono">
                        {steps[currentStep].videoDuration}
                      </div>
                    </div>
                  )}

                  {steps[currentStep].visualType === "badge" && (
                    <div className="flex flex-col items-center justify-center text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="w-24 h-24 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                      >
                        <ShieldCheck className="w-12 h-12" />
                      </motion.div>
                      <div className="text-sm font-medium text-white mb-1">Ownership Transfer</div>
                      <div className="text-xs text-muted-foreground">All systems operational</div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 2: Content (5 cols) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
            {/* Top Row: Label + Pagination */}
            <div className="h-20 border-b border-white/10 px-8 flex items-center justify-between">
              <span className="text-sm text-muted-foreground tracking-wide">vari—able Process</span>
              <div className="flex gap-1.5">
                {steps.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`h-1.5 rounded-full ${idx === currentStep ? 'bg-[#FA6E43]' : 'bg-white/10'}`}
                    animate={{ width: idx === currentStep ? 24 : 6 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>

            {/* Middle Row: Main Text */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {steps[currentStep].step} — <br />
                    <span className="text-white/60">{steps[currentStep].title}</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-sm">
                    {steps[currentStep].description}
                  </p>

                  <div className="flex flex-col gap-2">
                    {steps[currentStep].details.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                        <div className="w-1 h-1 rounded-full bg-[#FA6E43]" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Row: Metric/Info */}
            <div className="h-28 border-t border-white/10 px-8 flex items-center justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                    <User className="w-5 h-5 text-white/50" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Owner</div>
                    <div className="text-sm font-medium text-white">{steps[currentStep].owner}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Column 3: Navigation & CTA (3 cols) */}
          <div className="lg:col-span-3 flex flex-col bg-[#0f0f0f]">
            {/* Top Row: Arrows */}
            <div className="h-20 border-b border-white/10 px-8 flex items-center justify-end gap-3 bg-[#0A0A0A]">
              <button
                onClick={prevStep}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FA6E43] hover:border-[#FA6E43] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextStep}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FA6E43] hover:border-[#FA6E43] transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Middle/Bottom: CTA */}
            <div className="flex-1 p-8 flex flex-col justify-end">
              <div className="bg-[#1C1D20] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#FA6E43]/50 transition-colors">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#FA6E43]/10 blur-[40px] rounded-full group-hover:bg-[#FA6E43]/20 transition-colors" />

                <Button className="w-full bg-[#FA6E43] hover:bg-[#FA6E43]/90 text-white h-12 rounded-xl font-medium mb-4 shadow-lg shadow-orange-900/20">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Demo
                </Button>
                <p className="text-xs text-center text-muted-foreground mb-4">
                  See the full {steps.length}-step process in action.
                </p>

                <a href="#" className="flex items-center justify-center gap-1 text-sm font-medium text-white hover:text-[#FA6E43] transition-colors group/link">
                  Reserve a Spot
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="h-14 border-t border-white/10 flex items-center justify-between px-6 bg-[#0A0A0A]">
              <span className="text-[10px] text-muted-foreground">Timeline:</span>
              <span className="text-xs font-medium text-white">{steps[currentStep].time}</span>
            </div>
          </div>

        </div>

        {/* Bottom text */}
        <div className="mt-8 flex justify-between items-center text-muted-foreground text-sm px-4">
          <div>* Typical timeline for a standard pilot.</div>
          <div className="hidden md:flex items-center gap-2">
            <span>Questions?</span>
            <span className="text-white hover:text-[#FA6E43] cursor-pointer transition-colors">We're here to help →</span>
          </div>
        </div>

      </div>
    </section>
  );
}
