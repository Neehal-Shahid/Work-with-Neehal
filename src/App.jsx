import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import BlobBackground from './components/BlobBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import useLenis from './hooks/useLenis';
import useCursorMagnetic from './hooks/useCursorMagnetic';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useLenis();
  useCursorMagnetic();

  return (
    <>
      <ScrollToTop />
      <BlobBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
