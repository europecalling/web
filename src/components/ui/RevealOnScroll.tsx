import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    delay?: number; // in ms
    animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "scale-up";
}

export function RevealOnScroll({
    children,
    className,
    threshold = 0.1,
    delay = 0,
    animation = "fade-up"
}: RevealOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return "translate-y-10 opacity-0";
            case "fade-in":
                return "opacity-0";
            case "slide-in-right":
                return "translate-x-10 opacity-0";
            case "slide-in-left":
                return "-translate-x-10 opacity-0";
            case "scale-up":
                return "scale-95 opacity-0";
            default:
                return "opacity-0";
        }
    };

    const getVisibleClass = () => {
        switch (animation) {
            case "fade-up":
                return "translate-y-0 opacity-100";
            case "fade-in":
                return "opacity-100";
            case "slide-in-right":
                return "translate-x-0 opacity-100";
            case "slide-in-left":
                return "translate-x-0 opacity-100";
            case "scale-up":
                return "scale-100 opacity-100";
            default:
                return "opacity-100";
        }
    };

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                "transition-all duration-1000 ease-out",
                isVisible ? getVisibleClass() : getAnimationClass(),
                className
            )}
        >
            {children}
        </div>
    );
}
