import { MenuItem } from "@/types";
import { SessionData } from "@/types/auth";

export const initialSession: SessionData = {
  id: "",
  email: "",
  username: "",
  role: "CANDIDATE",
  isVerified: false,
};

export const candidateMenuItems: MenuItem[] = [
  { href: "/profile", label: "Profile", icon: "user" },
  { href: "/activity", label: "Activity", icon: "list-todo" },
  { href: "/document", label: "Document", icon: "file-text" },
];

export const companyMenuItems: MenuItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: "layout-grid" },
  { href: "/applications", label: "Applications", icon: "file-badge" },
  { href: "/candidates", label: "Candidates", icon: "users" },
  { href: "/schedules", label: "Schedules", icon: "calendar" },
];
