import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isChildrenRoute = location.pathname === '/children';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-200/20 dark:shadow-black/20 rounded-full px-6 py-3' : 'px-2'}`}>
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2.5 group">
            <img src="/favicon.svg" alt="SpokeUp Logo" className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-sm" />
            <span className="text-2xl md:text-[1.65rem] font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors">
              Spoke<span className="text-primary-light transition-colors group-hover:text-secondary-light">Up</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {!isChildrenRoute && (
              <>
                <a href="#features" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-light transition-colors">Features</a>
                <a href="#how-it-works" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-light transition-colors">Process</a>
              </>
            )}

            {/* Segmented Control for Route Switching */}
            <div className="flex bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50 ml-4">
              <Link 
                to="/"
                className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${!isChildrenRoute ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                Adults
              </Link>
              <Link 
                to="/children"
                className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${isChildrenRoute ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-md' : 'text-slate-500 hover:text-green-500 dark:hover:text-green-400'}`}
              >
                Kids (6-12)
              </Link>
            </div>
            
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
            
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                if(onOpenContact) onOpenContact();
              }}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Contact Us
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-6 flex flex-col space-y-4">
              {/* Mobile Segmented Control */}
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full mb-2">
                <Link 
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 text-center px-4 py-2.5 rounded-full text-sm font-bold transition-all ${!isChildrenRoute ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500'}`}
                >
                  Adults
                </Link>
                <Link 
                  to="/children"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex-1 text-center px-4 py-2.5 rounded-full text-sm font-bold transition-all ${isChildrenRoute ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-md' : 'text-slate-500'}`}
                >
                  Kids (6-12)
                </Link>
              </div>

              {!isChildrenRoute && (
                <div className="flex flex-col space-y-2">
                  <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-2xl text-base font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50">Features</a>
                  <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-2xl text-base font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50">Process</a>
                </div>
              )}

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if(onOpenContact) onOpenContact();
                }}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg shadow-lg w-full"
              >
                Contact Us
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
