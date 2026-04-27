import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919995188888', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[90] flex items-center group">
      {/* Persistent Tooltip Hook */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mr-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-5 py-2.5 rounded-2xl text-sm font-black shadow-2xl border border-slate-200 dark:border-slate-800 hidden sm:block pointer-events-none relative"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping"></span>
          Chat on WhatsApp
        </span>
        {/* Triangle pointer */}
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-t border-r border-slate-200 dark:border-slate-800 rotate-45 rounded-sm"></div>
      </motion.div>

      <div className="relative">
        {/* Multiple Pulsing Rings */}
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#25D366] rounded-full blur-lg"
        />
        <motion.div 
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-0 bg-[#25D366] rounded-full blur-xl"
        />

        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWhatsApp}
          className="relative z-10 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center justify-center overflow-hidden group"
        >
          {/* Shimmer Light Effect */}
          <motion.div 
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
          
          <MessageCircle size={32} fill="currentColor" className="relative z-10" />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
