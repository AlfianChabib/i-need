const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export default async function getCompanyStatus(companyId: string) {
  const response = await fetch(`${API_HOST}/company/${companyId}/status`);
  const data = await response.json();
  return data;
}
