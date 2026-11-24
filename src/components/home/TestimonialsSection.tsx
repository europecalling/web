import { useState } from "react";
import { Play, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import testimonialVideo from "@/assets/video/WhatsApp Video 2025-12-15 at 1.17.17 PM (2).mp4";

const testimonials = [
    {
        id: 1,
        name: "keerthana reghu",
        date: "ARMENIA Guest",
        text: "We had a wonderful trip to Armenia with Europe Calling, and we highly recommend them to everyone planning to visit! A special thanks to Bilal, who picked us up from the airport and was our driver and guide throughout the trip. He made our entire experience so smooth and comfortable. Since he spoke the local language, everything became much easier for us, from ordering food to communicating with local people. Bilal explained each place we visited clearly and patiently, making our sightseeing experience even more enjoyable. His politeness, punctuality, helpful nature, and professionalism truly made a difference to our trip. We are very happy with the service provided by Europe Calling and grateful to Bilal for taking such good care of us throughout our journey. If you are planning a trip to Armenia, we definitely recommend Europe Calling and Bilal for a hassle-free and memorable experience! Thank you for making our Armenia trip so special! ❤️",
        initial: "K"
    },
    {
        id: 2,
        name: "MOHAMED ASIF",
        date: "THAILAND Guest",
        text: "The arrangement done by EUROPE CALLING Team was very nice. We never face any issues in Thailand. Everything was on time. The hotel they arranged in Pataya was super. The car and drivers are very good. Thanks to Europe calling",
        initial: "M"
    },
    {
        id: 3,
        name: "Reju Nair",
        date: "KAZAKHISTAN Guest",
        text: "Just returned from an unforgettable 6-night trip to Almaty, Kazakhstan, perfectly organized by Europe Calling! The backend team, led by Aysha and Mohammed, tailored our itinerary around our love for mountains, lakes, canyons, and adventure, complete with a comfortable MUV for our road journeys. From the moment we landed, Shibin from operations team took incredible care of us, creating a warm, welcoming atmosphere. The team continuously checked in throughout the journey, showing true customer-centricity. Thank you, Europe Calling, for making our trip epic! Highly recommended.",
        initial: "R"
    },
    {
        id: 4,
        name: "Amna Beevi",
        date: "AZERBAIJAN Guest",
        text: "We had a wonderful experience travelling to Baku with Europe Calling! Everything was well organised, from the travel arrangements to the overall coordination throughout the trip. A special thanks to Nasrin, Aflah, and the entire team for being so helpful and responsive whenever we needed them. Their support and coordination made our holiday smooth and enjoyable.✨ Thank you for making our trip a lovely experience. Highly recommended! 😊✨",
        initial: "A"
    },
    {
        id: 5,
        name: "Ramees Saleem",
        date: "Georgia Guest",
        text: "We booked our honeymoon package to Georgia through Europe Calling, and it was an absolutely incredible experience! From start to finish, everything was perfectly organized and tailored to our preferences. The team was professional, attentive, went above and beyond to ensure we had a safe and memorable trip. The itinerary was a perfect blend of relaxation and adventure, with stunning accommodations and thoughtful surprises along the way. They truly understood what we were looking for and made our honeymoon magical. We would like to extend our sincere gratitude to Mr. Najath and Mrs. Shirin Najath, founders of Europe Calling and wish them all the best for their expansion journey. If you're looking for a reliable and exceptional tour company, I highly recommend Europe Calling. They made our dream honeymoon come true!",
        initial: "R"
    },
    {
        id: 6,
        name: "Hana Nasser",
        date: "Georgia Guest",
        text: "Our recent trip to Georgia is truly one that will never be forgotten. Arranged by Europe Calling, the experience was filled with exquisite food, luxurious hotels, and exceptional service. We didn’t miss out on any of the famous landmarks, and the guide provided was incredibly friendly and knowledgeable. With fresh air and a change in scenery, it was a great stress relief. Along with great entertainment and a well-curated itinerary, this trip was truly memorable.",
        initial: "H"
    },
    {
        id: 7,
        name: "Sajid Shajahan",
        date: "Russia Guest",
        text: "We had an incredible experience with Europe Calling, who planned the perfect trip for me and my wife to Russia. The itinerary was meticulously crafted, balancing cultural exploration, breathtaking scenery and moments of relaxation. Every detail was seamlessly managed, from the smooth transfers to top-notch accommodations and guided tours that showcased Russia’s rich history and beauty. Their personalized approach ensured we had unforgettable experiences, whether it was walking through the grandeur of Moscow or marveling at the charm of St. Petersburg. This was, without doubt, one of the best trips we’ve ever had. Thank you for exceeding our expectations!",
        initial: "S"
    },
    {
        id: 8,
        name: "Mini Sharafudeen",
        date: "Kazakhstan Guest",
        text: "Our trip to Kazakhstan with Europe Calling Travel & Tourism was fantastic! Everything was perfectly organized — from flights and hotels to daily tours. The itinerary covered beautiful spots like Big Almaty Lake and Charyn Canyon, and the guide was friendly and knowledgeable. A smooth, memorable experience overall. Highly recommended! ⭐️⭐️⭐️⭐️⭐️",
        initial: "M"
    },
    {
        id: 9,
        name: "Pretheeksha Gopinath",
        date: "Azerbaijan Guest",
        text: "I wanted to thank your entire europe calling team for organizing such a wonderful week-long trip. From comfortable accommodations and great facilities to seamless transportation, everything was handled with care. Because every detail was taken care of, we could truly relax and enjoy the experience. We will gladly recommend your company to others and reach out for future trips. Hi, We would like to say a few nice words about our guide cum driver. A huge thanks to our amazing driver Ozal. Dear Ozal, you started the journey with us as a driver, but somewhere along the way you became much more than that - a brother, a friend, a guide and a wonderful companion. Thank you for your kindness, patience, care, laughter and for making sure we were safe and comfortable throughout the journey. You didnt just show us beautiful places but you made us feel at home, like travelling with our own family and makes this trip unforgettable. We came to Azerbaijan as travellers but we leave with a beaitiful friendship and a brother like bond. Dear Thank you once again for everything and we will never forget you and you will always be a beautiful part of our Azerbaijan memories. Wishing you a great carrier and safe travels ahead. brother !",
        initial: "P"
    },
    {
        id: 10,
        name: "dinu devarajan",
        date: "Thailand Guest",
        text: "Our trip was truly memorable! The way the Europe Calling team organized and managed everything was exceptional. The hotel selection, accommodation, and amenities provided were outstanding. Everything was very well planned and professionally managed, allowing us to enjoy all six days of our international trip without any hassle. We had a wonderful experience from start to finish. A big thank you to the entire Europe Calling team for making this trip so special! I would 100% recommend Europe Calling to anyone planning an international trip. You can travel with complete confidence and peace of mind. Highly recommended! 💯👏",
        initial: "D"
    },
    {
        id: 11,
        name: "Dr Mariyam Nishana",
        date: "Azerbaijan Guest",
        text: "We had a wonderful experience with Europe Calling during our Azerbaijan trip. As busy professionals, we wanted a hassle-free holiday where everything was taken care of, and choosing their services was definitely the right decision. Our experience was excellent right from the initial package enquiry until the completion of our trip. A special mention to Aysha Nasrin and Aflah from their team for their support, coordination, and assistance throughout the process. They were helpful in ensuring everything was well organised and that the entire trip went smoothly. The arrangements, transportation, and overall coordination were seamless, allowing us to enjoy our vacation without having to worry about anything. A very special thanks to Mr. Farhad, our driver, who made our journeys even more comfortable and enjoyable. He was extremely friendly, professional, punctual, and accommodating throughout. His excellent service and warm approach made a real difference to our overall experience. We returned with beautiful memories and complete satisfaction with the service. We would highly recommend Europe Calling to our friends and we would love to travel with u again in future.",
        initial: "D"
    },
];

// Homepage shows only the first 6 reviews
const featuredTestimonials = testimonials.slice(0, 6);

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
                            <div className="w-full h-full bg-[#FF7700] flex items-center justify-center text-white font-bold text-sm">
                                {item.initial}
                            </div>
                        </div>
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
            <div className="absolute top-0 left-0 w-full h-full bg-white -z-10" />

            <div className="container relative z-10 px-6 max-w-7xl mx-auto">
                <RevealOnScroll animation="fade-up">
                    <div className="text-center mb-16">
                        <span className="font-['Dancing_Script'] text-3xl sm:text-4xl text-gold block mb-2">Testimonials</span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-[48px] font-semibold text-primary text-shadow-premium">What our clients say</h2>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-up" delay={200}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredTestimonials.map((item) => (
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