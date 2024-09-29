import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export interface SelectOption {
  id: number;
  name: string;
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
        <FormItem>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={props.defaultValue}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={props.placeholder} className="placeholder:text-muted-foreground" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.id} value={String(option.id)}>
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
