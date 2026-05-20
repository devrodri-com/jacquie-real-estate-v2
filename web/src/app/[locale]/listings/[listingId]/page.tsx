import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ListingDetailPage } from "@/components/listing-detail-page";
import {
  getListingById,
  getListingIds,
  listings,
} from "@/data/listings";
import { routing, type RouteLocale } from "@/i18n/routing";
import { buildListingMetadata, getRouteLocale } from "@/lib/metadata";

type ListingDetailRouteProps = Readonly<{
  params: Promise<{ locale: string; listingId: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getListingIds().map((listingId) => ({
      locale,
      listingId,
    })),
  );
}

export async function generateMetadata({
  params,
}: ListingDetailRouteProps): Promise<Metadata> {
  const { locale, listingId } = await params;
  const listing = getListingById(listingId);

  if (!listing) {
    return {};
  }

  return buildListingMetadata(getRouteLocale(locale), listing);
}

export default async function ListingDetailRoute({
  params,
}: ListingDetailRouteProps) {
  const { locale, listingId } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const listing = listings.find((item) => item.id === listingId);

  if (!listing) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const t = await getTranslations("listings.detail");

  return (
    <ListingDetailPage
      content={{
        backToListings: t("backToListings"),
        labels: {
          price: t("labels.price"),
          beds: t("labels.beds"),
          baths: t("labels.baths"),
          sqft: t("labels.sqft"),
          type: t("labels.type"),
          yearBuilt: t("labels.yearBuilt"),
          hoa: t("labels.hoa"),
          parking: t("labels.parking"),
          pets: t("labels.pets"),
          furnished: t("labels.furnished"),
          view: t("labels.view"),
          mls: t("labels.mls"),
          perMonth: t("labels.perMonth"),
          yes: t("labels.yes"),
          no: t("labels.no"),
        },
        summary: {
          eyebrow: t("summary.eyebrow"),
          headline: t("summary.headline"),
          body: t(`summaries.${listing.id}`),
        },
        details: {
          eyebrow: t("details.eyebrow"),
          headline: t("details.headline"),
        },
        values: {
          "3801-s-ocean-dr-2c": {
            type: t("values.3801-s-ocean-dr-2c.type"),
            parking: t("values.3801-s-ocean-dr-2c.parking"),
            pets: t("values.3801-s-ocean-dr-2c.pets"),
            view: t("values.3801-s-ocean-dr-2c.view"),
          },
          "17801-n-bay-rd-505": {
            type: t("values.17801-n-bay-rd-505.type"),
            parking: t("values.17801-n-bay-rd-505.parking"),
            pets: t("values.17801-n-bay-rd-505.pets"),
            furnished: t("values.17801-n-bay-rd-505.furnished"),
            view: t("values.17801-n-bay-rd-505.view"),
          },
        },
        verification: {
          headline: t("verification.headline"),
          body: t("verification.body"),
        },
        location: {
          headline: t("location.headline"),
          body: t("location.body"),
          mapTitle: t("location.mapTitle"),
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
      listing={listing}
      locale={routeLocale}
    />
  );
}
