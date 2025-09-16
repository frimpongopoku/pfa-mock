"use client";

import { ChevronRight, Lock, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    locked?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url;
          return (
            // <Collapsible
            //   key={item.title}
            //   asChild
            //   defaultOpen={item.isActive}
            //   className="group/collapsible"
            // >
            <SidebarMenuItem key={item.title}>
              {/* <CollapsibleTrigger asChild> */}
              <Link href={item.locked ? "#" : item.url}>
                <SidebarMenuButton
                  isActive={isActive}
                  size={"lg"}
                  className={`${
                    item.locked ? "cursor-not-allowed opacity-60" : ""
                  }`}
                  // href={item.locked ? "#" : item.url}
                  // disabled={item.locked}
                  //
                  tooltip={item.title}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>

                  {item?.locked && (
                    <Lock className="ml-auto size-4 text-gray-400" />
                  )}
                  {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                </SidebarMenuButton>
              </Link>
              {/* </CollapsibleTrigger> */}
              {/* <CollapsibleContent> */}
              {/* <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span>{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub> */}
              {/* </CollapsibleContent> */}
            </SidebarMenuItem>
            // </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
