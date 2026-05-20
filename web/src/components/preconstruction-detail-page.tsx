import Link from "next/link";
import { ListingGallery } from "@/components/listing-gallery";
import type {
  LocalizedPreconstructionList,
  PreconstructionProject,
} from "@/data/preconstruction-projects";
import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";

type PreconstructionDetailContent = {
  backToPreconstruction: string;
  labels: {
    address: string;
    area: string;
    buildingType: string;
    city: string;
    delivery: string;
    designTeam: string;
    priceFrom: string;
    status: string;
  };
  statusBadge: string;
  priceQualifier: string;
  deliveryQualifier: string;
  summary: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  summaries: Record<string, string>;
  details: {
    eyebrow: string;
    headline: string;
  };
  sections: {
    amenities: string;
    highlights: string;
    location: string;
    paymentPlan: string;
    residences: string;
    unitMix: string;
  };
  paymentPlanNote: string;
  locationBody: string;
  mapTitle: string;
  review: {
    eyebrow: string;
    headline: string;
    items: string[];
  };
  verification: {
    headline: string;
    body: string;
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

type PreconstructionDetailPageProps = {
  content: PreconstructionDetailContent;
  locale: WhatsAppLocale;
  project: PreconstructionProject;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

function getProjectImages(project: PreconstructionProject): string[] {
  return [project.heroImage, ...(project.galleryImages ?? [])];
}

function getLocalizedList(
  list: LocalizedPreconstructionList | undefined,
  locale: WhatsAppLocale,
): string[] {
  return list?.[locale] ?? [];
}

function getDetailRows(
  content: PreconstructionDetailContent,
  project: PreconstructionProject,
  locale: WhatsAppLocale,
) {
  const rows = [
    [content.labels.area, project.area],
    [content.labels.city, project.city],
    [content.labels.address, project.address],
    [content.labels.buildingType, project.buildingType?.[locale]],
    [content.labels.designTeam, project.designTeam],
    [
      content.labels.priceFrom,
      project.priceFromUsd
        ? `${currencyFormatter.format(project.priceFromUsd)} · ${
            content.priceQualifier
          }`
        : undefined,
    ],
    [
      content.labels.delivery,
      project.delivery
        ? `${project.delivery} · ${content.deliveryQualifier}`
        : undefined,
    ],
    [content.labels.status, content.statusBadge],
  ];

  return rows.filter((row): row is [string, string] => Boolean(row[1]));
}

function ProjectBulletSection({
  items,
  title,
}: Readonly<{
  items: string[];
  title: string;
}>) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className="font-display text-3xl leading-tight text-primary">
        {title}
      </h3>
      <ul className="mt-6 grid gap-3 text-base leading-7 text-foreground/72">
        {items.map((item) => (
          <li className="border-t border-primary/10 pt-3" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PreconstructionDetailPage({
  content,
  locale,
  project,
}: Readonly<PreconstructionDetailPageProps>) {
  const projectImages = getProjectImages(project);
  const whatsAppUrl = createWhatsAppUrl(
    locale,
    "preConstruction",
    project.name,
  );
  const detailRows = getDetailRows(content, project, locale);
  const overview =
    project.description?.[locale] ??
    content.summaries[project.id] ??
    content.summary.body;
  const highlights = getLocalizedList(project.highlights, locale);
  const amenities = getLocalizedList(project.amenities, locale);
  const residenceFeatures = getLocalizedList(
    project.residenceFeatures,
    locale,
  );
  const unitMix = getLocalizedList(project.unitMix, locale);
  const paymentPlan = getLocalizedList(project.paymentPlan, locale);
  const locationQuery = project.mapQuery ?? project.address ?? project.area;
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    locationQuery,
  )}&output=embed`;

  return (
    <article className="pb-14 pt-10 sm:pb-24 sm:pt-16 lg:pt-20">
      <Link
        className="text-sm font-semibold text-primary/68 underline decoration-primary/20 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/50"
        href={`/${locale}/pre-construction`}
      >
        {content.backToPreconstruction}
      </Link>

      <section className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase leading-6 tracking-[0.14em] text-primary/62">
            {[project.area, project.city].filter(Boolean).join(" / ")}
          </p>
          <h1 className="mt-5 break-words font-display text-4xl leading-[0.98] text-primary sm:text-5xl lg:text-5xl">
            {project.name}
          </h1>

          <div className="mt-7 inline-flex border border-primary/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary/66">
            {content.statusBadge}
          </div>

          <div className="mt-8 border-y border-primary/10 py-6">
            {project.priceFromUsd ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/45">
                  {content.labels.priceFrom}
                </p>
                <p className="mt-2 font-display text-4xl leading-none text-primary sm:text-5xl">
                  {currencyFormatter.format(project.priceFromUsd)}
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/58">
                  {content.priceQualifier}
                </p>
              </div>
            ) : null}

            {project.delivery ? (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/45">
                  {content.labels.delivery}
                </p>
                <p className="mt-2 text-lg leading-7 text-foreground/72">
                  {project.delivery} · {content.deliveryQualifier}
                </p>
              </div>
            ) : null}
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
          address={project.name}
          imageAltPrefix={content.imageAltPrefix}
          images={projectImages}
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
        <p className="text-lg leading-9 text-foreground/72">{overview}</p>
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

      <section className="mt-14 border-t border-primary/10 pt-12 sm:mt-20 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <ProjectBulletSection
            items={highlights}
            title={content.sections.highlights}
          />
          <ProjectBulletSection
            items={residenceFeatures}
            title={content.sections.residences}
          />
        </div>
      </section>

      {unitMix.length > 0 || amenities.length > 0 ? (
        <section className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <ProjectBulletSection
            items={unitMix}
            title={content.sections.unitMix}
          />
          <ProjectBulletSection
            items={amenities}
            title={content.sections.amenities}
          />
        </section>
      ) : null}

      {paymentPlan.length > 0 ? (
        <section className="mt-14 grid gap-8 bg-white/62 px-5 py-9 sm:mt-20 sm:px-8 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
              {content.sections.paymentPlan}
            </p>
            <h2 className="mt-4 break-words font-display text-3xl leading-tight text-primary sm:text-5xl">
              {content.sections.paymentPlan}
            </h2>
          </div>

          <div>
            <ol className="grid gap-3 text-base leading-7 text-foreground/72">
              {paymentPlan.map((item, index) => (
                <li className="grid grid-cols-[2.5rem_1fr] gap-3" key={item}>
                  <span className="text-sm font-semibold text-primary/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-primary/10 pt-5 text-sm leading-7 text-foreground/58">
              {content.paymentPlanNote}
            </p>
          </div>
        </section>
      ) : null}

      <section className="mt-14 grid gap-8 sm:mt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.sections.location}
          </p>
          <h2 className="mt-4 break-words font-display text-3xl leading-tight text-primary sm:text-5xl">
            {content.sections.location}
          </h2>
          <p className="mt-5 text-base leading-8 text-foreground/70">
            {content.locationBody}
          </p>
        </div>

        <div className="overflow-hidden rounded-[8px] border border-primary/10 bg-white/70 shadow-[0_18px_48px_rgba(59,39,74,0.06)]">
          <iframe
            className="block aspect-[4/3] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
            title={`${content.mapTitle} ${project.name}`}
          />
        </div>
      </section>

      <section className="mt-14 grid gap-8 bg-white/62 px-5 py-9 sm:mt-20 sm:px-8 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.review.eyebrow}
          </p>
          <h2 className="mt-4 break-words font-display text-3xl leading-tight text-primary sm:text-5xl">
            {content.review.headline}
          </h2>
        </div>

        <ul className="grid gap-4 text-base leading-7 text-foreground/72 sm:text-lg">
          {content.review.items.map((item) => (
            <li className="border-t border-primary/10 pt-4" key={item}>
              {item}
            </li>
          ))}
        </ul>
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
