import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import MentorCTA from './components/MentorCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

import ContactModal from './components/ContactModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
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

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[200] h-1">
        <div
          className="h-full bg-gradient-to-r from-primary-light via-secondary-light to-accent-light transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero onOpenContact={openContactModal} />
        <Features />
        <HowItWorks />
        <MentorCTA onOpenContact={openContactModal} />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
      <FloatingWhatsApp />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
