import { ArrowRight, CreditCard, Database, Lock, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Work() {
  const features = [
    {
      id: "01",
      title: "Stripe",
      desc: "Billing & recurring",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "02",
      title: "Auth",
      desc: "Email + OAuth",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      id: "03",
      title: "Admin",
      desc: "User & role mgmt",
      icon: <Database className="w-5 h-5" />,
    },
    {
      id: "04",
      title: "Hosting",
      desc: "Deploy guide + infra",
      icon: <Server className="w-5 h-5" />,
    },
  ];

  return (
    <section id="work" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white max-w-xl">
              Designed with purpose, built to move faster with less friction.
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm md:text-base">
            Every product solves a real problem—practical value over mere aesthetics.
          </p>
        </div>

        {/* Featured Product */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-card">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
               <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4">
                  FEATURED
               </div>
               <h4 className="text-2xl font-bold text-white mb-2">TenantFlow — Landlord CRM</h4>
               <p className="text-muted-foreground max-w-md mb-6">
                 A focused vertical product that handles listings, payments, tenant onboarding, and basic analytics. Ready in 14 days.
               </p>
               <Button variant="link" className="text-white p-0 hover:text-primary group-hover:translate-x-1 transition-transform">
                 View Case Study <ArrowRight className="w-4 h-4 ml-2" />
               </Button>
            </div>
            {/* Placeholder for project image */}
            <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Grid Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card/50 border border-white/5 hover:bg-card hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 text-white group-hover:bg-primary group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground/50">{feature.id}</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-1">{feature.title}</h5>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
