import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-center bg-gradient-to-b from-gray-500/25 via-gray-800/25 to-black backdrop-blur">
      <div className="flex flex-col flex-wrap items-center gap-8 p-4 md:p-8">
        <Logo />
        <p className="">
          For any queries, please feel free to{" "}
          <Link href="/contact" className="underline underline-offset-1">
            contact me
          </Link>
        </p>
        <div className="flex items-center col-span-1 gap-0 md:gap-2">
          <a
            href="https://www.linkedin.com/in/ngwa-sedrick-meh/"
            target="_blank"
            className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com/nsedrickm"
            target="_blank"
            className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/nsedrickm"
            target="_blank"
            className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
          >
            <Github />
          </a>
          <a
            href="https://web.facebook.com/nsedfalj"
            target="_blank"
            className="p-4 transition duration-300 ease-in-out delay-150 hover:scale-125"
          >
            <Facebook />
          </a>
        </div>
      </div>

      <p className="self-stretch p-4 text-base text-white bg-blue-700">
        © 2023 nsedrickm all rights reserved
      </p>
    </footer>
  );
};
