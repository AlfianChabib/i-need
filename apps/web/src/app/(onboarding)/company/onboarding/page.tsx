import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import OnboardingForm from "./onboarding-form";
import { DataService } from "@/services/data.service";

export default async function page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["industries"],
    queryFn: DataService.getIndustries,
  });

  return (
    <div className="flex w-full items-center justify-center gap-4 pt-16">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OnboardingForm />
      </HydrationBoundary>
    </div>
  );
}
