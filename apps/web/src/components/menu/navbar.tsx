"use client";

import { useSidebarStore } from "@/store/sidebar-store";
import { Button } from "../ui/button";
import { Icon } from "../lucide-icon";

export default function Navbar() {
  const { isOpen, toggle } = useSidebarStore();

  return (
    <nav className="border-b flex justify-between items-center w-full px-4 h-14">
      <div className="flex items-center gap-2">
        {!isOpen && (
          <Button size="icon" variant="secondary" className="w-8 h-8" onClick={toggle}>
            <Icon name="Menu" size={20} />
          </Button>
        )}
        <Button variant="outline">Navbar</Button>
      </div>
    </nav>
  );
}
