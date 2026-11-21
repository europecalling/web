import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
    eyebrow: string;
    title: ReactNode;
    description: string;
    className?: string; // Allow custom classes like padding or alignment
}

export const PageHeader = ({ eyebrow, title, description, className }: PageHeaderProps) => {
    return (
        <section className={cn("relative py-20 md:py-32 text-center px-4 overflow-visible", className)}>
            {/* Smooth Gradient Background that blends into page content */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#faf4e5] via-[#faf4e5] to-transparent -z-20" />
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-3xl mx-auto animate-fade-in-up">
                <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
                    {eyebrow}
                </span>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight text-shadow-premium">
                    {title}
                </h1>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
};
