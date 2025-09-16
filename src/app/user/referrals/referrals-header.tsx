// app/users/referrals/referrals-header.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bell, Moon } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

interface ReferralsHeaderProps {
  title?: string;
  userAvatar?: string;
  onNotificationClick?: () => void;
}

const ReferralsHeader = ({
  title = "Referrals",
  userAvatar = "https://i.pravatar.cc/150",
  // userAvatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuDvtFFyb5lWUQBUmImyys5s_UwaOCzqbztJZMCtp78gEsf5Go_VFNWl0a1YAXxTiDuMPzyG3bYRwWEpgkJ7sNFfxbQ2HTRsXBXeySSXyozoTUnNhOX2js61-dPbRUEaz66a1xZdVqhY5HNO0MOQmi3mPIPSYT-y0bUSDwdb6HOxPTwX6y_8HHTTZLzKfFu5GtAXhBfCSk7RZVP661GGaz8hLBNDnT_eE_EgFG9eaHLe55T_zONf8pL2Vcj9cfo304XavwLH4th267f4",
  onNotificationClick,
}: ReferralsHeaderProps) => {
  return (
    <motion.header
      className="flex items-center dark:bg-background justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-10 py-4 dark:border-b-gray-700 bg-white/80 backdrop-blur-lg sticky top-0 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-slate-900 text-xl dark:text-accent-foreground font-bold tracking-tight">
        {title}
      </h1>

      <div className="flex items-center gap-4">
        <motion.button
          onClick={onNotificationClick}
          className="cursor-pointer"
          // className="flex items-center cursor-pointer justify-center rounded-full h-8 w-8 bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <Moon className="w-5 h-5" /> */}
          <ThemeToggle />
        </motion.button>
        <motion.button
          onClick={onNotificationClick}
          className="flex items-center justify-center rounded-full h-8 w-8 dark:bg-transparent cursor-pointer dark:text-white/80 bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="w-5 h-5" />
        </motion.button>

        <motion.div
          className="w-8 h-8 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url("${userAvatar}")` }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </motion.header>
  );
};

export default ReferralsHeader;
