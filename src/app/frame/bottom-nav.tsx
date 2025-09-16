// app/components/navigation/mobile-bottom-nav.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Receipt,
  MoreHorizontal,
  Plus,
  Lock,
} from "lucide-react";
import { BottomNavItem, FloatingActionButton } from "@/app/types/navigation";
import { usePathname, useRouter } from "next/navigation";

interface MobileBottomNavProps {
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  onFabClick?: () => void;
  fabButton?: FloatingActionButton;
  className?: string;
}

const defaultNavItems: BottomNavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "LayoutDashboard",
    href: "/user/dashboard",
  },
  {
    id: "referrals",
    label: "Referrals",
    icon: "Users",
    href: "/user/referrals",
  },
  {
    id: "reports",
    label: "Reports",
    icon: "TrendingUp",
    href: "/reports",
    locked: true,
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: "Receipt",
    href: "/transactions",
    locked: true,
  },
  {
    id: "more",
    label: "More",
    icon: "MoreHorizontal",
    href: "/more",
    locked: true,
  },
];

const iconMap = {
  LayoutDashboard,
  Users,
  TrendingUp,
  Receipt,
  MoreHorizontal,
  Plus,
};

const NavItem: React.FC<{
  item: BottomNavItem;
  isActive: boolean;
  onClick: (itemId: any) => void;
  position: "left" | "right";
}> = ({ item, isActive, onClick, position }) => {
  const IconComponent = iconMap[item.icon as keyof typeof iconMap];

  return (
    <motion.button
      onClick={() => onClick(item)}
      className={`flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 ${
        isActive ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
      }`}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: position === "left" ? 0.1 : 0.2,
      }}
    >
      <motion.div
        className={`p-2 rounded-xl transition-all duration-300 ${
          isActive ? "bg-blue-100 scale-110" : "hover:bg-slate-100"
        }`}
        animate={{
          scale: isActive ? 1.1 : 1,
          backgroundColor: isActive ? "#dbeafe" : "transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        {item?.locked ? (
          <Lock className="w-5 h-5" />
        ) : (
          <IconComponent className="w-5 h-5" />
        )}
      </motion.div>

      <motion.span
        className="text-xs font-medium mt-1"
        animate={{
          fontWeight: isActive ? 600 : 500,
          opacity: isActive ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {item.label}
      </motion.span>

      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          className="w-1 h-1 bg-blue-600 rounded-full mt-1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
      )}
    </motion.button>
  );
};

const FloatingActionBtn: React.FC<{
  fabButton: FloatingActionButton;
  onClick: () => void;
}> = ({ fabButton, onClick }) => {
  const IconComponent = iconMap[fabButton.icon as keyof typeof iconMap];

  return (
    <motion.button
      onClick={onClick}
      className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/25 text-white"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* <IconComponent className="w-6 h-6 relative z-10" /> */}
      <Lock className="w-6 h-6 relative z-10" />
    </motion.button>
  );
};

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeItem = "dashboard",
  onItemClick,
  onFabClick,
  fabButton = { icon: "Plus", label: "Add", onClick: () => {} },
  className = "",
}) => {
  const [active, setActive] = useState();
  const router = useRouter();
  const handleItemClick = (item: any) => {
    if (item?.locked) return;
    setActive(item.id);
    router.push(item.href);
  };

  const handleFabClick = () => {
    onFabClick?.();
    fabButton.onClick();
  };

  const pathname = usePathname();
  // Split nav items into left and right groups (2 items each side of FAB)
  const leftItems = defaultNavItems.slice(0, 2);
  const rightItems = defaultNavItems.slice(2, 4);
  const moreItem = defaultNavItems[4]; // The "More" item

  const isReallyActive = (item: any) => {
    if (pathname === item?.href) return true;

    return active === item?.id;
  };

  return (
    <>
      {/* Bottom navigation container */}
      <motion.nav
        className={`fixed bottom-0 left-0 right-0 z-50 dark:bg-[var(--custom-card-bg)]/90 bg-white/90 backdrop-blur-lg border-t dark:border-gray-700 border-slate-200 ${className}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="flex items-center justify-between px-2 sm:px-6 pt-3 pb-6">
          {/* Left items */}
          <div className="flex items-center">
            {leftItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={isReallyActive(item)}
                onClick={handleItemClick}
                position="left"
              />
            ))}
          </div>

          {/* Center FAB */}
          <div className="flex-shrink-0 mx-2">
            <FloatingActionBtn fabButton={fabButton} onClick={handleFabClick} />
          </div>

          {/* Right items */}
          <div className="flex items-center">
            {rightItems.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                isActive={isReallyActive(item)}
                onClick={handleItemClick}
                position="right"
              />
            ))}

            {/* More item */}
            {/* <NavItem
              item={moreItem}
              isActive={activeItem === moreItem.id}
              onClick={handleItemClick}
              position="right"
            /> */}
          </div>
        </div>

        {/* Home indicator for iOS-like appearance */}
        <motion.div
          className="w-32 h-1 bg-slate-300 rounded-full mx-auto mb-2"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </motion.nav>

      {/* Safe area spacer for content */}
      <div className="h-24 md:hidden" />
    </>
  );
};
