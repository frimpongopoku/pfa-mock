// app/users/referrals/share-options-card.tsx

import React from "react";
import { motion } from "framer-motion";
import { Share2, QrCode, Mail } from "lucide-react";
import { ShareOption } from "@/app/types/referrals";

interface ShareOptionsCardProps {
  shareOptions?: ShareOption[];
  onShareAction?: (action: ShareOption["action"]) => void;
}

const defaultShareOptions: ShareOption[] = [
  {
    id: "1",
    label: "Share via Social Media",
    icon: "Share2",
    action: "social",
  },
  {
    id: "2",
    label: "Generate QR Code",
    icon: "QrCode",
    action: "qr",
  },
  {
    id: "3",
    label: "Invite by Email",
    icon: "Mail",
    action: "email",
  },
];

const iconMap = {
  Share2,
  QrCode,
  Mail,
};

const ShareButton: React.FC<{
  option: ShareOption;
  index: number;
  onClick: (action: ShareOption["action"]) => void;
}> = ({ option, index, onClick }) => {
  const IconComponent = iconMap[option.icon as keyof typeof iconMap];

  return (
    <motion.button
      onClick={() => onClick(option.action)}
      className="flex items-center justify-center cursor-pointer dark:hover:bg-gray-900 gap-2 dark:bg-gray-800 dark:text-white/70 rounded-md h-11 px-4 bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <IconComponent className="w-5 h-5" />
      {option.label}
    </motion.button>
  );
};

export const ShareOptionsCard: React.FC<ShareOptionsCardProps> = ({
  shareOptions = defaultShareOptions,
  onShareAction,
}) => {
  const handleShareAction = (action: ShareOption["action"]) => {
    onShareAction?.(action);

    // Default implementations for demo purposes
    switch (action) {
      case "social":
        console.log("Opening social media share");
        break;
      case "qr":
        console.log("Generating QR code");
        break;
      case "email":
        console.log("Opening email composer");
        break;
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-[var(--custom-card-background)] dark:border-gray-800 rounded-xl shadow-sm p-6 border border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <motion.h3
        className="text-slate-800 text-lg font-bold dark:text-white/80 mb-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        Share with friends
      </motion.h3>

      <div className="flex flex-col gap-3">
        {shareOptions.map((option, index) => (
          <ShareButton
            key={option.id}
            option={option}
            index={index}
            onClick={handleShareAction}
          />
        ))}
      </div>
    </motion.div>
  );
};
