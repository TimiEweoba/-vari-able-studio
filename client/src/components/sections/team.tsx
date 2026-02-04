import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsApp = ({ className, ...props }: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Team() {
  const [activeMember, setActiveMember] = useState(0);

  const team = [
    {
      name: "Timi Eweoba",
      role: "Head of Operations",
      bio: "Product strategy, sales, and operations. Runs launches, client comms, and the product roadmap.",
      image: "/images/team/timi.png",
      socials: [
        { icon: Twitter, href: "https://x.com/TimiEweoba" },
        { icon: Github, href: "https://github.com/TimiEweoba" },
        { icon: WhatsApp, href: "https://wa.me/2348144657589" }
      ]
    },
    {
      name: "Eleojo Arawa",
      role: "UI/UX & Visual Design",
      bio: "Design lead — templates, Figma systems, and hero assets. Illustrator and visual storyteller.",
      image: "/images/team/eleojo.jpg",
      socials: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/eleojo-arawa-495aaa250/" },
        { icon: Github, href: "https://github.com/arawaeleojo" },
        { icon: WhatsApp, href: "https://wa.me/2348087087083" }
      ],
      experienceLink: "#"
    },
    {
      name: "Dennis Okpandu",
      role: "Backend & Infrastructure",
      bio: "Builds reusable boilerplates, Stripe flows, deployment scripts, and DB seeds. Keeps launches production-ready.",
      image: "/images/team/dennis.jpg",
      socials: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/dennis-okpandu/" },
        { icon: Github, href: "https://github.com/kaiknightop" },
        { icon: WhatsApp, href: "https://wa.me/2347070070281" }
      ],
      experienceLink: "https://okpandu.vercel.app/"
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#050505] text-[#E3DBD8] relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.08] md:text-[#1C1D20] mb-12 select-none"
          >
            Meet the Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
              <span className="block text-2xl font-bold mb-1 text-white leading-none">007</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Makers</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                High-performance <span className="text-primary italic">engineers</span> for ambitious founders.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                We keep the team small and focused so we can move fast and keep quality high.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Team Slider */}
        <div className="bg-[#0A0A0B]/80 backdrop-blur-xl border border-white/5 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[650px] shadow-2xl relative">

          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Left Column: Details */}
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 order-2 lg:order-1 relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-primary/40" />
                <h5 className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Core Unit</h5>
              </div>

              <div className="flex gap-3 mb-16">
                {team.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMember(i)}
                    className={cn(
                      "h-1.5 transition-all duration-700 relative flex items-center justify-center group/dot",
                      i === activeMember ? "w-12 bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)]" : "w-3 bg-white/10 rounded-full hover:bg-white/20"
                    )}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter leading-none">{team[activeMember].name}</h3>
                  <p className="text-xl text-primary font-medium mb-10 tracking-tight italic">{team[activeMember].role}</p>

                  <p className="text-xl text-white/60 leading-relaxed max-w-lg mb-12">
                    {team[activeMember].bio}
                  </p>

                  {team[activeMember].experienceLink && (
                    <motion.a
                      href={team[activeMember].experienceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all group w-fit"
                    >
                      View Experience
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Image & Socials */}
          <div className="lg:w-1/2 relative order-1 lg:order-2 h-[500px] lg:h-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0"
              >
                <img
                  src={team[activeMember].image}
                  alt={team[activeMember].name}
                  loading="lazy"
                  className={cn(
                    "w-full h-full object-cover transition-all duration-1000",
                    team[activeMember].image.endsWith(".jpg") ?
                      "brightness-[0.8] contrast-[1.2] grayscale-[30%]" :
                      "brightness-[1.1] contrast-[1.1]"
                  )}
                />
                {/* Visual Finish Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </motion.div>
            </AnimatePresence>

            {/* Social Panel */}
            <div className="absolute bottom-10 right-10 lg:bottom-0 lg:top-0 lg:right-0 lg:w-20 flex lg:flex-col items-center justify-center gap-6 lg:gap-10 z-20 lg:bg-[#050505]/40 lg:backdrop-blur-xl lg:border-l lg:border-white/5">
              {team[activeMember].socials?.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                  className="text-white/40 transition-colors p-2"
                >
                  <social.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails Strip */}
        < div className="mt-12 flex gap-6 overflow-x-auto pb-6 scrollbar-hide items-center justify-center" >
          {
            team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => setActiveMember(idx)}
                className={cn(
                  "group relative w-32 h-44 shrink-0 rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-700 border-2",
                  idx === activeMember
                    ? "border-primary shadow-2xl shadow-primary/20 scale-105 z-10"
                    : "border-white/5 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:border-white/20"
                )}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 transition-opacity bg-primary/20",
                  idx === activeMember ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                )} />
              </motion.div>
            ))
          }
        </div >

      </div >
    </section >
  );
}
