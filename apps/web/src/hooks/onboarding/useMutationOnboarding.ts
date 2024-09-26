import { CompanyService } from "@/services/company.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useMutationOnboarding = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: CompanyService.onboarding,
    onSuccess: (res) => {
      toast.success(res.message);
      router.push("/dashboard");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return mutation;
};
