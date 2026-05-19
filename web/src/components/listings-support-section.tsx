import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";

type ListingsSupportItem = {
  title: string;
  area: string;
  note: string;
};

type ListingsSupportSectionContent = {
  eyebrow: string;
  headline: string;
  body: string;
  items: ListingsSupportItem[];
  primaryCta: string;
  note: string;
};

type ListingsSupportSectionProps = {
  locale: WhatsAppLocale;
  content: ListingsSupportSectionContent;
};

export function ListingsSupportSection({
  locale,
  content,
}: Readonly<ListingsSupportSectionProps>) {
  return (
    <section className="mt-14 border-t border-primary/10 pt-12 sm:mt-24 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,1fr)] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            {content.headline}
          </h2>

          <p className="mt-6 text-lg leading-8 text-foreground/72">
            {content.body}
          </p>

          <a
            className="mt-8 inline-flex items-center justify-center whitespace-nowrap border border-primary bg-primary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary/92"
            href={createWhatsAppUrl(locale)}
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
            target="_blank"
          >
            {content.primaryCta}
          </a>

          <p className="mt-5 max-w-xl text-sm leading-6 text-foreground/58">
            {content.note}
          </p>
        </div>

        <div className="border-y border-primary/10">
          {content.items.slice(0, 3).map((item, index) => (
            <article
              className="grid gap-4 border-b border-primary/10 py-6 last:border-b-0 sm:grid-cols-[3rem_1fr]"
              key={`${item.title}-${item.area}`}
            >
              <p className="text-sm font-semibold text-accent">
                0{index + 1}
              </p>

              <div>
                <h3 className="text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/48">
                  {item.area}
                </p>
                <p className="mt-3 text-base leading-7 text-foreground/68">
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
