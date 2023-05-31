"use client";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useScroll } from "hooks/useScroll";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const path = usePathname();
  const isScrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {/* Desktop */}
      <nav
        className={clsx(
          "hidden lg:flex items-center justify-between z-40 px-8 sticky top-0",
          {
            "lg:-mb-44": ["/", "/about"].includes(path),
          },
          {
            "backdrop-blur bg-black/40 lg:top-5 lg:mx-8 lg:py-2 lg:px-6 lg:rounded-lg":
              isScrolled,
          }
        )}
      >
        <Logo />
        <ul className="items-stretch hidden gap-0 lg:flex">
          {links.map((link, index) => (
            <li key={index} className={clsx(isScrolled ? "h-20" : "h-36")}>
              <Link
                href={link.href}
                className={clsx(
                  "flex  h-full px-12 items-center rounded-b-md transition duration-300 ease-in-out delay-150 hover:backdrop-blur-2xl",
                  link.href === path
                    ? "bg-blue-700 hover:animate-pulse font-bold"
                    : "hover:bg-white/10 hover:animate-bounce"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="p-2 font-bold text-black transition duration-300 ease-in-out delay-150 bg-white rounded-md hover:animate-none animate-pulse md:py-4 md:px-8 hover:-translate-y-1 hover:scale-110"
        >
          Hire Me!
        </Link>
      </nav>

      {/* Mobile */}
      <motion.nav
        className={clsx(
          "lg:hidden z-40 overflow-y-auto",
          (isScrolled || open) && "bg-black/40 backdrop-blur",
          open ? "fixed inset-0" : "sticky top-0"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
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
        </div>

        {/* Mobile Links */}
        {open && (
          <motion.ul className="w-full p-4 mt-5">
            {links.map((link, index) => (
              <motion.li key={index} className="h-28">
                <Link
                  href={link.href}
                  onClick={() => setOpen(!open)}
                  className={clsx(
                    "flex  h-full px-12 items-center rounded-md transition duration-300 ease-in-out delay-150 hover:backdrop-blur-2xl",
                    link.href === path
                      ? "bg-blue-700 hover:animate-pulse font-bold"
                      : "hover:bg-white/10 hover:animate-bounce"
                  )}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </Fragment>
  );
};
