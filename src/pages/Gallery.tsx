import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PhotoFrame } from "@/components/admin/PhotoFrame";
import { X, Loader2 } from "lucide-react";
import { getGalleryItems, type GalleryItem } from "@/lib/gallery-api";

const categories = [
  { id: "all", label: "All Photos" },
  { id: "clients", label: "Happy Clients" },
  { id: "tours", label: "On Tour" },
  { id: "scenic", label: "Scenery" },
];

const aspectRatios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-[16/9]", "aspect-[1/1]"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const { data: items = [], isLoading, error } = useQuery({
    queryKey: ["gallery"],
    queryFn: getGalleryItems,
  });

  const filtered = categoryFilter === "all"
    ? items
    : items.filter((i) => i.category === categoryFilter);

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
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      categoryFilter === cat.id
                        ? "bg-black text-white"
                        : "bg-white/80 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}

            {isLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
              </div>
            ) : error ? (
              <div className="text-center py-20 text-muted-foreground">
                Unable to load gallery. Please try again later.
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                No images in this category yet.
              </div>
            ) : (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filtered.map((image, index) => (
                  <RevealOnScroll key={image.id} delay={index * 100} className="break-inside-avoid">
                    <PhotoFrame
                      src={image.image_url}
                      alt={image.title}
                      title={image.title}
                      location={image.location || undefined}
                      aspect={aspectRatios[index % aspectRatios.length]}
                      onClick={() => setSelectedImage(image)}
                    />
                  </RevealOnScroll>
                ))}
              </div>
            )}
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
