import Link from "next/link";

import { withBasePath } from "@/lib/site";

type StaticRedirectProps = {
  href: string;
  message: string;
  linkLabel: string;
};

export function StaticRedirect({ href, message, linkLabel }: StaticRedirectProps) {
  const targetHref = withBasePath(href);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <meta httpEquiv="refresh" content={`0;url=${targetHref}`} />
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
