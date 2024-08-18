"use client";

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

export default function SignUpCompanyPage() {
  const segment = useSelectedLayoutSegment("company");

  console.log(segment);

  return <div>page</div>;
}
