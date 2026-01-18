import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const faqs = [
    {
      q: "What exactly is veri—able?",
      a: "veri—able is a digital product studio that ships production-ready, bespoke web products fast. We combine internal foundations, Stripe billing, deployment automation, and clean handovers so you can start charging customers in days, not months.",
    },
    {
      q: "How does veri—able's launch process work?",
      a: "We follow a 4-step process: Discover & Align → Build & Brand → QA & Demo → Launch & Transfer. Typical pilot timeline: 7–14 days. We include a 30-day priority patch window after launch.",
    },
    {
      q: "How long does implementation take?",
      a: "Most starter pilots finish in 7–14 days. Custom scopes or extra integrations can extend timelines — we’ll tell you up front in the SOW.",
    },
    {
      q: "What’s included in a launch package?",
      a: "Architecture customization, Stripe integration, auth & admin, staging URL, deployment scripts, documentation, and 30 days of priority support. Final code + database ownership is handed over after final payment.",
    },
    {
      q: "Do I really own the code?",
      a: "Yes. After you pay the final invoice, we transfer the full source code, a database export (if applicable), and deployment scripts. No vendor lock-ins.",
    },
    {
      q: "What’s the deposit and refund policy?",
      a: "A $500 refundable deposit reserves your slot. It’s refundable if we decline the project, if you cancel before development begins, or if you request a refund within 5 business days after onboarding and before development starts.",
    },
    {
      q: "Can you integrate with our existing tools?",
      a: "Yes. We handle common integrations (Stripe, HubSpot, Postgres/Supabase, analytics tools). Complex or bespoke integrations are scoped and priced separately.",
    },
    {
      q: "Is veri—able secure?",
      a: "We follow practical security hygiene: HTTPS, secure cookie settings, input validation, and monitoring hooks. For higher-risk projects we recommend (and can scope) third-party audits.",
    },
    {
      q: "What if we need custom features after launch?",
      a: "Post-launch work is billed either via a retainer or per-ticket. We offer three support tiers to cover small fixes through dedicated engineering time.",
    },
    {
      q: "Can we scale this beyond the 14-day launch?",
      a: "Absolutely. We build on an industrial-grade stack (Next.js/React/Node) designed to scale. After handover, you can continue with our support plans or hand the keys to your internal team/contractors.",
    },
    {
      q: "What support do you provide?",
      a: "All launches include a 30-day priority patch window. Ongoing support is available via monthly plans (Lite/Pro/Plus).",
    },
    {
      q: "How do you handle refunds or disputes?",
      a: "We encourage clear SOWs and acceptance criteria. If a dispute arises, we pause deliverables, run a quick mediation call, and follow the SOW and signed terms. Deposit and refund policies are stated in the SOW.",
    },
    {
      q: "Can you show references or case studies?",
      a: "Yes. We’ll share anonymized case studies and demo projects during the demo or on request.",
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#161719] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-[#1C1D20] mb-12 select-none"
          >
            Question & Answer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
              <span className="block text-2xl font-bold mb-1 text-white leading-none">006</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Insights</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Simple answers so you can move faster.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                Spend less time guessing and more time building. Let's cover your specific requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* Left Column: FAQ List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: idx * 0.05, ...fadeInUp.visible.transition } } }}
                className="border border-white/5 bg-[#1C1D20] rounded-2xl overflow-hidden"
              >
                <motion.div
                  onClick={() => toggleFAQ(idx)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  whileTap={{ scale: 0.995 }}
                  className="flex justify-between items-center p-6 cursor-pointer transition-all"
                >
                  <h4 className="text-lg font-bold text-white pr-4">{faq.q}</h4>
                  <div className="text-primary">
                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </motion.div>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">
                        {faq.a}
                        {(faq.q.includes("refund") || faq.q.includes("secure")) && (
                          <div className="mt-3">
                            <a href="#" className="text-xs text-primary hover:underline">Read full policy →</a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Visual + CTA Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="sticky top-24 space-y-6">
              {/* Top Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="rounded-3xl overflow-hidden border border-white/5 h-[240px] relative hidden lg:block group"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                  alt="Team working"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.2em] font-black">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Support Team
                  </div>
                </div>
              </motion.div>

              {/* Bottom CTA Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2, ...fadeInUp.visible.transition } } }}
                className="bg-[#1C1D20] border border-white/5 rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden shadow-2xl"
              >
                {/* Visual Accent */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 blur-[80px] rounded-full" />

                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Still have questions?</h3>
                <p className="text-white/40 leading-relaxed mb-10 text-sm max-w-[300px]">
                  Every team's needs are different. Let's cover your specific technical requirements and timeline in a short discovery call.
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-16 flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-base transition-all group shadow-xl shadow-primary/30"
                >
                  Schedule a 15-min call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1C1D20] bg-white/10 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover grayscale" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-black">Join 50+ founders</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
