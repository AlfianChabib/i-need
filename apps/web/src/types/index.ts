import dynamicIconImports from "lucide-react/dynamicIconImports";

export type MenuItem = {
  label: string;
  href: string;
  icon: keyof typeof dynamicIconImports;
};
