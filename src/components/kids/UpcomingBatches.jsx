import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Calendar } from 'lucide-react';

const UpcomingBatches = ({ onOpenRegistration }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950 border-y border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-500/10 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-red-400 font-bold">Limited Seats Available</p>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Don't Let Time <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Slip Away.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
              Procrastination steals time. Secure your child's spot in our next batch. We carefully allocate students according to their current level for the best experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenRegistration}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white text-slate-950 px-8 py-4 text-lg font-black hover:scale-105 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                Book Free Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Countdown Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[2.5rem] bg-slate-900/50 border border-white/10 p-8 md:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-white font-black text-2xl mb-2 tracking-tight">Next Batch Starts In</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-10">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hrs', value: timeLeft.hours },
                    { label: 'Min', value: timeLeft.minutes },
                    { label: 'Sec', value: timeLeft.seconds }
                  ].map((unit, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-full aspect-square flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-2 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                          {unit.value.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest">{unit.label}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                        <Users size={20} />
                      </div>
                      <div>
                        <p className="text-white font-black text-sm uppercase tracking-wider">Seats Left</p>
                        <p className="text-slate-400 text-xs font-bold">In next 3 batches</p>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-orange-400">08</div>
                  </div>

                  <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-white font-black text-sm uppercase tracking-wider">Next Date</p>
                        <p className="text-slate-400 text-xs font-bold">Scheduled batch</p>
                      </div>
                    </div>
                    <div className="text-xl font-black text-blue-400">May 15</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
