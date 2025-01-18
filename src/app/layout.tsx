import type { Metadata } from "next";
import { Gentium_Book_Plus } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/context/Provider";
import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={gentiumBookPlus.className + " bg-bgWhite dark:bg-bgBlack"}
        style={{ overflowX: "hidden" }}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
