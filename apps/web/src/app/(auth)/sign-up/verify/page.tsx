"use client";

import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate, isPending } = useMutation({
    mutationKey: ["verify-token"],
    mutationFn: async (token: string) => {
      await axios.post("http://localhost:3001/api/v1/auth/verify", { token });
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });

  useEffect(() => {
    if (token) {
      mutate(token);
    }
  }, [mutate, token]);

  if (!token) return <div>token not found</div>;

  if (isPending) return <div>verifying...</div>;

  return <div>{token}</div>;
}
