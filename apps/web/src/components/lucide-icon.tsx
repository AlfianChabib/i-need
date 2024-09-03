import dynamic from "next/dynamic";
import { icons, LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface DynamicIconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} suppressHydrationWarning />;
};

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon name={name} {...props} />;
};
