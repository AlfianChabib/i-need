import { Response } from "express";
import { env } from "../app/config";

const accessExpiry = 1000 * 60 * 10;
const refreshExpiry = 1000 * 60 * 60 * 24 * 30;

type CookieType = "accessToken" | "refreshToken";

export const setCookie = (res: Response, cookieName: CookieType, cookieValue: string) => {
  const expiresSeconds = cookieName === "accessToken" ? accessExpiry : refreshExpiry;

  res.cookie(cookieName, cookieValue, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    path: "/",
    sameSite: "none",
    expires: new Date(Date.now() + expiresSeconds),
  });
};
