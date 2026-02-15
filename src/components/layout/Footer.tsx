import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin } from "lucide-react";
import logoImg from "../../assets/logo-unamed.png";

const topDestinations = [
  { name: 'Azerbaijan', path: '/destinations/azerbaijan' },
  { name: 'Russia', path: '/destinations/russia' },
  { name: 'Kazakhstan', path: '/destinations/kazakhstan' },
  { name: 'Georgia', path: '/destinations/georgia' },
  { name: 'Uzbekistan', path: '/destinations/uzbekistan' },
  { name: 'Armenia', path: '/destinations/armenia' },
  { name: 'Kyrgyzstan', path: '/destinations/kyrgyzstan' },
  { name: 'France', path: '/destinations/france' },
  { name: 'Belgium', path: '/destinations/belgium' },
  { name: 'Netherlands', path: '/destinations/netherlands' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Contact', path: '/contact' },
  { name: 'Newsroom', path: '/newsroom' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const destCol1 = topDestinations.slice(0, 5);
  const destCol2 = topDestinations.slice(5, 10);

  const linkClass = "relative text-slate-600 hover:text-gold text-sm font-medium transition-all duration-300 flex items-center gap-2 group py-1.5 px-2 -mx-2 rounded-md hover:bg-gold/5 whitespace-nowrap";
  const linkDot = <span className="absolute left-0 w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100" />;

  return (
    <footer className="bg-[#faf4e5] pt-16 pb-8 border-t border-gold/20 overflow-hidden">
      <div className="container-wide px-6 md:px-12">

        {/* Mobile: Logo + Socials + Get In Touch (compact) */}
        <div className="md:hidden mb-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 group mb-4">
            <img src={logoImg} alt="Europe Calling" className="h-10 w-auto object-contain" />
            <span className="font-heading text-lg font-bold text-primary tracking-tight">Europe Calling</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[
              { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/share/19qGz8sdbi/?mibextid=wwXIfr" },
              { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/europe__calling/" },
              { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/europe__calling?s=21" },
              { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/europe-calling-494b7b3a7/" },
              { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@europe_calling" },
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FF7700] text-[#faf4e5] hover:bg-black hover:text-[#FF7700] transition-all">
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
            <a href="tel:+994555533744" className="hover:text-gold transition-colors">+994 55 553 37 44</a>
            <a href="mailto:sales@europecalling.co" className="hover:text-gold transition-colors">sales@europecalling.co</a>
          </div>
        </div>

        {/* Mobile: 3-column row (Dest col1 | Dest col2 | Quick Links) */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:hidden mb-10">
          <div>
            <h4 className="font-heading font-semibold text-primary mb-4 text-sm tracking-wide">Top Destinations</h4>
            <div className="space-y-2">
              {destCol1.map((item) => (
                <Link key={item.name} to={item.path} className={linkClass}>
                  {linkDot}
                  <span className="relative tracking-wide text-xs">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary mb-4 text-sm tracking-wide opacity-0 pointer-events-none">Top Destinations</h4>
            <div className="space-y-2">
              {destCol2.map((item) => (
                <Link key={item.name} to={item.path} className={linkClass}>
                  {linkDot}
                  <span className="relative tracking-wide text-xs">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary mb-4 text-sm tracking-wide">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((item) => (
                <Link key={item.name} to={item.path} className={linkClass}>
                  {linkDot}
                  <span className="relative tracking-wide text-xs">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid Content - Desktop (md and up) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-20">

          {/* Column 1: Brand & Socials */}
          <div className="col-span-2 md:col-span-1 space-y-6 order-1">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Europe Calling"
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
              <span className="font-heading text-2xl font-bold text-primary tracking-tight">Europe Calling</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Hassle-free travel shouldn't just be a dream. Seamless visa processing and premium travel experiences await.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/share/19qGz8sdbi/?mibextid=wwXIfr" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/europe__calling/" },
                { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/europe__calling?s=21" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/europe-calling-494b7b3a7/" },
                { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@europe_calling" },
              ].map((social, width) => (
                <a
                  key={width}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF7700] text-[#faf4e5] hover:bg-black hover:text-[#FF7700] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-2 md:col-span-1 order-4 md:order-2">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide text-center md:text-left">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 md:block md:space-y-3.5">
              {quickLinks.map((item) => (
                <div key={item.name} className="flex justify-center md:justify-start">
                  <Link to={item.path} className={linkClass}>
                    {linkDot}
                    <span className="relative flex-1 tracking-wide">{item.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold text-xs">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Top Destinations */}
          <div className="col-span-2 md:col-span-1 order-3 md:order-3">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide text-center">Top Destinations</h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-3.5 justify-items-center">
              {topDestinations.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-slate-600 hover:text-gold text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 sm:gap-2.5 group py-1.5 px-2 sm:px-2 rounded-md hover:bg-gold/5 whitespace-nowrap"
                >
                  <span className="absolute left-0 w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                  <span className="relative tracking-wide text-xs sm:text-sm text-center">{item.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold text-xs hidden sm:inline shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="col-span-2 md:col-span-1 order-2 md:order-4">
            <h4 className="font-heading font-semibold text-primary mb-6 text-lg tracking-wide text-left">Get In Touch</h4>
            <div className="space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-4 group text-left">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-gold fill-current" />
                </div>
                <div>
                  <div className="space-y-1">
                    <a href="tel:+994555533744" className="block text-muted-foreground hover:text-gold text-sm transition-colors font-medium">
                      +994 55 553 37 44
                    </a>
                  </div>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-start gap-4 group text-left">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-gold fill-current" />
                </div>
                <div>
                  <a href="mailto:sales@europecalling.co" className="block text-muted-foreground hover:text-gold text-sm transition-colors font-medium">
                    sales@europecalling.co
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group text-left">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-4 h-4 text-gold fill-current" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-primary text-xs uppercase tracking-widest mb-1">Baku Office</h5>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Bashir+safar-oghlu,+Baku,+Azerbaijan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-gold text-sm max-w-[220px] transition-colors leading-relaxed font-medium"
                    >
                      Bashir safar-oghlu, Baku, Azerbaijan
                    </a>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary text-xs uppercase tracking-widest mb-1">India Office</h5>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-muted-foreground hover:text-gold text-sm max-w-[220px] transition-colors leading-relaxed font-medium"
                    >
                      2nd Floor, Paravath Arcade, Malappuram, Kerala 676519
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-muted-foreground/60 text-xs tracking-wide">
            © {currentYear} Europe Calling. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/refund" className="text-xs text-muted-foreground/60 hover:text-gold transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
