import Link, { type LinkProps } from "next/link";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface MenuLinkProps {
  className?: string;
  href: LinkProps["href"];
  label: string;
  children?: React.ReactNode;
  isActive?: boolean;
}

export default function MenuLink({ href, label, children, isActive, className }: MenuLinkProps) {
  return (
    <DropdownMenuItem className={cn("p-0", className)}>
      <Link href={href} className={`flex w-full items-center space-x-4 p-2 ${isActive ? "text-blue-600" : ""}`}>
        {children}
        <span>{label}</span>
      </Link>
    </DropdownMenuItem>
  );
}
