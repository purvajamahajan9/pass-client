"use client";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

function DasboardLayout(props) {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <AppSidebar />
          <div className="py-3 px-5 w-full">{props.children}</div>
        </SidebarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default DasboardLayout;
