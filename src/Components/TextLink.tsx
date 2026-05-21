import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TextLinkProps {
  to: string;
  children?: ReactNode;
}

export default function TextLink({ children, to }: TextLinkProps) {
  return (
    <Link to={to} className="text-[16px] text-blue-950 italic">
      {children}
    </Link>
  );
}
