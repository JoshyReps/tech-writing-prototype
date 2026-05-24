import type { FieldValues, UseFormRegister, Path } from "react-hook-form";
import PascalCaseConverter from "../Helper/PascalCaseConverter";
import type { ComponentPropsWithoutRef } from "react";

type InputProps<T extends FieldValues> = {
  inputName: Path<T>;
  register: UseFormRegister<T>;
  error: string | undefined;
  initialLoading?: boolean;
  type: "password" | "text";
} & ComponentPropsWithoutRef<"input">;

export default function Input<T extends FieldValues>({
  inputName,
  type,
  register,
  error,
  ...props
}: InputProps<T>) {
  const pascalCasedInputName = PascalCaseConverter(inputName);

  return (
    <div className="flex w-full flex-col gap-2 px-5">
      <label className="text-[12px]" htmlFor={inputName}>
        {pascalCasedInputName}
      </label>

      <input
        type={type}
        className="text-primary w-full border-b border-black bg-none text-xl shadow-md outline-none"
        id={inputName}
        placeholder={pascalCasedInputName}
        {...props}
        {...register(inputName)}
      />

      {error && <span className="text-[16px] text-red-600">{error}</span>}
    </div>
  );
}
