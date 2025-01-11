import { cn } from "@/lib/utils";

export default function DashedWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("border border-foreground/20 border-dashed rounded-lg md:p-4 p-2", className)}>{children}</div>
  );
}
