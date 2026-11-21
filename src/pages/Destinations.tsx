import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";

const Destinations = () => {
    return (
        <>
            <Header />
            <main className="bg-[#faf4e5] min-h-screen pt-20">
                <PageHeader
                    eyebrow="Explore Europe"
                    title={<>Our <span className="text-gold italic">Destinations</span></>}
                    description="Discover the most popular destinations for your next adventure."
                />

                <div className="pb-12">
                    <DestinationsSection showViewAll={false} showHeader={false} className="py-12" />
                </div>

                <ServicesPreview />

            </main>
            <Footer />
            <WhatsAppButton />
            <StickyEnquireButton />
        </>
    );
};

export default Destinations;
