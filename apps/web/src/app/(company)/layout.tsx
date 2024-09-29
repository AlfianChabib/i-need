import { ReactNode } from "react";
import { checkCompanyStatus } from "@/utils/check-company-status";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/menu/navbar";

export default async function Layout({ children }: { children: ReactNode }) {
  await checkCompanyStatus();

  return (
    <div className="flex h-full bg-dashboardbg">
      <Sidebar />
      <div className="h-full flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 md:p-4 p-2 overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
}
