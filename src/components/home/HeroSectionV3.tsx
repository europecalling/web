import { useState, useEffect } from "react";
import {
  ArrowRight,
  Globe2,
  Compass,
  ChevronRight,
  Sparkles,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { LeadPopup } from "../ui/LeadPopup";
import { useRegion } from "@/contexts/RegionContext";
import azerbaijanBg from "../../assets/panoramic-cityscape-view-baku-morning-capital-city-azerbaijan.jpg (1).jpeg";
import armeniaBg from "../../assets/a4.png";
import kyrgyzstanBg from "../../assets/a1.png";
import kazakhstanBg from "../../assets/a2 (1).png";
import russiaBg from "../../assets/russia.jpg";
import georgiaImg from "../../assets/1destination-georgia.jpg";
import uzbekistanImg from "../../assets/uzbekistan.jpg";
import franceImg from "../../assets/france.jpg";
import thailandImg from "../../assets/Thailand (2).jpg.jpeg";
import vietnamImg from  "../../assets/Vietnam.jpg.jpeg";
import malaysiaImg from "../../assets/Malaysia.jpg.jpeg";

import indonesiaImg from "../../assets/Indonesia.jpg.jpeg";
import singaporeImg from "../../assets/Singapore.jpg.jpg";

const slides = [
  // European Destinations
  {
    id: 1,
    title: "AZERBAIJAN",
    subtitle: "Land of Fire",
    image: azerbaijanBg,
    cta: "Book Azerbaijan Tour",
    region: "Europe",
  },
  {
    id: 2,
    title: "KAZAKHSTAN",
    subtitle: "Heart of Eurasia",
    image: kazakhstanBg,
    cta: "Book Kazakhstan Tour",
    region: "Europe",
  },
  {
    id: 3,
    title: "ARMENIA",
    subtitle: "Ancient Highlands",
    image: armeniaBg,
    cta: "Book Armenia Tour",
    region: "Europe",
  },
  {
    id: 4,
    title: "RUSSIA",
    subtitle: "Imperial Splendor",
    image: russiaBg,
    cta: "Book Russia Tour",
    region: "Europe",
  },
  {
    id: 5,
    title: "GEORGIA",
    subtitle: "Wine & Mountains",
    image: georgiaImg,
    cta: "Book Georgia Tour",
    region: "Europe",
  },
  {
    id: 6,
    title: "KYRGYZSTAN",
    subtitle: "Nomadic Spirit",
    image: kyrgyzstanBg,
    cta: "Book Kyrgyzstan Tour",
    region: "Europe",
  },
  {
    id: 7,
    title: "UZBEKISTAN",
    subtitle: "Silk Road Jewel",
    image: uzbekistanImg,
    cta: "Book Uzbekistan Tour",
    region: "Europe",
  },
  {
    id: 8,
    title: "FRANCE",
    subtitle: "Art & Elegance",
    image: franceImg,
    cta: "Book France Tour",
    region: "Europe",
  },
  // Asian Destinations
  {
    id: 9,
    title: "THAILAND",
    subtitle: "Land of Smiles",
    image: thailandImg,
    cta: "Book Thailand Tour",
    region: "Asia",
  },
  {
    id: 10,
    title: "MALAYSIA",
    subtitle: "Truly Asia",
    image: malaysiaImg,
    cta: "Book Malaysia Tour",
    region: "Asia",
  },
  {
    id: 11,
    title: "INDONESIA",
    subtitle: "Emerald of the Equator",
    image: indonesiaImg,
    cta: "Book Indonesia Tour",
    region: "Asia",
  },
  {
    id: 12,
    title: "VIETNAM",
    subtitle: "Timeless Charm",
    image: vietnamImg,
    cta: "Book Vietnam Tour",
    region: "Asia",
  },
  {
    id: 13,
    title: "SINGAPORE",
    subtitle: "Garden City",
    image: singaporeImg,
    cta: "Book Singapore Tour",
    region: "Asia",
  },
];

export const HeroSectionV3 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [popupDestination, setPopupDestination] = useState("");
  const { region, setRegion } = useRegion();

  const showEurope = region === "Europe";
  const filteredSlides = slides.filter((slide) =>
    showEurope ? slide.region === "Europe" : slide.region === "Asia",
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredSlides.length]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [region]);

  const slide = filteredSlides[currentSlide];

  const handleBookTour = (destination: string) => {
    setPopupDestination(destination);
    setIsPopupOpen(true);
  };

  const toggleRegion = (selectedRegion: string) => {
    setRegion(selectedRegion as "Europe" | "Asia");
  };

  return (
        <section className="relative h-[85vh] md:h-screen min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Slider */}
      {filteredSlides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt={`${s.title} Landscape`}
            className={`w-full h-full object-cover transform transition-transform ease-linear ${currentSlide === index ? "scale-110" : "scale-100"}`}
            style={{ transitionDuration: "10000ms" }}
          />
          {/* Brand kit gradient: deep black + subtle orange warmth for a professional, elegant overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/90 md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-transparent" />
                    {/* Subtle brand accent (brand orange) for warmth and cohesion */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FF7700]/[0.06] md:to-[#FF7700]/[0.05]" />
                    <div className="absolute inset-0 bg-black/[0.04] mix-blend-overlay" />
                </div>
            ))}

      {/* Main Content - Professional Layout */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center lg:items-start px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 2xl:px-32 pb-10 pt-32 md:pt-36 lg:pt-40">
        <div className="w-full max-w-5xl text-center lg:text-left flex flex-col items-center lg:items-start transition-all duration-500">
          
          {/* Premium Trust Badge - Enhanced */}
          <div className="inline-flex items-center gap-3 mb-5 md:mb-7 animate-fade-in-up bg-black/50 backdrop-blur-xl px-4 sm:px-5 py-2 rounded-full border border-white/15 shadow-2xl mx-auto lg:mx-0 hover:border-[#FF6B00]/30 transition-all duration-300">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/50 overflow-hidden bg-gradient-to-br from-[#FF6B00] to-[#FF9A44] flex items-center justify-center">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/50 overflow-hidden bg-gradient-to-br from-[#faf4e5] to-[#d4c9b0]" />
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/50 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#333333]" />
            </div>
            <div className="h-6 w-px bg-white/20" />
            <p className="text-white/90 text-[10px] sm:text-xs font-medium tracking-wider whitespace-nowrap">
              <span className="font-bold text-white">10k+</span> Travelers Trust
              Us
            </p>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-1">
              <span className="text-[#FF6B00] text-xs">★</span>
              <span className="text-white/80 text-[10px] sm:text-xs font-medium">
                4.9/5
              </span>
            </div>
          </div>

          {/* Dynamic Welcome Title - Professional Layout */}
          <div className="w-full mb-4 md:mb-6 animate-fade-in-up animation-delay-100">
            {showEurope ? (
              <div className="text-center lg:text-left">
                   <h1 className="font-hero-title text-[9vw] sm:text-4xl md:text-5xl lg:text-6xl text-[#faf4e5] mb-3 leading-[0.95] animate-fade-in-up animation-delay-100 text-center md:text-left drop-shadow-lg">
                        Welcome to
                        <br />
                        <span className="text-[#FF6B00] italic pr-2">Europe Calling</span>
                    </h1>
                <div className="mt-3 flex items-center gap-4 justify-center lg:justify-start">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-[#FF6B00] to-transparent" />
                  <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] text-white/40 uppercase font-body">
                    Premium European Journeys
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center lg:text-left">
                 <h1 className="font-hero-title text-[9vw] sm:text-4xl md:text-5xl lg:text-6xl text-[#faf4e5] mb-3 leading-[0.95] animate-fade-in-up animation-delay-100 text-center md:text-left drop-shadow-lg">
                        Welcome to
                        <br />
                        <span className="text-[#FF6B00] italic pr-2">Asia Calling</span>
                    </h1>
                <div className="mt-3 flex items-center gap-4 justify-center lg:justify-start">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-[#FF6B00] to-transparent" />
                  <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] text-white/40 uppercase whitespace-nowrap font-body">
                    by Europe Calling
                  </span>
                  <div className="h-px flex-1 min-w-[40px] bg-white/10" />
                </div>
              </div>
            )}
          </div>

          {/* Premium Region Selection - MOVED BELOW TITLE */}
          <div className="relative mb-6 md:mb-8 animate-fade-in-up animation-delay-50 bg-black/50 backdrop-blur-xl p-1.5 rounded-2xl border border-white/10 shadow-2xl mx-auto lg:mx-0 hover:border-[#FF6B00]/20 transition-all duration-300 w-fit">
            <div className="flex gap-0.5 flex-nowrap justify-center lg:justify-start">
              <button
                onClick={() => toggleRegion("Europe")}
                className={`group relative px-2 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-sm font-bold font-heading transition-all duration-500 flex items-center gap-1.5 sm:gap-2 ${
                  showEurope
                    ? "bg-gradient-to-r from-[#FF6B00] to-[#FF9A44] text-white shadow-lg shadow-[#FF6B00]/40 scale-105"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Globe2
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${showEurope ? "text-white" : "text-white/50 group-hover:text-white"}`}
                />
                <span className="whitespace-nowrap">Europe Calling</span>
                {showEurope && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" />
                )}
              </button>
              <button
                onClick={() => toggleRegion("Asia")}
                className={`group relative px-2 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-sm font-bold font-heading transition-all duration-500 flex items-center gap-1.5 sm:gap-2 ${
                  !showEurope
                    ? "bg-gradient-to-r from-[#FF6B00] to-[#FF9A44] text-white shadow-lg shadow-[#FF6B00]/40 scale-105"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Compass
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${!showEurope ? "text-white" : "text-white/50 group-hover:text-white"}`}
                />
                <span className="whitespace-nowrap">
                  Asia by Europe Calling
                </span>
                {!showEurope && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" />
                )}
              </button>
            </div>
          </div>

          {/* Premium Description - Enhanced */}
          <div className="w-full max-w-2xl mb-6 md:mb-8 animate-fade-in-up animation-delay-200">
            <p className="text-white/80 text-[11px] sm:text-sm md:text-base leading-relaxed font-light  tracking-wide bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-center lg:text-left hover:border-[#FF6B00]/20 transition-all duration-300">
              {showEurope
                ? "Malayalee led | Azerbaijan based | Curating extraordinary European experiences with unparalleled expertise and personalized service."
                : "Malayalee led | Azerbaijan based | Unveiling Asia's most captivating destinations through the lens of European excellence."}
            </p>
          </div>

          {/* Enhanced CTA Buttons - Matching the Image */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 animate-fade-in-up animation-delay-300 w-full sm:w-auto mx-auto lg:mx-0 items-center">
            
            {/* Primary Button - Solid White */}
            <button
              onClick={() => handleBookTour(slide?.title || "Tour")}
              className="group relative overflow-hidden px-7 py-3.5 sm:px-10 sm:py-4 bg-white text-black rounded-full font-bold text-[13px] sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto hover:scale-105"
            >
              <span className="relative z-10 whitespace-nowrap">
                {slide?.cta || "Book Now"}
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform relative z-10 flex-shrink-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Secondary Button - Transparent with White Border */}
            <Link
              to="/about"
              className="group px-7 py-3.5 sm:px-10 sm:py-4 bg-transparent border border-white/60 text-white rounded-full font-bold text-[13px] sm:text-base hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto hover:scale-105"
            >
              Read Our Story
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform flex-shrink-0" />
            </Link>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="flex gap-2 mt-6 md:mt-8 animate-fade-in-up animation-delay-300 justify-center lg:justify-start">
            {filteredSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "w-10 bg-gradient-to-r from-[#FF6B00] to-[#FF9A44] shadow-lg shadow-[#FF6B00]/50"
                    : "w-2 bg-white/30 hover:bg-white/50 hover:w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Region Indicator - Enhanced */}
          <div className="mt-4 flex items-center gap-3 text-white/40 text-[9px] sm:text-[10px] font-medium tracking-widest uppercase animate-fade-in-up animation-delay-400">
            <span className="flex items-center gap-1.5">
              {showEurope ? "🌍" : "🌏"}
              <span>{showEurope ? "European" : "Asian"} Collection</span>
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span>{filteredSlides.length} Destinations</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Enhanced */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-5 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#FF6B00]/8 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-1" />

      <LeadPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        initialDestination={popupDestination}
      />
    </section>
  );
};