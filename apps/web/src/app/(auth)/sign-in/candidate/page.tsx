import { useSelectedLayoutSegment } from "next/navigation";

export default function SignInCandidatePage() {
  const segment = useSelectedLayoutSegment("candidate");

  return <div>page</div>;
}
