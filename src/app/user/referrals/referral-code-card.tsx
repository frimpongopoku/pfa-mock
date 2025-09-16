// app/users/referrals/referral-code-card.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { ReferralCode } from '@/app/types/referrals';

interface ReferralCodeCardProps {
  referralCode: ReferralCode;
  onCopy?: (code: string) => void;
}

export const ReferralCodeCard: React.FC<ReferralCodeCardProps> = ({ 
  referralCode,
  onCopy 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralCode.fullUrl);
      setCopied(true);
      onCopy?.(referralCode.fullUrl);
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6 border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.h3 
        className="text-slate-800 text-lg font-bold mb-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        Your Referral Code
      </motion.h3>
      
      <motion.div 
        className="relative flex-1"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <input
          className="w-full rounded-md border-slate-300 bg-slate-100 h-14 pl-4 pr-32 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          readOnly
          value={referralCode.fullUrl}
        />
        
        <motion.button
          onClick={handleCopy}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-md h-10 px-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={copied}
        >
          <motion.div
            initial={false}
            animate={{ scale: copied ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <Copy className="w-4 h-4 mr-2" />
          </motion.div>
          
          <motion.div
            className="absolute"
            initial={false}
            animate={{ scale: copied ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Check className="w-4 h-4 mr-2" />
          </motion.div>
          
          {copied ? 'Copied!' : 'Copy'}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};