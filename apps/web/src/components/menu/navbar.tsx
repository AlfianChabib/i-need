import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="border-b flex justify-between items-center w-full px-3 xl:px-10 py-2 xl:py-3 transition-all">
      <Button variant="outline">Navbar</Button>
    </nav>
  );
}
