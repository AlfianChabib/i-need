import { useSelectedLayoutSegment } from "next/navigation";

export default function SignInCompanyPage() {
  const segment = useSelectedLayoutSegment("company");

  return <div>company</div>;
}
