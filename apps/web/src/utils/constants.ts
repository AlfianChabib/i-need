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
  { href: "/documents", label: "Documents", icon: "file-text" },
];

export const companyMenuItems: MenuItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: "layout-grid" },
  { href: "/applications", label: "Applications", icon: "file-badge" },
  { href: "/candidates", label: "Candidates", icon: "users" },
  { href: "/schedules", label: "Schedules", icon: "calendar" },
];

export const MAX_LOGO_SIZE = 2 * 1024 * 1024;
export const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
