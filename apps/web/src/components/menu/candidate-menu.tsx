"use client";

import { useSession } from "../providers/session-provider";
import { UserRound } from "lucide-react";
import { Icon } from "../lucide-icon";
import MenuLink from "./menu-link";
import LogoutButton from "./logout-button";
import { candidateMenuItems } from "@/utils/constants";
import { useSelectedLayoutSegment } from "next/navigation";
import { toPascalCaseIcon } from "@/utils/pastcalcase-icon";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function CandidateMenu() {
  const session = useSession();
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);

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
        {candidateMenuItems.map((item, i) => {
          const activeLink = segment === item.href.split("/").at(-1);
          const iconName = toPascalCaseIcon(item.icon);
          return (
            <MenuLink
              key={i}
              href={item.href}
              label={item.label}
              isActive={activeLink}
              onClick={() => setIsOpen(false)}
            >
              <Icon name={iconName} size={16} />
            </MenuLink>
          );
        })}
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
