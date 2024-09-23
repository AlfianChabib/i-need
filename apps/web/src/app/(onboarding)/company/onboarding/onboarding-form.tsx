"use client";

import { useSession } from "@/components/providers/session-provider";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DisplaySelectedImage from "@/components/form-fields/display-selected-image";
import { FileInputField } from "@/components/form-fields/file-input-field";
import { InputField } from "@/components/form-fields/input-field";
import { SubmitButton } from "@/components/form-fields/submit-button";
import { buttonVariants } from "@/components/ui/button";
import { CompanyOnboardingSchema } from "@/types/onboarding";
import { ACCEPTED_IMAGE_MIME_TYPES } from "@/utils/constants";
import { OnboardingValidator } from "@/validations/onboarding.validation";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { DataService } from "@/services/data.service";
import { SelectField, SelectOption } from "@/components/form-fields/select-field";

export default function OnboardingForm() {
  const session = useSession();
  const { data: industries } = useQuery({
    queryKey: ["industries"],
    queryFn: DataService.getIndustries,
  });

  const form = useForm<CompanyOnboardingSchema>({
    resolver: zodResolver(OnboardingValidator.companyOnboardingSchema),
    mode: "onChange",
    defaultValues: {
      companyName: session.username,
      logo: undefined,
      address: "",
      website: "",
      industryId: undefined,
      description: "",
      contact: { email: session.email, phoneNumber: "", linkedin: "" },
    },
  });

  const handleSubmit = (data: CompanyOnboardingSchema) => {
    console.log(data);
  };

  return (
    <div className="grid max-w-2xl w-full px-4 h-full">
      <div className="pb-4">
        <h1 className="text-xl font-semibold">Onboarding</h1>
        <p className="text-sm text-muted-foreground">
          Please fill the form below to create your company profile. You will be able to edit it later.
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 py-4">
          <InputField form={form} name="companyName" label="Company Name" placeholder="Company Name" />
          <div className="flex flex-col gap-2">
            <DisplaySelectedImage />
            <FileInputField
              form={form}
              name="logo"
              label="Choose your logo"
              placeholder="Logo"
              className={buttonVariants({
                className: "bg-gradient-to-r from-red-600 to-yellow-600 font-normal gap-2 cursor-pointer",
              })}
              accept={ACCEPTED_IMAGE_MIME_TYPES.join(", ")}
            />
          </div>
          <InputField form={form} name="address" label="Address" placeholder="Address" />
          <InputField form={form} name="website" label="Website" placeholder="Website" />
          <SelectField
            form={form}
            name="industryId"
            label="Industry"
            placeholder="Select a industry"
            options={industries as SelectOption[]}
          />
          <InputField form={form} name="description" label="Description" placeholder="Description" />
          <InputField form={form} name="contact.email" label="Email" placeholder="Email" />
          <InputField form={form} name="contact.phoneNumber" label="Phone Number" placeholder="Phone Number" />
          <InputField form={form} name="contact.linkedin" label="LinkedIn" placeholder="LinkedIn" />
          <SubmitButton>Submit</SubmitButton>
        </form>
      </Form>
    </div>
  );
}