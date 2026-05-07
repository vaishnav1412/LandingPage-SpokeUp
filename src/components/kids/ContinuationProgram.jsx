import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw } from 'lucide-react';

const ContinuationProgram = ({ onOpenRegistration }) => {
  return (
    <section className="py-12 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-8 md:p-16 shadow-2xl shadow-purple-500/30"
        >
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-xs font-black tracking-[0.2em] uppercase text-white">CONTINUATION PROGRAM</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                Speaking Practice Program
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mb-8">
                Keep the momentum going! Short 15-minute 1:1 sessions designed purely to maintain fluency and build daily speaking habits. <span className="font-black text-yellow-400 underline decoration-2 underline-offset-4 ml-1">95% Launch Offer included!</span>
              </p>
            </div>

            {/* Right Price Card */}
            <div className="lg:col-span-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 md:p-10 text-center shadow-xl flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-1">₹1100</span>
                    <span className="text-xs font-black tracking-[0.2em] uppercase text-white/70 mb-4">FOR 2 MONTHS</span>
                    <div className="px-6 py-2 rounded-full bg-yellow-400 text-slate-900 text-[11px] font-black uppercase tracking-[0.15em] shadow-[0_0_20px_rgba(250,204,21,0.4)] animate-bounce">
                      95% LAUNCHING OFFER
                    </div>
                  </div>

                  <button
                    onClick={onOpenRegistration}
                    className="w-full py-5 rounded-2xl bg-white text-purple-600 font-black text-lg shadow-xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3 group"
                  >
                    Book free demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContinuationProgram;
