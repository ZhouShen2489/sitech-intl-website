import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { withBasePath } from "@/lib/site";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Si-Tech | Solution Partnership Website",
  description:
    "A bilingual partnership-focused corporate website for telecom, customer service, operations, and digital delivery opportunities.",
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "any" },
      { url: withBasePath("/icon.png"), type: "image/png", sizes: "300x300" },
    ],
    shortcut: withBasePath("/favicon.ico"),
    apple: withBasePath("/icon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
