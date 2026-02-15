/**
 * Gallery images from asset folder.
 * Used on the frontend Gallery page.
 */
import img1 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.10 PM (1).jpeg";
import img2 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.58 PM.jpeg";
import img3 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.11 PM (1).jpeg";
import img4 from "@/assets/WhatsApp Image 2025-12-05 at 4.04.00 PM.jpeg";
import img5 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.59 PM.jpeg";
import img6 from "@/assets/WhatsApp Image 2025-12-05 at 4.06.10 PM.jpeg";
import img7 from "@/assets/WhatsApp Image 2025-12-05 at 4.03.57 PM.jpeg";
import img8 from "@/assets/WhatsApp Image 2026-01-20 at 1.55.53 PM.jpeg";
import img9 from "@/assets/WhatsApp Image 2026-01-20 at 1.55.54 PM.jpeg";
import img10 from "@/assets/WhatsApp Image 2026-01-20 at 1.55.55 PM.jpeg";
import img11 from "@/assets/WhatsApp Image 2026-01-20 at 1.56.18 PM.jpeg";
import img12 from "@/assets/WhatsApp Image 2026-01-20 at 1.56.20 PM.jpeg";

export interface GalleryPreviewItem {
  id: number;
  image_url: string;
  title: string;
  location: string;
}

export const galleryPreviewItems: GalleryPreviewItem[] = [
  { id: 1, image_url: img1, title: "Unforgettable Journey", location: "Paris, France" },
  { id: 2, image_url: img2, title: "Client Smiles", location: "Swiss Alps" },
  { id: 3, image_url: img3, title: "Beautiful Scenery", location: "Rome, Italy" },
  { id: 4, image_url: img4, title: "Group Adventure", location: "Amsterdam, Netherlands" },
  { id: 5, image_url: img5, title: "City Exploration", location: "Berlin, Germany" },
  { id: 6, image_url: img6, title: "Hidden Gems", location: "Santorini, Greece" },
  { id: 7, image_url: img7, title: "Travel Memories", location: "Barcelona, Spain" },
  { id: 8, image_url: img8, title: "On Tour", location: "Brussels, Belgium" },
  { id: 9, image_url: img9, title: "Happy Clients", location: "Vienna, Austria" },
  { id: 10, image_url: img10, title: "Destination Highlights", location: "Prague, Czech Republic" },
  { id: 11, image_url: img11, title: "European Charm", location: "Budapest, Hungary" },
  { id: 12, image_url: img12, title: "Crafting Memories", location: "Lisbon, Portugal" },
];
