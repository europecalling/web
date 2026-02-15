import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PageSkeleton } from "@/components/ui/PageSkeleton";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));

const Destinations = lazy(() => import("./pages/Destinations"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Newsroom = lazy(() => import("./pages/Newsroom"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const Contact = lazy(() => import("./pages/Contact"));
const CountryPage = lazy(() => import("./pages/CountryPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Gallery = lazy(() => import("./pages/Gallery"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));

const queryClient = new QueryClient();

import { ScrollToTop } from "@/components/layout/ScrollToTop";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />

            <Route path="/reviews" element={<Testimonials />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/newsroom/:slug" element={<NewsArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/destinations/:country" element={<CountryPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
