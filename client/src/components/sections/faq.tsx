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
      q: "What exactly is vari—able?",
      a: "vari—able is a digital product studio that ships production-ready, white-label web products fast. We combine templates, Stripe billing, deployment automation, and clean handovers so you can start charging customers in days, not months.",
    },
    {
      q: "How does vari—able's launch process work?",
      a: "We follow a 4-step process: Discover & Align → Build & Brand → QA & Demo → Launch & Transfer. Typical pilot timeline: 7–14 days. We include a 30-day priority patch window after launch.",
    },
    {
      q: "How long does implementation take?",
      a: "Most starter pilots finish in 7–14 days. Custom scopes or extra integrations can extend timelines — we’ll tell you up front in the SOW.",
    },
    {
      q: "What’s included in a launch package?",
      a: "Template customization, Stripe integration, auth & admin, staging URL, deployment scripts, documentation, and 30 days of priority support. Final code + DB export is handed over after final payment.",
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
      q: "Is vari—able secure?",
      a: "We follow practical security hygiene: HTTPS, secure cookie settings, input validation, and monitoring hooks. For higher-risk projects we recommend (and can scope) third-party audits.",
    },
    {
      q: "What if we need custom features after launch?",
      a: "Post-launch work is billed either via a retainer or per-ticket. We offer three support tiers to cover small fixes through dedicated engineering time.",
    },
    {
      q: "Are templates exclusive?",
      a: "By default templates are non-exclusive (sold to multiple customers). Exclusive licenses can be negotiated at a higher fee and documented in the SOW.",
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
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#52525B] mb-12"
          >
            Questions & Answers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l-2 border-primary/20 pl-6 md:pl-0 md:border-l-0">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6">
              <span className="block text-2xl font-bold mb-1">006</span>
              <span className="text-sm text-muted-foreground">vari—able</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Simple answers so you can move faster.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <p className="text-muted-foreground text-right max-w-[200px]">
                Spend less time guessing and more time building.
              </p>
              <div className="ml-8 hidden md:block">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl">Book Demo</Button>
              </div>
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
                <div
                  onClick={() => toggleFAQ(idx)}
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <h4 className="text-lg font-bold text-white pr-4">{faq.q}</h4>
                  <div className="text-[#FA6E43]">
                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>
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
          <div className="lg:col-span-5 flex flex-col gap-8 h-full sticky top-24">
            {/* Top Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden border border-white/5 h-[200px] lg:h-[300px] relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-black/20 z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </motion.div>

            {/* Bottom CTA Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2, ...fadeInUp.visible.transition } } }}
              className="bg-[#1C1D20] border border-white/5 rounded-2xl p-8 lg:p-12 flex-1 flex flex-col justify-center"
            >
              <h3 className="text-3xl md:text-3xl font-medium text-white mb-6">Still have questions?</h3>
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Every team's needs are different. Let's cover your specific requirements in a short call.
              </p>

              <div>
                <button className="w-full flex items-center justify-center gap-2 bg-[#FA6E43] hover:bg-[#FA6E43]/90 text-white px-6 py-4 rounded-xl font-medium transition-all group">
                  Let's have a quick call (15 min)
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
