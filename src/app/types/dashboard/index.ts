// types/dashboard/index.ts

export interface User {
  name: string;
  accountType: string;
  avatar: string;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  backgroundImage: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
}

export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  icon: string;
  iconColor: string;
}

export interface CategorySpending {
  id: string;
  name: string;
  amount: number;
  color: string;
  percentage: number;
}

export interface BudgetInfo {
  totalSpent: number;
  monthlyBudget: number;
  budgetUsedPercentage: number;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export interface UnclassifiedTransaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}