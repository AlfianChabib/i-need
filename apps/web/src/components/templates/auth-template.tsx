import React from "react";
import Particles from "../magicui/particles";

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <div className="flex min-h-full md:h-full bg-white md:rounded-3xl rounded-xl lg:shadow-lg shadow-md">
        <div className="hidden lg:flex flex-[2_2_66.67%] p-3 transition-all duration-200">
          <div className="h-full relative w-full bg-foreground rounded-2xl flex flex-col items-center justify-center gap-10 overflow-hidden px-10">
            <Particles className="absolute inset-0" quantity={100} ease={80} color={"#fff"} refresh />
          </div>
        </div>
        <div className="flex-[1_1_33.33%] flex w-full flex-col justify-center items-center transition-all duration-200">
          {children}
        </div>
      </div>
    </div>
  );
}
