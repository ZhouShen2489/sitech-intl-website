"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

import type { Locale } from "@/lib/site";

type SubmitState = "idle" | "loading" | "success" | "error";

export function BookingForm({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const details = String(formData.get("message") ?? "").trim();
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      workEmail: String(formData.get("workEmail") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      jobTitle: "Demo booking",
      companySize: "",
      phone: String(formData.get("phone") ?? ""),
      industry: "AI customer service",
      interestedIn: "AI Expert Customer Service Demo Booking",
      message: details || "-",
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
      locale,
      source: "sitech_website",
      pageUrl:
        typeof window !== "undefined"
          ? new URL(pathname, window.location.origin).toString()
          : "",
      product_interest: searchParams.get("product_interest") || "ai_expertcare",
      lead_source: searchParams.get("lead_source") || "sitech_website",
      partner_related: (searchParams.get("partner_related") || "true") === "true",
      registration_required: (searchParams.get("registration_required") || "true") === "true",
    };

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
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-card lg:p-8">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-ink">{locale === "en" ? "Full name" : "姓名"}</span>
          <input name="fullName" required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-tide" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-ink">{locale === "en" ? "Work email" : "工作邮箱"}</span>
          <input type="email" name="workEmail" required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-tide" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-ink">{locale === "en" ? "Company" : "公司"}</span>
          <input name="companyName" required className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-tide" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-ink">{locale === "en" ? "Phone optional" : "电话（选填）"}</span>
          <input name="phone" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-tide" />
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-semibold text-ink">
          {locale === "en" ? "Anything we should know before the meeting?" : "会前是否有需要我们提前了解的内容？"}
        </span>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-tide"
          placeholder={
            locale === "en"
              ? "Phone AI, text support, outbound sales, AI+BPO, or the workflow you want to discuss..."
              : "电话 AI、文本客服、销售外呼、AI+BPO，或你希望讨论的具体流程……"
          }
        />
      </label>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f7fbff] p-4 text-sm leading-6 text-slate-700">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-slate-300" />
        <span>{locale === "en" ? "I agree to be contacted by Si-Tech Intl regarding this demo request." : "我同意 Si-Tech Intl 就本次演示请求与我联系。"}</span>
      </label>

      {error ? <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-800">{error}</p> : null}
      {status === "error" ? (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {locale === "en" ? "Unable to submit right now. Please email info@sitech-intl.com." : "暂时无法提交，请发送邮件到 info@sitech-intl.com。"}
        </p>
      ) : null}
      {status === "success" ? (
        <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {locale === "en" ? "Received. We will confirm the demo time by email." : "已收到。我们会通过邮件确认演示时间。"}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 rounded-full bg-signal px-7 py-3 text-sm font-bold text-ink transition hover:bg-[#ffd59f] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (locale === "en" ? "Submitting..." : "提交中…") : locale === "en" ? "Book a Free Demo" : "预约免费演示"}
      </button>
    </form>
  );
}
