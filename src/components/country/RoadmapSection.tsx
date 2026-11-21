import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";
import { Clock, MapPin, Calendar, Camera } from "lucide-react";

interface RoadmapItem {
    day: number;
    title: string;
    description?: string;
    image?: string;
}

interface RoadmapSectionProps {
    itinerary: RoadmapItem[];
}

export const RoadmapSection = ({ itinerary }: RoadmapSectionProps) => {
    if (!itinerary || itinerary.length === 0) return null;

    return (
        <section className="py-24 md:py-32 bg-[#faf4e5] relative overflow-hidden">
            {/* Extended Background Decorations for Premium Feel */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3]" />
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[150px] pointer-events-none" />

            <div className="container px-4 sm:px-6 relative z-10">
                <RevealOnScroll animation="fade-up">
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gold/20 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] mb-6">
                            <span className="flex w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">Day by Day Guide</span>
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
                            Your Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-600 font-serif italic relative">
                                Unfolds
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
                            Every day is crafted to perfection. Explore the detailed itinerary designed to give you the most immersive experience.
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Elegant Central Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2" />

                        {/* Floating Icons along line */}
                        <div className="hidden md:block absolute left-1/2 top-10 -translate-x-1/2 text-gold/20"><Calendar className="w-6 h-6" /></div>
                        <div className="hidden md:block absolute left-1/2 bottom-10 -translate-x-1/2 text-gold/20"><Camera className="w-6 h-6" /></div>

                        <div className="space-y-16 md:space-y-20">
                            {itinerary.map((item, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div key={index} className="relative flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center group perspective-1000">

                                        {/* Timeline Node (Center) - Premium Marker */}
                                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-[#FDFCF8] border border-gold/20 shadow-[0_0_30px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 flex items-center justify-center">
                                                    <span className="font-heading font-bold text-lg text-primary">{item.day}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Left Side (Column 1) */}
                                        <div className={cn(
                                            "relative",
                                            !isEven ? "md:text-right" : "",
                                            // Mobile Order: If Even (Image), Order 1. If Odd (Text), Order 2.
                                            isEven ? "order-1" : "order-2",
                                            "md:order-none"
                                        )}>
                                            {isEven ? (
                                                /* EVEN [Row 1]: Image on Left (Desktop) */
                                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[5/4] rotate-1 group-hover:rotate-0 transition-transform duration-700 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.25)] mb-8 md:mb-0">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-secondary/10 flex items-center justify-center text-muted-foreground">
                                                            <MapPin className="w-12 h-12 opacity-20" />
                                                        </div>
                                                    )}
                                                    {/* Floating Badge - Left Side */}
                                                    <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg border border-white/20 shadow-xl">
                                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white">Day {item.day} Highlights</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                /* ODD [Row 2]: Text on Left (Desktop) */
                                                <div className={cn(
                                                    "relative z-10 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100/80 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1 flex flex-col justify-center min-h-[140px] md:min-h-[200px] max-w-[90%] mx-auto md:max-w-none",
                                                    !item.description && "items-center text-center bg-[#faf4e5] border-black"
                                                )}>
                                                    {/* Golden Number Watermark - Right aligned */}
                                                    <span className={cn(
                                                        "absolute -top-3 -right-3 md:-top-4 md:-right-4 text-[4rem] md:text-[6rem] font-serif font-bold text-gray-50 leading-none pointer-events-none select-none z-0 opacity-10 md:opacity-40",
                                                        !item.description && "text-[3rem] md:text-[5rem] opacity-25 right-4"
                                                    )}>
                                                        {item.day}
                                                    </span>

                                                    <div className={cn(
                                                        "relative z-10 w-full text-center",
                                                        item.description ? "md:text-right" : "md:text-center"
                                                    )}>
                                                        <h3 className={cn(
                                                            "font-heading font-semibold text-primary mb-2 md:mb-3 leading-tight",
                                                            item.description ? "text-lg md:text-2xl" : "text-lg md:text-2xl tracking-tight uppercase"
                                                        )}>
                                                            {item.title}
                                                        </h3>
                                                        {item.description ? (
                                                            <>
                                                                <div className="w-8 md:w-10 h-0.5 bg-[#FF7700]/60 mx-auto md:ml-auto md:mr-0 mb-3 md:mb-4" />
                                                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                                                                    {item.description}
                                                                </p>
                                                            </>
                                                        ) : (
                                                            <div className="w-10 md:w-12 h-0.5 bg-[#FF7700] mx-auto mt-2 md:mt-4 rounded-full opacity-40" />
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Side (Column 2) */}
                                        <div className={cn(
                                            "relative md:mt-0",
                                            isEven ? "md:text-left" : "",
                                            // Mobile Order: If Even (Text), Order 2. If Odd (Image), Order 1.
                                            isEven ? "order-2" : "order-1",
                                            "md:order-none mb-8 md:mb-0"
                                        )}>
                                            {isEven ? (
                                                /* EVEN [Row 1]: Text on Right */
                                                <div className={cn(
                                                    "relative z-10 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-gray-100/80 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1 flex flex-col justify-center min-h-[140px] md:min-h-[200px] max-w-[90%] mx-auto md:max-w-none",
                                                    !item.description && "items-center text-center bg-[#faf4e5] border-black"
                                                )}>
                                                    {/* Golden Number Watermark - Left aligned */}
                                                    <span className={cn(
                                                        "absolute -top-3 -left-3 md:-top-4 md:-left-4 text-[4rem] md:text-[6rem] font-serif font-bold text-gray-50 leading-none pointer-events-none select-none z-0 opacity-10 md:opacity-40",
                                                        !item.description && "text-[3rem] md:text-[5rem] opacity-25 left-4"
                                                    )}>
                                                        {item.day}
                                                    </span>

                                                    <div className={cn(
                                                        "relative z-10 w-full text-center",
                                                        item.description ? "md:text-left" : "md:text-center"
                                                    )}>
                                                        <h3 className={cn(
                                                            "font-heading font-semibold text-primary mb-2 md:mb-3 leading-tight",
                                                            item.description ? "text-lg md:text-2xl" : "text-lg md:text-2xl tracking-tight uppercase"
                                                        )}>
                                                            {item.title}
                                                        </h3>
                                                        {item.description ? (
                                                            <>
                                                                <div className="w-8 md:w-10 h-0.5 bg-[#FF7700]/60 mx-auto md:mr-auto md:ml-0 mb-3 md:mb-4" />
                                                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                                                                    {item.description}
                                                                </p>
                                                            </>
                                                        ) : (
                                                            <div className="w-10 md:w-12 h-0.5 bg-[#FF7700] mx-auto mt-2 md:mt-4 rounded-full opacity-40" />
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                /* ODD [Row 2]: Image on Right */
                                                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[5/4] -rotate-1 group-hover:rotate-0 transition-transform duration-700 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.25)]">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-secondary/10 flex items-center justify-center text-muted-foreground">
                                                            <MapPin className="w-12 h-12 opacity-20" />
                                                        </div>
                                                    )}
                                                    {/* Floating Badge - Right Side */}
                                                    <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg border border-white/20 shadow-xl">
                                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white">Day {item.day} Highlights</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};
