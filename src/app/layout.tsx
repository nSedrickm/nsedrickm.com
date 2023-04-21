import { Navbar, Footer } from "components";
import "./globals.css";

export const metadata = {
  title: "Ngwa Sedrick Meh",
  description:
    "Professional Software Engineer, Crafting amazing solutions for businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen grid-flow-row grid-rows-3 auto-rows-fr">
          <Navbar />
          <main className="row-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
