import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiePolicy from "./pages/CookiePolicy";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articulos" element={<Articles />} />
            <Route path="/articulos/:slug" element={<ArticleDetail />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/recursos" element={<Resources />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos-uso" element={<TermsOfUse />} />
            <Route path="/politica-cookies" element={<CookiePolicy />} />
            <Route path="/gracias" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
