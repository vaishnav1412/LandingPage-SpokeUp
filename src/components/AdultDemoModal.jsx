import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, User, Mail, Phone, Briefcase, Target, Clock, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

const AdultDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: 'Professional',
    goal: 'Public Speaking',
    timeSlot: 'Evening (6 PM - 9 PM)',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZMRGWU3ffaQCnSTmggQb2HGF8-kShjKFgswBgXr6m5TsKFp-2Hc58z5fR6hRDL372/exec';

    const submissionData = {
      ...formData,
      interest: 'Adult Free Demo',
      message: `Profession: ${formData.profession}, Goal: ${formData.goal}, Preferred Time: ${formData.timeSlot}`
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(submissionData),
      });

      setIsSuccess(true);
      toast.success('Demo Booked! We will contact you shortly.');

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          profession: 'Professional',
          goal: 'Public Speaking',
          timeSlot: 'Evening (6 PM - 9 PM)',
        });
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to book demo. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

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
                  Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">Free Demo</span>
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Personalized 1-on-1 session for adults & professionals.</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary-light transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 pt-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="adult-demo-form"
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
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none text-sm"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Your Profession</label>
                        <div className="relative group">
                          <Briefcase size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <select 
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none appearance-none text-sm cursor-pointer"
                          >
                            <option>Working Professional</option>
                            <option>College Student</option>
                            <option>Entrepreneur</option>
                            <option>Job Seeker</option>
                            <option>Homemaker</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Main Goal</label>
                        <div className="relative group">
                          <Target size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <select 
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none appearance-none text-sm cursor-pointer"
                          >
                            <option>Public Speaking</option>
                            <option>Interview Preparation</option>
                            <option>Daily Communication</option>
                            <option>Business English</option>
                            <option>Social Confidence</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1 uppercase tracking-wider">Preferred Demo Time</label>
                        <div className="relative group">
                          <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" />
                          <select 
                            name="timeSlot"
                            value={formData.timeSlot}
                            onChange={handleChange}
                            className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-all outline-none appearance-none text-sm cursor-pointer"
                          >
                            <option>Morning (9 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 7 PM)</option>
                            <option>Night (7 PM - 10 PM)</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-primary-light text-white font-black text-lg shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 relative overflow-hidden group"
                      >
                        <motion.div 
                          animate={{ x: ['-100%', '300%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 w-1/3 h-full bg-white/20 skew-x-12"
                        />
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            <span className="relative z-10 text-base uppercase tracking-widest">Submitting...</span>
                          </>
                        ) : (
                          <>CONFIRM DEMO SESSION <Send size={20} /></>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-500 shadow-lg shadow-green-500/20">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-3xl font-black mb-2 text-slate-900 dark:text-white">Demo Booked!</h4>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                      Our mentor will reach out to you on WhatsApp/Call shortly.
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

export default AdultDemoModal;
