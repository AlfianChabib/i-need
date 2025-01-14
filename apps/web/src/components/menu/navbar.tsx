"use client";

import { useSidebarStore } from "@/store/sidebar-store";
import { Button, buttonVariants } from "../ui/button";
import { Icon } from "../lucide-icon";
import HeaderMenu from "./header-menu";
import Link from "next/link";
import { useSession } from "../providers/session-provider";
import Image from "next/image";

export default function Navbar() {
  const { isOpen, toggle } = useSidebarStore();
  const { role } = useSession();

  return (
    <nav className="border-b flex justify-between items-center w-full px-4 h-14">
      <div className="flex items-center gap-2">
        <Image src={"/logo-black.png"} height={100} width={100} alt="logo" className="h-7 w-fit md:hidden" priority />
        {!isOpen && (
          <Button size="icon" variant="secondary" className="w-8 h-8 md:block hidden" onClick={toggle}>
            <Icon name="Menu" size={20} />
          </Button>
        )}
      </div>
      <div className="flex space-x-2 md:space-x-4">
        {role === "COMPANY" ? (
          <Link href="/my-jobs/create" className={buttonVariants({ variant: "outline" })}>
            Create Job
          </Link>
        ) : null}
        <HeaderMenu className="bg-background" />
      </div>
    </nav>
  );
}
