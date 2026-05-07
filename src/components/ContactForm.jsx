import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, Info, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Kids Special Training',
    message: 'Interested in joining the waitlist'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ⚠️ Replace with your deployed Google Apps Script Web App URL
    // Deploy the script as a web app and set access to Anyone, even anonymous.
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwagUgmzSp53NBwMa9juXsRGhpbwjhMB_ouqsTi6YH30MYHX2y7QmkPAWgBNRyySDWk/exec'; // <-- REPLACE THIS!

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });

      setIsSuccess(true);
      toast.success('Thanks! We’ll notify you when we launch.');
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '', 
          email: '', 
          phone: '', 
          interest: 'Kids Special Training',
          message: 'Interested in joining the waitlist'
        });
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit form. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-primary-light/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-light/10 text-primary-light text-xs font-bold tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">Speak Up?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400"
          >
            Join our waitlist and be the first to know when we launch.
          </motion.p>
        </div>

        <div className="lg:flex gap-12 items-start justify-center">
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 mb-12 lg:mb-0 space-y-6"
          >
            <div className="glass p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] bg-white dark:bg-slate-950/80 backdrop-blur-2xl">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                <Info size={20} className="text-primary-light" />
                Quick Contact
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light/10 flex items-center justify-center flex-shrink-0 text-primary-light group-hover:scale-110 group-hover:bg-primary-light group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-semibold text-slate-700 dark:text-slate-200">info.spokeup@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-light/10 flex items-center justify-center flex-shrink-0 text-secondary-light group-hover:scale-110 group-hover:bg-secondary-light group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-semibold text-slate-700 dark:text-slate-200"> 8157867616</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-light to-secondary-light text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                <Rocket size={80} className="transform rotate-12" />
              </div>
              <h4 className="text-xl font-bold mb-2">Fast Response</h4>
              <p className="text-white/80 text-sm font-medium">We typically get back to you within 24 hours.</p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="relative rounded-[2.5rem] p-8 md:p-14 bg-white dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Premium Gradient Line at Top */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-light via-accent-light to-secondary-light"></div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name <span className="text-primary-light">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <User size={18} className="text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          </div>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full pl-14 pr-5 py-4 rounded-2xl border-0 ring-1 ring-inset ring-slate-200 dark:ring-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-light transition-all outline-none shadow-sm"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address <span className="text-primary-light">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <Mail size={18} className="text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          </div>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full pl-14 pr-5 py-4 rounded-2xl border-0 ring-1 ring-inset ring-slate-200 dark:ring-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-light transition-all outline-none shadow-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <Phone size={18} className="text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          </div>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full pl-14 pr-5 py-4 rounded-2xl border-0 ring-1 ring-inset ring-slate-200 dark:ring-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-light transition-all outline-none shadow-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Interested In <span className="text-primary-light">*</span></label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <Info size={18} className="text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          </div>
                          <select 
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="block w-full pl-14 pr-10 py-4 rounded-2xl border-0 ring-1 ring-inset ring-slate-200 dark:ring-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-inset focus:ring-primary-light transition-all outline-none shadow-sm appearance-none cursor-pointer"
                          >
                            <option>Kids Special Training</option>
                            <option>School Students</option>
                            <option>College Students</option>
                            <option>Working Professionals</option>
                            <option>Beginners English</option>
                            <option>Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                            <ChevronDown size={18} className="text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <motion.button 
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary-light to-secondary-light text-white font-black text-lg shadow-[0_0_30px_rgba(15,164,175,0.3)] hover:shadow-[0_0_40px_rgba(15,164,175,0.5)] flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                      >
                        {/* Shimmer Effect */}
                        <motion.div 
                          animate={{ x: ['-100%', '300%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                          className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12"
                        />
                        
                        {isSubmitting ? (
                          <>
                            <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span className="relative z-10">Submitting...</span>
                          </>
                        ) : (
                          <>
                            SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-[2rem] flex items-center justify-center mb-8 text-green-500 shadow-xl shadow-green-500/20"
                    >
                      <CheckCircle2 size={48} strokeWidth={3} />
                    </motion.div>
                    <h4 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">Thanks!</h4>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-sm mx-auto font-medium">
                      We’ll notify you when we launch.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Rocket = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/>
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/>
  </svg>
);

export default ContactForm;
