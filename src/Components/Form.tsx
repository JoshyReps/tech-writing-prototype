import type { ReactNode } from "react";
import type {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

interface FormProps<T extends FieldValues> {
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: SubmitHandler<T>;
  children?: ReactNode;
}

export default function Form<T extends FieldValues>({
  children,
  handleSubmit,
  onSubmit,
}: FormProps<T>) {
  return (
    <form
      className="xs:w-100 flex min-h-130 w-full flex-col items-center justify-center gap-8 bg-white py-6 shadow-md shadow-black/30"
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
    </form>
  );
}
