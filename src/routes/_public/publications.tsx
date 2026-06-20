import { createFileRoute } from "@tanstack/react-router";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/publications")({
  head: () => ({
    meta: [
      { title: "Publications | Farms Empire" },
      { name: "description", content: "Research, analysis, and knowledge from the field of communal agriculture." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/publications` },
      { property: "og:title", content: "Publications | Farms Empire" },
      { property: "og:description", content: "Research, analysis, and knowledge from the field of communal agriculture." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Publications | Farms Empire" },
      { name: "twitter:description", content: "Research, analysis, and knowledge from the field of communal agriculture." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/publications` },
    ],
  }),
  component: PublicationsPage,
});

const publications = [
  {
    num: "1",
    title: "Communities as Agricultural Enterprises",
    subtitle: "A Framework for Communal Farming in Sub-Saharan Africa",
    series: "Farms Empire Research Series | 2023",
    desc: "A comprehensive framework examining how community-level agricultural enterprises can be structured, governed, and sustained for long-term productivity and social impact. Drawing from Farms Empire's operational experience and a review of successful communal farming models across Sub-Saharan Africa, this paper presents a replicable model for community agricultural enterprise development.",
    link: "#",
  },
  {
    num: "2",
    title: "Idle Land, Active Returns",
    subtitle: "Making the Case for Agricultural Land Partnerships in Nigeria",
    series: "Farms Empire Policy Brief | 2023",
    desc: "With millions of hectares of agricultural land lying undeveloped across Nigeria, this policy brief makes the economic, social, and environmental case for structured land partnership programs that activate idle land while generating income for landowners and food security for communities.",
    link: "#",
  },
  {
    num: "3",
    title: "Women at the Centre",
    subtitle: "Gender-Inclusive Communal Farming and Its Impact on Household Food Security",
    series: "Farms Empire Impact Report | 2023",
    desc: "Drawing from Farms Empire's Women's Agricultural Cooperative Development Programme, this impact report documents the transformative effect of gender-inclusive communal farming on household food security, women's economic empowerment, and cooperative sustainability.",
    link: "#",
  },
  {
    num: "4",
    title: "Africa's $350 Billion Opportunity",
    subtitle: "Closing the Agricultural Investment Gap to Achieve SDG 2",
    series: "Farms Empire Thought Leadership Paper | 2024",
    desc: "A data-driven examination of Africa's agricultural investment gap and a practical framework for mobilizing the private sector, development finance institutions, and community capital to close it, with a specific focus on communal farming as a scalable, high-impact investment vehicle.",
    link: "#",
  },
  {
    num: "5",
    title: "From Field to Table",
    subtitle: "Building Agricultural Value Chains That Serve Communities First",
    series: "Farms Empire Practitioner Guide | 2024",
    desc: "A practical guide for agricultural practitioners, cooperative managers, and community development workers on building agricultural value chains that maximize returns to smallholder farmers, from crop selection and post-harvest handling to market access and pricing negotiation.",
    link: "#",
  },
];

function PublicationsPage() {
  useDocumentTitle("Publications | Farms Empire");
  return (
    <main className="min-h-screen">
      <PageHero
        title="Publications"
        subtitle="Research, analysis, and knowledge from the field of communal agriculture."
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
                    alt="Farms Empire publications"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Insights, Research & Knowledge from the Field
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Farms Empire is not only a practitioner of sustainable communal
                  agriculture, we are a thought leader in Africa's agricultural
                  development space. Our publications bring together field
                  research, policy analysis, community impact documentation, and
                  practical guides to advance the knowledge base of African
                  agriculture.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Featured Publications
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-6">
            {publications.map((pub, index) => (
              <FadeIn key={pub.num} direction="up" delay={index * 100}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {pub.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {pub.subtitle}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {pub.series}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {pub.desc}
                      </p>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Read Publication
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
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Informed */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Stay Informed
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Subscribe to the Farms Empire Knowledge Hub to receive our
                  latest publications, field reports, impact updates, and
                  agricultural insights directly to your inbox.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We also welcome contributions from researchers, agricultural
                  practitioners, policy experts, and community development
                  professionals.
                </p>
                <p className="mt-6 text-lg font-medium text-foreground">
                  To submit a contribution proposal, contact:{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email.media}`}
                    className="font-bold text-primary hover:underline"
                  >
                    {siteConfig.contact.email.media}
                  </a>
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/about.jpg"
                    alt="Farms Empire publications"
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
