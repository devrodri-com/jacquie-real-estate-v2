type ProcessStep = {
  title: string;
  description: string;
};

type ProcessSectionContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  steps: ProcessStep[];
};

type ProcessSectionProps = {
  content: ProcessSectionContent;
};

export function ProcessSection({
  content,
}: Readonly<ProcessSectionProps>) {
  return (
    <section className="mt-14 py-2 sm:mt-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,1fr)] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/62">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight text-primary sm:text-5xl">
            {content.headline}
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-foreground/74">
            {content.intro}
          </p>

          <div className="mt-9 border-y border-primary/10">
            {content.steps.map((step, index) => (
              <div
                className="grid gap-3 border-b border-primary/10 py-6 last:border-b-0 sm:grid-cols-[3rem_1fr]"
                key={step.title}
              >
                <p className="text-sm font-semibold text-accent">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
