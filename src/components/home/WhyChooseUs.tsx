import { Globe, Headphones, ShieldCheck, FileText, Users, Clock } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const features = [
  {
    icon: Globe,
    title: "Europe-focused expertise",
    description: "Deep knowledge of European destinations, cultures, and hidden gems.",
    bgColor: "bg-black",
    pinColor: "bg-[#FF7700]",
    textColor: "text-[#FF7700]",
    iconBg: "bg-[#FF7700]",
    delay: 0,
  },
  {
    icon: Headphones,
    title: "24/7 dedicated support",
    description: "Round the clock assistance from pre-departure to your safe return home.",
    bgColor: "bg-black",
    pinColor: "bg-[#FF7700]",
    textColor: "text-[#FF7700]",
    iconBg: "bg-[#FF7700]",
    delay: 100,
  },
  {
    icon: ShieldCheck,
    title: "Eurasian travel experts",
    description: "Baku-based, Malayalee-led team delivering seamless ground coordination.",
    bgColor: "bg-black",
    pinColor: "bg-[#FF7700]",
    textColor: "text-[#FF7700]",
    iconBg: "bg-[#FF7700]",
    delay: 200,
  },
  {
    icon: FileText,
    title: "Transparent process",
    description: "Clear timelines, honest pricing, and real time updates at every stage.",
    bgColor: "bg-black",
    pinColor: "bg-[#FF7700]",
    textColor: "text-[#FF7700]",
    iconBg: "bg-[#FF7700]",
    delay: 300,
  },
  {
    icon: Users,
    title: "Experienced team",
    description: "Diverse experts who understand both your background and destination.",
    bgColor: "bg-black",
    pinColor: "bg-[#FF7700]",
    textColor: "text-[#FF7700]",
    iconBg: "bg-[#FF7700]",
    delay: 400,
  },
  {
    icon: Clock,
    title: "Hassle-free documentation",
    description: "Expert assistance with visas, permits, and all travel-related paperwork.",
    bgColor: "bg-black",
    pinColor: "bg-[#FF7700]",
    textColor: "text-[#FF7700]",
    iconBg: "bg-[#FF7700]",
    delay: 500,
  },
];

export function WhyChooseUs() {
  return (
    <section className="pt-12 pb-8 lg:pt-16 lg:pb-8 bg-[#faf4e5] relative overflow-hidden">

      {/* Background with Notebook Lines Effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: 'linear-gradient(#E5E7EB 1px, transparent 1px)',
          backgroundSize: '100% 40px',
          maskImage: 'linear-gradient(to bottom, transparent 15%, black 250px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 15%, black 250px)'
        }}
      />
      {/* Decorative Dashed Arch */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-64 border-t-2 border-dashed border-gray-200 rounded-t-full opacity-60 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 100px)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 100px)'
        }}
      />

      <div className="container-wide relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 leading-tight tracking-tight animate-fade-in-up text-shadow-premium">
            Why Travelers Choose
          </h2>
          <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gold block mb-6 animate-fade-in-up animation-delay-100 text-shadow-premium">
            Europe Calling
          </span>

          <RevealOnScroll animation="fade-up" delay={200}>
            <div className="inline-block bg-white/90 backdrop-blur-md border border-gray-100/50 rounded-2xl px-6 py-4 shadow-sm max-w-2xl">
              <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
                We don't just process visas; we design life-changing journeys. Experience the gold standard in European travel facilitation.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Features Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <RevealOnScroll key={index} animation="fade-up" delay={item.delay}>
              <div className="relative group pt-4 h-full">

                {/* Pin Styling - Centered and Realistic */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-full h-full rounded-full ${item.pinColor} shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2)]`} />
                </div>
                {/* Pin Shadow on Paper */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-5 h-2 bg-black/20 blur-[2px] rounded-full" />

                {/* Card Content - Premium Dark Card */}
                <div
                  className={`${item.bgColor} rounded-[24px] p-8 h-full relative shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(255,119,0,0.15)] transition-all duration-500 hover:-translate-y-2 border border-[#FF7700]/20 flex flex-col items-start bg-gradient-to-br from-[#121212] to-black`}
                >
                  {/* Icon Box */}
                  <div className={`w-14 h-14 ${item.iconBg} rounded-[18px] flex items-center justify-center shadow-[0_4px_15px_-4px_rgba(255,119,0,0.4)] mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={`w-7 h-7 text-white`} strokeWidth={1.5} />
                  </div>

                  <h3 className={`font-heading text-lg sm:text-xl font-bold mb-3 leading-tight ${item.textColor} drop-shadow-[0_2px_10px_rgba(255,119,0,0.15)]`}>
                    {item.title}
                  </h3>

                  <p className={`leading-relaxed text-[15px] font-medium tracking-wide text-[#faf4e5]/90`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
