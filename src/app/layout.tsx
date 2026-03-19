import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backend Developer | Obsidian Tech Portfolio",
  description: "High-end, modern portfolio showcasing scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} font-mono bg-obsidian text-slate-300 antialiased selection:bg-neon-cyan selection:text-obsidian overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
