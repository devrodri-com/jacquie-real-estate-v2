"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createWhatsAppUrl,
  type WhatsAppLocale,
} from "@/lib/whatsapp";

type RouteLocale = WhatsAppLocale;

const routeLocales: RouteLocale[] = ["es", "en", "fr-ca"];

const footerContent: Record<
  RouteLocale,
  {
    positioning: string;
    navigationTitle: string;
    contactTitle: string;
    links: {
      propertyManagement: string;
      listings: string;
      preConstruction: string;
      about: string;
      contact: string;
    };
    contact: {
      whatsapp: string;
      email: string;
      phone: string;
    };
    languageNote?: string;
    credit: string;
  }
> = {
  es: {
    positioning: "Tu persona de confianza en Miami.",
    navigationTitle: "Explorar",
    contactTitle: "Contacto",
    links: {
      propertyManagement: "Gestión de propiedades",
      listings: "Propiedades",
      preConstruction: "Preconstrucción",
      about: "Sobre Jacquie",
      contact: "Contacto",
    },
    contact: {
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Teléfono",
    },
    credit: "Sitio por Rodrigo Opalo",
  },
  en: {
    positioning: "Your trusted person in Miami.",
    navigationTitle: "Explore",
    contactTitle: "Contact",
    links: {
      propertyManagement: "Property Management",
      listings: "Listings",
      preConstruction: "Pre-construction",
      about: "About",
      contact: "Contact",
    },
    contact: {
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Phone",
    },
    credit: "Site by Rodrigo Opalo",
  },
  "fr-ca": {
    positioning: "Votre repère de confiance à Miami.",
    navigationTitle: "Explorer",
    contactTitle: "Contact",
    links: {
      propertyManagement: "Gestion de propriétés",
      listings: "Propriétés",
      preConstruction: "Préconstruction",
      about: "À propos",
      contact: "Contact",
    },
    contact: {
      whatsapp: "WhatsApp",
      email: "Courriel",
      phone: "Téléphone",
    },
    languageNote:
      "Site disponible en français canadien. Réponse humaine confirmée en espagnol et en anglais.",
    credit: "Site par Rodrigo Opalo",
  },
};

function isRouteLocale(value: string): value is RouteLocale {
  return routeLocales.includes(value as RouteLocale);
}

function getCurrentLocale(pathname: string): RouteLocale {
  const segment = pathname.split("/").filter(Boolean)[0];

  return segment && isRouteLocale(segment) ? segment : "es";
}

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getCurrentLocale(pathname);
  const content = footerContent[locale];
  const navLinks = [
    {
      href: `/${locale}/property-management`,
      label: content.links.propertyManagement,
    },
    {
      href: `/${locale}/listings`,
      label: content.links.listings,
    },
    {
      href: `/${locale}/pre-construction`,
      label: content.links.preConstruction,
    },
    {
      href: `/${locale}/about`,
      label: content.links.about,
    },
    {
      href: `/${locale}/contact`,
      label: content.links.contact,
    },
  ];

  return (
    <footer className="border-t border-primary/10 bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-[minmax(0,1fr)_auto_auto] md:gap-14">
        <div className="max-w-sm">
          <Link
            className="font-display text-2xl leading-none text-primary"
            href={`/${locale}`}
          >
            Jacquie Zarate
          </Link>
          <p className="mt-4 text-base leading-7 text-foreground/70">
            {content.positioning}
          </p>
          {content.languageNote ? (
            <p className="mt-4 max-w-xs text-xs leading-5 text-foreground/52">
              {content.languageNote}
            </p>
          ) : null}
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.navigationTitle}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                className="text-sm font-medium text-foreground/68 transition-colors hover:text-primary"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/58">
            {content.contactTitle}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-foreground/68">
            <a
              className="transition-colors hover:text-primary"
              href={createWhatsAppUrl(locale, "general")}
              rel="noopener noreferrer"
              target="_blank"
            >
              {content.contact.whatsapp}: +1 786 407 2591
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="mailto:jacqueline@miamiliferealty.com"
            >
              {content.contact.email}: jacqueline@miamiliferealty.com
            </a>
            <a
              className="transition-colors hover:text-primary"
              href="tel:+17864072591"
            >
              {content.contact.phone}: +1 786 407 2591
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-5 py-5 text-center text-xs text-foreground/50 sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© Jacquie Zarate</p>
          <a
            className="transition-colors hover:text-primary"
            href="https://www.devrodri.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {content.credit}
          </a>
        </div>
      </div>
    </footer>
  );
}
