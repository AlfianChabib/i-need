import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("mx-auto w-full max-w-screen-xl px-2.5 lg:px-10", className)}>{children}</section>;
}
