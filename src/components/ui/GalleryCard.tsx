import { useState } from "react";
import { cn } from "@/lib/utils";
import photoTemplate from "@/assets/Photo template.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/**
 * Scrapbook Frame: user image visible through the white "hole" of Photo template.png.
 * Layer 1: photo in inner div (top-[21%] left-[17%] w-[66%] h-[54%], z-0).
 * Layer 2: frame overlay (inset-0 z-10 pointer-events-none) so tape appears to stick the photo to the page.
 */
export interface GalleryCardProps {
  src: string;
  alt?: string;
  title?: string;
  location?: string;
  className?: string;
  aspectRatio?: string;
  showViewAction?: boolean;
}

/**
 * GalleryCard: scrapbook frame effect. Every gallery image must use this component (no raw images).
 */
export function GalleryCard({
  src,
  alt = "",
  title,
  location,
  className,
  showViewAction = true,
}: GalleryCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className={cn("inline-block w-full", className)}>
        {/* Main container: relative aspect-square w-full */}
        <div
          className={cn(
            "group/card relative w-full aspect-square overflow-hidden",
            showViewAction && "cursor-pointer"
          )}
          onClick={showViewAction ? () => setLightboxOpen(true) : undefined}
        >
          {/* Layer 1 (the photo): inner div aligned with frame's "hole", object-cover, z-0 */}
          <div className="absolute z-0 top-[21%] left-[17%] w-[66%] h-[54%] overflow-hidden rounded-sm">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Layer 2 (frame overlay): Photo template.png on top; pointer-events-none so View works */}
          <img
            src={photoTemplate}
            alt=""
            aria-hidden
            className="absolute inset-0 z-10 w-full h-full pointer-events-none select-none object-contain"
          />

          {/* Layer 3: hover overlay with centered "View" button */}
          {showViewAction && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 transition-colors duration-200 opacity-0 group-hover/card:bg-black/30 group-hover/card:opacity-100">
              <Button type="button" variant="secondary" size="sm" className="shadow-lg">
                View
              </Button>
            </div>
          )}
        </div>

        {(title || location) && (
          <div className="mt-3 px-2 text-center">
            {title && (
              <p className="font-medium text-sm text-gray-800">{title}</p>
            )}
            {location && (
              <p className="mt-0.5 text-xs text-gray-500">{location}</p>
            )}
          </div>
        )}
      </div>

      {/* Lightbox modal: full-sized image */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent
          className="max-w-[95vw] max-h-[90vh] w-auto p-2 sm:p-4 border-none bg-black/90"
          aria-describedby="gallery-lightbox-desc"
        >
          <DialogTitle className="sr-only">
            {title ? `${title} – full size` : "Image full size"}
          </DialogTitle>
          <DialogDescription id="gallery-lightbox-desc" className="sr-only">
            Viewing full resolution image. Close with the button or click outside.
          </DialogDescription>
          <div className="flex min-h-[50vh] items-center justify-center">
            <img
              src={src}
              alt={alt ? `${alt} (full size)` : "Full size"}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
