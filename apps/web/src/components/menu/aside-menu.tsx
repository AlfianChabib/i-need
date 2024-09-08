import Image from "next/image";
import { Icon } from "../lucide-icon";
import { Button } from "../ui/button";
import LogoutButton from "./logout-button";

export default function AsideMenu() {
  return (
    <aside className="md:flex flex-col gap-2 w-0 md:w-[250px] h-full bg-white overflow-y-auto border-r transition-all">
      <div className="px-4 py-2 xl:py-4 transition-all">
        <div className="flex items-center gap-2">
          <Image src={"/logo-black.png"} height={500} width={500} alt="logo" className="h-7 w-fit" priority />
          <h1 className="font-medium text-lg">INeed</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between px-4 xl:py-2 border-b h-full transition-all">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-md text-gray-500 cursor-pointer text-sm hover:bg-dashboardbg transition">
            <Icon name="SquareChartGantt" size={18} />
            <span>Profile</span>
          </div>
        </div>
        <div className="py-2 ">
          <LogoutButton className="flex w-full items-center space-x-4" variant="destructive" size="sm">
            <Icon name="LogOut" size={16} />
          </LogoutButton>
        </div>
      </div>
    </aside>
  );
}
