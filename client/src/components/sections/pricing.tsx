import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const plans = [
    {
      name: "Studio",
      price: "49",
      desc: "For scaling businesses",
      planName: "Basic",
      seats: "2",
      features: ["Smart Deployment", "Basic Monitoring", "Core Security", "Email Support", "5 team seats", "Basic Analytics", "Standard API"],
      highlight: false,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
    },
    {
      name: "Scale",
      price: "89",
      desc: "For growing teams",
      planName: "Advanced",
      seats: "6",
      features: ["All Studio features", "AI optimization", "Advanced monitoring", "Enhanced security", "24/7 support", "Auto-scaling", "Full analytics", "Priority API"],
      highlight: true,
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop"
    },
    {
      name: "Supreme",
      price: "249",
      desc: "For large organizations",
      planName: "Enterprise",
      seats: "100",
      features: ["All Scale features", "Dedicated support", "Private hosting", "Custom security", "Training included", "Priority features", "Custom reporting", "Enterprise SLA"],
      highlight: false,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#050505] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#1C1D20] mb-12 select-none"
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
                Transparent, outcome-focused pricing.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                One-time launch packages + optional monthly support. Reserve a slot with a refundable $500 deposit.
              </p>
            </div>
          </div>
        </div>

        {/* Launch Packages List */}
        <div className="flex flex-col gap-4 mb-20">
          <h3 className="text-2xl font-medium text-white mb-6 pl-2 border-l-4 border-primary">Launch Packages <span className="text-muted-foreground text-sm font-normal ml-2">(One-time)</span></h3>

          {/* Starter Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#1C1D20] group hover:border-white/10 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[250px]">
              {/* Info */}
              <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-2 font-display">Starter</h4>
                <p className="text-white/40 text-sm leading-relaxed">Perfect for proofs of concept and solo founders looking to validate fast.</p>
              </div>
              {/* Price */}
              <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white font-display">$2,500</div>
                <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">One-time</span>
              </div>
              {/* Features */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                <ul className="space-y-3 text-sm text-white/50">
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Template setup</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Stripe & Auth</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Basic Admin</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">7 days support</span></li>
                </ul>
              </div>
              {/* CTA */}
              <div className="lg:col-span-3 p-8 flex items-center justify-center">
                <Button className="w-full h-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-sm tracking-tight transition-all active:scale-95">
                  Reserve Slot — $500
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Scale Plan (Recommended) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="relative rounded-3xl overflow-hidden border-2 border-primary bg-[#1C1D20] group"
          >
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[250px]">
              {/* Info */}
              <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-2 font-display">Scale</h4>
                <p className="text-white/40 text-sm leading-relaxed">Best for teams going after paying users and traction.</p>
              </div>
              {/* Price */}
              <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white font-display">$7,500</div>
                <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">One-time</span>
              </div>
              {/* Features */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/50 w-full">
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Custom branding</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Advanced analytics</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Priority support</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">14-day launch</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Deploy scripts</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Stripe advanced</span></li>
                </ul>
              </div>
              {/* CTA */}
              <div className="lg:col-span-3 p-8 flex items-center justify-center">
                <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-sm tracking-tight transition-all active:scale-95 shadow-xl shadow-primary/30">
                  Reserve Slot — $500
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#1C1D20] group hover:border-white/10 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[250px]">
              {/* Info */}
              <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-2 font-display">Enterprise</h4>
                <p className="text-white/40 text-sm leading-relaxed">For complex requirements and custom heavy lifting.</p>
              </div>
              {/* Price */}
              <div className="lg:col-span-2 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white font-display">Custom</div>
                <span className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-2">Bespoke</span>
              </div>
              {/* Features */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                <ul className="space-y-3 text-sm text-white/50">
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Dedicated engineer</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Private hosting</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">Complex Integrations</span></li>
                  <li className="flex gap-3 items-center"><Check className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">SLA & training</span></li>
                </ul>
              </div>
              {/* CTA */}
              <div className="lg:col-span-3 p-8 flex items-center justify-center">
                <Button className="w-full h-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-sm tracking-tight transition-all active:scale-95">
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Monthly Support Add-ons */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-white mb-8 pl-2 border-l-4 border-white/20">Monthly Support Add-ons <span className="text-muted-foreground text-sm font-normal ml-2">(Optional)</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#1C1D20] border border-white/5">
              <h4 className="font-bold text-lg text-white mb-1">Support Lite</h4>
              <div className="text-2xl font-medium text-primary mb-4">$200<span className="text-sm text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground">Small fixes & monitoring.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1C1D20] border border-primary/50 relative">
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h4 className="font-bold text-lg text-white mb-1">Support Pro</h4>
              <div className="text-2xl font-medium text-primary mb-4">$500<span className="text-sm text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground">Priority fixes, monthly health checks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#1C1D20] border border-white/5">
              <h4 className="font-bold text-lg text-white mb-1">Support Plus</h4>
              <div className="text-2xl font-medium text-primary mb-4">$1,200<span className="text-sm text-muted-foreground">/mo</span></div>
              <p className="text-sm text-muted-foreground">Dedicated time, quarterly strategy, backups & audits.</p>
            </div>
          </div>
        </div>

        {/* Reserve Microcopy */}
        <div className="text-center border-t border-white/5 pt-12">
          <p className="text-muted-foreground">
            Reserve your slot with a refundable $500 deposit. Final payment triggers transfer of full source and DB export.
          </p>
        </div>

      </div>
    </section>
  );
}
