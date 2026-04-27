import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, HeartHandshake, TrendingUp } from 'lucide-react';

const MentorCTA = ({ onOpenContact }) => {
  return (
    <section id="mentor" className="py-24 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-transparent to-accent-light/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-400">Actively Hiring</span>
              <div className="h-px w-8 bg-white/20"></div>
              <h2 className="text-sm font-semibold text-accent-light uppercase tracking-widest">Join Our Team</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Become a Spoke Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-primary-light">Mentor</span>
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Are you passionate about teaching and helping others grow? Join us as a part-time mentor. Work just 1-2 hours daily, teach 4 dedicated students, and earn a steady income.
            </p>
            
            <button 
              onClick={onOpenContact}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-white/10"
            >
              Apply as a Mentor
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: <Clock className="w-6 h-6 text-accent-light" />, title: "Flexible Schedule", desc: "Work 1-2 hours daily at your convenience." },
              { icon: <Briefcase className="w-6 h-6 text-primary-light" />, title: "Part-Time Job", desc: "Perfect for students or professionals looking to earn extra." },
              { icon: <HeartHandshake className="w-6 h-6 text-pink-400" />, title: "Make an Impact", desc: "Help build someone's confidence and career." },
              { icon: <TrendingUp className="w-6 h-6 text-green-400" />, title: "Earn Income", desc: "Get paid competitively by the platform." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default MentorCTA;
