import { motion } from "framer-motion";

export function Process() {
  return (
    <section id="process" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <h2 className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white max-w-lg">
              A simple, repeatable launch process.
            </h3>
          </div>
          <p className="text-muted-foreground max-w-sm mt-4 md:mt-0">
            Get outcomes instead of chaos. From idea to handover in 14 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-transparent z-0" />

          {[
            {
              step: "01",
              title: "Pick a Template",
              desc: "Choose a vertical starter kit or propose a custom use case.",
              time: "Day 0",
            },
            {
              step: "02",
              title: "We Build & Brand",
              desc: "Full-stack implementation, Stripe integration, admin panels, domain setup — polished and testable.",
              time: "Days 1–10",
            },
            {
              step: "03",
              title: "Launch & Transfer",
              desc: "Demo, tweak, final payment, then handover of source code and DB access.",
              time: "Day 14",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-card border border-primary/30 flex items-center justify-center text-2xl font-display font-bold text-white mb-8 shadow-xl shadow-primary/10">
                {item.step}
              </div>
              <div className="pr-8">
                <div className="inline-block px-2 py-1 rounded bg-white/5 text-xs text-primary font-mono mb-3">
                  {item.time}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl bg-card/30 border border-white/5 text-center text-sm text-muted-foreground">
          <span className="text-primary font-bold">Note:</span> We document everything and provide a 30-day patch window post-launch.
        </div>
      </div>
    </section>
  );
}
