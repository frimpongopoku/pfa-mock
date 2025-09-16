// app/users/dashboard/dashboard-view.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { AccountCards } from "./account-cards";
import { ReferralBanner } from "./referral-banner";
import { RecentTransactions } from "./recent-transactions";

import { UnclassifiedTransactions } from "./unclassified-transactions";
import {
  User,
  Account,
  Transaction,
  CategorySpending,
  BudgetInfo,
  UnclassifiedTransaction,
} from "@/app/types/dashboard";
import { SpendingChart } from "./spending-charts";

// Mock data - replace with your actual data fetching
const mockUser: User = {
  name: "Sophia",
  accountType: "Personal Account",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuARQWHLs_YTJCG9aGoU8vHEq65at4U1yJVWUDTYjgL5VKEJmnD7zzfWGc_VJlWALu_z5i0845O8Cj7Uv-XDz6K1XaVTu2m0lgivdz0ZF1JZurhG15fvnLZ0k-Ny5veu2vxl3adSRya0ytdDIRxIhHAMg9S5FDHZZnhWx7_BMKptpv_OHRhOCYUQLTWQs4--hJ25LRLTNs3iyYRQ-U99hK3UPb1zLHOg7XwelVrpFB2hbwo_lmBzGce764hZu4T3p3eha6qEArJ5MVIs",
};

const mockAccounts: Account[] = [
  {
    id: "1",
    name: "checking",
    balance: 2345.67,
    type: "checking",
    backgroundImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZORu0DwfvQUvY8fEfBCHP3GbzAIb26nuFgx_hByCJ4UmoedfXMxdnWhONV2Xq4nHZ6ArXYvk1UzDKH-ZQKryVfpOxc9_cYpEU0rrc5aTB9XkVUAEhfCQGrxgTzx8d_O7sUvS0Pgew5v2Qz1xzC5zckzwVMefH4nMZGQTdw1cef86ddXk2gz7LcgC9nPLk8sgueD8gwPBgnuT7CqTNy8PQQDdY-M7v5r8xpTTOLZm_dOqCYWL27KDOov72vedz2jPs7WjzaxOviTAz",
  },
  {
    id: "2",
    name: "savings",
    balance: 10500.0,
    type: "savings",
    backgroundImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANGx1_yk-hDZvsHatsLOOgQi4NhGIdd32z97uULLwssHArF4hut2XyhVTEnvfjWsHWeftriuGIO0mOuOpwy-1aU11R2AtbDyt63ifs3mmjqp6BaD9HLdrLbIByP1YAL5jpQS3wws7cpzcjZ5mBNPXIli2z8PysQOMI1PUhT277BoCnyyDYS1nbTY_nhf5Nu0i5m2e7qNoZLEYa2fsabz9Ik8TpHHseM5NzpxlaZ52o32bvwpGt2S0oeFsmeGKcemcLGdF1TEnRo1jE",
  },
];

const mockTransactions: Transaction[] = [
  {
    id: "1",
    name: "Online Store",
    category: "Shopping",
    amount: 78.5,
    date: "2023-10-30",
    type: "expense",
    icon: "shopping_cart",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    id: "2",
    name: "The Corner Cafe",
    category: "Food & Dining",
    amount: 24.3,
    date: "2023-10-30",
    type: "expense",
    icon: "restaurant",
    iconColor: "bg-green-100 text-green-600",
  },
  {
    id: "3",
    name: "Monthly Transit Pass",
    category: "Transportation",
    amount: 55.0,
    date: "2023-10-29",
    type: "expense",
    icon: "directions_bus",
    iconColor: "bg-purple-100 text-purple-600",
  },
];

const mockCategories: CategorySpending[] = [
  {
    id: "1",
    name: "Shopping",
    amount: 210.23,
    color: "#3b82f6",
    percentage: 40,
  },
  {
    id: "2",
    name: "Food & Dining",
    amount: 145.55,
    color: "#10b981",
    percentage: 25,
  },
  {
    id: "3",
    name: "Transportation",
    amount: 95.0,
    color: "#8b5cf6",
    percentage: 20,
  },
];

const mockBudgetInfo: BudgetInfo = {
  totalSpent: 450.78,
  monthlyBudget: 1000,
  budgetUsedPercentage: 45,
};

const mockUnclassifiedTransactions: UnclassifiedTransaction[] = [
  {
    id: "1",
    name: "Stripe Payment",
    amount: 2000.0,
    date: "2023-10-28",
    type: "income",
  },
  {
    id: "2",
    name: "Venmo Transfer",
    amount: 15.0,
    date: "2023-10-25",
    type: "expense",
  },
];

interface DashboardViewProps {
  user?: User;
  accounts?: Account[];
  transactions?: Transaction[];
  categories?: CategorySpending[];
  budgetInfo?: BudgetInfo;
  unclassifiedTransactions?: UnclassifiedTransaction[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user = mockUser,
  accounts = mockAccounts,
  transactions = mockTransactions,
  categories = mockCategories,
  budgetInfo = mockBudgetInfo,
  unclassifiedTransactions = mockUnclassifiedTransactions,
}) => {
  // Event handlers - replace with your actual implementations
  const handleConnectAccount = () => {
    console.log("Connect account clicked");
  };

  const handleAddTransaction = () => {
    console.log("Add transaction clicked");
  };

  const handleReferClick = () => {
    console.log("Refer clicked");
  };

  const handleAIClassify = () => {
    console.log("AI Classify clicked");
  };

  return (
    <>
      <main className="flex-1 p-8 overflow-y-auto">
        <DashboardHeader
          onConnectAccount={handleConnectAccount}
          onAddTransaction={handleAddTransaction}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <AccountCards accounts={accounts} />
            <ReferralBanner onReferClick={handleReferClick} />
            <RecentTransactions transactions={transactions} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-8">
            <SpendingChart categories={categories} budgetInfo={budgetInfo} />
            <UnclassifiedTransactions
              transactions={unclassifiedTransactions}
              onAIClassify={handleAIClassify}
            />
          </div>
        </div>
      </main>
    </>
  );
};
