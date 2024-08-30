import { Button } from "../ui/button";

export default function AsideMenu() {
  return (
    <aside className="md:flex flex-col gap-5 w-0 md:w-[250px] h-full bg-white overflow-y-auto border-r transition-all">
      <div className="px-4 py-2 xl:py-3 border-b transition-all">
        <Button variant="outline" className="w-full text-foreground/80">
          Aside Menu
        </Button>
      </div>
    </aside>
  );
}
