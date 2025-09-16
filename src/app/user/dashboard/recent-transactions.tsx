// app/users/dashboard/recent-transactions.tsx

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Coffee, Bus, LucideIcon } from "lucide-react";
import { Transaction } from "@/app/types/dashboard";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const iconMap: Record<string, LucideIcon> = {
  shopping_cart: ShoppingCart,
  restaurant: Coffee,
  directions_bus: Bus,
};

const TransactionItem: React.FC<{
  transaction: Transaction;
  index: number;
}> = ({ transaction, index }) => {
  const IconComponent = iconMap[transaction.icon] || ShoppingCart;

  const formatCurrency = (amount: number, type: "income" | "expense") => {
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Math.abs(amount));

    return type === "expense" ? `-${formatted}` : `+${formatted}`;
  };

  return (
    <motion.li
      className="flex items-center justify-between"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 4 }}
    >
      <div className="flex items-center gap-4">
        <div className={`rounded-lg p-3 ${transaction.iconColor}`}>
          <IconComponent className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[#1e293b] font-semibold">{transaction.name}</p>
          <p className="text-[#64748b] text-sm">{transaction.category}</p>
        </div>
      </div>
      <p
        className={`font-semibold font-mono ${
          transaction.type === "expense" ? "text-red-500" : "text-green-500"
        }`}
      >
        {formatCurrency(transaction.amount, transaction.type)}
      </p>
    </motion.li>
  );
};

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <section>
      <motion.h2
        className="text-[#1e293b] text-2xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Recent Transactions
      </motion.h2>
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200 border border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ul className="space-y-4">
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
