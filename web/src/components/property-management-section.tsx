import Link from "next/link";
import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";

type PropertyManagementSectionContent = {
  eyebrow: string;
  headline: string;
  body: string;
  keyPoints: string[];
  primaryCta: string;
  secondaryCta: string;
  supportNote: string;
};

type PropertyManagementSectionProps = {
  locale: WhatsAppLocale;
  content: PropertyManagementSectionContent;
};

export function PropertyManagementSection({
  locale,
  content,
}: Readonly<PropertyManagementSectionProps>) {
  return (
    <section className="mt-14 bg-primary px-6 py-11 text-[var(--white)] sm:mt-24 sm:px-8 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1fr)] lg:items-start lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.68)]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            {content.headline}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[rgba(255,255,255,0.76)]">
            {content.body}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex w-full items-center justify-center bg-white px-6 py-3.5 text-center text-sm font-semibold leading-snug transition-colors hover:bg-white/88 sm:w-auto sm:whitespace-nowrap"
              href={createWhatsAppUrl(locale, "propertyManagement")}
              rel="noopener noreferrer"
              style={{ color: "#3b274a" }}
              target="_blank"
            >
              {content.primaryCta}
            </a>

            <Link
              className="inline-flex items-center justify-center whitespace-nowrap border border-white/24 px-6 py-3.5 text-sm font-semibold text-[var(--white)] transition-colors hover:border-white/45 hover:bg-white/8"
              href={`/${locale}/property-management`}
            >
              {content.secondaryCta}
            </Link>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-[rgba(255,255,255,0.64)]">
            {content.supportNote}
          </p>
        </div>

        <div className="border-y border-white/14">
          {content.keyPoints.map((point, index) => (
            <div
              className="grid grid-cols-[2.75rem_1fr] gap-5 border-b border-white/14 py-5 last:border-b-0"
              key={point}
            >
              <p className="text-sm font-semibold text-[rgba(255,255,255,0.46)]">
                0{index + 1}
              </p>
              <p className="text-base leading-7 text-[rgba(255,255,255,0.84)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
