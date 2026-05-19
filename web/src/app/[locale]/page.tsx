import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HomeHero } from "@/components/home-hero";
import { JacquieTrustSection } from "@/components/jacquie-trust-section";
import { MidConversionCta } from "@/components/mid-conversion-cta";
import { PropertyManagementSection } from "@/components/property-management-section";
import { ProcessSection } from "@/components/process-section";
import { routing, type RouteLocale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const routeLocale = locale as RouteLocale;
  const hero = await getTranslations("home.hero");
  const trust = await getTranslations("home.jacquieTrust");
  const propertyManagement = await getTranslations("home.propertyManagement");
  const process = await getTranslations("home.process");
  const midConversion = await getTranslations("home.midConversion");
  const finalCta = await getTranslations("home.finalCta");

  return (
    <>
      <HomeHero
        content={{
          context: hero("context"),
          headline: hero("headline"),
          subheadline: hero("subheadline"),
          primaryCta: hero("primaryCta"),
          secondaryCta: hero("secondaryCta"),
          supportNote: hero("supportNote"),
          languageDisclosure:
            routeLocale === "fr-ca" ? hero("languageDisclosure") : undefined,
          imageAlt: hero("imageAlt"),
        }}
        locale={routeLocale}
      />

      <JacquieTrustSection
        content={{
          eyebrow: trust("eyebrow"),
          headline: trust("headline"),
          body: trust("body"),
          trustPoints: trust.raw("trustPoints"),
          secondaryText: trust("secondaryText"),
        }}
      />

      <PropertyManagementSection
        content={{
          eyebrow: propertyManagement("eyebrow"),
          headline: propertyManagement("headline"),
          body: propertyManagement("body"),
          keyPoints: propertyManagement.raw("keyPoints"),
          primaryCta: propertyManagement("primaryCta"),
          secondaryCta: propertyManagement("secondaryCta"),
          supportNote: propertyManagement("supportNote"),
        }}
        locale={routeLocale}
      />

      <ProcessSection
        content={{
          eyebrow: process("eyebrow"),
          headline: process("headline"),
          intro: process("intro"),
          steps: process.raw("steps"),
        }}
      />

      <MidConversionCta
        content={{
          headline: midConversion("headline"),
          body: midConversion("body"),
          primaryCta: midConversion("primaryCta"),
          note: midConversion("note"),
        }}
        locale={routeLocale}
      />

      <FinalCtaSection
        content={{
          eyebrow: finalCta("eyebrow"),
          headline: finalCta("headline"),
          body: finalCta("body"),
          primaryCta: finalCta("primaryCta"),
          secondaryCta: finalCta("secondaryCta"),
          note: finalCta("note"),
        }}
        locale={routeLocale}
      />
    </>
  );
}
