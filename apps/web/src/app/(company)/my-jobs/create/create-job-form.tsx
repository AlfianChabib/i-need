"use client";

import { Form } from "@/components/ui/form";
import { InputField, SelectField, SelectOption, SubmitButton, TextEditorField } from "@/components/form-fields";
import { DataService } from "@/services/data.service";
import { type CreateJobSchema } from "@/types/job";
import { jobTypeOptions, workingTypeOptions } from "@/utils/constants";
import { JobValidator } from "@/validations/job.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function CreateJobForm() {
  const { data: classifications } = useQuery({
    queryKey: ["classifications"],
    queryFn: DataService.getClassifications,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: CreateJobSchema) => {
      console.log(data);
      return data;
    },
  });

  const form = useForm<CreateJobSchema>({
    resolver: zodResolver(JobValidator.createJobSchema),
    defaultValues: {
      title: "",
      city: "",
      description: "",
      redirectUrl: "",
      type: undefined,
      workingType: undefined,
      classification: { classificationId: undefined },
    },
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutate(data))} className="grid space-y-2 w-full">
          <InputField form={form} name="title" label="Title" placeholder="Job Title" />
          <TextEditorField
            form={form}
            name="description"
            label="Description"
            placeholder="Write something description"
          />
          <InputField form={form} name="city" label="City" placeholder="Working place" />
          <InputField form={form} name="redirectUrl" label="Redirect URL" placeholder="Redirect URL" />
          <div className="flex flex-col md:flex-row w-full justify-between gap-2">
            <SelectField
              form={form}
              name="type"
              label="Job Type"
              placeholder="Select job type"
              options={jobTypeOptions}
            />
            <SelectField
              form={form}
              name="workingType"
              label="Working Type"
              placeholder="Select working type"
              options={workingTypeOptions}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between gap-2">
            <SelectField
              form={form}
              name="classification.classificationId"
              label="Classification"
              placeholder="Select classification"
              options={classifications as SelectOption[]}
            />
            <SelectField
              form={form}
              name="classification.subClassificationId"
              disabled={!form.watch("classification.classificationId")}
              label="Sub Classification"
              placeholder="Select sub classification"
              options={classifications as SelectOption[]}
            />
          </div>
          <SubmitButton disabled={isPending}>Create Job Posting</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
