import { SelectOption } from "@/components/form-fields";
import { env } from "@/lib/env";
import { Classification, Industry, SubClassification } from "@/types/data";
import { ApiResponseData } from "@/types/server";

export class DataService {
  static async getIndustries() {
    try {
      const response = await fetch(`${env.NEXT_PUBLIC_API_HOST}/data/industries`);
      const data = (await response.json()) as ApiResponseData<Industry[]>;

      const toSelectOptions = (data: Industry[]): SelectOption[] => {
        return data.map((industry) => ({ id: industry.id, value: String(industry.id), label: industry.label }));
      };

      return toSelectOptions(data.data);
    } catch (error) {
      throw new Error("Failed to fetch industries.");
    }
  }

  static async getClassifications() {
    try {
      const response = await fetch(`${env.NEXT_PUBLIC_API_HOST}/data/classifications`);
      const data = (await response.json()) as ApiResponseData<Classification[]>;

      const classificationData = (data: Classification[]): SelectOption[] => {
        return data.map((classification) => ({
          id: classification.id,
          value: String(classification.id),
          label: classification.title,
        }));
      };

      return classificationData(data.data);
    } catch (error) {
      throw new Error("Failed to fetch classifications.");
    }
  }

  static async getSubClassifications(classificationId: number) {
    try {
      const response = await fetch(`${env.NEXT_PUBLIC_API_HOST}/data/classifications/${classificationId}`);
      const data = (await response.json()) as ApiResponseData<SubClassification[]>;

      const subClassificationData = (data: SubClassification[]): SelectOption[] => {
        return data.map((subClassification) => ({
          id: subClassification.id,
          value: String(subClassification.id),
          label: subClassification.title,
        }));
      };

      return subClassificationData(data.data);
    } catch (error) {
      throw new Error("Failed to fetch sub classifications.");
    }
  }
}
