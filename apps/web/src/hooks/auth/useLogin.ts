"use client";

import { LoginSchema } from "@/types/auth";
import { AuthService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: LoginSchema) => await AuthService.login(data),
    onSuccess: (res) => {
      console.log(res);
      localStorage.setItem("token", res.data.accessToken);
      router.push("/");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
}
