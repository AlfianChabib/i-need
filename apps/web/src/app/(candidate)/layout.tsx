import React from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/menu/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-dashboardbg">
      <Sidebar />
      <div className="h-full flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 md:p-4 p-2 overflow-y-auto h-[3000px]">{children}</div>
      </div>
    </div>
  );
}
