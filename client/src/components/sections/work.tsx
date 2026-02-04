import { ArrowRight, Lock, LayoutDashboard, CreditCard, Loader2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { type Project } from "@shared/schema";

interface WorkCardProps {
  project: Project;
  fadeInUp: any;
  index: number;
  setLocation: (path: string) => void;
}

const ProjectCard = ({ project, fadeInUp, index, setLocation }: WorkCardProps) => {
  const isFeatured = project.featured === "true";

  if (isFeatured) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="lg:col-span-8 relative rounded-2xl overflow-hidden group bg-[#1C1D20] border border-white/5 h-[500px] cursor-pointer interactive"
        data-cursor="View Case"
        onClick={() => setLocation("/work")}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-8 left-8 z-20">
          <span className="text-sm font-medium text-white/80">{project.category}</span>
          <h4 className="text-3xl font-bold text-white mt-2 mb-2">{project.title}</h4>
          <p className="text-white/80 max-w-md">{project.description}</p>
        </div>
        <div className="absolute bottom-8 left-8 z-20 flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setLocation("/work");
            }}
            className="flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full transition-all"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </motion.button>

          {project.link && project.link !== "#" && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm font-medium bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full transition-all shadow-lg shadow-primary/20"
            >
              Live Site <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2 + (index * 0.1), ...fadeInUp.visible.transition } } }}
      className="group relative h-[300px] rounded-2xl overflow-hidden bg-[#1C1D20] border border-white/5 hover:border-white/10 cursor-pointer interactive"
      data-cursor="Review"
      onClick={() => setLocation("/work")}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
      <img src={project.imageUrl} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

      <div className="absolute top-6 left-6 z-20">
        <h4 className="text-xl font-medium text-white flex flex-col gap-1">
          {project.title}
          <span className="text-xs text-white/70 font-normal">{project.category}</span>
        </h4>
      </div>

      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white transition-all shadow-lg shadow-primary/20"
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>

        {project.link && project.link !== "#" && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="h-10 px-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-xs font-bold text-white transition-all border border-white/10"
          >
            Visit Site
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export function Work() {
  const [location, setLocation] = useLocation();
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const featuredProject = projects?.find(p => p.featured === "true");
  const otherProjects = projects?.filter(p => p.featured !== "true") || [];

  return (
    <section id="work" className="py-24 bg-[#050505] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-[#1C1D20] mb-12 select-none"
          >
            Our Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 hidden md:block border-l-2 border-primary pl-6">
              <span className="block text-2xl font-bold mb-1">001</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black underline decoration-primary decoration-2 underline-offset-4">Portfolio</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Designed with purpose, built to launch fast.
              </h3>
            </div>
            <div className="md:col-span-4 flex items-end justify-end md:h-full">
              <p className="text-white/50 text-right max-w-[280px] text-sm leading-relaxed border-r-2 border-primary/20 pr-6 italic">
                Every solution solves a real business problem — practical value, not decoration. We ship foundational infrastructure, custom integrations, and polished admin experiences that customers can use on day one.
              </p>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="h-[600px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Loading Projects...</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Featured Projects Column */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {projects?.filter(p => p.featured === "true").map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} fadeInUp={fadeInUp} setLocation={setLocation} />
                ))}
              </div>

              {/* Sidebar Info Panel */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.1, ...fadeInUp.visible.transition } } }}
                  className="bg-primary rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden h-full min-h-[400px]"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
                      <span className="text-sm text-white/80">veri—able Suite</span>
                      <span className="text-sm text-white/80">{projects?.length}/8</span>
                    </div>
                    <h3 className="text-3xl font-medium tracking-tight text-white mb-6">
                      Modular launch tooling and engines.
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-8">
                      A collection of production-grade starter kits and deploy automation that let you go from idea to paying customers quickly.
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-6 absolute bottom-8 left-8 right-8 z-0 opacity-30">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full" />
                    ))}
                  </div>
                </motion.div>

                {/* Secondary CTA to Case Studies page */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2, ...fadeInUp.visible.transition } } }}
                  onClick={() => setLocation("/work")}
                  className="bg-[#1C1D20] border border-white/5 rounded-2xl p-8 cursor-pointer flex flex-col justify-center items-center gap-4 text-center hover:bg-white/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Case Studies</h4>
                    <p className="text-white/40 text-sm mt-1 uppercase tracking-widest font-black">View All Projects</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} fadeInUp={fadeInUp} setLocation={setLocation} />
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <button
                onClick={() => setLocation("/work")}
                className="group flex items-center gap-4 text-white/40 hover:text-white transition-all text-sm font-bold uppercase tracking-[0.3em] cursor-pointer"
              >
                <span>Explore Full Archive</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowRight size={18} />
                </div>
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
