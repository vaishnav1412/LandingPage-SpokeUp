import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import mentorPhoto from '../assets/Gemini_Generated_Image_lizm32lizm32lizm.png';

const TeamQuote = () => {
  return (
    <section id="team-quote" className="relative py-40 overflow-hidden bg-slate-950">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,164,175,0.05),transparent_70%)]"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Large Scale Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Quote className="w-20 h-20 text-primary-light/10 absolute -top-12 -left-12" />
            
            <h2 className="text-5xl md:text-7xl font-light text-white leading-[1.05] tracking-tight italic font-serif">
              "Interact with <br/>
              <span className="font-black not-italic text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">
                mentors
              </span> <br/>
              and level up <br/>
              your speech."
            </h2>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary-light"></div>
              <p className="text-sm font-bold tracking-[0.4em] text-primary-light uppercase">The SpokeUp Mission</p>
            </div>
          </motion.div>

          {/* Right: Cinematic Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/5 rounded-[4rem] group-hover:border-primary-light/20 transition-colors duration-700"></div>
              
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10">
                <img 
                  src={mentorPhoto} 
                  alt="Team Portrait" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                {/* Bottom Info */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-2xl font-black text-white mb-1 tracking-tight">Expert Mentors</p>
                  <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Personalized 1:1 Guidance</p>
                </div>
              </div>

              {/* Floating Signature Element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-3xl p-8 rounded-3xl border border-white/10 shadow-2xl z-20"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-primary-light text-xs font-black tracking-widest uppercase">Our Promise</span>
                  <span className="text-white text-lg font-medium">Confidence in every word.</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TeamQuote;
