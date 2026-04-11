import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { withBasePath } from "@/lib/site";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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
    icon: withBasePath("/icon.png"),
    shortcut: withBasePath("/icon.png"),
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
      <body className={`${fraunces.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
