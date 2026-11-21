import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { X } from "lucide-react";
import { galleryPreviewItems } from "@/data/gallery-preview";

type DisplayItem = (typeof galleryPreviewItems)[number];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<DisplayItem | null>(null);

  return (
    <>
      <Header />
      <main className="bg-[#faf4e5] min-h-screen pt-20">
        <PageHeader
          eyebrow="Our Gallery"
          title="Crafting Memories For You"
          description="Explore our collection of breathtaking moments, happy clients, and stunning destinations."
        />

        <section className="section-padding pt-8 relative z-10 bg-[linear-gradient(180deg,#ffffff_0%,#faf4e5_150px,#faf4e5_100%)]">
          <div className="container-wide px-4">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryPreviewItems.map((image, index) => (
                <RevealOnScroll key={image.id} delay={index * 80} className="break-inside-avoid">
                  <div
                    className="group relative rounded-2xl overflow-hidden cursor-zoom-in bg-white border border-white/80 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] transition-all duration-300"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.image_url}
                      alt={image.title}
                      className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-6xl w-full max-h-[90vh] relative group"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white rounded-b-lg">
              <h3 className="font-heading text-2xl font-bold mb-1">{selectedImage.title}</h3>
              {selectedImage.location && (
                <p className="text-gold opacity-90">{selectedImage.location}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
