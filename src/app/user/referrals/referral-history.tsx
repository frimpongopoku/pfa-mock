// app/users/referrals/referral-history.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReferralHistoryItem, FilterStatus } from "@/app/types/referrals";

interface ReferralHistoryProps {
  referrals: ReferralHistoryItem[];
}

const StatusBadge: React.FC<{ status: ReferralHistoryItem["status"] }> = ({
  status,
}) => {
  const getStatusClasses = () => {
    switch (status) {
      case "completed":
        return "bg-green-100  dark:bg-green-100/80 text-green-700";
      case "pending":
        return "bg-yellow-100  dark:bg-yellow-100/80  text-yellow-800";
      case "failed":
        return "bg-red-100  dark:bg-red-100/80 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getStatusText = () => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses()}`}
    >
      {getStatusText()}
    </span>
  );
};

const FilterButton: React.FC<{
  status: FilterStatus;
  isActive: boolean;
  onClick: (status: FilterStatus) => void;
  children: React.ReactNode;
}> = ({ status, isActive, onClick, children }) => {
  return (
    <motion.button
      onClick={() => onClick(status)}
      className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-slate-100 dark:bg-transparent dark:hover:bg-gray-800 dark:text-white/70 cursor-pointer  text-slate-700 hover:bg-slate-200"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

const ReferralRow: React.FC<{
  referral: ReferralHistoryItem;
  index: number;
}> = ({ referral, index }) => {
  return (
    <motion.tr
      className="border-b dark:border-gray-800 border-slate-200 dark:hover:bg-transparent hover:bg-slate-50"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ x: 2 }}
    >
      <td className="px-4 py-4 text-slate-800 dark:text-white/60 font-medium">
        {referral.friendName}
      </td>
      <td className="px-4 py-4">
        <StatusBadge status={referral.status} />
      </td>
      <td className="px-4 py-4 text-slate-700 dark:text-white/70 text-right font-medium">
        ${referral.reward}
      </td>
    </motion.tr>
  );
};

export const ReferralHistory: React.FC<ReferralHistoryProps> = ({
  referrals,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");

  const filteredReferrals = referrals.filter((referral) => {
    if (activeFilter === "all") return true;
    return referral.status === activeFilter;
  });

  return (
    <motion.section
      className="bg-white dark:bg-[var(--custom-card-background)] dark:border-gray-800 rounded-xl shadow-sm p-8 border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h2
          className="text-slate-900 text-2xl dark:text-white/80 font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Referral History
        </motion.h2>

        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <FilterButton
            status="all"
            isActive={activeFilter === "all"}
            onClick={setActiveFilter}
          >
            All
          </FilterButton>
          <FilterButton
            status="pending"
            isActive={activeFilter === "pending"}
            onClick={setActiveFilter}
          >
            Pending
          </FilterButton>
          <FilterButton
            status="completed"
            isActive={activeFilter === "completed"}
            onClick={setActiveFilter}
          >
            Completed
          </FilterButton>
        </motion.div>
      </div>

      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <table className="w-full text-left">
          <thead>
            <tr className="border-b dark:border-gray-800 border-slate-200">
              <th className="px-4 py-3 text-sm font-semibold text-slate-500 dark:text-white/70">
                Friend's Name
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-500 dark:text-white/70">
                Status
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-500 dark:text-white/70 text-right">
                Reward
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredReferrals.map((referral, index) => (
              <ReferralRow
                key={referral.id}
                referral={referral}
                index={index}
              />
            ))}
          </tbody>
        </table>

        {filteredReferrals.length === 0 && (
          <motion.div
            className="text-center py-8 text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            No referrals found for the selected filter.
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};
