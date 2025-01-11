import { useState } from "react";
import SidebarLink from "./sidebar-link";
import { toPascalCaseIcon } from "@/utils/pastcalcase-icon";
import { useSelectedLayoutSegment } from "next/navigation";
import { Icon } from "../lucide-icon";
import { useSession } from "../providers/session-provider";
import { getSessionMenu } from "@/utils/getSessionMenu";

export default function CompanySidebarMenu() {
  const { role } = useSession();
  const [menuItems] = useState(getSessionMenu(role));
  const segment = useSelectedLayoutSegment();

  return (
    <div className="grid space-y-1">
      {menuItems.map((item, i) => {
        const activeLink = item.href.split("/").at(-1) === segment;
        const iconName = toPascalCaseIcon(item.icon);
        return (
          <SidebarLink key={i} href={item.href} label={item.label} isActive={activeLink}>
            <Icon name={iconName} size={16} />
          </SidebarLink>
        );
      })}
    </div>
  );
}
