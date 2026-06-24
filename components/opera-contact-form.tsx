"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { operaContent, operaCopy } from "@/content/opera-content";
import type { Locale } from "@/lib/site";

type SubmitState = "idle" | "loading" | "success" | "error";

export function OperaContactForm({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<SubmitState>("idle");
  const fields = operaContent.contact.fields;
  const isStaticExport = process.env.NEXT_PUBLIC_IS_STATIC_EXPORT === "true";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      workEmail: String(formData.get("workEmail") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      jobTitle: "Business lead",
      companySize: "",
      phone: "",
      industry: "Export / trade operations",
      interestedIn: "Enterprise Opera OS concept demo",
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
      locale,
      source: "enterprise-opera-os",
      pageUrl:
        typeof window !== "undefined"
          ? new URL(pathname, window.location.origin).toString()
          : "",
    };

    if (isStaticExport) {
      const subject =
        locale === "en"
          ? `Enterprise Opera OS inquiry from ${payload.fullName || payload.workEmail || "visitor"}`
          : `Enterprise Opera OS 咨询：${payload.fullName || payload.workEmail || "访客"}`;
      const body = [
        `Name: ${payload.fullName}`,
        `Work Email: ${payload.workEmail}`,
        `Company: ${payload.companyName}`,
        "",
        "Message:",
        payload.message,
        "",
        `Locale: ${payload.locale}`,
        `Page URL: ${payload.pageUrl}`,
      ].join("\n");

      window.location.href = `mailto:info@sitech-intl.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-[rgba(5,17,35,0.82)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur xl:p-7"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-white/78">{operaCopy(locale, fields.fullName)}</span>
          <input
            name="fullName"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f2b96d] focus:bg-white/10"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-white/78">{operaCopy(locale, fields.workEmail)}</span>
          <input
            type="email"
            name="workEmail"
            required
            className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f2b96d] focus:bg-white/10"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm text-white/78">{operaCopy(locale, fields.companyName)}</span>
        <input
          name="companyName"
          className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f2b96d] focus:bg-white/10"
        />
      </label>

      <label className="mt-4 block space-y-2">
        <span className="text-sm text-white/78">{operaCopy(locale, fields.message)}</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#f2b96d] focus:bg-white/10"
        />
      </label>

      <label className="mt-4 flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/74">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-white/20" />
        <span>{operaCopy(locale, fields.consent)}</span>
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex justify-center rounded-full bg-[#f2b96d] px-5 py-3 text-sm font-semibold text-[#0b1630] transition hover:bg-[#ffd3a2] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading"
            ? locale === "en"
              ? "Sending..."
              : "提交中..."
            : operaCopy(locale, operaContent.contact.submit)}
        </button>
        <p className="text-sm text-white/54">{operaCopy(locale, operaContent.contact.note)}</p>
      </div>

      {status === "success" ? (
        <p className="mt-4 rounded-2xl bg-[#133427] px-4 py-3 text-sm text-[#adf5c7]">
          {operaCopy(locale, operaContent.contact.success)}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-2xl bg-[#3b1d20] px-4 py-3 text-sm text-[#ffb2b8]">
          {operaCopy(locale, operaContent.contact.error)}
        </p>
      ) : null}
    </form>
  );
}
