import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LeadPopup } from "../ui/LeadPopup";
import azerbaijanBg from "../../assets/panoramic-cityscape-view-baku-morning-capital-city-azerbaijan.jpg (1).jpeg";
import armeniaBg from "../../assets/a4.png";
import kyrgyzstanBg from "../../assets/a1.png";
import kazakhstanBg from "../../assets/a2 (1).png";
import russiaBg from "../../assets/russia.jpg";
import georgiaImg from "../../assets/1destination-georgia.jpg";
import uzbekistanImg from "../../assets/uzbekistan.jpg";
import franceImg from "../../assets/france.jpg";

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
        image: georgiaImg,
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
        image: uzbekistanImg,
        cta: "Book Uzbekistan Tour"
    },
    {
        id: 8,
        title: "FRANCE",
        subtitle: "Art & Elegance",
        image: franceImg,
        cta: "Book France Tour"
    }
];

export const HeroSectionV3 = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [popupDestination, setPopupDestination] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlide];

    const handleBookTour = (destination: string) => {
        setPopupDestination(destination);
        setIsPopupOpen(true);
    };

    return (
        <section className="relative h-[85vh] md:h-screen min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
            {/* Full-bleed Background Image Slider */}
            {slides.map((s, index) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={s.image}
                        alt={`${s.title} Landscape`}
                        className={`w-full h-full object-cover transform transition-transform ease-linear ${currentSlide === index ? "scale-110" : "scale-100"
                            }`}
                        style={{ transitionDuration: '10000ms' }}
                    />
                    {/* Brand kit gradient: deep black + subtle orange warmth for a professional, elegant overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/90 md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-transparent" />
                    {/* Subtle brand accent (brand orange) for warmth and cohesion */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FF7700]/[0.06] md:to-[#FF7700]/[0.05]" />
                    <div className="absolute inset-0 bg-black/[0.04] mix-blend-overlay" />
                </div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 w-full h-full flex flex-col justify-center items-center md:items-start pb-12 md:pb-0 pt-24 md:pt-32">
                <div className="max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
                    {/* Trusted By Section - Glass Pill */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 md:mb-6 animate-fade-in-up bg-black/30 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 mx-auto md:mx-0">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/50 overflow-hidden bg-[#000000]" />
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/50 overflow-hidden bg-[#faf4e5]" />
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/50 overflow-hidden bg-[#ff7700]" />
                        </div>
                        <p className="text-white/90 text-[10px] sm:text-sm font-medium tracking-wide">
                            Trusted by <span className="font-bold text-white">10k+</span> travelers
                        </p>
                    </div>

                    {/* Main Heading - Static Welcome Title */}
                    <h1 className="font-hero-title text-[9vw] sm:text-4xl md:text-5xl lg:text-6xl text-[#faf4e5] mb-3 leading-[0.95] animate-fade-in-up animation-delay-100 text-center md:text-left drop-shadow-lg">
                        Welcome to
                        <br />
                        <span className="text-[#FF6B00] italic pr-2">Europe Calling</span>
                    </h1>

                    {/* Description - Reduced Size */}
                    <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-lg font-light animate-fade-in-up animation-delay-200 text-center md:text-left drop-shadow-md mx-auto md:mx-0">
                        Malayalee led | Azerbaijan based | Your Eurasian travel experts.
                        Experience the finest European landscapes and cultures with us.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animation-delay-300 w-fit mx-auto md:mx-0 items-center">
                        <button
                            onClick={() => handleBookTour(slide.title)}
                            className="group relative overflow-hidden px-5 py-2.5 sm:px-8 sm:py-4 bg-white text-black rounded-full font-bold text-[13px] sm:text-base shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-auto hover:bg-gray-100"
                        >
                            <span className="relative z-10">{slide.cta}</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            {/* Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 ease-in-out" />
                        </button>
                        <Link
                            to="/about"
                            className="px-5 py-2.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-[13px] sm:text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center w-auto"
                        >
                            Read Our Story
                        </Link>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex gap-2 mt-6 md:mt-8 animate-fade-in-up animation-delay-300 justify-center">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? "w-8 bg-[#FF6B00]" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} initialDestination={popupDestination} />
        </section>
    );
};
