import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { routing, type RouteLocale } from "@/i18n/routing";
import { buildPageMetadata, getRouteLocale } from "@/lib/metadata";

type LocalePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata(getRouteLocale(locale), "about");
}

export default async function AboutRoute({
  params,
}: LocalePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const t = await getTranslations("about");

  return (
    <AboutPage
      content={{
        hero: {
          eyebrow: t("hero.eyebrow"),
          headline: t("hero.headline"),
          body: t("hero.body"),
          primaryCta: t("hero.primaryCta"),
          secondaryCta: t("hero.secondaryCta"),
        },
        accompany: {
          eyebrow: t("accompany.eyebrow"),
          headline: t("accompany.headline"),
          body: t("accompany.body"),
          points: t.raw("accompany.points") as string[],
        },
        audience: {
          eyebrow: t("audience.eyebrow"),
          headline: t("audience.headline"),
          body: t("audience.body"),
          items: t.raw("audience.items") as string[],
        },
        trust: {
          eyebrow: t("trust.eyebrow"),
          headline: t("trust.headline"),
          points: t.raw("trust.points") as string[],
        },
        approach: {
          eyebrow: t("approach.eyebrow"),
          headline: t("approach.headline"),
          body: t("approach.body"),
          note: t("approach.note"),
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
