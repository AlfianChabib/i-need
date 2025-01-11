"use client";

import { useSidebarStore } from "@/store/sidebar-store";
import { Button, buttonVariants } from "../ui/button";
import { Icon } from "../lucide-icon";
import HeaderMenu from "./header-menu";
import Link from "next/link";

export default function Navbar() {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <nav className="border-b flex justify-between items-center w-full px-4 h-14">
      <div className="flex items-center gap-2">
        {!isOpen && (
          <Button size="icon" variant="secondary" className="w-8 h-8" onClick={toggle}>
            <Icon name="Menu" size={20} />
          </Button>
        )}
      </div>
      <div className="flex space-x-2 md:space-x-4">
        <Link href="/my-jobs/create" className={buttonVariants({ variant: "outline" })}>
          Create Job
        </Link>
        <HeaderMenu className="bg-background" />
      </div>
    </nav>
  );
}
