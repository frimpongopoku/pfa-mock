// app/users/dashboard/unclassified-transactions.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Sparkles } from 'lucide-react';
import { UnclassifiedTransaction } from '@/app/types/dashboard';

interface UnclassifiedTransactionsProps {
  transactions: UnclassifiedTransaction[];
  onAIClassify?: () => void;
}

const UnclassifiedTransactionItem: React.FC<{ 
  transaction: UnclassifiedTransaction; 
  index: number;
}> = ({ transaction, index }) => {
  const formatCurrency = (amount: number, type: 'income' | 'expense') => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Math.abs(amount));
    
    return type === 'expense' ? `-${formatted}` : `+${formatted}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
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
        <div className="bg-yellow-100 text-yellow-600 rounded-lg p-3">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[#1e293b] font-semibold">{transaction.name}</p>
          <p className="text-[#64748b] text-sm">{formatDate(transaction.date)}</p>
        </div>
      </div>
      <p className={`font-semibold font-mono ${
        transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'
      }`}>
        {formatCurrency(transaction.amount, transaction.type)}
      </p>
    </motion.li>
  );
};

export const UnclassifiedTransactions: React.FC<UnclassifiedTransactionsProps> = ({ 
  transactions, 
  onAIClassify 
}) => {
  return (
    <section>
      <motion.h2 
        className="text-[#1e293b] text-2xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Unclassified Transactions
      </motion.h2>
      
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200 border border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ul className="space-y-4 mb-6">
          {transactions.map((transaction, index) => (
            <UnclassifiedTransactionItem 
              key={transaction.id} 
              transaction={transaction} 
              index={index} 
            />
          ))}
        </ul>
        
        <motion.button 
          onClick={onAIClassify}
          className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-3 px-5 rounded-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-blue-500/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles className="w-5 h-5" />
          AI Classify
        </motion.button>
      </motion.div>
    </section>
  );
};