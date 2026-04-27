import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: <Target className="w-8 h-8" />,
    title: "Choose Program",
    description: "Explore our tailored tracks for Kids, Students, or Pros. Select the perfect match for your goals.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    number: "02",
    icon: <Users className="w-8 h-8" />,
    title: "Get Matched",
    description: "We pair you with an expert mentor who fits your schedule and unique learning style.",
    color: "from-primary-light to-secondary-dark"
  },
  {
    number: "03",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Level Up",
    description: "Join 1-on-1 sessions, practice real-world speaking, and watch your confidence soar.",
    color: "from-accent-light to-accent-dark"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
          >
            How it works
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary-light mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Background Path Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/3 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-0"></div>

          {steps.map((step, index) => (
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

                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {step.icon}
                </div>

                <h4 className="text-2xl font-extrabold mb-4 text-slate-800 dark:text-white">
                  {step.title}
                </h4>
                
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {step.description}
                </p>

                {/* Step Marker */}
                <div className={`mt-8 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400`}>
                  Step {step.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
