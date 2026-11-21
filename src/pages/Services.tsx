import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import {
  Briefcase,
  Home,
  Plane,
} from "lucide-react";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PackagesSection } from "@/components/home/PackagesSection";

const additionalServices = [
  {
    icon: Home,
    title: "Accommodation",
    description: "From temporary stays to long-term housing, we find your perfect home.",
  },
  {
    icon: Plane,
    title: "Travel Logistics",
    description: "Flight bookings and transfers handled with precision.",
  },
  {
    icon: Briefcase,
    title: "Career Placement",
    description: "Connect with top employers through our European partner network.",
  },
];

const Services = () => {

  return (
    <>
      <Header />
      <main className="bg-[#faf4e5] min-h-screen pt-20">

        <PageHeader
          eyebrow="Our Expertise"
          title={<>Premium Relocation <br /><span className="text-gold italic">Packages</span></>}
          description="Choose the level of support that suits your journey. From essential guidance to a fully managed VIP experience."
        />

        <PackagesSection />


        <DestinationsSection showViewAll={false} />


        <section className="py-24 bg-[linear-gradient(180deg,#faf4e5_0%,#f8fafc_150px,#f8fafc_100%)] relative overflow-hidden">
          <div className="container-wide px-4 relative z-10">
            <RevealOnScroll animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-['Dancing_Script'] text-3xl sm:text-4xl text-[#FF6B00] block mb-2">Complete Support</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[black] mb-4">Additional Services</h2>
                <p className="text-muted-foreground">Beyond the package, we offer specific services to smooth your transition.</p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <RevealOnScroll className="h-full" delay={index * 100} key={index}>
                  <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

      </main >
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

// Re-export icon for the new layout use
export default Services;
