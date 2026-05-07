import React, { useState, Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Toaster } from 'react-hot-toast';
import ContactModal from '../components/ContactModal';
import KidsHero from '../components/kids/KidsHero';
import RegistrationModal from '../components/kids/RegistrationModal';

// Lazy load heavy sections
const KidsFeatures = lazy(() => import('../components/kids/KidsFeatures'));
const LevelPlacement = lazy(() => import('../components/kids/LevelPlacement'));
const ContinuationProgram = lazy(() => import('../components/kids/ContinuationProgram'));
const EmotionalBenefits = lazy(() => import('../components/kids/EmotionalBenefits'));
const TrustPromise = lazy(() => import('../components/kids/TrustPromise'));
const UpcomingBatches = lazy(() => import('../components/kids/UpcomingBatches'));
const KidsFAQ = lazy(() => import('../components/kids/KidsFAQ'));

// Loading skeleton/placeholder
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary-light border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ChildrenRegistration = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6MbHPArNHG--7FTrtENqrDYGw1MtwdaOzDJ_jFxCS8IDo-FbZwhPakWrK81ViLwquzw/exec";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-primary-light/30">
      <Toaster position="top-center" />
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      
      <main>
        <KidsHero onOpenRegistration={() => setIsRegistrationModalOpen(true)} />
        
        <Suspense fallback={<SectionLoader />}>
          <KidsFeatures />
          <LevelPlacement />
          <ContinuationProgram onOpenRegistration={() => setIsRegistrationModalOpen(true)} />
          <EmotionalBenefits />
          <TrustPromise />
          <UpcomingBatches onOpenRegistration={() => setIsRegistrationModalOpen(true)} />
          <KidsFAQ />
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />
      
      <RegistrationModal 
        isOpen={isRegistrationModalOpen} 
        onClose={() => setIsRegistrationModalOpen(false)} 
        scriptUrl={SCRIPT_URL}
      />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default ChildrenRegistration;
