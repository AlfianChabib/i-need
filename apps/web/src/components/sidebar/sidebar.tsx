"use client";

import Image from "next/image";
import LogoutButton from "../menu/logout-button";
import { Icon } from "../lucide-icon";
import { useSession } from "../providers/session-provider";
import { Button } from "../ui/button";
import { useSidebarStore } from "@/store/sidebar-store";
import CandidateSidebarMenu from "./candidate-sidebar-menu";
import CompanySidebarMenu from "./company-sidebar-menu";

export default function Sideebar() {
  const session = useSession();
  const { isOpen, toggle } = useSidebarStore();

  return (
    <aside className="flex flex-col justify-between w-0 md:w-[250px] h-full gap-4 bg-white overflow-y-auto border-r transition-all">
      <div className="flex items-center justify-between h-14 border-b px-4">
        <div className="flex gap-2">
          <Image src={"/logo-black.png"} height={500} width={500} alt="logo" className="h-7 w-fit" priority />
          <h1 className="font-medium text-lg">INeed</h1>
        </div>
        <Button variant="secondary" size="icon" className="w-8 h-8" onClick={toggle}>
          <Icon name="ChevronLeft" size={20} className={`transition-transform ${isOpen ? "" : "rotate-180"}`} />
        </Button>
      </div>
      <div className="flex flex-col px-4 border-b transition-all flex-1">
        {session && session.role === "COMPANY" ? <CompanySidebarMenu /> : <CandidateSidebarMenu />}
      </div>
      <div className="py-2 px-4">
        <LogoutButton className="flex w-full items-center space-x-4" variant="destructive" size="sm">
          <span>Logout</span>
          <Icon name="LogOut" size={16} />
        </LogoutButton>
      </div>
    </aside>
  );
}
