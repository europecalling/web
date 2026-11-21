import { useState } from "react";
import { Play, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import testimonialVideo from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.17 PM (2).mp4";

const testimonials = [
    {
        id: 1,
        name: "Aashiq M K",
        date: "31 July 2025",
        text: "Wonderful experience, nice arrangements and frequently follow up from the team (Jelsa and Aysha). Well done team and special mention to the guides (Arif and Eishan) for the wonder support",
        initial: "A"
    },
    {
        id: 2,
        name: "Fulayil Arthaf K.H",
        date: "15 Aug 2025",
        text: "We had an amazing experience with the team at Kazakhstan. Guides are very friendly, which offered us a hassle free experience throughout our trip.",
        initial: "F"
    },
    {
        id: 3,
        name: "Adv.Jeshma Akthar",
        date: "02 Sept 2025",
        text: "Thank you, Europe Calling Team, for your great hospitality, caring service, and budget-friendly pricing. Highly appreciated!",
        initial: "J"
    },
    {
        id: 4,
        name: "vijesh kelangath",
        date: "12 Oct 2025",
        text: "Very very highly recommended travels . We had a good experience with them.good supporting from sales ,operation team(sherin ). Good hotels . Great team",
        initial: "V"
    },
    {
        id: 5,
        name: "Shaji Pallana",
        date: "20 Nov 2025",
        text: "We booked our family vacation package to Georgia through Europe Calling and it was an absolutely incredible experience , Good dealings ,cheap and best. Thanks Europe calling for your great trip .",
        initial: "S"
    },
    {
        id: 6,
        name: "Asarus Mk",
        date: "05 Dec 2025",
        text: "Excellent service, professionalism, and punctuality. The beekeeping and honey production are truly remarkable, may God bless them.",
        initial: "A"
    },
];

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

const StarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export function TestimonialsSection() {
    // Removed isPlaying state as video is removed

    const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
        <div
            className="bg-white p-6 rounded-2xl h-full flex flex-col font-sans transition-all duration-300 hover:-translate-y-1"
            style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    {/* Avatar with Badge */}
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                            {/* Placeholder Avatar */}
                            <div className="w-full h-full bg-[#FF7700] flex items-center justify-center text-white font-bold text-sm">
                                {item.initial}
                            </div>
                        </div>
                        {/* Orange Star Badge on Avatar */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center border border-white">
                            <StarIcon className="w-2.5 h-2.5 text-white" />
                        </div>
                    </div>

                    {/* Name and Date */}
                    <div className="flex flex-col">
                        <span className="font-bold text-primary text-sm">{item.name}</span>
                        <span className="text-muted-foreground text-xs">{item.date}</span>
                    </div>
                </div>

                {/* Google Logo */}
                <GoogleLogo />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-3">
                <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4" />
                    ))}
                </div>
                <VerifiedBadge />
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2 line-clamp-4">
                {item.text}
            </p>

        </div>
    );

    return (
        <section id="testimonials-preview" className="pt-10 pb-8 md:pb-20 bg-[linear-gradient(180deg,#faf4e5_0%,#faf4e5_300px,#faf4e5_100%)] relative overflow-hidden">
            {/* Simple Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-white -z-10" />

            <div className="container relative z-10 px-6 max-w-7xl mx-auto">

                {/* Section Header */}
                <RevealOnScroll animation="fade-up">
                    <div className="text-center mb-16">
                        <span className="font-['Dancing_Script'] text-3xl sm:text-4xl text-gold block mb-2">Testimonials</span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-[48px] font-semibold text-primary text-shadow-premium">What our clients say</h2>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" delay={200}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((item) => (
                            <TestimonialCard key={item.id} item={item} />
                        ))}
                    </div>
                </RevealOnScroll>

                <div className="flex justify-center mt-8 md:mt-12">
                    <Link to="/reviews" className="group flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-bold text-sm md:text-base shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300">
                        <span>View all</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
