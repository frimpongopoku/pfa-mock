// app/users/dashboard/dashboard-header.tsx

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Plus } from "lucide-react";
import CustomButton from "@/components/ui/custom-button";

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
  onConnectAccount?: () => void;
  onAddTransaction?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title = "Dashboard",
  subtitle = "An overview of your financial landscape.",
  onConnectAccount,
  onAddTransaction,
}) => {
  return (
    <motion.header
      className="flex justify-between items-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h1 className="text-[#1e293b] text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-[#64748b] mt-1">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4">
        <CustomButton
          className="bg-[#137fec] text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 hover:bg-[#3b82f6] transition-colors duration-200 shadow-lg shadow-blue-500/30"
          onClick={onAddTransaction}
        >
          <Plus className="w-4 h-4" />
          Connect Account
        </CustomButton>
        <CustomButton
          disabled
          onClick={onConnectAccount}
          className="bg-white text-slate-700 font-semibold py-2 px-5 rounded-lg flex items-center gap-2 hover:bg-slate-50 transition-colors duration-200 shadow-lg shadow-slate-200 border border-slate-200"
          // whileHover={{ scale: 1.02 }}
          // whileTap={{ scale: 0.98 }}
        >
          <CreditCard className="w-4 h-4" />
          Add Transaction
        </CustomButton>

        {/* <motion.button 
          onClick={onAddTransaction}
          className="bg-[#137fec] text-white font-semibold py-2 px-5 rounded-lg flex items-center gap-2 hover:bg-[#3b82f6] transition-colors duration-200 shadow-lg shadow-blue-500/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-4 h-4" />
          Add Transaction
        </motion.button> */}
      </div>
    </motion.header>
  );
};
