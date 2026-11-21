import { Link } from "react-router-dom";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, Map, Users } from "lucide-react";

// Images
import img1 from "@/assets/destination-france.jpg";
import img2 from "@/assets/destination-georgia.png";
import img3 from "@/assets/russia.jpg";
import travelerImg from "@/assets/1766227243591-removebg-preview.png"; // Distinctive Lady Image

export function PlanTripSection() {
    return (
        <section className="py-24 lg:py-32 bg-[#faf4e5] relative overflow-hidden">
            {/* Decorative Background Elements - Soft Blue/Cyan Theme */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E0F2FE]/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E0F2FE]/50 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container-wide px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* 1. Left Column: Organic Image Collage */}
                    <div className="col-span-12 lg:col-span-5 relative">
                        <RevealOnScroll animation="slide-in-left">
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 h-[500px] sm:h-[580px]">
                                {/* Tall Left Pill Image */}
                                <div className="col-span-1 h-full rounded-[100px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] sm:border-[10px] border-white group relative">
                                    <img
                                        src={img1}
                                        alt="Scenic View"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                        style={{ transitionDuration: '1.5s' }}
                                    />
                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                                </div>

                                {/* Right Stacked Images */}
                                <div className="col-span-1 flex flex-col gap-4 sm:gap-6 h-full">
                                    {/* Top Image - Leaf Shape Upper */}
                                    <div className="h-1/2 w-full rounded-t-[80px] rounded-br-[80px] rounded-bl-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] sm:border-[10px] border-white group relative">
                                        <img
                                            src={img2}
                                            alt="Culture"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                        style={{ transitionDuration: '1.5s' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                                    </div>
                                    {/* Bottom Image - Leaf Shape Lower */}
                                    <div className="h-1/2 w-full rounded-b-[80px] rounded-tr-[30px] rounded-tl-[80px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] sm:border-[10px] border-white group relative">
                                        <img
                                            src={img3}
                                            alt="Nature"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                        style={{ transitionDuration: '1.5s' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* 2. Center Column: Content */}
                    <div className="col-span-12 lg:col-span-4 space-y-8 text-center lg:text-left pt-8 lg:pt-0">
                        <RevealOnScroll animation="fade-up">
                            <div>
                                <span className="font-['Dancing_Script'] text-3xl md:text-5xl text-gold block mb-3 font-medium">
                                    Let's Go Together
                                </span>
                                <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary leading-[1.15] tracking-tight">
                                    Plan Your Trip <br />
                                    <span className="text-primary">With Us</span>
                                </h2>
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                                There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.
                            </p>

                            {/* Feature List - Gold Icons */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-5 group justify-center lg:justify-start">
                                    <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center shadow-lg shadow-orange-200 transition-transform group-hover:scale-110 duration-300">
                                        <Map className="w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-heading text-xl font-bold text-primary">Exclusive Trip</h3>
                                        <p className="text-sm text-muted-foreground font-light">There are many variations of passages of available but the majority.</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 group justify-center lg:justify-start">
                                    <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center shadow-lg shadow-orange-200 transition-transform group-hover:scale-110 duration-300">
                                        <Users className="w-7 h-7" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-heading text-xl font-bold text-primary">Professional Guide</h3>
                                        <p className="text-sm text-muted-foreground font-light">There are many variations of passages of available but the majority.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 flex justify-center lg:justify-start">
                                <Link
                                    to="/contact"
                                    className="bg-primary text-white rounded-full px-12 py-5 font-semibold text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
                                >
                                    Learn More
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* 3. Right Column: Traveler Image (Use the Lady) */}
                    <div className="col-span-12 lg:col-span-3 relative h-[500px] lg:h-[700px] hidden md:block">
                        <RevealOnScroll animation="slide-in-right">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Circular Background - Faint Blue Gradient */}
                                <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-[#E0F2FE] to-[#faf4e5] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_60px_rgba(14,165,233,0.1)]" />

                                {/* Traveler Image - The Lady */}
                                <img
                                    src={travelerImg}
                                    alt="Travel Guide"
                                    className="relative z-10 w-auto h-[100%] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 origin-bottom"
                                />

                                {/* Floating Badge: Star Rating (Top Right of Circle) */}
                                <div className="absolute top-28 -right-2 bg-white w-16 h-16 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center animate-bounce z-20"
                                    style={{ animationDuration: '3000ms' }}>
                                    <span className="text-red-500 text-sm">★</span>
                                    <span className="font-bold text-xs text-primary">4.9k</span>
                                </div>

                                {/* Floating Badge: Love Emoji (Left of Lady) */}
                                <div className="absolute bottom-1/3 left-0 bg-white w-14 h-14 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center animate-bounce delay-700 z-20"
                                    style={{ animationDuration: '4000ms' }}>
                                    <span className="text-2xl">😍</span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
}
