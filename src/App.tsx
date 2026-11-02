import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
//import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Candidature from "./pages/Candidature";
import PracticeAreas from "./pages/PracticeAreas";
import PracticeArea from "./pages/PracticeArea";
import Privacy from "./pages/Privacy";
import CookieConsent from "./components/CookieConsent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// The router is supplied by the entry point: BrowserRouter in the browser
// (main.tsx), StaticRouter when pages are prerendered (entry-server.tsx).
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/success-stories" element={<SuccessStories />} /> */}
          <Route path="/aree-di-pratica" element={<PracticeAreas />} />
          <Route path="/aree-di-pratica/:slug" element={<PracticeArea />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/contact" element={<Navigate to="/contatti" replace />} />
          <Route path="/candidature" element={<Candidature />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
