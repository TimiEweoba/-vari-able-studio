import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook, Github } from "lucide-react";
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const team = [
    {
      name: "Timi Eweoba",
      role: "Head of Operations",
      bio: "Product strategy, sales, and operations. Runs launches, client comms, and the product roadmap.",
      image: "/images/team/timi.png",
      socials: [
        { icon: Facebook, href: "https://www.facebook.com/timieweoba" },
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
      ]
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
      ]
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#050505] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-[#1C1D20] mb-12 select-none"
          >
            Meet the Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6 h-12 flex flex-col justify-center">
              <span className="block text-2xl font-bold mb-1 text-white leading-none">007</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Makers</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Makers, thinkers, and problem solvers who ship product.
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
        <div className="bg-[#1C1D20] border border-white/5 rounded-3xl overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[600px]">

          {/* Left Column: Details */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 order-2 lg:order-1">
            <div>
              <h5 className="text-muted-foreground mb-4 text-lg">Team veri—able</h5>

              <div className="flex gap-3 mb-12">
                {team.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMember(i)}
                    className={cn(
                      "h-1 px-4 py-3 rounded-xl transition-all duration-500 relative flex items-center justify-center group/dot",
                      i === activeMember ? "bg-primary/20" : "bg-transparent hover:bg-white/5"
                    )}
                  >
                    <div className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      i === activeMember ? "w-8 bg-primary shadow-[0_0_10px_var(--color-primary)]" : "w-1.5 bg-white/20 group-hover/dot:bg-white/40"
                    )} />
                  </button>
                ))}
              </div>

              <motion.div
                key={activeMember}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-4xl md:text-5xl font-medium text-white mb-2">{team[activeMember].name}</h3>
                <p className="text-lg text-muted-foreground mb-8">{team[activeMember].role}</p>

                <p className="text-lg text-[#E3DBD8] leading-relaxed max-w-lg mb-8">
                  {team[activeMember].bio}
                </p>


              </motion.div>
            </div>
          </div>

          {/* Right Column: Image & Socials */}
          <div className="lg:w-1/2 relative order-1 lg:order-2 h-[450px] md:h-[550px] lg:h-auto">
            <motion.div
              key={activeMember}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={team[activeMember].image}
                alt={team[activeMember].name}
                loading="lazy"
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  // Enhanced normalization to mimic Timi's studio photo look
                  team[activeMember].image.endsWith(".jpg") ?
                    "brightness-[0.85] contrast-[1.15] saturate-[0.85] sepia-[0.1]" :
                    "brightness-[1.1] contrast-[1.05]"
                )}
              />
              {/* Vignette and Gradient Overlay for consistent depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D20] via-transparent to-transparent opacity-80 lg:opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </motion.div>

            {/* Social Links */}
            <div className="absolute bottom-6 right-6 lg:top-0 lg:right-0 lg:bottom-0 lg:w-24 flex lg:flex-col items-center justify-center gap-6 lg:gap-12 z-10 lg:bg-[#161719]/90 lg:border-l lg:border-white/5 lg:backdrop-blur-sm">
              {team[activeMember].socials?.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary transition-all p-2 bg-black/40 lg:bg-transparent rounded-full backdrop-blur-md lg:backdrop-blur-none hover:scale-110 active:scale-95"
                >
                  <social.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails Navigation Strip */}
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMember(idx)}
              className={cn(
                "w-24 h-32 shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 relative border-2 interactive",
                idx === activeMember
                  ? "border-primary shadow-lg shadow-primary/20 scale-105 z-10"
                  : "border-white/5 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:border-white/20"
              )}
              data-cursor="Member"
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  idx === activeMember ? "scale-110" : "scale-100",
                  member.image.endsWith(".jpg") && "brightness-[0.9] contrast-[1.1]"
                )}
              />
              <div className={cn(
                "absolute inset-0 transition-opacity duration-500",
                idx === activeMember ? "bg-primary/10 opacity-100" : "bg-black/20 opacity-0 group-hover:opacity-100"
              )} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
