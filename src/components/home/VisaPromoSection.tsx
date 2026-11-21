import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TripPlannerForm } from "@/components/ui/TripPlannerForm";
import visaExpertImg from "@/assets/Gemini_Generated_Image_szihweszihweszih.png";

export function VisaPromoSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <section className="pt-4 pb-12 px-4 md:px-6 bg-[#faf4e5]">
            <div className="container-wide">
                <RevealOnScroll animation="scale-up">
                    <div
                        className="relative bg-black rounded-3xl overflow-hidden flex flex-col md:flex-row items-center min-h-[420px]"
                        style={{
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
                        }}
                    >

                        {/* Decorative Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0 pointer-events-none" />

                        {/* Content Side */}
                        <div className="flex-1 p-8 md:p-10 relative z-10 w-full md:w-1/2">
                            <div className="space-y-4 max-w-xl">
                                {/* Badge/Label */}
                                <div className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                                    <span className="text-white/60 font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em]">
                                        Visa Services
                                    </span>
                                </div>

                                {/* Headline */}
                                <h2 className="font-heading text-3xl sm:text-4xl md:text-[48px] font-bold text-white leading-[1.1] tracking-tight">
                                    You do the flying, <br />
                                    <span className="text-white/90">we'll handle the faff.</span>
                                </h2>

                                {/* Description */}
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md">
                                    Complex visa processes shouldn't stand between you and your vacation. We handle the paperwork so you can focus on the packing.
                                </p>

                                {/* Button */}
                                <div className="pt-2">
                                    <button
                                        onClick={() => setIsPopupOpen(true)}
                                        className="group inline-flex items-center gap-3 bg-[#FF7700] hover:bg-[#FF7700]/90 text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7700]/30 hover:-translate-y-0.5"
                                    >
                                        <span className="tracking-wide text-xs sm:text-sm uppercase">Visit Now</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative w-full md:w-[55%] h-64 md:h-full md:absolute md:right-0 md:top-0 md:bottom-0 z-0 flex items-end justify-center md:justify-end overflow-hidden">
                            {/* Glow behind character */}
                            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

                            <div className="relative w-full h-full">
                                <img
                                    src={visaExpertImg}
                                    alt="Visa Application Support"
                                    className="w-full h-full object-cover object-top [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_40%,black_100%)]"
                                />
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>

            <TripPlannerForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </section>
    );
}
