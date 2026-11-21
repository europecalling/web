import React from 'react';
import './MaskedHeroTitle.css';

interface MaskedHeroTitleProps {
    mainText?: string; // Default: EXPLORE
    imageSrc?: string;
}

export const MaskedHeroTitle: React.FC<MaskedHeroTitleProps> = ({
    mainText = "EXPLORE",
    imageSrc = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2973&auto=format&fit=crop" // Eiffel Tower landscape (Reliable)
}) => {

    // Hardcoded logic for "EXPLORE" to mask the 'O' as requested. 
    // For a purely generic component, we'd iterate chars, but for this specific design requirement ("O in EXPLORE"), manual splitting is safer for layout.

    return (
        <div className="masked-title-container">
            <h1 className="masked-hero-title" aria-label={mainText}>
                <span className="text-white opacity-40 mix-blend-overlay">EXPL</span>
                <span
                    className="mask-letter opacity-100"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                >
                    O
                </span>
                <span className="text-white opacity-40 mix-blend-overlay">RE</span>
            </h1>
        </div>
    );
};
