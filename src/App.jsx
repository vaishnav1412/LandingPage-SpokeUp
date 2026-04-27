import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import MentorCTA from './components/MentorCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import ContactModal from './components/ContactModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero onOpenContact={openContactModal} />
        <Features />
        <HowItWorks />
        <MentorCTA onOpenContact={openContactModal} />
        <ContactForm />
      </main>
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
