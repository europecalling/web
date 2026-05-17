import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StickyEnquireButton } from "@/components/ui/StickyEnquireButton";
import { DestinationBanner } from "@/components/country/DestinationBanner";
import { CountryHero } from "@/components/country/CountryHero";
import { RoadmapSection } from "@/components/country/RoadmapSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import {
    ArrowRight, CheckCircle2, Globe, Award,
    User, Mail, Phone, Clock, Wallet, ShieldCheck, Star, Quote,
    Users, ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Import Images
import germanyImg from "@/assets/destination-germany.jpg";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { submitLead } from "@/lib/api";
import polandImg from "@/assets/destination-poland.jpg";
import czechImg from "@/assets/destination-czech.jpg";
import franceImg from "@/assets/france.jpg";
import romaniaImg from "@/assets/destination-romania.jpg";
import azerbaijanImg from "@/assets/a3.png";
import kazakhstanImg from "@/assets/a2 (1).png";
import armeniaImg from "@/assets/a4.png";
import belgiumArrivalImg from "@/assets/belgium/arrival in brussels.jpeg";
import belgiumBrusselsTourImg from "@/assets/belgium/brussels city tour.jpeg";
import belgiumGhentBrugesImg from "@/assets/belgium/ghent & bruges (day trip).jpeg";
import belgiumAntwerpImg from "@/assets/belgium/antwerp.jpeg";
import belgiumDepartureImg from "@/assets/belgium/departure.jpeg";
import netherlandsArrivalImg from "@/assets/netherland/Arrival – Amsterdam.jpeg";
import netherlandsAmsterdamTourImg from "@/assets/netherland/Amsterdam City Tour.jpeg";
import netherlandsZaanseImg from "@/assets/netherland/Zaanse Schans & Volendam.jpg";
import netherlandsKeukenhofImg from "@/assets/netherland/Keukenhof : Haarlem (Seasonal).jpg";
import netherlandsRotterdamImg from "@/assets/netherland/Rotterdam.jpeg";
import netherlandsHagueImg from "@/assets/netherland/The Hague & Delft.jpg";
import netherlandsGiethoornImg from "@/assets/netherland/Giethoorn Day Trip.jpg";
import netherlandsDepartureImg from "@/assets/netherland/Departure.jpeg";
import georgiaImg from "@/assets/destination-georgia.png";
import kyrgyzstanImg from "@/assets/a1.png";
import uzbekistanImg from "@/assets/uzbekistan.jpg";
import uzbekistanCityImg from "@/assets/de (1).jpg";
import uzbekistanSamarkandImg from "@/assets/view-barcelona-from-palau-nacional-cloudy-sky-spain (1).jpg";
import uzbekistanTrainImg from "@/assets/beautiful-czech-passenger-train-with-carriages (1).jpg";
import uzbekistanBukharaImg from "@/assets/modern-arabic-style-building-blue-sky (1).jpg";
import DepartureImg from "@/assets/full-shot-couple-walking-with-baggage (1).jpg";
import russiaImg from "@/assets/russia.jpg";
import azerbaijanBakuImg from "@/assets/background-chinese-illumination-ancient-china (1).jpg";
import azerbaijanShahadagImg from "@/assets/64 (1).jpg";
import azerbaijanQubaImg from "@/assets/5c (1).jpg";
import azerbaijanShakiImg from "@/assets/shaki (1).jpg";
import azerbaijanAbsheronImg from "@/assets/towers-apsheron (1).jpg";
import azerbaijanGabalaImg from "@/assets/gabala (1).jpg";
import azerbaijanMountainImg from "@/assets/mountain.jpg";
import bakuCityTourImg from "@/assets/Baku city tour.jpg";
import panoramicTourImg from "@/assets/Panoramic tour.jpg";
import qubaTourImg from "@/assets/Quba tour.avif";
import kazakhstanAlmatyImg from "@/assets/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan (1).jpg";
import kazakhstanShymbulak from "@/assets/b5 (1).jpg";
import kazakhstanCanyonImg from "@/assets/image1 (1).jpg";
import kazakhstanMoonCanyonImg from "@/assets/getlstd-property-photo (1).jpg";
import kazakhstanKokImg from "@/assets/Kok-Tobe-Mountain-Almaty (1).jpg";
import kazakhstanAlmarasanImg from "@/assets/images (1).jpg";
import kyrgyzstanHotelImg from "@/assets/images (2) (1).jpg";
import kyrgyzstanChunkImg from "@/assets/chunkurchak-valley-is (1).jpg";
import kyrgyzstanAlarchaImg from "@/assets/fa (1).jpg";
import georgiaTbilisiImg from "@/assets/Untitled design (47).jpg";
import georgiaGudauriImg from "@/assets/e9 (1).jpg";
import georgiaKazbegiImg from "@/assets/dd (1).jpg";
import georgiaGoriImg from "@/assets/uflistsikhe_w_h.jpg";
import georgiaKutaisiImg from "@/assets/kutaisi-georgia-travel-photo-20240912141135261-main-image (1).jpg";
import georgiaBakurianiImg from "@/assets/a0 (1).jpg";
import russiaPetersburgImg from "@/assets/Petersburg.jpg";
import russiaHermitagemuseumImg from "@/assets/Hermitage Museum.jpg";
import russiaPeterhofGrandPalaceImg from "@/assets/PeterhofGrandPalace.jpg";
import russiaPetersburgCityImg from "@/assets/st-petersburg-gezi-rehberi (1).jpg";
import russiaPetersburgHiddenImg from "@/assets/1e_edited (1).jpg";
import russiaPetersburgCapitalImg from "@/assets/St-Petersburg-2.1 (1).jpg";
import ArmeniaYerevanImg from "@/assets/651289 (1).jpg";
import ArmeniaMountainImg from "@/assets/454566 (1).jpg";
import ArmeniaAdventureImg from "@/assets/325293 (1).jpg";
import ArmeniaHeritageImg from "@/assets/1.-Geghard-Monastery-Armenia (1).jpg";
import ArmeniaCultureImg from "@/assets/651289 (1).jpg";
import ArmeniaHighlightImg from "@/assets/activity_904-1600-650-20231003142518 (1) (1).jpg";
interface CountryData {
    title: string;
    name: string;
    tagline: string
    image: string;
    description: string;
    stats: { price: string; duration: string; visa: string };
    whyChoose: { title: string; description: string }[];
    eligibility: string[];
    benefits: { title: string; description: string }[];
    process: { step: number; title: string; description: string }[];
    testimonials: { name: string; role: string; content: string; location: string }[];
    faqs: { question: string; answer: string }[];
    itinerary?: { day: number; title: string; description?: string; image?: string }[];
}

const countryData: Record<string, CountryData> = {

    france: {
        title: "France Heritage & Romance",
        name: "France",
        tagline: "Art, Culture & Cuisine",
        image: franceImg,
        description: "France offers a perfect blend of romance, culture, and world class experiences from iconic landmarks in Paris to charming villages and stunning coastlines. With rich history, legendary cuisine, and timeless art, it’s a destination that never goes out of style.",
        stats: { price: "€1,250", duration: "8 Days", visa: "Schengen Visa" },
        whyChoose: [
            { title: "Eiffel Tower Visit", description: "Iconic landmark of Paris." },
            { title: "Louvre Museum", description: "Home to the Mona Lisa." },
            { title: "Palace of Versailles", description: "Royal opulence and gardens." },
            { title: "Seine River Cruise", description: "Romantic evening boat ride." },
            { title: "French Cuisine", description: "Gourmet dining experiences." },
            { title: "Riviera Beaches", description: "Sun and style in the south." }
        ],
        eligibility: ["Valid Passport", "Schengen Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds Proof"],
        benefits: [
            { title: "Central Hotels", description: "Stay near major attractions." },
            { title: "Daily Breakfast", description: "Croissants and coffee included." },
            { title: "Entry Tickets", description: "Skip-the-line entry to museums and attractions." },
            { title: "Private Transfers", description: "Comfortable travel." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." },
            { title: "Value & Transparency", description: "No hidden costs—what you see is what you pay." }
        ],
        process: [
            { step: 1, title: "Inquire", description: "Select dates." },
            { step: 2, title: "Plan", description: "Customize itinerary." },
            { step: 3, title: "Book", description: "Secure spot." },
            { step: 4, title: "Visa", description: "Application support." },
            { step: 5, title: "Fly", description: "Arrive in Paris." },
            { step: 6, title: "Enjoy", description: "Bon voyage!" }
        ],
        itinerary: [
            { day: 1, title: "Arrival – Paris", description: "Arrival in the historic capital of France, known for its rich heritage, art, and iconic landmarks.", image: franceImg },
            { day: 2, title: "Paris City Tour", description: "Explore the Eiffel Tower, Arc de Triomphe, and Champs-Élysées — symbols of France's architectural and revolutionary history. Enjoy a Seine River Cruise past historic monuments.", image: czechImg },
            { day: 3, title: "Louvre – Montmartre", description: "Visit the Louvre Museum, once a royal palace and now the world's largest art museum. Explore Montmartre, the historic artists' quarter, and Sacré-Cœur Basilica.", image: polandImg },
            { day: 4, title: "Versailles Excursion", description: "Discover the Palace of Versailles, the grand residence of French kings and a key site of the French Revolution.", image: germanyImg },
            { day: 5, title: "Paris – Nice (French Riviera)", description: "Travel to Nice, a historic Mediterranean city known for its Italian influence and Belle Époque charm.", image: romaniaImg },
            { day: 6, title: "Monaco – Cannes", description: "Visit Monaco, famous for its royal Grimaldi family and Monte Carlo Casino. Explore Cannes, home of the prestigious International Film Festival.", image: franceImg },
            { day: 7, title: "Provence / Leisure", description: "Explore Provence's historic villages known for Roman ruins, lavender fields, and medieval architecture, or enjoy leisure time in Nice.", image: czechImg },
            { day: 8, title: "Departure", description: "Airport transfer with memories of France's rich cultural and historical heritage.", image: DepartureImg }
        ],
        testimonials: [
            { name: "Sophie M.", role: "Couple", content: "Paris was a dream come true.", location: "Paris" },
            { name: "James L.", role: "History Buff", content: "Versailles is breathtaking.", location: "Versailles" }
        ],
        faqs: [
            { question: "Do I need a visa to visit France?", answer: "If you’re from a Schengen visa-free country, you can enter without a visa for short stays. Others need a Schengen tourist visa." },
            { question: "Is France safe for tourists?", answer: "Yes. France is generally safe for visitors, especially in major tourist areas. As in any big destination, basic precautions against pickpocketing are advised." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ]
    },
    belgium: {
        title: "Belgium - Heritage & Culture",
        name: "Belgium",
        tagline: "Brussels, Bruges & Beyond",
        image: belgiumArrivalImg,
        description: "Belgium is a historic crossroads of Europe, where medieval cities, world-famous chocolate, and EU institutions meet. From the Grand Place in Brussels to the canals of Bruges and Ghent, discover a land of rich heritage, art, and culinary excellence.",
        stats: { price: "€1,150", duration: "5 Days", visa: "Schengen Visa" },
        whyChoose: [
            { title: "Grand Place Brussels", description: "UNESCO-listed medieval square." },
            { title: "Bruges & Ghent", description: "Canals, castles, and historic centers." },
            { title: "Antwerp", description: "Diamond trade and Gothic architecture." },
            { title: "Belgian Chocolate", description: "World-renowned chocolate heritage." }
        ],
        eligibility: ["Valid Passport", "Schengen Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds Proof"],
        benefits: [
            { title: "Central Hotels", description: "Stay in prime city locations." },
            { title: "Daily Breakfast", description: "Start each day with a Belgian breakfast." },
            { title: "Entry Tickets", description: "Access to major attractions included." },
            { title: "Private Transfers", description: "Comfortable travel between cities." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." },
            { title: "Value & Transparency", description: "No hidden costs—what you see is what you pay." }
        ],
        process: [
            { step: 1, title: "Inquire", description: "Share your travel dates." },
            { step: 2, title: "Customize", description: "Tailor your Belgian experience." },
            { step: 3, title: "Book", description: "Secure your package." },
            { step: 4, title: "Visa", description: "Schengen assistance." },
            { step: 5, title: "Arrive", description: "Welcome to Brussels." },
            { step: 6, title: "Discover", description: "Enjoy Belgian charm." }
        ],
        testimonials: [
            { name: "Lisa M.", role: "Traveler", content: "Bruges is magical. Perfect trip.", location: "Bruges" },
            { name: "Thomas K.", role: "Foodie", content: "Best chocolate and waffles ever.", location: "Brussels" }
        ],
        faqs: [
            { question: "Do I need a visa for Belgium?", answer: "Travelers from non-visa-exempt countries need a Schengen Visa. We provide full assistance with your application documentation." },
            { question: "Is Belgium safe for tourists?", answer: "Yes. Belgium is generally safe for visitors, especially in major tourist areas. Standard precautions apply." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "Arrival in Brussels", description: "Brussels, founded in the 10th century, grew as a major medieval trading center and is now the capital of Belgium and the European Union, known for its rich heritage and iconic Grand Place.", image: belgiumArrivalImg },
            { day: 2, title: "Brussels City Tour", description: "Brussels is a historic royal city that later became the political center of Europe, home to the Belgian monarchy and EU institutions.", image: belgiumBrusselsTourImg },
            { day: 3, title: "Ghent & Bruges (Day Trip)", description: "Ghent and Bruges flourished as wealthy medieval trading cities, famous for their canals, castles, and well-preserved historic centers.", image: belgiumGhentBrugesImg },
            { day: 4, title: "Antwerp", description: "Antwerp is a historic trading city, famous for its diamond trade, art heritage, and Gothic architecture.", image: belgiumAntwerpImg },
            { day: 5, title: "Departure", description: "Belgium's central location has long made it a key gateway for travel, trade, and cultural exchange in Europe.", image: belgiumDepartureImg }
        ]
    },
    azerbaijan: {
        title: "Azerbaijan - Land of Fire",
        name: "Azerbaijan",
        tagline: "Where East Meets West",
        image: azerbaijanImg,
        description: "Azerbaijan blends ancient heritage with modern flair where Silk Road history meets futuristic Baku. From dramatic Caucasus landscapes to warm hospitality, it offers rich culture, unique cuisine, and great value for unforgettable travel experiences.",
        stats: { price: "$650", duration: "9 Days", visa: "E-Visa" },
        whyChoose: [
            { title: "Expert Local Knowledge", description: "Deep insights into local culture and hidden gems." },
            { title: "Tailor-Made Itineraries", description: "Custom travel plans designed for your pace." },
            { title: "Premium Comfort & Safety", description: "Handpicked 4-star hotels and private premium vehicles." },
            { title: "24/7 Dedicated Support", description: "Full assistance from visa to on-ground coordination." }
        ],
        eligibility: ["Valid Passport", "E-Visa (3 days)", "Flight Ticket", "Hotel Voucher", "Vaccine Cert (if any)", "Funds Proof"],
        benefits: [
            { title: "Comfortable Stay", description: "Premium luxury budget stay with daily breakfast." },
            { title: "Private Transportation", description: "Dedicated private vehicle for all your travels." },
            { title: "Scenic Road Trips", description: "Curated sightseeing and beautiful road trip experiences." },
            { title: "Personal Assistance", description: "Dedicated support for a smooth travel experience." },
            { title: "Entry Tickets", description: "Entry to all mentioned parks and attractions." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." }
        ],
        process: [
            { step: 1, title: "Select", description: "Choose 4 or 5 day pack." },
            { step: 2, title: "Visa", description: "Apply online (easy)." },
            { step: 3, title: "Book", description: "Confirm flights." },
            { step: 4, title: "Pay", description: "Secure booking." },
            { step: 5, title: "Fly", description: "Arrival in Baku." },
            { step: 6, title: "Tour", description: "Airport pickup." }
        ],
        itinerary: [
            { day: 1, title: "Arrival & Panoramic Tour", description: "Arrival at Baku Airport, hotel transfer, and panoramic city sightseeing.", image: panoramicTourImg },
            { day: 2, title: "Baku City Tour", description: "Explore Baku highlights including Old City (Icherisheher), Maiden Tower, Flame Towers area, and major landmarks.", image: bakuCityTourImg },
            { day: 3, title: "Gabala Tour", description: "Travel to Gabala and visit scenic attractions and leisure spots.", image: azerbaijanGabalaImg },
            { day: 4, title: "Sheki Tour", description: "Visit the historic city of Sheki, including Sheki Khan's Palace and the old town.", image: azerbaijanShakiImg },
            { day: 5, title: "Tufandag & Shamakhi Tour", description: "Enjoy Tufandag Mountain Resort with cable car experience and visit Shamakhi attractions.", image: azerbaijanMountainImg },
            { day: 6, title: "Shahdag Tour", description: "Explore Shahdag resort area, known for mountain scenery and activities.", image: azerbaijanShahadagImg },
            { day: 7, title: "Quba Tour", description: "Visit Quba's countryside, mountains, and natural landscapes.", image: qubaTourImg },
            { day: 8, title: "Absheron & Gobustan Tour", description: "Explore Absheron Peninsula and Gobustan National Park with mud volcanoes and ancient rock carvings.", image: azerbaijanAbsheronImg },
            { day: 9, title: "Airport Transfer", description: "Hotel check-out and transfer to the airport for departure.", image: DepartureImg },
        ],
        testimonials: [
            { name: "Ahmed K.", role: "Tourist", content: "Baku is dazzling at night. Great service.", location: "Baku" },
            { name: "Sarah L.", role: "Traveler", content: "Very clean city and friendly people.", location: "Gabala" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Azerbaijan?", answer: "Yes, most travelers can easily apply for an e-visa online before travel. The process is quick and simple." },
            { question: "Is Azerbaijan safe for tourists?", answer: "Yes. Azerbaijan is considered a safe country for visitors, especially in major cities like Baku, with friendly locals and good public security." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ]
    },
    kazakhstan: {
        title: "Kazakhstan Nature Tour",
        name: "Kazakhstan",
        tagline: "Mountains, Lakes & Canyons",
        image: kazakhstanImg,
        description: "Kazakhstan offers vast natural beauty and modern cities in one journey from the endless steppes and alpine lakes to the futuristic skyline of Astana. Rich nomadic culture, warm hospitality, and great value make it a unique destination for travelers seeking something truly different.",
        stats: { price: "$850", duration: "7 Days", visa: "Visa Free/E-Visa" },
        whyChoose: [
            { title: "Expert Local Guides", description: "Learn more with our professional English-speaking guides." },
            { title: "Private & Premium Travel", description: "Travel in comfort with private sedan vehicles." },
            { title: "Family-Friendly Planning", description: "Itineraries designed for both adults and children." },
            { title: "All-Inclusive Entry", description: "No hidden costs; all entry tickets pre-arranged." }
        ],
        eligibility: ["Valid Passport", "Visa Check", "Return Ticket", "Hotel Booking", "Funds", "Insurance"],
        benefits: [
            { title: "4-Star Hotel Stay", description: "Stay at Ozen Palace with daily breakfast." },
            { title: "Private Sedan Vehicle", description: "Dedicated car for all transfers and tours." },
            { title: "Entry Tickets", description: "Entry to all mentioned parks and attractions." },
            { title: "Full Cable Car Access", description: "Includes Shymbulak and Kok Tobe cable cars." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." },
            { title: "Value & Transparency", description: "No hidden costs—what you see is what you pay." }
        ],
        process: [
            { step: 1, title: "Inquire", description: "Check seasonality." },
            { step: 2, title: "Plan", description: "City or Nature focus?" },
            { step: 3, title: "Book", description: "Reserve dates." },
            { step: 4, title: "Visa", description: "If required." },
            { step: 5, title: "Fly", description: "Almaty Airport." },
            { step: 6, title: "Explore", description: "Start adventure." }
        ],
        testimonials: [
            { name: "David R.", role: "Hiker", content: "The lakes are unreal. Amazing trip.", location: "Almaty" },
            { name: "Maria S.", role: "Family", content: "Shymbulak was great for kids.", location: "Astana" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Kazakhstan?", answer: "Many nationalities can enter visa-free for short stays. Others can apply online for an e-visa. Always verify your eligibility before travel." },
            { question: "Is Kazakhstan safe for tourists?", answer: "Yes. Major cities like Almaty and Astana are generally safe, with good infrastructure and helpful locals." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "Arrival in Almaty", description: "Arrival at Almaty Airport and transfer to the hotel. Check-in and rest.", image: kazakhstanAlmatyImg },
            { day: 2, title: "Shymbulak & Arbat Street Tour", description: "Visit Shymbulak Mountain Resort by cable car and enjoy leisure time. Evening walk at Arbat Street.", image: kazakhstanShymbulak },
            { day: 3, title: "Charyn Canyon – Kolsai Lake – Black Canyon", description: "Full-day tour covering Charyn Canyon, scenic Kolsai Lake, and the unique Black Canyon.", image: kazakhstanCanyonImg },
            { day: 4, title: "Moon Canyon & Kaindy Lake", description: "Explore the surreal Moon Canyon followed by a visit to the famous sunken Kaindy Lake.", image: kazakhstanMoonCanyonImg },
            { day: 5, title: "Almaty City Tour & Kok-Tobe Hill", description: "City tour covering major attractions and cable car ride to Kok-Tobe Hill for panoramic views.", image: kazakhstanKokImg },
            { day: 6, title: "Almarasan & Ayusai", description: "Visit Almarasan Gorge and Ayusai Waterfall, enjoying nature and mountain scenery.", image: kazakhstanAlmarasanImg },
            { day: 7, title: "Airport Transfer", description: "Hotel check-out and transfer to the airport for departure.", image: DepartureImg }
        ]
    },
    armenia: {
        title: "Armenia Cultural Tour",
        name: "Armenia",
        tagline: "The First Christian Nation",
        image: armeniaImg,
        description: "Armenia is a land of timeless history and heartfelt hospitality, where ancient monasteries meet breathtaking mountain landscapes. With rich culture, soulful cuisine, and deep traditions, it offers an authentic and meaningful travel experience beyond the usual tourist trails.",
        stats: { price: "$700", duration: "6 Days", visa: "Visa on Arrival" },
        whyChoose: [
            { title: "Yerevan City Tour", description: "Visit the pink city." },
            { title: "Lake Sevan", description: "The jewel of Armenia." },
            { title: "Garni Temple", description: "Ancient Hellenistic temple." },
            { title: "Geghard Monastery", description: "Cave monastery architecture." },
            { title: "Brandy Tasting", description: "Legendary Armenian spirits." },
            { title: "Cable Car Ride", description: "World's longest cable car." }
        ],
        eligibility: ["Valid Passport", "Visa on Arrival", "Ticket", "Accommodation", "Funds", "Travel Plan"],
        benefits: [
            { title: "Central Hotel", description: "Stay near major attractions." },
            { title: "Breakfast Daily", description: "Complimentary morning meal." },
            { title: "Private Tour", description: "Exclusive experience for your group." },
            { title: "Tasting Sessions", description: "Sample local delicacies." },
            { title: "Entry Tickets", description: "Entry to all museums and sites included." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." }
        ],
        process: [
            { step: 1, title: "Choose", description: "Select package." },
            { step: 2, title: "Custom", description: "Add day trips." },
            { step: 3, title: "Book", description: "Pay advance." },
            { step: 4, title: "Fly", description: "Direct flights available." },
            { step: 5, title: "Visa", description: "Get at airport." },
            { step: 6, title: "Tour", description: "Meet driver." }
        ],
        testimonials: [
            { name: "Elena P.", role: "Tourist", content: "The monasteries are magnificent.", location: "Yerevan" },
            { name: "Mark T.", role: "Foodie", content: "Best bread and wine ever.", location: "Dilijan" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Armenia?", answer: "Many travelers can enter visa-free or get a visa on arrival / e-visa depending on nationality. Check eligibility before you go." },
            { question: "Is Armenia safe for tourists?", answer: "Yes. Armenia is considered very safe, with friendly locals and low crime rates, especially in Yerevan and tourist areas." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "Yerevan City Tour", description: "", image: ArmeniaYerevanImg },
            { day: 2, title: "Nature & Mountain Escape", description: "", image: ArmeniaMountainImg },
            { day: 3, title: "Culture & Adventure", description: "", image: ArmeniaAdventureImg },
            { day: 4, title: "Heritage Exploration", description: "", image: ArmeniaHeritageImg },
            { day: 5, title: "Cultural Highlights (Alternative Day)", description: "", image: ArmeniaHighlightImg },
            { day: 6, title: "Airport Drop", description: "", image: DepartureImg }
        ]
    },
    kyrgyzstan: {
        title: "Kyrgyzstan Exclusive 5-Day Tour",
        name: "Kyrgyzstan",
        tagline: "3 Nights / 4 Days - The Nomadic Spirit",
        image: kyrgyzstanImg,
        description: "Kyrgyzstan is a paradise for nature lovers, offering dramatic mountains, crystal clear alpine lakes, and vast open landscapes. With its strong nomadic culture, warm hospitality, and peaceful atmosphere, it’s perfect for travelers seeking adventure and authenticity off the beaten path.",
        stats: { price: "$1,210", duration: "4 Days", visa: "E-Visa" },
        whyChoose: [
            { title: "Expert Multi-lingual Guides", description: "Professional Arabic or English-speaking drivers for your trip." },
            { title: "Private Group Travel", description: "Exclusive travel in a private minivan for your group." },
            { title: "Curated Alpine Tours", description: "Handpicked tours to Chunkhurchak, Ala-Archa, and Alameddin." },
            { title: "Hassle-Free Planning", description: "Full-day tours with pre-arranged transfers and hotel stays." }
        ],
        eligibility: [
            "Travel Date: 02 NOV 2025",
            "Group Size: 5 PAX",
            "Valid Passport",
            "E-Visa Confirmation",
            "Standard DBL + Triple Room",
            "Return Ticket"
        ],
        benefits: [
            { title: "Premium Hotel Stay", description: "Comfortable hotel stays with early check-in options." },
            { title: "Private Minivan", description: "Private minivan for all your sightseeing and transfers." },
            { title: "Airport Transfers", description: "Private pick-up and drop-off at the airport included." },
            { title: "Daily Breakfast", description: "Delicious breakfast provided at the hotel every morning." },
            { title: "Entry Tickets", description: "Entry to all mentioned parks and attractions." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." }
        ],
        process: [
            { step: 1, title: "Day 1", description: "Arrival & Transfer to Bishkek Hotel." },
            { step: 2, title: "Day 2", description: "Chunkhurchank Tour (10 AM - 6 PM)." },
            { step: 3, title: "Day 3", description: "Ala-Archa National Park Tour." },
            { step: 4, title: "Day 4", description: "Alameddin Gorge Tour." },
            { step: 5, title: "Day 5", description: "Transfer to Airport for Departure." },
            { step: 6, title: "Book", description: "Check availability now." }
        ],
        testimonials: [
            { name: "Ahmed A.", role: "Group Leader", content: "Great tailored experience for our group.", location: "UAE" },
            { name: "Sarah K.", role: "Traveler", content: "The driver was excellent and the mountains stunning.", location: "UK" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Kyrgyzstan?", answer: "Many nationalities can enter visa-free for 30–60 days. Others can apply for an e-visa online. Always confirm based on your passport." },
            { question: "Is Kyrgyzstan safe for tourists?", answer: "Yes. Kyrgyzstan is generally safe and peaceful, especially in Bishkek and popular tourist regions. Locals are known for warm hospitality." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "TRANSFER TO BISHKEK HOTEL", description: "", image: kyrgyzstanHotelImg },
            { day: 2, title: "CHUNKHURCHANK TOUR", description: "", image: kyrgyzstanChunkImg },
            { day: 3, title: "ALA-ARCHA TOUR", description: "", image: kyrgyzstanAlarchaImg },
            { day: 4, title: "TRANSFER TO AIRPORT", description: "", image: DepartureImg }
        ]
    },
    netherlands: {
        title: "Netherlands - Canals & Culture",
        name: "Netherlands",
        tagline: "Windmills, Art & Iconic Waterways",
        image: netherlandsArrivalImg,
        description: "Experience the Netherlands in its full glory from the UNESCO listed canals of Amsterdam to the historic windmills of Zaanse Schans. Immerse yourself in a land where artistic heritage meets modern innovation, featuring world-class museums, vibrant tulip fields, and a cycling culture that invites you to explore at your own pace.",
        stats: { price: "€1,250", duration: "8 Days", visa: "Schengen Visa" },
        whyChoose: [
            { title: "Canal Cruise Experience", description: "Navigate the iconic waterways of Amsterdam." },
            { title: "Zaanse Schans Windmills", description: "Step back in time to 18th-century Holland." },
            { title: "Rijksmuseum & Van Gogh", description: "Masterpieces of Dutch art and history." },
            { title: "Keukenhof Gardens", description: "The world's most beautiful spring garden." },
            { title: "Giethoorn Village", description: "The fairytale 'Venice of the North'." },
            { title: "Royal Delft Pottery", description: "Discover the iconic blue and white earthenware." }
        ],
        eligibility: ["Valid Passport", "Schengen Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds Proof"],
        benefits: [
            { title: "Central 4-Star Stays", description: "Accommodation in the heart of the city." },
            { title: "Daily Buffet Breakfast", description: "Start every day with a premium meal." },
            { title: "Unlimited Travel Card", description: "Access to tram, bus, and metro networks." },
            { title: "Entry Tickets", description: "Priorit entry to major art museums and attractions." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." },
            { title: "Value & Transparency", description: "No hidden costs—what you see is what you pay." }
        ],
        process: [
            { step: 1, title: "Inquire", description: "Share your travel dates." },
            { step: 2, title: "Customize", description: "Tailor your Dutch experience." },
            { step: 3, title: "Secure", description: "Book your package." },
            { step: 4, title: "Visa", description: "Assistance with Schengen." },
            { step: 5, title: "Arrive", description: "Welcome to Amsterdam." },
            { step: 6, title: "Discover", description: "Enjoy the Dutch charm." }
        ],
        testimonials: [
            { name: "Emma W.", role: "Art Lover", content: "The museums were breathtaking. Perfectly organized.", location: "The Hague" },
            { name: "Michael R.", role: "Photographer", content: "Giethoorn is a dream. Great itinerary.", location: "Giethoorn" }
        ],
        faqs: [
            { question: "Do I need a visa for the Netherlands?", answer: "Travelers from non-visa-exempt countries need a Schengen Visa. We provide full assistance with your application documentation." },
            { question: "Is English widely spoken?", answer: "Yes, the Netherlands has one of the highest English-proficiency rates in the world, making travel very easy." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "Arrival – Amsterdam", description: "Arrive in the capital city, known for its 17th-century Golden Age canals and rich maritime history.", image: netherlandsArrivalImg },
            { day: 2, title: "Amsterdam City Tour", description: "Explore Dam Square, Royal Palace, and historic canal houses. Visit world-famous museums reflecting Dutch art and history.", image: netherlandsAmsterdamTourImg },
            { day: 3, title: "Zaanse Schans & Volendam", description: "Discover traditional windmills and wooden houses at Zaanse Schans. Visit Volendam, a historic fishing village preserving Dutch heritage.", image: netherlandsZaanseImg },
            { day: 4, title: "Keukenhof / Haarlem (Seasonal)", description: "Spring visit to Keukenhof, showcasing the Netherlands' tulip-growing tradition, or explore Haarlem's medieval architecture and Grote Kerk.", image: netherlandsKeukenhofImg },
            { day: 5, title: "Rotterdam", description: "Explore Rotterdam, rebuilt after WWII, known for its modern architecture and Europe's largest port.", image: netherlandsRotterdamImg },
            { day: 6, title: "The Hague & Delft", description: "Visit The Hague, the political center of the Netherlands and home to the International Court of Justice. Explore Delft, famous for blue pottery and its royal connections.", image: netherlandsHagueImg },
            { day: 7, title: "Giethoorn Day Trip", description: "Visit Giethoorn, a peaceful canal village known as the 'Dutch Venice,' reflecting traditional rural Dutch life.", image: netherlandsGiethoornImg },
            { day: 8, title: "Departure", description: "Airport transfer with memories of Dutch art, history, and cultural heritage.", image: netherlandsDepartureImg }
        ]
    },
    russia: {
        title: "Russia - The Imperial Splendor",
        name: "Russia",
        tagline: "History, Art & Grandeur",
        image: russiaImg,
        description: "Discover the vast beauty of Russia, from the colorful onion domes of St. Basil's in Moscow to the imperial canals of St. Petersburg. A land of deep history, world class ballet, and architectural marvels, Russia offers a journey through the grandeur of tsars and the soul of the Slavic world.",
        stats: { price: "$1,150", duration: "10 Days", visa: "E-Visa/Consult" },
        whyChoose: [
            { title: "Red Square & Kremlin", description: "The historic heart of Moscow." },
            { title: "Hermitage Museum", description: "One of the world's largest art collections." },
            { title: "Peterhof Palace", description: "The 'Russian Versailles' with stunning fountains." },
            { title: "Moscow Metro Tour", description: "Underground palaces of architecture." },
            { title: "Bolshoi Theatre", description: "Home of the world's most famous ballet." },
            { title: "St. Petersburg Canals", description: "Cruise through the 'Venice of the North'." }
        ],
        eligibility: ["Valid Passport", "Russian Visa", "Travel Insurance", "Return Ticket", "Hotel Booking", "Funds Proof"],
        benefits: [
            { title: "Premium City Hotels", description: "Stay in top-rated central locations." },
            { title: "Sapsan Train Tickets", description: "High-speed train between Moscow & St. Pete." },
            { title: "Private Guided Tours", description: "English-speaking expert guides." },
            { title: "Theater Tickets", description: "Reservation assistance for shows." },
            { title: "Entry Tickets", description: "Tickets to major museums included." },
            { title: "Visa Assistance", description: "Invitation letter and application support." }
        ],
        process: [
            { step: 1, title: "Select", description: "Choose your cities." },
            { step: 2, title: "Visa", description: "Apply for entry." },
            { step: 3, title: "Book", description: "Confirm itinerary." },
            { step: 4, title: "Fly", description: "Arrival in Moscow." },
            { step: 5, title: "Explore", description: "Tour the capitals." },
            { step: 6, title: "Depart", description: "Safe styling." }
        ],
        testimonials: [
            { name: "John D.", role: "History Buff", content: "The Kremlin is awe-inspiring. A trip of a lifetime.", location: "Moscow" },
            { name: "Sarah P.", role: "Traveler", content: "St. Petersburg is simply magical. Great service.", location: "St. Petersburg" }
        ],
        faqs: [
            { question: "Do I need a visa for Russia?", answer: "Yes, most travelers require a visa. Electronic visas (E-visas) are available for citizens of many countries." },
            { question: "Is it safe to travel to Russia?", answer: "Yes, major tourist cities like Moscow and St. Petersburg are generally safe with high security, but standard travel precautions apply." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "Arrival – Moscow", description: "Arrival at Moscow Airport, transfer to hotel, check-in, and rest.", image: russiaImg },
            { day: 2, title: "Moscow City Tour", description: "Explore Red Square, Kremlin area, St. Basil's Cathedral, and major city landmarks.", image: russiaPeterhofGrandPalaceImg },
            { day: 3, title: "Sergiev Posad Excursion", description: "Visit Sergiev Posad, a historic town known for its monasteries and cultural heritage.", image: russiaPetersburgImg },
            { day: 4, title: "Moscow → St. Petersburg", description: "Transfer from Moscow to St. Petersburg by train. Hotel check-in and leisure time.", image: russiaPetersburgImg },
            { day: 5, title: "St. Petersburg – Hermitage & City Tour", description: "Visit the Hermitage Museum and explore major city attractions.", image: russiaHermitagemuseumImg },
            { day: 6, title: "St. Petersburg City Tour (Part 2)", description: "Continue sightseeing, covering palaces, cathedrals, and scenic streets.", image: russiaPetersburgCityImg },
            { day: 7, title: "Military Experience Tour", description: "Enjoy a unique military-themed experience and interactive activities.", image: russiaPetersburgHiddenImg },
            { day: 8, title: "Vyborg Tour", description: "Visit Vyborg, known for its medieval castle and European-style architecture.", image: russiaPetersburgCapitalImg },
            { day: 9, title: "Husky Park Tour", description: "Visit Husky Park to interact with huskies and enjoy nature activities.", image: russiaPeterhofGrandPalaceImg },
            { day: 10, title: "Airport Transfer", description: "Hotel check-out and transfer to the airport for departure.", image: DepartureImg }
        ]
    },
    georgia: {
        title: "Georgia - Jewel of Caucasus",
        name: "Georgia",
        tagline: "Wine, Mountains & History",
        image: georgiaImg,
        description: "Georgia is where ancient traditions meet stunning natural beauty from medieval towns and mountain valleys to world famous wine culture. Warm hospitality, rich history, and incredible food make it a soulful destination for travelers seeking authenticity and adventure.",
        stats: { price: "$600", duration: "7 Days", visa: "Visa on Arrival" },
        whyChoose: [
            { title: "Expert Local Insights", description: "Discover hidden gems in Tbilisi and Kazbegi with our knowledgeable guides." },
            { title: "Handpicked Stays", description: "Enjoy unique accommodations, from premium city hotels to cozy mountain cottages." },
            { title: "Seamless Adventures", description: "Experience iconic sites like the Dashbashi Glass Bridge with all logistics handled." },
            { title: "Reliable Support", description: "Dedicated assistance throughout your journey for a stress-free travel experience." }
        ],
        eligibility: ["Valid Passport", "Visa Check", "Ticket", "Hotel", "Funds", "Insurance"],
        benefits: [
            { title: "Premium Accommodations", description: "Comfortable stays in top-rated hotels and cottages." },
            { title: "Private Guided Tours", description: "Full-day tours to Gudauri, Kazbegi, and Dashbashi." },
            { title: "Airport Transfers", description: "Private airport pick-up and drop-off included." },
            { title: "Scenic Mountain Travel", description: "Private transport along the Georgian Military Highway." },
            { title: "Entry Tickets", description: "Includes entry to Dashbashi Canyon and all sites." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." }
        ],
        process: [
            { step: 1, title: "Select", description: "Choose tour type." },
            { step: 2, title: "Confirm", description: "Dates & Pax." },
            { step: 3, title: "Book", description: "Advance payment." },
            { step: 4, title: "Fly", description: "Tbilisi arrival." },
            { step: 5, title: "Visa", description: "Document check." },
            { step: 6, title: "Enjoy", description: "Start exploring." }
        ],
        testimonials: [
            { name: "Chris B.", role: "Tourist", content: "The food is addictive. Loved the mountains.", location: "Tbilisi" },
            { name: "Anna K.", role: "Photographer", content: "Kazbegi is picture perfect.", location: "Kazbegi" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Georgia?", answer: "Many nationalities can enter visa-free for up to 1 year. Others can apply for an e-visa online. Always check your eligibility before travel." },
            { question: "Is Georgia safe for tourists?", answer: "Yes. Georgia is considered very safe, especially in cities like Tbilisi and Batumi, with friendly locals and good tourist support." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "Tbilisi City Tour", description: "Explore key attractions including Old Tbilisi, Narikala Fortress, Peace Bridge, Metekhi Church, and local markets.", image: georgiaTbilisiImg },
            { day: 2, title: "Gudauri Tour", description: "Travel to Gudauri via the scenic Georgian Military Highway, visiting Ananuri Fortress and enjoying mountain views.", image: georgiaGudauriImg },
            { day: 3, title: "Kazbegi Tour", description: "Visit Kazbegi (Stepantsminda) and the iconic Gergeti Trinity Church with stunning Caucasus mountain scenery.", image: georgiaKazbegiImg },
            { day: 4, title: "Gori Tour", description: "Explore Gori, including Gori Fortress and key historical landmarks; optional visit to nearby attractions.", image: georgiaGoriImg },
            { day: 5, title: "Kutaisi Tour", description: "Discover Kutaisi highlights such as Bagrati Cathedral, Gelati Monastery, and local city sights.", image: georgiaKutaisiImg },
            { day: 6, title: "Bakuriani Tour", description: "Enjoy Bakuriani, a popular mountain resort known for nature walks, leisure activities, and relaxation.", image: georgiaBakurianiImg },
            { day: 7, title: "Airport Transfer", description: "Transfer to the airport for departure.", image: DepartureImg }
        ]
    },
    uzbekistan: {
        title: "Uzbekistan - Silk Road Jewel",
        name: "Uzbekistan",
        tagline: "Samarkand, Bukhara & Tashkent",
        image: uzbekistanImg,
        description: "Uzbekistan is the heart of the Silk Road, home to breathtaking cities like Samarkand and Bukhara filled with timeless architecture and rich history. With vibrant culture, warm hospitality, and unforgettable flavors, it offers a journey into the soul of Central Asia.",
        stats: { price: "$900", duration: "8 Days", visa: "E-Visa" },
        whyChoose: [
            { title: "All-Inclusive Transport", description: "Private cars and Samarkand train tickets provided." },
            { title: "Expert Local Guides", description: "Professional English-speaking guides for every tour." },
            { title: "4-Star Comfort", description: "Premium 3-night hotel stays with breakfast included." },
            { title: "Diverse Itinerary", description: "A perfect mix of ancient history and mountain nature." }
        ],
        eligibility: ["Valid Passport", "E-Visa", "Return Flight", "Hotel Booking", "Funds", "Travel Insurance"],
        benefits: [
            { title: "4-Star Hotel", description: "3 nights stay with daily breakfast." },
            { title: "Private Car", description: "All ground transfers and city tours." },
            { title: "Express Train", description: "Round-trip tickets to Samarkand." },
            { title: "Pro Guide", description: "Dedicated English-speaking guide/driver." },
            { title: "Entry Tickets", description: "Entry to all mentioned parks and attractions." },
            { title: "Visa Assistance", description: "Full support with visa applications and documentation." }
        ],
        process: [
            { step: 1, title: "Day 1", description: "Airport Transfer + Panoramic City Tour." },
            { step: 2, title: "Day 2", description: "Tashkent / Chimgan Mountains / Charvak Lake Excursion." },
            { step: 3, title: "Day 3", description: "Tashkent / Samarkand (by Train)." },
            { step: 4, title: "Day 4", description: "Samarkand / Bukhara (by Bullet Train/Coach)." },
            { step: 5, title: "Day 5", description: "Bukhara / Tashkent." },
            { step: 6, title: "Day 6", description: "Departure from Tashkent." }
        ],
        testimonials: [
            { name: "Kevin L.", role: "Historian", content: "Samarkand exceeded expectations.", location: "Samarkand" },
            { name: "Fatima R.", role: "Traveler", content: "Beautiful architecture.", location: "Bukhara" }
        ],
        faqs: [
            { question: "Do I need a visa to visit Uzbekistan?", answer: "Many nationalities can enter visa-free for short stays. Others can apply for a quick e-visa online. Always check current rules for your passport." },
            { question: "Is Uzbekistan safe for tourists?", answer: "Yes. Uzbekistan is considered very safe, especially in tourist cities like Tashkent, Samarkand, and Bukhara, with welcoming locals." },
            { question: "Do you provide emergency support?", answer: "Yes, we offer 24/7 emergency assistance for all our travelers throughout their journey." }
        ],
        itinerary: [
            { day: 1, title: "Arrival in Tashkent", description: "Arrival at Tashkent International Airport. Meet & greet by guide. Private transfer to hotel & early check-in (subject to availability). Rest time. Evening visit to Magic City Park or Tashkent City Park. Overnight in Tashkent.", image: uzbekistanCityImg },
            { day: 2, title: "Tashkent City Tour", description: "Breakfast at hotel. Full-day city tour including Khast Imam Complex, Barak Khan Madrasa, Chorsu Bazaar, Independence Square, Amir Timur Square, and Tashkent Metro Tour. Free time for shopping at Samarkand Darvoza Mall. Overnight in Tashkent.", image: uzbekistanSamarkandImg },
            { day: 3, title: "Tashkent – Bukhara (By Train)", description: "Breakfast at hotel. Transfer to railway station. High-speed train to Bukhara (approx. 4 hrs). Arrival & hotel transfer. Evening walking tour at Lyabi-Hauz Complex and Old City area. Overnight in Bukhara.", image: uzbekistanTrainImg },
            { day: 4, title: "Bukhara City Tour", description: "Breakfast at hotel. Full-day sightseeing: Ark Fortress, Bolo Hauz Mosque, Poi Kalon Complex (Kalon Minaret & Mosque), Miri Arab Madrasa, Trading Domes, and Chor Minor. Free time for shopping traditional handicrafts. Overnight in Bukhara.", image: uzbekistanBukharaImg },
            { day: 5, title: "Bukhara – Samarkand (By Train)", description: "Breakfast at hotel. Transfer to railway station. Train to Samarkand (approx. 2 hrs). Arrival & hotel transfer. Evening visit to Registan Square (illuminated view). Overnight in Samarkand.", image: uzbekistanBukharaImg },
            { day: 6, title: "Samarkand City Tour", description: "Breakfast at hotel. Full-day sightseeing: Registan Square, Gur-e-Amir Mausoleum, Bibi Khanum Mosque, Siab Bazaar, Shah-i-Zinda Complex, and Ulugh Beg Observatory. Overnight in Samarkand.", image: uzbekistanSamarkandImg },
            { day: 7, title: "Samarkand – Tashkent (By Train)", description: "Breakfast at hotel. Free morning for leisure. Transfer to railway station. High-speed train to Tashkent. Arrival & hotel transfer. Overnight in Tashkent.", image: uzbekistanCityImg },
            { day: 8, title: "Departure", description: "Breakfast at hotel. Check-out. Transfer to airport for departure.", image: DepartureImg }
        ]
    }
}

const CountryPage = () => {
    const { country } = useParams();
    const [data, setData] = useState<CountryData | null>(null);
    const [date, setDate] = useState<Date>();
    const [isWhatsAppSame, setIsWhatsAppSame] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        adults: "1",
        kids: "0",
        destination: (country && countryData[country]) ? countryData[country].name : "",
        hotelCategory: "Standard",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Manual validation
        if (!formData.name || !formData.name.trim()) {
            toast({ variant: "destructive", title: "Missing Information", description: "Please enter your name." });
            return;
        }
        if (!formData.phone || !formData.phone.trim()) {
            toast({ variant: "destructive", title: "Missing Information", description: "Please enter your phone number." });
            return;
        }

        setIsSubmitting(true);

        const result = await submitLead({
            name: formData.name,
            phone: formData.phone,
            whatsapp_number: formData.phone,
            is_whatsapp_same: isWhatsAppSame,
            adults: formData.adults,
            kids: formData.kids,
            travel_date: date ? format(date, "yyyy-MM-dd") : undefined,
            destination: formData.destination || data?.name || country,
            hotel_category: formData.hotelCategory,
            form_type: "Country Page Inline Form",
        });

        if (result.status === "success") {
            toast({
                title: "Inquiry Received!",
                description: "We will contact you shortly.",
            });
            setFormData({
                name: "",
                phone: "",
                adults: "1",
                kids: "0",
                destination: data?.name || (country && countryData[country]?.name) || "",
                hotelCategory: "Standard"
            });
            setDate(undefined);
            setIsWhatsAppSame(true);
        } else {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: result.message || "Please try again later.",
            });
        }
        setIsSubmitting(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (country && countryData[country]) {
            const countryInfo = countryData[country];
            setData(countryInfo);
            setFormData(prev => ({ ...prev, destination: countryInfo.name }));
        } else {
            setData(null);
        }
    }, [country]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Country data not found.</p>
                <Link to="/" className="ml-4 text-primary underline">Go Home</Link>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="bg-[#faf4e5]">


                {/* --- 1. Hero Section --- */}
                <CountryHero
                    image={data.image}
                    name={data.name}
                    tagline={data.tagline}
                    stats={data.stats}
                />

                {/* --- 2. Original Hero (Now Secondary Overview) --- */}


                {/* --- 2. Overview & Why Choose (Why choose this country) - Premium Redesign --- */}
                <section className="py-10 md:py-20 bg-[#faf4e5] relative overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4]" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="container-wide relative z-10 px-4 sm:px-6">
                        <RevealOnScroll animation="fade-up">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                                {/* Content Column */}
                                <div className="order-2 lg:order-1 relative">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-black border border-black/10 mb-6">
                                        <Globe className="w-3.5 h-3.5" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Tour Overview</span>
                                    </div>

                                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary leading-[1.1]">
                                        Experience the <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-600 italic">Unforgettable</span> in {data.name}
                                    </h2>

                                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl border-l-2 border-gold/30 pl-6">
                                        {data.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        {/* Premium Button Match */}
                                        <a
                                            href="#booking-form"
                                            className="group relative px-8 py-4 bg-primary text-white rounded-xl overflow-hidden shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                                        >
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                            <span className="font-bold relative z-10">Check Availability</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10 text-gold" />
                                        </a>

                                        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                            <div className="w-8 h-8 rounded-full bg-[#FF7700]/10 flex items-center justify-center text-[#FF7700]">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <span className="max-w-[150px] leading-tight">Best Price Guarantee & Verified Tours</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Cards Grid - Elegant Layout */}
                                <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-5">
                                    {data.whyChoose.slice(0, 4).map((reason, i) => (
                                        <div
                                            key={i}
                                            className={`group p-8 rounded-[2rem] border transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col justify-between h-full relative overflow-hidden
                                                ${i === 1 || i === 2 ? 'bg-primary text-white border-transparent' : 'bg-white border-gray-100 hover:border-gold/30'}
                                                ${i === 1 ? 'sm:translate-y-8' : ''}
                                                ${i === 2 ? 'sm:-translate-y-8' : ''}
                                            `}
                                        >
                                            {/* Decorative Corner for dark cards */}
                                            {(i === 1 || i === 2) && (
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-[4rem] pointer-events-none" />
                                            )}

                                            <div className="mb-4 relative z-10">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-sm
                                                    ${i === 1 || i === 2 ? 'bg-white/10 text-gold backdrop-blur-sm' : 'bg-gold/10 text-gold'}
                                                `}>
                                                    <Award className="w-7 h-7" />
                                                </div>
                                                <h3 className={`font-heading text-xl font-bold mb-3 ${i === 1 || i === 2 ? 'text-white' : 'text-primary'}`}>{reason.title}</h3>
                                                <p className={`text-sm leading-relaxed ${i === 1 || i === 2 ? 'text-white/70' : 'text-muted-foreground'}`}>
                                                    {reason.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* --- 3. Roadmap Timeline (Itinerary) --- */}
                {data.itinerary && <RoadmapSection itinerary={data.itinerary} />}











                {/* --- 4.5. Benefits (What's Included) --- */}

                <ServicesPreview />



                {/* --- 4.6 Inquiry Form Section --- */}
                < section className="py-24 bg-[#faf4e5] relative overflow-hidden" id="booking-form" >
                    <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                    <div className="container-wide px-4 sm:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                            <div className="grid md:grid-cols-5 h-full">
                                {/* Form Side */}
                                <div className="md:col-span-3 p-8 md:p-10">
                                    <div className="mb-6">
                                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-1">Start Your Journey</h3>
                                        <p className="text-muted-foreground text-sm lg:text-base">Fill in the details below to get a custom quote for {data.name}.</p>
                                    </div>
                                    <form className="space-y-3.5" onSubmit={handleFormSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Enter your full name"
                                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-gray-700">Phone / WhatsApp</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 py-0.5 cursor-pointer group" onClick={() => setIsWhatsAppSame(!isWhatsAppSame)}>
                                            <div className={cn(
                                                "w-4.5 h-4.5 rounded flex items-center justify-center border transition-all",
                                                isWhatsAppSame ? "bg-orange-500 border-orange-500 text-white" : "bg-white border-gray-300"
                                            )}>
                                                {isWhatsAppSame && <CheckCircle2 className="w-3.5 h-3.5" />}
                                            </div>
                                            <span className="text-[13px] text-gray-700 font-medium select-none">WhatsApp Number (same as phone)</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-gray-700">Adults</label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={formData.adults}
                                                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-gray-700">Kids</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={formData.kids}
                                                    onChange={(e) => setFormData({ ...formData, kids: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-gray-700">Travel Date</label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full px-4 py-2.5 h-[42px] rounded-xl bg-gray-50 border border-gray-200 text-left font-normal justify-start hover:bg-gray-100 hover:text-black shadow-none text-sm",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? format(date, "PPP") : <span>Select date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                            className="rounded-xl border shadow-xl"
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-gray-700">Destination</label>
                                                <input
                                                    type="text"
                                                    readOnly
                                                    value={formData.destination}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-500 cursor-not-allowed outline-none transition-all text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-gray-700">Hotel Category <span className="text-gray-400 font-normal">(Optional)</span></label>
                                            <div className="relative">
                                                <select
                                                    value={formData.hotelCategory}
                                                    onChange={(e) => setFormData({ ...formData, hotelCategory: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none appearance-none transition-all text-sm"
                                                >
                                                    <option>Standard</option>
                                                    <option>Premium (4 Star)</option>
                                                    <option>Luxury (5 Star)</option>
                                                    <option>Cottage / Boutique</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full btn-primary py-3.5 text-base mt-2 shadow-lg shadow-primary/20 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Sending..." : "Request Detailed Itinerary"}
                                        </button>
                                    </form>
                                </div>
                                {/* Visual Side */}
                                <div className="md:col-span-2 bg-primary p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold mb-6 text-gold">Why Book With Us?</h4>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Best Price Guarantee</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">24/7 Expert Support</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Tailored Itineraries</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Europe based company</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Malayalee led</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Europe Calling based in Azerbaijan</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">Your Eurasian travel experts</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold"><CheckCircle2 className="w-4 h-4" /></div>
                                                <span className="text-sm text-white/80">10,000+ happy customers</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-12 relative z-10">
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Need Help?</p>
                                        <p className="text-2xl font-bold text-white">+994 51 973 70 56</p>
                                        <p className="text-white/60 text-sm">sales@europecalling.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* --- 6. FAQ Section --- */}
                <section className="py-24 bg-[#faf4e5]">
                    <div className="container-wide px-4 sm:px-6 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
                            <p className="text-muted-foreground">Everything you need to know about visiting {data.name}.</p>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {data.faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b border-black">
                                    <AccordionTrigger className="text-left font-bold text-lg text-[#FF7700] hover:text-black transition-colors py-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section >

                <DestinationBanner countryName={data.name} image={data.image} />



            </main >
            <Footer />
            <WhatsAppButton />
            <StickyEnquireButton initialDestination={data.name} />
        </>
    );
};

export default CountryPage;
