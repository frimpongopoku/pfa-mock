// app/users/referrals/reward-progress.tsx

import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { ReferralProgress, RewardMilestone } from "@/app/types/referrals";

interface RewardProgressProps {
  progress: ReferralProgress;
}

const MilestoneIcon: React.FC<{
  milestone: RewardMilestone;
  index: number;
}> = ({ milestone, index }) => {
  const getStatusClasses = () => {
    switch (milestone.status) {
      case "earned":
        return "bg-blue-500/10 ring-4 ring-blue-500/20 text-blue-500";
      case "next":
        return "bg-slate-100 dark:bg-transparent dark:border-gray-600 border-2 border-dashed border-slate-300 text-slate-400";
      default:
        return "bg-slate-100 dark:bg-transparent dark:border-gray-600 border-2 border-dashed border-slate-300 text-slate-400";
    }
  };

  const getTextOpacity = () => {
    return milestone.status === "earned" ? "opacity-100" : "opacity-60";
  };

  return (
    <motion.div
      className={`flex flex-col items-center gap-2 ${getTextOpacity()}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center ${getStatusClasses()}`}
      >
        <Trophy className="w-8 h-8" />
      </div>
      <p className="text-slate-800 font-semibold dark:text-white/80">
        ${milestone.amount}
      </p>
      <p className="text-slate-500 text-sm dark:text-white/60">
        {milestone.status === "earned"
          ? "Earned"
          : milestone.status === "next"
          ? "Next"
          : ""}
      </p>
    </motion.div>
  );
};

export const RewardProgress: React.FC<RewardProgressProps> = ({ progress }) => {
  return (
    <motion.section
      className="bg-white flex flex-col lg:flex-row dark:bg-[var(--custom-card-background)] dark:border-gray-800 rounded-xl shadow-lg p-8 border border-slate-200 ring-4 dark:ring-gray-800 ring-white/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h2
        className="text-slate-900 dark:text-white/80  text-xl md:text-2xl font-bold tracking-tight mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Your Reward Progress
      </motion.h2>

      <motion.p
        className="text-slate-600 text-sm md:text-base dark:text-white/70 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        You're on your way to earning more rewards. Keep it up!
      </motion.p>

      <div className="flex flex-col gap-4">
        <motion.div
          className="flex items-start flex-col lg:items-center lg:flex-row justify-between"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-700 dark:text-white/70 font-medium">
            {progress.currentReferrals} of {progress.targetReferrals} friends
            have signed up
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            ${progress.totalEarned} earned so far
          </p>
        </motion.div>

        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress.progressPercentage}%` }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>

        <div className="grid grid-cols-5 gap-4 mt-4 text-center">
          {progress.milestones.map((milestone, index) => (
            <MilestoneIcon
              key={milestone.id}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
