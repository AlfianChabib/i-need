import { env } from "@/lib/env";
import { SessionData } from "@/types/auth";
import { cookies } from "next/headers";

export async function getServerSession() {
  const sessionId = cookies().get("session.id");

  const res = await fetch(`${env.NEXT_PUBLIC_API_HOST}/auth/session`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json", cookie: `session.id=${sessionId?.value}` },
    cache: "no-store",
  });
  const data = await res.json();
  return data.data as SessionData;
}
