"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartArea,
  Coins,
  Command,
  Frame,
  GalleryVerticalEnd,
  Gift,
  Layout,
  List,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserProfile } from "@/app/user/dashboard/dashboard-sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: Layout,
      isActive: true,
    },
    {
      title: "Referrals",
      url: "/user/referrals",
      icon: Gift,
    },
    {
      title: "Transactions",
      url: "#",
      icon: List,
      locked: true,
    },

    {
      title: "Budget",
      url: "#",
      icon: ChartArea,
      locked: true,
    },
    {
      title: "Goals",
      url: "#",
      icon: Trophy,
      locked: true,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="p-0!">
        <motion.div
          className="flex items-center p-5 px-6 gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl  font-extrabold  bg-clip-text ">
            CeleryCoins
          </h1>
        </motion.div>
        {/* <div className="h-1 w-full rounded bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 opacity-70 dark:from-green-700 dark:via-emerald-600 dark:to-teal-500 mt-2" /> */}
      </SidebarHeader>
      <SidebarContent className="p-4">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
