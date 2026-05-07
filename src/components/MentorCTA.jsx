import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, HeartHandshake, TrendingUp, ArrowRight } from 'lucide-react';

const MentorCTA = ({ onOpenContact }) => {
  return (
    <section id="mentor" className="py-32 bg-slate-950 text-white relative overflow-hidden border-y border-white/5">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-light/20 blur-[150px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-light/20 blur-[150px]"></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-16 lg:mb-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-black tracking-[0.2em] uppercase text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">Actively Hiring</span>
              <div className="h-px w-12 bg-white/20"></div>
              <h2 className="text-xs font-bold text-accent-light uppercase tracking-widest">Join Our Team</h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
              Become a Spoke Up <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-primary-light">Mentor</span>
            </h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium">
              Are you passionate about teaching and helping others grow? Join us as a part-time mentor. Work just 1-2 hours daily, teach 4 dedicated students, and earn a steady income.
            </p>
            
            <button 
              onClick={onOpenContact}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-black text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-transparent via-slate-200/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"></div>
              <span className="relative z-10">Apply as a Mentor</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
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
              { icon: <Clock className="w-7 h-7 text-accent-light" />, title: "Flexible Schedule", desc: "Work 1-2 hours daily at your convenience." },
              { icon: <Briefcase className="w-7 h-7 text-primary-light" />, title: "Part-Time Job", desc: "Perfect for students or professionals looking to earn extra." },
              { icon: <HeartHandshake className="w-7 h-7 text-pink-400" />, title: "Make an Impact", desc: "Help build someone's confidence and career." },
              { icon: <TrendingUp className="w-7 h-7 text-green-400" />, title: "Earn Income", desc: "Get paid competitively by the platform." }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white tracking-wide">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default MentorCTA;
