import AsideMenu from "@/components/menu/aside-menu";
import Navbar from "@/components/menu/navbar";
import { ReactNode, Suspense } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full bg-dashboardbg">
      <AsideMenu />
      <div className="h-full overflow-y-auto flex flex-col flex-1">
        <Suspense>
          <Navbar />
        </Suspense>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
