import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { Stagger } from "../../components/Stagger";

export const Route = createFileRoute("/_public/sdg-2")({
  component: SDG2Page,
});

function SDG2Page() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="UN SDG 2"
        subtitle="Farming our way to Zero Hunger through sustainable agriculture and cooperative enterprise."
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/un-2.jpg"
                    alt="UN SDG 2 Zero Hunger"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Farming Our Way to Zero Hunger
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Farms Empire is Africa's leading community-powered
                  intervention organization working to achieve United Nations
                  Sustainable Development Goal 2: Zero Hunger, through
                  sustainable communal agriculture, cooperative enterprise, and
                  food systems transformation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What is SDG 2 */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  What is UN SDG 2?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Adopted by all 193 United Nations Member States as part of the
                  2030 Agenda for Sustainable Development, SDG 2 calls on the
                  world to:
                </p>
                <blockquote className="mt-4 rounded-r-xl border-l-4 border-primary bg-primary/5 py-4 pr-6 pl-6">
                  <p className="text-lg font-medium italic text-foreground">
                    "End hunger, achieve food security and improved nutrition,
                    and promote sustainable agriculture by 2030."
                  </p>
                </blockquote>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  SDG 2 is not simply about feeding people today — it is about
                  building the agricultural systems, inclusive institutions, and
                  economic structures that make hunger permanently impossible.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/un-1.jpeg"
                    alt="UN SDG 2 Zero Hunger"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Crisis Numbers */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Africa's Food Security Crisis: The Numbers
            </h2>
          </FadeIn>
          <Stagger
            staggerDelay={100}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                stat: "$350B",
                label: "Africa's annual food and agricultural market",
              },
              {
                stat: "40%",
                label: "Increase needed in agricultural production by 2030",
              },
              {
                stat: "$11B/yr",
                label: "Additional investment needed to close the gap",
              },
              {
                stat: "250M+",
                label: "Africans currently classified as food insecure",
              },
              {
                stat: "60%",
                label: "Of the world's uncultivated arable land is in Africa",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <p className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </Stagger>
          <FadeIn direction="up" delay={300}>
            <p className="mt-8 text-left text-lg font-medium text-foreground">
              The gap between Africa's potential and its food reality is not a
              resource problem. It is a systems problem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground">
              How Farms Empire Advances SDG 2
            </h2>
          </FadeIn>
          <Stagger
            staggerDelay={80}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {[
              {
                target: "Target 2.1: End Hunger",
                desc: "Our communal farms increase locally grown food availability in every community we serve",
              },
              {
                target: "Target 2.2: End Malnutrition",
                desc: "Diversified crop production improves nutritional quality and variety across partner communities",
              },
              {
                target: "Target 2.3: Smallholder Productivity",
                desc: "Expert support, shared resources, and market access systematically increase smallholder output and income",
              },
              {
                target: "Target 2.4: Sustainable Agriculture",
                desc: "We integrate soil health, water conservation, IPM, and crop rotation in all farm operations",
              },
              {
                target: "Target 2.a: Rural Investment",
                desc: "We mobilize private capital from landowners and investors into rural agricultural systems",
              },
              {
                target: "Target 2.c: Fair Markets",
                desc: "We build direct market linkages that remove exploitative intermediaries and ensure fair farmer returns",
              },
            ].map((item) => (
              <div
                key={item.target}
                className="group rounded-xl border border-border bg-muted p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.target}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Our Commitment
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Farms Empire formally aligns all its programs, projects, and
                  partnerships with the United Nations SDG 2 framework. We
                  maintain rigorous impact measurement systems that track our
                  contribution to each SDG 2 target, and we report transparently
                  to our partners, stakeholders, and the communities we serve.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We are not waiting for governments or global institutions to
                  solve Africa's food crisis. We are building the solution —
                  farm by farm, community by community — until Zero Hunger is
                  not a goal but a reality.
                </p>
                <blockquote className="mt-6 rounded-r-xl border-l-4 border-accent bg-accent/5 py-4 pr-6 pl-6">
                  <p className="text-base italic text-foreground/80">
                    "The hunger age will not end because we produce more food;
                    it will end because we build the systems that make hunger
                    impossible."
                  </p>
                  <footer className="mt-2 text-sm font-medium text-muted-foreground">
                    — Founder/CEO, Farms Empire
                  </footer>
                </blockquote>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/un-4.jpg"
                    alt="Farms Empire commitment to SDG 2"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
