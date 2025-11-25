import { Box, CreditCard, LayoutDashboard, Rocket, Server, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Productized Templates",
      desc: "Vertical starter kits (Real Estate, Booking, Agency CRM) to cut build time.",
      icon: <Box className="w-6 h-6" />,
    },
    {
      title: "Payments & Billing",
      desc: "Stripe subscriptions, coupons, invoices, reconciliation flows.",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: "Admin Dashboards",
      desc: "Role-based access, metrics, user management, and export tools.",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    {
      title: "Onboarding & UX",
      desc: "Email flows, product tours, conversion-focused UX.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Hosting & Infra",
      desc: "Deployment scripts, CI, SSL, backups, and basic monitoring.",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Analytics & Logs",
      desc: "Real-time dashboards, event tracking and performance insights.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Flexible solutions for building modern Web2 products.
          </h3>
          <p className="text-muted-foreground text-lg">
            Future-proof systems that scale seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-all group hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="mb-6 p-3 w-12 h-12 rounded-xl bg-card border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
