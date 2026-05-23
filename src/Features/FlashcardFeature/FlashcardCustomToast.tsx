import type { ReactNode } from "react";

interface FlashcardCustomToastProps {
  children?: ReactNode;
}

export default function FlashcardCustomToast({
  children,
}: FlashcardCustomToastProps) {
  return <span className="text-center">{children}</span>;
}
