import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Car, Anchor, Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Images
import img1 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.10 PM (1).jpeg"; // Landscape
import img2 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.58 PM.jpeg"; // Portrait
import img3 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.11 PM (1).jpeg"; // Landscape
import img4 from "@/assets/WhatsApp Image 2025-12-05 at 4.04.00 PM.jpeg"; // Tall Portrait for center
import img5 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.59 PM.jpeg"; // Landscape
import img6 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.10 PM.jpeg"; // Portrait
import img7 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.57 PM.jpeg"; // Landscape

export function GallerySection() {
    return (
        <section className="pt-12 sm:pt-20 md:pt-28 lg:pt-32 pb-10 bg-[linear-gradient(180deg,#faf4e5_0%,#faf4e5_150px,#faf4e5_100%)] relative overflow-hidden">
            {/* Background Decorative Line - More Subtle */}
            <div className="absolute top-1/2 left-0 w-[120%] -translate-x-[10%] -translate-y-1/2 -z-10 pointer-events-none text-gold/10 hidden md:block opacity-50">
                <svg viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="8 8"
                        d="M0,300 C200,300 300,100 500,150 C700,200 600,400 800,300 C1000,200 1100,50 1440,100"
                    />
                </svg>
            </div>

            <div className="container-wide px-4">
                <RevealOnScroll animation="fade-up">
                    <div className="text-center mb-20 relative">
                        <span className="font-['Dancing_Script'] text-3xl md:text-5xl text-gold mb-2 block">
                            Make Your Tour More Pleasure
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary mt-3 tracking-tight">
                            Recent Gallery
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 items-center">
                    {/* Col 1 - Left Wing */}
                    <RevealOnScroll delay={0} className="md:col-span-1 h-[280px] w-full hidden md:block">
                        <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-lg cursor-pointer">
                            <img
                                src={img1}
                                alt="Gallery 1"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                style={{ transitionDuration: '1.5s' }}
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </RevealOnScroll>

                    {/* Col 2 - Stack */}
                    <div className="md:col-span-1 flex flex-col gap-4 lg:gap-6 h-[400px] w-full">
                        <RevealOnScroll delay={100} className="h-[190px] flex-1">
                            <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-lg cursor-pointer">
                                <img
                                    src={img2}
                                    alt="Gallery 2"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                style={{ transitionDuration: '1.5s' }}
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={200} className="h-[190px] flex-1">
                            <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-lg cursor-pointer">
                                <img
                                    src={img3}
                                    alt="Gallery 3"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                style={{ transitionDuration: '1.5s' }}
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Col 3 - Center Tall */}
                    <RevealOnScroll delay={300} className="md:col-span-1 h-[400px] md:h-[480px] w-full relative z-10">
                        <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-2xl cursor-pointer ring-1 ring-gold/20">
                            <img
                                src={img4}
                                alt="Gallery Center"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                style={{ transitionDuration: '1.5s' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                            {/* Decorative badge for center image */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                <span className="glass-effect px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest uppercase border border-white/20">
                                    Memories
                                </span>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Col 4 - Stack */}
                    <div className="md:col-span-1 flex flex-col gap-4 lg:gap-6 h-[400px] w-full">
                        <RevealOnScroll delay={400} className="h-[190px] flex-1">
                            <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-lg cursor-pointer">
                                <img
                                    src={img5}
                                    alt="Gallery 5"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                style={{ transitionDuration: '1.5s' }}
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={500} className="h-[190px] flex-1">
                            <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-lg cursor-pointer">
                                <img
                                    src={img6}
                                    alt="Gallery 6"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                style={{ transitionDuration: '1.5s' }}
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Col 5 - Right Wing */}
                    <RevealOnScroll delay={600} className="md:col-span-1 h-[280px] w-full hidden md:block">
                        <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-lg cursor-pointer">
                            <img
                                src={img7}
                                alt="Gallery 7"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform ease-out-expo"
                                style={{ transitionDuration: '1.5s' }}
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="flex justify-center mt-12 relative z-20">
                    <Link to="/gallery" className="group flex items-center gap-3 px-10 py-4 bg-black text-white rounded-full font-bold text-sm md:text-base shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300">
                        <span>View all</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Decorative Icons - More Premium Color */}
                <div className="absolute bottom-10 right-[5%] hidden lg:block animate-float">
                    <Anchor className="w-10 h-10 text-gold/60 rotate-12" />
                </div>
                <div className="absolute top-[20%] left-[5%] hidden lg:block animate-pulse-gentle">
                    <Car className="w-10 h-10 text-gold/60 -rotate-12" />
                </div>
                <div className="absolute top-[15%] right-[20%] hidden lg:block">
                    <Plane className="w-6 h-6 text-gold/40 rotate-45" />
                </div>
            </div>
        </section>
    );
}
