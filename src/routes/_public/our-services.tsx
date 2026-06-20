import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/our-services")({
  component: OurServicesPage,
});

function OurServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Services"
        subtitle="Consultancy, farm design, management, and market access under one roof."
      />

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <div
                key={service.num}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold text-primary">
                    {service.num}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Why Choose Farms Empire
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We bring proven expertise, transparent partnerships, and
                measurable results to every engagement.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Field-Tested Expertise",
                desc: "Our model is built on years of direct, hands-on agricultural experience across diverse African terrains and communities.",
              },
              {
                title: "Transparent Partnerships",
                desc: "Every agreement is clear, every return is documented, and every partner has full visibility into farm operations.",
              },
              {
                title: "Community-First Approach",
                desc: "Communities are not just labor, they are co-owners and co-beneficiaries, ensuring long-term sustainability.",
              },
              {
                title: "Zero Operational Burden",
                desc: "We handle everything from farm design to market delivery, so landowners and investors earn without managing.",
              },
              {
                title: "SDG 2 Aligned",
                desc: "Every project directly contributes to the United Nations Sustainable Development Goal of Zero Hunger.",
              },
              {
                title: "Scalable Model",
                desc: "Our communal farming framework is replicable across communities, states, and countries throughout Africa.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <h3 className="font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Model Works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Why Our Model Works
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              A comparison between traditional farming and the Farms Empire
              communal model.
            </p>
          </FadeIn>
          <div className="mt-10 space-y-4">
            {[
              {
                feature: "Capital Access",
                traditional: "Individual burden",
                ours: "Shared and partnership-funded",
              },
              {
                feature: "Expertise",
                traditional: "Limited",
                ours: "World-class consultancy on every farm",
              },
              {
                feature: "Market Access",
                traditional: "Informal and vulnerable",
                ours: "Structured and commercially optimized",
              },
              {
                feature: "Risk",
                traditional: "Carried by the farmer",
                ours: "Absorbed by partners",
              },
              {
                feature: "Community Benefit",
                traditional: "Incidental",
                ours: "Built into the core model of the design",
              },
              {
                feature: "Scalability",
                traditional: "Slow and capital-intensive",
                ours: "Replicable across communities and states",
              },
            ].map((row) => (
              <div
                key={row.feature}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="border-b border-border bg-muted px-6 py-3">
                  <p className="text-sm font-bold text-foreground">
                    {row.feature}
                  </p>
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Traditional Farming
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {row.traditional}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Farms Empire Model
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {row.ours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Who We Serve
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We partner with a wide range of stakeholders across the
              agricultural value chain.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                type: "Landowners & Property Investors",
                offer:
                  "Structured agreements that generate income from idle land with zero operational burden",
              },
              {
                type: "Local Farming Communities",
                offer:
                  "Income, training, cooperative structure, market access, and food security",
              },
              {
                type: "Cooperatives and Farmer Groups",
                offer:
                  "Consultancy, market linkages, and partnership support to scale collective enterprises",
              },
              {
                type: "Government and Development Agencies",
                offer:
                  "Community agricultural programs with measurable, SDG-aligned impact",
              },
              {
                type: "Impact Investors and DFIs",
                offer:
                  "Structured investment in enterprises generating financial returns and verifiable social impact",
              },
            ].map((row) => (
              <div
                key={row.type}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <h3 className="font-display text-lg font-bold text-foreground">
                  {row.type}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {row.offer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
