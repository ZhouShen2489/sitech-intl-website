import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import "../../app/globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["500", "600", "700", "800"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://opera.sitech-intl.com"),
  title: "Enterprise Opera OS",
  description: "Living Enterprise concept demo by Si-Tech International.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className={`${sora.variable} ${manrope.variable} font-sans antialiased`}>{children}</body></html>;
}
