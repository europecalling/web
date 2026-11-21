
import { Skeleton } from "./skeleton";

export const PageSkeleton = () => {
    return (
        <div className="w-full min-h-screen bg-background flex flex-col">
            {/* Header Skeleton */}
            <header className="h-20 border-b border-border/40 px-6 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-50">
                <div className="flex items-center gap-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-6 w-32 hidden sm:block" />
                </div>
                <div className="hidden md:flex gap-8">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-10 w-28 rounded-full" />
            </header>

            <main className="flex-1 flex flex-col">
                {/* Hero Section Skeleton */}
                <section className="relative h-[80vh] w-full bg-muted/20 flex flex-col items-center justify-center gap-6 overflow-hidden">
                    {/* Abstract Geometric Shapes for 'Premium' feel */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10">
                        <Skeleton className="w-full h-full rounded-full blur-3xl scale-150" />
                    </div>

                    <Skeleton className="h-4 w-40 rounded-full uppercase tracking-widest bg-primary/10" />
                    <Skeleton className="h-16 md:h-24 w-3/4 max-w-2xl rounded-lg bg-gradient-to-r from-muted via-muted/50 to-muted" />
                    <Skeleton className="h-16 md:h-24 w-1/2 max-w-lg rounded-lg bg-gradient-to-r from-muted via-muted/50 to-muted delay-75" />

                    <div className="flex gap-4 mt-8">
                        <Skeleton className="h-12 w-40 rounded-full" />
                        <Skeleton className="h-12 w-40 rounded-full bg-transparent border border-muted" />
                    </div>
                </section>

                {/* Content Grid Skeleton */}
                <section className="container-wide py-20 px-6">
                    <div className="flex flex-col items-center mb-16 gap-4">
                        <Skeleton className="h-8 w-64" />
                        <Skeleton className="h-4 w-96 max-w-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col gap-4">
                                <Skeleton className="aspect-[4/5] w-full rounded-2xl shadow-sm" />
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};
