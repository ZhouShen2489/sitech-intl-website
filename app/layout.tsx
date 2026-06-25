import type { Metadata } from "next";

import { withBasePath } from "@/lib/site";

import "./globals.css";

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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
