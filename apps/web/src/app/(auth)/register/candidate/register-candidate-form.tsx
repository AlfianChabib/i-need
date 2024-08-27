"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterCandidateSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthValidator } from "@/validations/auth.validation";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth.service";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/form-fields/input-field";
import { Button } from "@/components/ui/button";

export default function SegisterCandidateForm() {
  const [message, setMessage] = useState<string>("");

  const { mutate } = useMutation({
    mutationFn: async (data: RegisterCandidateSchema) => await AuthService.registerCandidate(data),
    onSuccess: (res) => {
      setMessage(res.message);
    },
    onError: (err) => {
      setMessage(err.message);
    },
  });

  const form = useForm<RegisterCandidateSchema>({
    resolver: zodResolver(AuthValidator.registerCandidate),
    defaultValues: { username: "", email: "", password: "", confirmPassword: "" },
  });

  return (
    <div>
      {message && <div className="text-red-500">{message}</div>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutate(data))} className="flex flex-col gap-2">
          <InputField
            form={form}
            name="username"
            label="Username"
            type="text"
            placeholder="ineed"
          />
          <InputField
            form={form}
            name="email"
            label="Email"
            type="email"
            placeholder="ineed@example.com"
          />
          <InputField
            form={form}
            name="password"
            label="Password"
            type="password"
            placeholder="*******"
          />
          <InputField
            form={form}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="*******"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Form>
    </div>
  );
}
