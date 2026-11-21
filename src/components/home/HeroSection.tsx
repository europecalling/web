import { useRef, useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FlightAnimation } from "@/components/ui/FlightAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Mock Data - Europe
import azerbaijanImg from "@/assets/destination-azerbaijan.png";
import kazakhstanImg from "@/assets/destination-kazakhstan.png";
import armeniaImg from "@/assets/destination-armenia.png";
import russiaImg from "@/assets/russia.jpg";
import franceImg from "@/assets/destination-france.jpg";

// Mock Data - Asia (Ensure these files exist in your assets folder)
import thailandImg from "@/assets/Thailand (2).jpg.jpeg";
import malaysiaImg from "@/assets/Malaysia.jpg.jpeg";
import indonesiaImg from "@/assets/Indonesia.jpg.jpeg";
import vietnamImg from "@/assets/Vietnam.jpg.jpeg";
import singaporeImg from "@/assets/Singapore.jpg.jpg";

const heroDestinations = [
  // Europe
  { id: "azerbaijan", name: "AZERBAIJAN", location: "Baku - Azerbaijan", description: "Discover the Land of Fire, where ancient history meets modern architecture.", image: azerbaijanImg },
  { id: "russia", name: "RUSSIA", location: "Moscow - Russia", description: "Discover the vast beauty of Russia, from the colorful onion domes of St. Basil's to the imperial canals.", image: russiaImg },
  { id: "france", name: "FRANCE", location: "Paris - France", description: "Immerse yourself in art, fashion, and gastronomy.", image: franceImg },
  { id: "kazakhstan", name: "KAZAKHSTAN", location: "Almaty - Kazakhstan", description: "Journey through the Heart of Eurasia. Explore vast steppes and mountains.", image: kazakhstanImg },
  { id: "armenia", name: "ARMENIA", location: "Yerevan - Armenia", description: "Visit the world's first Christian nation and its ancient monasteries.", image: armeniaImg },
  
  // Asia
  { id: "thailand", name: "THAILAND", location: "Pattaya - Thailand", description: "Experience the Land of Smiles, from floating markets to pristine coral islands.", image: thailandImg },
  { id: "malaysia", name: "MALAYSIA", location: "Kuala Lumpur - Malaysia", description: "Discover a vibrant melting pot of cultures, futuristic skylines, and lush rainforests.", image: malaysiaImg },
  { id: "indonesia", name: "INDONESIA", location: "Bali - Indonesia", description: "Explore the Island of the Gods, where ancient temples meet stunning rice terraces.", image: indonesiaImg },
  { id: "vietnam", name: "VIETNAM", location: "Phu Quoc - Vietnam", description: "A land of stunning contrasts, from bustling night markets to serene beaches.", image: vietnamImg },
  { id: "singapore", name: "SINGAPORE", location: "Marina Bay - Singapore", description: "A dazzling city-state where futuristic architecture meets lush green spaces.", image: singaporeImg }
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeDest, setActiveDest] = useState(heroDestinations[0]);
  const [carouselDests, setCarouselDests] = useState(heroDestinations.slice(1));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandingCard, setExpandingCard] = useState<{ id: string; image: string; initialStyle: { top: number; left: number; width: number; height: number } } | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDestClick = (e: React.MouseEvent<HTMLButtonElement>, dest: typeof heroDestinations[0]) => {
    if (isTransitioning || !sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const cardRect = e.currentTarget.getBoundingClientRect();

    setExpandingCard({
      id: dest.id,
      image: dest.image,
      initialStyle: {
        top: cardRect.top - sectionRect.top,
        left: cardRect.left - sectionRect.left,
        width: cardRect.width,
        height: cardRect.height
      }
    });

    setIsTransitioning(true);
    setTimeout(() => setIsExpanded(true), 50);

    setTimeout(() => {
      const prevActive = activeDest;
      setActiveDest(dest);
      setCarouselDests((prev) => {
        const filtered = prev.filter((d) => d.id !== dest.id);
        return [...filtered, prevActive];
      });
      setExpandingCard(null);
      setIsExpanded(false);
      setIsTransitioning(false);
    }, 1000); // 1s transition
  };

  return (
    <section ref={sectionRef} className="relative h-[70vh] sm:h-screen min-h-[480px] w-full flex flex-col justify-end overflow-hidden bg-black">
      {/* LAYER 1: Current Background (Lowest Z) */}
      <div className="absolute inset-0 z-0">
        <img
          src={activeDest.image}
          alt={activeDest.name}
          className="w-full h-full object-cover transition-transform ease-out scale-105"
          style={{ transitionDuration: '2000ms' }}
        />
        {/* Gradients to Ensure Text & Nav Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* LAYER 2: Expanding Card (Behind Text and Carousel) */}
      {expandingCard && (
        <div
          className={cn(
            "absolute z-10 shadow-2xl overflow-hidden pointer-events-none",
            isExpanded ? "transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-none" : "rounded-xl"
          )}
          style={isExpanded ? { top: 0, left: 0, width: "100%", height: "100%" } : {
            top: expandingCard.initialStyle.top,
            left: expandingCard.initialStyle.left,
            width: expandingCard.initialStyle.width,
            height: expandingCard.initialStyle.height,
          }}
        >
          <img src={expandingCard.image} className="w-full h-full object-cover" alt="" />
          {/* Matching Gradient Inside Expansion */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-1000",
            isExpanded ? "opacity-100" : "opacity-0"
          )} />
        </div>
      )}

      {/* LAYER 3: Main Content (Highest Z - Always Visible) */}
      <div className="relative z-50 container-wide h-full flex flex-col justify-end pb-[150px] sm:pb-20 sm:justify-center items-start pl-5 sm:pl-0 pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          <RevealOnScroll animation="slide-in-right">
            <div className="flex items-center gap-3 mb-2 sm:mb-6">
              <span className="h-[2px] w-8 sm:w-12 bg-[#FFD700] inline-block shadow-sm"></span>
              <span className="text-[#FFD700] font-bold uppercase tracking-[0.15em] text-xs sm:text-base drop-shadow-md shadow-black">
                {activeDest.location}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-7xl md:text-8xl font-bold text-white uppercase leading-[0.9] mb-2 sm:mb-6 tracking-tight drop-shadow-2xl text-shadow-premium">
              {activeDest.name}
            </h1>
            <p className="text-white/90 text-sm sm:text-lg leading-relaxed max-w-lg drop-shadow-lg font-medium line-clamp-2 sm:line-clamp-none mb-6">
              {activeDest.description}
            </p>
            <a
              href={`/contact?destination=${activeDest.name}`}
              className="inline-flex items-center justify-center gap-2 bg-[#faf4e5] text-black px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-transform hover:scale-105 hover:bg-white"
            >
              Book {activeDest.name} Tour
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </RevealOnScroll>
        </div>
      </div>

      {/* LAYER 4: Carousel (Above Expanding Card, Below Text interaction-wise) */}
      <div className="absolute bottom-4 sm:bottom-8 right-0 sm:right-8 z-40 w-full sm:max-w-2xl lg:max-w-3xl pl-4 sm:pl-0 overflow-visible">
        <Carousel opts={{ align: "start", loop: true, dragFree: true }} className="w-full">
          <CarouselContent className="-ml-4 pb-4">
            {carouselDests.map((dest) => (
              <CarouselItem key={dest.id} className="pl-4 basis-[35%] sm:basis-1/3 md:basis-1/3">
                <button
                  onClick={(e) => handleDestClick(e, dest)}
                  className={cn(
                    "relative w-full h-[100px] sm:h-[180px] md:h-[220px] rounded-xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-[1.03] hover:border-[#FFD700] hover:shadow-2xl group shadow-lg",
                    expandingCard?.id === dest.id ? "opacity-0" : "opacity-100"
                  )}
                >
                  <img src={dest.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-2 left-3 text-left pr-1">
                    <p className="text-white font-bold text-xs sm:text-base uppercase tracking-wider truncate">{dest.name}</p>
                    <p className="text-white/60 text-[9px] uppercase tracking-widest truncate">{dest.location.split(' - ')[0]}</p>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}