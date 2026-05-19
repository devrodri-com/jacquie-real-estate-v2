type RoutePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  status: string;
};

export function RoutePlaceholder({
  eyebrow,
  title,
  description,
  status,
}: Readonly<RoutePlaceholderProps>) {
  return (
    <section className="max-w-3xl">
      <p className="text-sm font-medium text-primary/75">{eyebrow}</p>
      <h1 className="mt-5 font-display text-5xl leading-[0.98] text-primary sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/78">
        {description}
      </p>
      <div className="mt-10 inline-flex border border-primary/14 bg-white px-4 py-3 text-sm text-foreground/70">
        {status}
      </div>
    </section>
  );
}
