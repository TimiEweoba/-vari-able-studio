"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown, ArrowRight, Monitor, Smartphone, PenTool, Video, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { isMobile } from "@/lib/animations";

const services = [
  {
    id: "v.01",
    label: "Web Development",
    title: "Full-Stack Websites",
    description: "High-performance, scalable web applications built from front to back. We combine beautiful, reactive frontends with robust, secure backend architectures tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=800&auto=format&fit=crop",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    id: "v.02",
    label: "App Development",
    title: "Mobile Apps",
    description: "Cross-platform mobile applications designed for seamless user experiences. We deliver fast, intuitive, and feature-rich apps for both iOS and Android ecosystems.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&h=800&auto=format&fit=crop",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    id: "v.03",
    label: "Product Design",
    title: "UI/UX Designs",
    description: "World-class interface design and user experience research. We craft intuitive, accessible, and stunning visuals that convert visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&h=800&auto=format&fit=crop",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: "v.04",
    label: "Motion & Graphics",
    title: "2D & 3D Animations",
    description: "Captivating motion graphics, product animations, and immersive 3D experiences that elevate your brand narrative and engage your audience.",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1200&h=800&auto=format&fit=crop",
    icon: <Video className="w-6 h-6" />
  },
  {
    id: "v.05",
    label: "Autonomous Agents",
    title: "AI Agents",
    description: "Deploy autonomous agents that handle customer support, lead qualification, inventory alerts, and payment follow-ups — 24/7, no human intervention. Built with security-first architecture.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&h=800&auto=format&fit=crop",
    icon: <Bot className="w-6 h-6" />
  }
];

export function Services() {
  const [activeId, setActiveId] = useState("v.01");

  return (
    <section id="services" className="py-24 md:py-32 bg-[#161719] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-white/20 mb-12 select-none"
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
                Digital experiences <br />that drive growth.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                From ideation to deployment, we build end-to-end digital solutions that give your brand a competitive edge.
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
                  "relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-2xl",
                  activeId === service.id
                    ? "bg-primary flex-[4] min-h-[500px] md:min-h-0 shadow-2xl shadow-primary/20"
                    : "glass-panel flex-1 hover:bg-white/[0.04] min-h-[100px] md:min-h-0 md:min-w-[100px]"
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
                        <div className="mt-4 rounded-xl overflow-hidden aspect-[4/3] w-full bg-black/20 relative">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
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

          <Link href="/tech" className="group relative inline-flex items-center gap-8 glass-panel rounded-full px-8 md:px-12 py-5 md:py-7 transition-all overflow-hidden w-full md:w-auto justify-center shadow-2xl interactive cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="text-white font-black text-sm md:text-xl tracking-tight relative z-10 uppercase">
              See All Our Services
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500 relative z-10 shadow-xl shadow-primary/40">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 leading-none" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}



