import { CompanyStatus } from "@/types/company";
import { ApiResponseData } from "@/types/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export async function checkCompanyStatus() {
  const sessionId = cookies().get("session.id");
  const res = await fetch(`${API_HOST}/company/status`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json", cookie: `session.id=${sessionId?.value}` },
    cache: "no-store",
  });
  const data: ApiResponseData<CompanyStatus> = await res.json();
  console.log(data);
  if (data.data.companyStatus === "INACTIVE") {
    redirect("/company/onboarding");
  }
  return;
}
