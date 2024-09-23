"use client";

import { useSession } from "../providers/session-provider";
import { UserRound } from "lucide-react";
import { Icon } from "../lucide-icon";
import LogoutButton from "./logout-button";
import { useState } from "react";
import { MenuItem } from "@/types";
import { useDropdownMenuStore } from "@/store/dropdown-menu-store";
import HeaderLinkMenu from "./header-link-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { getSessionMenu } from "@/utils/getSessionMenu";

export default function HeaderMenu() {
  const session = useSession();
  const { isOpen, setIsOpen } = useDropdownMenuStore();
  const [linkMenu] = useState<MenuItem[]>(getSessionMenu(session.role));

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="border rounded-full w-9 h-9 flex items-center justify-center bg-dashboardbg">
        <UserRound size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="space-y-1">
          <p className="font-normal text-foreground/80">{session.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <HeaderLinkMenu linkMenu={linkMenu} />
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <LogoutButton className="flex w-full space-x-3 justify-between" variant="destructive" size="sm">
            <span>Logout</span>
            <Icon name="LogOut" size={16} />
          </LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
