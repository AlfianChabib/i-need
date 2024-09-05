import { getServerSession } from "@/utils/get-session-middleware";

export default async function page() {
  const session = await getServerSession();

  console.log(session);

  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div>Dashboard {session?.email}</div>
    </div>
  );
}
