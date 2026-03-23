"use client";
import { useState } from "react";
import { Check, ArrowRight, Globe, Loader2, Mail, Gift, Star, Bot, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckoutDialog } from "./checkout-dialog";
import { fadeInUp, isMobile } from "@/lib/animations";

type PlanKey = "starter" | "growth" | "studio" | "agent";

const PRICES = {
  starter: { usd: 1500, ngn: 1800000 },
  growth: { usd: 3500, ngn: 4200000 },
  studio: { usd: 6500, ngn: 7800000 },
  agent: { usd: 1200, ngn: 1500000 },
  reservation: { usd: 0, ngn: 0 },
};

const plans: {
  key: PlanKey;
  name: string;
  badge?: string;
  description: string;
  delivery: string;
  features: string[];
  highlight?: boolean;
}[] = [
  {
    key: "starter",
    name: "Starter",
    description: "Landing page or MVP. No agent layer. Ship fast and test your concept.",
    delivery: "7-day delivery",
    features: [
      "Project game plan",
      "Solid starting template",
      "Login system & hosting setup",
      "7 days priority support",
    ],
  },
  {
    key: "growth",
    name: "Growth",
    badge: "★ Flagship",
    description: "Full-stack build + one embedded autonomous agent. The complete package.",
    delivery: "14-day delivery",
    highlight: true,
    features: [
      "Tailored design plan",
      "One embedded AI agent",
      "Performance tracking",
      "Priority support",
      "Launch & walkthrough",
    ],
  },
  {
    key: "studio",
    name: "Studio",
    description: "Full product + multi-agent orchestration + 30-day security monitoring.",
    delivery: "Custom timeline",
    features: [
      "Your own developer",
      "Multi-agent orchestration",
      "30-day security audit & monitoring",
      "Dedicated hosting",
      "Custom integrations",
      "Guaranteed support & training",
    ],
  },
  {
    key: "agent",
    name: "Agent-Only",
    description: "Already have a website? Bolt on an autonomous agent. New capability, lower cost.",
    delivery: "7–10 day delivery",
    features: [
      "Agent scoping & brief",
      "One deployed autonomous agent",
      "WhatsApp / web integration",
      "7 days post-launch support",
    ],
  },
];

export function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("growth");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activePackage, setActivePackage] = useState<{ name: string; price: number } | null>(null);
  const { toast } = useToast();

  const formatPrice = (type: keyof typeof PRICES) => {
    const priceObj = PRICES[type];
    if (currency === "USD") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(priceObj.usd);
    } else {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
      }).format(priceObj.ngn);
    }
  };

  return (
    <>
      <section id="pricing" className="py-24 md:py-32 bg-[#050505] text-[#E3DBD8]">
        <div className="container mx-auto px-4 md:px-6">

          {/* Header Section */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-white/20 mb-12 select-none"
            >
              Pricing
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
                <span className="block text-2xl font-bold mb-1 text-white leading-none">005</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Pricing</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                  Websites that launch fast. <br />Agents that work 24/7.
                </h3>
              </div>
              <div className="md:col-span-4 flex flex-col items-end justify-end md:h-full gap-6">
                <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                  Fixed-price packages with optional agent capabilities. Tell us your idea, agree on the plan, and we'll ship it.
                </p>
              </div>
            </div>
          </div>

          {/* Free Preview Promo CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-24 p-8 md:p-12 rounded-3xl glass-panel bg-gradient-to-br from-primary/10 via-transparent to-transparent border-primary/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gift size={120} className="text-primary rotate-12" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest">Active Promo</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                  Free Preview Promo 🎁
                </h3>
                <p className="text-lg text-white/50 max-w-xl leading-relaxed">
                  We build your product for free. You only pay for hosting and domain if you love the result. Simple, risk-free, and high-quality.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => window.location.href = "/promo"}
                  className="group relative inline-flex items-center gap-8 glass-panel rounded-full px-8 md:px-12 py-5 md:py-7 transition-all overflow-hidden w-full md:w-auto justify-center shadow-2xl interactive cursor-pointer border-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-white font-black text-sm md:text-xl tracking-tight relative z-10 uppercase">
                    Get Your Free Preview
                  </span>
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500 relative z-10 shadow-xl shadow-primary/40">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 leading-none" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div className="pl-4 border-l-4 border-primary">
              <h3 className="text-3xl font-bold text-white tracking-tight">Launch Packages</h3>
            </div>

            {/* Currency Toggle */}
            <div className="flex items-center gap-3 bg-white/10 p-1.5 rounded-full border border-white/20">
              <button
                onClick={() => setCurrency("USD")}
                className={cn(
                  "px-8 py-2.5 rounded-full text-xs font-bold transition-all relative z-10",
                  currency === "USD" ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white"
                )}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency("NGN")}
                className={cn(
                  "px-8 py-2.5 rounded-full text-xs font-bold transition-all relative z-10",
                  currency === "NGN" ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white"
                )}
              >
                NGN
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {plans.map((plan) => (
              <motion.div
                key={plan.key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                animate={selectedPlan === plan.key ? { scale: 1.02, y: -5 } : { scale: 1, y: 0 }}
                onClick={() => setSelectedPlan(plan.key)}
                className={cn(
                  "relative rounded-3xl overflow-hidden flex flex-col group h-full glass-panel interactive cursor-pointer transition-all duration-500",
                  selectedPlan === plan.key
                    ? "border-primary border-2 shadow-[0_20px_40px_-15px_rgba(var(--color-primary-rgb),0.3)] bg-primary/5"
                    : "hover:bg-white/[0.04] border-white/5"
                )}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-2 tracking-[0.2em] uppercase text-center z-20 shadow-lg">
                    {plan.badge}
                  </div>
                )}
                {selectedPlan === plan.key && !plan.badge && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-5 py-2 rounded-bl-2xl tracking-[0.2em] uppercase z-20 shadow-lg">SELECTED</div>
                )}
                <div className={cn("p-8 flex flex-col h-full", plan.badge ? "pt-12" : "")}>
                  {/* Info */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-2 font-display">{plan.name}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{plan.description}</p>
                  </div>
                  {/* Price */}
                  <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currency}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={cn(
                          "font-bold text-white font-display text-center",
                          currency === "NGN" ? "text-2xl" : "text-3xl"
                        )}
                      >
                        {formatPrice(plan.key)}
                      </motion.div>
                    </AnimatePresence>
                    <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">One-time · {plan.delivery}</span>
                  </div>
                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-3 text-sm text-white/50">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* CTA */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePackage({ name: plan.name, price: 0 });
                      setIsCheckoutOpen(true);
                    }}
                    className={cn(
                      "group relative inline-flex items-center gap-4 glass-panel rounded-full px-6 py-4 transition-all overflow-hidden w-full justify-center shadow-2xl interactive cursor-pointer border-none mt-auto",
                      selectedPlan === plan.key ? "bg-primary/10 border-primary" : "border-white/5"
                    )}
                  >
                    <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className={cn(
                      "text-white font-black tracking-tight relative z-10 uppercase",
                      "text-xs"
                    )}>
                      Reserve Slot
                    </span>
                    <div className={cn(
                      "w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-white transition-all duration-500 relative z-10 shadow-lg",
                      selectedPlan === plan.key ? "bg-primary shadow-primary/40" : "bg-white/10 group-hover:bg-primary"
                    )}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reserve Microcopy */}
          <div className="text-center border-t border-white/5 mt-16 pt-12">
            <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed">
              Reserve your slot for free — no deposit, no commitment. Once you make the final payment, everything is yours — the website, the agent, the whole thing.
            </p>
          </div>

          <CheckoutDialog
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            price={0}
            currency={currency}
            packageName={activePackage?.name || ""}
          />
        </div>
      </section>
    </>
  );
}
