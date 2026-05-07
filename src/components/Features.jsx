import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, DollarSign, MessageCircle, ArrowRight, Star } from 'lucide-react';

const featuresData = [
  {
    id: "01",
    icon: <Users className="w-6 h-6" />,
    title: "1-on-1 Mentorship",
    description: "Personalized attention from expert mentors, customized for your unique learning journey.",
    color: "primary-light",
    shadow: "shadow-primary-light/20",
  },
  {
    id: "02",
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Exclusive Batching",
    description: "Limited to just 4 students per mentor daily to ensure maximum interaction and quality.",
    color: "secondary-light",
    shadow: "shadow-secondary-light/20",
  },
  {
    id: "03",
    icon: <DollarSign className="w-6 h-6" />,
    title: "Affordable Learning",
    description: "Elite communication training designed to be accessible without compromising on excellence.",
    color: "accent-light",
    shadow: "shadow-accent-light/20",
  },
  {
    id: "04",
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Spoken Mastery",
    description: "Pure focus on real-world speaking skills to build your fluency and social confidence.",
    color: "primary-light",
    shadow: "shadow-primary-light/20",
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-light/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-primary-light" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-light">The Excellence</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]"
            >
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light italic">Master</span> English.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 font-medium lg:max-w-xs"
          >
            We focus on results, not just hours. Our method is built for speed and confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-[2.5rem] p-10 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary-light/10 flex flex-col items-start overflow-hidden">
                
                {/* 🌟 Prominent Number Header */}
                <div className="w-full flex items-center justify-between mb-10">
                  <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter transition-transform duration-500 group-hover:scale-110 origin-left">
                    {feature.id}
                    <span className="text-primary-light">.</span>
                  </span>
                  <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-${feature.color} group-hover:bg-primary-light group-hover:text-white transition-all duration-500`}>
                    {feature.icon}
                  </div>
                </div>

                <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary-light transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-grow font-medium">
                  {feature.description}
                </p>

                {/* Shimmer Effect on hover */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shimmer pointer-events-none" />

                {/* Bottom Accents */}
                <div className="flex items-center gap-2 mt-auto">
                   <div className="w-2 h-2 rounded-full bg-primary-light opacity-20 group-hover:opacity-100 transition-opacity" />
                   <div className="w-8 h-[2px] bg-slate-200 dark:bg-slate-800 rounded-full group-hover:bg-primary-light group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
