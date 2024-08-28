import { AuthService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRegisterCandidate() {
  const mutation = useMutation({
    mutationFn: AuthService.registerCandidate,
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    ...mutation,
  };
}
