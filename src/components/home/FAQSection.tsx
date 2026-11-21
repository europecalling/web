import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle, MessageCircle, Mail } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    question: "What documents are required for booking a tour?",
    answer: "Passport copy, visa (if applicable), ID proof, and advance payment are required.",
  },
  {
    question: "How early should I book my trip??",
    answer: "We recommend booking at least 15–30 days in advance for better availability and price.",
  },
  {
    question: "How can I make payment",
    answer: "You can pay via bank transfer, UPI, or cash (as per company policy)",
  },
  {
    question: "Do you provide emergency support during travel",
    answer: "Yes, we offer emergency support during your travel.",
  },
];

export function FAQSection() {
  return (
    <section className="py-10 md:py-24 bg-[linear-gradient(180deg,#faf4e5_0%,#faf4e5_300px,#faf4e5_100%)] relative overflow-hidden" id="faq">

      {/* Premium Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-wide relative z-10 px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Header Section ( Sticky optimized for large screens ) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <RevealOnScroll animation="fade-up">
              <div className="relative">
                <span className="font-['Dancing_Script'] text-2xl sm:text-3xl text-gold block mb-3 pl-1">
                  Need Help?
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-primary mb-5 leading-tight tracking-tight">
                  Frequently Asked <br /> Questions
                </h2>
                <div className="w-16 h-[2px] bg-gold/60 rounded-full mb-8"></div>

                <p className="text-muted-foreground text-sm sm:text-base mb-10 leading-relaxed max-w-sm font-light">
                  Find answers to common questions about our travel packages and visa services.
                  Everything you need to know for a smooth journey.
                </p>

                <div className="flex flex-col gap-4">
                  <a href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto font-medium tracking-wide">
                    <MessageCircle className="w-4 h-4" />
                    Contact Support
                  </a>
                  <a href="mailto:sales@europecalling.com" className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto font-medium tracking-wide">
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* FAQ Accordion - Individual Cards Style */}
          <div className="lg:col-span-8">
            <RevealOnScroll animation="fade-up" delay={200}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group bg-white rounded-xl border border-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] px-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg data-[state=open]:border-gold/40 data-[state=open]:ring-1 data-[state=open]:ring-gold/10"
                  >
                    <AccordionTrigger className="text-left py-6 text-primary hover:text-gold hover:no-underline text-lg font-heading font-medium transition-colors [&[data-state=open]]:text-gold">
                      <span className="pr-4 tracking-tight">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-6 pt-0 pr-4 sm:pr-12 font-light">
                      <div className="h-px w-full bg-gold/10 mb-4" />
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in" delay={300}>
              <div className="mt-8 w-full bg-white/60 backdrop-blur-sm border border-white/80 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-primary">Still have questions?</p>
                    <p className="font-light text-xs">We're here to help.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium">
                  <a href="/contact" className="text-primary hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4">Chat with us</a>
                  <span className="text-gold/40">|</span>
                  <a href="mailto:sales@europecalling.com" className="text-primary hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4">Email Support</a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
