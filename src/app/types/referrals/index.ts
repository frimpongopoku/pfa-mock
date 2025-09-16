// types/referrals/index.ts

export interface ReferralProgress {
  currentReferrals: number;
  targetReferrals: number;
  totalEarned: number;
  progressPercentage: number;
  milestones: RewardMilestone[];
}

export interface RewardMilestone {
  id: string;
  amount: number;
  status: 'earned' | 'next' | 'locked';
  description?: string;
}

export interface ReferralHistoryItem {
  id: string;
  friendName: string;
  status: 'completed' | 'pending' | 'failed';
  reward: number;
  dateReferred?: string;
  dateCompleted?: string;
}

export interface ReferralCode {
  code: string;
  fullUrl: string;
  isActive: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface ShareOption {
  id: string;
  label: string;
  icon: string;
  action: 'social' | 'qr' | 'email';
}

export type FilterStatus = 'all' | 'pending' | 'completed';