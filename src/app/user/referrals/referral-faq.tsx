// app/users/referrals/referral-faq.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/app/types/referrals";

interface ReferralFAQProps {
  faqs: FAQ[];
}

const FAQItem: React.FC<{
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      className="p-4 rounded-lg dark:bg-transparent dark:border-gray-700 bg-slate-50 border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.button
        className="flex cursor-pointer items-center justify-between gap-4 w-full text-left"
        onClick={onToggle}
        whileHover={{ x: 2 }}
      >
        <p className="text-slate-800 dark:text-white/70 font-medium">{faq.question}</p>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-slate-600 mt-4 dark:text-white/60">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ReferralFAQ: React.FC<ReferralFAQProps> = ({ faqs }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (faqId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(faqId)) {
      newOpenItems.delete(faqId);
    } else {
      newOpenItems.add(faqId);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <motion.section
      className="bg-white dark:bg-[var(--custom-card-background)] dark:border-gray-800 rounded-xl shadow-sm p-8 border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <motion.h2
        className="text-slate-900 text-2xl dark:text-white/80 font-bold tracking-tight mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            index={index}
            isOpen={openItems.has(faq.id)}
            onToggle={() => toggleItem(faq.id)}
          />
        ))}
      </div>
    </motion.section>
  );
};
