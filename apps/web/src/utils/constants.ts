import { MenuItem } from "@/types";
import { SessionData } from "@/types/auth";

export const initialSession = {
  id: "",
  email: "",
  username: "",
  role: "CANDIDATE",
  isVerified: false,
} satisfies SessionData;

export const candidateMenuItems: MenuItem[] = [
  { href: "/profile", label: "Profile", icon: "user" },
  { href: "/activity", label: "Activity", icon: "list-todo" },
  { href: "/documents", label: "Documents", icon: "file-text" },
];

export const companyMenuItems: MenuItem[] = [
  { href: "/overview", label: "Overview", icon: "layout-grid" },
  { href: "/my-jobs", label: "My Jobs", icon: "briefcase-business" },
  { href: "/applications", label: "Applications", icon: "file-badge" },
  { href: "/candidates", label: "Candidates", icon: "users" },
  { href: "/schedules", label: "Schedules", icon: "calendar" },
];

export const jobTypeOptions = [
  { id: 1, value: "FULL_TIME", label: "Full-time" },
  { id: 2, value: "PART_TIME", label: "Part-time" },
  { id: 3, value: "CONTRACT", label: "Contract" },
  { id: 4, value: "INTER", label: "Internship" },
];

export const workingTypeOptions = [
  { id: 1, value: "REMOTE", label: "Remote" },
  { id: 2, value: "ONSITE", label: "Onsite" },
  { id: 3, value: "HYBRID", label: "Hybrid" },
];

export const interviewTypeOptions = [
  { id: 1, value: "Remote", label: "Remote" },
  { id: 2, value: "Onsite", label: "Onsite" },
];

export const MAX_LOGO_SIZE = 2 * 1024 * 1024;
export const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
