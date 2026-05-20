import { createWhatsAppUrl, type WhatsAppLocale } from "@/lib/whatsapp";

type ContactPageContent = {
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryCta: string;
  };
  whenToWrite: {
    eyebrow: string;
    headline: string;
    items: string[];
  };
  messageGuide: {
    eyebrow: string;
    headline: string;
    body: string;
    prompts: string[];
  };
  channels: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  finalCta: {
    headline: string;
    body: string;
    primaryCta: string;
  };
};

type ContactPageProps = {
  locale: WhatsAppLocale;
  content: ContactPageContent;
};

function SectionEyebrow({ children }: Readonly<{ children: string }>) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/58">
      {children}
    </p>
  );
}

function WhatsAppAction({
  children,
  locale,
}: Readonly<{
  children: string;
  locale: WhatsAppLocale;
}>) {
  return (
    <a
      className="inline-flex items-center justify-center whitespace-nowrap border border-primary bg-primary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary/92"
      href={createWhatsAppUrl(locale)}
      rel="noopener noreferrer"
      style={{ color: "#ffffff" }}
      target="_blank"
    >
      {children}
    </a>
  );
}

export function ContactPage({ locale, content }: Readonly<ContactPageProps>) {
  return (
    <div className="pb-20 sm:pb-24">
      <section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.65fr)] lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow>{content.hero.eyebrow}</SectionEyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] text-primary sm:text-6xl lg:text-7xl">
              {content.hero.headline}
            </h1>
          </div>

          <div className="border-l border-primary/12 pl-4 lg:pl-8">
            <p className="max-w-xl text-lg leading-8 text-foreground/72">
              {content.hero.body}
            </p>

            <div className="mt-8">
              <WhatsAppAction locale={locale}>
                {content.hero.primaryCta}
              </WhatsAppAction>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-18 border-y border-primary/10 py-12 sm:mt-24 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,0.8fr)] lg:gap-16">
          <div>
            <SectionEyebrow>{content.whenToWrite.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl">
              {content.whenToWrite.headline}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {content.whenToWrite.items.map((item) => (
              <div
                className="border border-primary/10 bg-white px-5 py-4 text-base leading-7 text-foreground/72"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-18 sm:mt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,0.8fr)] lg:gap-16">
          <div>
            <SectionEyebrow>{content.messageGuide.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-primary sm:text-5xl">
              {content.messageGuide.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72">
              {content.messageGuide.body}
            </p>
          </div>

          <div className="border-t border-primary/12">
            {content.messageGuide.prompts.map((prompt) => (
              <p
                className="border-b border-primary/12 py-5 text-base leading-7 text-foreground/76"
                key={prompt}
              >
                {prompt}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-18 bg-primary px-6 py-12 text-white sm:mt-24 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/62">
              {content.channels.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              {content.channels.headline}
            </h2>
          </div>

          <p className="text-lg leading-8 text-white/76">
            {content.channels.body}
          </p>
        </div>
      </section>

      <section className="mt-18 bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(59,39,74,0.08)] ring-1 ring-primary/10 sm:mt-24 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">
            {content.finalCta.headline}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/72">
            {content.finalCta.body}
          </p>

          <div className="mt-9">
            <WhatsAppAction locale={locale}>
              {content.finalCta.primaryCta}
            </WhatsAppAction>
          </div>
        </div>
      </section>
    </div>
  );
}
