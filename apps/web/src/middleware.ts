import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "./utils/get-server-session";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/") {
    try {
      const { role } = await getServerSession();
      console.log(role === "COMPANY");
      if (role === "CANDIDATE") {
        return NextResponse.redirect(new URL("/jobs", req.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    } catch (error) {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ["/", "/login", "/register/:path", "/verify", "/dashboard/:path", "/profile/:path", "/jobs"],
};
