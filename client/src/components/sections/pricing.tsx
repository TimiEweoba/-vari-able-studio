import { useState } from "react";
import { Check, ArrowRight, Globe, Loader2, Mail, Gift } from "lucide-react";
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

export function Pricing() {
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
  const [selectedPackage, setSelectedPackage] = useState<"starter" | "scale" | "enterprise">("scale");
  const [selectedSupport, setSelectedSupport] = useState<"lite" | "pro" | "plus">("pro");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activePackage, setActivePackage] = useState<{ name: string, price: number } | null>(null);
  const { toast } = useToast();

  // NGN Prices as requested
  const PRICES = {
    starter: { usd: 2500, ngn: 1500000 },
    scale: { usd: 7500, ngn: 5000000 },
    reservation: { usd: 500, ngn: 500000 },
    support_lite: { usd: 200, ngn: 200000 },
    support_pro: { usd: 500, ngn: 500000 },
    support_plus: { usd: 1200, ngn: 1200000 },
  };

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
                  Custom-built quality, delivered fast.
                </h3>
              </div>
              <div className="md:col-span-4 flex flex-col items-end justify-end md:h-full gap-6">
                <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                  Simple, fixed-price packages. Tell us your idea, agree on the plan, and we'll get started.
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {/* Starter Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              onClick={() => setSelectedPackage("starter")}
              className={cn(
                "relative rounded-2xl overflow-hidden flex flex-col group h-full glass-panel interactive cursor-pointer",
                selectedPackage === "starter"
                  ? "border-primary shadow-2xl shadow-primary/20 bg-primary/5"
                  : "hover:bg-white/[0.04]"
              )}
            >
              {selectedPackage === "starter" && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase z-20">SELECTED</div>
              )}
              <div className="p-10 flex flex-col h-full">
                {/* Info */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-3 font-display">Starter</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Get a polished first version of your product built from your idea. Perfect if you want to test your concept quickly.</p>
                </div>
                {/* Price */}
                <div className="mb-10 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currency}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={cn(
                        "font-bold text-white font-display text-center",
                        currency === "NGN" ? "text-3xl" : "text-4xl"
                      )}
                    >
                      {formatPrice("starter")}
                    </motion.div>
                  </AnimatePresence>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">One-time payment</span>
                </div>
                {/* Features */}
                <div className="flex-1 mb-10">
                  <ul className="space-y-4 text-sm text-white/50">
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Project Game Plan</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Solid Starting Template</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Login System & Hosting Setup</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>7 days priority support</span></li>
                  </ul>
                </div>
                {/* CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePackage({ name: "Starter", price: PRICES.reservation.usd });
                    setIsCheckoutOpen(true);
                  }}
                  className={cn(
                    "group relative inline-flex items-center gap-6 glass-panel rounded-full px-8 py-5 transition-all overflow-hidden w-full justify-center shadow-2xl interactive cursor-pointer border-none mt-auto",
                    selectedPackage === "starter" ? "bg-primary/10 border-primary" : "border-white/5"
                  )}
                >
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className={cn(
                    "text-white font-black tracking-tight relative z-10 uppercase",
                    currency === "NGN" ? "text-xs" : "text-sm"
                  )}>
                    Reserve — {formatPrice("reservation")}
                  </span>
                  <div className={cn(
                    "w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white transition-all duration-500 relative z-10 shadow-lg",
                    selectedPackage === "starter" ? "bg-primary shadow-primary/40" : "bg-white/10 group-hover:bg-primary"
                  )}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Scale Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              onClick={() => setSelectedPackage("scale")}
              className={cn(
                "relative rounded-2xl overflow-hidden flex flex-col group h-full glass-panel interactive cursor-pointer",
                selectedPackage === "scale"
                  ? "border-primary shadow-2xl shadow-primary/20 bg-primary/5"
                  : "hover:bg-white/[0.04]"
              )}
            >
              {selectedPackage === "scale" && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase z-20">SELECTED</div>
              )}
              <div className="p-10 flex flex-col h-full">
                {/* Info */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-3 font-display">Scale</h4>
                  <p className="text-white/40 text-sm leading-relaxed">For teams ready to attract paying customers and grow.</p>
                </div>
                {/* Price */}
                <div className="mb-10 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currency}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={cn(
                        "font-bold text-white font-display text-center",
                        currency === "NGN" ? "text-3xl" : "text-4xl"
                      )}
                    >
                      {formatPrice("scale")}
                    </motion.div>
                  </AnimatePresence>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">One-time payment</span>
                </div>
                {/* Features */}
                <div className="flex-1 mb-10">
                  <ul className="space-y-4 text-sm text-white/50">
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Tailored design plan</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Performance tracking</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Priority support</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>14-day delivery</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Launch & Walkthrough</span></li>
                  </ul>
                </div>
                {/* CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePackage({ name: "Scale", price: PRICES.reservation.usd });
                    setIsCheckoutOpen(true);
                  }}
                  className={cn(
                    "group relative inline-flex items-center gap-6 glass-panel rounded-full px-8 py-5 transition-all overflow-hidden w-full justify-center shadow-2xl interactive cursor-pointer border-none mt-auto",
                    selectedPackage === "scale" ? "bg-primary/10 border-primary" : "border-white/5"
                  )}
                >
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className={cn(
                    "text-white font-black tracking-tight relative z-10 uppercase",
                    currency === "NGN" ? "text-xs" : "text-sm"
                  )}>
                    Reserve — {formatPrice("reservation")}
                  </span>
                  <div className={cn(
                    "w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white transition-all duration-500 relative z-10 shadow-lg",
                    selectedPackage === "scale" ? "bg-primary shadow-primary/40" : "bg-white/10 group-hover:bg-primary"
                  )}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              onClick={() => setSelectedPackage("enterprise")}
              className={cn(
                "relative rounded-2xl overflow-hidden flex flex-col group h-full glass-panel interactive cursor-pointer",
                selectedPackage === "enterprise"
                  ? "border-primary shadow-2xl shadow-primary/20 bg-primary/5"
                  : "hover:bg-white/[0.04]"
              )}
            >
              {selectedPackage === "enterprise" && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase z-20">SELECTED</div>
              )}
              <div className="p-10 flex flex-col h-full">
                {/* Info */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-3 font-display">Enterprise</h4>
                  <p className="text-white/40 text-sm leading-relaxed">For bigger projects with special needs.</p>
                </div>
                {/* Price Area */}
                <div className="mb-10 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center min-h-[110px]">
                  <div className="text-4xl font-bold text-white font-display">Custom</div>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">Tailored pricing</span>
                </div>
                {/* Features */}
                <div className="flex-1 mb-10">
                  <ul className="space-y-4 text-sm text-white/50">
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Your own developer</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Dedicated hosting</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Custom Connections</span></li>
                    <li className="flex gap-3 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Guaranteed support & training</span></li>
                  </ul>
                </div>
                {/* CTA */}
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={cn(
                    "group relative inline-flex items-center gap-6 glass-panel rounded-full px-8 py-5 transition-all overflow-hidden w-full justify-center shadow-2xl interactive cursor-pointer border-none mt-auto",
                    selectedPackage === "enterprise" ? "bg-primary/10 border-primary" : "border-white/5"
                  )}
                >
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="text-white font-black text-sm tracking-tight relative z-10 uppercase">
                    Let's Talk
                  </span>
                  <div className={cn(
                    "w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white transition-all duration-500 relative z-10 shadow-lg",
                    selectedPackage === "enterprise" ? "bg-primary shadow-primary/40" : "bg-white/10 group-hover:bg-primary"
                  )}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Monthly Support Add-ons */}
          <div>
            <h3 className="text-2xl font-medium text-white mb-8 pl-2 border-l-4 border-white/20">Monthly Support <span className="text-muted-foreground text-sm font-normal ml-2">(Optional)</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                onClick={() => setSelectedSupport("lite")}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-8 rounded-3xl bg-[#141415] border transition-all cursor-pointer group relative",
                  selectedSupport === "lite" ? "border-primary shadow-lg shadow-primary/5" : "border-white/5"
                )}
              >
                {selectedSupport === "lite" && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
                <h4 className={cn(
                  "font-bold text-base mb-1 transition-colors",
                  selectedSupport === "lite" ? "text-white" : "text-white/60 group-hover:text-white"
                )}>Support Lite</h4>
                <div className={cn(
                  "font-bold text-primary mb-4",
                  currency === "NGN" ? "text-xl" : "text-2xl"
                )}>
                  {formatPrice("support_lite")}<span className="text-xs text-muted-foreground font-normal">/mo</span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed">Essential fixes, check-ups, and regular updates to keep things running.</p>
              </motion.div>

              <motion.div
                onClick={() => setSelectedSupport("pro")}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-8 rounded-3xl bg-[#141415] border transition-all cursor-pointer group relative",
                  selectedSupport === "pro" ? "border-primary shadow-lg shadow-primary/5" : "border-white/5"
                )}
              >
                {selectedSupport === "pro" && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
                <h4 className={cn(
                  "font-bold text-base mb-1 transition-colors",
                  selectedSupport === "pro" ? "text-white" : "text-white/60 group-hover:text-white"
                )}>Support Pro</h4>
                <div className={cn(
                  "font-bold text-primary mb-4",
                  currency === "NGN" ? "text-xl" : "text-2xl"
                )}>
                  {formatPrice("support_pro")}<span className="text-xs text-muted-foreground font-normal">/mo</span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed">Faster fixes, regular check-ups, and we respond within 48 hours.</p>
              </motion.div>

              <motion.div
                onClick={() => setSelectedSupport("plus")}
                whileHover={{ y: -5 }}
                className={cn(
                  "p-8 rounded-3xl bg-[#141415] border transition-all cursor-pointer group relative",
                  selectedSupport === "plus" ? "border-primary shadow-lg shadow-primary/5" : "border-white/5"
                )}
              >
                {selectedSupport === "plus" && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
                <h4 className={cn(
                  "font-bold text-base mb-1 transition-colors",
                  selectedSupport === "plus" ? "text-white" : "text-white/60 group-hover:text-white"
                )}>Support Plus</h4>
                <div className={cn(
                  "font-bold text-primary mb-4",
                  currency === "NGN" ? "text-xl" : "text-2xl"
                )}>
                  {formatPrice("support_plus")}<span className="text-xs text-muted-foreground font-normal">/mo</span>
                </div>
                <p className="text-xs text-white/40 leading-relaxed">Dedicated time with our team, regular reviews, and help as you grow.</p>
              </motion.div>
            </div>
          </div>


          {/* Reserve Microcopy */}
          <div className="text-center border-t border-white/5 mt-16 pt-12">
            <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed">
              Reserve your slot with a refundable {formatPrice("reservation")} deposit. Once you make the final payment, everything is yours — the website, the data, the whole thing. Prices include payment processing fees.
            </p>
          </div>

          <CheckoutDialog
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            price={currency === "USD" ? PRICES.reservation.usd : PRICES.reservation.ngn}
            currency={currency}
            packageName={activePackage?.name || ""}
          />
        </div>
      </section>
    </>
  );
}
