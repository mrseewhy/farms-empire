import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { Stagger } from "../../components/Stagger";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Projects"
        subtitle="Active communal farming projects across Nigeria and Africa, driving food security and economic empowerment."
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
                    alt="Farms Empire projects across Africa"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
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
          </div>
        </div>
      </section>

      {/* Projects */}
      {siteConfig.projects.map((project, index) => (
        <section
          key={project.title}
          className={index % 2 === 0 ? "bg-muted py-20" : "bg-white py-20"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div>
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
                <div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {project.status}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {project.location}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="mt-6 flex gap-4">
                    {project.farmSize && (
                      <div className="flex-1 rounded-xl bg-muted p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Farm Size</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{project.farmSize}</p>
                      </div>
                    )}
                    {project.communityPartners && (
                      <div className="flex-1 rounded-xl bg-muted p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Community Partners</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{project.communityPartners}</p>
                      </div>
                    )}
                    {project.crops && (
                      <div className="flex-1 rounded-xl bg-muted p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Crops</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{project.crops}</p>
                      </div>
                    )}
                    {project.participants && (
                      <div className="flex-1 rounded-xl bg-muted p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Participants</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{project.participants}</p>
                      </div>
                    )}
                    {project.totalLand && (
                      <div className="flex-1 rounded-xl bg-muted p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Land</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{project.totalLand}</p>
                      </div>
                    )}
                    {project.focus && (
                      <div className="flex-1 rounded-xl bg-muted p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Focus</p>
                        <p className="mt-1 text-sm font-bold text-foreground">{project.focus}</p>
                      </div>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="mt-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Impact Achieved</h3>
                    <ul className="mt-3 space-y-2">
                      {project.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Our Reach at a Glance
              </h2>
            </div>
          </FadeIn>
          <Stagger staggerDelay={100} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { metric: "States of Operation", figure: "4 and growing" },
              { metric: "Hectares Under Management", figure: "500+ hectares" },
              { metric: "Community Farming Families", figure: "500+ families engaged" },
              { metric: "Land and Investment Partners", figure: "180+ active partners" },
              { metric: "Food Produced Annually", figure: "400+ tonnes" },
              { metric: "Youth Agripreneurs Trained", figure: "40+ launched" },
            ].map((item) => (
              <div
                key={item.metric}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <p className="text-2xl font-bold text-primary">{item.figure}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.metric}</p>
              </div>
            ))}
          </Stagger>
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
