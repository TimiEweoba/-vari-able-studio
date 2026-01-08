import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

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
      image: "/images/team/timi.png"
    },
    {
      name: "Eleojo Arawa",
      role: "UI/UX & Visual Design",
      bio: "Design lead — templates, Figma systems, and hero assets. Illustrator and visual storyteller.",
      image: "/images/team/eleojo.jpg"
    },
    {
      name: "Dennis Okpandu",
      role: "Backend & Infrastructure",
      bio: "Builds reusable boilerplates, Stripe flows, deployment scripts, and DB seeds. Keeps launches production-ready.",
      image: "/images/team/dennis.jpg"
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
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#1C1D20] mb-12 select-none"
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
              <h5 className="text-muted-foreground mb-4 text-lg">Team vari—able</h5>

              <div className="flex gap-2 mb-12">
                {team.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveMember(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeMember ? 'w-12 bg-primary' : 'w-2 bg-white/10 hover:bg-white/30'}`}
                  />
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

                <div className="inline-block border border-white/10 rounded-full px-4 py-2 bg-white/5 text-sm text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
                  Join our Slack community — early access, beta invites.
                </div>
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
              <a href="#" className="text-white/80 hover:text-primary transition-all p-2 bg-black/40 lg:bg-transparent rounded-full backdrop-blur-md lg:backdrop-blur-none hover:scale-110 active:scale-95">
                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-all p-2 bg-black/40 lg:bg-transparent rounded-full backdrop-blur-md lg:backdrop-blur-none hover:scale-110 active:scale-95">
                <Twitter className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-all p-2 bg-black/40 lg:bg-transparent rounded-full backdrop-blur-md lg:backdrop-blur-none hover:scale-110 active:scale-95">
                <Instagram className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnails Navigation Strip */}
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {team.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setActiveMember(idx)}
              className={cn(
                "w-24 h-32 shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 relative border interactive",
                idx === activeMember ? "border-primary opacity-100" : "border-transparent opacity-40 hover:opacity-80"
              )}
              data-cursor="Member"
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className={cn(
                  "w-full h-full object-cover grayscale",
                  member.image.endsWith(".jpg") && "brightness-[0.8] contrast-[1.2]"
                )}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
