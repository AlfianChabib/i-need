import { MenuItem } from "@/types";
import { SessionData } from "@/types/auth";

export const initialSession: SessionData = {
  id: "",
  email: "",
  username: "",
  role: "CANDIDATE",
  isVerified: false,
};

export const userMenuItems: MenuItem[] = [
  { href: "/profile", label: "Profile", icon: "user" },
  { href: "/activity", label: "Activity", icon: "list-todo" },
  { href: "/document", label: "Document", icon: "file-text" },
];
