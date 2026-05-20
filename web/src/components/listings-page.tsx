import Image from "next/image";
import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";
import type { Listing } from "@/data/listings";

type ListingsPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  labels: {
    mls: string;
    price: string;
    beds: string;
    baths: string;
    sqft: string;
    statusBadge: string;
  };
  listingCta: string;
  note: {
    headline: string;
    body: string;
  };
  finalCta: {
    headline: string;
    body: string;
    button: string;
  };
  imageAltPrefix: string;
};

type ListingsPageProps = {
  content: ListingsPageContent;
  listings: Listing[];
  locale: WhatsAppLocale;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

const numberFormatter = new Intl.NumberFormat("en-US");

export function ListingsPage({
  content,
  listings,
  locale,
}: Readonly<ListingsPageProps>) {
  return (
    <div className="pb-14 pt-12 sm:pb-24 sm:pt-20 lg:pt-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
          {content.hero.eyebrow}
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[0.96] text-primary sm:text-6xl lg:text-7xl">
          {content.hero.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/76 sm:text-xl sm:leading-9">
          {content.hero.intro}
        </p>
      </section>

      <section className="mt-14 grid gap-5 sm:mt-20 lg:grid-cols-2">
        {listings.map((listing) => (
          <article
            className="group flex min-h-full flex-col overflow-hidden border border-primary/10 bg-white shadow-[0_18px_60px_rgba(59,39,74,0.07)]"
            key={listing.id}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-accent/10">
              <Image
                alt={`${content.imageAltPrefix} ${listing.address}`}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                src={listing.image}
              />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/58">
                  {[listing.area, listing.city.split(",")[0]]
                    .filter(Boolean)
                    .join(" / ")}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-4xl">
                  {listing.address}
                </h2>
                <p className="mt-2 text-sm leading-6 text-foreground/62">
                  {listing.city}
                </p>
              </div>

              <dl className="mt-6 grid gap-3 text-sm text-foreground/68">
                <div className="flex items-center justify-between gap-4 border-t border-primary/8 pt-3">
                  <dt>{content.labels.price}</dt>
                  <dd className="font-semibold text-foreground">
                    {currencyFormatter.format(listing.priceUsd)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-primary/8 pt-3">
                  <dt>{content.labels.mls}</dt>
                  <dd className="font-semibold text-foreground">
                    {listing.mls}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 grid grid-cols-3 border-y border-primary/8 py-4 text-center text-sm">
                <div>
                  <p className="font-semibold text-foreground">{listing.beds}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-foreground/48">
                    {content.labels.beds}
                  </p>
                </div>
                <div className="border-x border-primary/8">
                  <p className="font-semibold text-foreground">
                    {listing.baths}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-foreground/48">
                    {content.labels.baths}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {numberFormatter.format(listing.sqft)}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-foreground/48">
                    {content.labels.sqft}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <span className="inline-flex border border-primary/12 px-3 py-1.5 text-xs font-semibold text-primary/70">
                  {content.labels.statusBadge}
                </span>
              </div>

              <a
                className="mt-6 inline-flex w-full items-center justify-center bg-primary px-5 py-3 text-center text-sm font-semibold leading-snug transition-colors hover:bg-primary/92"
                href={createWhatsAppUrl(locale, "listing", listing.address)}
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
                target="_blank"
              >
                {content.listingCta}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-14 border-y border-primary/10 py-8 sm:mt-20 sm:py-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.note.headline}
          </p>
          <p className="mt-4 text-base leading-8 text-foreground/70 sm:text-lg">
            {content.note.body}
          </p>
        </div>
      </section>

      <section className="mt-14 bg-primary px-5 py-10 text-white sm:mt-20 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            {content.finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {content.finalCta.body}
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center bg-white px-6 py-3.5 text-center text-sm font-semibold leading-snug text-primary transition-colors hover:bg-surface"
            href={createWhatsAppUrl(locale, "listing")}
            rel="noopener noreferrer"
            style={{ color: "#3B274A" }}
            target="_blank"
          >
            {content.finalCta.button}
          </a>
        </div>
      </section>
    </div>
  );
}
