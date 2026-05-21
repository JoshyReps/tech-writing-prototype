import type { ReactNode } from "react";
import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

interface FormProps<T extends FieldValues> {
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
  children?: ReactNode;
}

export default function Form<T extends FieldValues>({
  children,
  handleSubmit,
  onSubmit,
  onError,
}: FormProps<T>) {
  return (
    <form
      className="flex min-h-130 flex-col items-center justify-center gap-8 bg-white py-6 shadow-md shadow-black/30"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {children}
    </form>
  );
}
