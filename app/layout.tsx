import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from '../public/data'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angler",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {<FloatingNav navItems={navItems} />}
        {children}
      </body>
    </html>
  );
}
