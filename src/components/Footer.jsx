import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, Heart, Share2, Info, ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setIsSubscribing(true);
    // Simulate async call — replace with actual API endpoint if needed
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubscribing(false);
    setEmail('');
    toast.success('🎉 You\'re on the list! We\'ll notify you at launch.');
  };

  const handleSocialClick = (type) => {
    const links = {
      whatsapp: 'https://wa.me/8157867616',
      instagram: 'https://www.instagram.com/spokeup_app',
      share: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Spoke Up',
            text: 'Join our 1-on-1 English coaching program!',
            url: window.location.href
          });
        } else {
          toast.success('Share link copied!');
        }
      },
      info: '#about'
    };

    if (type === 'share') {
      links.share();
    } else if (type === 'info') {
      window.location.hash = links.info;
    } else {
      window.open(links[type], '_blank');
    }
  };
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
                { icon: <MessageCircle size={20} />, color: "hover:bg-green-500", type: "whatsapp" },
                { icon: <Heart size={20} />, color: "hover:bg-pink-500", type: "instagram" },
                { icon: <Share2 size={20} />, color: "hover:bg-primary-light", type: "share" },
                { icon: <Info size={20} />, color: "hover:bg-secondary-light", type: "info" }
              ].map((social, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleSocialClick(social.type)}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white ${social.color} transition-all duration-300 shadow-xl shadow-black/20`}
                >
                  {social.icon}
                </motion.button>
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
            <h4 className="text-lg font-bold mb-8 text-white tracking-wide uppercase text-sm">Stay in the Loop</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Get early access, English tips, and exclusive launch offers — straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative group">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light/50 transition-all placeholder:text-slate-600 text-white"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubscribing}
                whileHover={{ scale: isSubscribing ? 1 : 1.02 }}
                whileTap={{ scale: isSubscribing ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-primary-light to-secondary-light text-white font-bold text-sm shadow-lg shadow-primary-light/20 hover:shadow-primary-light/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {/* Shimmer */}
                {!isSubscribing && (
                  <motion.div
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                    className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12"
                  />
                )}
                {isSubscribing ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Notify Me at Launch
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
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
