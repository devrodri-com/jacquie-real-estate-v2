import Image from "next/image";
import Link from "next/link";
import {
  createWhatsAppUrl,
  type WhatsAppLocale,
} from "@/lib/whatsapp";

type HomeHeroContent = {
  context: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  supportNote: string;
  languageDisclosure?: string;
  imageAlt: string;
};

type HomeHeroProps = {
  locale: WhatsAppLocale;
  content: HomeHeroContent;
};

export function HomeHero({ locale, content }: Readonly<HomeHeroProps>) {
  return (
    <section className="grid items-center gap-12 py-4 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.78fr)] md:gap-14 lg:gap-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/70">
          {content.context}
        </p>

        <h1 className="mt-6 font-display text-5xl leading-[0.96] text-primary sm:text-6xl lg:text-7xl">
          {content.headline}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/78 sm:text-xl sm:leading-9">
          {content.subheadline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center bg-primary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary/92"
            href={createWhatsAppUrl(locale, "general")}
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
            target="_blank"
          >
            {content.primaryCta}
          </a>

          <Link
            className="inline-flex items-center justify-center border border-primary/18 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-primary/35 hover:bg-white/75"
            href={`/${locale}/property-management`}
          >
            {content.secondaryCta}
          </Link>
        </div>

        <p className="mt-7 max-w-xl text-sm leading-6 text-foreground/62">
          {content.supportNote}
        </p>

        {content.languageDisclosure ? (
          <p className="mt-3 max-w-xl text-xs leading-5 text-foreground/50">
            {content.languageDisclosure}
          </p>
        ) : null}
      </div>

      <div className="relative mx-auto w-full max-w-[390px] px-5 py-8 sm:px-7 sm:py-10 md:mr-0">
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-accent/12" />
        <div className="absolute left-0 top-10 h-28 w-28 bg-primary/8" />
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[8px] border border-white/75 bg-white shadow-[0_24px_72px_rgba(59,39,74,0.16)] sm:max-w-[350px]">
          <Image
            alt={content.imageAlt}
            className="rounded-[8px] object-cover object-[50%_24%]"
            fill
            priority
            sizes="(min-width: 1024px) 350px, (min-width: 768px) 34vw, 86vw"
            src="/images/jacquie-zarate-hero.jpg"
          />
        </div>
      </div>
    </section>
  );
}
