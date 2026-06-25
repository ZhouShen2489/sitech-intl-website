"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { siteContent, copy, copyList } from "@/content/site-content";
import type { Locale } from "@/lib/site";

type ContactFormProps = {
  locale: Locale;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm({ locale }: ContactFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const form = siteContent.contactPage.form;
  const isStaticExport = process.env.NEXT_PUBLIC_IS_STATIC_EXPORT === "true";
  const [status, setStatus] = useState<SubmitState>("idle");
  const defaultInterest =
    searchParams.get("product_interest") === "ai_expertcare"
      ? locale === "en"
        ? "AI Expert Customer Service"
        : "AI 专家客服"
      : locale === "en"
        ? "Website inquiry"
        : "网站咨询";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const productInterest = String(searchParams.get("product_interest") ?? "");
    const leadSource = String(searchParams.get("lead_source") ?? "website");
    const partnerRelated = searchParams.get("partner_related") === "true";
    const registrationRequired = searchParams.get("registration_required") === "true";

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      workEmail: String(formData.get("workEmail") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      jobTitle: String(formData.get("jobTitle") ?? ""),
      companySize: String(formData.get("companySize") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      industry: String(formData.get("industry") ?? ""),
      interestedIn: String(formData.get("interestedIn") ?? defaultInterest),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
      locale,
      source: leadSource || "website",
      pageUrl:
        typeof window !== "undefined"
          ? new URL(pathname, window.location.origin).toString()
          : "",
      product_interest: productInterest,
      lead_source: leadSource,
      partner_related: partnerRelated,
      registration_required: registrationRequired,
    };

    if (isStaticExport) {
      const subject =
        locale === "en"
          ? `Website inquiry from ${payload.fullName || payload.workEmail || "visitor"}`
          : `网站咨询：${payload.fullName || payload.workEmail || "访客"}`;
      const body = [
        `Name: ${payload.fullName}`,
        `Work Email: ${payload.workEmail}`,
        `Company: ${payload.companyName}`,
        `Job Title: ${payload.jobTitle}`,
        `Company Size: ${payload.companySize}`,
        `Phone: ${payload.phone}`,
        `Industry: ${payload.industry}`,
        `Interested In: ${payload.interestedIn}`,
        `Product Interest: ${payload.product_interest || "-"}`,
        `Lead Source: ${payload.lead_source || "-"}`,
        `Partner Related: ${payload.partner_related ? "true" : "false"}`,
        `Registration Required: ${payload.registration_required ? "true" : "false"}`,
        "",
        "Message:",
        payload.message,
        "",
        `Locale: ${payload.locale}`,
        `Page URL: ${payload.pageUrl}`,
      ].join("\n");

      window.location.href = `mailto:${siteContent.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
      router.push(`/${locale}/thank-you`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card lg:p-8">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="interestedIn" value={defaultInterest} />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">{copy(locale, form.fullName)}</span>
          <input
            name="fullName"
            required
            className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">{copy(locale, form.workEmail)}</span>
          <input
            type="email"
            name="workEmail"
            required
            className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">{copy(locale, form.companyName)}</span>
          <input
            name="companyName"
            className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">{copy(locale, form.jobTitle)}</span>
          <select
            name="jobTitle"
            defaultValue=""
            className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
          >
            <option value="" disabled>
              {copy(locale, form.jobTitle)}
            </option>
            {copyList(locale, form.roleOptions).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">{copy(locale, form.companySize)}</span>
          <select
            name="companySize"
            defaultValue=""
            className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
          >
            <option value="" disabled>
              {copy(locale, form.companySize)}
            </option>
            {copyList(locale, form.companySizeOptions).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">{copy(locale, form.phone)}</span>
          <input
            name="phone"
            className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-ink">{copy(locale, form.industry)}</span>
          <input
            name="industry"
            className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-ink">{copy(locale, form.message)}</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-[1.5rem] border border-slate-200 bg-mist px-4 py-3 text-sm text-ink outline-none transition focus:border-tide focus:bg-white"
        />
      </label>

      <label className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200 bg-[#f7f9fb] px-4 py-4 text-sm leading-6 text-slate-700">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-slate-300" />
        <span>{copy(locale, form.consent)}</span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? copy(locale, form.loading) : copy(locale, form.submit)}
        </button>
        <p className="text-sm leading-7 text-slate-600">
          {copy(
            locale,
            isStaticExport ? siteContent.contactPage.pagesNote : siteContent.contactPage.note,
          )}
        </p>
      </div>

      {status === "success" ? (
        <p className="rounded-2xl bg-[#eef8f2] px-4 py-3 text-sm text-[#1e6a3d]">
          {copy(locale, isStaticExport ? siteContent.contactPage.pagesNote : form.success)}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-2xl bg-[#fff1f0] px-4 py-3 text-sm text-[#a93f3a]">
          {copy(locale, form.error)}
        </p>
      ) : null}
    </form>
  );
}
