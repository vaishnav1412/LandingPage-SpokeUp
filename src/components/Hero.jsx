import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Smile } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import appScreenshot from '../assets/Gemini_Generated_Image_mk23xdmk23xdmk23.png';
import ParticleBackground from './ParticleBackground';

const Hero = ({ onOpenContact }) => {
  const navigate = useNavigate();
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
              {/* 95% Launching Offer Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-yellow-400 border border-yellow-500 shadow-[0_0_30px_rgba(250,204,21,0.3)] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 animate-shimmer -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  SPECIAL OFFER
                </div>
                <span className="text-sm font-black text-slate-900 tracking-tight">
                  Launching Discount: <span className="text-xl">95% OFF</span> For the first 2 months
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 animate-pulse ml-1"></div>
              </motion.div>
            </motion.div>

            {/* Malayalam Caption */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 text-center lg:text-left"
            >
              <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">
                ഇനി ഇംഗ്ലീഷിൽ പറയാം..
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

            {/* Premium CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col gap-6 items-center lg:items-start"
            >
           

              {/* Main CTA Block */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Book Free Demo - Sleek Premium */}
                <motion.button
                  onClick={() => onOpenContact && onOpenContact()}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-lg shadow-2xl hover:shadow-primary-light/30 transition-all overflow-hidden border border-white/10 dark:border-slate-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <div className="absolute inset-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full"></div>
                  <span className="relative z-10 tracking-tight">Book Free Demo</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                {/* Ghost / Secondary info */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Free · No credit card required</span>
                </div>
              </div>

              {/* Audience Track Buttons */}
              <div className="flex flex-col items-center lg:items-start gap-3 pt-2">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">👇 Choose Your Track</span>

                <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start">
                  {/* Adult Track - stays on same page */}
                  <div className="relative">
                    {/* Outer pulsing ring */}
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-primary-light/40 blur-sm"
                    />
                    <motion.button
                      onClick={() => {
                        document.getElementById('team-quote')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      whileHover={{ scale: 1.12, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ y: [0, -4, 0], boxShadow: ['0 0 15px rgba(15,164,175,0.3)', '0 0 35px rgba(15,164,175,0.7)', '0 0 15px rgba(15,164,175,0.3)'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-40 flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-slate-950 dark:bg-slate-900 text-white font-black text-sm tracking-widest uppercase overflow-hidden border-2 border-primary-light transition-all z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-primary-light to-secondary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Inner shimmer */}
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                        className="absolute inset-0 w-1/3 h-full bg-white/10 skew-x-12"
                      />
                      <Users className="w-4 h-4 relative z-10 text-primary-light" />
                      <span className="relative z-10">For Adults</span>
                      <span className="relative z-10 bg-primary-light/20 text-primary-light text-[9px] px-1.5 py-0.5 rounded-md font-black tracking-normal">YOU</span>
                    </motion.button>
                  </div>

                  <span className="text-slate-400 dark:text-slate-600 font-bold text-sm lowercase italic">or</span>

                  {/* Kids Track */}
                  <div className="relative">
                    {/* Outer pulsing ring */}
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      className="absolute inset-0 rounded-full bg-emerald-400/40 blur-sm"
                    />
                    <motion.button
                      onClick={() => navigate('/children')}
                      whileHover={{ scale: 1.12, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ y: [0, -4, 0], boxShadow: ['0 0 15px rgba(16,185,129,0.3)', '0 0 35px rgba(16,185,129,0.7)', '0 0 15px rgba(16,185,129,0.3)'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      className="relative w-40 flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-black text-sm tracking-widest uppercase overflow-hidden border-2 border-white/30 transition-all z-10"
                    >
                      {/* Inner shimmer */}
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
                        className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12"
                      />
                      <Smile className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">For Kids</span>
                      <span className="relative z-10 bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded-md font-black tracking-normal">NEW</span>
                    </motion.button>
                  </div>
                </div>
              </div>
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
