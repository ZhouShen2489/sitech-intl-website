import { notFound } from "next/navigation";

import { isLocale } from "@/lib/site";

const googleCalendarBookingEmbed =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1jQPbq8JbfB51e7WVmTi5idboKtdzHqAoDRaRLM2URIHlx8_ECda5IvmqR9SS6bKq-og8waAuy?gv=true";

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main className="bg-[#edf4f0]">
      <section className="relative isolate overflow-hidden bg-[#06271d] py-20 text-white lg:py-24">
        <div className="customer-hero-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-24 top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#5ff0af]/14 blur-[110px]" />
        <div className="relative mx-auto max-w-[88rem] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#78f1bb]">
              {locale === "en" ? "AI Expert Customer Service" : "AI 专家客服"}
            </p>
            <h1 className="mt-5 text-[clamp(3.4rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              {locale === "en" ? "Choose a time. See a real workflow." : "选择一个时间，查看真实工作流。"}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b8d2c6]">
              {locale === "en"
                ? "Choose a 30-minute slot in Google Calendar. We will tailor the demo around one of your real customer-service or sales scenarios."
                : "直接在 Google Calendar 选择 30 分钟时间。我们会围绕您的真实客服或销售场景安排演示。"}
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-10 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[76rem] px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-[#0d513a]/12 bg-white p-3 shadow-[0_28px_90px_rgba(11,65,46,0.16)] lg:p-5">
            <iframe
              src={googleCalendarBookingEmbed}
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title={locale === "en" ? "AI Expert Customer Service booking" : "AI 专家客服预约"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
