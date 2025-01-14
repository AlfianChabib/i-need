"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth.service";
import { queryClient } from "@/lib/query-client";

export default function LogoutButton(props: ButtonProps) {
  const router = useRouter();

  const { mutate: logout } = useMutation({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      router.push("/");
      queryClient.resetQueries();
      localStorage.removeItem("token");
    },
    onError: () => {
      router.refresh();
    },
  });

  return (
    <Button onClick={() => logout()} {...props}>
      {props.children}
    </Button>
  );
}
