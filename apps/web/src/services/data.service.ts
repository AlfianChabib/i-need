import { ApiResponseData } from "@/types/server";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

type Industry = {
  id: number;
  name: string;
  label: string;
};

export class DataService {
  static async getIndustries() {
    try {
      const response = await fetch(`${API_HOST}/data/industries`);
      const data = (await response.json()) as ApiResponseData<Industry[]>;
      return data.data;
    } catch (error) {
      throw new Error("Failed to fetch industries.");
    }
  }
}
