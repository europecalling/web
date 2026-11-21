
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { RefreshCcw, DollarSign, Calendar, XCircle, FileText, Globe, Mail, MapPin, HelpCircle } from "lucide-react";

export default function RefundPolicy() {
    const lastUpdated = "December 19, 2025";

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full max-w-full">
            <Header />

            <main className="bg-[#faf4e5] flex-grow overflow-x-hidden w-full max-w-full">
                <div className="container-narrow mx-auto max-w-4xl px-4 pt-32 pb-2 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Refund Policy</h1>
                </div>

                <section className="pt-8 pb-20 px-4 sm:px-4 md:px-6 overflow-x-hidden w-full max-w-full">
                    <div className="container-narrow mx-auto max-w-4xl">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:text-primary transition-colors max-w-none">

                                <div className="bg-secondary/20 border border-secondary p-4 sm:p-6 rounded-xl mb-12 flex items-start gap-3 sm:gap-4">
                                    <RefreshCcw className="w-6 h-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-heading text-lg font-bold text-primary mb-2">Policy Overview</h4>
                                        <p className="text-sm text-muted-foreground m-0">
                                            This policy outlines our payment terms, cancellation rules, and refund conditions.
                                            <br />
                                            <span className="font-medium mt-2 block">Last Updated: {lastUpdated}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* 1. Payment Terms */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <DollarSign className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">1. Payment Terms</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Full payment or Half payment (as per invoice) must be settled at least 15 days prior to the arrival date.</li>
                                            <li>Failure to complete payment within the stipulated time may result in automatic cancellation without notice.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Cancellation Policy */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">2. Cancellation Policy</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Advance payment must be settled before 14 days of the arrival date. If not, bookings will be canceled without further notice.</li>
                                            <li>
                                                35% of the total package cost will be treated as a non-refundable confirmation fee, as hotel reservations and vehicle arrangements are secured in advance.
                                            </li>
                                            <li>
                                                In case of cancellation, the remaining 65% of the package amount will be refunded, while 35% will be retained to cover hotel reservation and vehicle arrangement expenses already confirmed.
                                            </li>
                                            <li>If cancelled within 14 days of the check-in date or in case of no-show, 100% cancellation charges will apply.</li>
                                        </ul>
                                    </div>

                                    {/* 3. Refund Conditions */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <XCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">3. Refund Conditions</h2>
                                        </div>
                                        <p>
                                            Refunds, if applicable, are subject to supplier policies and service utilization. No refunds will be provided for:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Unused services</li>
                                            <li>Visa rejection</li>
                                            <li>Flight delays or cancellations by airlines</li>
                                            <li>Government regulation changes</li>
                                            <li>Events beyond our control (e.g., natural disasters, war, civil unrest, strikes)</li>
                                        </ul>
                                    </div>

                                    {/* 4. Visa & Documentation */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">4. Visa & Documentation</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Europe Calling is not responsible for visa rejection or travel denial.</li>
                                            <li>Cancellation charges will apply as per booking terms even in visa-related issues.</li>
                                        </ul>
                                    </div>


                                    {/* Contact Section - Premium Compact Design */}
                                    <div className="relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] mt-12 text-center border border-white/80 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] w-full max-w-full">
                                        {/* Decorative background element */}
                                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                                        <div className="relative z-10 w-full">
                                            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-xl bg-white shadow-md text-gold mb-4 sm:mb-5 md:mb-6 border border-gold/10 transform rotate-3">
                                                <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7" />
                                            </div>

                                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-3 sm:mb-4 tracking-tight">
                                                Questions about our Refund Policy?
                                            </h3>

                                            <p className="text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-1">
                                                If you require assistance or have queries regarding a refund, apply for it, and our team will get back to you.
                                            </p>

                                            <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto w-full">
                                                {/* Row 1: Email & Phone */}
                                                <div className="group w-full bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-start gap-3 sm:gap-4 text-left relative overflow-hidden">
                                                    <div className="absolute right-0 top-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                                                    <div className="w-12 h-12 sm:w-11 sm:h-11 md:w-10 md:h-10 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                                        <Mail className="w-5 h-5 sm:w-[18px] sm:h-[18px] md:w-4 md:h-4" />
                                                    </div>
                                                    <div className="relative flex-1 min-w-0 overflow-hidden flex flex-wrap items-center gap-x-6 gap-y-1">
                                                        <p className="text-[10px] sm:text-[11px] md:text-[10px] text-gray-500 font-semibold uppercase tracking-wider w-full mb-0.5">Contact</p>
                                                        <a href="mailto:sales@europecalling.co" className="text-primary font-bold text-xs sm:text-sm md:text-base leading-tight hover:text-gold transition-colors">sales@europecalling.co</a>
                                                        <a href="https://wa.me/994555533744" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-xs sm:text-sm md:text-base leading-tight hover:text-gold transition-colors">+994 55 553 37 44</a>
                                                    </div>
                                                </div>

                                                {/* Row 2: Two Office Locations */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=Bashir+safar-oghlu,+Baku,+Azerbaijan" target="_blank" rel="noopener noreferrer" className="w-full bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-start gap-3 sm:gap-4 text-left group">
                                                        <div className="w-12 h-12 sm:w-11 sm:h-11 md:w-10 md:h-10 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                                            <MapPin className="w-5 h-5 sm:w-[18px] sm:h-[18px] md:w-4 md:h-4" />
                                                        </div>
                                                        <div className="flex-1 min-w-0 overflow-hidden">
                                                            <p className="font-bold text-primary text-sm sm:text-base mb-1 sm:mb-0.5 leading-tight">Baku Office</p>
                                                            <p className="text-gray-600 text-xs sm:text-sm m-0 leading-relaxed">Bashir safar-oghlu, Baku, Azerbaijan</p>
                                                        </div>
                                                    </a>
                                                    <a href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519" target="_blank" rel="noopener noreferrer" className="w-full bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 border-l-[4px] border-l-gold hover:border-gold/50 transition-all duration-300 flex items-start gap-3 sm:gap-4 text-left group">
                                                        <div className="w-12 h-12 sm:w-11 sm:h-11 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                                            <MapPin className="w-5 h-5 sm:w-[18px] sm:h-[18px] md:w-4 md:h-4" />
                                                        </div>
                                                        <div className="flex-1 min-w-0 overflow-hidden">
                                                            <p className="font-bold text-primary text-sm sm:text-base mb-1 sm:mb-0.5 leading-tight">India Office</p>
                                                            <p className="text-gray-600 text-xs sm:text-sm m-0 leading-relaxed">2nd Floor, Paravath Arcade, Malappuram, Kerala 676519</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
            <StickyEnquireButton />
        </div>
    );
}
