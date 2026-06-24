"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";

import { OperaFooter, OperaHeader } from "@/components/opera-shell";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/site";

export function LocaleChrome({ locale, children }: { locale: Locale; children: ReactNode }) {
  const pathname = usePathname();
  const normalizedPathname = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const isOperaHome = normalizedPathname === `/${locale}`;

  useEffect(() => {
    document.body.dataset.operaHome = isOperaHome ? "true" : "false";

    return () => {
      delete document.body.dataset.operaHome;
    };
  }, [isOperaHome]);

  return (
    <div className={isOperaHome ? "min-h-screen bg-[#06101c]" : "min-h-screen bg-white"}>
      {isOperaHome ? <OperaHeader locale={locale} /> : <SiteHeader locale={locale} />}
      <main>{children}</main>
      {isOperaHome ? <OperaFooter locale={locale} /> : <SiteFooter locale={locale} />}
    </div>
  );
}
