import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf4e5] relative overflow-hidden">
      <FlightAnimation className="text-primary/5" />
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />

      <div className="container-wide relative">
        <RevealOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 text-shadow-premium">
              Ready to Start Your{" "}
              <span className="text-gold italic text-shadow-premium">European</span> Journey?
            </h2>

            <p className="text-foreground/70 text-sm sm:text-base mb-8 md:mb-10 max-w-2xl mx-auto">
              Take the first step today. Our experts are ready to guide you
              towards your European dream with personalized consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 group text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+994555533744"
                className="btn-secondary border-primary/30 text-primary hover:bg-primary hover:text-white inline-flex items-center justify-center text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
              >
                Call Us Now
              </a>
            </div>

            <p className="text-foreground/50 text-xs sm:text-sm mt-6 md:mt-8">
              No commitment required • Free initial consultation • Response within
              24 hours
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
