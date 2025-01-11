import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { DataService } from "@/services/data.service";
import DashedWrapper from "@/components/static/DashedWrapper";
import CreateJobForm from "./create-job-form";

export default async function page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["classifications"],
    queryFn: DataService.getClassifications,
  });

  // await queryClient.prefetchQuery({
  //   queryKey: ["sub-classifications"],
  //   queryFn: DataService.getSubClassifications,
  // });

  return (
    <div className="grid grid-cols-1 gap-4 md:p-4 p-2">
      <div className="">
        <h1 className="text-xl font-semibold text-foreground/80">Create Job Posting</h1>
        <p className="text-sm text-foreground/60">
          Add a job posting to your company and let your customers find it easily.
        </p>
      </div>
      <DashedWrapper>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CreateJobForm />
        </HydrationBoundary>
      </DashedWrapper>
    </div>
  );
}
