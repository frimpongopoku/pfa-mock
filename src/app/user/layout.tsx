import ApplicationFrame from "@/app/frame/app-frame";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {" "}
      <ApplicationFrame>{children}</ApplicationFrame>
    </SidebarProvider>
  );
}

export default UserLayout;
