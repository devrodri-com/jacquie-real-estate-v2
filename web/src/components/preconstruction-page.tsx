import Image from "next/image";
import {
  createWhatsAppUrl,
  type WhatsAppLocale,
} from "@/lib/whatsapp";
import type { PreconstructionProject } from "@/data/preconstruction-projects";

type PreconstructionPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  labels: {
    priceFrom: string;
    delivery: string;
    statusBadge: string;
  };
  projectCta: string;
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

type PreconstructionPageProps = {
  content: PreconstructionPageContent;
  locale: WhatsAppLocale;
  projects: PreconstructionProject[];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

const visiblePreconstructionProjectIds = new Set([
  "2200-brickell",
  "elle-residences",
  "midtown-park",
]);

export function PreconstructionPage({
  content,
  locale,
  projects,
}: Readonly<PreconstructionPageProps>) {
  const visibleProjects = projects.filter((project) =>
    visiblePreconstructionProjectIds.has(project.id),
  );

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

      <section className="mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            className="group flex min-h-full flex-col overflow-hidden border border-primary/8 bg-white/62"
            key={project.id}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-accent/10">
              <Image
                alt={`${content.imageAltPrefix} ${project.name}`}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                src={project.heroImage}
              />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/58">
                  {[project.area, project.city].filter(Boolean).join(" / ")}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-primary">
                  {project.name}
                </h2>
              </div>

              <div className="mt-5">
                <span className="inline-flex border border-primary/12 px-3 py-1.5 text-xs font-semibold text-primary/70">
                  {content.labels.statusBadge}
                </span>
              </div>

              <dl className="mt-5 grid gap-2.5 text-sm text-foreground/58">
                {project.priceFromUsd ? (
                  <div className="flex items-center gap-2">
                    <dt>{content.labels.priceFrom}</dt>
                    <dd className="font-medium text-foreground/78">
                      {currencyFormatter.format(project.priceFromUsd)}
                    </dd>
                  </div>
                ) : null}
                {project.delivery ? (
                  <div className="flex items-center gap-2">
                    <dt>{content.labels.delivery}</dt>
                    <dd className="font-medium text-foreground/78">
                      {project.delivery}
                    </dd>
                  </div>
                ) : null}
              </dl>

              <a
                className="mt-6 inline-flex max-w-full text-left text-sm font-semibold leading-snug text-primary underline decoration-primary/24 underline-offset-4 transition-colors hover:text-primary/76 hover:decoration-primary/55"
                href={createWhatsAppUrl(locale, "preConstruction", project.name)}
                rel="noopener noreferrer"
                target="_blank"
              >
                {content.projectCta}
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
            href={createWhatsAppUrl(locale, "preConstruction")}
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
