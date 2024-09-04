import { AuthService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRegisterCompany() {
  return useMutation({
    mutationFn: AuthService.registerCompany,
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
}
