import type { Metadata } from "next";
import type { Listing } from "@/data/listings";
import type { PreconstructionProject } from "@/data/preconstruction-projects";
import { routing, type RouteLocale } from "@/i18n/routing";

export const metadataBase = new URL("https://jacquie-real-estate-v2.vercel.app");

type MetadataPage =
  | "home"
  | "propertyManagement"
  | "about"
  | "contact"
  | "listings"
  | "preConstruction";

type LocalizedMetadata = {
  description: string;
  title: string;
};

const pageSlugs: Record<MetadataPage, string> = {
  home: "",
  propertyManagement: "property-management",
  about: "about",
  contact: "contact",
  listings: "listings",
  preConstruction: "pre-construction",
};

const localeMetadata: Record<RouteLocale, Record<MetadataPage, LocalizedMetadata>> = {
  es: {
    home: {
      title: "Jacquie Zarate | Tu persona de confianza en Miami",
      description:
        "Acompañamiento inmobiliario en Miami para propietarios, compradores e inversores internacionales, con foco en gestión de renta corta y conversación directa.",
    },
    propertyManagement: {
      title: "Gestión de propiedades en Miami | Jacquie Zarate",
      description:
        "Gestión de renta corta en Miami para propietarios que necesitan presencia local, seguimiento claro y coordinación con aprobación del propietario.",
    },
    about: {
      title: "Conocé a Jacquie | Jacquie Zarate",
      description:
        "Conocé a Jacquie Zarate, argentina y parte de Miami Life Realty, una guía local para propietarios, compradores e inversores internacionales en Miami.",
    },
    contact: {
      title: "Contacto | Jacquie Zarate",
      description:
        "Escribile a Jacquie por WhatsApp para conversar sobre tu propiedad, una inversión o tu próximo paso en Miami.",
    },
    listings: {
      title: "Listings en Miami | Jacquie Zarate",
      description:
        "Explorá propiedades reales en Miami y South Florida con una mirada curada, clara y orientada a conversación.",
    },
    preConstruction: {
      title: "Proyectos en preconstrucción | Jacquie Zarate",
      description:
        "Evaluá proyectos en preconstrucción en Miami con acompañamiento personalizado y criterio, sin promesas exageradas.",
    },
  },
  en: {
    home: {
      title: "Jacquie Zarate | Your trusted person in Miami",
      description:
        "Miami real estate guidance for international owners, buyers, and investors, focused on short-term rental management and direct conversation.",
    },
    propertyManagement: {
      title: "Property Management in Miami | Jacquie Zarate",
      description:
        "Short-term rental management in Miami for owners who need local presence, clear follow-up, and coordination with owner approval.",
    },
    about: {
      title: "Meet Jacquie | Jacquie Zarate",
      description:
        "Meet Jacquie Zarate, originally from Argentina and part of Miami Life Realty, a local guide for international owners, buyers, and investors in Miami.",
    },
    contact: {
      title: "Contact | Jacquie Zarate",
      description:
        "Write to Jacquie on WhatsApp to talk about your property, an investment, or your next step in Miami.",
    },
    listings: {
      title: "Miami Listings | Jacquie Zarate",
      description:
        "Explore real properties in Miami and South Florida with a curated, clear, conversation-first approach.",
    },
    preConstruction: {
      title: "Pre-construction projects | Jacquie Zarate",
      description:
        "Evaluate pre-construction projects in Miami with personalized guidance and clear criteria, without exaggerated promises.",
    },
  },
  "fr-ca": {
    home: {
      title: "Jacquie Zarate | Votre repère de confiance à Miami",
      description:
        "Accompagnement immobilier à Miami pour propriétaires, acheteurs et investisseurs internationaux, avec un accent sur la gestion de location courte durée et le contact direct.",
    },
    propertyManagement: {
      title: "Gestion de propriétés à Miami | Jacquie Zarate",
      description:
        "Gestion de location courte durée à Miami pour propriétaires qui ont besoin d’une présence locale, d’un suivi clair et d’une coordination avec approbation du propriétaire.",
    },
    about: {
      title: "Découvrez Jacquie | Jacquie Zarate",
      description:
        "Découvrez Jacquie Zarate, Argentine et membre de Miami Life Realty, un repère local pour propriétaires, acheteurs et investisseurs internationaux à Miami.",
    },
    contact: {
      title: "Contact | Jacquie Zarate",
      description:
        "Envoyez une demande à Jacquie sur WhatsApp pour parler de votre propriété, d’un investissement ou de votre prochaine étape à Miami.",
    },
    listings: {
      title: "Propriétés à Miami | Jacquie Zarate",
      description:
        "Explorez des propriétés réelles à Miami et dans le sud de la Floride avec une approche claire, sélective et axée sur la conversation.",
    },
    preConstruction: {
      title: "Projets en préconstruction | Jacquie Zarate",
      description:
        "Évaluez des projets en préconstruction à Miami avec un accompagnement personnalisé et des critères clairs, sans promesses exagérées.",
    },
  },
};

const htmlLangByLocale: Record<RouteLocale, string> = {
  es: "es",
  en: "en",
  "fr-ca": "fr-CA",
};

const openGraphLocaleByLocale: Record<RouteLocale, string> = {
  es: "es_US",
  en: "en_US",
  "fr-ca": "fr_CA",
};

const openGraphImageByLocale: Record<RouteLocale, string> = {
  es: "/og/jacquie-og-es.jpg",
  en: "/og/jacquie-og-en.jpg",
  "fr-ca": "/og/jacquie-og-fr-ca.jpg",
};

export function getHtmlLang(locale: RouteLocale): string {
  return htmlLangByLocale[locale];
}

export function getRouteLocale(locale: string): RouteLocale {
  return routing.locales.includes(locale as RouteLocale)
    ? (locale as RouteLocale)
    : routing.defaultLocale;
}

function getPath(locale: RouteLocale, page: MetadataPage): string {
  const slug = pageSlugs[page];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

function getLanguageAlternates(page: MetadataPage): Record<string, string> {
  return {
    es: getPath("es", page),
    en: getPath("en", page),
    "fr-CA": getPath("fr-ca", page),
    "x-default": getPath(routing.defaultLocale, page),
  };
}

function getListingPath(locale: RouteLocale, listingId: string): string {
  return `/${locale}/listings/${listingId}`;
}

function getListingLanguageAlternates(listingId: string): Record<string, string> {
  return {
    es: getListingPath("es", listingId),
    en: getListingPath("en", listingId),
    "fr-CA": getListingPath("fr-ca", listingId),
    "x-default": getListingPath(routing.defaultLocale, listingId),
  };
}

function getPreconstructionProjectPath(
  locale: RouteLocale,
  projectSlug: string,
): string {
  return `/${locale}/pre-construction/${projectSlug}`;
}

function getPreconstructionProjectLanguageAlternates(
  projectSlug: string,
): Record<string, string> {
  return {
    es: getPreconstructionProjectPath("es", projectSlug),
    en: getPreconstructionProjectPath("en", projectSlug),
    "fr-CA": getPreconstructionProjectPath("fr-ca", projectSlug),
    "x-default": getPreconstructionProjectPath(
      routing.defaultLocale,
      projectSlug,
    ),
  };
}

const listingMetadataByLocale: Record<
  RouteLocale,
  Record<string, LocalizedMetadata>
> = {
  es: {
    "3801-s-ocean-dr-2c": {
      title: "3801 S Ocean Dr #2C | Jacquie Zarate",
      description:
        "Conocé 3801 S Ocean Dr #2C en Hollywood Beach con una mirada clara y acompañamiento personalizado en Miami.",
    },
    "17801-n-bay-rd-505": {
      title: "17801 N Bay Rd #505 | Jacquie Zarate",
      description:
        "Conocé 17801 N Bay Rd #505 en Sunny Isles Beach con una mirada clara y acompañamiento personalizado en Miami.",
    },
  },
  en: {
    "3801-s-ocean-dr-2c": {
      title: "3801 S Ocean Dr #2C | Jacquie Zarate",
      description:
        "Review 3801 S Ocean Dr #2C in Hollywood Beach with clear guidance and personalized support in Miami.",
    },
    "17801-n-bay-rd-505": {
      title: "17801 N Bay Rd #505 | Jacquie Zarate",
      description:
        "Review 17801 N Bay Rd #505 in Sunny Isles Beach with clear guidance and personalized support in Miami.",
    },
  },
  "fr-ca": {
    "3801-s-ocean-dr-2c": {
      title: "3801 S Ocean Dr #2C | Jacquie Zarate",
      description:
        "Découvrez 3801 S Ocean Dr #2C à Hollywood Beach avec un accompagnement clair et personnalisé à Miami.",
    },
    "17801-n-bay-rd-505": {
      title: "17801 N Bay Rd #505 | Jacquie Zarate",
      description:
        "Découvrez 17801 N Bay Rd #505 à Sunny Isles Beach avec un accompagnement clair et personnalisé à Miami.",
    },
  },
};

const preconstructionProjectMetadataByLocale: Record<
  RouteLocale,
  Record<string, LocalizedMetadata>
> = {
  es: {
    "2200-brickell": {
      title: "2200 Brickell Residences | Jacquie Zarate",
      description:
        "Evaluá 2200 Brickell Residences en Brickell con una mirada clara y acompañamiento personalizado, sin promesas exageradas.",
    },
    "elle-residences": {
      title: "ELLE Residences Miami | Jacquie Zarate",
      description:
        "Evaluá ELLE Residences Miami en Edgewater con una mirada clara y acompañamiento personalizado, sin promesas exageradas.",
    },
    "midtown-park": {
      title: "Midtown Park | Jacquie Zarate",
      description:
        "Evaluá Midtown Park en Midtown con una mirada clara y acompañamiento personalizado, sin promesas exageradas.",
    },
  },
  en: {
    "2200-brickell": {
      title: "2200 Brickell Residences | Jacquie Zarate",
      description:
        "Review 2200 Brickell Residences in Brickell with clear guidance and personalized support, without exaggerated promises.",
    },
    "elle-residences": {
      title: "ELLE Residences Miami | Jacquie Zarate",
      description:
        "Review ELLE Residences Miami in Edgewater with clear guidance and personalized support, without exaggerated promises.",
    },
    "midtown-park": {
      title: "Midtown Park | Jacquie Zarate",
      description:
        "Review Midtown Park in Midtown with clear guidance and personalized support, without exaggerated promises.",
    },
  },
  "fr-ca": {
    "2200-brickell": {
      title: "2200 Brickell Residences | Jacquie Zarate",
      description:
        "Évaluez 2200 Brickell Residences à Brickell avec un accompagnement clair et personnalisé, sans promesses exagérées.",
    },
    "elle-residences": {
      title: "ELLE Residences Miami | Jacquie Zarate",
      description:
        "Évaluez ELLE Residences Miami à Edgewater avec un accompagnement clair et personnalisé, sans promesses exagérées.",
    },
    "midtown-park": {
      title: "Midtown Park | Jacquie Zarate",
      description:
        "Évaluez Midtown Park à Midtown avec un accompagnement clair et personnalisé, sans promesses exagérées.",
    },
  },
};

export function buildPageMetadata(
  locale: RouteLocale,
  page: MetadataPage,
): Metadata {
  const metadata = localeMetadata[locale][page];
  const path = getPath(locale, page);
  const image = {
    alt: "Jacquie Zarate",
    height: 630,
    url: openGraphImageByLocale[locale],
    width: 1200,
  };

  return {
    metadataBase,
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: path,
      languages: getLanguageAlternates(page),
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: path,
      siteName: "Jacquie Zarate",
      locale: openGraphLocaleByLocale[locale],
      alternateLocale: routing.locales
        .filter((alternateLocale) => alternateLocale !== locale)
        .map((alternateLocale) => openGraphLocaleByLocale[alternateLocale]),
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [image.url],
    },
  };
}

export function buildListingMetadata(
  locale: RouteLocale,
  listing: Listing,
): Metadata {
  const metadata = listingMetadataByLocale[locale][listing.id];
  const path = getListingPath(locale, listing.id);
  const image = {
    alt: listing.address,
    url: openGraphImageByLocale[locale],
  };

  return {
    metadataBase,
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: path,
      languages: getListingLanguageAlternates(listing.id),
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: path,
      siteName: "Jacquie Zarate",
      locale: openGraphLocaleByLocale[locale],
      alternateLocale: routing.locales
        .filter((alternateLocale) => alternateLocale !== locale)
        .map((alternateLocale) => openGraphLocaleByLocale[alternateLocale]),
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [image.url],
    },
  };
}

export function buildPreconstructionProjectMetadata(
  locale: RouteLocale,
  project: PreconstructionProject,
): Metadata {
  const metadata = preconstructionProjectMetadataByLocale[locale][project.id];
  const projectSlug = project.detailSlug ?? project.slug;
  const path = getPreconstructionProjectPath(locale, projectSlug);
  const image = {
    alt: project.name,
    url: openGraphImageByLocale[locale],
  };

  return {
    metadataBase,
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: path,
      languages: getPreconstructionProjectLanguageAlternates(projectSlug),
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: path,
      siteName: "Jacquie Zarate",
      locale: openGraphLocaleByLocale[locale],
      alternateLocale: routing.locales
        .filter((alternateLocale) => alternateLocale !== locale)
        .map((alternateLocale) => openGraphLocaleByLocale[alternateLocale]),
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [image.url],
    },
  };
}
