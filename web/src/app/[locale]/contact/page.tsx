import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ContactPage } from "@/components/contact-page";
import { routing, type RouteLocale } from "@/i18n/routing";

export default async function ContactRoute({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
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
