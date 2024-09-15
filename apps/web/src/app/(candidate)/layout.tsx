import React from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/menu/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-dashboardbg">
      <Sidebar />
      <div className="h-full overflow-y-auto flex flex-col flex-1">
        <Navbar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
