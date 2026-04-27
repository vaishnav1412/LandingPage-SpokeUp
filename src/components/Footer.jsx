import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, Globe, Share2, Info } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20"
        >
          
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 mb-6 group cursor-pointer w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-secondary-dark flex items-center justify-center shadow-lg group-hover:shadow-primary-light/40 transition-shadow">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <span className="text-2xl font-black tracking-tight">
                Spoke<span className="text-primary-light">Up</span>
              </span>
            </motion.div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Empowering individuals to find their voice through personalized 1-on-1 English coaching. High-impact training for a confident future.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <MessageCircle size={20} />, color: "hover:bg-green-500" },
                { icon: <Globe size={20} />, color: "hover:bg-blue-500" },
                { icon: <Share2 size={20} />, color: "hover:bg-primary-light" },
                { icon: <Info size={20} />, color: "hover:bg-secondary-light" }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  href="#" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white ${social.color} transition-all duration-300 shadow-xl shadow-black/20`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-8 text-white tracking-wide uppercase text-sm">Programs</h4>
            <ul className="space-y-4">
              {['Kids Special', 'School Students', 'College Students', 'Professionals', 'Beginners English'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href="#" className="text-slate-400 hover:text-primary-light transition-all inline-block">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-8 text-white tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Become a Mentor', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href={link === 'Contact Us' ? '#contact' : '#'} className="text-slate-400 hover:text-primary-light transition-all inline-block">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-8 text-white tracking-wide uppercase text-sm">Join the Waitlist</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Be the first to get early access to our mobile app and exclusive learning tips.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light/50 transition-all placeholder:text-slate-600"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-2 bottom-2 w-10 h-10 rounded-xl bg-primary-light text-white flex items-center justify-center hover:shadow-lg hover:shadow-primary-light/30 transition-all"
              >
                <Mail size={18} />
              </motion.button>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Spoke Up. Built for a confident world.
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-slate-500 hover:text-primary-light transition-colors group cursor-pointer">
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">hello@spokeup.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 hover:text-primary-light transition-colors group cursor-pointer">
              <Phone size={16} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">+1 (555) 000-0000</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
