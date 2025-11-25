import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  const plans = [
    {
      name: "Studio",
      price: "49",
      desc: "For growing teams",
      features: ["Smart Deployment", "Basic Monitoring", "Core Security", "Email Support"],
      highlight: false,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
      name: "Scale",
      price: "89",
      desc: "Advanced infrastructure",
      features: ["All Studio features", "AI optimization", "Advanced monitoring", "24/7 support"],
      highlight: true,
      image: "https://images.unsplash.com/photo-1614850523060-8da1d56fa167?q=80&w=2670&auto=format&fit=crop"
    },
    {
      name: "Supreme",
      price: "249",
      desc: "Enterprise grade",
      features: ["Dedicated support", "Private hosting", "Custom security", "Enterprise SLA"],
      highlight: false,
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-muted-foreground">005</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <h2 className="text-2xl font-medium text-white">Pricing</h2>
        </div>

        <div className="mb-20 max-w-xl">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Flexible, transparent plans.
          </h3>
          <p className="text-muted-foreground">
            Scale at your own pace – choose only what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={cn(
                "rounded-3xl p-2 border transition-all duration-300 group",
                plan.highlight 
                  ? "bg-card border-primary/50" 
                  : "bg-card border-white/10"
              )}
            >
              {/* Card Image Top */}
              <div className="h-48 rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={plan.image} alt={plan.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="px-6 pb-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{plan.name}</h4>
                    <p className="text-xs text-muted-foreground">{plan.desc}</p>
                  </div>
                  <div className="text-right">
                     <div className="text-2xl font-bold text-white">${plan.price}</div>
                     <div className="text-xs text-muted-foreground">/mo</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center text-white">
                        <Check size={10} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={cn(
                    "w-full rounded-xl font-bold",
                    plan.highlight 
                      ? "bg-primary hover:bg-primary/90 text-white" 
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  )}
                >
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
