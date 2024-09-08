import React from "react";
import Footer from "@/components/static/Footer";
import Header from "@/components/static/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between relative min-h-full gap-12 md:gap-24">
      <Header />
      <div className="flex-1 px-5 container flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
