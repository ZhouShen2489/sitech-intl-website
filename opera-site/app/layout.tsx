import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://opera.sitech-intl.com"),
  title: "Enterprise Opera OS",
  description: "Enterprise Opera OS product site by Si-Tech International.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className="font-sans antialiased">{children}</body></html>;
}
