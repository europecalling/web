import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PageSkeleton } from "@/components/ui/PageSkeleton";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import { AdminRoute } from "@/components/admin/AdminRoute";

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
const MentorInsightsDocs = lazy(() => import("./pages/MentorInsightsDocs"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminGallery = lazy(() => import("./pages/admin/AdminGallery"));
const AdminIndex = lazy(() => import("./pages/admin/AdminIndex"));

const queryClient = new QueryClient();

import { ScrollToTop } from "@/components/layout/ScrollToTop";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AdminAuthProvider>
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
              <Route path="/docs/mentor-insights" element={<MentorInsightsDocs />} />
              <Route path="/admin" element={<Outlet />}>
                <Route index element={<AdminIndex />} />
                <Route path="login" element={<AdminLogin />} />
                <Route path="gallery" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
                  <Route index element={<AdminGallery />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AdminAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
