import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Zap, Star, CheckCircle } from 'lucide-react';

// Animated icon components using Framer Motion
const AnimatedTarget = () => (
  <motion.div className="relative w-16 h-16 flex items-center justify-center">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute inset-0 rounded-full bg-white/30"
    />
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      className="absolute inset-0 rounded-full bg-white/20"
    />
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    >
      <Target className="w-9 h-9 text-white" />
    </motion.div>
  </motion.div>
);

const AnimatedUsers = () => (
  <motion.div className="relative w-16 h-16 flex items-center justify-center">
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Users className="w-9 h-9 text-white" />
    </motion.div>
    <motion.div
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
      className="absolute top-1 right-1"
    >
      <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
    </motion.div>
  </motion.div>
);

const AnimatedTrendingUp = () => (
  <motion.div className="relative w-16 h-16 flex items-center justify-center">
    <motion.div
      animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <TrendingUp className="w-9 h-9 text-white" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut', delay: 0.2 }}
      className="absolute top-0 right-2"
    >
      <Zap className="w-3 h-3 text-yellow-300 fill-yellow-300" />
    </motion.div>
  </motion.div>
);

const steps = [
  {
    number: "01",
    AnimatedIcon: AnimatedTarget,
    title: "Choose Program",
    description: "Explore our tailored tracks for Kids, Students, or Pros. Select the perfect match for your goals.",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/40",
    glow: "group-hover:shadow-blue-500/40",
  },
  {
    number: "02",
    AnimatedIcon: AnimatedUsers,
    title: "Get Matched",
    description: "We pair you with an expert mentor who fits your schedule and unique learning style.",
    color: "from-primary-light to-secondary-dark",
    shadow: "shadow-primary-light/40",
    glow: "group-hover:shadow-primary-light/40",
  },
  {
    number: "03",
    AnimatedIcon: AnimatedTrendingUp,
    title: "Level Up",
    description: "Join 1-on-1 sessions, practice real-world speaking, and watch your confidence soar.",
    color: "from-accent-light to-accent-dark",
    shadow: "shadow-accent-light/40",
    glow: "group-hover:shadow-accent-light/40",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-light/10 text-primary-light text-xs font-bold tracking-widest uppercase mb-4"
          >
            Simple Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
          >
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">
              Works
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-primary-light to-secondary-dark mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Animated connector line (desktop only) */}
          <div className="hidden md:block absolute top-[4rem] left-[20%] right-[20%] h-0.5 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
              style={{ originX: 0 }}
              className="w-full h-full bg-gradient-to-r from-blue-400 via-primary-light to-accent-light opacity-40 rounded-full"
            />
          </div>

          {steps.map((step, index) => {
            const { AnimatedIcon } = step;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group h-full"
              >
                <div className="h-full p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 relative z-10 flex flex-col items-center text-center overflow-hidden">

                  {/* Background Number Watermark */}
                  <span className="absolute -top-4 -right-4 text-9xl font-black text-slate-100 dark:text-slate-800/50 -z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-4">
                    {step.number}
                  </span>

                  {/* Animated Icon Container */}
                  <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.shadow} ${step.glow} mb-8 overflow-hidden transition-shadow duration-300`}>
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                    <AnimatedIcon />
                  </div>

                  <h4 className="text-2xl font-extrabold mb-4 text-slate-800 dark:text-white">
                    {step.title}
                  </h4>

                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {step.description}
                  </p>

                  {/* Checkmark badge */}
                  <div className="mt-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                    <CheckCircle size={12} className="text-green-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Step {step.number}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
