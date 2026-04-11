import { notFound } from "next/navigation";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-sections";
import { siteContent, copy } from "@/content/siteContent";
import { isLocale } from "@/lib/site";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <PageHero
        locale={locale}
        badge={copy(locale, siteContent.brand.eyebrow)}
        title={copy(locale, siteContent.contactPage.hero.title)}
        subtitle={copy(locale, siteContent.contactPage.hero.subtitle)}
        image={siteContent.contactPage.hero.image}
      />

      <section className="bg-[#f6f9fc] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="rounded-[2rem] bg-ink p-8 text-white shadow-card">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">
              {copy(locale, siteContent.contactPage.panelTitle)}
            </p>
            <div className="mt-8 space-y-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-accent">Email</p>
                <p className="mt-3 text-base text-white/85">{siteContent.contact.email}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-accent">Phone</p>
                <p className="mt-3 text-base text-white/85">{siteContent.contact.phone}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-accent">Location</p>
                <p className="mt-3 text-base text-white/85">{siteContent.contact.address}</p>
              </div>
            </div>
          </div>

          <ContactForm locale={locale} />
        </div>
      </section>
    </>
  );
}
