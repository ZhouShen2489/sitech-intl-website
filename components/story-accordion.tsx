"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { siteContent, copy, copyList, visibleItems } from "@/content/siteContent";
import type { Locale } from "@/lib/site";
import { withBasePath, withLocale } from "@/lib/site";

export function StoryAccordion({ locale }: { locale: Locale }) {
  const stories = visibleItems(siteContent.storiesPage.items);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {stories.map((story, index) => {
        const isActive = index === activeIndex;

        return (
          <article
            key={story.title.en}
            className={`overflow-hidden rounded-[2rem] border transition ${
              isActive
                ? "border-ink bg-white shadow-card"
                : "border-slate-200 bg-white/70"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="flex w-full flex-col gap-5 p-6 text-left lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="max-w-3xl">
                <div className="flex flex-wrap gap-2">
                  {copyList(locale, story.labels).map((label) => (
                    <span
                      key={label}
                      className="rounded-full bg-mist px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-tide"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-tide">{copy(locale, story.solution)}</p>
                <h3 className="mt-4 font-serif text-2xl text-ink lg:text-3xl">{copy(locale, story.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, story.summary)}</p>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl text-ink">
                {isActive ? "−" : "+"}
              </div>
            </button>

            {isActive ? (
              <div className="grid gap-8 border-t border-slate-200 p-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] bg-ink">
                  <Image
                    src={withBasePath(story.image)}
                    alt={copy(locale, story.title)}
                    fill
                    quality={74}
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-4">
                  {story.sections.map((section) => (
                    <div key={section.label.en} className="rounded-[1.5rem] bg-[#f7f9fb] p-5">
                      <p className="text-sm uppercase tracking-[0.2em] text-tide">{copy(locale, section.label)}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{copy(locale, section.text)}</p>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link
                      href={withLocale(locale, "/solutions")}
                      className="inline-flex rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                    >
                      {locale === "en" ? "Open Related Solutions" : "查看相关解决方案"}
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
