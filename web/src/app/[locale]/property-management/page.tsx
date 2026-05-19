import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PropertyManagementPage } from "@/components/property-management-page";
import { routing, type RouteLocale } from "@/i18n/routing";
import { buildPageMetadata, getRouteLocale } from "@/lib/metadata";

type LocalePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata(getRouteLocale(locale), "propertyManagement");
}

export default async function PropertyManagementRoute({
  params,
}: LocalePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const t = await getTranslations("propertyManagement");

  return (
    <PropertyManagementPage
      content={{
        hero: {
          eyebrow: t("hero.eyebrow"),
          headline: t("hero.headline"),
          body: t("hero.body"),
          primaryCta: t("hero.primaryCta"),
          secondaryCta: t("hero.secondaryCta"),
        },
        audience: {
          eyebrow: t("audience.eyebrow"),
          headline: t("audience.headline"),
          body: t("audience.body"),
          points: t.raw("audience.points") as string[],
        },
        scope: {
          eyebrow: t("scope.eyebrow"),
          headline: t("scope.headline"),
          intro: t("scope.intro"),
          items: t.raw("scope.items") as string[],
        },
        process: {
          eyebrow: t("process.eyebrow"),
          headline: t("process.headline"),
          steps: t.raw("process.steps") as string[],
        },
        transparency: {
          eyebrow: t("transparency.eyebrow"),
          headline: t("transparency.headline"),
          body: t("transparency.body"),
          points: t.raw("transparency.points") as string[],
        },
        finalCta: {
          headline: t("finalCta.headline"),
          body: t("finalCta.body"),
          primaryCta: t("finalCta.primaryCta"),
          secondaryCta: t("finalCta.secondaryCta"),
        },
      }}
      locale={routeLocale}
    />
  );
}
