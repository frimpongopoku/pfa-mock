// app/users/dashboard/account-cards.tsx

import React from "react";
import { motion } from "framer-motion";
import { Account } from "@/app/types/dashboard";

interface AccountCardProps {
  account: Account;
  index: number;
}

interface AccountCardsProps {
  accounts: Account[];
}

const AccountCard: React.FC<AccountCardProps> = ({ account, index }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group shadow-lg dark:shadow-gray-800 shadow-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url("${account.backgroundImage}")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative p-6 flex flex-col justify-end h-48">
        <motion.h3
          className="text-white text-xl font-semibold capitalize"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {account.name}
        </motion.h3>
        <motion.p
          className="text-gray-300 text-2xl font-mono font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {formatCurrency(account.balance)}
        </motion.p>
      </div>
    </motion.div>
  );
};

export const AccountCards: React.FC<AccountCardsProps> = ({ accounts }) => {
  return (
    <section className="mb-8">
      <motion.div
        className="flex justify-between items-center mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[#1e293b] text-2xl font-bold tracking-tight dark:text-white/80">
          Accounts
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account, index) => (
          <AccountCard key={account.id} account={account} index={index} />
        ))}
      </div>
    </section>
  );
};
