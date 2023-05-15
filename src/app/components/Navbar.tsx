"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useScroll } from "hooks/useScroll";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isScrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "z-40 flex gap-4 items-center flex-wrap justify-between text-lg px-2 py-4 lg:py-0 sm:px-8 sticky top-0 transform transition-all duration-600 ease-in-out delay-150",
        isScrolled ? "backdrop-blur bg-black/40" : "lg:-mb-44"
      )}
    >
      <Logo />
      <ul className="items-stretch hidden gap-0 lg:flex">
        {links.map((link, index) => {
          const isActive = link.href === pathname;
          return (
            <li key={index} className={clsx(isScrolled ? "h-20" : "h-36")}>
              <Link
                href={link.href}
                className={clsx(
                  "flex font-bold h-full px-12 items-center rounded-b-md transition duration-300 ease-in-out delay-150 hover:backdrop-blur-2xl",
                  isActive
                    ? "bg-blue-700 hover:animate-pulse"
                    : "hover:bg-white/10 hover:animate-bounce"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="/contact"
          className="p-2 font-bold text-black transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:animate-none animate-pulse md:py-4 md:px-8 hover:-translate-y-1 hover:scale-110"
        >
          Hire Me!
        </Link>
        <button
          className="transition duration-300 ease-in-out delay-150 appearance-none lg:hidden hover:-translate-y-1 hover:scale-110"
          onClick={() => setOpen(!open)}
          aria-label={open ? "close menu" : "open menu"}
        >
          {open ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {open && (
        <ul className="order-last w-full mt-10">
          {links.map((link, index) => {
            const isActive = link.href === pathname;
            return (
              <li key={index} className="h-28">
                <Link
                  href={link.href}
                  onClick={() => setOpen(!open)}
                  className={clsx(
                    "flex font-bold h-full px-12 items-center rounded-b-md transition duration-300 ease-in-out delay-150 hover:backdrop-blur-2xl",
                    isActive
                      ? "bg-blue-700 hover:animate-pulse"
                      : "hover:bg-white/10 hover:animate-bounce"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};
