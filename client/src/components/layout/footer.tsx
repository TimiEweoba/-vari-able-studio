import { Link } from "wouter";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="veri—able Logo" className="w-8 h-8 object-contain" />
              veri—able
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              An end-to-end digital product studio. We build the products of tomorrow in record time.
              Full source ownership. No lock-in.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/work" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#process" className="hover:text-primary transition-colors">Process</a></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Reach Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="text-white/60">Ikeja, Lagos, Nigeria</li>
              <li className="flex flex-col gap-1">
                <a href="mailto:contact@veriable.xyz" className="hover:text-primary transition-colors">contact@veriable.xyz</a>
                <a href="mailto:sales@veriable.xyz" className="hover:text-primary transition-colors">sales@veriable.xyz</a>
              </li>
              <li className="pt-2 border-t border-white/5 flex flex-col gap-2">
                <Link href="/privacy" className="hover:text-primary transition-colors text-xs">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors text-xs">Terms of Service</Link>
                <Link href="/compliance" className="hover:text-primary transition-colors text-xs">Compliance</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} veri—able. Built for builders.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <motion.a
                href="https://web.facebook.com/profile.php?id=61586865515139"
                target="_blank"
                whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
                className="text-muted-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
                className="text-muted-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://wa.me/2348144657589"
                target="_blank"
                whileHover={{ scale: 1.1, color: "var(--color-primary)" }}
                className="text-muted-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </motion.a>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-muted-foreground">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
