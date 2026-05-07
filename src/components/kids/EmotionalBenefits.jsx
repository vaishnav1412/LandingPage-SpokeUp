import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Volume2, Heart, Sparkles } from 'lucide-react';

const benefitsData = [
  { title: "Child speaks without fear", icon: <ShieldCheck className="w-8 h-8 text-blue-500" />, desc: "Building the courage to express themselves openly and confidently." },
  { title: "Better school performance", icon: <BookOpen className="w-8 h-8 text-emerald-500" />, desc: "Improved language skills directly aid in better grades and classroom participation." },
  { title: "Clear pronunciation", icon: <Volume2 className="w-8 h-8 text-orange-500" />, desc: "Sounding natural and speaking with clarity for effective communication." },
  { title: "Strong social skills", icon: <Heart className="w-8 h-8 text-rose-500" />, desc: "Making friends easily and participating actively in team environments." },
  { title: "Confidence in activities", icon: <Sparkles className="w-8 h-8 text-violet-500" />, desc: "Ready to take on new challenges, hobbies, and public speaking opportunities." }
];

const EmotionalBenefits = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-light/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.4em] text-primary-light mb-3 font-bold"
          >
            Emotional Benefits
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
          >
            Watch Your Child <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Thrive</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefitsData.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-primary-light/10 transition-all group ${i === 3 ? 'lg:col-span-1 lg:col-start-1' : ''} ${i === 4 ? 'lg:col-span-1' : ''}`}
            >
              <div className="mb-6 bg-white dark:bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalBenefits;
