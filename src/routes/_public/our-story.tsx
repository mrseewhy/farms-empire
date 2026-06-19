import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";

export const Route = createFileRoute("/_public/our-story")({
  component: OurStoryPage,
});

function OurStoryPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Story"
        subtitle="Before the structured partnerships and proven farm systems, there was raw, unfiltered African agricultural experience."
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/hero.jpg"
                    alt="Farms Empire journey"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Forged in the Field
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We did not arrive at this model from a textbook. We earned it.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Before Farms Empire became the organization you see today;
                  before the structured partnerships, the proven farm systems,
                  the community cooperatives, and the harvest returns, there was
                  something far more valuable than capital or credentials. There
                  was experience. Raw, unfiltered, African experience.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We entered this continent's agricultural terrain with vision,
                  with passion, and with every intention of changing the story of
                  food and farming in Africa. And Africa, in her characteristic
                  way, tested us.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  The Journey That Shaped Us
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  She showed us that farming in Africa is not a theory you can
                  read in a report; it is a living, breathing, unpredictable, and
                  profoundly human endeavour that demands more than knowledge. It
                  demands wisdom. And wisdom, in Africa, has only one true
                  teacher: experience.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We have felt the sting of a harvest delayed by logistics no one
                  warned us about. We have navigated land tenure complexities that
                  no legal textbook fully captures. We have sat with partners and
                  learned that trust is not given to organizations; it is earned,
                  slowly, in the language of presence and consistency.
                </p>
                <p className="mt-6 text-xl font-semibold text-primary">
                  We did not quit. We did not retreat. We went deeper.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/lush.jpg"
                    alt="Farms Empire agricultural experience"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                What We Built From Experience
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Every challenge became a data point. Every setback became a
                design brief. Every lesson that cost us something became a
                cornerstone of the model we have built today. And from that
                crucible of direct, firsthand African agricultural experience,
                Farms Empire emerged.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Today, our model is not optimistic. It has been tested. It is
                proven. It is built on transparent engagements, the specific soil
                conditions, community dynamics, market realities, policy
                environments, and human factors that define agriculture in this
                part of the world.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/about.jpg"
                    alt="Farms Empire promise"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <blockquote className="rounded-r-xl border-l-4 border-accent bg-accent/5 py-4 pr-6 pl-6">
                  <p className="text-lg italic text-foreground/80">
                    "You are not partnering with a company that is learning. You
                    are partnering with a company that has already learned, and
                    built something extraordinary from everything it learned."
                  </p>
                </blockquote>
                <p className="mt-6 text-xl font-semibold text-primary">
                  The fire of Africa's agricultural terrain did not break us. It
                  refined us. And what has been refined in fire does not bend
                  easily.
                </p>
                <p className="mt-4 text-xl font-display font-bold text-primary sm:text-2xl">
                  Communities Grow Empires. And this empire was built to last!
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
