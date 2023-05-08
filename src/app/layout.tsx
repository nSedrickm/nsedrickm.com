import { Navbar, Footer } from "components";
import "./globals.css";

export const metadata = {
  title: "Ngwa Sedrick Meh",
  description:
    "Professional Software Engineer, Crafting amazing solutions for businesses",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="flex flex-col min-h-screen text-white bg-black">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
