import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export default function Layout({ atuh }: { auth: React.ReactNode }) {
  const segment = useSelectedLayoutSegment("atuh");
  return <div>layout</div>;
}
