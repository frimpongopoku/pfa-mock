import React from "react";
import { motion } from "framer-motion";
import { CategorySpending, BudgetInfo } from "@/app/types/dashboard";

interface SpendingChartProps {
  categories: CategorySpending[];
  budgetInfo: BudgetInfo;
}

const CategoryItem: React.FC<{ category: CategorySpending; index: number }> = ({
  category,
  index,
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <motion.li
      className="flex items-center justify-between"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
      aria-label={`${category.name}: ${formatCurrency(category.amount)}`}
      role="listitem"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: category.color }}
          aria-hidden="true"
        />
        <span className="text-slate-600 dark:text-white/70">
          {category.name}
        </span>
      </div>
      <span className="font-semibold dark:text-white/80 text-slate-800">
        {formatCurrency(category.amount)}
      </span>
    </motion.li>
  );
};

const DonutChart: React.FC<{
  categories: CategorySpending[];
  totalSpent: number;
}> = ({ categories, totalSpent }) => {
  let cumulativePercentage = 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div
      className="relative w-48 h-48 mx-auto mb-6"
      role="img"
      aria-label={`Donut chart showing spending by category. Total spent: ${formatCurrency(
        totalSpent
      )}`}
      tabIndex={0}
    >
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 36 36"
        aria-hidden="true"
        focusable="false"
      >
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
              aria-label={`${category.name}: ${category.percentage}% (${formatCurrency(
                category.amount
              )})`}
              tabIndex={-1}
            />
          );
        })}
      </svg>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        aria-live="polite"
      >
        <span className="text-slate-500 text-sm dark:text-white/70">
          Total Spent
        </span>
        <span
          className="text-slate-800 text-2xl dark:text-white/80 font-bold"
          aria-label={`Total spent: ${formatCurrency(totalSpent)}`}
        >
          {formatCurrency(totalSpent)}
        </span>
      </motion.div>
    </div>
  );
};

const BudgetProgress: React.FC<{ budgetInfo: BudgetInfo }> = ({
  budgetInfo,
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <motion.div
      className="mt-6 pt-4 border-t dark:border-gray-700 border-slate-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      aria-label={`Budget progress: ${budgetInfo.budgetUsedPercentage}% used of ${formatCurrency(
        budgetInfo.monthlyBudget
      )}`}
      role="region"
      tabIndex={0}
    >
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-500 dark:text-white/70">
          Monthly Budget
        </span>
        <span className="text-slate-800 dark:text-white/80 font-medium">
          {formatCurrency(budgetInfo.monthlyBudget)}
        </span>
      </div>
      <div
        className="w-full bg-slate-200 rounded-full h-2.5 mt-2 overflow-hidden"
        role="progressbar"
        aria-valuenow={budgetInfo.budgetUsedPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Budget used: ${budgetInfo.budgetUsedPercentage}%`}
        tabIndex={-1}
      >
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

export const SpendingChart: React.FC<SpendingChartProps> = ({
  categories,
  budgetInfo,
}) => {
  return (
    <section aria-labelledby="spending-by-category-heading">
      <motion.h2
        id="spending-by-category-heading"
        className="text-[#1e293b] text-2xl font-bold dark:text-white/80 tracking-tight mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Spending by Category
      </motion.h2>

      <motion.div
        className="bg-white p-6 rounded-2xl shadow-lg dark:bg-[var(--custom-card-background)]  dark:border-slate-800 dark:shadow-gray-900 shadow-slate-200 border border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        role="region"
        aria-labelledby="spending-by-category-heading"
      >
        <DonutChart
          categories={categories}
          totalSpent={budgetInfo.totalSpent}
        />

        <ul className="space-y-4" role="list" aria-label="Spending categories">
          {categories.map((category, index) => (
            <CategoryItem key={category.id} category={category} index={index} />
          ))}
        </ul>

        <BudgetProgress budgetInfo={budgetInfo} />
      </motion.div>
    </section>
  );
};
