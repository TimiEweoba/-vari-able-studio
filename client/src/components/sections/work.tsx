import { ArrowRight, Lock, LayoutDashboard, CreditCard, Loader2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { projects, type Project } from "@/lib/projects";
import { fadeInUp, isMobile } from "@/lib/animations";

interface WorkCardProps {
  project: Project;
  fadeInUp: any;
  index: number;
  setLocation: (path: string) => void;
}

const ProjectCard = ({ project, fadeInUp, index, setLocation }: WorkCardProps) => {
  const isFeatured = project.featured === "true";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="group glass-panel rounded-3xl overflow-hidden flex flex-col cursor-pointer hover:bg-white/[0.04] transition-colors interactive h-full"
      data-cursor="View Case"
      onClick={() => setLocation("/work")}
    >
      <div className="w-full aspect-[16/10] overflow-hidden bg-black/50 relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-6 left-6 z-10">
          <span className="text-[10px] font-black text-white/90 tracking-[0.3em] uppercase bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">{project.category}</span>
        </div>
      </div>
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tight leading-tight">{project.title}</h4>
        <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLocation("/work");
            }}
            className="flex items-center gap-2 text-[10px] font-black bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-3 rounded-full transition-all uppercase tracking-[0.2em] interactive"
          >
            Details <ArrowRight className="w-3 h-3" />
          </button>

          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-[10px] font-black bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary px-5 py-3 rounded-full transition-all uppercase tracking-[0.2em] interactive"
            >
              Live <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2 + (index * 0.1), ...fadeInUp.visible.transition } } }}
      className="group glass-panel rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:bg-white/[0.04] transition-colors interactive"
      data-cursor="Review"
      onClick={() => setLocation("/work")}
    >
      <div className="w-full aspect-[16/10] overflow-hidden bg-black/50">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
            {project.title}
          </h4>
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">{project.category}</span>
        </div>

        <div className="flex items-center justify-between mt-4 pb-2">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary rounded-xl flex items-center justify-center text-white transition-all shadow-lg"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>

            {project.link && project.link !== "#" && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                View Site
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Work() {
  const [location, setLocation] = useLocation();

  const featuredProjects = projects.filter(p => p.featured === "true");
  const otherProjects = projects.filter(p => p.featured !== "true").slice(0, 5 - featuredProjects.length);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#050505] text-[#E3DBD8]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-white/[0.15] md:text-white/20 mb-12 select-none"
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
                Every project solves a real problem — practical value, not just pretty pixels. We deliver complete, working products that your customers can use from day one.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {/* Featured Highlights - Balanced 2-Column Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] bg-primary/10 px-3 py-1 rounded-full">Featured Highlights</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} fadeInUp={fadeInUp} setLocation={setLocation} />
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Other Capabilities - 3 Column Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] px-3 py-1">Recent Deployments</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} fadeInUp={fadeInUp} setLocation={setLocation} />
              ))}
            </div>
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
              className="group relative inline-flex items-center gap-8 glass-panel rounded-full px-8 md:px-12 py-5 md:py-7 transition-all overflow-hidden w-full md:w-auto justify-center shadow-2xl interactive cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="text-white font-black text-sm md:text-xl tracking-tight relative z-10 uppercase">
                See All Our Work
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500 relative z-10 shadow-xl shadow-primary/40">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 leading-none" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
