import Link from "next/link";
import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";
import type { Listing } from "@/data/listings";
import { ListingGallery } from "@/components/listing-gallery";

type ListingDetailContent = {
  backToListings: string;
  labels: {
    price: string;
    beds: string;
    baths: string;
    sqft: string;
    type: string;
    yearBuilt: string;
    hoa: string;
    parking: string;
    pets: string;
    furnished: string;
    view: string;
    mls: string;
    perMonth: string;
    yes: string;
    no: string;
  };
  summary: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  details: {
    eyebrow: string;
    headline: string;
  };
  values: Record<
    string,
    {
      furnished?: string;
      parking?: string;
      pets?: string;
      type: string;
      view?: string;
    }
  >;
  verification: {
    headline: string;
    body: string;
  };
  location: {
    headline: string;
    body: string;
    mapTitle: string;
  };
  gallery: {
    close: string;
    next: string;
    open: string;
    photos: string;
    previous: string;
  };
  cta: {
    headline: string;
    body: string;
    button: string;
  };
  imageAltPrefix: string;
};

type ListingDetailPageProps = {
  content: ListingDetailContent;
  listing: Listing;
  locale: WhatsAppLocale;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

const numberFormatter = new Intl.NumberFormat("en-US");

function getListingEyebrow(listing: Listing) {
  return [listing.buildingName, listing.area].filter(Boolean).join(" · ");
}

function getSpecs(content: ListingDetailContent, listing: Listing) {
  return `${listing.beds} ${content.labels.beds} · ${listing.baths} ${
    content.labels.baths
  } · ${numberFormatter.format(listing.sqft)} ${content.labels.sqft}`;
}

function getDetailRows(content: ListingDetailContent, listing: Listing) {
  const localizedValues = content.values[listing.id];
  const rows = [
    [content.labels.type, localizedValues?.type ?? listing.type],
    [content.labels.yearBuilt, listing.yearBuilt?.toString()],
    [
      content.labels.hoa,
      listing.hoaMonthlyUsd
        ? `${currencyFormatter.format(listing.hoaMonthlyUsd)} ${
            content.labels.perMonth
          }`
        : undefined,
    ],
    [content.labels.parking, localizedValues?.parking ?? listing.parking],
    [content.labels.pets, localizedValues?.pets ?? listing.pets],
    [
      content.labels.furnished,
      listing.furnished === undefined
        ? undefined
        : (localizedValues?.furnished ??
          (listing.furnished ? content.labels.yes : content.labels.no)),
    ],
    [content.labels.view, localizedValues?.view ?? listing.view],
    [content.labels.mls, listing.mls],
  ];

  return rows.filter((row): row is [string, string] => Boolean(row[1]));
}

export function ListingDetailPage({
  content,
  listing,
  locale,
}: Readonly<ListingDetailPageProps>) {
  const detailRows = getDetailRows(content, listing);
  const whatsAppUrl = createWhatsAppUrl(locale, "listing", listing.address);
  const listingImages = listing.images?.length ? listing.images : [listing.image];
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${listing.address}, ${listing.city}`,
  )}&output=embed`;

  return (
    <article className="pb-14 pt-10 sm:pb-24 sm:pt-16 lg:pt-20">
      <Link
        className="inline-flex items-center justify-center border border-primary/12 bg-white/55 px-4 py-2.5 text-sm font-semibold text-primary shadow-[0_10px_28px_rgba(59,39,74,0.04)] transition-colors hover:border-primary/35 hover:bg-white"
        href={`/${locale}/listings`}
      >
        {content.backToListings}
      </Link>

      <section className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <div>
          <p className="break-words text-sm font-semibold uppercase leading-6 tracking-[0.12em] text-primary/62 sm:tracking-[0.16em]">
            {getListingEyebrow(listing)}
          </p>
          <h1 className="mt-5 break-words font-display text-4xl leading-[0.98] text-primary sm:text-5xl lg:text-5xl">
            {listing.address}
          </h1>
          <p className="mt-5 text-lg leading-8 text-foreground/68">
            {listing.city}
          </p>

          <div className="mt-8 border-y border-primary/10 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/45">
              {content.labels.price}
            </p>
            <p className="mt-2 font-display text-4xl leading-none text-primary sm:text-5xl">
              {currencyFormatter.format(listing.priceUsd)}
            </p>
            <p className="mt-5 text-base leading-7 text-foreground/68">
              {getSpecs(content, listing)}
            </p>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-foreground/42">
              {content.labels.mls} {listing.mls}
            </p>
          </div>

          <a
            className="mt-7 inline-flex min-w-0 w-full max-w-full items-center justify-center bg-primary px-6 py-3.5 text-center text-sm font-semibold leading-snug whitespace-normal transition-colors hover:bg-primary/92 sm:w-auto"
            href={whatsAppUrl}
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
            target="_blank"
          >
            <span className="block min-w-0 max-w-full whitespace-normal">
              {content.cta.button}
            </span>
          </a>
        </div>

        <ListingGallery
          address={listing.address}
          imageAltPrefix={content.imageAltPrefix}
          images={listingImages}
          labels={content.gallery}
        />
      </section>

      <section className="mt-14 grid gap-8 border-t border-primary/10 pt-12 sm:mt-20 sm:pt-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.summary.eyebrow}
          </p>
          <h2 className="mt-4 break-words font-display text-3xl leading-tight text-primary sm:text-5xl">
            {content.summary.headline}
          </h2>
        </div>
        <p className="text-lg leading-9 text-foreground/72">
          {content.summary.body}
        </p>
      </section>

      <section className="mt-14 grid gap-8 sm:mt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.details.eyebrow}
          </p>
          <h2 className="mt-4 break-words font-display text-3xl leading-tight text-primary sm:text-5xl">
            {content.details.headline}
          </h2>
        </div>

        <dl className="grid gap-x-8 gap-y-5 border-y border-primary/10 py-7 sm:grid-cols-2">
          {detailRows.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/44">
                {label}
              </dt>
              <dd className="mt-2 text-base leading-7 text-foreground/76">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14 border-y border-primary/10 py-8 sm:mt-20 sm:py-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.verification.headline}
          </p>
          <p className="mt-4 text-base leading-8 text-foreground/70 sm:text-lg">
            {content.verification.body}
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-8 sm:mt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.location.headline}
          </p>
          <p className="mt-4 text-base leading-8 text-foreground/70 sm:text-lg">
            {content.location.body}
          </p>
        </div>

        <div className="overflow-hidden border border-primary/10 bg-white shadow-[0_18px_60px_rgba(59,39,74,0.07)]">
          <iframe
            className="block aspect-[4/3] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
            title={`${content.location.mapTitle} ${listing.address}`}
          />
        </div>
      </section>

      <section className="mt-14 bg-primary px-5 py-10 text-white sm:mt-20 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            {content.cta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {content.cta.body}
          </p>
          <a
            className="mt-8 inline-flex min-w-0 max-w-full items-center justify-center bg-white px-6 py-3.5 text-center text-sm font-semibold leading-snug text-primary whitespace-normal transition-colors hover:bg-surface"
            href={whatsAppUrl}
            rel="noopener noreferrer"
            style={{ color: "#3B274A" }}
            target="_blank"
          >
            <span className="block min-w-0 max-w-full whitespace-normal">
              {content.cta.button}
            </span>
          </a>
        </div>
      </section>
    </article>
  );
}
