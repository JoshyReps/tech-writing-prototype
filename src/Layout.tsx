import type { ReactNode } from "react";
import Navbar from "./Components/Navbar";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-full bg-black/50">
      <Navbar />
      {children};
    </div>
  );
}
