import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import dashboardImage from "@assets/generated_images/minimalist_saas_dashboard_showing_analytics.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Particles/Stars effect would go here - keeping it simple for CSS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-sm md:text-base text-muted-foreground mb-6 tracking-wide">
                You innovate, <br />
                <span className="text-white font-medium">we automate.</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-12">
                — The smarter way <br/>
                to <span className="text-primary">build</span>, <span className="text-primary">run</span>, and <br/>
                scale your business.
              </h1>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="max-w-xs">
                  <h3 className="text-white font-medium mb-1">See Platform in action</h3>
                  <p className="text-sm text-muted-foreground">Join our guided tour and explore all features live.</p>
                </div>
                
                {/* Connecting Line Visual */}
                <div className="hidden md:block h-[1px] w-24 bg-white/20 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white/50 rounded-full" />
                </div>

                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-2xl text-base font-medium">
                  <span className="mr-2">📅</span> Book a Demo
                </Button>
              </div>
            </motion.div>
            
            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-20 flex gap-16"
            >
              <div>
                <div className="text-4xl font-bold text-primary tracking-tighter">97.8<span className="text-xl align-top">%</span></div>
                <div className="text-sm font-medium text-white mt-1">Uptime</div>
                <div className="text-xs text-muted-foreground">30-day monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary tracking-tighter">+31.2<span className="text-xl align-top">%</span></div>
                <div className="text-sm font-medium text-white mt-1">Performance</div>
                <div className="text-xs text-muted-foreground">AI optimized bundle</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 right-0 w-full"
            >
              {/* Main Card */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-xl aspect-[4/3]">
                 <img src={dashboardImage} alt="Dashboard" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="flex justify-between items-end">
                     <div>
                       <div className="text-xs text-muted-foreground mb-1">Neural Network</div>
                       <div className="text-sm text-white font-mono">// Latest Release</div>
                     </div>
                     <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white">
                       <ArrowRight size={16} />
                     </div>
                   </div>
                 </div>
              </div>

              {/* Floating Element Behind/Below */}
              <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
