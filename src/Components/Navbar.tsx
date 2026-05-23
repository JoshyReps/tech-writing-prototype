import TextLogo from "./TextLogo";
import Image from "./Image";
import Logout from "../Features/Authentication/Logout";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-100 flex h-18 w-full items-center justify-between bg-olive-300 px-3 py-2 shadow-md shadow-black/20">
      <div className="flex h-12 w-28 items-center gap-2">
        <Image src="logo.svg" alt="logo" />
        <TextLogo />
      </div>
      <Logout />
    </nav>
  );
}
