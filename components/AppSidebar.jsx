"use client";

import { LockKeyholeIcon, RectangleEllipsisIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/lib/data";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import PassswordGeneratorDialog from "./PassswordGeneratorDialog";

// Menu items.

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-5 flex-row gap-3 items-center">
        <LockKeyholeIcon size={40} className="stroke-primary" />
        <div className="flex flex-col">
          <span className="text-2xl text-primary">Password </span>
          <span className="text-xl font-thin">Manager</span>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem
                key={item.url}
                className={cn(
                  "hover:bg-primary/10 p-3 rounded-md hover:text-primary",
                  pathname === item.url && "text-primary bg-primary/10"
                )}
              >
                <SidebarMenuButton asChild>
                  <Link href={item.url} key={item.url} className="flex gap-3">
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            <SidebarMenuItem
              className={cn(
                "hover:bg-primary/10 p-3 rounded-md hover:text-primary"
              )}
            >
              <PassswordGeneratorDialog />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
