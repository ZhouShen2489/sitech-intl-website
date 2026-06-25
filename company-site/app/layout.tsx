import type { Metadata } from "next";
import type { ReactNode } from "react";

import "../../app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sitech-intl.com"),
  title: "Si-Tech International",
  description: "Company profile and partnership entry point for Si-Tech International.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
