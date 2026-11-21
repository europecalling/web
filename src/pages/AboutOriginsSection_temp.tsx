import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";

export default function AboutOriginsSection() {
    const statsRef = useRef<HTMLDivElement>(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStatsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <section className="section-padding relative bg-white overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
                <div className="absolute top-20 left-10 text-[20rem] font-heading font-bold text-primary leading-none select-none">2014</div>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content */}
                    <div className="order-2 lg:order-1 relative z-10">
                        <RevealOnScroll animation="fade-up">
                            <div className="mb-10 text-left relative">
                                <span className="font-['Dancing_Script'] text-3xl text-gold mb-2 block">Our Origins</span>
                                <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary leading-[1.1]">
                                    Why Europe Calling <br />
                                    <span className="relative inline-block">
                                        Was Created
                                        <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/10 -z-10 rounded-full"></span>
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8 text-lg text-muted-foreground leading-loose">
                                <p>
                                    It began with a realization. In 2014, the European dream was alive for millions, yet the path to achieving it was obscured by a fog of fragmented information, changing regulations, and impersonal bureaucracy.
                                </p>

                                {/* Premium Quote Block */}
                                <div className="relative pl-8 border-l-2 border-gold py-2">
                                    <p className="font-heading text-2xl md:text-3xl text-primary font-medium italic leading-relaxed">
                                        "The world didn't need another visa agency. It needed a partner who cared as much about the destination as the traveler does."
                                    </p>
                                </div>

                                <p>
                                    We saw brilliant professionals held back by paperwork. We saw families separated by avoidable errors. Europe Calling was born to bridge this gap—to provide not just a service, but a standard of transparency and expertise.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <div ref={statsRef} className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 gap-12">
                            <div>
                                <div className="flex items-baseline gap-1 text-primary">
                                    <span className="text-4xl font-heading font-bold">
                                        <AnimatedCounter value={50} suffix="+" duration={1500} isVisible={statsVisible} />
                                    </span>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gold mt-2">Expert Consultants</p>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-1 text-primary">
                                    <span className="text-4xl font-heading font-bold">
                                        <AnimatedCounter value={15} suffix="+" duration={1500} isVisible={statsVisible} />
                                    </span>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gold mt-2">Partner Countries</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visuals */}
                    <div className="relative order-1 lg:order-2 lg:h-auto min-h-[400px] flex items-center justify-center">
                        <RevealOnScroll animation="fade-in" delay={200} className="w-full relative">
                            {/* Decorative Background Box */}
                            <div className="absolute top-10 right-0 w-4/5 h-[90%] bg-[#F3E7C9]/30 rounded-[3rem] -z-10" />

                            {/* Main Portrait Image */}
                            <div className="relative w-3/4 ml-auto aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                                    alt="Modern Office"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Overlapping Landscape Image */}
                            <div className="absolute bottom-12 left-0 w-3/5 aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white z-20">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
                                    alt="Team Collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
}
