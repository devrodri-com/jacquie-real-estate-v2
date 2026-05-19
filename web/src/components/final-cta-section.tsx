import Link from "next/link";
import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";

type FinalCtaSectionContent = {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  note: string;
};

type FinalCtaSectionProps = {
  locale: WhatsAppLocale;
  content: FinalCtaSectionContent;
};

export function FinalCtaSection({
  locale,
  content,
}: Readonly<FinalCtaSectionProps>) {
  return (
    <section className="mt-14 bg-white px-6 py-10 shadow-[0_20px_60px_rgba(59,39,74,0.08)] ring-1 ring-primary/10 sm:mt-24 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
          {content.eyebrow}
        </p>

        <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
          {content.headline}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/72">
          {content.body}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap border border-primary bg-primary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary/92"
            href={createWhatsAppUrl(locale, "final")}
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
            target="_blank"
          >
            {content.primaryCta}
          </a>

          <Link
            className="inline-flex items-center justify-center whitespace-nowrap border border-primary/14 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/35 hover:bg-primary/5"
            href={`/${locale}/contact`}
          >
            {content.secondaryCta}
          </Link>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-foreground/58">
          {content.note}
        </p>
      </div>
    </section>
  );
}
