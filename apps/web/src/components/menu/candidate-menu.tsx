"use client";

import { UserRound } from "lucide-react";
import { useSession } from "../providers/session-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoutButton from "./logout-button";
import { Icon } from "../lucide-icon";

export default function CandidateMenu() {
  const session = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border rounded-full w-9 h-9 flex items-center justify-center bg-dashboardbg">
        <UserRound size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="space-y-1">
          <p className="text-foreground/90">{session?.username}</p>
          <p className="text-xs font-normal text-foreground/70">{session?.email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* {userMenuItems.map((item, i) => {
      const activeLink = pathname.includes(item.sub!) || pathname === item.href
      const iconName = toPascalCaseIcon(item.icon)
      return (
        <MenuLink key={i} href={item.href} label={item.label} isActive={activeLink}>
          <Icon name={iconName} size={16} />
        </MenuLink>
      )
    })} */}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <LogoutButton className="flex w-full items-center space-x-4" variant="destructive" size="sm">
            <Icon name="LogOut" size={16} />
          </LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
