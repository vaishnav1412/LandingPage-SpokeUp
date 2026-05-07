import React from 'react';
import { motion } from 'framer-motion';
import { Users, Timer, MessageCircle, Wallet, TrendingUp, Star } from 'lucide-react';

const featuresData = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "1:1 Personal Attention",
    desc: "Your child gets full focus from a dedicated trainer in every session.",
    color: "from-pink-400 to-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30"
  },
  {
    icon: <Timer className="w-8 h-8 text-white" />,
    title: "Short 45-Minute Sessions",
    desc: "Designed to match children's attention span and keep learning engaging.",
    color: "from-sky-400 to-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "Speaking-Focused Learning",
    desc: "We focus on real speaking practice, not just theory or textbooks.",
    color: "from-emerald-400 to-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/30"
  },
  {
    icon: <Wallet className="w-8 h-8 text-white" />,
    title: "Affordable for Parents",
    desc: "High-quality English training at a price that fits every family.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Regular Progress Updates",
    desc: "Track your child's improvement with feedback after sessions.",
    color: "from-violet-400 to-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30"
  },
  {
    icon: <Star className="w-8 h-8 text-white" />,
    title: "Level-Based Learning Path",
    desc: "Assessment-led journey from basic speaking to confident communication.",
    color: "from-indigo-400 to-blue-600",
    bg: "bg-indigo-50 dark:bg-indigo-950/30"
  }
];

const KidsFeatures = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-light/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.4em] text-primary-light mb-3 font-bold"
          >
            Why Choose Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
          >
            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Features</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${feat.bg} p-10 rounded-[3rem] border-2 border-white dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden`}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feat.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${feat.color} flex items-center justify-center shadow-lg mb-8 group-hover:rotate-6 transition-transform`}>
                {feat.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                {feat.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Quote Below Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center px-4 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-gradient-to-r from-primary-light/10 via-secondary-light/10 to-primary-light/10 blur-3xl -z-10 rounded-full"></div>
          <div className="inline-block relative">
            <span className="absolute -top-8 -left-8 text-7xl text-primary-light/30 font-serif leading-none hidden sm:block">"</span>
            <p className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 leading-relaxed max-w-4xl mx-auto italic tracking-tight">
              From shy beginnings to confident speaking — we guide your child at every step.
            </p>
            <span className="absolute -bottom-10 -right-8 text-7xl text-secondary-light/30 font-serif leading-none hidden sm:block">"</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KidsFeatures;
