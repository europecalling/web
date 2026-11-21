import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LeadPopup } from "../ui/LeadPopup";
import azerbaijanBg from "../../assets/a3.png";
import armeniaBg from "../../assets/a4.png";
import kyrgyzstanBg from "../../assets/a1.png";
import kazakhstanBg from "../../assets/a2 (1).png";
import russiaBg from "../../assets/russia.jpg";

const slides = [
    {
        id: 1,
        title: "AZERBAIJAN",
        subtitle: "Land of Fire",
        image: azerbaijanBg,
        cta: "Book Azerbaijan Tour"
    },
    {
        id: 2,
        title: "KAZAKHSTAN",
        subtitle: "Heart of Eurasia",
        image: kazakhstanBg,
        cta: "Book Kazakhstan Tour"
    },
    {
        id: 3,
        title: "ARMENIA",
        subtitle: "Ancient Highlands",
        image: armeniaBg,
        cta: "Book Armenia Tour"
    },
    {
        id: 4,
        title: "RUSSIA",
        subtitle: "Imperial Splendor",
        image: russiaBg,
        cta: "Book Russia Tour"
    },
    {
        id: 5,
        title: "GEORGIA",
        subtitle: "Wine & Mountains",
        image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2670&auto=format&fit=crop",
        cta: "Book Georgia Tour"
    },
    {
        id: 6,
        title: "KYRGYZSTAN",
        subtitle: "Nomadic Spirit",
        image: kyrgyzstanBg,
        cta: "Book Kyrgyzstan Tour"
    },
    {
        id: 7,
        title: "UZBEKISTAN",
        subtitle: "Silk Road Jewel",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2994&auto=format&fit=crop",
        cta: "Book Uzbekistan Tour"
    },
    {
        id: 8,
        title: "FRANCE",
        subtitle: "Art & Elegance",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2973&auto=format&fit=crop",
        cta: "Book France Tour"
    }
];

import { cn } from "@/lib/utils";

export function HeroSectionV2({ className }: { className?: string }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];
    const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);
    const [popupDestination, setPopupDestination] = useState("");

    return (
        <section className={cn("relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary", className)}>
            {/* Background Image Slideshow */}
            {slides.map((s, index) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={s.image}
                        alt={`${s.title} Landscape`}
                        className={`w-full h-full object-cover object-center transform transition-transform ease-linear ${currentSlide === index ? "scale-110" : "scale-100"
                            }`}
                        style={{ transitionDuration: '10000ms' }}
                    />
                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                </div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center h-full pt-0">

                {/* Typography Stack */}
                <div className="relative w-full flex flex-col items-center justify-center py-10">

                    {/* Background "EXPLORE" - Fixed */}
                    <h1 className="font-body font-light text-[18vw] md:text-[20vw] leading-none text-white/10 blur-[0px] tracking-widest select-none pointer-events-none absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        EXPLORE
                    </h1>

                    {/* Foreground Content - Dynamic */}
                    <div className="relative z-10 flex flex-col items-center w-full mt-[5vw] md:mt-[4vw]" key={slide.id}>
                        <div className="relative group overflow-hidden w-full px-2">
                            <span className="font-heading text-[9vw] sm:text-[10vw] md:text-[7rem] lg:text-[9rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 tracking-tight md:tracking-widest uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] leading-tight block animate-fade-in-up whitespace-nowrap w-full text-center">
                                {slide.title}
                            </span>
                        </div>

                        {/* Gold Divider */}
                        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent my-4 md:my-8 animate-scale-in" />

                        {/* Subtitle */}
                        <p className="font-heading italic text-lg md:text-3xl text-white font-light tracking-widest drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {slide.subtitle}
                        </p>
                    </div>
                </div>

                {/* Premium Glass CTA Button */}
                <div className="mt-4 md:mt-8 animate-fade-in-up" key={`btn-${slide.id}`} style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={() => {
                            setPopupDestination(slide.title);
                            setIsLeadPopupOpen(true);
                        }}
                        className="group relative inline-flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 md:px-10 md:py-5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-white hover:text-primary hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95"
                    >
                        <span className="font-medium text-sm md:text-lg tracking-widest relative z-10">{slide.cta}</span>

                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-45 transition-transform duration-300 md:w-[14px] md:h-[14px]">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            <LeadPopup
                isOpen={isLeadPopupOpen}
                onClose={() => setIsLeadPopupOpen(false)}
                initialDestination={popupDestination}
            />
        </section>
    );
}
