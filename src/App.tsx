import { HashRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NewsPage } from "./pages/NewsPage";
import { EndorsementPage } from "./pages/EndorsementPage";
import { PrioritiesPage } from "./pages/PrioritiesPage";
import { VolunteerPage } from "./pages/VolunteerPage";
import { ShopPage } from "./pages/ShopPage";
import { ContactPage } from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";

function ScrollToTopAndListen() {
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // ✅ Smooth scroll to a section if hash exists (like #contact)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // tiny delay to ensure the element is mounted
      }
    }
  }, [location]);

  // Listen for custom navigation events (e.g. from volunteer link)
  useEffect(() => {
    const handleCustomNavigation = (event: CustomEvent) => {
      navigate(`/${event.detail}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("navigate", handleCustomNavigation as EventListener);
    return () => {
      window.removeEventListener("navigate", handleCustomNavigation as EventListener);
    };
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopAndListen />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/endorsements" element={<EndorsementPage />} />
          <Route path="/priorities" element={<PrioritiesPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </Layout>
    </Router>
  );
}
