import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="cl h-screen w-full">
      <Navbar />
      <div className="mx-auto min-h-screen border-2 border-y-0 border-olive-700 bg-olive-300 pt-18 shadow-md shadow-black/30 md:w-200">
        <Outlet />
      </div>
    </div>
  );
}
