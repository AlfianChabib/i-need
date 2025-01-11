import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";

export interface SelectOption {
  id: number;
  value: string;
  label: string;
}

type SelectFieldProps<TFieldValues extends FieldValues = FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
  options: SelectOption[];
} & Omit<React.ComponentPropsWithoutRef<"select">, "form">;

export const SelectField = <TFieldValues extends FieldValues = FieldValues>({
  form,
  name,
  options,
  ...props
}: SelectFieldProps<TFieldValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={props.defaultValue} disabled={props.disabled}>
            <FormControl>
              <SelectTrigger className={cn("bg-background", props.className)}>
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.id} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {props.description && <FormDescription>{props.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
