import Link from "next/link";
import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";

type AboutPageContent = {
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  accompany: {
    eyebrow: string;
    headline: string;
    body: string;
    points: string[];
  };
  audience: {
    eyebrow: string;
    headline: string;
    body: string;
    items: string[];
  };
  trust: {
    eyebrow: string;
    headline: string;
    points: string[];
  };
  approach: {
    eyebrow: string;
    headline: string;
    body: string;
    note: string;
  };
  finalCta: {
    headline: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

type AboutPageProps = {
  locale: WhatsAppLocale;
  content: AboutPageContent;
};

function SectionEyebrow({ children }: Readonly<{ children: string }>) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
      {children}
    </p>
  );
}

function PrimaryAction({
  children,
  locale,
}: Readonly<{
  children: string;
  locale: WhatsAppLocale;
}>) {
  return (
    <a
      className="inline-flex items-center justify-center whitespace-nowrap border border-primary bg-primary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary/92"
      href={createWhatsAppUrl(locale)}
      rel="noopener noreferrer"
      style={{ color: "#ffffff" }}
      target="_blank"
    >
      {children}
    </a>
  );
}

function SecondaryAction({
  children,
  href,
}: Readonly<{
  children: string;
  href: string;
}>) {
  return (
    <Link
      className="inline-flex items-center justify-center whitespace-nowrap border border-primary/14 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/35 hover:bg-primary/5"
      href={href}
    >
      {children}
    </Link>
  );
}

export function AboutPage({ locale, content }: Readonly<AboutPageProps>) {
  return (
    <div className="pb-14 sm:pb-24">
      <section className="pt-12 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.65fr)] lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow>{content.hero.eyebrow}</SectionEyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] text-primary sm:text-6xl lg:text-7xl">
              {content.hero.headline}
            </h1>
          </div>

          <div className="border-l border-primary/12 pl-4 lg:pl-8">
            <p className="max-w-xl text-lg leading-8 text-foreground/72">
              {content.hero.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <PrimaryAction locale={locale}>{content.hero.primaryCta}</PrimaryAction>
              <SecondaryAction href={`/${locale}/property-management`}>
                {content.hero.secondaryCta}
              </SecondaryAction>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 border-y border-primary/10 py-12 sm:mt-24 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)] lg:gap-16">
          <div>
            <SectionEyebrow>{content.accompany.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl">
              {content.accompany.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72">
              {content.accompany.body}
            </p>
          </div>

          <div className="border-t border-primary/12">
            {content.accompany.points.map((point) => (
              <p
                className="border-b border-primary/12 py-5 text-base leading-7 text-foreground/76"
                key={point}
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 sm:mt-24">
        <div className="max-w-3xl">
          <SectionEyebrow>{content.audience.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            {content.audience.headline}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/72">
            {content.audience.body}
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {content.audience.items.map((item) => (
            <div
              className="border border-primary/10 bg-white px-5 py-5 text-base leading-7 text-foreground/72"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 bg-primary px-6 py-12 text-white sm:mt-24 sm:px-8 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/62">
              {content.trust.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              {content.trust.headline}
            </h2>
          </div>

          <div className="border-y border-white/14">
            {content.trust.points.map((point) => (
              <p
                className="border-b border-white/14 py-4 text-base leading-7 text-white/82 last:border-b-0"
                key={point}
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 sm:mt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(320px,0.8fr)] lg:gap-16">
          <div>
            <SectionEyebrow>{content.approach.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl">
              {content.approach.headline}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-foreground/72">
              {content.approach.body}
            </p>
            <p className="mt-6 border-l border-primary/18 pl-5 text-base leading-7 text-foreground/68">
              {content.approach.note}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(59,39,74,0.08)] ring-1 ring-primary/10 sm:mt-24 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">
            {content.finalCta.headline}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/72">
            {content.finalCta.body}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryAction locale={locale}>
              {content.finalCta.primaryCta}
            </PrimaryAction>
            <SecondaryAction href={`/${locale}/contact`}>
              {content.finalCta.secondaryCta}
            </SecondaryAction>
          </div>
        </div>
      </section>
    </div>
  );
}
