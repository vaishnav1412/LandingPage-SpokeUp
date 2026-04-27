import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Info } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Kids Special Training',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: '', email: '', phone: '', interest: 'Kids Special Training', message: ''
          });
        }, 5000);
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit form. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/10 rounded-full blur-[120px] -z-0"></div>
      
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
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
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

        <div className="lg:flex gap-12">
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 mb-12 lg:mb-0 space-y-6"
          >
            <div className="glass p-8 rounded-3xl border border-white/50 dark:border-slate-800 shadow-xl bg-gradient-to-br from-white/80 to-slate-50/50 dark:from-slate-900/80 dark:to-slate-900/50">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Info size={20} className="text-primary-light" />
                Quick Contact
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-light/10 flex items-center justify-center flex-shrink-0 text-primary-light">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-semibold text-slate-700 dark:text-slate-200">hello@spokeup.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary-light/10 flex items-center justify-center flex-shrink-0 text-secondary-light">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-semibold text-slate-700 dark:text-slate-200">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-primary-light text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Rocket size={80} className="transform rotate-12" />
              </div>
              <h4 className="text-xl font-bold mb-2">Fast Response</h4>
              <p className="text-white/80 text-sm">We typically get back to you within 24 hours.</p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/50 dark:border-slate-800 shadow-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Full Name</label>
                        <div className="relative group">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Email Address</label>
                        <div className="relative group">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Phone Number</label>
                        <div className="relative group">
                          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Interested In</label>
                        <div className="relative group">
                          <Info size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <select 
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none appearance-none"
                          >
                            <option>Kids Special Training</option>
                            <option>School Students</option>
                            <option>College Students</option>
                            <option>Working Professionals</option>
                            <option>Beginners English</option>
                            <option>Becoming a Mentor</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1">Message (Optional)</label>
                      <div className="relative group">
                        <MessageSquare size={18} className="absolute left-4 top-6 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                        <textarea 
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none resize-none"
                          placeholder="Tell us what you're looking for..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary-light to-secondary-light text-white font-black text-lg shadow-xl shadow-primary-light/20 flex items-center justify-center gap-3 relative overflow-hidden group"
                      >
                        {/* Shimmer Effect */}
                        <motion.div 
                          animate={{ x: ['-100%', '300%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                          className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12"
                        />
                        
                        {isSubmitting ? (
                          <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          <>SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8 text-green-500 shadow-lg shadow-green-500/20"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                    <h4 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">Message Sent!</h4>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                      We've received your information. A Spoke Up representative will contact you shortly!
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
