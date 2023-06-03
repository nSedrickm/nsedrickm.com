import { ReactNode } from "react";
import { Navbar, Footer, LayoutAnimationWrapper } from "@/components";
import { Open_Sans, Satisfy } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

const open_sans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
});

export const metadata = {
  title: "Ngwa Sedrick Meh",
  description:
    "Freelance frontend developer, React, NextJS, Crafting amazing solutions for businesses",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={clsx(open_sans.variable, satisfy.variable, "scroll-smooth")}
    >
      <body>
        <LayoutAnimationWrapper>
          <div className="flex flex-col max-w-full min-h-screen text-white bg-black">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LayoutAnimationWrapper>
      </body>
    </html>
  );
}
