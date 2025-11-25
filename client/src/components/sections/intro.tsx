import { Code2, Layers, LayoutDashboard, Server } from "lucide-react";
import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="py-20 border-b border-white/5 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-medium text-white mb-6">
          We run your product launch so you can focus on growth. 
          <span className="text-muted-foreground"> Full-stack builds, Stripe billing, admin dashboards, and deployment—delivered clean and production-ready.</span>
        </h2>
      </div>
    </section>
  );
}
