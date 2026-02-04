import { useState } from "react";
import { Check, ArrowRight, Globe, Loader2, Mail } from "lucide-react";
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <>
      <section id="pricing" className="py-24 bg-[#050505] text-[#E3DBD8]">
        <div className="container mx-auto px-4 md:px-6">

          {/* Header Section */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-[#1C1D20] mb-12 select-none"
            >
              Pricing
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
                <span className="block text-2xl font-bold mb-1 text-white leading-none">005</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Economics</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                  Bespoke engineering, productized speed.
                </h3>
              </div>
              <div className="md:col-span-4 flex flex-col items-end justify-end md:h-full gap-6">
                <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                  Fixed-scope launch packages. Brief us, lock the roadmap, and deposit to start the sprint.
                </p>

                {/* Currency Toggle */}
                <div className="flex items-center gap-3 bg-white/10 p-1.5 rounded-full border border-white/20">
                  <button
                    onClick={() => setCurrency("USD")}
                    className={cn(
                      "px-6 py-2 rounded-full text-xs font-bold transition-all relative z-10",
                      currency === "USD" ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white"
                    )}
                  >
                    USD
                  </button>
                  <button
                    onClick={() => setCurrency("NGN")}
                    className={cn(
                      "px-6 py-2 rounded-full text-xs font-bold transition-all relative z-10",
                      currency === "NGN" ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white"
                    )}
                  >
                    NGN
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mb-24">
            <div className="flex items-center justify-between mb-4 pl-4 border-l-4 border-primary">
              <h3 className="text-3xl font-bold text-white tracking-tight">Launch Packages</h3>
            </div>

            {/* Starter Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              onClick={() => setSelectedPackage("starter")}
              className={cn(
                "relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer bg-[#141415] group",
                selectedPackage === "starter"
                  ? "border-primary shadow-2xl shadow-primary/10"
                  : "border-white/5 hover:border-white/10"
              )}
            >
              {selectedPackage === "starter" && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase z-20">SELECTED</div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[200px]">
                {/* Info */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-white mb-2 font-display">Starter</h4>
                  <p className="text-white/40 text-xs leading-relaxed">Build a high-fidelity MVP from your brief. Perfect for solo founders looking to validate fast.</p>
                </div>
                {/* Price */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currency}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={cn(
                        "font-bold text-white font-display text-center",
                        currency === "NGN" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
                      )}
                    >
                      {formatPrice("starter")}
                    </motion.div>
                  </AnimatePresence>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">One-time</span>
                </div>
                {/* Features */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                  <ul className="space-y-2 text-xs text-white/50">
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">MVP Technical Brief</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Modular Foundation</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Auth & Cloud Setup</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">7 days priority support</span></li>
                  </ul>
                </div>
                {/* CTA */}
                <div className="lg:col-span-3 p-8 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePackage({ name: "Starter", price: PRICES.reservation.usd });
                      setIsCheckoutOpen(true);
                    }}
                    className={cn(
                      "w-full h-14 rounded-2xl font-bold tracking-tight transition-all flex items-center justify-center gap-2 group/btn px-4 text-center",
                      currency === "NGN" ? "text-[10px] md:text-xs" : "text-sm",
                      selectedPackage === "starter"
                        ? "bg-primary text-white shadow-xl shadow-primary/20"
                        : "bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10"
                    )}
                  >
                    <span className="truncate">Reserve Slot — {formatPrice("reservation")}</span>
                    <ArrowRight className={cn(
                      "w-4 h-4 transition-all shrink-0",
                      selectedPackage === "starter" ? "translate-x-0" : "opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0"
                    )} />
                  </motion.button>
                </div>
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
                "relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer bg-[#141415] group",
                selectedPackage === "scale"
                  ? "border-primary shadow-2xl shadow-primary/10"
                  : "border-white/5 hover:border-white/10"
              )}
            >
              {selectedPackage === "scale" && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase z-20">SELECTED</div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[200px]">
                {/* Info */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-white mb-2 font-display">Scale</h4>
                  <p className="text-white/40 text-xs leading-relaxed">Custom heavy lifting for teams going after paying users and market traction.</p>
                </div>
                {/* Price */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currency}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={cn(
                        "font-bold text-white font-display text-center",
                        currency === "NGN" ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
                      )}
                    >
                      {formatPrice("scale")}
                    </motion.div>
                  </AnimatePresence>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">One-time</span>
                </div>
                {/* Features */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/50 w-full">
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Custom UI roadmap</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Advanced analytics</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Priority support</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">14-day sprint</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Deploy & Training</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Paystack Setup</span></li>
                  </ul>
                </div>
                {/* CTA */}
                <div className="lg:col-span-3 p-8 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePackage({ name: "Scale", price: PRICES.reservation.usd });
                      setIsCheckoutOpen(true);
                    }}
                    className={cn(
                      "w-full h-14 rounded-2xl font-bold tracking-tight transition-all flex items-center justify-center gap-2 group/btn px-4 text-center",
                      currency === "NGN" ? "text-[10px] md:text-xs" : "text-sm",
                      selectedPackage === "scale"
                        ? "bg-primary text-white shadow-xl shadow-primary/20"
                        : "bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10"
                    )}
                  >
                    <span className="truncate">Reserve Slot — {formatPrice("reservation")}</span>
                    <ArrowRight className={cn(
                      "w-4 h-4 transition-all shrink-0",
                      selectedPackage === "scale" ? "translate-x-0" : "opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0"
                    )} />
                  </motion.button>
                </div>
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
                "relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer bg-[#141415] group",
                selectedPackage === "enterprise"
                  ? "border-primary shadow-2xl shadow-primary/10"
                  : "border-white/5 hover:border-white/10"
              )}
            >
              {selectedPackage === "enterprise" && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl tracking-widest uppercase z-20">SELECTED</div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[200px]">
                {/* Info */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-white mb-2 font-display">Enterprise</h4>
                  <p className="text-white/40 text-xs leading-relaxed">For complex requirements and custom heavy lifting.</p>
                </div>
                {/* Price */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                  <div className="text-3xl md:text-4xl font-bold text-white font-display">Custom</div>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">Bespoke</span>
                </div>
                {/* Features */}
                <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                  <ul className="space-y-3 text-xs text-white/50">
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Dedicated engineer</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Private hosting</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">Complex Integrations</span></li>
                    <li className="flex gap-3 items-center"><Check className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">SLA & training</span></li>
                  </ul>
                </div>
                {/* CTA */}
                <div className="lg:col-span-3 p-8 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className={cn(
                      "w-full h-14 rounded-2xl font-bold text-sm tracking-tight transition-all",
                      selectedPackage === "enterprise"
                        ? "bg-primary text-white shadow-xl shadow-primary/20"
                        : "bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10"
                    )}
                  >
                    Contact Sales
                  </motion.button>
                </div>
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
                <p className="text-xs text-white/40 leading-relaxed">Essential fixes, monitoring, and regular dependency updates.</p>
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
                <p className="text-xs text-white/40 leading-relaxed">Priority fixes, performance health checks, and 48hr response time.</p>
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
                <p className="text-xs text-white/40 leading-relaxed">Dedicated engineering hours, quarterly audits, and custom scaling.</p>
              </motion.div>
            </div>
          </div>

          {/* Reserve Microcopy */}
          <div className="text-center border-t border-white/5 mt-16 pt-12">
            <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed">
              Reserve your slot with a refundable {formatPrice("reservation")} deposit. Final payment triggers transfer of full source, database ownership, and technical handover. Prices include local processing fees and 4% volatility protection.
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

