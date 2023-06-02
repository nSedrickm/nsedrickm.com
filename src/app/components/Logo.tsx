import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="w-40 transition duration-300 ease-in-out delay-150 sm:w-44 lg:w-56 hover:scale-110"
    >
      <Image src={logo} alt="logo" className="object-contain" />
    </Link>
  );
};
