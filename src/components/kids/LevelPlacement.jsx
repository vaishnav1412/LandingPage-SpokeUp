import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const LevelPlacement = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.4em] text-primary-light mb-4 font-bold"
          >
            Level Placement
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6"
          >
            Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Learning Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We first understand your child's level through a simple check and place them in the right program.
          </motion.p>
        </div>

        {/* 3 Main Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
          {/* Basic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-[3rem] bg-white dark:bg-slate-900 border-2 border-green-100 dark:border-green-900/30 p-10 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 rounded-full -z-0 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 flex-1">
              <div className="flex flex-col gap-6 mb-8">
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform tracking-tighter">
                  01
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Basic Level</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 font-black text-sm tracking-widest uppercase border border-green-200 dark:border-green-800/30">40 Sessions</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 dark:text-slate-300 font-bold">For beginners and shy children</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 dark:text-slate-300 font-bold">Start speaking simple sentences confidently</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group rounded-[3.5rem] bg-slate-900 dark:bg-slate-950 border-4 border-yellow-400/50 p-10 shadow-2xl shadow-yellow-500/20 hover:scale-[1.03] transition-all duration-500 overflow-hidden flex flex-col h-[105%] z-10" 
          >
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            <div className="relative z-10 flex-1 text-center">
              <div className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-slate-900 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(250,204,21,0.5)]">MOST POPULAR</div>
              
              <div className="flex flex-col items-center gap-6 mb-10">
                <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-yellow-300 to-orange-500 flex items-center justify-center text-white text-5xl font-black shadow-xl shadow-yellow-500/30 group-hover:rotate-12 transition-transform tracking-tighter">
                  02
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white mb-2 tracking-tight">Intermediate</h3>
                  <div className="inline-block px-6 py-2 rounded-full bg-white/10 text-yellow-400 font-black text-sm tracking-widest uppercase border border-white/10">15 Sessions</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
                  <p className="text-white font-bold leading-relaxed text-lg">Improves fluency and daily conversation skills</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group rounded-[3rem] bg-white dark:bg-slate-900 border-2 border-blue-100 dark:border-blue-900/30 p-10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -z-0 group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 flex-1">
              <div className="flex flex-col gap-6 mb-8">
                <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform tracking-tighter">
                  03
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Advanced Level</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 font-black text-sm tracking-widest uppercase border border-blue-200 dark:border-blue-800/30">30 Sessions</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700 dark:text-slate-300 font-bold text-sm">Focus on pronunciation, vocabulary, and confident speaking</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LevelPlacement;
