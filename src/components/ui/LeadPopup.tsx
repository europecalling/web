import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { submitLead } from "@/lib/api";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
}

export const useLeadPopup = (delay: number = 5000) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadPopup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenLeadPopup", "true");
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isOpen, setIsOpen };
};

export function LeadPopup({ isOpen, onClose, initialDestination }: LeadPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsappSame: true,
    whatsappNumber: "",
    email: "",
    destination: initialDestination ? initialDestination.toLowerCase() : "",
    travelDate: undefined as Date | undefined,
    adults: "",
    kids: "",
    budgetRange: "",
    specialRequests: [] as string[],
  });

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination.toLowerCase() }));
    }
  }, [initialDestination, isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinations = [
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "georgia", label: "Georgia" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "russia", label: "Russia" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "armenia", label: "Armenia" },
    { value: "france", label: "France" },
  ];

  const budgetRanges = [
    { value: "under-1000", label: "Under $1,000" },
    { value: "1000-2500", label: "$1,000 - $2,500" },
    { value: "2500-5000", label: "$2,500 - $5,000" },
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "over-10000", label: "Over $10,000" },
  ];

  const specialRequestOptions = [
    { value: "honeymoon", label: "Honeymoon" },
    { value: "family", label: "Family Trip" },
    { value: "visa-help", label: "Visa Help" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submit to API
    const result = await submitLead({
      name: formData.name,
      phone: formData.phone,
      whatsapp_number: formData.whatsappSame ? formData.phone : formData.whatsappNumber,
      email: formData.email,
      destination: formData.destination,
      travel_date: formData.travelDate ? format(formData.travelDate, "yyyy-MM-dd") : undefined,
      adults: formData.adults,
      kids: formData.kids,
      budget_range: formData.budgetRange,
      special_requests: formData.specialRequests.join(", "),
      form_type: "Lead Popup",
    });

    if (result.status === "success") {
      toast({
        title: "Request Received",
        description: "Our travel specialists will contact you shortly.",
        duration: 3000,
      });
      onClose();
      setFormData({
        name: "",
        phone: "",
        whatsappSame: true,
        whatsappNumber: "",
        email: "",
        destination: "",
        travelDate: undefined,
        adults: "",
        kids: "",
        budgetRange: "",
        specialRequests: [],
      });
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.message || "Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  // Helper to format title case
  const formatDestination = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in transition-all duration-500"
        onClick={onClose}
      />

      {/* Modal Container - Clean White Card */}
      <div className="relative bg-white w-full max-w-[32rem] rounded-3xl shadow-2xl p-5 md:p-6 animate-scale-in flex flex-col max-h-[90dvh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        {/* Header - Clean & Simple */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Plan Your {initialDestination ? formatDestination(initialDestination) : "Dream"} Trip
          </h2>
          <p className="text-gray-500 text-sm">
            Get a free customized itinerary.
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-900 transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Mobile Number (with country code) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* WhatsApp Number Checkbox */}
          <div className="relative flex items-center space-x-2">
            <Checkbox
              id="whatsapp-same"
              checked={formData.whatsappSame}
              onCheckedChange={(checked) => setFormData({ ...formData, whatsappSame: checked === true, whatsappNumber: checked === true ? "" : formData.whatsappNumber })}
              className="border-gray-300 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
            />
            <label
              htmlFor="whatsapp-same"
              className="text-sm font-medium text-gray-900 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              WhatsApp Number (same as mobile)
            </label>
          </div>

          {/* WhatsApp Number Input - Show when checkbox is unchecked */}
          {!formData.whatsappSame && (
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                WhatsApp Number (with country code) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required={!formData.whatsappSame}
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          )}

          {/* Email - Optional */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Email <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
              placeholder="e.g. sarah@example.com"
            />
          </div>

          {/* Destination */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Destination of Interest <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.destination}
              onValueChange={(value) => setFormData({ ...formData, destination: value })}
            >
              <SelectTrigger className="w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-gold focus:border-gold [&>span]:line-clamp-none">
                <SelectValue placeholder="Select Destination" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="min-w-[var(--radix-select-trigger-width)] max-h-[200px] bg-white border-gray-100 rounded-xl shadow-xl z-[150]">
                {destinations.map((destination) => (
                  <SelectItem
                    key={destination.value}
                    value={destination.value}
                    className="cursor-pointer focus:bg-gold/10 focus:text-primary whitespace-nowrap"
                  >
                    {destination.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Travel Dates */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Travel Dates <span className="text-red-500">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-gold focus:border-gold transition-all duration-200 text-sm text-left justify-start font-normal",
                    !formData.travelDate && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 inline" />
                  {formData.travelDate ? format(formData.travelDate, "PPP") : "Select date"}
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 bg-white border-gray-100 rounded-xl shadow-xl z-[150]"
                align="start"
                sideOffset={5}
              >
                <Calendar
                  mode="single"
                  selected={formData.travelDate}
                  onSelect={(date) => {
                    setFormData({ ...formData, travelDate: date });
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* No. of Travellers */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                Adults <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.adults}
                onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
                placeholder="0"
              />
            </div>
            <div className="relative">
              <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
                Kids
              </label>
              <input
                type="number"
                min="0"
                value={formData.kids}
                onChange={(e) => setFormData({ ...formData, kids: e.target.value })}
                className="w-full px-4 py-2.5 md:py-3 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 text-sm"
                placeholder="0"
              />
            </div>
          </div>

          {/* Budget Range */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-1.5 ml-1">
              Budget Range <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.budgetRange}
              onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
              required
            >
              <SelectTrigger className="w-full px-4 py-2.5 md:py-3 h-auto bg-white border border-gray-200 rounded-2xl text-gray-900 shadow-none focus:ring-1 focus:ring-gold focus:border-gold [&>span]:line-clamp-none">
                <SelectValue placeholder="Select Budget Range" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} className="min-w-[var(--radix-select-trigger-width)] max-h-[200px] bg-white border-gray-100 rounded-xl shadow-xl z-[150]">
                {budgetRanges.map((range) => (
                  <SelectItem
                    key={range.value}
                    value={range.value}
                    className="cursor-pointer focus:bg-gold/10 focus:text-primary whitespace-nowrap"
                  >
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Special Requests */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-900 mb-2 ml-1">
              Special Requests
            </label>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-3">
              {specialRequestOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`special-pop-${option.value}`}
                    checked={formData.specialRequests.includes(option.value)}
                    onCheckedChange={(checked) => {
                      if (checked === true) {
                        setFormData({ ...formData, specialRequests: [...formData.specialRequests, option.value] });
                      } else {
                        setFormData({ ...formData, specialRequests: formData.specialRequests.filter(req => req !== option.value) });
                      }
                    }}
                    className="h-5 w-5 rounded border-gray-300 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                  />
                  <label
                    htmlFor={`special-pop-${option.value}`}
                    className="text-sm font-medium text-gray-900 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="authorize-pop" className="h-5 w-5 rounded border-gray-300 data-[state=checked]:bg-gold data-[state=checked]:border-gold" />
            <label htmlFor="authorize-pop" className="text-[13px] font-medium text-gray-700 cursor-pointer">
              I authorize Europe Calling to contact me via Phone / WhatsApp
            </label>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full bg-gold hover:bg-gold/90 text-white font-bold py-3 md:py-3.5 rounded-2xl shadow-lg border border-gold/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm",
                isSubmitting && "opacity-80 cursor-not-allowed transform-none"
              )}
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  <span>Speak to Trip Planner</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            <div className="mt-3 md:mt-4 flex items-center justify-center">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-xs font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
