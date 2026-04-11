"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type ClientRedirectProps = {
  href: string;
  message: string;
  linkLabel: string;
};

export function ClientRedirect({ href, message, linkLabel }: ClientRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-card">
        <p className="text-base leading-7 text-slate-700">{message}</p>
        <Link
          href={href}
          className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate"
        >
          {linkLabel}
        </Link>
      </div>
    </main>
  );
}
