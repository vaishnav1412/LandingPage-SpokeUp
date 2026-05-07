import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TeamQuote from './components/TeamQuote';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
const ChildrenRegistration = React.lazy(() => import('./pages/ChildrenRegistration'));

import ContactModal from './components/ContactModal';
import AdultDemoModal from './components/AdultDemoModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAdultDemoModalOpen, setIsAdultDemoModalOpen] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
      return;
    }

    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openAdultDemoModal = () => setIsAdultDemoModalOpen(true);
  const closeAdultDemoModal = () => setIsAdultDemoModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
        {isLoading && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/95 text-white">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
              <p className="text-lg font-semibold">Loading SpokeUp...</p>
            </div>
          </div>
        )}
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-[200] h-1">
          <div
            className="h-full bg-gradient-to-r from-primary-light via-secondary-light to-accent-light transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onOpenContact={openContactModal} />
                <main>
                  <Hero onOpenContact={openAdultDemoModal} />
                  <TeamQuote />
                  <Features />
                  <HowItWorks onOpenContact={openAdultDemoModal} />
                  <FAQ />
                  <ContactForm />
                </main>
                <Footer />
                
                <ContactModal 
                  isOpen={isContactModalOpen} 
                  onClose={closeContactModal} 
                />
                <AdultDemoModal 
                  isOpen={isAdultDemoModalOpen} 
                  onClose={closeAdultDemoModal} 
                />
                <FloatingWhatsApp />
              </>
            } 
          />
          <Route 
            path="/children" 
            element={
              <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>}>
                <ChildrenRegistration darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </React.Suspense>
            } 
          />
        </Routes>

        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </Router>
  );
}

export default App;
