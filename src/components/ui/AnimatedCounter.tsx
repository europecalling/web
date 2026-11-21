import { useEffect, useState } from "react";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    isVisible: boolean;
}

export function AnimatedCounter({ value, duration = 2000, suffix = "", isVisible }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0); // Reset or keep 0 when not visible? Usually we want to animate from 0 when it becomes visible.
            return;
        }

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressPercentage = Math.min(progress / duration, 1);

            // Ease out quart
            const easeOutQuart = 1 - Math.pow(1 - progressPercentage, 4);

            setCount(Math.floor(easeOutQuart * value));

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [value, duration, isVisible]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}
