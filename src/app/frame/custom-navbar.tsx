"use client";
import React from "react";
import { motion } from "framer-motion";
function CustomNavBar() {
  return (
    <motion.div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-10 py-4 bg-white/80 backdrop-blur-lg sticky top-0 z-10">
        <h1 className="text-slate-900 text-2xl font-bold tracking-tight">
          Referrals
        </h1>

        <div className="flex items-center gap-4">
          <motion.button
            // onClick={onNotificationClick}
            className="flex items-center justify-center rounded-full h-10 w-10 bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Bell className="w-5 h-5" /> */}
          </motion.button>

          <motion.div
            className="w-10 h-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvtFFyb5lWUQBUmImyys5s_UwaOCzqbztJZMCtp78gEsf5Go_VFNWl0a1YAXxTiDuMPzyG3bYRwWEpgkJ7sNFfxbQ2HTRsXBXeySSXyozoTUnNhOX2js61-dPbRUEaz66a1xZdVqhY5HNO0MOQmi3mPIPSYT-y0bUSDwdb6HOxPTwX6y_8HHTTZLzKfFu5GtAXhBfCSk7RZVP661GGaz8hLBNDnT_eE_EgFG9eaHLe55T_zONf8pL2Vcj9cfo304XavwLH4th267f4")`,
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </header>
    </motion.div>
  );
}

export default CustomNavBar;
