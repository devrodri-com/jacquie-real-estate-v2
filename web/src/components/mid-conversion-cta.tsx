import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";

type MidConversionCtaContent = {
  headline: string;
  body: string;
  primaryCta: string;
  note: string;
};

type MidConversionCtaProps = {
  locale: WhatsAppLocale;
  content: MidConversionCtaContent;
};

export function MidConversionCta({
  locale,
  content,
}: Readonly<MidConversionCtaProps>) {
  return (
    <section className="mt-14 border-y border-primary/10 py-8 sm:mt-24 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight text-primary sm:text-4xl">
            {content.headline}
          </h2>

          <p className="mt-4 text-base leading-7 text-foreground/72 sm:text-lg sm:leading-8">
            {content.body}
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-end">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap border border-primary bg-primary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary/92"
            href={createWhatsAppUrl(locale, "midConversion")}
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
            target="_blank"
          >
            {content.primaryCta}
          </a>

          <p className="mt-4 max-w-xs text-sm leading-6 text-foreground/58 lg:text-right">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}
