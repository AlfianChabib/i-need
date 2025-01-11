"use client";

import Image from "next/image";
import { Icon } from "../lucide-icon";
import { Button } from "../ui/button";
import { useSidebarStore } from "@/store/sidebar-store";
import SidebarMenu from "./sidebar-menu";
import SidebarLink from "./sidebar-link";

export default function Sideebar() {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <aside className="flex flex-col justify-between w-0 md:w-[250px] h-full gap-4 bg-white overflow-y-auto border-r transition-all">
      {/* sidebar header */}
      <div className="flex items-center justify-between h-14 border-b px-4">
        <div className="flex space-x-4">
          <Image src={"/logo-black.png"} height={500} width={500} alt="logo" className="h-7 w-fit" priority />
          <h1 className="font-medium text-lg">INeed</h1>
        </div>
        <Button variant="secondary" size="icon" className="w-8 h-8" onClick={toggle}>
          <Icon name="ChevronLeft" size={20} className={`transition-transform ${isOpen ? "" : "rotate-180"}`} />
        </Button>
      </div>

      {/* sidebar menu */}
      <div className="flex flex-col px-4 transition-all flex-1">
        <SidebarMenu />
      </div>

      {/* sidebar footer */}
      <div className="py-2 px-4">
        <SidebarLink href="/support" label="Support">
          <Icon name="CircleHelp" size={16} />
        </SidebarLink>
        <SidebarLink href="/feedback" label="Feedback">
          <Icon name="MessageSquareMore" size={16} />
        </SidebarLink>
      </div>
    </aside>
  );
}
