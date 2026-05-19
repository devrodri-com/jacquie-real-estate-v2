import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";
import { routing, type RouteLocale } from "@/i18n/routing";
import { buildPageMetadata, getRouteLocale } from "@/lib/metadata";

type LocalePageProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata(getRouteLocale(locale), "contact");
}

export default async function ContactRoute({
  params,
}: LocalePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const t = await getTranslations("contact");

  return (
    <ContactPage
      content={{
        hero: {
          eyebrow: t("hero.eyebrow"),
          headline: t("hero.headline"),
          body: t("hero.body"),
          primaryCta: t("hero.primaryCta"),
        },
        whenToWrite: {
          eyebrow: t("whenToWrite.eyebrow"),
          headline: t("whenToWrite.headline"),
          items: t.raw("whenToWrite.items") as string[],
        },
        messageGuide: {
          eyebrow: t("messageGuide.eyebrow"),
          headline: t("messageGuide.headline"),
          body: t("messageGuide.body"),
          prompts: t.raw("messageGuide.prompts") as string[],
        },
        channels: {
          eyebrow: t("channels.eyebrow"),
          headline: t("channels.headline"),
          body: t("channels.body"),
        },
        finalCta: {
          headline: t("finalCta.headline"),
          body: t("finalCta.body"),
          primaryCta: t("finalCta.primaryCta"),
        },
      }}
      locale={routeLocale}
    />
  );
}
