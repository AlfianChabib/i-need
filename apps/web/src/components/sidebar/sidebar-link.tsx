"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type SidebarLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

export default function SidebarLink({ href, label, isActive, children }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full transition-colors py-1.5 px-3 hover:bg-dashboardbg rounded-md items-center space-x-4",
        isActive ? "text-blue-600 bg-dashboardbg" : "text-slate-500",
      )}
    >
      {children}
      <span className="text-sm">{label}</span>
    </Link>
  );
}
