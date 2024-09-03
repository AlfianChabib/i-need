import { icons } from "lucide-react";

export const toPascalCaseIcon = (str: string): keyof typeof icons => {
  return str.replace(/(^\w|-\w)/g, (c) => c.replace("-", "").toUpperCase()) as keyof typeof icons;
};
