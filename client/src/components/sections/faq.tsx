import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Do I really own the code?",
      a: "Yes. After final payment you receive the complete source, database export, and deployment scripts. No vendor lock-in.",
    },
    {
      q: "What if I don’t have a niche?",
      a: "We help you pick one during onboarding with market-fit heuristics and suggestions based on current trends.",
    },
    {
      q: "Can you handle custom integrations?",
      a: "Yes. Small integrations included in Scale and Enterprise plans; larger work scoped separately.",
    },
    {
      q: "What is the typical timeline?",
      a: "Typical launch is 7–14 days. We provide a 30-day priority patch window after delivery.",
    },
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
          Questions & Answers
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 bg-card rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-primary text-left py-6 text-lg font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
