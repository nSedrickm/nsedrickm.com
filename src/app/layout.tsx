import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Navbar, Footer, LayoutAnimationWrapper } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], fallback: ["system-ui", "arial"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
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
