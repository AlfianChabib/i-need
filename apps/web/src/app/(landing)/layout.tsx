import React from "react";

import { cn } from "@/lib/utils";

import GridPattern from "@/components/magicui/grid-pattern";
import Header from "@/components/static/Header";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between relative min-h-full gap-12 md:gap-24">
      <Header />
      <div className="flex-1 px-5 container flex flex-col">{children}H</div>
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
