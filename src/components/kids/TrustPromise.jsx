import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Home, UserCheck, Heart, FileText } from 'lucide-react';

const promiseItems = [
  { title: "Safe & child-friendly environment", icon: <Home className="w-6 h-6 text-white" />, color: "from-blue-400 to-blue-600" },
  { title: "Trained & expert mentors", icon: <UserCheck className="w-6 h-6 text-white" />, color: "from-emerald-400 to-emerald-600" },
  { title: "No pressure learning", icon: <Heart className="w-6 h-6 text-white" />, color: "from-rose-400 to-rose-600" },
  { title: "Transparent progress updates", icon: <FileText className="w-6 h-6 text-white" />, color: "from-amber-400 to-amber-600" }
];

const TrustPromise = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-y border-slate-200 dark:border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
              <Shield size={16} className="text-blue-500" />
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">Very Important</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Our Promise to <span className="text-blue-600 dark:text-blue-400">Parents</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              We prioritize your child's safety, well-being, and joy of learning above everything else.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {promiseItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all flex flex-col gap-6 relative overflow-hidden group"
              >
                {/* 3D-style Badge */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-black/10 group-hover:rotate-6 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">{item.title}</h3>
                
                {/* Abstract Decor */}
                <div className={`absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPromise;
