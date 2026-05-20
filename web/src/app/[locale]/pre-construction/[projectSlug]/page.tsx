import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PreconstructionDetailPage } from "@/components/preconstruction-detail-page";
import {
  getPreconstructionProjectBySlug,
  getVisiblePreconstructionDetailSlugs,
} from "@/data/preconstruction-projects";
import { routing, type RouteLocale } from "@/i18n/routing";
import {
  buildPreconstructionProjectMetadata,
  getRouteLocale,
} from "@/lib/metadata";

type PreconstructionDetailRouteProps = Readonly<{
  params: Promise<{ locale: string; projectSlug: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getVisiblePreconstructionDetailSlugs().map((projectSlug) => ({
      locale,
      projectSlug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PreconstructionDetailRouteProps): Promise<Metadata> {
  const { locale, projectSlug } = await params;
  const project = getPreconstructionProjectBySlug(projectSlug);

  if (!project) {
    return {};
  }

  return buildPreconstructionProjectMetadata(getRouteLocale(locale), project);
}

export default async function PreconstructionDetailRoute({
  params,
}: PreconstructionDetailRouteProps) {
  const { locale, projectSlug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const project = getPreconstructionProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const t = await getTranslations("preConstruction.detail");

  return (
    <PreconstructionDetailPage
      content={{
        backToPreconstruction: t("backToPreconstruction"),
        labels: {
          address: t("labels.address"),
          area: t("labels.area"),
          buildingType: t("labels.buildingType"),
          city: t("labels.city"),
          designTeam: t("labels.designTeam"),
          priceFrom: t("labels.priceFrom"),
          delivery: t("labels.delivery"),
          status: t("labels.status"),
        },
        statusBadge: t("statusBadge"),
        priceQualifier: t("priceQualifier"),
        deliveryQualifier: t("deliveryQualifier"),
        summary: {
          eyebrow: t("summary.eyebrow"),
          headline: t("summary.headline"),
          body: t("summary.body"),
        },
        summaries: {
          "2200-brickell": t("summaries.2200-brickell"),
          "elle-residences": t("summaries.elle-residences"),
          "midtown-park": t("summaries.midtown-park"),
        },
        details: {
          eyebrow: t("details.eyebrow"),
          headline: t("details.headline"),
        },
        sections: {
          highlights: t("sections.highlights"),
          residences: t("sections.residences"),
          amenities: t("sections.amenities"),
          paymentPlan: t("sections.paymentPlan"),
          paymentPlanHeadline: t("sections.paymentPlanHeadline"),
          location: t("sections.location"),
          locationHeadline: t("sections.locationHeadline"),
          unitMix: t("sections.unitMix"),
        },
        paymentPlanNote: t("paymentPlanNote"),
        locationBody: t("locationBody"),
        mapTitle: t("mapTitle"),
        review: {
          eyebrow: t("review.eyebrow"),
          headline: t("review.headline"),
          items: t.raw("review.items") as string[],
        },
        verification: {
          headline: t("verification.headline"),
          body: t("verification.body"),
        },
        gallery: {
          open: t("gallery.open"),
          close: t("gallery.close"),
          previous: t("gallery.previous"),
          next: t("gallery.next"),
          photos: t("gallery.photos"),
        },
        cta: {
          headline: t("cta.headline"),
          body: t("cta.body"),
          button: t("cta.button"),
        },
        imageAltPrefix: t("imageAltPrefix"),
      }}
      locale={routeLocale}
      project={project}
    />
  );
}
