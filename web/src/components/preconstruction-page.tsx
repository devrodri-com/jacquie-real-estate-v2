"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  createWhatsAppUrl,
  type WhatsAppLocale,
} from "@/lib/whatsapp";
import type {
  PublicPreconstructionProject,
  RentalPolicyCategory,
} from "@/data/preconstruction-projects";

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
  filters: {
    allAreas: string;
    noResults: string;
    rentalPolicy: string;
    rentalPolicyNote: string;
    reset: string;
    search: string;
    searchPlaceholder: string;
    sort: string;
    sortOptions: {
      az: string;
      priceAsc: string;
      priceDesc: string;
      za: string;
    };
    zone: string;
    rentalPolicyOptions: Record<RentalPolicyCategory, string>;
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
  projects: PublicPreconstructionProject[];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

type SortOption = "az" | "za" | "priceAsc" | "priceDesc";

const filterLabelClassName =
  "grid gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/62";

const filterControlClassName =
  "h-12 w-full rounded-[6px] border border-primary/12 bg-surface/75 px-3 text-sm font-semibold text-foreground/78 shadow-[0_10px_28px_rgba(59,39,74,0.04)] outline-none transition-colors placeholder:text-foreground/36 focus:border-primary/45 focus:bg-white focus:ring-2 focus:ring-accent/22";

const dropdownButtonClassName =
  "flex h-12 w-full items-center justify-between gap-3 rounded-[6px] border border-primary/12 bg-surface/75 px-3 text-left text-sm font-semibold text-foreground/78 shadow-[0_10px_28px_rgba(59,39,74,0.04)] outline-none transition-colors focus:border-primary/45 focus:bg-white focus:ring-2 focus:ring-accent/22";

type SelectOption<TValue extends string> = {
  label: string;
  value: TValue;
};

type FilterSelectProps<TValue extends string> = {
  id: string;
  label: string;
  onChange: (value: TValue) => void;
  options: SelectOption<TValue>[];
  value: TValue;
};

function getProjectHref(
  locale: WhatsAppLocale,
  project: PublicPreconstructionProject,
) {
  return `/${locale}/pre-construction/${project.detailSlug}`;
}

function getCardSummary(
  locale: WhatsAppLocale,
  project: PublicPreconstructionProject,
) {
  const localizedLocale = locale === "fr-ca" ? "fr-ca" : locale;
  const genericStarts = {
    en: ["Project located", "Pricing, delivery"],
    es: ["Proyecto ubicado", "Precio, entrega"],
    "fr-ca": ["Projet situé", "Le prix"],
  };
  const candidate =
    project.buildingType?.[localizedLocale] ??
    project.highlights?.[localizedLocale]?.find(
      (highlight) =>
        !genericStarts[localizedLocale].some((start) =>
          highlight.startsWith(start),
        ),
    ) ??
    project.residenceFeatures?.[localizedLocale]?.[0] ??
    project.amenities?.[localizedLocale]?.[0];

  if (!candidate) {
    return null;
  }

  return candidate.replace(/\.$/, "");
}

function getSortedProjects(
  projects: PublicPreconstructionProject[],
  sort: SortOption,
) {
  return [...projects].sort((a, b) => {
    if (sort === "az") {
      return a.name.localeCompare(b.name);
    }

    if (sort === "za") {
      return b.name.localeCompare(a.name);
    }

    const aPrice = a.sortPrice ?? Number.POSITIVE_INFINITY;
    const bPrice = b.sortPrice ?? Number.POSITIVE_INFINITY;

    if (sort === "priceAsc") {
      return aPrice - bPrice || a.name.localeCompare(b.name);
    }

    const aDescPrice = a.sortPrice ?? Number.NEGATIVE_INFINITY;
    const bDescPrice = b.sortPrice ?? Number.NEGATIVE_INFINITY;

    return bDescPrice - aDescPrice || a.name.localeCompare(b.name);
  });
}

function FilterSelect<TValue extends string>({
  id,
  label,
  onChange,
  options,
  value,
}: Readonly<FilterSelectProps<TValue>>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <div className={filterLabelClassName} ref={containerRef}>
      <span id={`${id}-label`}>{label}</span>
      <div className="relative">
        <button
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={`${id}-label ${id}-button`}
          className={dropdownButtonClassName}
          id={`${id}-button`}
          onClick={() => setIsOpen((current) => !current)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            }
          }}
          type="button"
        >
          <span className="truncate">
            {selectedOption?.label ?? options[0]?.label}
          </span>
          <span
            aria-hidden="true"
            className={`h-2 w-2 shrink-0 rotate-45 border-b border-r border-primary/42 transition-transform ${
              isOpen ? "-translate-y-0.5 rotate-[225deg]" : "-translate-y-1"
            }`}
          />
        </button>

        {isOpen ? (
          <div
            aria-labelledby={`${id}-label`}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-72 overflow-y-auto rounded-[8px] border border-primary/12 bg-white p-1.5 shadow-[0_24px_60px_rgba(59,39,74,0.16)]"
            role="listbox"
          >
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                  aria-selected={isSelected}
                  className={`flex w-full items-center justify-between gap-3 rounded-[6px] px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                    isSelected
                      ? "bg-primary text-white"
                      : "text-foreground/76 hover:bg-surface hover:text-primary"
                  }`}
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  role="option"
                  type="button"
                >
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function PreconstructionPage({
  content,
  locale,
  projects,
}: Readonly<PreconstructionPageProps>) {
  const [areaFilter, setAreaFilter] = useState("all");
  const [rentalPolicyFilter, setRentalPolicyFilter] =
    useState<RentalPolicyCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("az");

  const areaOptions = useMemo(
    () =>
      [
        {
          label: content.filters.allAreas,
          value: "all",
        },
        ...Array.from(
        new Map(
          projects.map((project) => [
            project.normalizedArea,
            {
              label: project.area,
              value: project.normalizedArea,
            },
          ]),
        ).values(),
      ).sort((a, b) => a.label.localeCompare(b.label)),
      ],
    [content.filters.allAreas, projects],
  );

  const rentalPolicyOptions = useMemo<
    SelectOption<RentalPolicyCategory | "all">[]
  >(
    () => [
      {
        label: content.filters.allAreas,
        value: "all",
      },
      ...Object.entries(content.filters.rentalPolicyOptions).map(
        ([value, label]) => ({
          label,
          value: value as RentalPolicyCategory,
        }),
      ),
    ],
    [content.filters.allAreas, content.filters.rentalPolicyOptions],
  );

  const sortOptions = useMemo<SelectOption<SortOption>[]>(
    () => [
      {
        label: content.filters.sortOptions.az,
        value: "az",
      },
      {
        label: content.filters.sortOptions.za,
        value: "za",
      },
      {
        label: content.filters.sortOptions.priceAsc,
        value: "priceAsc",
      },
      {
        label: content.filters.sortOptions.priceDesc,
        value: "priceDesc",
      },
    ],
    [
      content.filters.sortOptions.az,
      content.filters.sortOptions.priceAsc,
      content.filters.sortOptions.priceDesc,
      content.filters.sortOptions.za,
    ],
  );

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

    const filtered = projects.filter((project) => {
      const matchesSearch =
        !normalizedSearch ||
        project.searchableName.includes(normalizedSearch) ||
        project.normalizedArea.includes(normalizedSearch) ||
        project.city?.toLowerCase().includes(normalizedSearch);
      const matchesArea =
        areaFilter === "all" || project.normalizedArea === areaFilter;
      const matchesRentalPolicy =
        rentalPolicyFilter === "all" ||
        project.rentalPolicyCategory === rentalPolicyFilter;

      return matchesSearch && matchesArea && matchesRentalPolicy;
    });

    return getSortedProjects(filtered, sort);
  }, [areaFilter, projects, rentalPolicyFilter, search, sort]);

  const hasActiveFilters =
    areaFilter !== "all" ||
    rentalPolicyFilter !== "all" ||
    Boolean(search) ||
    sort !== "az";

  function resetFilters() {
    setAreaFilter("all");
    setRentalPolicyFilter("all");
    setSearch("");
    setSort("az");
  }

  return (
    <div className="pb-14 pt-12 sm:pb-24 sm:pt-20 lg:pt-24">
      <section className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
          {content.hero.eyebrow}
        </p>
        <h1 className="mt-6 font-display text-5xl leading-[0.96] text-primary sm:text-6xl lg:whitespace-nowrap lg:text-6xl xl:text-7xl">
          {content.hero.title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/76 sm:text-xl sm:leading-9">
          {content.hero.intro}
        </p>
      </section>

      <section className="mt-12 border border-primary/10 bg-white/48 px-4 py-4 shadow-[0_18px_48px_rgba(59,39,74,0.05)] sm:mt-16 sm:px-5 sm:py-5">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto] lg:items-end">
          <label className={filterLabelClassName}>
            {content.filters.search}
            <input
              className={filterControlClassName}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={content.filters.searchPlaceholder}
              type="search"
              value={search}
            />
          </label>

          <FilterSelect
            id="preconstruction-area-filter"
            label={content.filters.zone}
            onChange={setAreaFilter}
            options={areaOptions}
            value={areaFilter}
          />

          <FilterSelect
            id="preconstruction-rental-policy-filter"
            label={content.filters.rentalPolicy}
            onChange={setRentalPolicyFilter}
            options={rentalPolicyOptions}
            value={rentalPolicyFilter}
          />

          <FilterSelect
            id="preconstruction-sort-filter"
            label={content.filters.sort}
            onChange={setSort}
            options={sortOptions}
            value={sort}
          />

          <button
            className="h-12 rounded-[6px] border border-primary/12 bg-surface/75 px-4 text-sm font-semibold text-primary shadow-[0_10px_28px_rgba(59,39,74,0.04)] transition-colors hover:border-primary/35 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!hasActiveFilters}
            onClick={resetFilters}
            type="button"
          >
            {content.filters.reset}
          </button>
        </div>

        <div className="mt-4 text-sm leading-6 text-foreground/58">
          <p>{content.filters.rentalPolicyNote}</p>
        </div>
      </section>

      <section className="mt-14 grid gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            className="group flex min-h-full flex-col overflow-hidden border border-primary/8 bg-white/62"
            key={project.id}
          >
            <Link
              aria-label={project.name}
              className="relative block aspect-[4/3] overflow-hidden bg-accent/10"
              href={getProjectHref(locale, project)}
            >
              <Image
                alt={`${content.imageAltPrefix} ${project.name}`}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                src={project.heroImage}
              />
            </Link>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="min-h-[9.25rem]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/58">
                  {[project.area, project.city].filter(Boolean).join(" / ")}
                </p>
                <h2 className="mt-3 font-display text-[1.9rem] leading-[1.05] text-primary">
                  <Link
                    className="transition-colors hover:text-primary/78"
                    href={getProjectHref(locale, project)}
                  >
                    {project.name}
                  </Link>
                </h2>
                {getCardSummary(locale, project) ? (
                  <p className="mt-4 text-sm font-medium leading-6 text-foreground/66">
                    {getCardSummary(locale, project)}
                  </p>
                ) : null}
              </div>

              <dl className="mt-4 min-h-[3.5rem] grid gap-2 text-sm text-foreground/58">
                {project.priceFromUsd ? (
                  <div className="flex items-center gap-2">
                    <dt>{content.labels.priceFrom}</dt>
                    <dd className="text-base font-semibold text-primary/82">
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

              <div className="mt-auto pt-4">
                <Link
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-[6px] border border-primary/14 bg-white px-4 py-3 text-center text-sm font-semibold leading-snug text-primary shadow-[0_10px_26px_rgba(59,39,74,0.04)] transition-colors hover:border-primary/35 hover:bg-surface"
                  href={getProjectHref(locale, project)}
                >
                  {content.projectCta}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {filteredProjects.length === 0 ? (
        <section className="mt-10 border border-primary/10 bg-white/50 px-5 py-8 text-center text-base leading-7 text-foreground/68">
          {content.filters.noResults}
        </section>
      ) : null}

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
