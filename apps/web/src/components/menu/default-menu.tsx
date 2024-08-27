import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

export default function DefaultMenu() {
  return (
    <div className="flex gap-4">
      <Link href="/login" className={buttonVariants({ variant: "outline" })}>
        Sign In
      </Link>
      <Link
        href="/register/candidate"
        className={buttonVariants({ className: "bg-gradient-to-r from-red-600 to-yellow-600 font-normal" })}
      >
        Get Started
      </Link>
    </div>
  );
}
