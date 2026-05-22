import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="min-h-screen pt-18">
        <Outlet />
      </div>
    </div>
  );
}
