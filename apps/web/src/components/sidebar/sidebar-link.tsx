"use client";

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
      className={`flex w-full transition-colors py-1.5 px-2 hover:bg-dashboardbg rounded-md items-center space-x-4 ${isActive ? "text-blue-600 bg-dashboardbg" : "text-gray-500"}`}
    >
      {children}
      <span>{label}</span>
    </Link>
  );
}
