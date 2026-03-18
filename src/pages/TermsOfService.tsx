
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Scale, FileCheck, Layers, AlertCircle, Ban, HelpCircle, CheckCircle, Globe, Plane, Mail, MapPin } from "lucide-react";

export default function TermsOfService() {
    const lastUpdated = "February 15, 2026";

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full max-w-full">
            <Header />

            <main className="bg-[#faf4e5] flex-grow overflow-x-hidden w-full max-w-full">
                <div className="container-narrow mx-auto max-w-4xl px-4 pt-32 pb-2 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Terms of Use</h1>
                </div>

                <section className="pt-8 pb-20 px-4 sm:px-4 md:px-6 overflow-x-hidden w-full max-w-full">
                    <div className="container-narrow mx-auto max-w-4xl">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:text-primary transition-colors max-w-none">

                                <div className="bg-secondary/20 border border-secondary p-4 sm:p-6 rounded-xl mb-12 flex items-start gap-3 sm:gap-4">
                                    <Scale className="w-6 h-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-heading text-lg font-bold text-primary mb-2">Welcome to Europe Calling</h4>
                                        <p className="text-sm text-muted-foreground m-0">
                                            By accessing or using our website and services, you agree to comply with the following Terms of Use. Please read them carefully.
                                            <br />
                                            <span className="font-medium mt-2 block">Last Updated: {lastUpdated}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* 1. Service Information & Quotations */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <FileCheck className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">1. Service Information & Quotations</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>All the above is just an offer; no reservation has been made. Rates are subject to availability.</li>
                                            <li>This quotation is valid only for 3 days from the sent date. No bookings will be made until confirmed.</li>
                                            <li>If hotels change due to availability or client request, the quotation is subject to change. Rooms are subject to availability at the time of confirmation.</li>
                                            <li>Rates might change due to Major Trade Fairs, New Year, and any Exhibition or Festivals.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Booking & Confirmation */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">2. Booking & Confirmation</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Bookings will be confirmed only upon receipt of payment as per the booking terms.</li>
                                            <li>Booking will be confirmed upon written request only; bookings will be reconfirmed by vouchers or by written reconfirmations.</li>
                                            <li>Early check-in, late check-out, bed type, or adjoining room is subject to availability and extra charges if any.</li>
                                            <li>Advance payment must be settled before 14 days of the arrival date. If not, bookings will be canceled without further notice.</li>
                                            <li>
                                                35% of the total package cost will be treated as a non-refundable confirmation fee, as hotel reservations and vehicle arrangements are secured in advance.
                                            </li>
                                            <li>
                                                In case of cancellation, the remaining 65% of the package amount will be refunded, while 35% will be retained to cover hotel reservation and vehicle arrangement expenses already confirmed.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* 3. Travel Documents */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Layers className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">3. Travel Documents</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Passport must be valid for at least 6 months from the date of departure and must hold 2 blank pages.</li>
                                            <li>Europe Calling does not accept any responsibility if the passenger cannot travel because of any passport or visa issue. Cancellation policy will be applicable as per the booking terms.</li>
                                        </ul>
                                    </div>

                                    {/* 4. Liability Disclaimer */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <AlertCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">4. Liability Disclaimer</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>In case of any cancellation or reschedule of Domestic or International flights during the travel period, travelers are advised to bear the expenses during that time on their own.</li>
                                            <li>Please take extra care of your personal belongings while on the tour. Europe Calling shall not accept any liability or responsibility for any damages, loss, baggage loss, theft, injury, accident, death, breakdown, currency fluctuation, taxes, or irregularity that may occur in carrying out the tour arrangement due to weather conditions, strikes, war, quarantine, and any other cause whatsoever. All such loss or expense must be borne by the passengers.</li>
                                            <li>Europe Calling will not be responsible for the change in travel regulations which may interrupt or cause change in the travel plan at any point post confirmation of services.</li>
                                            <li>Europe Calling will not be responsible for the cancellation of this package due to any changes in the Govt. rules and regulations of respective countries.</li>
                                        </ul>
                                    </div>

                                    {/* 5. Third-Party Services */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Globe className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">5. Third-Party Services</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>As a global tour operator, Europe Calling does not have any control over Airline, Railways, Coach, Shipping companies, or any other facilities provided by third parties.</li>
                                            <li>Any disputes or service failures by third parties are subject to their respective terms and conditions.</li>
                                        </ul>
                                    </div>

                                    {/* 6. Unused Services */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Ban className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">6. Unused Services</h2>
                                        </div>
                                        <p className="text-muted-foreground m-0">
                                            Any services not utilized on time will not be refunded or adjusted.
                                        </p>
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
                                                Questions about our Terms?
                                            </h3>

                                            <p className="text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-1">
                                                Transparency is key to our relationship. If you need any clarification regarding our terms, our legal team is ready to assist you.
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-4 sm:gap-5 justify-center items-stretch max-w-3xl mx-auto w-full">
                                                {/* Email Card */}
                                                {/* Email & Phone Card */}
                                                <div className="group w-full md:flex-1 bg-white p-5 sm:p-6 md:p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-start gap-3 sm:gap-4 text-left relative overflow-hidden">
                                                    <div className="absolute right-0 top-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                                                    <div className="w-12 h-12 sm:w-11 sm:h-11 md:w-10 md:h-10 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                                        <Mail className="w-5 h-5 sm:w-[18px] sm:h-[18px] md:w-4 md:h-4" />
                                                    </div>
                                                    <div className="relative flex-1 min-w-0 overflow-hidden flex flex-col">
                                                        <p className="text-[10px] sm:text-[11px] md:text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5 sm:mb-1 md:mb-0.5">Legal Support</p>
                                                        <a href="mailto:sales@europecalling.co" className="text-primary font-bold text-xs sm:text-sm md:text-base leading-tight hover:text-gold transition-colors whitespace-nowrap mb-1">sales@europecalling.co</a>
                                                        <a href="https://wa.me/994555533744" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-xs sm:text-sm md:text-base leading-tight hover:text-gold transition-colors whitespace-nowrap">+994 55 553 37 44</a>
                                                    </div>
                                                </div>

                                                {/* Address Card */}
                                                <div className="w-full md:flex-1 bg-white p-5 sm:p-6 md:p-5 rounded-xl shadow-sm border border-gray-100 border-l-[4px] border-l-gold flex items-start gap-3 sm:gap-4 text-left">
                                                    <div className="w-12 h-12 sm:w-11 sm:h-11 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                                                        <MapPin className="w-5 h-5 sm:w-[18px] sm:h-[18px] md:w-4 md:h-4" />
                                                    </div>
                                                    <div className="flex-1 min-w-0 overflow-hidden">
                                                        <p className="font-bold text-primary text-sm sm:text-base md:text-base mb-1.5 sm:mb-1 md:mb-0.5 leading-tight">Europe Calling</p>
                                                        <p className="text-gray-600 text-xs sm:text-sm md:text-xs m-0 leading-relaxed mb-1 sm:mb-0.5">Paravath Arcade, Malappuram</p>
                                                        <p className="text-gray-500 text-xs sm:text-xs md:text-[10px] m-0 leading-tight">Kerala 676519</p>
                                                    </div>
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
