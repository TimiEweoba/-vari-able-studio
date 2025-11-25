import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code2, Database, Shield } from "lucide-react";
import dashboardImage from "@assets/generated_images/minimalist_saas_dashboard_showing_analytics.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting new projects for Q4
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.1] mb-6">
              LaunchForge — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Ship production Web2 products, fast.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              You innovate. We build the product, integrate payments, set up hosting & monitoring, and hand you the source code. Launch in weeks, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-xl text-base shadow-xl shadow-primary/20 transition-all hover:scale-105">
                Reserve a Spot — $500
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white h-12 px-8 rounded-xl text-base backdrop-blur-sm">
                See Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-white/5 pt-6">
              <span className="flex items-center gap-2">
                <Check className="text-primary w-4 h-4" /> No vendor lock-in
              </span>
              <span className="flex items-center gap-2">
                <Check className="text-primary w-4 h-4" /> Source code ownership
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-card/50 backdrop-blur-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={dashboardImage} 
                alt="Platform Dashboard" 
                className="w-full h-auto rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
              />
              
              {/* Floating Elements */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-card border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-500">
                    <Shield size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">System Status</div>
                    <div className="text-sm font-bold text-white">99.99% Uptime</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-card border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md"
              >
                 <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Deployment</div>
                    <div className="text-sm font-bold text-white">Success</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
