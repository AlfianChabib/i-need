import { env } from "@/lib/env";
import { CompanyStatus } from "@/types/company";
import { ApiResponseData } from "@/types/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function checkCompanyStatus() {
  const header = new Headers(headers());

  const res = await fetch(`${env.NEXT_PUBLIC_API_HOST}/company/status`, {
    method: "GET",
    credentials: "include",
    headers: header,
    cache: "no-store",
  });
  const data: ApiResponseData<CompanyStatus> = await res.json();
  if (data.data.companyStatus === "INACTIVE") {
    redirect("/company/onboarding");
  }
  return;
}
