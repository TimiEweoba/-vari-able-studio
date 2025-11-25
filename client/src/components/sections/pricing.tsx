import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  const plans = [
    {
      name: "Studio",
      price: "49",
      desc: "For growing teams",
      features: ["Smart Deployment", "Basic Monitoring", "Core Security", "Email Support", "5 team seats", "Standard API"],
      highlight: false,
    },
    {
      name: "Scale",
      price: "89",
      desc: "Advanced infrastructure",
      features: ["All Studio features", "AI optimization", "Advanced monitoring", "24/7 support", "Auto-scaling", "Full analytics"],
      highlight: true,
    },
    {
      name: "Supreme",
      price: "249",
      desc: "Enterprise grade",
      features: ["Dedicated support", "Private hosting", "Custom security", "Training included", "Priority features", "Enterprise SLA"],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Flexible, transparent plans.
          </h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose only what you need — nothing locked in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={cn(
                "rounded-3xl p-8 border flex flex-col relative transition-all duration-300",
                plan.highlight 
                  ? "bg-card/80 border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10" 
                  : "bg-card/30 border-white/10 hover:border-white/20"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-display font-bold text-white">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", plan.highlight ? "bg-primary/20 text-primary" : "bg-white/5 text-white")}>
                      <Check size={12} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                  "w-full py-6 rounded-xl font-bold",
                  plan.highlight 
                    ? "bg-primary hover:bg-primary/90 text-white" 
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                )}
              >
                Select Plan
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-card/50 border border-white/10 max-w-4xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
             <div>
               <h4 className="text-xl font-bold text-white mb-2">LaunchForge Starter Package</h4>
               <p className="text-muted-foreground">One-time payment for the complete launch service.</p>
             </div>
             <div className="text-right">
                <div className="text-3xl font-bold text-white mb-1">$2,500</div>
                <div className="text-sm text-primary">Refundable $500 deposit</div>
             </div>
             <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-xl font-bold">
               Reserve Launch
             </Button>
           </div>
        </div>
      </div>
    </section>
  );
}
