type JacquieTrustSectionContent = {
  eyebrow: string;
  headline: string;
  body: string;
  trustPoints: string[];
  secondaryText: string;
};

type JacquieTrustSectionProps = {
  content: JacquieTrustSectionContent;
};

export function JacquieTrustSection({
  content,
}: Readonly<JacquieTrustSectionProps>) {
  return (
    <section className="mt-14 border-t border-primary/10 pt-12 sm:mt-24 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:gap-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/65">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            {content.headline}
          </h2>

          <p className="mt-6 text-lg leading-8 text-foreground/76">
            {content.body}
          </p>

          <p className="mt-8 max-w-md text-sm leading-6 text-foreground/62">
            {content.secondaryText}
          </p>
        </div>

        <div className="bg-white/64 px-6 py-7 shadow-[0_18px_50px_rgba(59,39,74,0.08)] ring-1 ring-primary/10">
          <p className="text-sm font-semibold text-primary">
            Jacquie Zarate
          </p>

          <ul className="mt-5 space-y-4">
            {content.trustPoints.map((point) => (
              <li className="flex gap-3 text-sm leading-6 text-foreground/72" key={point}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
