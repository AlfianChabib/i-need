import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./utils/get-session-middleware";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/") {
    try {
      const { role } = await getSession();
      if (role === "CANDIDATE") {
        return NextResponse.redirect(new URL("/jobs", req.url));
      } else if (role === "COMPANY") {
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
