import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, User, Mail, Phone, MessageSquare, Info } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
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
          onClose(); // Auto close on success after delay
        }, 3000);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-slate-800 overflow-hidden"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex items-center justify-between relative z-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                  Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">Waitlist</span>
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Fill out the form below and we'll get in touch.</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary-light transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Area */}
            <div className="p-8 pt-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="modal-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Full Name</label>
                        <div className="relative group">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Email Address</label>
                        <div className="relative group">
                          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Phone Number</label>
                        <div className="relative group">
                          <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none text-sm"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Interested In</label>
                        <div className="relative group">
                          <Info size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <select 
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none appearance-none text-sm"
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
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Message (Optional)</label>
                      <div className="relative group">
                        <MessageSquare size={16} className="absolute left-4 top-4 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                        <textarea 
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none resize-none text-sm"
                          placeholder="Tell us what you're looking for..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-2">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary-light to-secondary-light text-white font-black text-lg shadow-xl shadow-primary-light/20 flex items-center justify-center gap-3 relative overflow-hidden group"
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
                    key="modal-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-500 shadow-lg shadow-green-500/20"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h4 className="text-3xl font-black mb-2 text-slate-900 dark:text-white">Message Sent!</h4>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                      We'll be in touch shortly!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
