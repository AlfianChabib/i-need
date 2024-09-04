"use client";

import useRegisterCompany from "@/hooks/auth/useRegisterCompany";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/form-fields/input-field";
import { SubmitButton } from "@/components/form-fields/submit-button";
import { RegisterCompanySchema } from "@/types/auth";
import { AuthValidator } from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterCompanyForm() {
  const { mutate, isPending } = useRegisterCompany();

  const form = useForm<RegisterCompanySchema>({
    resolver: zodResolver(AuthValidator.registerCompany),
    defaultValues: { companyName: "", email: "", password: "", confirmPassword: "" },
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutate(data))} className="flex flex-col gap-2">
          <InputField form={form} name="companyName" type="text" label="Company Name" placeholder="ext. Ineed Ltd." />
          <InputField form={form} name="email" label="Email" type="email" placeholder="company@example.com" />
          <InputField form={form} name="password" type="password" label="Password" />
          <InputField form={form} name="confirmPassword" type="password" label="Confirm Password" />
          <SubmitButton disabled={isPending}>Submit</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
