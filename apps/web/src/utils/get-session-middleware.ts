import { SessionData } from "@/types/auth";

export async function getSession(sessionId: string | undefined) {
  const res = await fetch("http://localhost:3001/api/v1/auth/session", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      cookie: `session.id=${sessionId}`,
    },
  });
  const data = await res.json();
  return data.data as SessionData;
}
