import { Button } from "@/components/ui/button";

export function Process() {
  return (
    <section id="process" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-muted-foreground">003</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <h2 className="text-2xl font-medium text-white">Our Process</h2>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white max-w-xl">
            Optimized processes through simplified workflows.
          </h3>
        </div>

        {/* Process Feature Layout */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
             {/* Stacked Cards Visual */}
             <div className="relative z-10 bg-card border border-white/10 rounded-2xl p-2 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop" 
                 alt="Process Visual" 
                 className="rounded-xl w-full h-auto grayscale opacity-80"
               />
             </div>
             <div className="absolute top-10 -right-10 w-full h-full bg-card/50 border border-white/5 rounded-2xl z-0 scale-90" />
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-12">
            
            <div className="relative pl-8 border-l border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">Step 1 — Pick a Template</h4>
              <p className="text-muted-foreground mb-4">Platform's AI analyzes your tech stack and swiftly configures your ideal environment.</p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">30</div>
                  <div className="text-xs text-muted-foreground">sec</div>
                </div>
                <div className="text-xs text-muted-foreground border-l border-white/10 pl-4">Average <br/> connection time</div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-primary">
              <h4 className="text-xl font-bold text-white mb-2">Step 2 — We Build & Brand</h4>
              <p className="text-muted-foreground mb-4">Platform's adaptive security layer kicks in to protect your system 24/7.</p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">10</div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <div className="text-xs text-muted-foreground border-l border-white/10 pl-4">Average <br/> build time</div>
              </div>
            </div>

            <div className="pt-8">
              <Button className="bg-primary text-white rounded-xl px-8 py-6">
                Book a Demo
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
