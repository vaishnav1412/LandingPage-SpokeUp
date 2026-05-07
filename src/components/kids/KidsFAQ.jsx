import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is this program suitable for complete beginners?",
    answer: "Absolutely! Our Basic Level is specially designed for children who are just starting their English journey or are shy to speak. We focus on building confidence first."
  },
  {
    question: "How long are the sessions?",
    answer: "Each session is 45 minutes long. Research shows this is the ideal duration to keep children engaged and focused without causing fatigue."
  },
  {
    question: "Can I choose the time for the sessions?",
    answer: "Yes, we offer flexible scheduling to fit into your child's routine. You can discuss preferred timings with our team during the demo call."
  },
  {
    question: "Will I get updates on my child's progress?",
    answer: "Definitely. We provide regular feedback after sessions and detailed progress reports to track improvement in speaking and confidence."
  },
  {
    question: "Is there a discount for enrolling siblings?",
    answer: "Yes, we have special family packages for siblings. Please mention this during your free demo session."
  }
];

const KidsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Frequently Asked <span className="text-primary-light">Questions</span></h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Everything you need to know about our program</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-primary-light" />
                ) : (
                  <Plus size={20} className="text-slate-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-6 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KidsFAQ;
