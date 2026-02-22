import { useState, useEffect, useRef } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { ArrowRight, Target, Eye, Heart, Quote, Instagram, Facebook, Volume2, VolumeX, Maximize, Play, Pause, User } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CTASection } from "@/components/home/CTASection";

import teamAyshaNasrin from "@/assets/team/aysha nasrin.jpeg";
import teamNavaf from "@/assets/team/navaf.jpeg";
import teamAyshaThaslee from "@/assets/team/Aysha Thaslee.jpeg";
import teamNajiya from "@/assets/team/Najiya.jpeg";
import teamSha from "@/assets/team/sha.jpeg";
import teamNihala from "@/assets/team/nihala.jpeg";
import teamAkhila from "@/assets/team/akhila.jpeg";
import teamShammas from "@/assets/team/Shammas.jpeg";
import teamJelsa from "@/assets/team/jelsa.jpeg";
import founderImage from "@/assets/NJD.jpg";
import officeImage from "@/assets/office.jpeg";
import { ChevronRight } from "lucide-react";

const timeline = [
  { year: "2020", title: "Digital First", description: "Launched full digital consultation and online documentation tracking to serve clients safely and remotely." },
  { year: "2021", title: "Growing Reach", description: "Expanded services and support to more travellers across Europe, building on our digital-first approach." },
  { year: "2022", title: "Industry Recognition", description: "Recognized as 'Best Emerging Travel Consultancy' by EuroTravel Board." },
  { year: "2023", title: "Stronger Foundations", description: "Strengthened our team and expanded destination expertise to deliver even more personalised European travel experiences." },
  { year: "2024", title: "Global Reach", description: "Now serving clients from 15+ countries with a team of 50+ experts—your trusted partner for European journeys." },
  { year: "2025", title: "New Horizons", description: "Continuing to expand our services and destinations while keeping the same commitment to personalised, trusted support." },
  { year: "2026", title: "With You Today", description: "Your trusted partner for European travel and migration—here to guide your journey every step of the way." },
];

const administrative = [
  { name: "Najath Sharafudeen", role: "CEO & Founder", img: founderImage },
  { name: "Jelsa M Reslin", role: "COO", img: teamJelsa },
];

const team = [
  { name: "Nihala Sherin K", role: "Manager", location: "Dubai", img: teamNihala },
  { name: "Aysha Nasrin P", role: "Assistant Manager", location: "Mumbai", img: teamAyshaNasrin },
  { name: "Muhammed Navaf P", role: "Senior Travel Consultant", location: "Dubai", img: teamNavaf },
  { name: "Aysha Thaslee E.C", role: "Travel Consultant", location: "Berlin", img: teamAyshaThaslee },
  { name: "Najiya binu", role: "Travel Consultant", location: "Paris", img: teamNajiya },
  { name: "Muhammed Sha AP", role: "Travel Consultant", location: "Calicut, India", img: teamSha },
  { name: "Akhila", role: "Accounts", location: "London", img: teamAkhila },
  { name: "Shammas K T", role: "Digital Marketing / Media", location: "Berlin", img: teamShammas },
];

const values = [
  { icon: Target, title: "Mission", text: "Our mission is to thoughtfully curate exceptional destinations and refined experiences that bring genuine happiness to our clients. Every journey we design reflects attention to detail, seamless planning, and a commitment to delivering understated luxury and lasting value." },
  { icon: Eye, title: "Vision", text: "Our vision is to become a distinguished travel brand known for elegance, trust, and excellence. By aligning every decision with our core purpose, maintaining absolute clarity in our processes, and upholding the highest standards, we aim to set a benchmark in premium travel experiences." },
  { icon: Heart, title: "Philosophy", text: "We believe true luxury lies in authenticity, precision, and care. Our philosophy is rooted in quality over quantity, honesty over promises, and experiences over extravagance. We showcase only what we truly trust, plan with intention, and deliver journeys that feel personal, effortless, and tim" },
];

function AnimatedCounter({ value, suffix, duration, isVisible, className }: { value: number; suffix: string; duration: number; isVisible: boolean; className?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);

  return <span className={`block ${className}`}>{count.toLocaleString()}{suffix}</span>;
}

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const sendVideoCommand = (command: string, args: any[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: command,
        args: args
      }), '*');
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendVideoCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendVideoCommand('playVideo');
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      sendVideoCommand('unMute');
      setIsMuted(false);
    } else {
      sendVideoCommand('mute');
      setIsMuted(true);
    }
  };

  const toggleFullScreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#faf4e5] overflow-hidden pt-20">


        {/* Founder's Note Section - Redesigned to match Premium Reference */}
        <section className="py-16 lg:py-28 relative overflow-hidden bg-[#faf4e5]">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-orange-50/50 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

          <div className="container px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Text Content - Right Aligned (Swapped) */}
              <div className="order-2 lg:order-2 text-left lg:pl-10">
                <RevealOnScroll animation="slide-in-left">
                  <div className="space-y-4">

                    {/* Badge / Label */}
                    <div className="flex items-center gap-4 mb-2">
                      <span className="h-[2px] w-8 bg-orange-500"></span>
                      <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-orange-500 uppercase">
                        Welcome to Europe Calling
                      </span>
                    </div>

                    {/* Leading Text */}
                    <div className="space-y-0">
                      <h2 className="font-heading text-4xl lg:text-6xl font-bold text-orange-500 leading-tight">
                        Najath Sharafudeen
                      </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="font-serif italic text-lg md:text-xl text-gray-500 font-light">
                      Founder of Europe Calling.
                    </p>

                    {/* Quote Block */}
                    <div className="relative mt-6 md:mt-8 group max-w-lg">
                      {/* Background Quote Icon */}
                      <Quote className="absolute -top-4 -left-4 w-16 h-16 text-orange-100/50 -z-10 rotate-180" />

                      <div className="pl-6 border-l-[3px] border-orange-400 py-1">
                        <p className="font-serif text-base md:text-lg text-gray-600 leading-relaxed italic">
                          "From an early age, I believed in one simple idea: “Do what makes you happy.”
                          My journey took me through sales in Dubai, solo travel across Georgia, studies in the UK, and entrepreneurship shaped by real world experiences. Living among travelers, hosting strangers who became friends, and exploring cultures deeply helped me understand that travel is not just movement, it’s a connection.

                          Europe Calling was born from lived experiences, personal struggles, and a genuine love for hosting people. Every journey we create is guided by trust, authenticity, and the belief that happiness grows when shared."
                        </p>
                      </div>
                    </div>

                    {/* Socials Connection */}
                    <div className="pt-6 mt-2">
                      <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase block mb-3">
                        CONNECT WITH ME
                      </span>
                      <div className="flex gap-4">
                        {[
                          { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/naj.ath?igsh=MTd0cWJzNzQwcjJtdg==" },
                          { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1D3oGMZS5V/" }
                        ].map(({ Icon, label, href }, i) => (
                          <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF7700] text-[#faf4e5] hover:bg-black hover:text-[#FF7700] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            aria-label={label}
                          >
                            <Icon className="w-4 h-4" strokeWidth={1.5} />
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </RevealOnScroll>
              </div>

              {/* Image Column - Left Side (Swapped) */}
              <div className="order-1 lg:order-1 relative flex justify-center lg:justify-start">
                <RevealOnScroll animation="scale-up" className="w-full max-w-[500px]">
                  <div className="relative group">
                    {/* Main Card Container */}
                    <div className="relative p-4 md:p-6 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(11,30,63,0.15)] ring-1 ring-gray-100">

                      {/* Inner Image Frame */}
                      <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-50 aspect-[4/5] isolate">
                        {/* Image */}
                        <img
                          src={founderImage}
                          alt="Najath Sharafudeen"
                          className="relative z-10 w-full h-full object-cover object-top transform transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Inner Shadow Overlay */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem] md:rounded-[2.5rem] z-20 pointer-events-none"></div>
                      </div>

                      {/* Floating Badge */}
                      <a
                        href="https://wa.me/994555533744"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-8 right-8 md:-right-6 z-30 group/badge"
                      >
                        <div className="bg-white/95 backdrop-blur-sm py-3 px-6 rounded-full shadow-xl border border-white/50 flex items-center gap-3 animate-float transition-all duration-300 group-hover/badge:scale-105 group-hover/badge:shadow-2xl">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7700] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7700]"></span>
                          </span>
                          <span className="text-xs font-bold text-primary tracking-wide group-hover/badge:text-[#FF7700] transition-colors">
                            Open for Consultation
                          </span>
                        </div>
                      </a>

                    </div>

                    {/* Geometric Decoration */}
                    <div className="absolute -top-6 -right-6 md:-right-12 -z-10 opacity-60">
                      <div className="w-24 h-24 rounded-full border-[1.5px] border-orange-200"></div>
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-orange-50"></div>
                    </div>
                    <div className="absolute bottom-10 -left-6 md:-left-12 -z-10">
                      <div className="w-20 h-20 bg-blue-50/80 rounded-full blur-2xl"></div>
                    </div>

                  </div>
                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section>



        {/* Our Origins Section - Redesigned */}
        <section className="py-8 lg:py-24 relative bg-[#faf4e5] overflow-hidden">
          <div className="container px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-24 items-center">

              {/* Mobile Title (Order 1) */}
              <div className="col-span-1 lg:hidden order-1 mb-2 text-left">
                <RevealOnScroll animation="fade-up">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full border-[3px] border-[#FF7700]"></div>
                    <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#FF7700] uppercase">
                      WHO WE ARE
                    </span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-medium text-primary leading-[1.2]">
                    Why Europe Calling <br />
                    <span className="font-serif italic text-primary">Was Created</span>
                  </h2>
                </RevealOnScroll>
              </div>

              {/* Left: Visuals (Swapped to Right on Desktop, Middle on Mobile) */}
              <div className="relative order-2 lg:order-2 h-auto lg:min-h-[500px] flex items-center justify-center">
                <RevealOnScroll animation="slide-in-right" className="w-full relative h-full flex items-center justify-center">

                  {/* Decorative Background Blur */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF6B00]/10 rounded-full blur-[60px] -z-10" />

                  {/* Main Person Image */}
                  <div className="relative w-[85%] max-w-[500px] aspect-[4/5] z-10 mx-auto">
                    <div className="absolute inset-0 bg-primary rounded-[2.5rem] rotate-3 opacity-5"></div>
                    <img
                      src={officeImage}
                      alt="Modern Office Space"
                      className="w-full h-full object-cover rounded-[2.5rem] shadow-[0_20px_50px_rgba(11,30,63,0.15)] relative z-10"
                    />

                    {/* Floating 'Watch Video' Pill (Top Left) */}
                    <a
                      href="https://www.instagram.com/reel/DSuWesgldpy/?igsh=Y3dpaDZ5bDdqczV6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-10 -left-6 md:-left-12 bg-[#faf4e5] py-3 px-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3 animate-bounce-slow z-20 border border-gray-50/50 hover:bg-white hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,119,0,0.2)] transition-all duration-300 group/pill"
                    >
                      <div className="w-10 h-10 bg-[#FF7700] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#FF7700]/30 group-hover/pill:bg-black transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-primary group-hover/pill:text-[#FF7700] transition-colors">Watch Video</span>
                    </a>

                    {/* Floating Quote Card (Bottom Left) */}
                    <div className="absolute bottom-10 -left-6 md:-left-16 bg-white p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] max-w-[280px] z-20 border border-gray-50 hidden sm:block">
                      <div className="flex items-center gap-3 mb-4">
                        <img src={founderImage} alt="Najath Sharafudeen" className="w-12 h-12 rounded-full object-cover border-2 border-gold/20" />
                        <div>
                          <h4 className="text-sm font-extrabold text-primary">Najath Sharafudeen</h4>
                          <p className="text-[10px] text-gold font-bold uppercase tracking-wider">FOUNDER</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 italic leading-relaxed font-medium">
                      "Europe Calling was built through years of travel, culture, and real hosting experiences across Europe. Guided by one simple belief “WHATS MAKE YOU HAPPY”                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Right: Content (Swapped to Left on Desktop, Last on Mobile) */}
              <div className="order-3 lg:order-1 relative z-10">
                <RevealOnScroll animation="fade-up">
                  <div className="mb-8 text-center md:text-left">
                    {/* Eyebrow */}
                    <div className="hidden lg:flex items-center gap-3 mb-6">
                      <div className="w-2.5 h-2.5 rounded-full border-[3px] border-[#FF7700]"></div>
                      <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#FF7700] uppercase">
                        WHO WE ARE
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="hidden lg:block font-heading text-5xl font-medium text-primary leading-[1.2] mb-8">
                      Why Europe Calling <br />
                      <span className="font-serif italic text-primary">Was Created</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-500 leading-[1.8] mb-8 lg:mb-12 font-light max-w-lg mx-auto md:mx-0">
                      It began with a realization. In 2020, the European dream was alive for millions, yet the path to achieving it was obscured by a fog of fragmented information, changing regulations, and impersonal bureaucracy. Europe Calling was born to bridge this gap.
                    </p>

                    <div className="w-full h-px bg-gray-100 mb-8 lg:mb-12"></div>

                    {/* Stats Row */}
                    <div ref={statsRef} className="flex flex-row items-center justify-center md:justify-start gap-8 md:gap-12">
                      <div className="space-y-1 md:space-y-2 text-center md:text-left">
                        <AnimatedCounter
                          value={10}
                          suffix="K+"
                          duration={1500}
                          isVisible={statsVisible}
                          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight"
                        />
                        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider md:tracking-[0.2em]">Happy Travelers</p>
                      </div>
                    </div>

                  </div>

                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-10 md:py-32 relative overflow-hidden bg-[#faf4e5]"
          style={{
            backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px)',
            backgroundSize: '100% 40px',
            backgroundAttachment: 'local'
          }}
        >
          {/* Dashed Connecting Lines (Decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,300 Q600,100 1000,300" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 8" />
          </svg>

          <div className="container-wide relative z-10">
            <RevealOnScroll animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="font-['Dancing_Script'] text-3xl sm:text-4xl text-[#FF6B00] block mb-2">
                  Our Values
                </span>
                <h2 className="font-heading text-[48px] font-bold text-[black] mb-6">Driven by Purpose</h2>
                <p className="text-gray-600 text-lg leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm inline-block">
                  The principles that guide every decision we make.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              {[
                { ...values[0], color: { bg: "bg-black border border-[#FF7700]/30", pin: "bg-[#FF7700]" } },
                { ...values[1], color: { bg: "bg-black border border-[#FF7700]/30", pin: "bg-[#FF7700]" } },
                { ...values[2], color: { bg: "bg-black border border-[#FF7700]/30", pin: "bg-[#FF7700]" } }
              ].map((item, index) => (
                <RevealOnScroll animation="fade-up" delay={index * 100} key={item.title}>
                  <div
                    className={`group relative p-8 rounded-xl ${item.color.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}
                    style={{
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    }}
                  >
                    {/* Pin Element */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <div className={`w-4 h-4 rounded-full ${item.color.pin} shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2)]`} />
                      <div className="absolute top-3 left-1 w-4 h-4 bg-black/20 blur-[2px] rounded-full transform scale-x-150 rotate-45 -z-10" />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#FF7700] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl font-bold mb-4 text-[#FF7700] leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[#faf4e5] leading-relaxed font-medium opacity-90">
                        {item.text}
                      </p>

                      {/* Hover Arrow */}
                      <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>



        {/* Timeline */}
        <section className="py-20 bg-[linear-gradient(180deg,#faf4e5_0%,hsl(var(--secondary)/0.2)_150px)]">
          <div className="container px-4 sm:px-6">
            <RevealOnScroll animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="font-heading text-[48px] font-bold text-foreground">A Decade of Impact</h2>
              </div>
            </RevealOnScroll>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/10 via-gold/50 to-primary/10 -translate-x-1/2" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <RevealOnScroll animation="fade-up" delay={index * 100} key={item.year}>
                    <div className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-gold shadow-lg z-10" />
                      <div className={`flex-1 w-full pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                        <span className="text-gold font-bold text-xl md:hidden block mb-2 tracking-tight">{item.year}</span>
                        <span className="text-gold font-bold text-5xl opacity-40 absolute -top-4 md:-top-6 z-0 select-none transform transition-transform hover:scale-110 duration-500 origin-center md:origin-[inherit] hidden md:block" style={{ [index % 2 === 0 ? 'right' : 'left']: '20px' }}>{item.year}</span>
                        <div className="relative z-10 bg-white p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                          <h3 className="font-heading text-xl font-bold text-primary mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Podcast Section - Video Redesign */}
        <section className="relative py-24 overflow-hidden bg-[#faf4e5]">
          {/* Cinematic Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1478737270239-2f52b27fa345?auto=format&fit=crop&q=80&w=2000"
              alt="Podcast Studio"
              className="w-full h-full object-cover opacity-5"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#faf4e5] via-[#faf4e5]/95 to-[#faf4e5]/80" />
          </div>

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">



              {/* Left: Brand & Intro - First on Mobile */}
              <div className="lg:col-span-5 space-y-8 order-1 lg:order-1">
                <RevealOnScroll animation="slide-in-left">
                  {/* Desktop Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Live Premiers Weekly
                  </div>

                  <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary leading-tight">
                    Why Europe Calling <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-200 italic">Was Created</span>
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                    Watch unscripted conversations with travel experts, successful expats, and legal minds. Your visual guide to making Europe home.
                  </p>

                  <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                    <a href="https://youtube.com/shorts/g_vqnB18DYM?si=1bPUwWqF1Od104oH" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-muted border border-border text-foreground hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all duration-300 group">
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                    </a>
                    <div className="h-12 px-6 flex items-center rounded-full border border-border text-muted-foreground text-sm italic">
                      Watch on YouTube
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              {/* Right: Premium Video Player UI - Second on Mobile */}
              <div className="lg:col-span-7 order-2 lg:order-2">
                <RevealOnScroll animation="scale-up" delay={200}>
                  <div className="relative bg-card backdrop-blur-xl border border-border rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                    {/* Background Glow */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

                    {/* Video Thumbnail Area */}
                    <div className="relative aspect-video w-full overflow-hidden">
                      {!videoPlaying ? (
                        <>
                          {/* YouTube Thumbnail Image */}
                          <img
                            src="https://img.youtube.com/vi/g_vqnB18DYM/maxresdefault.jpg"
                            alt="Video Episode Thumbnail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://img.youtube.com/vi/g_vqnB18DYM/hqdefault.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#faf4e5]/90 via-transparent to-transparent" />

                          {/* Centered Play Button */}
                          <button
                            onClick={() => setVideoPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                          >
                            <div className="w-20 h-20 rounded-full bg-gold/90 text-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_60px_rgba(255,215,0,0.5)]">
                              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                            {/* Ripple Effect */}
                            <div className="absolute w-20 h-20 rounded-full border-2 border-gold/50 animate-ping" />
                          </button>

                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 rounded bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                              YouTube Exclusive
                            </span>
                          </div>

                          <div className="absolute bottom-4 right-4 z-20">
                            <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md text-white text-xs font-bold font-mono tracking-wider">
                              45:20
                            </span>
                          </div>
                        </>
                      ) : (
                        /* Embedded YouTube Video with Custom Controls */
                        <div ref={containerRef} className="relative w-full h-full group/video">
                          <iframe
                            ref={iframeRef}
                            src={`https://www.youtube.com/embed/g_vqnB18DYM?enablejsapi=1&autoplay=1&controls=0&rel=0&showinfo=0&iv_load_policy=3&origin=${window.location.origin}`}
                            title="The Europe Bound Video Podcast"
                            className="w-full h-full pointer-events-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />

                          {/* Invisible Overlay for Click-to-Pause */}
                          <div
                            className="absolute inset-0 z-10 cursor-pointer"
                            onClick={togglePlay}
                          />

                          {/* Custom Controls Bar */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white hover:text-gold transition-colors">
                                {isPlaying ? <Pause className="w-6 h-6" fill="currentColor" /> : <Play className="w-6 h-6" fill="currentColor" />}
                              </button>

                              <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="text-white hover:text-gold transition-colors">
                                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                              </button>
                            </div>

                            <button onClick={(e) => { e.stopPropagation(); toggleFullScreen(); }} className="text-white hover:text-gold transition-colors">
                              <Maximize className="w-6 h-6" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Video Details & Controls */}
                    <div className="p-6 md:p-8 relative z-10 -mt-2">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Episode 24 • Season 2</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 leading-tight group-hover:text-gold transition-colors">Where to Eat in Azerbaijan | Best Food Spots in Baku, shahabag and gabala!!!</h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <div className="w-6 h-6 rounded-full overflow-hidden bg-muted border border-border">
                              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="Host" className="w-full h-full object-cover" />
                            </div>
                            <p>Hosted by Alexander Schmidt</p>
                          </div>
                        </div>
                        <button className="text-muted-foreground hover:text-red-500 transition-colors">
                          <Heart className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Video Progress Bar */}
                      <div className="group/scrubber py-2 cursor-pointer">
                        <div className="h-1 bg-muted rounded-full w-full overflow-hidden relative">
                          <div className="h-full bg-red-600 w-1/3 rounded-full relative" />
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs text-muted-foreground font-mono mt-1">
                        <span>Watched 15m</span>
                        <span>45m left</span>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

            </div>
          </div>
        </section >

        {/* Administrative / Leadership Section */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-white border-y border-gray-100">
          <div className="container px-4 sm:px-6 relative z-10">
            <RevealOnScroll animation="fade-up">
              <div className="text-center mb-16">
                <span className="font-['Dancing_Script'] text-2xl text-[#FF7700] block mb-3">Leadership</span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-4">
                  Administrative Team
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  Leading Europe Calling with vision and dedication.
                </p>
                <div className="w-16 h-1 bg-[#FF7700] mx-auto mt-6 rounded-full" />
              </div>
            </RevealOnScroll>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
              {administrative.map((exec, index) => (
                <RevealOnScroll animation="fade-up" delay={index * 100} key={exec.name} className="flex-1">
                  <div className="group bg-[#faf4e5]/60 rounded-2xl p-8 border border-gray-100 hover:border-[#FF7700]/30 transition-all duration-300 hover:shadow-xl">
                    <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-xl overflow-hidden mb-6 bg-gray-100">
                      <img
                        src={exec.img}
                        alt={exec.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-heading text-xl font-bold text-primary mb-1">{exec.name}</h3>
                      <p className="text-sm font-semibold text-[#FF7700] uppercase tracking-wider">{exec.role}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 relative overflow-hidden bg-[#faf4e5]">
          {/* Dotted Grid Background Pattern */}
          < div className="absolute inset-0 z-0 opacity-[0.2]"
            style={{
              backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }
            }
          />

          < div className="container px-4 sm:px-6 relative z-10" >
            <RevealOnScroll animation="fade-up">
              <div className="text-center mb-24 relative">
                {/* Decorative Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-3xl -z-10" />

                <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-6 tracking-tight drop-shadow-sm">
                  A wholesome team that <br className="hidden md:block" /> stands for success!
                </h2>
                <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl italic text-gray-500 max-w-2xl mx-auto">
                  Meet the experts guiding your European journeys.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {team.map((member, index) => (
                <RevealOnScroll
                  animation="fade-up"
                  delay={index * 100}
                  key={member.name}
                  className="w-full h-full"
                >
                  {/* Card Main Container */}
                  <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#FF7700] transition-all duration-300 hover:shadow-2xl h-full flex flex-col justify-between">

                    {/* Image Area */}
                    <div className="relative w-full aspect-[4/4.5] rounded-2xl mb-8 overflow-hidden shrink-0 bg-[#FF7700]/10">
                      {member.img ? (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transform transition-transform duration-500 scale-125 group-hover:scale-135"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary/40">
                          <User className="w-1/3 h-1/3" strokeWidth={1} />
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary leading-tight mb-2">
                          {member.name}
                        </h3>
                        <p className="font-bold text-[10px] text-[#FF7700] uppercase tracking-widest">
                          {member.role}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white group-hover:bg-[#FF7700] transition-colors duration-300 shadow-lg cursor-pointer">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>

                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div >
        </section >

        <RevealOnScroll animation="fade-up">
          <CTASection />
        </RevealOnScroll>
      </main >
      <Footer />
      <WhatsAppButton />
      <StickyEnquireButton />
    </>
  );
};

export default About;
