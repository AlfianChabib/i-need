import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Icon } from "../lucide-icon";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useSelectedImageStore } from "@/store/selected-image-store";

type FileInputFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label?: string;
  description?: string;
} & Omit<React.ComponentProps<typeof Input>, "form">;

export const FileInputField = <TFieldValues extends FieldValues = FieldValues>({
  form,
  name,
  label,
  description,
  ...props
}: FileInputFieldProps<TFieldValues>) => {
  const { setSelectedImage } = useSelectedImageStore();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <button type="button">
              <Input
                type="file"
                className="hidden"
                id="fileInput"
                accept={props.accept}
                onBlur={field.onBlur}
                name={field.name}
                onChange={(e) => {
                  field.onChange(e.target.files);
                  setSelectedImage(e.target.files?.[0] || null);
                }}
                ref={field.ref}
              />
              <Label
                htmlFor="fileInput"
                // className={buttonVariants({
                //   className: "bg-gradient-to-r from-red-600 to-yellow-600 font-normal gap-2 cursor-pointer",
                // })}
                className={props.className}
              >
                <Icon name="Image" size={20} />
                <span className="whitespace-nowrap">{label}</span>
              </Label>
            </button>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
