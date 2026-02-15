import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, Mail, Home, Info, MapPin, Image as ImageIcon, MessageSquare, Newspaper, Send, X, Instagram, Facebook, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "../../assets/logo-unamed.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  {
    name: "About Us",
    path: "/about",
    icon: Info,
    children: [
      { name: "Gallery", path: "/gallery", icon: ImageIcon },
      { name: "Reviews", path: "/reviews", icon: MessageSquare },
    ]
  },
  { name: "Destinations", path: "/destinations", icon: MapPin },
  { name: "Newsroom", path: "/newsroom", icon: Newspaper },
  { name: "Contact", path: "/contact", icon: Send },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine header state
  const isHomePage = location.pathname === "/";

  // Pages that have LIGHT background heroes (Transparent header, DARK text)
  // Pages that have LIGHT background heroes (Transparent header, DARK text)
  const lightHeroPages = ["/about", "/newsroom", "/contact", "/destinations", "/gallery", "/privacy", "/terms", "/reviews", "/refund"];
  const isLightHeroPage = lightHeroPages.includes(location.pathname);

  // Pages that have DARK background heroes (Transparent header, WHITE text)
  // implied by !isLightHeroPage if we assume binary classification, or strictly defined for others.

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldUseDarkText = isScrolled || isLightHeroPage;

  // Determine background styling:
  // - Scrolled: Always White
  // - Standard Pages (Right Hero Pages EXCEPT Home): Always White (as requested)
  // - Home Page (Unscrolled): Transparent
  // - Dark Hero Pages (Unscrolled): Transparent
  const shouldHaveWhiteBackground = isScrolled || (isLightHeroPage && !isHomePage);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out",
        shouldHaveWhiteBackground
          ? "bg-gradient-to-b from-[#faf4e5] to-[#faf4e5]/0 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5 lg:py-8"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 relative z-50 group pl-2 sm:pl-4 md:pl-6">
          <div className={cn("transition-transform duration-500 relative animate-scale-in origin-left", isScrolled ? "scale-90" : "scale-100")}>
            {/* Pronounced White Gradient Background for Logo */}
            <div className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-[radial-gradient(closest-side,white_0%,rgba(255,255,255,0.8)_40%,transparent_100%)] blur-2xl -z-10 transition-opacity duration-500",
              isScrolled ? "opacity-0" : "opacity-70"
            )} />
            <img
              src={logoImg}
              alt="Europe Calling Logo"
              className={cn(
                "w-auto object-contain transition-all duration-500",
                isScrolled || !isHomePage ? "h-10 lg:h-12" : "h-20 lg:h-28 drop-shadow-2xl"
              )}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 transition-all duration-300">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.path}
                className={cn(
                  "relative flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 py-2",
                  // Text Color Logic
                  shouldUseDarkText ? "text-primary/80 hover:text-primary" : "text-white/90 hover:text-white",
                  location.pathname === item.path && "text-gold"
                )}
              >
                {item.name}
                {item.children && <ChevronDown className="w-3 h-3" />}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] bg-gold transform scale-x-0 transition-transform duration-300 origin-center",
                  "group-hover:scale-x-100",
                  location.pathname === item.path && "scale-x-100"
                )} />
              </Link>

              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-[#faf4e5] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-primary/5 p-2 w-52 overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gold/5 text-primary rounded-lg transition-colors group/item"
                      >
                        <child.icon className="w-4 h-4 text-gold/70 group-hover/item:text-gold" />
                        <span className="text-xs font-bold uppercase tracking-wider">{child.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={cn(
            "hidden lg:flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300",
            // Button Style Logic
            shouldUseDarkText
              ? "bg-black text-white hover:bg-gold hover:shadow-lg hover:-translate-y-0.5" // Scrolled or Light Page -> Black Button
              : "bg-white text-primary hover:bg-gold hover:text-white hover:shadow-glow hover:-translate-y-0.5" // Dark Hero -> White Button
          )}
        >
          Get Consultation
        </Link>

        {/* Mobile Menu (Sheet) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <Menu
                className={cn(
                  "w-7 h-7",
                  shouldUseDarkText ? "text-primary" : "text-white"
                )}
              />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0 border-l border-primary/5 bg-[#faf4e5] z-[70]">
            <SheetHeader className="sr-only">
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
              <SheetDescription>
                Navigation links for accessing different sections of the website.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full">
              {/* Menu Header with Pattern */}
              {/* Menu Header with Pattern */}
              {/* Menu Header with Pattern */}
              <div className="bg-[#faf4e5] pt-8 pb-4 px-8 relative overflow-hidden flex items-center justify-start gap-4 border-b border-primary/5 shrink-0">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

                <Link to="/" onClick={() => setIsOpen(false)} className="relative group shrink-0">
                  <img src={logoImg} alt="Europe Calling" className="h-14 w-auto object-contain drop-shadow-sm" />
                </Link>
                <span className="font-heading text-xl font-bold text-primary tracking-tight whitespace-nowrap">Europe Calling</span>
              </div>

              {/* Menu Links */}
              <div className="flex-1 overflow-y-auto py-6 pr-4 pl-0 bg-[#faf4e5]">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;

                    return (
                      <div key={item.name}>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "relative flex items-center gap-3 px-6 py-3 transition-all duration-300 rounded-r-[50px] mr-4",
                            isActive
                              ? "bg-gradient-to-r from-primary to-primary text-white shadow-[0_10px_20px_-5px_hsl(var(--primary)/0.3)] translate-x-0"
                              : "text-primary/60 hover:bg-gray-50 hover:text-primary"
                          )}
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          {/* Active Indicator Line (Left) */}
                          {isActive && (
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-1 bg-[#FF6B00] rounded-r-full" />
                          )}

                          {/* Icon Container */}
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                            isActive ? "bg-white text-primary" : "bg-gray-100 text-primary/50 group-hover:bg-primary/5"
                          )}>
                            <Icon className="w-5 h-5" />
                          </div>

                          {/* text */}
                          <span className={cn(
                            "text-[11px] font-bold uppercase tracking-[0.15em]",
                            isActive ? "text-white" : "font-medium"
                          )}>
                            {item.name}
                          </span>
                        </Link>

                        {/* Mobile Submenu */}
                        {item.children && (
                          <div className="pl-12 pr-4 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300",
                                  location.pathname === child.path
                                    ? "bg-primary/5 text-primary font-bold"
                                    : "text-primary/50 hover:text-primary hover:bg-gold/5"
                                )}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${location.pathname === child.path ? 'bg-gold' : 'bg-primary/20'}`} />
                                <span className="text-[10px] uppercase tracking-wider">{child.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>

                <div className="mt-10 pt-8 text-center">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-6 opacity-100">
                    Social Media
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a href="tel:+918590404857" className="group">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300 border border-primary/10">
                        <Phone className="w-4 h-4" />
                      </div>
                    </a>
                    <a href="mailto:sales@europecalling.co" className="group">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300 border border-primary/10">
                        <Mail className="w-4 h-4" />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/europe__calling/" target="_blank" rel="noopener noreferrer" className="group" aria-label="Instagram">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300 border border-primary/10">
                        <Instagram className="w-4 h-4" />
                      </div>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group" aria-label="Facebook">
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300 border border-primary/10">
                        <Facebook className="w-4 h-4" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="p-8 pb-10 bg-[#faf4e5]/50 border-t border-primary/5">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative w-full h-12 rounded-full flex items-center justify-center overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary transition-transform duration-300 group-hover:scale-105" />
                  <span className="relative text-white text-sm uppercase font-bold tracking-widest group-hover:tracking-[0.15em] transition-all duration-300 flex items-center gap-2">
                    Get Consultation
                  </span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
