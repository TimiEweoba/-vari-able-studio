import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Work } from "@/components/sections/work";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Analytics } from "@/components/sections/analytics";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Labs } from "@/components/sections/labs";
import { NameAnimation } from "@/components/sections/name-animation";
import { CTA } from "@/components/sections/cta";

import { ParticleBackground } from "@/components/ui/particle-background";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary/30 relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Services />
        <Process />
        <Analytics />
        <Pricing />
        <FAQ />
        <Team />
        <Testimonials />
        <Labs />
        <NameAnimation />
        <CTA />
      </main>
    </div>
  );
}
