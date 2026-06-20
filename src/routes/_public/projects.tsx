import { createFileRoute } from "@tanstack/react-router";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Farms Empire" },
      { name: "description", content: "Real farms, real communities, real impact across Nigeria and Africa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/projects` },
      { property: "og:title", content: "Our Projects | Farms Empire" },
      { property: "og:description", content: "Real farms, real communities, real impact across Nigeria and Africa." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Projects | Farms Empire" },
      { name: "twitter:description", content: "Real farms, real communities, real impact across Nigeria and Africa." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/projects` },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    num: 1,
    title: "The Pioneer Community Farm Initiative",
    image: "/images/comm.jpg",
    details: [
      { label: "Location", value: "Ogun State, Nigeria" },
      { label: "Farm Size", value: "50 Hectares" },
      {
        label: "Community Partners",
        value: "3 rural communities, 120 farming families",
      },
      { label: "Crops", value: "Cassava, Maize, Vegetables" },
      { label: "Status", value: "Active and Operational" },
    ],
    desc: "The Pioneer Community Farm Initiative is Farms Empire's flagship communal farming project, a living demonstration of what becomes possible when land, community, and expert management come together. Launched in partnership with local landowners and three neighboring communities, this project has transformed formerly idle agricultural land into a fully operational, commercially productive farm enterprise.\n\nCommunity farming families earn consistent income from their labour and cooperative shares, while landowners receive agreed returns from land that previously generated nothing. The farm produces staple crops for local consumption and regional markets, directly contributing to food availability in the surrounding area.",
    impact: [
      "120 farming families earning consistent agricultural income",
      "50 hectares of previously idle land fully activated",
      "Over 200 tonnes of food produced annually",
      "3 communities with improved access to locally grown food",
      "Cooperative governance structure established and operational",
    ],
  },
  {
    num: 2,
    title: "Women's Agricultural Cooperative Development Programme",
    image: "/images/coop.jpg",
    details: [
      { label: "Location", value: "Oyo State, Nigeria" },
      { label: "Participants", value: "85 women farmers" },
      {
        label: "Focus",
        value: "Vegetable farming, cooperative economics, market access",
      },
      { label: "Status", value: "Active - Year 2" },
    ],
    desc: "Women constitute over 60% of Africa's smallholder farmers yet receive disproportionately less support, resources, and income from agriculture. Farms Empire launched the Women's Agricultural Cooperative Development Programme to close this gap, providing land access, full farm setup, cooperative governance training, and direct market linkages to institutional buyers.\n\nParticipants now operate as a formally registered cooperative, collectively owning equipment, jointly managing production, and equally sharing commercial returns.",
    impact: [
      "85 women farmers with structured income from agriculture",
      "Cooperative formally registered and fully self-governing",
      "Average household income increased by 40% among participants",
      "3 institutional offtakers contracted for consistent market access",
    ],
  },
  {
    num: 3,
    title: "Absentee Landowner Partnership Programme",
    image: "/images/absentee.jpg",
    details: [
      { label: "Location", value: "Multiple States, Nigeria" },
      { label: "Partners", value: "18 landowners" },
      { label: "Total Land Activated", value: "200 Hectares" },
      { label: "Status", value: "Ongoing - Rolling Enrolment" },
    ],
    desc: "Many of Nigeria's most productive agricultural lands are owned by urban professionals and investors who neither live near their land nor have the time or expertise to develop it. Farms Empire's Absentee Landowner Partnership Programme was designed for this exact group, a fully managed agricultural partnership that activates idle land, generates returns, and requires zero operational effort from the landowner.",
    impact: [
      "120 hectares of idle land activated across multiple states",
      "18 landowners earning regular income from previously dormant assets",
      "Over 300 community farmers engaged and earning from the farms",
      "Structured legal agreements in place protecting all parties",
    ],
  },
  {
    num: 4,
    title: "School Farm & Youth Agripreneur Initiative",
    image: "/images/school.jpg",
    details: [
      { label: "Location", value: "Lagos State, Nigeria" },
      {
        label: "Participants",
        value: "500 secondary school students + 40 youth agripreneurs",
      },
      { label: "Age Range", value: "14-30 years" },
      {
        label: "Focus",
        value:
          "Agricultural education, youth entrepreneurship, food production",
      },
    ],
    desc: "The future of African agriculture depends on the next generation. This initiative embeds practical agricultural education in secondary schools and runs structured agripreneurship training for young people aged 18-30, equipping them to launch and manage their first commercial farming enterprises.",
    impact: [
      "200 students actively engaged in practical agricultural education",
      "40 youth agripreneurs launched their first commercial farm ventures",
      "8 schools with active school farm partnerships",
      "Agricultural career pathways opened for youth in partner communities",
    ],
  },
];

function ProjectsPage() {
  useDocumentTitle("Projects | Farms Empire");
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Projects"
        subtitle="Real farms, real communities, real impact across Nigeria and Africa."
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Growing Impact, One Community at a Time
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  From pilot farms to multi-community agricultural enterprises,
                  Farms Empire is actively building the infrastructure of food
                  security and economic empowerment across Africa. Here is a
                  window into the work we are doing on the ground.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/proj-1.jpg"
                    alt="Farms Empire projects across Africa"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project, index) => (
        <section
          key={project.num}
          className={index % 2 === 0 ? "bg-muted py-20" : "bg-white py-20"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className={index % 2 !== 0 ? "order-2 lg:order-1" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                <div className={index % 2 !== 0 ? "order-1 lg:order-2" : ""}>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Project {project.num}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                    {project.title}
                  </h2>

                  {/* Details */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.details.map((detail) => (
                      <div
                        key={detail.label}
                        className="rounded-xl bg-card border border-border p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {detail.label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-foreground">
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="mt-6">
                    {project.desc.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="mt-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                      Impact Achieved
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {project.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Our Reach at a Glance */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Our Reach at a Glance
              </h2>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { metric: "States of Operation", figure: "4 and growing" },
              { metric: "Hectares Under Management", figure: "500+ hectares" },
              {
                metric: "Community Farming Families",
                figure: "500+ families engaged",
              },
              {
                metric: "Land and Investment Partners",
                figure: "180+ active partners",
              },
              { metric: "Food Produced Annually", figure: "400+ tonnes" },
              { metric: "Youth Agripreneurs Trained", figure: "40+ launched" },
            ].map((item) => (
              <div
                key={item.metric}
                className="rounded-xl border border-border bg-muted p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <p className="text-2xl font-bold text-primary">{item.figure}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <blockquote className="text-center">
              <p className="text-xl italic leading-relaxed text-foreground sm:text-2xl">
                "Our projects are proof of a principle: when communities own the
                farm, they own the outcome, and they protect it, grow it, and
                sustain it beyond any single season."
              </p>
              <footer className="mt-6 text-sm font-medium text-muted-foreground">
                - Founder/CEO, Farms Empire
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
