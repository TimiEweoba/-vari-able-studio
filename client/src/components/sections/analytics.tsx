import { motion } from "framer-motion";
import { Activity, Globe, Zap, ArrowUpRight } from "lucide-react";

export function Analytics() {
  return (
    <section className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-muted-foreground">004</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <h2 className="text-2xl font-medium text-white">Smart Analytics</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white max-w-xl">
            Monitor performance with actionable data insights.
          </h3>
          <div className="flex items-center gap-2 text-primary text-sm font-bold cursor-pointer hover:opacity-80 transition-opacity">
            Explore more statistics <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* System Health - Large Left Card */}
          <div className="md:col-span-4 bg-card border border-white/10 rounded-3xl p-8 flex flex-col">
             <div className="flex justify-between items-center mb-8">
               <h4 className="text-white font-medium">System Health</h4>
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             </div>
             
             {/* Donut Chart Visual */}
             <div className="flex-1 flex items-center justify-center relative mb-8">
                <div className="w-40 h-40 rounded-full border-8 border-white/5 relative flex items-center justify-center">
                   <div className="absolute inset-0 border-8 border-primary rounded-full border-r-transparent border-b-transparent rotate-45" />
                   <div className="text-center">
                     <div className="text-3xl font-bold text-white">99%</div>
                     <div className="text-xs text-muted-foreground">Optimal</div>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-2 text-center text-xs">
               <div className="p-2 rounded bg-white/5">
                 <div className="text-white font-bold">66%</div>
                 <div className="text-muted-foreground">Optimal</div>
               </div>
               <div className="p-2 rounded bg-white/5">
                 <div className="text-white font-bold">25%</div>
                 <div className="text-muted-foreground">Stable</div>
               </div>
               <div className="p-2 rounded bg-white/5">
                 <div className="text-white font-bold">9%</div>
                 <div className="text-muted-foreground">Issues</div>
               </div>
             </div>
          </div>

          {/* Middle Column - Stacked */}
          <div className="md:col-span-4 space-y-4 md:space-y-6">
            {/* Latency Map */}
            <div className="bg-card border border-white/10 rounded-3xl p-6">
              <div className="flex justify-between mb-4">
                <h5 className="text-sm text-muted-foreground">Amsterdam</h5>
                <span className="text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded">Enhanced</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-2xl font-bold text-white">11ms</div>
                <div className="text-xs text-muted-foreground">was 24ms</div>
              </div>
            </div>
             
            <div className="bg-card border border-white/10 rounded-3xl p-6">
              <div className="flex justify-between mb-4">
                <h5 className="text-sm text-muted-foreground">New York</h5>
                <span className="text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded">Optimized</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-2xl font-bold text-white">19ms</div>
                <div className="text-xs text-muted-foreground">was 37ms</div>
              </div>
            </div>

            <div className="bg-card border border-white/10 rounded-3xl p-6 flex items-center justify-between">
               <div>
                 <div className="text-3xl font-bold text-white">99.6<span className="text-lg text-muted-foreground">%</span></div>
                 <div className="text-xs text-muted-foreground">Uptime (30d)</div>
               </div>
               <Activity className="text-primary" />
            </div>
          </div>

          {/* Right Column - Performance Chart */}
          <div className="md:col-span-4 bg-card border border-white/10 rounded-3xl p-8 flex flex-col">
             <h4 className="text-white font-medium mb-6">Performance</h4>
             
             <div className="flex-1 flex items-end gap-2">
                {[40, 70, 50, 90, 60, 80, 95, 50, 75].map((h, i) => (
                   <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm transition-all duration-1000"
                        style={{ height: `${h}%` }}
                      />
                   </div>
                ))}
             </div>
             <div className="flex justify-between text-xs text-muted-foreground mt-4 font-mono">
               <span>Q1</span>
               <span>Q2</span>
               <span>Q3</span>
               <span>Q4</span>
             </div>

             <div className="mt-8 pt-8 border-t border-white/10">
               <div className="flex justify-between items-center">
                 <span className="text-sm text-white">Evolution Score</span>
                 <span className="text-xl font-bold text-primary">86/100</span>
               </div>
               <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                 <div className="h-full w-[86%] bg-primary" />
               </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
