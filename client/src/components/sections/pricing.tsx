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
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#52525B] mb-12"
          >
            Pricing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l-2 border-primary/20 pl-6 md:pl-0 md:border-l-0">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6">
              <span className="block text-2xl font-bold mb-1">005</span>
              <span className="text-sm text-muted-foreground">vari-able</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Transparent, outcome-focused pricing.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <p className="text-muted-foreground text-right max-w-[200px]">
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
                <h4 className="text-2xl font-bold text-white mb-2">Starter</h4>
                <p className="text-muted-foreground text-sm">Perfect for proofs of concept and solo founders.</p>
              </div>
              {/* Price */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white">$2,500</div>
                <span className="text-xs text-muted-foreground mt-1">One-time payment</span>
              </div>
              {/* Features */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Template setup</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Stripe & Auth</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Basic Admin</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> 7 days support</li>
                </ul>
              </div>
              {/* CTA */}
              <div className="lg:col-span-2 p-8 flex items-center justify-center">
                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10">Reserve - $500</Button>
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
                <h4 className="text-2xl font-bold text-white mb-2">Scale</h4>
                <p className="text-muted-foreground text-sm">Best for teams going after paying users.</p>
              </div>
              {/* Price */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white">$7,500</div>
                <span className="text-xs text-muted-foreground mt-1">One-time payment</span>
              </div>
              {/* Features */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground w-full">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Custom branding</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Advanced analytics</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Priority support</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> 14-day launch</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Deploy scripts</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Stripe advanced</li>
                </ul>
              </div>
              {/* CTA */}
              <div className="lg:col-span-2 p-8 flex items-center justify-center">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Reserve - $500</Button>
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
                <h4 className="text-2xl font-bold text-white mb-2">Enterprise</h4>
                <p className="text-muted-foreground text-sm">For complex requirements and custom integrations.</p>
              </div>
              {/* Price */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-white">Custom</div>
                <span className="text-xs text-muted-foreground mt-1">Contact us</span>
              </div>
              {/* Features */}
              <div className="lg:col-span-3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 flex items-center">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Dedicated engineer</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Private hosting</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> Integrations</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-primary" /> SLA & training</li>
                </ul>
              </div>
              {/* CTA */}
              <div className="lg:col-span-2 p-8 flex items-center justify-center">
                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10">Contact Sales</Button>
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
