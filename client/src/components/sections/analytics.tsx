import { motion } from "framer-motion";
import { Activity, Globe, Zap } from "lucide-react";

export function Analytics() {
  return (
    <section className="py-24 bg-card/20 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">Smart Analytics</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Realtime system and product metrics.
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Stats Card */}
          <div className="lg:col-span-2 bg-card border border-white/10 rounded-3xl p-8 relative">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="text-lg font-medium text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" /> System Health
                </h4>
                <p className="text-sm text-muted-foreground">Real-time platform vitals</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">
                OPTIMAL
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                <div className="text-muted-foreground text-xs mb-1">Uptime (30d)</div>
                <div className="text-2xl font-display font-bold text-white">99.6%</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                <div className="text-muted-foreground text-xs mb-1">Avg Latency</div>
                <div className="text-2xl font-display font-bold text-white">24ms</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-white/5">
                <div className="text-muted-foreground text-xs mb-1">Error Rate</div>
                <div className="text-2xl font-display font-bold text-white">0.01%</div>
              </div>
            </div>

            {/* Fake Chart Bars */}
            <div className="space-y-4">
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80, 40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.02 }}
                    className="w-full bg-primary/20 rounded-t-sm hover:bg-primary/60 transition-colors"
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground/50 font-mono">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>23:59</span>
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-8">
            {/* Evolution Score */}
            <div className="bg-card border border-white/10 rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-medium text-white">Evolution Score</h4>
                <span className="text-2xl font-bold text-primary">86<span className="text-muted-foreground text-lg">/100</span></span>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Integration", val: 85 },
                  { label: "Efficiency", val: 92 },
                  { label: "Security", val: 78 },
                  { label: "Scaling", val: 88 },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="text-white">{stat.val}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.val}%` }}
                        transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latency Improvements */}
            <div className="bg-card border border-white/10 rounded-3xl p-8">
               <h4 className="text-lg font-medium text-white mb-4">Global Latency</h4>
               <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-white">Amsterdam</span>
                    </div>
                    <div className="text-sm font-mono text-green-400">24ms → 11ms</div>
                 </div>
                 <div className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-white">New York</span>
                    </div>
                    <div className="text-sm font-mono text-green-400">37ms → 19ms</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
