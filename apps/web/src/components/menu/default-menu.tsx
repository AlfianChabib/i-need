import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import MenuLink from "./menu-link";

export default function DefaultMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gradient-to-r from-red-600 to-yellow-600 font-normal">Get Started</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <MenuLink href="/sign-up/candidate" label="Start as a Candidate" />
        <MenuLink href="/sign-up/company" label="Start as a Company" />
        <DropdownMenuSeparator />
        <MenuLink href="/sign-in" label="Sign In" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
