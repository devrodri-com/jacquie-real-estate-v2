import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ListingsPage } from "@/components/listings-page";
import { listings } from "@/data/listings";
import { routing, type RouteLocale } from "@/i18n/routing";
import { buildPageMetadata, getRouteLocale } from "@/lib/metadata";

type LocalePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata(getRouteLocale(locale), "listings");
}

export default async function ListingsRoute({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const t = await getTranslations("listings");

  return (
    <ListingsPage
      content={{
        hero: {
          eyebrow: t("hero.eyebrow"),
          title: t("hero.title"),
          intro: t("hero.intro"),
        },
        labels: {
          mls: t("labels.mls"),
          price: t("labels.price"),
          beds: t("labels.beds"),
          baths: t("labels.baths"),
          sqft: t("labels.sqft"),
          statusBadge: t("labels.statusBadge"),
        },
        listingCta: t("listingCta"),
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
      listings={listings}
      locale={routeLocale}
    />
  );
}
