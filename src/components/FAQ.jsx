import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long is each coaching session?",
    answer: "Each 1-on-1 session is 45–60 minutes long, scheduled at a time that works best for you. We focus on quality over quantity — every minute is designed to maximize your speaking confidence."
  },
  {
    question: "Is it strictly 1-on-1 mentoring?",
    answer: "Yes! Every session is a dedicated 1-on-1 experience with your assigned mentor. We strictly limit our mentors to 4 students per day to ensure you get personalized attention and real progress."
  },
  {
    question: "Can I choose my own mentor?",
    answer: "Absolutely. Once you join, you'll see mentor profiles with their specialties, teaching styles, and availability. You can pick the mentor that resonates most with your learning goals."
  },
  {
    question: "What programs do you offer?",
    answer: "We offer tailored tracks for Kids Special Training, School Students, College Students, Working Professionals, and Beginners English. Each program is customized to the specific challenges and goals of that group."
  },
  {
    question: "How much does it cost?",
    answer: "We believe premium English coaching should be accessible. Our pricing is designed to be affordable without compromising on quality. Full pricing details will be revealed at launch — join the waitlist to get early-bird rates!"
  },
  {
    question: "What happens after I join the waitlist?",
    answer: "You'll receive an exclusive early-access invite before we open to the public, along with a special launch discount. We'll also send you helpful English tips and updates while you wait!"
  }
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden
          ${isOpen
            ? 'bg-gradient-to-r from-primary-light/5 to-secondary-light/5 border-primary-light/30 shadow-lg shadow-primary-light/10'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary-light/30 hover:shadow-md'
          }`}
      >
        {/* Question Row */}
        <div className="flex items-center justify-between gap-4 p-6">
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
              ${isOpen ? 'bg-primary-light text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
              <HelpCircle size={16} />
            </div>
            <span className={`font-bold text-base transition-colors duration-300
              ${isOpen ? 'text-primary-light' : 'text-slate-800 dark:text-white'}`}>
              {faq.question}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300
              ${isOpen ? 'bg-primary-light/20 text-primary-light' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>

        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-6 pl-[4.5rem]">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-light/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary-light/10 text-primary-light text-xs font-bold tracking-widest uppercase mb-4"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight"
          >
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-dark">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400"
          >
            Everything you need to know before you join.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center p-8 rounded-3xl bg-gradient-to-r from-primary-light/10 to-secondary-light/10 border border-primary-light/20"
        >
          <p className="text-slate-700 dark:text-slate-300 font-semibold text-lg mb-2">
            Still have questions?
          </p>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            We're happy to help. Reach out directly to our team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary-light to-secondary-light text-white font-bold shadow-lg shadow-primary-light/20 hover:shadow-xl hover:shadow-primary-light/30 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
