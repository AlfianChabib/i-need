import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/menu/navbar";
import { getServerSession } from "@/utils/get-server-session";
import { redirect } from "next/navigation";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

async function getCompanyStatus(companyId: string) {
  const res = await fetch(`${API_HOST}/company/status/${companyId}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  const data = await res.json();
  return data.data.companyStatus;
}

async function checkCompanyStatus(companyId: string) {
  const companyStatus = await getCompanyStatus(companyId);
  if (companyStatus !== "ACTIVE") {
    redirect("/company/onboarding");
  }
}

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession();
  await checkCompanyStatus(session.id);

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
