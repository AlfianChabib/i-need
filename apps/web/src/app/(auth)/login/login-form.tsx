"use client";

import React from "react";
import { InputField } from "@/components/form-fields/input-field";
import { Form } from "@/components/ui/form";
import { LoginSchema } from "@/types/auth";
import { AuthValidator } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/auth/useLogin";
import { SubmitButton } from "@/components/form-fields/submit-button";

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(AuthValidator.loginSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="flex flex-col my-10">
      <Form {...form}>
        <form className="flex flex-col gap-2" onSubmit={form.handleSubmit((values) => mutate(values))}>
          <InputField form={form} name="email" label="Email" type="email" placeholder="ineed@example.com" />
          <InputField form={form} name="password" label="Password" type="password" />
          <SubmitButton disabled={isPending}>Submit</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
