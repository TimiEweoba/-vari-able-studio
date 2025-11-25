import logosImg from "@assets/generated_images/set_of_abstract_minimal_tech_company_logos.png";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Saved us months of work — launched and billed our first customers in two weeks.",
      author: "Product Lead",
      company: "PropTech startup",
    },
    {
      quote: "Reliable, clean handover. We own the code and the revenue.",
      author: "Founder",
      company: "Boutique Agency",
    },
    {
      quote: "Great UX, zero drama. Support was actually helpful.",
      author: "CTO",
      company: "SaaS Scaleup",
    },
  ];

  return (
    <section className="py-24 bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary mb-2 tracking-widest uppercase">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
            What Our Clients Say
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-card border border-white/5 relative">
              <div className="text-4xl text-primary/20 font-serif absolute top-6 left-6">"</div>
              <p className="text-lg text-white mb-6 relative z-10 leading-relaxed pt-4">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="border-t border-white/5 pt-12">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">Trusted by innovative teams</p>
          <div className="w-full overflow-hidden relative h-24 grayscale opacity-50 hover:opacity-100 transition-opacity">
             <img 
               src={logosImg} 
               alt="Client Logos" 
               className="w-full h-full object-cover object-center opacity-80"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
