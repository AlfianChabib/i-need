import { SessionData } from "@/types/auth";
import { ApiResponseData } from "@/types/server";
import { NextRequest } from "next/server";

export default async function getSessionMiddleware(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken");
  const accessToken = req.cookies.get("accessToken");

  if (accessToken) {
    const res = await fetch("http://localhost:3001/api/v1/auth/session", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken.value}`,
      },
      next: { revalidate: 0 },
    });

    console.log(res);

    // if (res.status === 403) {
    // }

    const data: ApiResponseData<SessionData> = await res.json();
    return data.data;
  }

  return null;
}
