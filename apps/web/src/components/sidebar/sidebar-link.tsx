import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import Link from "next/link";

type SidebarLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

export default function SidebarLink({ href, label, isActive, children }: SidebarLinkProps) {
  const { isOpen } = useSidebarStore();

  return (
    <Link
      href={href}
      className={cn(
        "flex w-full transition-all h-8 px-3 hover:bg-dashboardbg rounded-md items-center space-x-4",
        isActive ? "text-blue-600 bg-dashboardbg" : "text-slate-500",
      )}
    >
      {children}
      {isOpen && <span className="text-sm">{label}</span>}
    </Link>
  );
}
