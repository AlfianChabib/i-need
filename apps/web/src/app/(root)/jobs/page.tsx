import { getSession } from "@/utils/get-session-middleware";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function page() {
  const sessionId = cookies().get("session.id");
  const { username } = await getSession(sessionId?.value);

  return (
    <div>
      <Image src={"/logo-black.png"} alt="logo" width={50} height={50} className="mt-20 border" />
      <p>{username}</p>
    </div>
  );
}
