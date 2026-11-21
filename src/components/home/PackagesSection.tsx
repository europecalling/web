import { Link } from "react-router-dom";
import {
    CheckCircle2,
    FileText,
    Star,
    Sparkles,
    Zap,
    Crown,
    ShieldCheck
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const packages = [
    {
        id: "basic",
        title: "Basic Package",
        subtitle: "Essential Guidance",
        description: "Perfect for independent travelers who need expert guidance with documentation and initial planning essentials.",
        icon: FileText,
        highlighted: false,
        features: [
            "Airport pickup and dropping",
            "Hotel Accommodation",
            "Breakfast",
            "Sightseeing",
            "Personal assistance",
            "Personal English Speaking Driver",
            "Private transportation",
            "All including taxes",
        ],
        benefits: [
            "Cost-effective solution",
            "Expert error verification",
            "Retain control of your schedule",
            "Essential safety nets included"
        ],
        documents: [
            "Valid passport (6+ months)",
            "Passport-size photographs",
            "Educational certificates",
            "Bank statements (last 6 months)",
            "Travel insurance"
        ],
    },
    {
        id: "custom",
        title: "Luxury Package",
        subtitle: "Premium Experience",
        description: "A comprehensive, fully managed solution for discerning travelers seeking a seamless and luxurious transition.",
        icon: Crown,
        highlighted: true,
        features: [
            "Luxury Accommodation",
            "Premium Transfers & Comfort",
            "Exclusive Dining Experiences",
            "Private Tours & Expert Guides",
            "Curated Cultural Experiences",
            "Custom Trips Across Multiple Destinations",
            "Personalized Luxury Touches",
            "Everything in Basic Package",
            "Flight tickets",
            "Visa",
            "Entry ticket",
            "Lunch and dinner",
        ],
        benefits: [
            "Completely stress-free experience",
            "Priority handling & support",
            "VIP treatment & Exclusive access",
            "End-to-end relocation management",
            "Personalized career strategy"
        ],
        documents: [
            "All Basic Package documents",
            "Professional Resume/CV",
            "Work Portfolio/Samples",
            "Reference Letters",
            "Skill certifications",
            "Family documents (if applicable)"
        ],
    },
];

export const PackagesSection = () => {
    const basicPkg = packages[0];
    const customPkg = packages[1];

    return (
        <div className="container-wide px-4 pb-24">
            <RevealOnScroll
                animation="fade-up"
                className="max-w-7xl mx-auto rounded-[3rem] shadow-2xl border border-gray-100 bg-white overflow-hidden flex flex-col lg:flex-row"
            >

                {/* Left: Basic Package */}
                <div className="w-full lg:w-5/12 bg-slate-50/50 p-5 md:p-7 lg:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-3 text-xl shadow-sm">
                            <basicPkg.icon className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h2 className="font-heading text-2xl font-bold text-primary mb-1">{basicPkg.title}</h2>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-primary/60 mb-2">{basicPkg.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {basicPkg.description}
                        </p>
                    </div>

                    <div className="space-y-5 flex-grow">
                        <div>
                            <h3 className="flex items-center gap-2 font-bold mb-2.5 text-primary text-sm">
                                <Zap className="w-3.5 h-3.5 text-primary" /> Key Features
                            </h3>
                            <ul className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-1.5">
                                {basicPkg.features.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary/40" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-5 border-t border-gray-200">
                            <h3 className="font-bold text-[10px] uppercase tracking-wider mb-2.5 text-primary/80">Required Documents</h3>
                            <div className="flex flex-wrap gap-1.5">
                                {basicPkg.documents.map((doc, i) => (
                                    <span key={i} className="text-[10px] bg-white border border-gray-200 px-2 py-1 rounded-md text-gray-400 font-medium">
                                        {doc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-5">
                        <Link to="/contact" className="w-full block py-2.5 rounded-xl border-2 border-primary text-primary font-bold text-center hover:bg-primary hover:text-white transition-all duration-300 text-sm">
                            Select Basic
                        </Link>
                        <p className="text-center text-[10px] text-muted-foreground mt-2">Ideal for self-starters</p>
                    </div>
                </div>

                {/* Right: Custom Package (Premium) */}
                <div className="w-full lg:w-7/12 bg-primary p-5 md:p-7 lg:p-8 text-white relative flex flex-col overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

                    <div className="absolute top-5 right-6">
                        <span className="bg-gold text-primary text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                            <Star className="w-2.5 h-2.5 fill-primary" /> Most Popular
                        </span>
                    </div>

                    <div className="relative z-10 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 text-gold flex items-center justify-center mb-3 text-2xl shadow-lg ring-1 ring-white/10">
                            <customPkg.icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-1">{customPkg.title}</h2>
                        <p className="text-gold font-bold tracking-widest uppercase mb-3 text-[10px]">{customPkg.subtitle}</p>
                        <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                            {customPkg.description}
                        </p>
                    </div>

                    <div className="relative z-10 grid xl:grid-cols-2 gap-5 flex-grow">
                        <div>
                            <h3 className="flex items-center gap-2 font-bold mb-3 text-white text-sm">
                                <Sparkles className="w-3.5 h-3.5 text-gold" /> Exclusive Features
                            </h3>
                            <ul className="grid grid-cols-2 xl:grid-cols-1 gap-x-4 gap-y-1.5">
                                {customPkg.features.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                                        <span className="text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 h-fit">
                            <h3 className="flex items-center gap-2 font-bold mb-2.5 text-white text-sm">
                                <ShieldCheck className="w-3.5 h-3.5 text-gold" /> VIP Benefits
                            </h3>
                            <ul className="grid sm:grid-cols-2 xl:grid-cols-1 gap-x-4 gap-y-1.5">
                                {customPkg.benefits.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[11px] text-white/50">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                        <Link to="/contact" className="flex-1 w-full bg-gold hover:bg-white text-primary py-3 rounded-xl font-bold text-center text-sm shadow-lg transition-all duration-300">
                            Get Premium Access
                        </Link>
                        <div className="text-center sm:text-left">
                            <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">Full Service</p>
                            <p className="text-xs font-medium text-white/70">Everything handled for you.</p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    );
};
