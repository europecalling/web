import { useState } from "react";
import { HeroSectionV2 } from "./HeroSectionV2";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Link } from "react-router-dom";
import { LeadPopup } from "../ui/LeadPopup";

export const HomeIntroHero = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <section className="relative min-h-[90vh] bg-[#faf4e5] flex items-center pt-16 sm:pt-24 md:pt-32 lg:pt-48 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
            {/* Background Decoration - softer and more premium */}
            <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none opacity-60" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none opacity-60" />

            {/* Fine texture overlay for premium feel */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-multiply" />

            <div className="container-wide px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Content (Text) - Spans 5 columns */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
                        <RevealOnScroll animation="slide-in-left">
                            {/* Title Section */}
                            <div className="mb-4 sm:mb-6 md:mb-8 relative z-20">
                                <span className="block font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black mb-1 sm:mb-2 tracking-tight">
                                    Welcome to
                                </span>
                                <span className="block font-heading font-black italic text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#FF6B00] tracking-tighter drop-shadow-sm filter pr-4">
                                    Europe Calling
                                </span>
                            </div>

                            <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light max-w-lg mx-auto lg:mx-0 tracking-wide mb-6 sm:mb-8 md:mb-10">
                                For over a decade, we've been the bridge between dreams and destinations.
                                Experience Europe's finest landscapes, cultures, and opportunities with the industry's most trusted partner.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 md:pt-6 justify-center lg:justify-start">
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="px-8 py-3 bg-black text-white rounded-full font-bold text-sm md:text-base shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group min-w-[180px]"
                                >
                                    Start Your Journey
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <Link to="/about" className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm md:text-base shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-w-[180px]">
                                    Read Our Story
                                </Link>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Preview Box (Image) - Spans 7 columns for "Width" */}
                    <div className="lg:col-span-7 order-1 lg:order-2 w-full">
                        <RevealOnScroll animation="scale-up" delay={200} className="w-full relative">
                            {/* White Border/Frame Container */}
                            <div className="relative p-3 bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
                                <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden bg-gray-100">
                                    {/* Inner Container for Scaled Hero */}
                                    <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none select-none">
                                        <HeroSectionV2 className="h-full w-full" />
                                    </div>

                                    {/* Glass Overlay for "Preview" feel */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -inset-10 bg-gradient-to-tr from-gold/20 to-primary/10 rounded-[4rem] blur-3xl -z-10 opacity-50" />
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
            <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </section>
    );
};
