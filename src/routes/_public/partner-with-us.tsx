import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { Stagger } from "../../components/Stagger";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/partner-with-us")({
  head: () => ({
    meta: [
      { title: "Partner With Us | Farms Empire" },
      { name: "description", content: "Turn your idle land into a productive, income-generating farm asset." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/partner-with-us` },
      { property: "og:title", content: "Partner With Us | Farms Empire" },
      { property: "og:description", content: "Turn your idle land into a productive, income-generating farm asset." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Partner With Us | Farms Empire" },
      { name: "twitter:description", content: "Turn your idle land into a productive, income-generating farm asset." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/partner-with-us` },
    ],
  }),
  component: PartnerWithUsPage,
});

function PartnerWithUsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Partner With Us"
        subtitle="Turn your idle land into a productive, income-generating farm asset."
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/plot.jpg"
                    alt="Partner with Farms Empire"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Your Land. Our Expertise. One Harvest. Infinite Potential.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  If you are not earning from your land, someone else is. Your
                  land may be sitting idle, but your wealth does not have to.
                  Partner with Farms Empire today, put your undeveloped land to
                  work through communal farming, and watch it generate massive
                  returns while you wait for development. Don't let your
                  greatest asset sleep, let it grow.
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Request a Call
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Who Should Partner */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Who Should Partner With Us?
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-6">
            {[
              {
                num: 1,
                title: "Landowners and Property Investors",
                desc: "You own land in Nigeria or across Africa. It may be awaiting development, caught in planning processes, or simply lying idle. Whatever the reason, idle land is not neutral, it is a daily loss of potential income. \n\ Farms Empire will partner with you to activate your land through our communal farming model; managing everything from farm design and community mobilization to harvest operations and commercial sales. You provide the land. We provide everything else. You earn returns. Your land builds value.",
                benefits: [
                  "A legally structured land use agreement with clear terms, timelines, and return structures",
                  "Zero operational burden; Farms Empire manages all farm operations end to end",
                  "Regular farm performance reports and open site visit access at any time",
                  "A share of commercial revenues from every harvest cycle",
                  "Enhanced land value through active agricultural development",
                  "Full financial transparency and accountability throughout the partnership",
                ],
              },
              {
                num: 2,
                title: "Communities and Farming Groups",
                desc: "Your community has people, local knowledge, and a desire for economic independence. Farms Empire brings the land access, expert management, cooperative structure, and market linkages that transform community farming potential into commercial agricultural enterprise.",
                benefits: [
                  "Structured income from communal agricultural activity with transparent revenue sharing",
                  "Training in modern, productive farming techniques applicable beyond the partnership",
                  "Cooperative governance structures that protect community interests and shared assets",
                  "Access to institutional markets and fair commercial pricing for all produce",
                  "Food security for community members from the food grown on their own farms",
                ],
              },
              {
                num: 3,
                title: "Impact Investors and Development Finance Partners",
                desc: "Agriculture is Africa's most impactful investment, generating returns in financial yield, food security, employment, community resilience, and SDG alignment simultaneously. Farms Empire offers structured investment opportunities in our communal farming enterprises with clear impact metrics and commercial return frameworks.",
                benefits: [],
              },
              {
                num: 4,
                title: "Government and Development Agencies",
                desc: "Partner with Farms Empire to design and deliver community agricultural development programs that create measurable impact at scale. We bring field-level expertise, community trust, and operational capacity to government agricultural initiatives.",
                benefits: [],
              },
            ].map((partner) => (
              <div
                key={partner.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {partner.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {partner.title}
                  </h3>
                  <p className="mt-2  leading-relaxed text-muted-foreground">
                    {partner.desc}
                  </p>
                  {partner.benefits.length > 0 && (
                    <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                      {partner.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2  text-muted-foreground"
                        >
                          <svg
                            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={4}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              How the Partnership Works
            </h2>
          </FadeIn>
          <Stagger
            staggerDelay={80}
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5"
          >
            {[
              {
                step: "1",
                title: "Initial Consultation",
                desc: "Contact us to discuss your land, community, or investment interest.",
              },
              {
                step: "2",
                title: "Due Diligence",
                desc: "We conduct a site assessment and structure a legally binding partnership agreement.",
              },
              {
                step: "3",
                title: "Farm Activation",
                desc: "Our team designs and establishes the farm, mobilizing community partners.",
              },
              {
                step: "4",
                title: "Active Management",
                desc: "We manage all farm operations with regular reporting to all partners.",
              },
              {
                step: "5",
                title: "Harvest and Returns",
                desc: "Commercial revenues are distributed to all partners per the agreement.",
              },
            ].map((item) => (
              <div key={item.step} className="group text-center">
                <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </span>
                <h3 className="mt-4 font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              The harvest does not wait. Neither should you.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's discuss how we can turn your idle land into a productive,
              income-generating asset.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
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
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
