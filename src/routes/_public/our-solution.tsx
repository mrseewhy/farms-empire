import { createFileRoute } from "@tanstack/react-router";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { Stagger } from "../../components/Stagger";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/our-solution")({
  head: () => ({
    meta: [
      { title: "Our Solution | Farms Empire" },
      { name: "description", content: "From land activation to market delivery, we handle the full farming cycle." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/our-solution` },
      { property: "og:title", content: "Our Solution | Farms Empire" },
      { property: "og:description", content: "From land activation to market delivery, we handle the full farming cycle." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Solution | Farms Empire" },
      { name: "twitter:description", content: "From land activation to market delivery, we handle the full farming cycle." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/our-solution` },
    ],
  }),
  component: OurSolutionPage,
});

function OurSolutionPage() {
  useDocumentTitle("Our Solution | Farms Empire");
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Solution"
        subtitle="From land activation to market delivery, we handle the full farming cycle."
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/solution-1.jpg"
                    alt="Africa's agricultural potential"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  We Turn Idle Land Into Living Enterprises
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Farms Empire delivers end-to-end agricultural solutions from
                  expert consultancy and farm design to community mobilization,
                  active farm management, and return-on-investment delivery for
                  our partners.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Africa loses billions of dollars in agricultural potential
                  every year, not because the land is absent; but because the
                  systems, expertise, and community coordination needed to
                  activate it are missing. The result: landowners earn nothing
                  from their assets, communities go hungry, and Africa's
                  agricultural promise remains largely unrealized.
                </p>
                <p className="mt-4 text-xl font-semibold text-primary">
                  Farms Empire changes that!
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  A $350 Billion Market Waiting to Be Unlocked
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Africa's food and agricultural market is currently valued at
                  about $350 billion annually. Yet, the continent needs to
                  increase its current agricultural production and food
                  availability by at least 40% with an estimated $11 billion per
                  year in additional public and private investment to meet the
                  UN Sustainable Development Goal of Zero Hunger by 2030.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/solution-2.jpg"
                    alt="Africa's agricultural market opportunity"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Our Model: The Communal Farming Partnership
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Our unique Communal Farming Partnership Model brings together four
              essential elements that no single stakeholder could achieve alone:
            </p>
          </FadeIn>
          <Stagger
            staggerDelay={100}
            className="mt-10 grid gap-6 sm:grid-cols-2"
          >
            {[
              {
                element: "Land",
                contributor: "Landowners & Property Investors",
                what: "Undeveloped or idle arable land activated under structured agreement",
              },
              {
                element: "Community",
                contributor: "Local Farming Communities",
                what: "Labour, local knowledge, community trust, and shared stake in outcomes",
              },
              {
                element: "Expertise",
                contributor: "Farms Empire Technical Team",
                what: "Agronomy, farm design, crop management, and commercial operations",
              },
              {
                element: "Market Access",
                contributor: "Farms Empire Commercial Division",
                what: "Offtaker relationships, value chain links, retail and export channels",
              },
            ].map((item) => (
              <div
                key={item.element}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">
                  {item.element}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.contributor}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.what}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Our Services
            </h2>
          </FadeIn>
          <Stagger
            staggerDelay={80}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {[
              {
                num: "1",
                title: "Agricultural Consultancy",
                desc: "Expert advisory services for individual farmers, cooperatives, agribusinesses, and government agencies seeking to optimize agricultural productivity and enterprise sustainability.",
              },
              {
                num: "2",
                title: "Farm Design and Setup",
                desc: "End-to-end farm establishment, from soil testing and crop selection to infrastructure setup, irrigation design, and operational planning.",
              },
              {
                num: "3",
                title: "Communal Farm Management",
                desc: "We actively manage farms on behalf of our landowner and community partners: handling all operational, technical, and commercial activities while delivering agreed returns.",
              },
              {
                num: "4",
                title: "Community Mobilization and Cooperative Development",
                desc: "We identify, train, and organize farming communities into productive cooperative units with clear governance, defined roles, and shared accountability structures.",
              },
              {
                num: "5",
                title: "Agricultural Training and Capacity Building",
                desc: "We equip community farmers with practical skills in modern farming techniques, post-harvest handling, cooperative management, and agricultural business fundamentals.",
              },
              {
                num: "6",
                title: "Investor Engagement and Land Asset Optimization",
                desc: "For landowners and property investors, we provide structured agricultural partnerships that generate consistent income from land awaiting development.",
              },
            ].map((service) => (
              <div
                key={service.num}
                className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                  {service.num}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
