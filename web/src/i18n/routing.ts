import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "fr-ca"],
  defaultLocale: "es",
  localePrefix: {
    mode: "always",
  },
});

export type RouteLocale = (typeof routing.locales)[number];
export type ContentLocale = "es" | "en" | "fr-CA";

const contentLocaleByRouteLocale: Record<RouteLocale, ContentLocale> = {
  es: "es",
  en: "en",
  "fr-ca": "fr-CA",
};

export function toContentLocale(locale: RouteLocale): ContentLocale {
  return contentLocaleByRouteLocale[locale];
}
