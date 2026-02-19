import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NavbarDemo } from '@/components/Navbar'
import  Footer  from "@/components/Footer";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Full-stack developer & designer crafting digital experiences.",
};

export const viewport: Viewport = {
  themeColor: "#080b10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The "dark" class here + darkMode:"class" in tailwind.config
    // permanently locks the site to dark mode — no system preference needed.
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-[var(--background)] text-[var(--foreground)] font-body antialiased">
        <NavbarDemo />
        {children}
       <Footer/>
      </body>
    </html>
  );
}