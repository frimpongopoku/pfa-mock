import React from "react";
import { DashboardSidebar } from "../user/dashboard/dashboard-sidebar";
import { Sidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ReferralsHeader from "../user/referrals/referrals-header";
import CustomNavBar from "./custom-navbar";

function ApplicationFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f1f5f9] overflow-x-hidden">
      <div className="flex h-full grow">
        <AppSidebar />

        <main>
          <ReferralsHeader title="Hi, Frimpong!" />
          <div className="flex-1 p-8 overflow-y-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default ApplicationFrame;
