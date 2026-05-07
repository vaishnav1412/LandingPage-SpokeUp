import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Award } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';

const KidsHero = ({ onOpenRegistration }) => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
      <ParticleBackground />
      
      {/* Fun Abstract Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary-light/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          {/* Premium "Live" Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm mb-10 group"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-slate-800 dark:text-slate-200">
              Registration Open
            </span>
          </motion.div>

          {/* Special Launch Offer Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-accent-light/20 to-pink-500/10 backdrop-blur-md border border-accent-light/30 shadow-lg mb-8 group relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12"
            />
            <span className="text-2xl animate-bounce">🎁</span>
            <span className="text-base font-black tracking-tight text-slate-800 dark:text-white uppercase">
              Launching Offer: <span className="text-accent-light dark:text-accent-light text-2xl drop-shadow-[0_0_10px_rgba(251,113,133,0.4)]">95% OFF</span>
            </span>
            <div className="h-2 w-2 rounded-full bg-accent-light animate-pulse ml-1"></div>
          </motion.div>

          {/* Malayalam Caption */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 text-center"
          >
            <span className="text-[1.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">
             കുട്ടികൾ ഇനി ധൈര്യമായി ഇംഗ്ലീഷിൽ പറയും...
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight relative">
            <span className="relative inline-block">
              Fun & Interactive
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-12 text-4xl hidden md:block select-none pointer-events-none"
              >
                ✨
              </motion.div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-emerald-400 to-secondary-light relative inline-block mt-2">
              English For Kids
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-16 text-5xl hidden md:block select-none pointer-events-none"
              >
                🚀
              </motion.div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Starting in <span className="font-bold text-slate-800 dark:text-slate-200">12 days!</span> Secure your child's spot in our exclusive 1-on-1 English coaching program designed just for them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={onOpenRegistration}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-12 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-lg shadow-2xl hover:shadow-primary-light/30 transition-all overflow-hidden flex items-center gap-3 border border-white/10 dark:border-slate-200"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 tracking-tight">BOOK FREE DEMO</span> 
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Floating Feature Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              { icon: <Calendar className="w-5 h-5 text-primary-light" />, text: "Starts in 12 Days" },
              { icon: <Clock className="w-5 h-5 text-secondary-light" />, text: "Flexible Timing" },
              { icon: <Award className="w-5 h-5 text-accent-light" />, text: "Expert Mentors" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="p-1.5 rounded-full bg-slate-50 dark:bg-slate-700">
                  {item.icon}
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300 text-sm tracking-wide">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KidsHero;
