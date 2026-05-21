import type { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-xl bg-blue-500 px-10 py-3 text-xl font-semibold text-white shadow-md">
      {children}
    </button>
  );
}
