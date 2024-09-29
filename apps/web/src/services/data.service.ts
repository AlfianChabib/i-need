import { env } from "@/lib/env";
import { ApiResponseData } from "@/types/server";

type Industry = {
  id: number;
  name: string;
  label: string;
};

export class DataService {
  static async getIndustries() {
    try {
      const response = await fetch(`${env.NEXT_PUBLIC_API_HOST}/data/industries`);
      const data = (await response.json()) as ApiResponseData<Industry[]>;
      return data.data;
    } catch (error) {
      throw new Error("Failed to fetch industries.");
    }
  }
}
