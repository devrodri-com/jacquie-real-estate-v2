import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import { routing } from "@/i18n/routing";
import { getHtmlLang, getRouteLocale } from "@/lib/metadata";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const routeLocale = getRouteLocale(locale);

  return (
    <html
      lang={getHtmlLang(routeLocale)}
      className={`${inter.variable} ${newsreader.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <SiteShell>{children}</SiteShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
