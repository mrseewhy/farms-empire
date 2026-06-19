import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { Stagger } from "../../components/Stagger";

export const Route = createFileRoute("/_public/who-we-are")({
  component: WhoWeArePage,
});

function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Who We Are"
        subtitle="Uniting landowners, communities, and expert practitioners to build sustainable farming enterprises across Africa."
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/about.jpg"
                    alt="Farms Empire communal farming"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  We Are Africa's Communal Agriculture Movement
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Farms Empire and Agricultural Services is a purpose-driven
                  agricultural solutions company uniting landowners, communities,
                  and expert practitioners to build sustainable farming
                  enterprises that feed Africa and create lasting income for
                  partners.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  The organization is founded on a simple but powerful conviction:
                  "With so much undeveloped land across Africa, no one should go
                  hungry; and no land should go to waste!"
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We exist at the intersection of untapped land and untapped
                  human potential, bridging the gap through the power of communal
                  agriculture.
                </p>
                <p className="mt-4 text-xl font-semibold text-primary">
                  We are not just a consultancy. We are a movement, one harvest
                  at a time.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn direction="left">
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <h2 className="font-display text-2xl font-bold text-primary">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  To provide smallholder farmers and communities with expert
                  agricultural support, collective resources, and collaborative
                  farming opportunities that drives sustainable growth and wealth
                  creation.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <h2 className="font-display text-2xl font-bold text-primary">
                  Our Vision
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  To build and support a network of 1,000 thriving farmers and
                  agricultural communities by 2030, strengthening food security
                  and driving sustainable economic development across Africa.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              What We Stand For
            </h2>
          </FadeIn>
          <Stagger staggerDelay={100} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Partnership",
                desc: "We believe no one grows alone. Every farm we build is rooted in relationships, trust, and mutual commitment.",
              },
              {
                title: "Integrity",
                desc: "We operate with full transparency in all land agreements, financial arrangements, and community partnerships.",
              },
              {
                title: "Community",
                desc: "The communities we serve are not beneficiaries; they are co-owners, co-investors, and co-beneficiaries.",
              },
              {
                title: "Sustainability",
                desc: "We farm with the future in mind: environmentally responsible, economically viable, and socially inclusive.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group rounded-xl border border-border bg-muted p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our Areas of Expertise
            </h2>
          </FadeIn>
          <Stagger staggerDelay={80} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Crop cultivation and Animal husbandry",
              "Agricultural business and value chain development",
              "Community engagement and cooperative systems",
              "Financial modelling, partnerships and investor relations",
              "UN Sustainable Development Goals implementation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-muted-foreground transition-all duration-200 hover:shadow-md hover:border-primary/20"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  ✓
                </span>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
