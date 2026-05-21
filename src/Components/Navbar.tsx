import TextLogo from "./TextLogo";
import TextLink from "./TextLink";
import Image from "./Image";
export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between bg-olive-300 px-3 py-2 shadow-md shadow-black/20">
      <div className="flex h-12 w-28 items-center gap-2">
        <Image src="logo.svg" alt="logo" />
        <TextLogo />
      </div>
      <TextLink to="/signin">Logout</TextLink>
    </nav>
  );
}
