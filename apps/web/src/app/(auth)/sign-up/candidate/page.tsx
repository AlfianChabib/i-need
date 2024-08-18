import { useSelectedLayoutSegments } from "next/navigation";

export default function SignUpCandidatePage() {
  const segment = useSelectedLayoutSegments();

  console.log(segment);

  return <div>page</div>;
}
