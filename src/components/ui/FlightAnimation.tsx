import { Plane } from "lucide-react";

interface FlightAnimationProps {
    className?: string; // For additional positioning or styling override
}

export function FlightAnimation({ className = "" }: FlightAnimationProps) {
    return (
        <div className={`absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 ${className}`}>
            <div
                className="absolute top-[10%] left-[-10%]"
                style={{
                    animation: 'fly-across 20s linear infinite',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
            >
                <Plane className="w-12 h-12 opacity-10 rotate-45" />
            </div>
            <div
                className="absolute top-[30%] left-[-10%]"
                style={{
                    animation: 'fly-across 25s linear infinite',
                    animationDelay: '10s',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
            >
                <Plane className="w-8 h-8 opacity-10 rotate-45 text-gold" />
            </div>
        </div>
    );
}
