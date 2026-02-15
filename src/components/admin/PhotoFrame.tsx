import { cn } from "@/lib/utils";

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
  aspect = "aspect-[4/3]",
}: PhotoFrameProps) {
  return (
    <div
      className={cn(
        "relative inline-block p-4 pb-8 pt-6 bg-[#f5f0e1] rounded-sm",
        "shadow-[0_4px_12px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0_8px_20px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.1)]",
        "transition-shadow duration-300",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Tape strip - Polaroid style */}
      <div
        className="absolute top-2 right-4 w-16 h-6 -rotate-12 bg-[#e8e4d9] opacity-90 shadow-sm"
        style={{
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      />
      {/* White photo border / frame */}
      <div
        className={cn(
          "relative overflow-hidden bg-white p-2 shadow-inner",
          "border border-white"
        )}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-auto object-cover block",
            aspect
          )}
          loading="lazy"
        />
      </div>
      {(title || location) && (
        <div className="mt-2 px-1 text-center">
          {title && <p className="font-medium text-sm text-gray-800">{title}</p>}
          {location && <p className="text-xs text-gray-500">{location}</p>}
        </div>
      )}
    </div>
  );
}
