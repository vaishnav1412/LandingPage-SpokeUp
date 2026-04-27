import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import appScreenshot from '../assets/Gemini_Generated_Image_mk23xdmk23xdmk23.png';
import ParticleBackground from './ParticleBackground';

const Hero = ({ onOpenContact }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 45,
    seconds: 22
  });

  useEffect(() => {
    // Target date: 14 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
      {/* Interactive Particle Network */}
      <ParticleBackground />

      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Dark mode specific blobs */}
      <div className="hidden dark:block absolute top-1/4 left-1/4 w-72 h-72 bg-primary-dark/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="hidden dark:block absolute top-1/3 right-1/4 w-72 h-72 bg-accent-dark/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-8 group flex flex-col items-center lg:items-start"
            >
              {/* Outer Pulsing Glow Background */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-light/40 to-secondary-light/40 rounded-full blur-md opacity-20 group-hover:opacity-40 animate-pulse transition duration-1000"></div>
              
              <div className="relative inline-flex items-center px-8 py-2.5 rounded-full border border-primary-light/40 bg-white/10 dark:bg-slate-900/60 backdrop-blur-xl text-primary-light dark:text-primary-dark font-black text-[10px] uppercase tracking-[0.35em] shadow-[0_0_20px_rgba(15,164,175,0.15)] overflow-hidden">
                
                {/* Moving Internal Shimmer */}
                <motion.div 
                  animate={{ 
                    x: ['-150%', '150%'],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatDelay: 0.5
                  }}
                  className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 dark:via-primary-light/20 to-transparent skew-x-[30deg]"
                />

                <motion.span
                  animate={{ 
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative z-10"
                >
                  Coming Soon
                </motion.span>

                {/* Animated Bottom Progress/Highlight Line */}
                <motion.div
                   animate={{ 
                     x: ['-100%', '100%'],
                   }}
                   transition={{ 
                     duration: 3, 
                     repeat: Infinity, 
                     ease: "easeInOut",
                   }}
                   className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-primary-light to-transparent opacity-80"
                />
              </div>
            </motion.div>

            {/* Malayalam Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 text-center lg:text-left"
            >
              <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">
                കഷ്ടപെട്ടല്ല, ഇനി ഇഷ്ടപ്പെട്ടു ഇംഗ്ലീഷ് പഠിക്കാം!
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              <span className="block">Learn. Speak.</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">Grow Confidently.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              Personalized 1-on-1 coaching for kids, students, professionals, and beginners. Master spoken English and build unbreakable confidence.
            </motion.p>

            {/* Premium Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                onClick={onOpenContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary-light to-secondary-light hover:from-secondary-light hover:to-primary-light text-white font-bold text-lg shadow-[0_0_20px_rgba(15,164,175,0.4)] hover:shadow-[0_0_40px_rgba(15,164,175,0.7)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
                <span className="relative z-10">Notify Me</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button 
                onClick={onOpenContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-300 dark:border-slate-700 hover:border-primary-light dark:hover:border-primary-dark font-bold text-slate-800 dark:text-white text-lg shadow-lg hover:shadow-primary-light/20 transition-all"
              >
                <Mail className="w-5 h-5 text-secondary-light dark:text-secondary-dark transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary-light" />
                <span>Contact Us</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content Area - App Screenshot with Dynamic Shadow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full lg:w-1/2 max-w-sm lg:max-w-md mx-auto relative group flex flex-col items-center"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/30 to-secondary-light/30 blur-[100px] rounded-full transform scale-110 pointer-events-none"></div>
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full"
            >
              {/* Modern App Status Tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute top-10 -right-6 z-20"
              >
                <div className="relative group">
                  {/* Pulsing Glow Background */}
                  <div className="absolute inset-0 bg-primary-light/40 blur-xl rounded-2xl animate-pulse group-hover:bg-primary-light/60 transition-colors"></div>
                  
                  {/* Glass Tag Content */}
                  <div className="relative px-6 py-3 bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3 overflow-hidden">
                    {/* Shimmer Light Effect */}
                    <motion.div 
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    
                    <div className="w-2 h-2 rounded-full bg-primary-light animate-ping"></div>
                    <span className="text-sm font-bold tracking-wide text-white whitespace-nowrap">
                      APP COMING SOON
                    </span>
                  </div>
                </div>
              </motion.div>

              <img
                src={appScreenshot}
                alt="SpokeUp App"
                className="w-full h-auto mix-blend-multiply filter contrast-[1.1] saturate-[1.2]"
              />
            </motion.div>

            {/* Dynamic Floor Shadow */}
            <motion.div
              animate={{ 
                scale: [1, 0.8, 1],
                opacity: [0.3, 0.15, 0.3] 
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[80%] h-6 bg-slate-900/60 blur-xl rounded-[100%] mt-[-40px] z-0"
            ></motion.div>
          </motion.div>
          
        </div>

        {/* Optional Countdown Mockup */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 pt-10 border-t border-slate-200 dark:border-slate-800/60 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-6">Launching In</p>
          <div className="flex justify-center gap-4 sm:gap-8">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 shadow-xl text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-light to-secondary-dark">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <span className="mt-3 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">{unit.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
