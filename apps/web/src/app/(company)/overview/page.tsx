import { getServerSession } from "@/utils/get-server-session";

export default async function page() {
  const session = await getServerSession();

  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div>Overview {session.email}</div>
    </div>
  );
}
