// app/users/dashboard/referral-banner.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone } from 'lucide-react';

interface ReferralBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onReferClick?: () => void;
}

export const ReferralBanner: React.FC<ReferralBannerProps> = ({
  title = "Refer a Friend, Earn $50!",
  subtitle = "Share your love for Pennywise and get rewarded.",
  buttonText = "Refer Now",
  onReferClick
}) => {
  return (
    <section className="mb-8">
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl shadow-lg shadow-blue-500/20 flex items-center justify-between"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <div>
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-blue-100 mt-1">{subtitle}</p>
        </div>
        <motion.button 
          onClick={onReferClick}
          className="bg-white/20 text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Megaphone className="w-4 h-4" />
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
};