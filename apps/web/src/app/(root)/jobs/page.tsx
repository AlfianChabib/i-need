import { getSession } from "@/utils/get-session-middleware";

export default async function page() {
  const session = await getSession();

  return <div className="pt-14">{session && <h1>Hello {session.username}</h1>}</div>;
}
