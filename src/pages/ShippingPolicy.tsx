
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { Truck, FileText, Clock, AlertCircle, Mail, MapPin, HelpCircle } from "lucide-react";

export default function ShippingPolicy() {
    const lastUpdated = "December 19, 2025";

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden w-full max-w-full">
            <Header />

            <main className="bg-[#faf4e5] flex-grow overflow-x-hidden w-full max-w-full">
                <PageHeader
                    eyebrow="Legal"
                    title="Shipping Policy"
                    description="Information regarding the delivery of your travel documents and vouchers."
                />

                <section className="py-20 px-4 sm:px-4 md:px-6 overflow-x-hidden w-full max-w-full">
                    <div className="container-narrow mx-auto max-w-4xl">
                        <RevealOnScroll animation="fade-up">
                            <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-gold prose-a:no-underline hover:prose-a:text-primary transition-colors max-w-none">

                                <div className="bg-secondary/20 border border-secondary p-6 rounded-xl mb-12 flex items-start gap-4">
                                    <Truck className="w-6 h-6 text-primary mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-heading text-lg font-bold text-primary mb-2">Documents & Vouchers</h4>
                                        <p className="text-sm text-muted-foreground m-0">
                                            This policy outlines how your essential travel documents are delivered.
                                            <br />
                                            <span className="font-medium mt-2 block">Last Updated: {lastUpdated}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* 1. Document Delivery */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">1. Document Delivery</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>All travel documents, vouchers, itineraries, and confirmations are delivered electronically via email or WhatsApp.</li>
                                            <li>Physical document shipping is not applicable unless explicitly agreed upon.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Delivery Timelines */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">2. Delivery Timelines</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Documents are shared only after payment confirmation.</li>
                                            <li>Delivery timelines may vary depending on service type and destination.</li>
                                        </ul>
                                    </div>

                                    {/* 3. Responsibility */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <AlertCircle className="w-5 h-5" />
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold m-0 text-primary">3. Responsibility</h2>
                                        </div>
                                        <ul className="list-disc pl-6 space-y-2 mt-4 text-muted-foreground">
                                            <li>Europe Calling is not responsible for delays caused by incorrect contact details provided by the client.</li>
                                            <li>Clients must ensure their email and phone number are accurate.</li>
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
                                                Questions about our Shipping Policy?
                                            </h3>

                                            <p className="text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-1">
                                                If you have questions regarding the delivery of your documents, our operations team is here to help.
                                            </p>

                                            <div className="flex flex-col md:flex-row gap-4 sm:gap-5 justify-center items-stretch max-w-3xl mx-auto w-full">
                                                {/* Email Card */}
                                                <a href="mailto:operations@europecalling.co" className="group w-full md:flex-1 bg-white p-5 sm:p-6 md:p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-start gap-3 sm:gap-4 text-left relative overflow-hidden">
                                                    <div className="absolute right-0 top-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                                                    <div className="w-12 h-12 sm:w-11 sm:h-11 md:w-10 md:h-10 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                                                        <Mail className="w-5 h-5 sm:w-[18px] sm:h-[18px] md:w-4 md:h-4" />
                                                    </div>
                                                    <div className="relative flex-1 min-w-0 overflow-hidden">
                                                        <p className="text-[10px] sm:text-[11px] md:text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5 sm:mb-1 md:mb-0.5">Operations Support</p>
                                                        <p className="text-primary font-bold text-sm sm:text-base md:text-base leading-tight sm:leading-snug md:leading-none group-hover:text-gold transition-colors break-all sm:break-words md:break-normal" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>operations@europecalling.co</p>
                                                    </div>
                                                </a>

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
