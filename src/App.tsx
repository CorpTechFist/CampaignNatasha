import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { EndorsementPage } from './pages/EndorsementPage';
import { PrioritiesPage } from './pages/PrioritiesPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { ShopPage } from './pages/ShopPage';
import { ContactPage } from './pages/ContactPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
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
