"use client";

import { LoginSchema } from "@/types/auth";
import { AuthService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { queryClient } from "@/lib/query-client";

export default function useLogin() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: LoginSchema) => AuthService.login(data),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.accessToken);
      queryClient.invalidateQueries({ queryKey: ["session"] });
      router.push(res.data.user.role === "CANDIDATE" ? "/jobs" : "/dashboard");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    ...mutation,
  };
}
