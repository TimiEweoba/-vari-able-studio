import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Instagram, Youtube, MessageCircle, ChevronDown, Rocket, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactRequest } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function CTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <section id="contact" className="relative bg-[#1A1B1E] text-white">

      {/* Main Contact Section */}
      <div className="min-h-screen flex flex-col">

        {/* Top Area - Large Title */}
        <div className="flex-1 flex items-center justify-center py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold tracking-tighter leading-[0.9] text-primary"
            >
              Let's Talk.
            </motion.h2>
          </div>
        </div>

        {/* Bottom Area - Content Grid */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              {/* Left Column */}
              <div className="space-y-12">

                {/* Follow Us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-sm font-medium text-white/50 mb-6 uppercase tracking-wider">Follow us</h3>
                  <div className="flex gap-3">
                    {[Linkedin, Twitter, Instagram, MessageCircle, Youtube, MessageCircle].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(235, 81, 96, 0.1)", borderColor: "var(--color-primary)" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Why Build with veri—able */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-sm font-medium text-white/50 mb-6 uppercase tracking-wider">Why founders build with veri—able</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none">•</span>
                      <span>Rapid Launch: Idea to MVP in 14 days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none">•</span>
                      <span>Modular Tech: Pre-built, production-ready infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none">•</span>
                      <span>Total Ownership: You keep the source, DB, and keys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none">•</span>
                      <span>Productized Speed: Skip the bloat, focus on growth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none">•</span>
                      <span>Scale Ready: Built on a foundation that handles 50x growth</span>
                    </li>
                  </ul>
                </motion.div>

              </div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#252629] rounded-2xl p-8 lg:p-10 border border-white/5 relative overflow-hidden"
              >
                {/* Submit Success Overlay */}
                <AnimatePresence>
                  {mutation.isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-[#252629] z-20 flex flex-col items-center justify-center p-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12 }}
                        className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                      <p className="text-white/50 text-sm mb-8">We've received your request and our team will get back to you within 24 hours.</p>
                      <button
                        onClick={() => mutation.reset()}
                        className="text-primary font-medium hover:underline text-sm"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">Ready to lock your scope?</h3>
                  <p className="text-white/50 text-sm">Send us your brief — we'll jump on a scoping call within 24 hours.</p>
                </div>

                <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-5">
                  <div>
                    <input
                      {...form.register("name")}
                      type="text"
                      placeholder="Your Name"
                      disabled={mutation.isPending}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    />
                    {form.formState.errors.name && (
                      <span className="text-red-500 text-[10px] uppercase font-bold mt-1 block tracking-wider">
                        {form.formState.errors.name.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      {...form.register("email")}
                      type="email"
                      placeholder="Your Email"
                      disabled={mutation.isPending}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    />
                    {form.formState.errors.email && (
                      <span className="text-red-500 text-[10px] uppercase font-bold mt-1 block tracking-wider">
                        {form.formState.errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      {...form.register("company")}
                      type="text"
                      placeholder="Your Company (Optional)"
                      disabled={mutation.isPending}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <textarea
                      {...form.register("message")}
                      placeholder="Your message"
                      rows={4}
                      disabled={mutation.isPending}
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                    />
                    {form.formState.errors.message && (
                      <span className="text-red-500 text-[10px] uppercase font-bold mt-1 block tracking-wider">
                        {form.formState.errors.message.message}
                      </span>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={mutation.isPending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-lg font-medium transition-all mt-6 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

            </div>
          </div>
        </div>

      </div>

      {/* Expandable Footer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 overflow-hidden bg-[#0F1011]"
          >
            <div className="container mx-auto px-4 md:px-6 py-16">

              {/* Top Section - Logo & Address */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                {/* Logo & Tagline */}
                <div>
                  <div className="mb-6">
                    <img src="/images/logo.png" alt="veri—able Logo" className="w-12 h-12 object-contain mb-4" />
                    <div className="text-2xl font-bold tracking-tighter text-white mb-2">veri—able</div>
                    <div className="text-xs text-white/40 mb-2">// End-to-end digital product studio</div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
                    Rapidly building, launching, and scaling the software products of tomorrow.
                  </p>

                  {/* Address */}
                  <div className="space-y-1 text-sm text-white/50">
                    <p className="text-primary text-xl font-bold mb-2">veri—able</p>
                    <p>Banana Island</p>
                    <p>Ikoyi, Lagos</p>
                    <p>Nigeria</p>
                  </div>
                </div>

                {/* Navigation Links - Column 1 */}
                <div>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="#" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Home
                      </a>
                    </li>
                    <li><a href="#work" className="text-white/60 hover:text-primary transition-colors pl-4">Work</a></li>
                    <li><a href="#services" className="text-white/60 hover:text-primary transition-colors pl-4">Services</a></li>
                    <li><a href="#process" className="text-white/60 hover:text-primary transition-colors pl-4">Process</a></li>
                    <li><a href="#analytics" className="text-white/60 hover:text-primary transition-colors pl-4">Product Analytics</a></li>
                    <li><a href="#pricing" className="text-white/60 hover:text-primary transition-colors pl-4">Pricing</a></li>
                    <li><a href="#faq" className="text-white/60 hover:text-primary transition-colors pl-4">FAQ</a></li>
                    <li><a href="#testimonials" className="text-white/60 hover:text-primary transition-colors pl-4">Testimonials</a></li>
                  </ul>
                </div>

                {/* Navigation Links - Column 2 */}
                <div>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a href="#team" className="text-white/60 hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        The Team
                      </a>
                    </li>
                    <li><a href="#labs" className="text-white/60 hover:text-primary transition-colors pl-4">veri—able Lab®</a></li>
                    <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors pl-4">Contact</a></li>
                    <li><a href="#" className="text-white/60 hover:text-primary transition-colors pl-4">Terms & Service</a></li>
                    <li><a href="#" className="text-white/60 hover:text-primary transition-colors pl-4">Privacy Policy</a></li>
                    <li><a href="#" className="text-white/60 hover:text-primary transition-colors pl-4">GDPR Compliance</a></li>
                    <li><a href="#" className="text-white/60 hover:text-primary transition-colors pl-4">Data Protection</a></li>
                  </ul>
                </div>

              </div>

              {/* Newsletter Section */}
              <div className="max-w-2xl mb-16">
                <h3 className="text-2xl font-medium text-white mb-3">Insights for builders and founders</h3>
                <p className="text-white/50 text-sm mb-6">Join our newsletter and get launch playbooks and technical deep-dives.</p>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="flex-1 bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                  <p className="text-xs text-white/40">
                    By submitting, you agree to our <a href="#" className="text-primary hover:underline">Terms & Service</a>.
                  </p>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-xs text-white/30">2026 © | veri—able Studio | Managed by founders, built for makers.</p>

                <div className="flex gap-4">
                  {[Linkedin, Twitter, Instagram, Youtube, MessageCircle].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                      whileTap={{ scale: 0.8 }}
                      className="text-white/30 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>

                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.1, borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                >
                  <ChevronDown className="w-5 h-5 rotate-180" />
                </motion.button>
              </div>

              {/* Company Description */}
              <div className="mt-8 text-xs text-white/20 max-w-3xl">
                <p>veri—able Studio, registered in Nigeria, is a digital product studio specializing in high-performance infrastructure, high-fidelity design, and rapid scale implementation.</p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="border-t border-white/10 bg-[#0F1011]">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            <span>{isExpanded ? "Show less" : "Show more"}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </div>

    </section>
  );
}
