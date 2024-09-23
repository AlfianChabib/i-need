import { Role } from "@/types/auth";
import { candidateMenuItems, companyMenuItems } from "./constants";
import { MenuItem } from "@/types";

export function getSessionMenu(role: Role): MenuItem[] {
  switch (role) {
    case "COMPANY":
      return companyMenuItems;
    case "CANDIDATE":
      return candidateMenuItems;
    default:
      return candidateMenuItems;
  }
}
