import { useEffect } from "react";

export function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target); // Reveal only once
                    }
                });
            },
            {
                threshold: 0.15, // Trigger when 15% of the element is visible
                rootMargin: "0px 0px -50px 0px", // Offset a bit so it triggers before bottom
            }
        );

        const elements = document.querySelectorAll(".reveal-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []); // Run once on mount
}
