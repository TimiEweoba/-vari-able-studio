import codeImage from "@assets/generated_images/modern_code_editor_interface_mockup.png";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-card border border-white/10 rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight relative z-10">
            Ready to stop selling hours <br/> and start owning products?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto relative z-10">
            Reserve a spot with a refundable $500 deposit. Launch in 2 weeks — keep the code forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 rounded-xl text-lg shadow-xl shadow-primary/20">
              Reserve Spot
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/10 text-white hover:bg-white/5 h-14 px-10 rounded-xl text-lg">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
