// app/users/referrals/referrals-hero.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle, Copy } from "lucide-react";

interface ReferralsHeroProps {
  title?: string;
  description?: string;
  heroImageUrl?: string;
  referralCode?: {
    code: string;
    fullUrl: string;
    isActive: boolean;
  };
  onCopy?: (code: string) => void;
}

export const ReferralsHero: React.FC<ReferralsHeroProps> = ({
  referralCode = {
    code: "ABCD1234",
    fullUrl: "https://yourapp.com/referral/ABCD1234",
    isActive: true,
  },
  onCopy,
  title = "Invite friends, earn rewards.",
  description = "Share your unique referral link. When your friends sign up and make their first transaction, you'll both get a GH¢ 5 bonus. It's that simple!",
  heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAm_0T29GV4nuCitvBve_MZb2BXLx1cvk3cJAVmbZOQCdp36mYIDZ0F5ReKIgnPpdYYp1Fr8mTvEOCP3FDZxHA1QGWkqN1G2JGLsRjIrFP5Ljt6xVfx1PB7ZdrmqX6XgPlvUrZaeqOK8Tn1J1bhLdcH_N3kBela5UBCBydrfroM8OT00VH9b2vPSCv7E4_u0tSaHJmmZFdkIADXuNjKZ9QWp88uLlX-ICr-nWOz6iF0J21B--cDwfTjpxG_8XxNZ6dMNB7Y-m-KXSms",
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
      console.error("Failed to copy:", error);
    }
  };
  return (
    <motion.section
      className="bg-white dark:bg-[var(--custom-card-background)] dark:border-gray-800 rounded-xl shadow-sm p-8 border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        <motion.div
          className="flex flex-col col-span-3 gap-6 text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-slate-900 text-xl dark:text-white/80 md:text-4xl font-bold leading-tight tracking-tighter">
            {title}
          </h1>
          <p className="text-slate-600 text-sm md:lg dark:text-white/70 leading-relaxed">
            {description}
          </p>
          <motion.div
            className="relative flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <input
              className="w-full rounded-md dark:bg-gray-800 dark:text-white/80 border-slate-300 bg-slate-100 h-14 pl-4 pr-32 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
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
                <CheckCircle className="w-4 h-4 mr-12" />
              </motion.div>

              {copied ? "Copied!" : "Copy"}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full bg-centern hidden lg:block  bg-no-repeat aspect-square bg-cover rounded-lg"
          style={{ backgroundImage: `url("${heroImageUrl}")` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        />
      </div>
    </motion.section>
  );
};
