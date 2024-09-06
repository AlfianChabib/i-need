import { getServerSession } from "@/utils/get-server-session";

export default async function page() {
  const session = await getServerSession();

  return <div className="pt-20">{session && <h1>Hello {session.username}</h1>}</div>;
}
