import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../app/globals.css";
export const metadata: Metadata = { metadataBase: new URL("https://telecom.sitech-intl.com"), title: "Si-Tech Telecom", description: "Telecom growth and operations solutions by Si-Tech International." };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en"><body className="font-sans antialiased">{children}</body></html>; }
