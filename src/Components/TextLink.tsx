import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type TextLinkProps = {
  to: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function TextLink({ children, to, ...props }: TextLinkProps) {
  return (
    <Link to={to} className="text-[16px] text-blue-950 italic">
      <button {...props}>{children}</button>
    </Link>
  );
}
