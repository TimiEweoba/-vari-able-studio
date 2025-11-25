import tygoImg from "@assets/generated_images/professional_headshot_of_a_data_scientist.png";
import philipImg from "@assets/generated_images/professional_headshot_of_an_operations_lead.png";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Tygo Brouwer",
      role: "Chief Data Scientist",
      bio: "I co-founded LaunchForge to change how teams ship product. I focus on scalable, robust systems that help clients move faster.",
      image: tygoImg,
    },
    {
      name: "Philip van der Bosch",
      role: "Founder & Head of Ops",
      bio: "I drive operations and product delivery, ensuring every launch is predictable and repeatable.",
      image: philipImg,
    },
  ];

  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">Meet the Team</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Makers, thinkers, and builders who ship practical products.
          </h3>
          <p className="text-muted-foreground text-lg">
            We focus on clear decisions and getting things done.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <div className="text-primary text-sm font-medium mb-4">{member.role}</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                  <Twitter size={16} />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                  <Linkedin size={16} />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                  <Github size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/5">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-card/30 p-8 rounded-2xl border border-white/5">
             <div>
               <h4 className="text-lg font-bold text-white">Join our community</h4>
               <p className="text-muted-foreground text-sm">Connect with other builders shipping production apps.</p>
             </div>
             <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
               Join Slack Community
             </Button>
           </div>
        </div>
      </div>
    </section>
  );
}
