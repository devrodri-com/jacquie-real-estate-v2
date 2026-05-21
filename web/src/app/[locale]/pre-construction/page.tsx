import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PreconstructionPage } from "@/components/preconstruction-page";
import { getPublicCatalogPreconstructionProjects } from "@/data/preconstruction-projects";
import { routing, type RouteLocale } from "@/i18n/routing";
import { buildPageMetadata, getRouteLocale } from "@/lib/metadata";

type LocalePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata(getRouteLocale(locale), "preConstruction");
}

export default async function PreconstructionRoute({
  params,
}: LocalePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const t = await getTranslations("preConstruction");

  return (
    <PreconstructionPage
      content={{
        hero: {
          eyebrow: t("hero.eyebrow"),
          title: t("hero.title"),
          intro: t("hero.intro"),
        },
        labels: {
          priceFrom: t("labels.priceFrom"),
          delivery: t("labels.delivery"),
          statusBadge: t("labels.statusBadge"),
        },
        filters: {
          search: t("filters.search"),
          searchPlaceholder: t("filters.searchPlaceholder"),
          zone: t("filters.zone"),
          allAreas: t("filters.allAreas"),
          rentalPolicy: t("filters.rentalPolicy"),
          rentalPolicyNote: t("filters.rentalPolicyNote"),
          sort: t("filters.sort"),
          reset: t("filters.reset"),
          projectsLabel: t("filters.projectsLabel"),
          noResults: t("filters.noResults"),
          sortOptions: {
            az: t("filters.sortOptions.az"),
            za: t("filters.sortOptions.za"),
            priceAsc: t("filters.sortOptions.priceAsc"),
            priceDesc: t("filters.sortOptions.priceDesc"),
          },
          rentalPolicyOptions: {
            no_restrictions: t("filters.rentalPolicyOptions.noRestrictions"),
            short_term: t("filters.rentalPolicyOptions.shortTerm"),
            "30_days": t("filters.rentalPolicyOptions.thirtyDays"),
            "60_days": t("filters.rentalPolicyOptions.sixtyDays"),
            "90_days": t("filters.rentalPolicyOptions.ninetyDays"),
            "6_months": t("filters.rentalPolicyOptions.sixMonths"),
            to_confirm: t("filters.rentalPolicyOptions.toConfirm"),
          },
        },
        projectCta: t("projectCta"),
        note: {
          headline: t("note.headline"),
          body: t("note.body"),
        },
        finalCta: {
          headline: t("finalCta.headline"),
          body: t("finalCta.body"),
          button: t("finalCta.button"),
        },
        imageAltPrefix: t("imageAltPrefix"),
      }}
      locale={routeLocale}
      projects={getPublicCatalogPreconstructionProjects()}
    />
  );
}
