// app/users/dashboard/dashboard-sidebar.tsx

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Receipt,
  PieChart,
  Trophy,
  TrendingUp,
  Settings,
  LogOut,
  Coins,
} from "lucide-react";

import { User, NavItem } from "@/app/types/dashboard";

interface DashboardSidebarProps {
  user: User;
  activeItem?: string;
}

const navigationItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "LayoutDashboard",
    href: "#",
    isActive: true,
  },
  { id: "transactions", label: "Transactions", icon: "Receipt", href: "#" },
  { id: "budgets", label: "Budgets", icon: "PieChart", href: "#" },
  { id: "goals", label: "Goals", icon: "Trophy", href: "#" },
  { id: "reports", label: "Reports", icon: "TrendingUp", href: "#" },
];

const bottomItems: NavItem[] = [
  { id: "settings", label: "Settings", icon: "Settings", href: "#" },
  { id: "logout", label: "Log Out", icon: "LogOut", href: "#" },
];

const iconMap = {
  LayoutDashboard,
  Receipt,
  PieChart,
  Trophy,
  TrendingUp,
  Settings,
  LogOut,
};

const NavLink = ({ item }: { item: NavItem }) => {
  const IconComponent = iconMap[item.icon as keyof typeof iconMap];

  return (
    <motion.a
      href={item.href}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
        item.isActive
          ? "bg-[#137fec] text-white shadow-lg shadow-blue-500/20"
          : "text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#1e293b]"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <IconComponent className="w-5 h-5" />
      <span>{item.label}</span>
    </motion.a>
  );
};

export const UserProfile = ({ user }: { user: User }) => {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-[#137fec]"
        style={{ backgroundImage: `url("${user.avatar}")` }}
      />
      <div className="flex flex-col">
        <h2 className="text-[#1e293b] text-lg font-semibold">{user.name}</h2>
        <p className="text-[#64748b] text-sm">{user.accountType}</p>
      </div>
    </div>
  );
};

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  user,
  activeItem = "dashboard",
}) => {
  const navigationWithActive = navigationItems.map((item) => ({
    ...item,
    isActive: item.id === activeItem,
  }));

  return (
    <aside className="flex flex-col w-72 bg-gradient-to-b from-white to-[#f8fafc] p-6 shrink-0 border-r border-slate-200">
      {/* Brand Header */}
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-[#137fec] text-4xl flex items-center justify-center">
          <Coins className="w-10 h-10 drop-shadow-lg" />
        </div>
        <h1 className="text-[#1e293b] text-2xl font-bold">Pennywise</h1>
      </motion.div>

      {/* User Profile */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <UserProfile user={user} />
      </motion.div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navigationWithActive.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <NavLink item={item} />
          </motion.div>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto">
        {bottomItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <NavLink item={item} />
          </motion.div>
        ))}
      </div>
    </aside>
  );
};
