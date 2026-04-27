import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold tracking-tight">
              Spoke <span className="text-primary-light dark:text-primary-dark">Up</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary-light transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary-light transition-colors">How it Works</a>
            <a href="#mentor" className="text-sm font-medium hover:text-primary-light transition-colors">Mentor</a>
            
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
            
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-sm hover:scale-105 transition-transform shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t-0"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">How it Works</a>
              <a href="#mentor" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">Mentor</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 block text-center px-5 py-3 rounded-xl bg-primary-light text-white font-medium shadow-md">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
