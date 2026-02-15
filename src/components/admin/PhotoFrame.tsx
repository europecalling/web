import { cn } from "@/lib/utils";

import photoTemplate from "@/assets/Photo template.png";

interface PhotoFrameProps {
  src: string;
  alt?: string;
  title?: string;
  location?: string;
  className?: string;
  onClick?: () => void;
  aspect?: string;
}

export function PhotoFrame({
  src,
  alt = "",
  title,
  location,
  className,
  onClick,
}: PhotoFrameProps) {
  return (
    <div
      className={cn(
        "relative inline-block w-full",
        "transition-transform duration-300 hover:scale-[1.02]",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Template frame: full Polaroid-style background with tape and shadow */}
      <div
        className="relative w-full bg-[#f5f0e1]"
        style={{ aspectRatio: "1" }}
      >
        {/* Template layer - frame, tape, shadow (from Photo template.png) */}
        <img
          src={photoTemplate}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
        />
        {/* Uploaded image: replaces the placeholder landscape in the template's inner window */}
        <div
          className="absolute overflow-hidden rounded-sm"
          style={{
            top: "11%",
            left: "8%",
            right: "8%",
            bottom: "22%",
          }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover block"
            loading="lazy"
          />
        </div>
      </div>
      {(title || location) && (
        <div className="mt-3 px-2 text-center">
          {title && <p className="font-medium text-sm text-gray-800">{title}</p>}
          {location && <p className="text-xs text-gray-500 mt-0.5">{location}</p>}
        </div>
      )}
    </div>
  );
}
