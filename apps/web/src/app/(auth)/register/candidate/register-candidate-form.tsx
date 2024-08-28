"use client";

import { useForm } from "react-hook-form";
import { RegisterCandidateSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthValidator } from "@/validations/auth.validation";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/form-fields/input-field";
import { SubmitButton } from "@/components/form-fields/submit-button";
import useRegisterCandidate from "@/hooks/auth/useRegisterCandidate";

export default function SegisterCandidateForm() {
  const { mutate, isPending } = useRegisterCandidate();

  const form = useForm<RegisterCandidateSchema>({
    resolver: zodResolver(AuthValidator.registerCandidate),
    defaultValues: { username: "", email: "", password: "", confirmPassword: "" },
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutate(data))} className="flex flex-col gap-2">
          <InputField form={form} name="username" label="Username" type="text" placeholder="john doe" />
          <InputField form={form} name="email" label="Email" type="email" placeholder="ineed@example.com" />
          <InputField form={form} name="password" label="Password" type="password" />
          <InputField form={form} name="confirmPassword" label="Confirm Password" type="password" />
          <SubmitButton disabled={isPending}>Submit</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
