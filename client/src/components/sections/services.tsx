import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown, Waves, Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { isMobile } from "@/lib/animations";

const services = [
  {
    id: "01",
    label: "Foundations",
    title: "Architecture & UI Foundations",
    description: "Proprietary internal architecture and high-fidelity UI foundations that allow us to build twice as fast without sacrificing your custom requirements.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    icon: <Waves className="w-6 h-6" />
  },
  {
    id: "02",
    label: "Deploy",
    title: "Architecture & Deploy",
    description: "Opinionated deployment patterns (Next.js, CI/CD, one-click deploy scripts), hosting guidance, and backup/recovery checklists so deployments are repeatable and reliable.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: "03",
    label: "Security",
    title: "Security & Compliance",
    description: "Basic security hardening, monitoring hooks, and a 30-day patch window. For higher risk projects we scope audits and mitigations as add-ons.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: "04",
    label: "Growth",
    title: "Scale & Growth",
    description: "Conversion-focused onboarding, analytics dashboards, and prioritized performance tuning so your early customers stick and pay.",
    image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2528&auto=format&fit=crop",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

export function Services() {
  const [activeId, setActiveId] = useState("01");

  return (
    <section id="services" className="py-24 bg-[#161719] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-[#1C1D20] mb-12 select-none"
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6">
              <span className="block text-2xl font-bold mb-1">002</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Solutions</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Productized services for faster launches.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                Future-proof, modular solutions that scale with your business. Pick the modules you need and get a working product — fast.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="h-auto">
          {/* Accordion / Cards */}
          <div className="w-full flex flex-col md:flex-row gap-4 min-h-[500px] md:h-[650px]">
            {services.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-3xl",
                  activeId === service.id
                    ? "bg-primary flex-[4] min-h-[500px] md:min-h-0 shadow-2xl shadow-primary/20"
                    : "bg-[#1C1D20] flex-1 hover:bg-[#252629] min-h-[100px] md:min-h-0 md:min-w-[100px] border border-white/5"
                )}
                layout={!isMobile}
              >
                <div className="h-full flex flex-col p-6 relative z-10">
                  {/* Top Number & Label (Mobile Friendly) */}
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        {activeId === service.id ? <ArrowUpRight className="w-6 h-6" /> : <ArrowDown className="w-5 h-5 text-muted-foreground" />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-3xl md:text-4xl font-medium leading-none tracking-tighter ${activeId === service.id ? "opacity-100" : "opacity-40"}`}>
                          {service.id}
                        </span>
                        {/* Show label here on mobile if inactive to prevent overlap */}
                        {activeId !== service.id && (
                          <span className="text-xs text-muted-foreground mt-2 md:hidden">
                            {service.label}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Active Content */}
                  <AnimatePresence mode="popLayout">
                    {activeId === service.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex-1 flex flex-col justify-end gap-6 mt-8"
                      >
                        <h3 className="text-3xl font-medium leading-tight">{service.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                          {service.description}
                        </p>

                        {/* Card Image */}
                        <div className="mt-4 rounded-xl overflow-hidden aspect-[4/3] w-full bg-black/20">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Bottom Icon/Label */}
                        <div className="flex items-center gap-3 mt-2">
                          {service.icon}
                          <span className="font-medium">{service.label}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Inactive Label (Desktop) */}
                  {activeId !== service.id && (
                    <div className="absolute bottom-6 left-6 right-6 hidden md:block">
                      <span className="text-muted-foreground">{service.label}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Explore Services Callout */}
        <div className="mt-20 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-1">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/[0.03]" />
            ))}
          </div>

          <Link href="/tech" className="group flex items-center gap-6 cursor-pointer">
            <span className="text-xl md:text-2xl font-medium text-white/40 group-hover:text-white transition-colors">
              Explore Services in Depth
            </span>
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white transition-transform group-hover:scale-110 active:scale-95 shadow-lg shadow-primary/20">
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
