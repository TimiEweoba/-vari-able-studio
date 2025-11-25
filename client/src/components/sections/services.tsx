import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      id: "01",
      title: "Productized Templates",
      desc: "Vertical starter kits to cut build time.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop",
      active: true
    },
    {
      id: "02",
      title: "Payments & Billing",
      desc: "Stripe subscriptions & invoices.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      active: false
    },
    {
      id: "03",
      title: "Admin Dashboards",
      desc: "Role-based access & metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      active: false
    },
    {
      id: "04",
      title: "Hosting & Infra",
      desc: "Deployment scripts & monitoring.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
      active: false
    }
  ];

  return (
    <section id="services" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-muted-foreground">002</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <h2 className="text-2xl font-medium text-white">Our Services</h2>
        </div>

        <div className="mb-20 max-w-2xl">
           <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
             Flexible solutions for building modern digital infrastructure.
           </h3>
           <p className="text-muted-foreground">Future-proof systems that scale seamlessly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              className={`relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer group ${service.active ? 'bg-primary' : 'bg-card border border-white/10'}`}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-between items-start">
                <div className="text-lg font-mono font-bold opacity-50 group-hover:opacity-100 transition-opacity text-white">↗ {service.id}</div>
              </div>

              <div className="relative z-10">
                <h4 className={`text-2xl font-bold mb-2 leading-tight ${service.active ? 'text-white' : 'text-white'}`}>{service.title}</h4>
                <p className={`text-sm ${service.active ? 'text-white/80' : 'text-muted-foreground'}`}>{service.desc}</p>
              </div>

              {/* Background Image for "active" or visual interest */}
              <div className="absolute inset-0 z-0">
                 <img src={service.image} alt="" className={`w-full h-full object-cover transition-opacity duration-500 ${service.active ? 'opacity-20 mix-blend-overlay' : 'opacity-0 group-hover:opacity-10'}`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
