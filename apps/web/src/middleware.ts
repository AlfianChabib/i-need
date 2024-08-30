import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { jwtVerify, errors } from "jose";
import getSessionMiddleware from "./utils/get-session-middleware";
import { revalidatePath } from "next/cache";

const secretAccessToken = process.env.NEXT_PUBLIC_SECRET_ACCESS_TOKEN as string;
const jwtSecretAccessToken = new TextEncoder().encode(secretAccessToken);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/dashboard")) {
    const accessToken = req.cookies.get("accessToken");
    if (!accessToken) {
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.delete("refreshToken");
      return response;
    }
    try {
      await jwtVerify(accessToken.value, jwtSecretAccessToken);
      return NextResponse.next();
    } catch (error) {
      if (error instanceof errors.JWTExpired) {
        const refreshToken = req.cookies.get("refreshToken");
        if (!refreshToken) {
          const response = NextResponse.redirect(new URL("/login", req.url));
          response.cookies.delete("refreshToken");
          return response;
        }
        const headers = new Headers(req.headers);
        const responseAccessToken = await fetch("http://localhost:3001/api/v1/auth/refresh", {
          method: "POST",
          credentials: "include",
          headers,
        });
        const data = await responseAccessToken.json();
        console.log(data);
        if (data.success) {
          const response = NextResponse.next();
          response.cookies.set({
            name: "accessToken",
            value: data.data.accessToken,
            maxAge: 1000 * 60 * 10,
            httpOnly: true,
          });
          response.cookies.set({
            name: "refreshToken",
            value: data.data.refreshToken,
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
          });
          return response;
        }
        return NextResponse.redirect(new URL("/login", req.url));
      }
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config: MiddlewareConfig = {
  matcher: ["/", "/login", "/register/:path", "/verify", "/dashboard/:path"],
};
