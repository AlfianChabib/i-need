import { SessionData } from "@/types/auth";
import { cookies } from "next/headers";

export async function getServerSession() {
  const sessionId = cookies().get("session.id");

  const res = await fetch("http://localhost:3001/api/v1/auth/session", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      cookie: `session.id=${sessionId?.value}`,
    },
  });
  const data = await res.json();
  return data.data as SessionData;
}
