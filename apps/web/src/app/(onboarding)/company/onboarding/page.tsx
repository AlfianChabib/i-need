import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import OnboardingForm from "./onboarding-form";
import { DataService } from "@/services/data.service";

// const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

// const getIndustries = async () => {
//   const response = await fetch(`${API_HOST}/data/industries`);
//   const data = await response.json();

//   return data;
// };

export default async function page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["industries"],
    queryFn: DataService.getIndustries,
  });

  return (
    <div className="flex w-full items-center justify-center gap-4 pt-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OnboardingForm />
      </HydrationBoundary>
    </div>
  );
}
