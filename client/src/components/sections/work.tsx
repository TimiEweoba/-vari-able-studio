import { ArrowRight, Lock, LayoutDashboard, CreditCard, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";

interface WorkCardProps {
  project: Project;
  fadeInUp: any;
  index: number;
}

const ProjectCard = ({ project, fadeInUp, index }: WorkCardProps) => {
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
        <div className="absolute bottom-8 left-8 z-20">
          <button className="flex items-center gap-2 text-sm font-medium bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full transition-colors">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
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
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
      <img src={project.imageUrl} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

      <div className="absolute top-6 left-6 z-20">
        <h4 className="text-xl font-medium text-white flex flex-col gap-1">
          {project.title}
          <span className="text-xs text-white/70 font-normal">{project.category}</span>
        </h4>
      </div>

      <div className="absolute bottom-6 left-6 z-20">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export function Work() {
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
            className="text-[12vw] leading-[0.8] font-medium tracking-tighter text-[#1C1D20] mb-12 select-none"
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
                Every solution solves a real business problem — practical value, not decoration. We ship templates, integrations, and polished admin experiences that customers can use on day one.
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
            {/* Top Row: Featured + Info Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
              {featuredProject && (
                <ProjectCard project={featuredProject} index={0} fadeInUp={fadeInUp} />
              )}

              {/* Orange Info Panel */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.1, ...fadeInUp.visible.transition } } }}
                className="lg:col-span-4 bg-primary rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[400px]"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
                    <span className="text-sm text-white/80">vari—able Suite</span>
                    <span className="text-sm text-white/80">{projects?.length}/8</span>
                  </div>
                  <h3 className="text-3xl font-medium tracking-tight text-white mb-6">
                    Modular launch tooling and templates.
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

                <div className="relative z-10 flex justify-end mt-auto">
                  <button className="flex items-center gap-2 text-sm font-medium bg-black/20 hover:bg-black/30 text-white px-4 py-2 rounded-full transition-colors">
                    Buy Template <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} fadeInUp={fadeInUp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
