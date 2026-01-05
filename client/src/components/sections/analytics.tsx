import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap, Activity, CreditCard, Bell, Info, ArrowDown, ArrowUp, Slack, Database, MousePointer2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const AnimatedNumber = ({ value, suffix = "", prefix = "", duration = 2000 }: { value: number, suffix?: string, prefix?: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setDisplayValue(progress * value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  const formatted = typeof value === 'number' && !Number.isInteger(value)
    ? displayValue.toFixed(2)
    : Math.floor(displayValue).toLocaleString();

  return <span>{prefix}{formatted}{suffix}</span>;
};

const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-4 bg-[#1C1D20]/95 border border-white/10 rounded-2xl text-[11px] text-white/80 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl pointer-events-none"
          >
            <div className="relative z-10 leading-relaxed">{text}</div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1C1D20] border-r border-b border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function Analytics() {
  const containerRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="analytics" className="py-32 bg-[#161719] text-[#E3DBD8] overflow-hidden relative" ref={containerRef}>
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* High-definition ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section (Restored Site Consistency) */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#52525B] mb-12"
          >
            Analytics
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l-2 border-primary/20 pl-6 md:pl-0 md:border-l-0">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6">
              <span className="block text-2xl font-bold mb-1 font-display">004</span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Metrics</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Actionable metrics that show <br className="hidden md:block" />
                if your launch is actually working.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <p className="text-muted-foreground text-right max-w-[200px] text-sm leading-relaxed italic">
                Signups, conversions, uptime and performance. No vanity figures. Just the signals that define traction.
              </p>
            </div>
          </div>
        </div>

        {/* World-Class Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. HD Funnel Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:col-span-8 bg-[#1C1D20] border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group hover:border-white/10 transition-all duration-700 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">Live Flow</div>
                  <Tooltip text="Tracks conversion at each onboarding step so you know where to fix UX.">
                    <Info className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-help" />
                  </Tooltip>
                </div>
                <h4 className="text-2xl font-bold text-white font-display uppercase tracking-tight">Conversion Funnel</h4>
                <p className="text-white/40 text-sm max-w-sm">Detailed drop-off analysis from initial land to paid subscription.</p>
              </div>
              <div className="mt-6 md:mt-0 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center group-hover:border-primary/30 transition-colors">
                <div className="text-primary text-5xl font-bold font-display tabular-nums shadow-primary/20 drop-shadow-2xl">
                  <AnimatedNumber value={12.4} suffix="%" />
                </div>
                <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black mt-2">Conversion Rate</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 md:gap-16 items-end h-64 relative z-10">
              {[
                { label: "Visiting", value: 10240, h: 100, color: "from-primary/20 to-primary/60" },
                { label: "Signups", value: 2860, h: 65, color: "from-primary/15 to-primary/40", drop: "-72%" },
                { label: "Paid", value: 1240, h: 28, color: "from-primary/10 to-primary/30", drop: "-57%" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-6 group/item">
                  <div className="w-full relative h-[180px] flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${step.h}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={cn("w-full rounded-t-3xl relative border-t border-white/20 shadow-2xl bg-gradient-to-t transition-all duration-500", step.color)}
                    >
                      {step.drop && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + i * 0.2 }}
                          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] px-3 py-1.5 rounded-full font-mono font-bold whitespace-nowrap backdrop-blur-md"
                        >
                          {step.drop} Loss
                        </motion.div>
                      )}
                      {/* Interactive scanning line */}
                      <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-[1px] bg-white/20 z-0"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center group-hover/item:translate-y-[-5px] transition-transform">
                    <div className="text-2xl font-bold text-white font-display"><AnimatedNumber value={step.value} /></div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">{step.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. HD Payments Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.1, ...fadeInUp.visible.transition } } }}
            className="md:col-span-4 bg-[#1C1D20] border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group h-full relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_10px_30px_rgba(250,110,67,0.2)]">
                  <CreditCard className="w-7 h-7" />
                </div>
                <Tooltip text="Shows transactional totals and refunds via Stripe — not accounting.">
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest cursor-help hover:text-white transition-colors">Stripe Feed</div>
                </Tooltip>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Gross Volume</h4>
                  <div className="text-5xl font-bold text-white tracking-tighter font-display tabular-nums">
                    <AnimatedNumber value={42890} prefix="$" />
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="h-[2px] w-12 bg-primary rounded-full" />
                    <p className="text-[10px] text-white/30 font-medium">30-day transactional flow</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-10">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white font-display tabular-nums flex items-end gap-2">
                      <AnimatedNumber value={842} />
                      <ArrowUp className="w-4 h-4 text-green-400 mb-1 animate-bounce" />
                    </div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest font-black">Active Subs</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white/20 font-display tabular-nums flex items-end gap-2">
                      <AnimatedNumber value={12} />
                      <ArrowDown className="w-4 h-4 text-white/10 mb-1" />
                    </div>
                    <p className="text-[9px] text-white/30 uppercase tracking-widest font-black">Refunds</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-3 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse" />
                <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Real-time Hook</span>
              </div>
              {[
                { user: "dev.user***", amount: "+$249.00", status: "success" },
                { user: "launch.founder***", amount: "+$49.00", status: "success" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="flex justify-between items-center bg-black/40 px-4 py-4 rounded-2xl border border-white/5 group/tx hover:bg-black/60 transition-colors"
                >
                  <span className="text-[10px] font-mono text-white/60">{item.user}</span>
                  <span className="text-primary font-bold text-xs">{item.amount}</span>
                </motion.div>
              ))}
            </div>
            {/* Ambient visual detail */}
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>

          {/* 3. System Vitals (Row of 3 cards) */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Reliability/Uptime Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-[#1C1D20] border border-white/5 rounded-[2rem] p-8 group hover:border-white/10 transition-all shadow-xl"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white font-display tabular-nums tracking-tighter">
                    <AnimatedNumber value={99.98} suffix="%" duration={1200} />
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black mt-1">Global Uptime</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-1.5 h-4 items-center bg-black/20 p-1.5 rounded-full border border-white/5">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={cn("flex-1 h-full rounded-full", i === 18 ? "bg-red-500/30" : "bg-primary")}
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 p-5 rounded-2xl border border-white/5 text-center group-hover:border-white/10 transition-colors">
                    <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-1">Latency</div>
                    <div className="text-xl font-bold text-white font-display">42ms</div>
                  </div>
                  <div className="bg-black/40 p-5 rounded-2xl border border-white/5 text-center group-hover:border-red-500/10 transition-colors">
                    <div className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-1">Errors</div>
                    <div className="text-xl font-bold text-red-500 font-display">0.02%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impact Analyser Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.1, ...fadeInUp.visible.transition } } }}
              className="bg-[#1C1D20] border border-white/5 rounded-[2rem] p-8 group hover:border-white/10 transition-all shadow-xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                  <Zap className="w-6 h-6" />
                </div>
                <Tooltip text="Measure metric changes before and after a deploy.">
                  <div className="text-[9px] text-white/30 tracking-[0.3em] font-black uppercase flex items-center gap-2 cursor-help border-b border-white/10 pb-1">
                    <Database className="w-3 h-3" /> Impact Analyser
                  </div>
                </Tooltip>
              </div>

              <div className="h-28 flex items-end gap-1.5 px-1 mb-8 relative z-10">
                <div className="absolute left-1/2 bottom-0 w-[1px] h-full bg-primary/20 -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-primary text-[7px] font-black text-white px-2 py-1 rounded-md tracking-tighter shadow-[0_5px_15px_rgba(250,110,67,0.4)] z-20"
                  >
                    DEPLOY v2.4
                  </motion.div>
                </div>
                {[30, 25, 35, 28, 32, 72, 85, 78, 95, 88].map((val, i) => (
                  <motion.div
                    key={i}
                    className={cn("flex-1 rounded-t-lg transition-all duration-500", i > 4 ? "bg-primary" : "bg-white/10")}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${val}%` }}
                    transition={{ delay: i * 0.08, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-white/40 font-mono uppercase font-black">
                <span>-3 Days</span>
                <span className="text-primary font-black">+64.2% Boost</span>
                <span>+3 Days</span>
              </div>
              <div className="absolute bottom-[-15%] right-[-10%] w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            </motion.div>

            {/* Smart Alerts Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2, ...fadeInUp.visible.transition } } }}
              className="bg-[#1C1D20] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-white/10 transition-all border-l-primary/10 border-l-2 shadow-xl"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight font-display">Active Alerts</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black mt-2">Triggered: Slack</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 animate-pulse">
                  <Bell className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-[#121214] rounded-2xl p-5 border border-white/5 relative group/alert mt-8 transform hover:scale-[1.02] transition-transform shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Slack className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-[10px] font-mono text-white/30 uppercase font-black">#infra-shuttle</span>
                </div>
                <p className="text-[11px] font-mono text-red-400 leading-relaxed pl-4 border-l-2 border-red-500">
                  Warning: Edge timeouts detected on v2.4.1. Spike in 502 errors at 02:14 UTC.
                </p>
                <div className="mt-5 flex gap-2">
                  <button className="flex-1 text-[9px] font-black bg-white/5 hover:bg-white/10 py-2.5 rounded-xl text-white/50 transition-all uppercase tracking-widest">Acknowledge</button>
                  <button className="flex-1 text-[9px] font-black bg-red-500/10 hover:bg-red-500/20 py-2.5 rounded-xl text-red-500 transition-all uppercase tracking-widest">Escalate</button>
                </div>
              </div>

              <p className="text-[9px] text-white/20 mt-6 italic font-bold text-center">Slack & Email automation active for downtime/spikes.</p>
            </motion.div>

          </div>
        </div>

        {/* Pro-Level Detail Section */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center md:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <Database className="w-6 h-6 text-white/20" />
              <div className="h-[1px] w-8 bg-white/10" />
              <div className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">Data-Audit.v2.0</div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed italic font-medium">
              We surface and explain the product signals that drive ROI. For advanced financial modeling, tax-compliant auditing, or multi-year forecasting, we’ll connect you directly to our global specialist partners.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-8 bg-white/5 hover:bg-white/10 border border-white/10 px-12 py-7 rounded-[2.5rem] transition-all duration-700 overflow-hidden w-full md:w-auto justify-center shadow-2xl shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="text-white font-black text-xl tracking-tight relative z-10 uppercase">Launch Metrics Demo</span>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-700 relative z-10 shadow-[0_10px_20px_rgba(250,110,67,0.4)]">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
