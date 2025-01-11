import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import Tiptap from "../tiptap/tiptap";

type TextEditorFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  description?: string;
} & Omit<React.ComponentPropsWithoutRef<"textarea">, "form">;

export const TextEditorField = <TFieldValues extends FieldValues = FieldValues>({
  form,
  name,
  label,
  description,
  ...props
}: TextEditorFieldProps<TFieldValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Tiptap onChange={field.onChange} description="Write something nice..." placeholder={props.placeholder} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
