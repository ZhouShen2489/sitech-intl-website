import { notFound } from "next/navigation";

import { BookingForm } from "@/components/booking-form";
import { isLocale } from "@/lib/site";

const googleCalendarBookingEmbed =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1jQPbq8JbfB51e7WVmTi5idboKtdzHqAoDRaRLM2URIHlx8_ECda5IvmqR9SS6bKq-og8waAuy?gv=true";

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main className="bg-[#f6f9fc]">
      <section className="brand-orbit py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
              {locale === "en" ? "AI Expert Customer Service" : "AI 专家客服"}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              {locale === "en" ? "Choose a time for a free demo" : "选择一个免费演示时间"}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
              {locale === "en"
                ? "Book a 30-minute AI Expert Customer Service demo directly in Google Calendar. If you need a larger rollout discussion, leave your details in the form below."
                : "直接通过 Google Calendar 预约 30 分钟 AI 专家客服演示。如果你想先沟通更大的项目范围，也可以在下方表单里留下信息。"}
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-12 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-card lg:p-4">
            <iframe
              src={googleCalendarBookingEmbed}
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title={locale === "en" ? "AI Expert Customer Service booking" : "AI 专家客服预约"}
            />
          </div>

          <div className="mt-8">
            <BookingForm locale={locale} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-blue-100 bg-[#f7fbff] p-6 text-sm leading-7 text-slate-600 shadow-card">
            {locale === "en"
              ? "The booking iframe is for 30-minute AI Expert Customer Service demos. The form below is still useful for broader inquiries, custom workflows, or enterprise rollout coordination."
              : "上方预约组件适合 30 分钟 AI 专家客服演示；下方表单仍适合更大的咨询、定制流程讨论或企业级落地沟通。"}
          </div>
        </div>
      </section>
    </main>
  );
}
