"use client";

import { MenuItem } from "@/types";
import { toPascalCaseIcon } from "@/utils/pastcalcase-icon";
import { useSelectedLayoutSegment } from "next/navigation";
import MenuLink from "./menu-link";
import { Icon } from "../lucide-icon";
import { useDropdownMenuStore } from "@/store/dropdown-menu-store";

export default function HeaderLinkMenu({ linkMenu }: { linkMenu: MenuItem[] }) {
  const segment = useSelectedLayoutSegment();
  const { setIsOpen } = useDropdownMenuStore();

  return linkMenu.map((item, i) => {
    const activeLink = segment === item.href.split("/").at(-1);
    const iconName = toPascalCaseIcon(item.icon);
    return (
      <MenuLink key={i} href={item.href} label={item.label} isActive={activeLink} onClick={() => setIsOpen(false)}>
        <Icon name={iconName} size={16} />
      </MenuLink>
    );
  });
}
