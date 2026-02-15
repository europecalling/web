import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { Link } from "react-router-dom";
import { Calendar, Tag, ChevronRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { news } from "@/data/news";

const NewsCard = ({ article, index }: { article: typeof news[0], index: number }) => (
  <RevealOnScroll className="h-full" delay={index * 100}>
    <Link
      to={`/newsroom/${article.slug}`}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-elevated transition-all duration-500 flex flex-col h-full text-left"
    >
      {/* Card Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-md text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 tracking-wide uppercase">
            <Tag className="w-3 h-3 text-gold" />
            {article.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground/80 mb-4">
          <Calendar className="w-3.5 h-3.5" />
          {article.date}
        </div>

        <h3 className="font-heading text-2xl font-bold text-primary mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-base leading-relaxed line-clamp-3 mb-6 flex-grow">
          {article.excerpt}
        </p>

        <div
          className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:text-gold transition-colors mt-auto uppercase tracking-wider"
        >
          Read Article
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  </RevealOnScroll>
);

const Newsroom = () => {

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#faf4e5] pt-20">
        <PageHeader
          eyebrow="Insights & Updates"
          title="Newsroom"
          description="Stay up to date with the latest immigration policies, success stories, and company announcements."
        />

        <section className="container-wide px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {news.map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </section>

        {/* Explore Destinations - includes Belgium & Netherlands */}
        <div className="border-t border-primary/5 pt-16 md:pt-24">
          <DestinationsSection showViewAll={false} showHeader={true} className="py-12" />
        </div>

        {/* Contact Section - Email/Phone + Two Office Locations */}
        <section className="border-t border-primary/5 py-16 md:py-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
          <div className="container-wide px-4 sm:px-6 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-primary mb-6 text-center">Get In Touch</h3>
            <div className="space-y-4 sm:space-y-5">
              {/* Row 1: Email & Phone */}
              <div className="group w-full bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                  <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider w-full mb-0.5">Contact</p>
                  <a href="mailto:sales@europecalling.co" className="text-primary font-bold text-sm hover:text-gold transition-colors">sales@europecalling.co</a>
                  <a href="https://wa.me/994555533744" target="_blank" rel="noopener noreferrer" className="text-primary font-bold text-sm hover:text-gold transition-colors">+994 55 553 37 44</a>
                </div>
              </div>

              {/* Row 2: Two Office Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <a href="https://www.google.com/maps/search/?api=1&query=Bashir+safar-oghlu,+Baku,+Azerbaijan" target="_blank" rel="noopener noreferrer" className="w-full bg-white p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 hover:border-gold/30 transition-all duration-300 flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-gold flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-primary text-sm mb-1 leading-tight">Baku Office</p>
                    <p className="text-gray-600 text-xs sm:text-sm m-0 leading-relaxed">Bashir safar-oghlu, Baku, Azerbaijan</p>
                  </div>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519" target="_blank" rel="noopener noreferrer" className="w-full bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 border-l-[4px] border-l-gold hover:border-gold/50 transition-all duration-300 flex items-start gap-3 sm:gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-primary text-sm mb-1 leading-tight">India Office</p>
                    <p className="text-gray-600 text-xs sm:text-sm m-0 leading-relaxed">2nd Floor, Paravath Arcade, Malappuram, Kerala 676519</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default Newsroom;
