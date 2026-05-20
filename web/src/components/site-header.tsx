"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type RouteLocale = "es" | "en" | "fr-ca";

const routeLocales: RouteLocale[] = ["es", "en", "fr-ca"];

const localeLabels: Record<RouteLocale, string> = {
  es: "ES",
  en: "EN",
  "fr-ca": "FR-CA",
};

const navLabels: Record<
  RouteLocale,
  {
    propertyManagement: string;
    listings: string;
    preConstruction: string;
    about: string;
    contact: string;
  }
> = {
  es: {
    propertyManagement: "Gestión de propiedades",
    listings: "Propiedades",
    preConstruction: "Preconstrucción",
    about: "Sobre Jacquie",
    contact: "Contacto",
  },
  en: {
    propertyManagement: "Property Management",
    listings: "Listings",
    preConstruction: "Pre-construction",
    about: "About",
    contact: "Contact",
  },
  "fr-ca": {
    propertyManagement: "Gestion de propriétés",
    listings: "Propriétés",
    preConstruction: "Préconstruction",
    about: "À propos",
    contact: "Contact",
  },
};

const mobileNavLabels: typeof navLabels = {
  es: navLabels.es,
  en: navLabels.en,
  "fr-ca": navLabels["fr-ca"],
};

const mobileMenuLabels: Record<RouteLocale, { close: string; open: string }> = {
  es: {
    close: "Cerrar menú de navegación",
    open: "Abrir menú de navegación",
  },
  en: {
    close: "Close navigation menu",
    open: "Open navigation menu",
  },
  "fr-ca": {
    close: "Fermer le menu de navigation",
    open: "Ouvrir le menu de navigation",
  },
};

function isRouteLocale(value: string): value is RouteLocale {
  return routeLocales.includes(value as RouteLocale);
}

function getCurrentLocale(pathname: string): RouteLocale {
  const segment = pathname.split("/").filter(Boolean)[0];

  return segment && isRouteLocale(segment) ? segment : "es";
}

function getLocalizedPath(pathname: string, targetLocale: RouteLocale): string {
  const segments = pathname.split("/").filter(Boolean);
  const remainingSegments = isRouteLocale(segments[0] ?? "")
    ? segments.slice(1)
    : segments;
  const remainingPath = remainingSegments.join("/");

  return remainingPath ? `/${targetLocale}/${remainingPath}` : `/${targetLocale}`;
}

function isActiveNavItem(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = getCurrentLocale(pathname);
  const labels = navLabels[locale];
  const mobileLabels = mobileNavLabels[locale];
  const mobileMenuLabel = mobileMenuLabels[locale];

  const desktopNavItems = [
    {
      href: `/${locale}/property-management`,
      label: labels.propertyManagement,
    },
    {
      href: `/${locale}/listings`,
      label: labels.listings,
    },
    {
      href: `/${locale}/pre-construction`,
      label: labels.preConstruction,
    },
    {
      href: `/${locale}/about`,
      label: labels.about,
    },
    {
      href: `/${locale}/contact`,
      label: labels.contact,
    },
  ];

  const mobileNavItems = [
    {
      href: `/${locale}/property-management`,
      label: mobileLabels.propertyManagement,
    },
    {
      href: `/${locale}/listings`,
      label: mobileLabels.listings,
    },
    {
      href: `/${locale}/pre-construction`,
      label: mobileLabels.preConstruction,
    },
    {
      href: `/${locale}/about`,
      label: mobileLabels.about,
    },
    {
      href: `/${locale}/contact`,
      label: mobileLabels.contact,
    },
  ];

  return (
    <header className="border-b border-primary/10 bg-surface/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-5 px-5 py-5 sm:px-8">
        <div className="flex items-center gap-10">
          <Link
            href={`/${locale}`}
            className="font-display text-2xl leading-none text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Jacquie Zarate
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-7"
          >
            {desktopNavItems.map((item) => (
              <Link
                aria-current={isActiveNavItem(pathname, item.href) ? "page" : undefined}
                className={
                  isActiveNavItem(pathname, item.href)
                    ? "relative text-sm font-semibold text-primary after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-primary/55"
                    : "text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                }
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <nav
            aria-label="Language selection"
            className="flex items-center gap-1"
          >
            {routeLocales.map((targetLocale) => {
              const isActive = targetLocale === locale;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "inline-flex h-9 w-12 items-center justify-center border border-primary bg-primary text-[11px] font-semibold"
                      : "inline-flex h-9 w-12 items-center justify-center border border-primary/12 text-[11px] font-semibold text-foreground/65 transition-colors hover:border-primary/35 hover:text-primary"
                  }
                  href={getLocalizedPath(pathname, targetLocale)}
                  key={targetLocale}
                  onClick={() => setIsMenuOpen(false)}
                  style={isActive ? { color: "#ffffff" } : undefined}
                >
                  {localeLabels[targetLocale]}
                </Link>
              );
            })}
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? mobileMenuLabel.close : mobileMenuLabel.open}
            className="inline-flex h-9 w-10 flex-col items-center justify-center gap-1 border border-primary/12 text-primary transition-colors hover:border-primary/35 hover:bg-white/55 lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span
              className={
                isMenuOpen
                  ? "h-px w-4 translate-y-1.5 rotate-45 bg-current transition-transform"
                  : "h-px w-4 bg-current transition-transform"
              }
            />
            <span
              className={
                isMenuOpen
                  ? "h-px w-4 opacity-0 transition-opacity"
                  : "h-px w-4 bg-current transition-opacity"
              }
            />
            <span
              className={
                isMenuOpen
                  ? "h-px w-4 -translate-y-1.5 -rotate-45 bg-current transition-transform"
                  : "h-px w-4 bg-current transition-transform"
              }
            />
          </button>
        </div>
      </div>

      <div
        className={
          isMenuOpen
            ? "border-t border-primary/10 lg:hidden"
            : "hidden"
        }
        id="mobile-navigation"
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8"
        >
          {mobileNavItems.map((item) => (
            <Link
              aria-current={isActiveNavItem(pathname, item.href) ? "page" : undefined}
              className={
                isActiveNavItem(pathname, item.href)
                  ? "border-b border-primary/8 py-4 text-sm font-semibold text-primary last:border-b-0"
                  : "border-b border-primary/8 py-4 text-sm font-semibold text-foreground/76 transition-colors last:border-b-0 hover:text-primary"
              }
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
