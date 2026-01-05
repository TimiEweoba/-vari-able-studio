import { ArrowRight, Lock, LayoutDashboard, CreditCard, ChevronRight, Grid3x3 } from "lucide-react";
import { motion } from "framer-motion";

export function Work() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="work" className="py-24 bg-[#050505] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#52525B] mb-12"
          >
            Our Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-l-2 border-primary/20 pl-6 md:pl-0 md:border-l-0">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6">
              <span className="block text-2xl font-bold mb-1">001</span>
              <span className="text-sm text-muted-foreground">vari-able</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Designed with purpose, built to launch fast.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end">
              <p className="text-muted-foreground text-right max-w-[200px]">
                Every solution solves a real business problem — practical value, not decoration. We ship templates, integrations, and polished admin experiences that customers can use on day one.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-col gap-6">

          {/* Top Row: Featured + Info Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">
            {/* Featured Product Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="lg:col-span-8 relative rounded-2xl overflow-hidden group bg-[#1C1D20] border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
                alt="TenantFlow"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 z-20">
                <span className="text-sm font-medium text-white/80">TenantFlow — Landlord CRM template</span>
                <h4 className="text-3xl font-bold text-white mt-2 mb-2">A vertical starter product for small landlords</h4>
                <p className="text-white/80 max-w-md">Listings, tenant onboarding, rent collection, and basic analytics. Ready to customize and deploy in 7–14 days.</p>
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                <button className="flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full transition-colors">
                  Buy Template <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Orange Info Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.1, ...fadeInUp.visible.transition } } }}
              className="lg:col-span-4 bg-primary rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
                  <span className="text-sm text-white/80">vari—able Suite</span>
                  <span className="text-sm text-white/80">8/8</span>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-white mb-6">
                  Modular launch tooling and templates.
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  A collection of production-grade starter kits and deploy automation that let you go from idea to paying customers quickly.
                </p>
              </div>

              {/* Dot Grid Pattern */}
              <div className="grid grid-cols-6 gap-6 absolute bottom-8 left-8 right-8 z-0 opacity-30">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
              </div>

              <div className="relative z-10 flex justify-end mt-auto">
                <button className="flex items-center gap-2 text-sm font-medium bg-black/20 hover:bg-black/30 text-white px-4 py-2 rounded-full transition-colors">
                  Buy Template <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Middle Row: 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Stripe Billing", subtitle: "Customer portal, subscriptions.", icon: <CreditCard className="w-6 h-6" />, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" },
              { title: "Admin Panel", subtitle: "Role management, user controls.", icon: <LayoutDashboard className="w-6 h-6" />, img: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop" },
              { title: "Grid System", subtitle: "Reusable components.", icon: <Grid3x3 className="w-6 h-6" />, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2 + (i * 0.1), ...fadeInUp.visible.transition } } }}
                className="group relative h-[300px] rounded-2xl overflow-hidden bg-[#1C1D20] border border-white/5 hover:border-white/10"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute top-6 left-6 z-20">
                  <h4 className="text-xl font-medium text-white flex flex-col gap-1">
                    {item.title}
                    <span className="text-xs text-white/70 font-normal">{item.subtitle}</span>
                  </h4>
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <div className="w-12 h-12 bg-[#FA6E43] rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: Wide Card + Status Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[350px]">
            {/* Wide Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-[#1C1D20] border border-white/5 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop"
                alt="Security"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 z-20">
                <h4 className="text-2xl font-medium text-white mb-2">Shield — Security & Monitoring</h4>
                <p className="text-white/80 max-w-sm">Hardened defaults, monitoring hooks, and a post-launch patch window to keep launches safe.</p>
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                <div className="w-12 h-12 bg-[#FA6E43] rounded-xl flex items-center justify-center text-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Status Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2, ...fadeInUp.visible.transition } } }}
              className="lg:col-span-4 bg-[#111] rounded-2xl p-8 flex flex-col justify-between border border-white/5"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-2xl font-medium text-white">Production Suite</h4>
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-[#FA6E43] text-sm mb-8">Access the core platform.</p>

                <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                  <span>Development Progress</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[84%] bg-[#FA6E43]" />
                </div>
              </div>

              <div>
                <div className="text-5xl font-mono font-medium text-white/50 mb-8">84.7<span className="text-xl">%</span></div>
                <button className="flex items-center gap-2 text-sm text-white hover:text-[#FA6E43] transition-colors">
                  Join early access <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
