import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { getServerSession } from "./utils/get-server-session";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/") {
    try {
      const { role } = await getServerSession();
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

export const config: MiddlewareConfig = {
  matcher: [
    "/",
    "/login",
    "/register/:path",
    "/verify",
    "/jobs",
    "/profile/:path*",
    "/dashboard/:path*",
    "/applications/:path*",
    "/candidates/:path*",
    "/schedules/:path*",
  ],
};
