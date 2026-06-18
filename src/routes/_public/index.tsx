import { createFileRoute, Link } from "@tanstack/react-router";
import { LogoCarousel } from "../../components/LogoCarousel";

export const Route = createFileRoute("/_public/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-primary lg:min-h-screen ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          role="img"
          aria-label="Agricultural farmland showing sustainable farming in Africa"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        {/* Dark Green Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-primary/30" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[70vh] items-center lg:min-h-[85vh] xl:min-h-[90vh]">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Africa's Leading SDG 2 Organization
              </p>
              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                Communities
                <br />
                Grow <span className="text-logo-green">Empires</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                We partner with individuals, groups, and local communities to
                build sustainable agricultural powerhouses through expert
                consultancy, strategic support, and the enduring strength of
                communal farming.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/partner-with-us"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
                >
                  Book a Free Consultation
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  to="/who-we-are"
                  className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Building Sustainable Agricultural Powerhouses Across Africa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At Farms Empire, we believe Communities Grow Empires. We partner
              with individuals, groups, and local communities to build
              sustainable agricultural powerhouses through expert consultancy,
              strategic support, collective resources, and the enduring strength
              of communal farming, to achieve food security across Africa.
            </p>
            <blockquote className="mt-8 border-l-4 border-primary pl-6">
              <p className="text-lg italic text-muted-foreground">
                "If we want to improve our agricultural sector, we must think of
                cooperation."
              </p>
              <footer className="mt-2 text-sm font-medium text-muted-foreground/70">
                — Julius Nyerere, former President of Tanzania
              </footer>
            </blockquote>
            <Link
              to="/who-we-are"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Read our full story
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
                alt="Farms Empire communal farming"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary px-6 py-4 text-white shadow-lg">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-white/80">Hectares Under Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "500+", label: "Hectares Managed" },
              { value: "180+", label: "Active Partners" },
              { value: "500+", label: "Farming Families" },
              { value: "400+", label: "Tonnes Produced Yearly" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-muted p-8 text-center sm:p-12">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            If you are not earning from your land,
            <br />
            <span className="text-primary">someone else is!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Your land is sitting idle, but your wealth doesn't have to. Partner
            with Farms Empire today, put your undeveloped land to work through
            communal farming, and watch it generate massive returns.
          </p>
          <Link
            to="/partner-with-us"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Request a Call
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
