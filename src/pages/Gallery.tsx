import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { galleryPreviewItems } from "@/data/gallery-preview";

const Gallery = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#faf4e5] pt-20">
        <PageHeader
          eyebrow="Our Gallery"
          title="Crafting Memories For You"
          description="Explore our collection of breathtaking moments, happy clients, and stunning destinations."
        />

        <section className="section-padding relative z-10 bg-[linear-gradient(180deg,#ffffff_0%,#faf4e5_150px,#faf4e5_100%)] pt-8">
          <div className="container-wide px-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
              {galleryPreviewItems.map((image, index) => (
                <RevealOnScroll key={image.id} delay={index * 80} className="w-full max-w-[280px]">
                  <GalleryCard
                    src={image.image_url}
                    alt={image.title}
                    title={image.title}
                    location={image.location}
                    showViewAction
                  />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Gallery;
