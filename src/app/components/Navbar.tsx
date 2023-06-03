"use client";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";
import clsx from "clsx";
import HireMeMenu from "./HireMeMenu";
import { MotionProps, motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const desktopMenu: MotionProps = {
  initial: { y: "-9rem", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, type: "spring" },
};

const logoAnimation: MotionProps = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, type: "spring" },
};

const actionAnimation: MotionProps = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1, type: "spring" },
};

export const Navbar = () => {
  const path = usePathname();
  const isScrolled = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {/* Desktop */}
      <motion.nav
        layout
        className={clsx(
          "hidden lg:flex items-center justify-between z-40 px-8 sticky top-0 text-lg",
          {
            "lg:-mb-44": ["/", "/about"].includes(path),
          },
          {
            "backdrop-blur bg-black/40": isScrolled,
          }
        )}
      >
        <motion.span
          {...logoAnimation}
          className="w-40 transition duration-300 ease-in-out delay-150 sm:w-44 lg:w-56 hover:scale-110"
        >
          <Logo />
        </motion.span>
        <motion.ul
          {...desktopMenu}
          className="items-stretch hidden gap-0 lg:flex"
        >
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
        </motion.ul>

        <motion.span {...actionAnimation}>
          <HireMeMenu />
        </motion.span>
      </motion.nav>

      {/* Mobile */}
      <motion.nav
        className={clsx(
          "lg:hidden z-40 text-lg",
          (isScrolled || open) && "bg-black/40 backdrop-blur",
          open ? "fixed inset-0" : "sticky top-0"
        )}
      >
        <motion.div layout className="flex items-center justify-between p-3">
          <motion.span
            {...logoAnimation}
            className="w-40 transition duration-300 ease-in-out delay-150 sm:w-44 lg:w-56 hover:scale-110"
          >
            <Logo />
          </motion.span>
          <motion.div
            {...actionAnimation}
            className="flex items-center gap-1.5 sm:gap-4"
          >
            <HireMeMenu />
            <button
              className="transition duration-300 ease-in-out delay-150 appearance-none lg:hidden hover:-translate-y-1 hover:scale-110"
              onClick={() => setOpen(!open)}
              aria-label={open ? "close menu" : "open menu"}
            >
              {open ? <X size={36} /> : <Menu size={36} />}
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile Links */}
        {open && (
          <motion.ul {...desktopMenu} className="w-full p-4 mt-5">
            {links.map((link, index) => (
              <li key={index} className="h-28">
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
              </li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </Fragment>
  );
};
