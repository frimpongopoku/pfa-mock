// app/users/referrals/referrals-view.tsx

"use client";

import React from "react";
// import { ReferralsHeader } from "./referrals-header";
import { ReferralsHero } from "./referrals-hero";
import { RewardProgress } from "./reward-progress";
import { ReferralHistory } from "./referral-history";
import { ReferralFAQ } from "./referral-faq";
import { ReferralCodeCard } from "./referral-code-card";
import { ShareOptionsCard } from "./share-options-card";
import {
  ReferralProgress,
  ReferralHistoryItem,
  ReferralCode,
  FAQ,
  ShareOption,
} from "@/app/types/referrals";

// Mock data - replace with your actual data fetching
const mockProgress: ReferralProgress = {
  currentReferrals: 2,
  targetReferrals: 5,
  totalEarned: 20,
  progressPercentage: 40,
  milestones: [
    { id: "1", amount: 10, status: "earned" },
    { id: "2", amount: 10, status: "earned" },
    { id: "3", amount: 10, status: "next" },
    { id: "4", amount: 10, status: "locked" },
    { id: "5", amount: 10, status: "locked" },
  ],
};

const mockReferrals: ReferralHistoryItem[] = [
  {
    id: "1",
    friendName: "Sophia Clark",
    status: "completed",
    reward: 10,
    dateReferred: "2024-01-15",
    dateCompleted: "2024-01-20",
  },
  {
    id: "2",
    friendName: "Ethan Carter",
    status: "pending",
    reward: 0,
    dateReferred: "2024-01-18",
  },
  {
    id: "3",
    friendName: "Olivia Bennett",
    status: "completed",
    reward: 10,
    dateReferred: "2024-01-10",
    dateCompleted: "2024-01-12",
  },
];

const mockReferralCode: ReferralCode = {
  code: "aBcD123",
  fullUrl: "celery-artefact.mrfrimpong.com/user/ref/aBcD123",
  isActive: true,
};

const mockFAQs: FAQ[] = [
  {
    id: "1",
    question: "How does the referral program work?",
    answer:
      "Simply share your referral link. When a friend signs up using your link and completes a qualifying action (like making their first transaction), both of you will receive a reward. The specific reward amount is shown in your referral dashboard.",
  },
  {
    id: "2",
    question: "When will I receive my reward?",
    answer:
      'Rewards are typically credited to your account within 24-48 hours after your referred friend successfully completes the required action. You can track the status of your referrals in the "Referral History" table above.',
  },
  {
    id: "3",
    question: "Is there a limit to how many friends I can refer?",
    answer:
      "Generally, there is no limit to the number of friends you can refer! However, we reserve the right to adjust the program terms. Please refer to the official terms and conditions for the most up-to-date information.",
  },
];

interface ReferralsViewProps {
  progress?: ReferralProgress;
  referrals?: ReferralHistoryItem[];
  referralCode?: ReferralCode;
  faqs?: FAQ[];
  shareOptions?: ShareOption[];
  userAvatar?: string;
}

export const ReferralsView: React.FC<ReferralsViewProps> = ({
  progress = mockProgress,
  referrals = mockReferrals,
  referralCode = mockReferralCode,
  faqs = mockFAQs,
  shareOptions,
  userAvatar,
}) => {
  // Event handlers - replace with your actual implementations
  const handleNotificationClick = () => {
    console.log("Notification clicked");
  };

  const handleCopyReferralCode = (code: string) => {
    console.log("Referral code copied:", code);
  };

  const handleShareAction = (action: ShareOption["action"]) => {
    console.log("Share action:", action);

    switch (action) {
      case "social":
        // Open social media sharing modal/popup
        break;
      case "qr":
        // Generate and display QR code
        break;
      case "email":
        // Open email composer with pre-filled content
        break;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* <div className="flex flex-col flex-1">
        <ReferralsHeader
          userAvatar={userAvatar}
          onNotificationClick={handleNotificationClick}
        /> */}

      {/* <main className="flex-1 overflow-y-auto p-10 bg-slate-50"> */}
      <ReferralsHero
        referralCode={referralCode}
        onCopy={handleCopyReferralCode}
      />
      <div className="grid grid-cols-10 gap-8">
        {/* Main Content */}
        <div className="col-span-10 lg:col-span-7 flex flex-col gap-8">
          <RewardProgress progress={progress} />
          <ReferralHistory referrals={referrals} />
          <ReferralFAQ faqs={faqs} />
        </div>

        {/* Sidebar */}
        <div className="col-span-10 lg:col-span-3">
          <div className="sticky top-28 flex flex-col gap-6">
            {/* <ReferralCodeCard
              referralCode={referralCode}
              onCopy={handleCopyReferralCode}
            /> */}
            <ShareOptionsCard
              shareOptions={shareOptions}
              onShareAction={handleShareAction}
            />
          </div>
        </div>
      </div>
      {/* </main> */}
      {/* </div> */}
    </div>
  );
};
