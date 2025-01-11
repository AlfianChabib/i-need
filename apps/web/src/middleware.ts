import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { getServerSession } from "./utils/get-server-session";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/") {
    try {
      const { role } = await getServerSession();
      switch (role) {
        case "CANDIDATE":
          return NextResponse.redirect(new URL("/jobs", req.url));
        case "COMPANY":
          return NextResponse.redirect(new URL("/overview", req.url));
        default:
          return NextResponse.next();
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
    "/overview/:path*",
    "/applications/:path*",
    "/candidates/:path*",
    "/schedules/:path*",
  ],
};
