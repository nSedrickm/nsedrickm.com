import { ReactNode } from "react";
import { Navbar, Footer, LayoutAnimationWrapper } from "@/components";
import { Unica_One, Crimson_Text } from "next/font/google";
import clsx from "clsx";
import ErrorBoundary from "./components/ErrorBoundary";
import "./globals.css";

const headingFont = Unica_One({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = Crimson_Text({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-body",
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
      className={clsx(headingFont.variable, bodyFont.variable, "scroll-smooth")}
    >
      <body>
        <LayoutAnimationWrapper>
          <ErrorBoundary>
            <div className="flex flex-col max-w-full min-h-screen text-white bg-black">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ErrorBoundary>
        </LayoutAnimationWrapper>
      </body>
    </html>
  );
}
