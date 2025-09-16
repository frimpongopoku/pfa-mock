// app/users/dashboard/spending-chart.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { CategorySpending, BudgetInfo } from '@/app/types/dashboard';

interface SpendingChartProps {
  categories: CategorySpending[];
  budgetInfo: BudgetInfo;
}

const CategoryItem: React.FC<{ category: CategorySpending; index: number }> = ({ 
  category, 
  index 
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <motion.li
      className="flex items-center justify-between"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
    >
      <div className="flex items-center gap-3">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: category.color }}
        />
        <span className="text-slate-600">{category.name}</span>
      </div>
      <span className="font-semibold text-slate-800">{formatCurrency(category.amount)}</span>
    </motion.li>
  );
};

const DonutChart: React.FC<{ categories: CategorySpending[], totalSpent: number }> = ({ 
  categories, 
  totalSpent 
}) => {
  let cumulativePercentage = 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="relative w-48 h-48 mx-auto mb-6">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        {/* Background circle */}
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="3"
        />
        
        {/* Category arcs */}
        {categories.map((category, index) => {
          const strokeDasharray = `${category.percentage} 100`;
          const strokeDashoffset = -cumulativePercentage;
          cumulativePercentage += category.percentage;
          
          return (
            <motion.circle
              key={category.id}
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke={category.color}
              strokeWidth="3"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 100" }}
              animate={{ strokeDasharray }}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
            />
          );
        })}
      </svg>
      
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-slate-500 text-sm">Total Spent</span>
        <span className="text-slate-800 text-2xl font-bold">
          {formatCurrency(totalSpent)}
        </span>
      </motion.div>
    </div>
  );
};

const BudgetProgress: React.FC<{ budgetInfo: BudgetInfo }> = ({ budgetInfo }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <motion.div 
      className="mt-6 pt-4 border-t border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-500">Monthly Budget</span>
        <span className="text-slate-800 font-medium">
          {formatCurrency(budgetInfo.monthlyBudget)}
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${budgetInfo.budgetUsedPercentage}%` }}
          transition={{ duration: 1, delay: 1.4 }}
        />
      </div>
    </motion.div>
  );
};

export const SpendingChart: React.FC<SpendingChartProps> = ({ categories, budgetInfo }) => {
  return (
    <section>
      <motion.h2 
        className="text-[#1e293b] text-2xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Spending by Category
      </motion.h2>
      
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200 border border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <DonutChart categories={categories} totalSpent={budgetInfo.totalSpent} />
        
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <CategoryItem key={category.id} category={category} index={index} />
          ))}
        </ul>
        
        <BudgetProgress budgetInfo={budgetInfo} />
      </motion.div>
    </section>
  );
};