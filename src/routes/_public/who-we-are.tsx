import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";

export const Route = createFileRoute("/_public/who-we-are")({
  component: WhoWeArePage,
});

function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Who We Are"
        subtitle="Bringing together landowners, communities, and experts to build sustainable farms."
      />

      {/* Intro Grid 1 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-4/3 overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/about-2.jpg"
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
                  agricultural solutions company uniting landowners,
                  communities, and expert practitioners to build sustainable
                  farming enterprises that feed Africa and create lasting income
                  for partners.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  The organization is founded on a simple but powerful
                  conviction: "With so much undeveloped land across Africa, no
                  one should go hungry; and no land should go to waste!"
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Across Africa, millions of hectares of arable land lie
                  undeveloped, not because the land lacks potential, but because
                  many landowners believe land is only meant for buildings and
                  physical structures. At the same time, the continent faces
                  rising food insecurity, unemployment, and economic fragility.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Intro Grid 2 */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Bridging the Gap Between Untapped Land and Untapped Human
                  Potential
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We exist at the intersection of these two realities, to bridge
                  the gap between untapped land and untapped human potential
                  through the power of communal agriculture.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Registered and headquartered in Nigeria, but with operations
                  across Africa, Farms Empire brings together landowners, local
                  communities, agricultural experts, and strategic partners to
                  co-create thriving farming enterprises. Our model is built on
                  shared ownership, shared effort, and shared reward; ensuring
                  that the communities who grow our food are the first to
                  benefit from it.
                </p>
                <p className="mt-6 text-xl font-semibold text-primary">
                  We are not just a consultancy. We are a movement, one harvest
                  at a time.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/about-1.jpg"
                    alt="Communal farming in Africa"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/images/mission.jpg"
                  alt="Our Mission"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="font-display text-2xl font-bold text-primary">
                  Our Mission
                </h2>
                <p className="mt-4 flex-1 text-lg leading-relaxed text-muted-foreground">
                  To provide smallholder farmers and communities with expert
                  agricultural support, collective resources, and collaborative
                  farming opportunities that drives sustainable growth and
                  wealth creation.
                </p>
              </div>
            </div>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/images/vision.jpg"
                  alt="Our Vision"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="font-display text-2xl font-bold text-primary">
                  Our Vision
                </h2>
                <p className="mt-4 flex-1 text-lg leading-relaxed text-muted-foreground">
                  To build and support a network of 1,000 thriving farmers and
                  agricultural communities by 2030, strengthening food security
                  and driving sustainable economic development across Africa.
                </p>
              </div>
            </div>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Partnership",
                desc: "We believe no one grows alone. Every farm we build is rooted in relationships, trust, and mutual commitment.",
                icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
              },
              {
                title: "Integrity",
                desc: "We operate with full transparency in all land agreements, financial arrangements, and community partnerships.",
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
              {
                title: "Community",
                desc: "The communities we serve are not beneficiaries; they are co-owners, co-investors, and co-beneficiaries.",
                icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
              },
              {
                title: "Sustainability",
                desc: "We farm with the future in mind: environmentally responsible, economically viable, and socially inclusive.",
                icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group flex h-full flex-col rounded-xl border border-border bg-muted p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our Areas of Expertise
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Crop Cultivation & Animal Husbandry",
                icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z",
              },
              {
                title: "Agricultural Business & Value Chain Development",
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
              },
              {
                title: "Community Engagement & Cooperative Systems",
                icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
              },
              {
                title: "Financial Modelling & Investor Relations",
                icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
              },
              {
                title: "UN Sustainable Development Goals Implementation",
                icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
              },
              {
                title: "Market Access & Commercial Linkages",
                icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72l1.189-1.19A1.5 1.5 0 0119.36 3h1.25a1.5 1.5 0 011.5 1.5v1.25a1.5 1.5 0 01-1.5 1.5h-1.25a1.5 1.5 0 01-1.06-.44m-12.78 0a1.5 1.5 0 00-1.06.44L2.62 14.56A1.5 1.5 0 002.25 15.61V16.86a1.5 1.5 0 001.5 1.5h1.25a1.5 1.5 0 001.06-.44",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex h-full items-center gap-4 rounded-xl border border-border bg-muted px-5 py-5 transition-all duration-200 hover:shadow-md hover:border-primary/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
