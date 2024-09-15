import SidebarLink from "./sidebar-link";
import { companyMenuItems } from "@/utils/constants";
import { toPascalCaseIcon } from "@/utils/pastcalcase-icon";
import { useSelectedLayoutSegment } from "next/navigation";
import { Icon } from "../lucide-icon";

export default function CompanySidebarMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="grid space-y-1">
      {companyMenuItems.map((item, i) => {
        const activeLink = item.href.split("/").at(-1) === segment;
        const iconName = toPascalCaseIcon(item.icon);
        return (
          <SidebarLink key={i} href={item.href} label={item.label} isActive={activeLink}>
            <Icon name={iconName} size={18} />
          </SidebarLink>
        );
      })}
    </div>
  );
}
