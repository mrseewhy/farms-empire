import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { Stagger } from "../../components/Stagger";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/our-services")({
  component: OurServicesPage,
});

function OurServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Services"
        subtitle="End-to-end agricultural solutions from consultancy and farm design to active management and market delivery."
      />

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger staggerDelay={100} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <div
                key={service.num}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary">{service.num}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </Stagger>
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
                We bring proven expertise, transparent partnerships, and measurable results to every engagement.
              </p>
            </div>
          </FadeIn>
          <Stagger staggerDelay={100} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Field-Tested Expertise", desc: "Our model is built on years of direct, hands-on agricultural experience across diverse African terrains and communities." },
              { title: "Transparent Partnerships", desc: "Every agreement is clear, every return is documented, and every partner has full visibility into farm operations." },
              { title: "Community-First Approach", desc: "Communities are not just labor, they are co-owners and co-beneficiaries, ensuring long-term sustainability." },
              { title: "Zero Operational Burden", desc: "We handle everything from farm design to market delivery, so landowners and investors earn without managing." },
              { title: "SDG 2 Aligned", desc: "Every project directly contributes to the United Nations Sustainable Development Goal of Zero Hunger." },
              { title: "Scalable Model", desc: "Our communal farming framework is replicable across communities, states, and countries throughout Africa." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <h3 className="font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
