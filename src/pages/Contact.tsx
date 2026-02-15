import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { PageHeader } from "@/components/ui/PageHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageSquare, Globe, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import contactBanner from "@/assets/destination-czech.jpg";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { submitLead } from "@/lib/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const destinations = [
  "Azerbaijan", "Kazakhstan", "Uzbekistan", "Kyrgyzstan","Georgia", "Armenia","Russia","France"
]


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    rating: 0,
  });
  const [activeTab, setActiveTab] = useState<'contact' | 'feedback'>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const fireConfetti = useCallback(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FF7700", "#F59E0B", "#FBBF24", "#FCD34D"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FF7700", "#F59E0B", "#FBBF24", "#FCD34D"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FF7700", "#F59E0B", "#FBBF24", "#FCD34D", "#ffffff"],
      });
    }, 200);
  }, []);

  const handleRatingClick = useCallback((star: number) => {
    setFormData((prev) => ({ ...prev, rating: star }));
    if (star === 5) {
      fireConfetti();
      toast({ title: "Thank you! ★★★★★", description: "We're thrilled by your 5-star rating!" });
    }
  }, [fireConfetti]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (activeTab === 'feedback') {
        // Feedback Submission using Lead API
        const result = await submitLead({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          rating: formData.rating === 0 ? 5 : formData.rating,
          form_type: "Feedback Form",
          source: "Website Form"
        });

        if (result.status === "success") {
          toast({
            title: "Thank You!",
            description: "Your feedback has been successfully submitted.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: result.message || "Failed to submit feedback",
          });
          setIsSubmitting(false);
          return;
        }
      } else {
        // Contact Form Submission
        const result = await submitLead({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          country: formData.country,
          form_type: "Contact Us Form",
        });

        if (result.status === "success") {
          toast({
            title: "Message Sent Successfully!",
            description: "Our team will review your inquiry and respond within 24 hours.",
          });
        } else {
          toast({
            variant: "destructive",
            title: "Submission Failed",
            description: result.message || "There was a problem sending your message.",
          });
          // Don't throw here to avoid generic catch block overriding specific error
          setIsSubmitting(false);
          return;
        }
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        rating: 0,
      });

    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: (
        <div className="flex flex-col gap-1.5">
          <a href="tel:+994555533744" className="block font-medium">+994 55 553 37 44</a>
          <a href="tel:+994519737056" className="block font-medium">+994 51 973 70 56</a>
        </div>
      ),
      description: "Speak directly with our expert consultants.",
      subtext: "Mon–Sat 9AM–6PM"
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <div className="flex flex-col gap-1.5">
          <a href="mailto:sales@europecalling.co" className="block font-medium">sales@europecalling.co</a>
          <a href="mailto:careers@europecalling.co" className="block font-medium">careers@europecalling.co</a>
        </div>
      ),
      description: "Get a detailed quote or support for your application.",
      link: "#",
      subtext: "Online Mon–Sat 9AM–6PM"
    },
    {
      icon: MapPin,
      title: "India Office",
      content: (
        <div className="flex flex-col gap-2.5 w-full">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Calicut+rd,+opposite+Budget+hyper+market,+Varangod,+Down+Hill,+Malappuram,+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link"
          >
            <span className="flex items-center justify-center gap-1.5 font-semibold text-gold mb-1 group-hover/link:text-amber-600 transition-colors">
              <MapPin className="w-3.5 h-3.5 shrink-0" /> Kerala, India
            </span>
            <span className="block text-foreground/80 leading-snug text-[13px]">Calicut rd, opposite Budget hyper market, Varangod, Down Hill, Malappuram, Kerala</span>
          </a>
          <div className="flex flex-col gap-0.5 pt-1 border-t border-gray-100">
            <a href="tel:+918592004857" className="font-medium text-sm">+91 85920 04857</a>
            <a href="tel:+918590404857" className="font-medium text-sm">+91 85904 04857</a>
          </div>
        </div>
      ),
      description: "",
      link: "#",
      subtext: ""
    },
    {
      icon: MapPin,
      title: "Azerbaijan Office",
      content: (
        <div className="flex flex-col gap-2.5 w-full">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bashir+safar-oghlu,+Baku,+Azerbaijan"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link"
          >
            <span className="flex items-center justify-center gap-1.5 font-semibold text-gold mb-1 group-hover/link:text-amber-600 transition-colors">
              <MapPin className="w-3.5 h-3.5 shrink-0" /> Baku, Azerbaijan
            </span>
            <span className="block text-foreground/80 leading-snug text-[13px]">Bashir safar-oghlu, Baku, Azerbaijan</span>
          </a>
          <div className="flex flex-col gap-0.5 pt-1 border-t border-gray-100">
            <a href="tel:+994519737056" className="font-medium text-sm">+994 51 973 70 56</a>
          </div>
        </div>
      ),
      description: "",
      link: "#",
      subtext: ""
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-[#faf4e5] min-h-screen pt-20">
        <PageHeader
          eyebrow="Contact Us"
          title="Get in Touch"
          description="We're here to answer your questions and help you start your journey."
        />

        {/* Contact Info Cards - Premium Design */}
        <section className="relative z-20 -mt-16 sm:-mt-20 px-4 mb-32 lg:mb-40">
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {contactInfo.map((info, index) => (
                <RevealOnScroll
                  className="h-full"
                  delay={index * 80}
                  key={index}
                >
                  {(() => {
                    const isStaticCard = info.title.includes("Office") || info.title === "Phone" || info.title === "Email";
                    const Wrapper = isStaticCard ? "div" : "a";
                    const wrapperProps = isStaticCard ? {} : { href: info.link };

                    return (
                      <Wrapper
                        {...wrapperProps}
                        className="group relative bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-[1.5rem] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] border border-gray-100/80 hover:border-gold/25 transition-all duration-500 ease-out flex flex-col items-center text-center h-full min-h-[280px] overflow-hidden
                          hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2"
                      >
                        {/* Subtle gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.5rem]" />
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[1.5rem]" />

                        <div className="relative z-10 flex flex-col items-center flex-1 w-full">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/90 to-amber-600/90 text-white flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_24px_-4px_rgba(255,119,0,0.4)] shadow-md">
                            <info.icon className="w-6 h-6" strokeWidth={2} />
                          </div>
                          <h3 className="font-heading text-base sm:text-lg font-bold mb-2 text-primary tracking-tight">{info.title}</h3>
                          <div className="text-foreground/90 font-medium text-sm mb-2 break-words w-full px-1 leading-relaxed [&_a]:hover:text-gold [&_a]:transition-colors [&_a]:duration-200">
                            {info.content}
                          </div>
                          {info.description && (
                            <p className="text-muted-foreground/90 text-xs mb-2 px-2 leading-relaxed flex-1">{info.description}</p>
                          )}
                          {info.subtext && (
                            <p className="text-muted-foreground/70 text-[10px] font-semibold uppercase tracking-[0.15em] mt-auto">{info.subtext}</p>
                          )}
                        </div>
                      </Wrapper>
                    );
                  })()}
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* --- Main Content Split --- */}
        < section className="section-padding pt-0 relative overflow-hidden" >
          {/* Decorative Elements */}
          < div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Left Column: Form - Balanced Width (6 cols) */}
              <RevealOnScroll className="lg:col-span-6" animation="slide-in-left" delay={300}>
                <div className="bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden relative group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#C6A87C] via-[#F3E7C9] to-[#C6A87C]" />

                  <div className="p-5 sm:p-6">
                    {/* Tab Switcher */}
                    <div className="flex bg-muted/50 p-1 rounded-xl mb-6 relative">
                      <button
                        onClick={() => setActiveTab('contact')}
                        className={cn(
                          "flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 z-10",
                          activeTab === 'contact' ? "text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        Contact
                      </button>
                      <button
                        onClick={() => setActiveTab('feedback')}
                        className={cn(
                          "flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 z-10",
                          activeTab === 'feedback' ? "text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        Feedback
                      </button>
                      {/* Sliding Bg */}
                      <div
                        className={cn(
                          "absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#FF7700] rounded-lg transition-all duration-300 ease-out shadow-sm",
                          activeTab === 'feedback' ? "left-[calc(50%)]" : "left-1"
                        )}
                      />
                    </div>

                    <div className="mb-4">
                      <h2 className="font-heading text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                        {activeTab === 'contact' ? <MessageSquare className="w-5 h-5 text-gold" /> : <Star className="w-5 h-5 text-gold" />}
                        {activeTab === 'contact' ? 'Send a Message' : 'Share Feedback'}
                      </h2>
                      <p className="text-muted-foreground text-xs md:text-sm">
                        {activeTab === 'contact'
                          ? "Fill out the form below and verify your specific requirements. We respect your privacy."
                          : "We value your opinion. Please let us know about your experience with us."}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {activeTab === 'contact' ? (
                        /* Contact Form Fields */
                        <>
                          <div className="grid grid-cols-1 gap-3">
                            {/* Name Input */}
                            <div className="relative">
                              <input
                                id="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                onFocus={() => setActiveField('name')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Full Name"
                              />
                              <label
                                htmlFor="name"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.name && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Full Name
                              </label>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                              <input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                onFocus={() => setActiveField('email')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Email Address"
                              />
                              <label
                                htmlFor="email"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.email && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Email Address
                              </label>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {/* Phone Input */}
                            <div className="relative">
                              <input
                                id="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                onFocus={() => setActiveField('phone')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Phone Number"
                              />
                              <label
                                htmlFor="phone"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.phone && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Phone Number
                              </label>
                            </div>

                            {/* Country Input */}
                            <div className="relative">
                              <Select
                                value={formData.country}
                                onValueChange={(value) => setFormData({ ...formData, country: value })}
                                onOpenChange={(open) => setActiveField(open ? 'country' : null)}
                              >
                                <SelectTrigger
                                  id="country"
                                  className={cn(
                                    "peer w-full px-4 py-2.5 h-auto rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:ring-1 focus:ring-[#C6A87C] focus:border-[#C6A87C] transition-all duration-300 pt-5 font-medium shadow-sm hover:border-gray-300",
                                    !formData.country && "text-transparent"
                                  )}
                                >
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="max-h-[300px] p-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-gray-100">
                                  {destinations.map((country) => (
                                    <SelectItem
                                      key={country}
                                      value={country.toLowerCase()}
                                      className="rounded-lg py-2.5 px-4 mb-0.5 cursor-pointer focus:bg-[#FF7700] focus:text-white data-[state=checked]:bg-[#FF7700] data-[state=checked]:text-white transition-colors font-medium text-sm"
                                    >
                                      {country}
                                    </SelectItem>
                                  ))}
                                  <SelectItem
                                    value="other"
                                    className="rounded-lg py-2.5 px-4 cursor-pointer focus:bg-[#FF7700] focus:text-white data-[state=checked]:bg-[#FF7700] data-[state=checked]:text-white transition-colors font-medium text-sm"
                                  >
                                    Other
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <label
                                htmlFor="country"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.country && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Country of Interest
                              </label>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                <Globe className="w-4 h-4 opacity-50" />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Feedback Form Fields */
                        <>
                          <div className="grid grid-cols-1 gap-3">
                            {/* Name Input */}
                            <div className="relative">
                              <input
                                id="feedback-name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                onFocus={() => setActiveField('feedback-name')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Full Name"
                              />
                              <label
                                htmlFor="feedback-name"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.name && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Full Name
                              </label>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                              <input
                                id="feedback-email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                onFocus={() => setActiveField('feedback-email')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Email Address"
                              />
                              <label
                                htmlFor="feedback-email"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.email && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Email Address
                              </label>
                            </div>

                            {/* Phone Input (Required for API) */}
                            <div className="relative">
                              <input
                                id="feedback-phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                onFocus={() => setActiveField('feedback-phone')}
                                onBlur={() => setActiveField(null)}
                                className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                                placeholder="Phone Number"
                              />
                              <label
                                htmlFor="feedback-phone"
                                className={cn(
                                  "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                                  "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                                  formData.phone && "top-1 text-[10px] font-semibold"
                                )}
                              >
                                Phone Number
                              </label>
                            </div>

                            {/* Rating */}
                            <div className="flex flex-col gap-2">
                              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Your Rating</label>
                              <div className="flex items-center gap-1 sm:gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleRatingClick(star)}
                                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 rounded-full p-0.5 transition-all duration-300 ease-out hover:scale-110 active:scale-95"
                                  >
                                    <Star
                                      className={cn(
                                        "w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300 ease-out",
                                        formData.rating >= star
                                          ? "fill-[#FF7700] text-[#FF7700] drop-shadow-[0_0_8px_rgba(255,119,0,0.4)]"
                                          : "text-gray-300 hover:text-[#FF7700]/60 hover:scale-105"
                                      )}
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Message Input (Shared) */}
                      <div className="relative">
                        <textarea
                          id="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          className="peer w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white text-foreground text-sm focus:outline-none focus:border-[#C6A87C] focus:ring-1 focus:ring-[#C6A87C] transition-all duration-300 resize-none pt-5 font-medium placeholder-transparent shadow-sm hover:border-gray-300"
                          placeholder={activeTab === 'contact' ? "Your Message" : "Tell us about your experience"}
                        />
                        <label
                          htmlFor="message"
                          className={cn(
                            "absolute left-4 top-3 text-muted-foreground text-xs transition-all pointer-events-none",
                            "peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-semibold",
                            formData.message && "top-1 text-[10px] font-semibold"
                          )}
                        >
                          {activeTab === 'contact' ? "Your Message" : "Additional Comments"}
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full bg-[#FF7700] hover:bg-[#e66b00] text-white font-bold py-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_-15px_rgba(255,119,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group text-sm",
                          isSubmitting && "opacity-70 cursor-not-allowed"
                        )}

                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Inquiry
                            <Send className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Right Column: Content/Maps - Balanced Width (6 cols) */}
              <RevealOnScroll className="lg:col-span-6 flex flex-col gap-8" animation="slide-in-right" delay={500}>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">Visit Our Offices</h3>
                <p className="text-muted-foreground text-sm mb-4 -mt-2">
                  We welcome clients for personal consultations. Please schedule an appointment in advance.
                </p>

                {/* India Office - Malappuram Map */}
                <div className="bg-primary text-primary-foreground p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-colors" />
                  <h4 className="font-heading text-lg font-bold mb-4 relative z-10 text-gold">India Office — Malappuram</h4>
                  <div className="relative block h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-white/10 hover:border-gold/50 transition-colors group/map">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://maps.google.com/maps?q=2nd+Floor,+Paravath+Arcade,+opp.+Budget+Hypermarket,+Varangode,+Down+Hill,+Malappuram,+Kerala+676519&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      title="Europe Calling India Office - Malappuram"
                      className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/kDggstPX7apT1ZsB6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 items-center gap-2 text-sm text-gold font-medium cursor-pointer hover:underline inline-flex"
                  >
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Azerbaijan Office - Baku Map */}
                <div className="bg-primary text-primary-foreground p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-colors" />
                  <h4 className="font-heading text-lg font-bold mb-4 relative z-10 text-gold">Azerbaijan Office — Baku</h4>
                  <div className="relative block h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-white/10 hover:border-gold/50 transition-colors group/map">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://maps.google.com/maps?q=Bashir+safar-oghlu,+Baku,+Azerbaijan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      title="Europe Calling Azerbaijan Office - Baku"
                      className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bashir+safar-oghlu,+Baku,+Azerbaijan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 items-center gap-2 text-sm text-gold font-medium cursor-pointer hover:underline inline-flex"
                  >
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* FAQ Teaser */}
                <div className="bg-muted/50 border border-border rounded-3xl p-8 hover:bg-muted transition-colors">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Find quick answers to common questions about visas, processing times, and documents.
                  </p>
                  <Link to="/about" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Visit FAQ Page <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </section >
      </main >
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
