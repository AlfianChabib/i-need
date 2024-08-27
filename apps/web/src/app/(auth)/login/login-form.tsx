"use client";

import React from "react";
import { InputField } from "@/components/form-fields/input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LoginSchema } from "@/types/auth";
import { AuthValidator } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/auth/useLogin";

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(AuthValidator.loginSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="grid space-y-4">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit((values) => mutate(values))}
        >
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
          <Button type="submit" className="w-full" aria-disabled={isPending}>
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}
