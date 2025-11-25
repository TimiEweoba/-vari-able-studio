import { ArrowRight, CreditCard, Database, Lock, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Work() {
  return (
    <section id="work" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 border-t border-white/10 pt-10">
          <div className="max-w-xl">
             <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-muted-foreground">001</span>
                <div className="h-[1px] w-12 bg-white/10" />
                <h2 className="text-2xl font-medium text-white">Our Work</h2>
             </div>
             <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
               Designed with purpose, automated for speed and built to help you move faster.
             </h3>
          </div>
          <div className="max-w-xs mt-10 md:mt-0">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every solution is designed to solve real problems, delivering practical value over mere aesthetics.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(250px,auto)]">
          
          {/* Large Featured Card (Top Left) */}
          <div className="md:col-span-8 row-span-2 rounded-3xl bg-card border border-white/10 overflow-hidden relative group min-h-[500px]">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />
             {/* Image placeholder - utilizing CSS pattern for abstract look if image fails */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105" />
             
             <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
               <div className="flex justify-between items-end">
                 <div>
                   <div className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">Featured Product</div>
                   <h4 className="text-3xl font-bold text-white mb-4">TenantFlow — Landlord CRM</h4>
                   <p className="text-gray-300 max-w-md mb-0">A focused vertical product that handles listings, payments, tenant onboarding, and basic analytics.</p>
                 </div>
                 <Button size="icon" className="bg-primary text-white rounded-full w-12 h-12 shrink-0">
                   <ArrowRight />
                 </Button>
               </div>
             </div>
          </div>

          {/* Orange Card (Top Right) */}
          <div className="md:col-span-4 bg-primary rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2 leading-tight">Launch in weeks, not months.</h4>
            </div>
            <div className="flex justify-between items-end">
               <span className="text-white/80 text-sm">Speed</span>
               <ArrowRight className="text-white" />
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          </div>

          {/* Small Cards (Bottom Right) */}
          <div className="md:col-span-4 bg-card border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4">
              <CreditCard />
            </div>
            <div>
              <h5 className="text-white font-bold mb-1">Stripe</h5>
              <p className="text-xs text-muted-foreground">Billing & recurring</p>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 bg-card border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-4">
              <Database />
            </div>
            <div>
              <h5 className="text-white font-bold mb-1">Admin</h5>
              <p className="text-xs text-muted-foreground">User & role management</p>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
