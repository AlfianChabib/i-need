import { SessionData } from "@/types/auth";
import { cookies } from "next/headers";

const getSession = async (accessToken?: string) => {
  if (!accessToken) return;
  const res = await fetch("http://localhost:3001/api/v1/auth/session", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: { revalidate: false },
  });

  if (!res.ok) {
    // getSession(accessToken);
    return;
  }

  const data = await res.json();
  return data.data as SessionData;
};

export default async function page() {
  const accessToken = cookies().get("accessToken");
  const session = await getSession(accessToken?.value);

  console.log(session);

  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div>Dashboard {session?.email}</div>
    </div>
  );
}
