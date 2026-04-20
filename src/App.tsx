import { Routes, Route } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import NotFound from './pages/NotFound';
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout><Home /></PageLayout>} />
      <Route path="/services" element={<PageLayout><ServicesPage /></PageLayout>} />
      <Route path="/services/:slug" element={<PageLayout><ServiceDetail /></PageLayout>} />
      <Route path="/products" element={<PageLayout><ProductsPage /></PageLayout>} />
      <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
      <Route path="/technologies" element={<PageLayout><TechnologiesPage /></PageLayout>} />
      <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
      <Route path="/careers" element={<PageLayout><Careers /></PageLayout>} />
      <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
      <Route path="/case-studies" element={<PageLayout><CaseStudies /></PageLayout>} />
      <Route path="/privacy" element={<PageLayout><PrivacyPolicy /></PageLayout>} />
      <Route path="/terms" element={<PageLayout><TermsOfService /></PageLayout>} />
      <Route path="/cookies" element={<PageLayout><CookiePolicy /></PageLayout>} />
      <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
    </Routes>
  );
}
