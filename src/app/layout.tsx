import type { Metadata } from "next";
import { Gentium_Book_Plus } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gentiumBookPlus = Gentium_Book_Plus({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-gentium-book-plus",
});

export const metadata: Metadata = {
  title: "IL Portfolio",
  description: "Portfolio of Ingrid Lima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gentiumBookPlus.className}>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
