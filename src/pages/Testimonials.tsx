import { useState, useMemo, useEffect, useRef } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Star, Play, Quote, MapPin, Globe, User, ChevronLeft, ChevronRight, Pause, RotateCcw, Filter, X, ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Video Assets - Journey stories & client reviews
import journey1 from "@/assets/video/journey1.mp4";
import journey2 from "@/assets/video/journey2.mp4";
import review1 from "@/assets/video/review1.mp4";
import review2 from "@/assets/video/review2.mp4";
import review3 from "@/assets/video/review3.mp4";
import review4 from "@/assets/video/review4.mp4";
import review5 from "@/assets/video/review5.mp4";
import review6 from "@/assets/video/review6.mp4";
import review7 from "@/assets/video/review7.mp4";
import review8 from "@/assets/video/review8.mp4";

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const VerifiedBadge = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500 fill-current ml-1" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

// Real Google reviews — video items keep their files, text items use the pasted reviews
const testimonials = [
  // ---------- VIDEO TESTIMONIALS (unchanged) ----------
  {
    id: 1,
    name: "Amit Sharma",
    location: "India",
    destination: "Germany",
    role: "Software Engineer",
    content: "Europe Calling made my dream of working in Germany a reality. Their professional team guided me through every step.",
    rating: 5,
    hasVideo: true,
    videoSrc: journey1,
    thumbnail: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "2:15"
  },
  {
    id: 2,
    name: "Elena Petrov",
    location: "Azerbaijan",
    destination: "Poland",
    role: "Marketing Specialist",
    content: "The entire process was seamless. I'm now happily settled in Warsaw with my family.",
    rating: 5,
    hasVideo: true,
    videoSrc: journey2,
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: "1:45"
  },
  {
    id: 3,
    name: "Client Review 1",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review1,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },
  {
    id: 4,
    name: "Client Review 2",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review2,
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },
  {
    id: 5,
    name: "Client Review 3",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review3,
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },
  {
    id: 6,
    name: "Client Review 4",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review4,
    thumbnail: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },
  {
    id: 7,
    name: "Client Review 5",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review5,
    thumbnail: "https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },
  {
    id: 10,
    name: "Client Review 6",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review6,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },
  {
    id: 11,
    name: "Client Review 7",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review7,
    thumbnail: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },
  {
    id: 12,
    name: "Client Review 8",
    location: "",
    destination: "Europe",
    role: "Client",
    content: "Hear directly from our clients as they share their journey to success in Europe.",
    rating: 5,
    hasVideo: true,
    videoSrc: review8,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800",
    videoDuration: ""
  },

  // ---------- REAL GOOGLE TEXT REVIEWS ----------
  {
    id: 13,
    name: "keerthana reghu",
    location: "Armenia Guest",
    destination: "Armenia",
    role: "Armenia Guest",
    content: "We had a wonderful trip to Armenia with Europe Calling, and we highly recommend them to everyone planning to visit! A special thanks to Bilal, who picked us up from the airport and was our driver and guide throughout the trip. He made our entire experience so smooth and comfortable. Since he spoke the local language, everything became much easier for us, from ordering food to communicating with local people. Bilal explained each place we visited clearly and patiently, making our sightseeing experience even more enjoyable. His politeness, punctuality, helpful nature, and professionalism truly made a difference to our trip. We are very happy with the service provided by Europe Calling and grateful to Bilal for taking such good care of us throughout our journey. If you are planning a trip to Armenia, we definitely recommend Europe Calling and Bilal for a hassle-free and memorable experience! Thank you for making our Armenia trip so special! ❤️",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 14,
    name: "MOHAMED ASIF",
    location: "Thailand Guest",
    destination: "Thailand",
    role: "Thailand Guest",
    content: "The arrangement done by EUROPE CALLING Team was very nice. We never face any issues in Thailand. Everything was on time. The hotel they arranged in Pataya was super. The car and drivers are very good. Thanks to Europe calling",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 15,
    name: "Reju Nair",
    location: "Kazakhstan Guest",
    destination: "Kazakhstan",
    role: "Kazakhstan Guest",
    content: "Just returned from an unforgettable 6-night trip to Almaty, Kazakhstan, perfectly organized by Europe Calling! The backend team, led by Aysha and Mohammed, tailored our itinerary around our love for mountains, lakes, canyons, and adventure, complete with a comfortable MUV for our road journeys. From the moment we landed, Shibin from operations team took incredible care of us, creating a warm, welcoming atmosphere. The team continuously checked in throughout the journey, showing true customer-centricity. Thank you, Europe Calling, for making our trip epic! Highly recommended.",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 16,
    name: "Amna Beevi",
    location: "Azerbaijan Guest",
    destination: "Azerbaijan",
    role: "Azerbaijan Guest",
    content: "We had a wonderful experience travelling to Baku with Europe Calling! Everything was well organised, from the travel arrangements to the overall coordination throughout the trip. A special thanks to Nasrin, Aflah, and the entire team for being so helpful and responsive whenever we needed them. Their support and coordination made our holiday smooth and enjoyable.✨ Thank you for making our trip a lovely experience. Highly recommended! 😊✨",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 17,
    name: "Ramees Saleem",
    location: "Georgia Guest",
    destination: "Georgia",
    role: "Georgia Guest",
    content: "We booked our honeymoon package to Georgia through Europe Calling, and it was an absolutely incredible experience! From start to finish, everything was perfectly organized and tailored to our preferences. The team was professional, attentive, went above and beyond to ensure we had a safe and memorable trip. The itinerary was a perfect blend of relaxation and adventure, with stunning accommodations and thoughtful surprises along the way. They truly understood what we were looking for and made our honeymoon magical. We would like to extend our sincere gratitude to Mr. Najath and Mrs. Shirin Najath, founders of Europe Calling and wish them all the best for their expansion journey. If you're looking for a reliable and exceptional tour company, I highly recommend Europe Calling. They made our dream honeymoon come true!",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 18,
    name: "Hana Nasser",
    location: "Georgia Guest",
    destination: "Georgia",
    role: "Georgia Guest",
    content: "Our recent trip to Georgia is truly one that will never be forgotten. Arranged by Europe Calling, the experience was filled with exquisite food, luxurious hotels, and exceptional service. We didn’t miss out on any of the famous landmarks, and the guide provided was incredibly friendly and knowledgeable. With fresh air and a change in scenery, it was a great stress relief. Along with great entertainment and a well-curated itinerary, this trip was truly memorable.",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 19,
    name: "Sajid Shajahan",
    location: "Russia Guest",
    destination: "Russia",
    role: "Russia Guest",
    content: "We had an incredible experience with Europe Calling, who planned the perfect trip for me and my wife to Russia. The itinerary was meticulously crafted, balancing cultural exploration, breathtaking scenery and moments of relaxation. Every detail was seamlessly managed, from the smooth transfers to top-notch accommodations and guided tours that showcased Russia’s rich history and beauty. Their personalized approach ensured we had unforgettable experiences, whether it was walking through the grandeur of Moscow or marveling at the charm of St. Petersburg. This was, without doubt, one of the best trips we’ve ever had. Thank you for exceeding our expectations!",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 20,
    name: "Mini Sharafudeen",
    location: "Kazakhstan Guest",
    destination: "Kazakhstan",
    role: "Kazakhstan Guest",
    content: "Our trip to Kazakhstan with Europe Calling Travel & Tourism was fantastic! Everything was perfectly organized — from flights and hotels to daily tours. The itinerary covered beautiful spots like Big Almaty Lake and Charyn Canyon, and the guide was friendly and knowledgeable. A smooth, memorable experience overall. Highly recommended! ⭐️⭐️⭐️⭐️⭐️",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 21,
    name: "Pretheeksha Gopinath",
    location: "Azerbaijan Guest",
    destination: "Azerbaijan",
    role: "Azerbaijan Guest",
    content: "I wanted to thank your entire europe calling team for organizing such a wonderful week-long trip. From comfortable accommodations and great facilities to seamless transportation, everything was handled with care. Because every detail was taken care of, we could truly relax and enjoy the experience. We will gladly recommend your company to others and reach out for future trips. Hi, We would like to say a few nice words about our guide cum driver. A huge thanks to our amazing driver Ozal. Dear Ozal, you started the journey with us as a driver, but somewhere along the way you became much more than that - a brother, a friend, a guide and a wonderful companion. Thank you for your kindness, patience, care, laughter and for making sure we were safe and comfortable throughout the journey. You didnt just show us beautiful places but you made us feel at home, like travelling with our own family and makes this trip unforgettable. We came to Azerbaijan as travellers but we leave with a beaitiful friendship and a brother like bond. Dear Thank you once again for everything and we will never forget you and you will always be a beautiful part of our Azerbaijan memories. Wishing you a great carrier and safe travels ahead. brother !",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 22,
    name: "dinu devarajan",
    location: "Thailand Guest",
    destination: "Thailand",
    role: "Thailand Guest",
    content: "Our trip was truly memorable! The way the Europe Calling team organized and managed everything was exceptional. The hotel selection, accommodation, and amenities provided were outstanding. Everything was very well planned and professionally managed, allowing us to enjoy all six days of our international trip without any hassle. We had a wonderful experience from start to finish. A big thank you to the entire Europe Calling team for making this trip so special! I would 100% recommend Europe Calling to anyone planning an international trip. You can travel with complete confidence and peace of mind. Highly recommended! 💯👏",
    rating: 5,
    hasVideo: false,
    image: null
  },
  {
    id: 23,
    name: "Dr Mariyam Nishana",
    location: "Azerbaijan Guest",
    destination: "Azerbaijan",
    role: "Azerbaijan Guest",
    content: "We had a wonderful experience with Europe Calling during our Azerbaijan trip. As busy professionals, we wanted a hassle-free holiday where everything was taken care of, and choosing their services was definitely the right decision. Our experience was excellent right from the initial package enquiry until the completion of our trip. A special mention to Aysha Nasrin and Aflah from their team for their support, coordination, and assistance throughout the process. They were helpful in ensuring everything was well organised and that the entire trip went smoothly. The arrangements, transportation, and overall coordination were seamless, allowing us to enjoy our vacation without having to worry about anything. A very special thanks to Mr. Farhad, our driver, who made our journeys even more comfortable and enjoyable. He was extremely friendly, professional, punctual, and accommodating throughout. His excellent service and warm approach made a real difference to our overall experience. We returned with beautiful memories and complete satisfaction with the service. We would highly recommend Europe Calling to our friends and we would love to travel with u again in future.",
    rating: 5,
    hasVideo: false,
    image: null
  },
];

const filters = ["All", "India Clients", "Azerbaijan Clients", "Other Countries"];

const VideoCarousel = ({ items }: { items: typeof testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  useEffect(() => {
    if (playingVideoId !== null || items.length < 2) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length, playingVideoId]);

  useEffect(() => {
    setActiveIndex(0);
    setPlayingVideoId(null);
  }, [items.length]);

  useEffect(() => {
    setPlayingVideoId(null);
  }, [activeIndex]);

  if (items.length === 0) return null;

  const getCircularOffset = (index: number, activeIndex: number, length: number) => {
    let offset = index - activeIndex;
    const half = Math.floor(length / 2);

    if (offset > half) offset -= length;
    else if (offset < -half) offset += length;

    return offset;
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    setPlayingVideoId(null);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    setPlayingVideoId(null);
  };

  const handleVideoToggle = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingVideoId === id) {
      const vid = videoRefs.current.get(id);
      if (vid) vid.pause();
      setPlayingVideoId(null);
    } else {
      const vid = videoRefs.current.get(id);
      if (vid) {
        vid.muted = false;
        vid.controls = true;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
      setPlayingVideoId(id);
    }
  };

  return (
    <div className="relative w-full py-4 md:py-8 overflow-hidden flex flex-col justify-center items-center bg-transparent min-h-[600px]">
      <div className="relative h-[400px] sm:h-[450px] w-full max-w-7xl mx-auto flex justify-center items-center perspective-[1000px]">
        {items.map((item, index) => {
          const offset = getCircularOffset(index, activeIndex, items.length);
          const isActive = offset === 0;
          const isPlaying = playingVideoId === item.id;

          if (Math.abs(offset) > 3) return null;

          let zIndex = 30 - Math.abs(offset) * 5;
          let opacity = isActive ? 1 : Math.max(0, 0.8 - Math.abs(offset) * 0.25);
          let scale = isActive ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.1);

          let xTranslation = 0;
          if (offset !== 0) {
            const direction = offset > 0 ? 1 : -1;
            const baseGap = 280;
            const stackGap = 60;
            xTranslation = (baseGap + (Math.abs(offset) - 1) * stackGap) * direction;
          }

          const baseWidth = isActive ? "w-[300px] sm:w-[500px]" : "w-[60px] sm:w-[80px]";
          const brightness = isActive ? "brightness-100" : "brightness-[0.3]";

          return (
            <div
              key={item.id}
              onClick={() => !isPlaying && setActiveIndex(index)}
              className={cn(
                "absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) shadow-2xl overflow-hidden rounded-2xl border-2",
                baseWidth,
                isActive ? "h-[300px] sm:h-[400px] border-gold/50 cursor-default" : "h-[250px] sm:h-[350px] border-white/10 hover:border-gold/30 cursor-pointer",
                "bg-black"
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${xTranslation}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
              }}
            >
              <div className={cn("w-full h-full relative transition-[filter] duration-500", brightness)}>
                {item.videoSrc ? (
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current.set(item.id, el);
                      else videoRefs.current.delete(item.id);
                    }}
                    src={item.videoSrc}
                    className="w-full h-full object-cover bg-black"
                    controls={isPlaying}
                    muted={!isPlaying}
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      const video = e.target as HTMLVideoElement;
                      if (!isPlaying) video.currentTime = 0.1;
                    }}
                    onEnded={() => setPlayingVideoId(null)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary via-primary/90 to-black" />
                )}

                {!isPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 pointer-events-none" />
                )}

                {isActive && !isPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="transform transition-transform duration-300 hover:scale-110 pointer-events-auto">
                      <button
                        onClick={(e) => handleVideoToggle(item.id, e)}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF7700] backdrop-blur-md rounded-full flex items-center justify-center border border-[#FF7700]/50 group shadow-[0_0_30px_rgba(255,119,0,0.3)] hover:bg-white hover:text-[#FF7700] transition-all"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1 group-hover:text-[#FF7700] group-hover:fill-[#FF7700]" />
                      </button>
                    </div>
                  </div>
                ) : null}

                {isActive && isPlaying && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setPlayingVideoId(null); }}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm z-50 pointer-events-auto"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-6 mt-8 relative z-50">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-gold hover:text-primary hover:border-gold hover:scale-110 text-primary transition-all duration-300 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full border border-primary/10 bg-white/5 backdrop-blur-sm hover:bg-gold hover:text-primary hover:border-gold hover:scale-110 text-primary transition-all duration-300 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const Testimonials = () => {
  const videoTestimonials = useMemo(() => {
    return testimonials.filter((t) => t.hasVideo);
  }, []);

  const textTestimonials = useMemo(() => {
    return testimonials.filter((t) => !t.hasVideo);
  }, []);

  // Group text testimonials into pairs for 2-row layout
  const chunkedTextTestimonials = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < textTestimonials.length; i += 2) {
      chunks.push(textTestimonials.slice(i, i + 2));
    }
    return chunks;
  }, [textTestimonials]);

  return (
    <>
      <Header />
      <main className="bg-[#faf4e5] min-h-screen pt-20">
        <div className="relative bg-[linear-gradient(180deg,#ffffff_0%,#faf4e5_150px,#faf4e5_100%)]">
          <div className="pb-20 pt-10">
            {/* Video Carousel Section */}
            {videoTestimonials.length > 0 && (
              <RevealOnScroll className="w-full mb-20 relative">
                <section className="w-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-gold/5 blur-[100px] -z-10 rounded-full"></div>

                  <div className="container-wide px-4 mb-4 text-center">
                    <div className="flex flex-col items-center justify-center animate-fade-in-up">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4">
                        <Play className="w-3 h-3 fill-gold" />
                        Watch Now
                      </div>

                      <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary mb-4 drop-shadow-sm">
                        Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-gold">Stories</span>
                      </h2>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-gold/50"></div>
                        <Star className="w-5 h-5 text-gold fill-gold animate-pulse-gentle" />
                        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-gold/50"></div>
                      </div>

                      <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
                        Hear directly from our clients as they share their journey to success in Europe.
                      </p>
                    </div>
                  </div>

                  <VideoCarousel items={videoTestimonials} />
                </section>
              </RevealOnScroll>
            )}

            {/* Written Testimonials Section */}
            {textTestimonials.length > 0 && (
              <section className="container-wide px-4">
                <RevealOnScroll animation="fade-up">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-border flex-grow"></div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary flex items-center gap-3">
                      <Quote className="fill-gold text-gold w-6 h-6" />
                      Client Reviews
                    </h2>
                    <div className="h-px bg-border flex-grow"></div>
                  </div>
                </RevealOnScroll>

                <div className="w-full max-w-[1400px] mx-auto">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {chunkedTextTestimonials.map((group, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <div className="flex flex-col gap-6">
                            {group.map((t) => (
                              <div key={t.id} className="h-full">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-all duration-300 font-sans min-h-[250px]">
                                  {/* Header */}
                                  <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                      <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-[#FF7700] flex items-center justify-center text-white font-bold text-lg">
                                          {t.name.charAt(0)}
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                          <Star className="w-2.5 h-2.5 text-white fill-white" />
                                        </div>
                                      </div>
                                      <div>
                                        <h3 className="font-bold text-gray-900 text-base leading-tight">{t.name}</h3>
                                        <p className="text-xs text-gray-400 mt-1">{t.role || '2025 Client'}</p>
                                      </div>
                                    </div>
                                    <GoogleLogo />
                                  </div>

                                  {/* Stars & Verified */}
                                  <div className="flex items-center gap-1 mb-4">
                                    <div className="flex gap-1">
                                      {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-[#fbbf24] text-[#fbbf24]' : 'fill-gray-200 text-gray-200'}`} />
                                      ))}
                                    </div>
                                    <VerifiedBadge />
                                  </div>

                                  {/* Content */}
                                  <div className="flex-grow">
                                    <p className="text-gray-600 text-[15px] leading-relaxed">
                                      {t.content}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-2 mt-8 pr-4">
                      <CarouselPrevious className="static translate-y-0" />
                      <CarouselNext className="static translate-y-0" />
                    </div>
                  </Carousel>
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default Testimonials;