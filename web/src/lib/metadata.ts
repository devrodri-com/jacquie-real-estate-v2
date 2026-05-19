import type { Metadata } from "next";
import { routing, type RouteLocale } from "@/i18n/routing";

export const metadataBase = new URL("https://jacquie-real-estate-v2.vercel.app");

type MetadataPage = "home" | "propertyManagement" | "about" | "contact";

type LocalizedMetadata = {
  description: string;
  title: string;
};

const pageSlugs: Record<MetadataPage, string> = {
  home: "",
  propertyManagement: "property-management",
  about: "about",
  contact: "contact",
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

export function buildPageMetadata(
  locale: RouteLocale,
  page: MetadataPage,
): Metadata {
  const metadata = localeMetadata[locale][page];
  const path = getPath(locale, page);
  const image = {
    alt: "Jacquie Zarate",
    height: 1024,
    url: "/images/jacquie-zarate-hero.jpg",
    width: 1024,
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
