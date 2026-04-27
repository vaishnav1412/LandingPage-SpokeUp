import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, DollarSign, MessageCircle, ChevronRight } from 'lucide-react';

const featuresData = [
  {
    id: "01",
    icon: <Users className="w-6 h-6 text-primary-light" />,
    title: "1-on-1 Mentorship",
    description: "Get dedicated attention from an expert mentor tailored to your learning pace.",
    color: "bg-primary-light",
  },
  {
    id: "02",
    icon: <GraduationCap className="w-6 h-6 text-secondary-dark" />,
    title: "Exclusive Batching",
    description: "Our mentors handle only 4 students daily to guarantee high-quality coaching.",
    color: "bg-secondary-light dark:bg-secondary-dark",
  },
  {
    id: "03",
    icon: <DollarSign className="w-6 h-6 text-accent-light" />,
    title: "Affordable Learning",
    description: "Premium communication training that doesn't break the bank.",
    color: "bg-accent-light",
  },
  {
    id: "04",
    icon: <MessageCircle className="w-6 h-6 text-primary-light" />,
    title: "Spoken Mastery",
    description: "Focus purely on speaking and listening to improve real-world conversations.",
    color: "bg-primary-light",
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary-light mb-2">Features</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Why Choose Spoke Up
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex group h-full shadow-lg hover:shadow-xl transition-all"
            >
              {/* Sidebar */}
              <div className={`relative w-16 flex-shrink-0 flex items-center justify-center rounded-l-3xl overflow-hidden ${feature.color}`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <span className="relative z-10 transform -rotate-90 whitespace-nowrap text-[10px] font-black tracking-[0.3em] text-white uppercase">
                  Option {feature.id}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white dark:bg-slate-900 p-8 rounded-r-3xl border-y border-r border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
                
                {/* Neomorphic Circle */}
                <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800 shadow-[inset_0_4px_10px_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)] flex items-center justify-center mb-6 border border-white dark:border-slate-700">
                   {feature.icon}
                </div>

                <h4 className="text-xl font-extrabold mb-3 text-slate-800 dark:text-white tracking-tight">
                  {feature.title}
                </h4>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Icon */}
                <div className="mt-auto pt-6 flex items-center justify-end w-full opacity-40 group-hover:opacity-100 transition-opacity">
                   <ChevronRight size={14} className="text-slate-400" />
                   <ChevronRight size={14} className="-ml-2 text-slate-400" />
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
