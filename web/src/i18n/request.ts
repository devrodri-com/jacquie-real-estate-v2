import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing, toContentLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const contentLocale = toContentLocale(locale);

  return {
    locale: contentLocale,
    messages: (await import(`./messages/${contentLocale}.json`)).default,
  };
});
