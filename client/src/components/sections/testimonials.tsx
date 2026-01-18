import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Henrik Vogt",
      role: "Operation Director",
      company: "Altrix",
      quote: "veri—able was always a step ahead, from edge computing strategies to scalable deployment. They brought clarity, speed, and long-term thinking to every part of our build.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "CTO",
      company: "Novascape",
      quote: "The automated infrastructure scaling saved us during our product launch. We handled 50x traffic without a single hiccup. veri—able is the real deal.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Marcus Chen",
      role: "Lead Developer",
      company: "QuantFlow",
      quote: "Integration was seamless. The API documentation is comprehensive and the support team actually speaks our language. Best dev tool investment of the year.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Product Manager",
      company: "Lumina",
      quote: "We moved from idea to MVP in 10 days. The pre-built templates for auth and billing allowed us to focus entirely on our unique value prop.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Founder",
      company: "Orbit",
      quote: "veri—able's security features gave our enterprise clients the confidence they needed to sign with us. It's enterprise-grade infrastructure for startups.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Jessica Lee",
      role: "VP of Engineering",
      company: "Vertex",
      quote: "The analytics dashboard is beautiful and insightful. We finally have a single source of truth for our system health and user adoption metrics.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#161719] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-[#1C1D20] mb-12 select-none"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
              <span className="block text-2xl font-bold mb-1 text-white leading-none">008</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Reviews</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Trusted by teams, startups, and enterprises that value speed and simplicity.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                Real stories from people who use veri—able daily – why they chose it, and how it changed their businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="bg-[#1C1D20] border border-white/5 rounded-3xl overflow-hidden mb-8 min-h-[500px] flex flex-col lg:flex-row">

          {/* Image Section (Desktop: Left, Mobile: Top) */}
          <div className="lg:w-1/3 relative h-[300px] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0"
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D20] via-transparent to-transparent opacity-40" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 p-8 lg:p-16 flex flex-col justify-between relative">

            <div className="flex-1 flex flex-col justify-center">
              <Quote className="w-12 h-12 text-white/10 mb-8 fill-white/10" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white italic leading-tight mb-12">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{testimonials[activeIndex].name}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>{testimonials[activeIndex].role}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>{testimonials[activeIndex].company}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Navigation Arrows (Inside Content Area on right) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden lg:flex flex-col border-l border-white/5 h-full">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 w-24 flex items-center justify-center text-white/50 hover:text-white transition-all border-b border-white/5 group"
              >
                <ArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 w-24 flex items-center justify-center text-white/50 hover:text-white transition-all group"
              >
                <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

          </div>
        </div>

        {/* Thumbnails Navigation Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-2 hidden md:block">
            <div className="text-sm text-muted-foreground mb-4">Reviews</div>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-primary' : 'w-1.5 bg-white/10'}`} />
              ))}
            </div>
          </div>

          <div className="md:col-span-10 flex gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {/* Static 'Feature/Upload' Block */}
            <div className="w-24 h-32 shrink-0 bg-[#1C1D20] border border-white/5 rounded-xl flex items-center justify-center group cursor-pointer hover:border-primary transition-colors relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 z-10">
                <ArrowUp className="w-6 h-6 text-primary mb-2 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-24 h-32 shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 relative border-2",
                  idx === activeIndex
                    ? "border-primary shadow-lg shadow-primary/20 scale-105 z-10"
                    : "border-white/5 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:border-white/20"
                )}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    idx === activeIndex ? "scale-110" : "scale-100"
                  )}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
