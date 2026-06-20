interface PageHeroProps {
  title: string;
  subtitle: string;
  wide?: boolean;
}

export function PageHero({ title, subtitle, wide }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-primary-foreground sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/header.jpg')" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={wide ? "max-w-7xl border-l-4 border-accent pl-6 sm:pl-8" : "max-w-2xl border-l-4 border-accent pl-6 sm:pl-8"}>
          <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/80 sm:text-base lg:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
