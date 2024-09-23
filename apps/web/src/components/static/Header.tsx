"use client";

import Link from "next/link";
import Image from "next/image";
import DefaultMenu from "../menu/default-menu";
import { Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import { useSession } from "../providers/session-provider";
import HeaderMenu from "../menu/header-menu";

export default function Header() {
  const session = useSession();

  return (
    <nav className="fixed top-0 z-50 bg-white border-b border-zinc-300 w-full shadow-sm">
      <div className="flex items-center justify-between px-5 py-3 container">
        <div className="flex items-center gap-5">
          <Link href={"/"} className="flex items-center gap-1">
            <Image src={"/logo-black.png"} height={500} width={500} alt="logo" className="h-7 w-fit" priority />
            <h1 className="font-semibold text-xl">INeed</h1>
          </Link>

          <Link href={"https://github.com/AlfianChabib/i-need"} target="_blank" className="hidden lg:block">
            <Button
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-neutral-950 font-medium text-neutral-200 duration-500"
              size={"default"}
            >
              <div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                <div className="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
                  <Star className="size-4" strokeWidth={2.5} />
                </div>
                <span className="pl-6">Star on Github</span>
                <div className="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100 flex items-center gap-1">
                  <Github className="size-4" strokeWidth={2.5} />
                </div>
              </div>
            </Button>
          </Link>
        </div>
        <div>{session && session.isVerified ? <HeaderMenu /> : <DefaultMenu />}</div>
      </div>
    </nav>
  );
}
