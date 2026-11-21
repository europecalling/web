import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { news } from "@/data/news";
import { Calendar, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useEffect } from "react";
import NotFound from "./NotFound";

const NewsArticle = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const article = news.find((n) => n.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return <NotFound />;
    }

    // Related articles (just pick 3 random ones that aren't the current one)
    const relatedNews = news.filter(n => n.id !== article.id).slice(0, 3);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#faf4e5]">

                {/* --- Hero Section --- */}
                <section className="relative h-[75vh] md:h-[85vh] min-h-[500px] w-full">
                    <div className="absolute inset-0">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                    </div>

                    <div className="relative z-10 container-wide px-4 h-full flex flex-col justify-end pb-16 md:pb-24">
                        <RevealOnScroll animation="fade-up" className="max-w-4xl mx-auto w-full">

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <button
                                    onClick={() => navigate('/newsroom')}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-gold hover:border-gold transition-all duration-300 group shadow-lg cursor-pointer mr-2"
                                    aria-label="Back to Newsroom"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <span className="bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {article.category}
                                </span>
                                <span className="flex items-center gap-2 text-white/80 text-sm font-medium">
                                    <Calendar className="w-4 h-4 text-gold" />
                                    {article.date}
                                </span>
                            </div>

                            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                {article.title}
                            </h1>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* --- Content Section --- */}
                <section className="container-narrow px-4 py-16 md:py-24">
                    <RevealOnScroll animation="fade-up" delay={200}>
                        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">

                            {/* Main Article */}
                            <article className="prose prose-lg prose-gray max-w-none">
                                <div className="font-medium text-xl text-muted-foreground mb-10 leading-relaxed border-l-4 border-gold pl-6">
                                    {article.excerpt}
                                </div>

                                <div dangerouslySetInnerHTML={{ __html: article.content || "" }} className="rich-text-content" />

                                {/* Share Links */}
                                <div className="border-t border-border mt-12 pt-8 flex items-center justify-between">
                                    <span className="font-heading font-bold text-lg">Share this article:</span>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                                            className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-[#FF7700] hover:text-white transition-all duration-300 group"
                                            aria-label="Share on Facebook"
                                        >
                                            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                            className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-[#FF7700] hover:text-white transition-all duration-300 group"
                                            aria-label="Share on Twitter"
                                        >
                                            <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                            className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-[#FF7700] hover:text-white transition-all duration-300 group"
                                            aria-label="Share on LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </button>
                                        <button
                                            onClick={async () => {
                                                if (navigator.share) {
                                                    try {
                                                        await navigator.share({
                                                            title: article.title,
                                                            text: article.excerpt,
                                                            url: window.location.href,
                                                        });
                                                    } catch (err) {
                                                        console.error("Share failed:", err);
                                                    }
                                                } else {
                                                    await navigator.clipboard.writeText(window.location.href);
                                                    toast.success("Link copied to clipboard!");
                                                }
                                            }}
                                            className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-[#FF7700] hover:text-white transition-all duration-300 group"
                                            aria-label="Copy Link or Share"
                                        >
                                            <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </article>

                            {/* Sidebar / Related News */}
                            <aside className="space-y-10">
                                <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 sticky top-24">
                                    <h3 className="font-heading text-2xl font-bold mb-6 pb-4 border-b border-border">Related News</h3>
                                    <div className="space-y-6">
                                        {relatedNews.map(item => (
                                            <Link key={item.id} to={`/newsroom/${item.slug}`} className="group block">
                                                <div className="flex gap-4">
                                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1 block">{item.category}</span>
                                                        <h4 className="font-heading font-bold text-sm leading-snug group-hover:text-gold transition-colors line-clamp-2">
                                                            {item.title}
                                                        </h4>
                                                        <span className="text-xs text-muted-foreground mt-2 block">{item.date}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>

                        </div>
                    </RevealOnScroll>
                </section>

            </main>
            <Footer />
            <WhatsAppButton />
            <StickyEnquireButton />
        </>
    );
};

export default NewsArticle;
