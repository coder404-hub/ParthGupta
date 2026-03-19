import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parth Gupta | Developer Portfolio",
  description: "Minimal, professional portfolio of Parth Gupta, showcasing clean code and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans bg-obsidian text-slate-300 antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
