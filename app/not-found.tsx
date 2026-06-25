import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f9fc] px-6">
      <div className="max-w-xl rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-card">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-tide">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          The page may have moved as Si-Tech shifts to a multi-site product architecture.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/en" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
            English home
          </Link>
          <Link href="/zh" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-ink">
            中文首页
          </Link>
        </div>
      </div>
    </main>
  );
}
