import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 7,
      name: "Amina Okoro",
      role: "Operations Head",
      company: "XPlus",
      quote: "veri—able Studio transformed our vision for XPlus into a high-performance reality in just 7 days. Their ongoing maintenance and rapid feature deployment have been instrumental in our growth. They don't just build software; they build businesses.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Pearl Hope",
      role: "Web3 Social Media Intern & Writer",
      company: "Independent",
      quote: "First off, I am grateful to have known Veri—able. My website got the best hands, honestly. Timi and Dennis showed so much concern for it that it looked too good to be mine. Dennis did a super great job to design it. I am awed to see all that my head roughly sketched turn into a masterpiece. He is attentive to details, respects feedbacks and suggestions. Plus, he does a great job in the speed of light. State your corrections and take a nap. Dennis is working to make your dream come true. I appreciate the work done. Thank you so much, Veri—able.",
      image: "/clientpics/pearl.png"
    }
  ];

  const testimonial = testimonials[activeIndex];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
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
        <div className="bg-[#1C1D20] border border-white/5 rounded-3xl overflow-hidden mb-8 lg:h-[600px] min-h-[500px] flex flex-col lg:flex-row">

          {/* Image Section (Desktop: Left, Mobile: Top) */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-white/5">
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
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D20] via-transparent to-transparent opacity-40" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between relative">

            <div className="flex-1 flex flex-col items-start justify-start overflow-y-auto scrollbar-hide pr-4 pt-4 lg:pt-0">
              <Quote className="w-12 h-12 text-white/10 mb-8 fill-white/10 shrink-0" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-base md:text-lg lg:text-xl font-medium text-white/90 italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <span>{testimonial.role}</span>
                      <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Thumbnails Navigation Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-2 hidden md:block">
            <div className="text-sm text-muted-foreground mb-4">Reviews</div>
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeIndex === index ? "w-8 bg-primary" : "w-1.5 bg-white/10"
                  )}
                />
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

            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-24 h-32 shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 relative border-2",
                  activeIndex === index
                    ? "border-primary shadow-lg shadow-primary/20 scale-105 z-10"
                    : "border-white/5 opacity-50 hover:opacity-100"
                )}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    activeIndex === index ? "scale-110" : "scale-100"
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
