import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Import images
import azerbaijanImg from "@/assets/a3.png";
import kazakhstanImg from "@/assets/a2 (1).png";
import armeniaImg from "@/assets/a4.png";
import russiaImg from "@/assets/russia.jpg";
import georgiaImg from "@/assets/1destination-georgia.jpg";
import kyrgyzstanImg from "@/assets/a1.png";
import uzbekistanImg from "@/assets/uzbekistan.jpg";
import franceImg from "@/assets/france.jpg";
import belgiumImg from "@/assets/belgium/arrival in brussels.jpeg";
import netherlandsImg from "@/assets/netherland/Arrival – Amsterdam.jpeg";

const destinations = [
    {
        name: "Azerbaijan",
        tagline: "LAND OF FIRE",
        image: azerbaijanImg,
        tours: "8 TOURS",
        path: "/destinations/azerbaijan",
    },
    {
        name: "Kazakhstan",
        tagline: "HEART OF EURASIA",
        image: kazakhstanImg,
        tours: "7 TOURS",
        path: "/destinations/kazakhstan",
    },
    {
        name: "Georgia",
        tagline: "WINE & MOUNTAINS",
        image: georgiaImg,
        tours: "4 TOURS",
        path: "/destinations/georgia",
    },
    {
        name: "Uzbekistan",
        tagline: "SILK ROAD JEWEL",
        image: uzbekistanImg,
        tours: "2 TOURS",
        path: "/destinations/uzbekistan",
    },
    {
        name: "Kyrgyzstan",
        tagline: "NOMADIC SPIRIT",
        image: kyrgyzstanImg,
        tours: "3 TOURS",
        path: "/destinations/kyrgyzstan",
    },
    {
        name: "Russia",
        tagline: "IMPERIAL SPLENDOR",
        image: russiaImg,
        tours: "6 TOURS",
        path: "/destinations/russia",
    },
    {
        name: "Armenia",
        tagline: "ANCIENT HIGHLANDS",
        image: armeniaImg,
        tours: "6 TOURS",
        path: "/destinations/armenia",
    },
    {
        name: "France",
        tagline: "ART & ELEGANCE",
        image: franceImg,
        tours: "1 TOURS",
        path: "/destinations/france",
    },
    {
        name: "Belgium",
        tagline: "HERITAGE & CULTURE",
        image: belgiumImg,
        tours: "5 DAYS",
        path: "/destinations/belgium",
    },
    {
        name: "Netherlands",
        tagline: "CANALS & CULTURE",
        image: netherlandsImg,
        tours: "8 DAYS",
        path: "/destinations/netherlands",
    },
];

interface DestinationsSectionProps {
    className?: string;
    showViewAll?: boolean;
    showHeader?: boolean;
}

export function DestinationsSection({ className = "", showViewAll = true, showHeader = true }: DestinationsSectionProps) {
    return (
        <section className={cn("pt-12 sm:pt-20 md:pt-28 lg:pt-32 pb-4 bg-[linear-gradient(180deg,#faf4e5_0%,#faf4e5_150px,#faf4e5_100%)] relative overflow-hidden", className)}>

            {/* Background Glows (Subtle & Premium) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
            </div>

            <div className="container-wide px-4 sm:px-6 relative z-10">

                {/* Header Content */}
                {showHeader && (
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <span className="font-['Dancing_Script'] text-2xl md:text-3xl text-gold block mb-2 sm:mb-3 animate-fade-in-up">
                            Top Destinations
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 md:mb-5 animate-fade-in-up animation-delay-200 tracking-tight text-shadow-premium">
                            Most Favorite Destinations
                        </h2>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full animate-scale-in animation-delay-300" />
                    </div>
                )}

                {/* Premium Grid Layout - Flex with justify-center so last row centers (no blank columns) */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                    {destinations.map((dest, index) => (
                        <Link
                            key={index}
                            to={dest.path}
                            className="group relative h-[240px] sm:h-[320px] flex-[0_0_calc(50%-0.375rem)] sm:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(25%-1.125rem)] rounded-[24px] overflow-hidden cursor-pointer block transform-gpu bg-primary shadow-md hover:shadow-2xl transition-all duration-700 ease-out-expo hover:-translate-y-2"
                        >
                            {/* Background Image with Slow Zoom */}
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform ease-out-expo scale-[1.01] group-hover:scale-110 will-change-transform opacity-90 group-hover:opacity-100"
                                style={{ transitionDuration: '2s' }}
                            />

                            {/* Gradient Overlay - Cinematic Bottom Fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 will-change-[opacity]" />

                            {/* Top Badge (Tours Count) - Center aligned */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 sm:top-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out translate-y-2 group-hover:translate-y-0">
                                <span className="bg-black text-[#ff7700] text-[8px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-lg border border-[#ff7700]/20">
                                    {dest.tours}
                                </span>
                            </div>

                            {/* Bottom Content - Always center aligned */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 flex flex-col items-center justify-center text-center">

                                <h3 className="font-heading text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-1.5 drop-shadow-lg tracking-wide group-hover:text-gold transition-colors duration-300">
                                    {dest.name}
                                </h3>

                                <p className="text-white/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] font-sans antialiased mb-2 sm:mb-3">
                                    {dest.tagline}
                                </p>

                                {/* Hover Line Decor */}
                                <div className="w-8 sm:w-10 h-[2px] bg-gold scale-0 group-hover:scale-100 transition-transform duration-500 ease-out-expo origin-center" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
