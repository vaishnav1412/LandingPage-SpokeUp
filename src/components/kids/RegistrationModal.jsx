import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, Info, ChevronDown, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const RegistrationModal = ({ isOpen, onClose, scriptUrl }) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    email: '',
    phone: '',
    age: '',
    currentLevel: '',
    preferredTime: '',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          type: 'Children',
        }),
      });

      setIsSuccess(true);
      toast.success('Registration successful! We will contact you soon.');

      setTimeout(() => {
        setIsSuccess(false);
        onClose();

        setFormData({
          name: '',
          parentName: '',
          email: '',
          phone: '',
          age: '',
          currentLevel: '',
          preferredTime: '',
          notes: '',
        });
      }, 3000);

    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
              <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <X size={24} className="text-slate-400" />
              </button>

              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Book Free Demo</h2>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Start your child's English journey today</p>
              </div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="registration-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Child's Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" size={20} />
                          <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-light outline-none transition-all" placeholder="Enter name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Parent's Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" size={20} />
                          <input required type="text" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-light outline-none transition-all" placeholder="Enter parent name" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" size={20} />
                          <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-light outline-none transition-all" placeholder="email@example.com" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" size={20} />
                          <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-light outline-none transition-all" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Child's Age</label>
                        <div className="relative group">
                          <Info className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors" size={20} />
                          <select required value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-light outline-none transition-all appearance-none">
                            <option value="">Select Age</option>
                            {[...Array(12)].map((_, i) => (
                              <option key={i+4} value={i+4}>{i+4} Years Old</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Current English Level</label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-light transition-colors">
                            <CheckCircle2 size={20} />
                          </div>
                          <select required value={formData.currentLevel} onChange={(e) => setFormData({...formData, currentLevel: e.target.value})} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-light outline-none transition-all appearance-none">
                            <option value="">Select Level</option>
                            <option value="Beginner">Beginner (Little to no speaking)</option>
                            <option value="Intermediate">Intermediate (Can speak simple sentences)</option>
                            <option value="Advanced">Advanced (Can hold basic conversations)</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                        </div>
                      </div>
                    </div>

                    <button disabled={loading} type="submit" className="w-full py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-lg shadow-xl hover:shadow-primary-light/20 transition-all flex items-center justify-center gap-3 group disabled:opacity-70">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                          <span className="relative z-10">SUBMITTING...</span>
                        </>
                      ) : (
                        <>
                          CONFIRM BOOKING <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-[2rem] flex items-center justify-center mb-6 text-green-500 shadow-xl shadow-green-500/20"
                    >
                      <CheckCircle2 size={40} strokeWidth={3} />
                    </motion.div>
                    <h4 className="text-3xl font-black mb-2 text-slate-900 dark:text-white">Success!</h4>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto font-medium">
                      Registration successful! We will contact you soon.
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

export default RegistrationModal;
