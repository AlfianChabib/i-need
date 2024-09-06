import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import GridPattern from "@/components/magicui/grid-pattern";
import Header from "@/components/static/Header";
import Footer from "@/components/static/Footer";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between relative min-h-full gap-12 md:gap-24">
      <Header />
      <div className="flex-1 px-5 container flex flex-col">{children}</div>
      <Footer />
      <GridPattern
        width={50}
        height={50}
        x={0}
        y={0}
        className={cn("[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] -z-10")}
      />
    </div>
  );
}
