import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { toast } = useToast();
  const [location, setLocation] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.split("#")[1];

      if (location === "/") {
        const element = document.getElementById(id);
        if (element && (window as any).lenis) {
          (window as any).lenis.scrollTo(element, { offset: -100, duration: 1.5 });
        } else if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home first, the SmoothScroll/ScrollToTop will handle the hash
        setLocation("/");
        window.location.hash = id;
      }
      setIsMobileOpen(false);
    }
  };

  const navLinks = [
    { name: "Selected Work", href: "/#work", id: "01", isRoute: false },
    { name: "Expertise", href: "/#services", id: "02" },
    { name: "Our Process", href: "/#process", id: "03" },
    { name: "Smart Data", href: "/#analytics", id: "04" },
    { name: "Pricing", href: "/#pricing", id: "05" },
    { name: "Questions", href: "/#faq", id: "06" },
    { name: "Our Team", href: "/#team", id: "07" },
    { name: "Wall of Love", href: "/#testimonials", id: "08" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 px-6 py-2 rounded-2xl border",
            isScrolled
              ? "bg-[#0A0A0B]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
              : "bg-transparent border-transparent"
          )}
        >
          <Link href="/" className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-3 group">
            <div className="w-10 h-10 overflow-hidden rounded-xl bg-white/5 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/10">
              <img src="/images/logo.png" alt="veri—able Logo" className="w-full h-full object-contain" />
            </div>
            <span className="hidden md:inline-block">veri—able</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-4 2xl:gap-8 text-nowrap">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs 2xl:text-[13px] font-medium text-white/60 hover:text-white transition-all relative group py-2 interactive"
                  data-cursor="Jump"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs 2xl:text-[13px] font-medium text-white/60 hover:text-white transition-all relative group py-2 interactive"
                  data-cursor="Jump"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              )
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                window.location.href = "/promo";
              }}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white h-11 px-8 rounded-xl font-semibold transition-all hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary),transparent_60%)] hover:scale-105 active:scale-95 border-none cursor-pointer"
            >
              Free Preview Promo
            </Button>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-90"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] xl:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-[#0A0A0B] border-l border-white/10 z-[70] xl:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center p-2 ring-1 ring-white/10">
                    <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-bold text-white text-xl tracking-tight">veri—able</span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-white/70 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-8 py-4 scrollbar-hide">
                <div className="flex flex-col">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {link.isRoute ? (
                        <Link
                          href={link.href}
                          className="group flex items-center gap-5 py-5 border-b border-white/5 transition-all"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          <span className="text-[11px] font-mono text-primary/40 group-hover:text-primary transition-colors">{link.id}</span>
                          <span className="text-2xl font-semibold text-white/70 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                            {link.name}
                          </span>
                          <ArrowRight className="ml-auto w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:-rotate-45" />
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="group flex items-center gap-5 py-5 border-b border-white/5 transition-all"
                          onClick={(e) => {
                            handleNavClick(e, link.href);
                          }}
                        >
                          <span className="text-[11px] font-mono text-primary/40 group-hover:text-primary transition-colors">{link.id}</span>
                          <span className="text-2xl font-semibold text-white/70 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                            {link.name}
                          </span>
                          <ArrowRight className="ml-auto w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:-rotate-45" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-6">Let's build something epic</p>
                  <Button
                    onClick={() => {
                      setIsMobileOpen(false);
                      window.location.href = "/promo";
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-8 text-xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Free Preview Promo
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-10 bg-[#0D0D0E]/50 border-t border-white/5 mt-auto">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all ring-1 ring-white/5"><Twitter size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all ring-1 ring-white/5"><Instagram size={20} /></a>
                    <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all ring-1 ring-white/5"><Linkedin size={20} /></a>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-white/30 font-medium">© 2026 veri—able studio</p>
                    <p className="text-[11px] text-white/10">Crafted with precision.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

