import { ArrowRight, Star } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface DestinationBannerProps {
    countryName: string;
    image: string;
    onCtaClick?: () => void;
}

export function DestinationBanner({ countryName, image, onCtaClick }: DestinationBannerProps) {
    const handleScrollToBooking = () => {
        if (onCtaClick) {
            onCtaClick();
        } else {
            const bookingSection = document.getElementById('booking-form');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="relative py-8 md:py-12 overflow-hidden flex items-center">
            {/* Background with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={`${countryName} Scenic View`}
                    className="w-full h-full object-cover opacity-100 transition-transform duration-1000"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>

            <div className="container-wide relative z-10 px-6">
                <RevealOnScroll animation="fade-up">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-md mb-4">
                            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                            <span className="text-gold text-xs font-bold uppercase tracking-widest">
                                Top Rated Destination
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            Ready to Explore <br />
                            <span className="text-gold italic">{countryName}?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed max-w-xl">
                            Don't just dream about it. Experience the culture, the landscapes, and
                            the memories waiting to be made. Limited slots available for this season.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleScrollToBooking}
                                className="group bg-gold text-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] flex items-center justify-center gap-2"
                            >
                                Book Your Trip Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={handleScrollToBooking}
                                className="group bg-transparent border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                Get Custom Quote
                            </button>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
