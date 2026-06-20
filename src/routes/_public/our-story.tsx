import { createFileRoute } from "@tanstack/react-router";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Farms Empire" },
      { name: "description", content: "We built this through years of real farming, not from a textbook." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/our-story` },
      { property: "og:title", content: "Our Story | Farms Empire" },
      { property: "og:description", content: "We built this through years of real farming, not from a textbook." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Story | Farms Empire" },
      { name: "twitter:description", content: "We built this through years of real farming, not from a textbook." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/our-story` },
    ],
  }),
  component: OurStoryPage,
});

function OurStoryPage() {
  useDocumentTitle("Our Story | Farms Empire");
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Story"
        subtitle="We built this through years of real farming, not from a textbook."
      />

      {/* Section 1 - Image Left */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/story-1.jpg"
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
                  Before Farms Empire became the organization you see today;
                  before the structured partnerships, the proven farm systems,
                  the community cooperatives, and the harvest returns, there was
                  something far more valuable than capital or credentials. There
                  was experience. Raw, unfiltered, African experience.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We entered this continent's agricultural terrain with vision,
                  with passion, and with every intention of changing the story
                  of food and farming in Africa.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Right */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Africa Tested Us
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  And Africa, in her characteristic way, tested us. She tested
                  our systems. She tested our assumptions. She tested our
                  patience, our capital, and our convictions. She showed us that
                  farming in Africa is not a theory you can read in a report; it
                  is a living, breathing, unpredictable, and profoundly human
                  endeavour that demands more than knowledge. It demands wisdom.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  And wisdom, in Africa, has only one true teacher: experience.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/story-2.jpg"
                    alt="Agricultural experience in Africa"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3 - Image Left */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/story-3.jpg"
                    alt="Farms Empire challenges"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  We Did Not Quit
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We have felt the sting of a harvest delayed by logistics no
                  one warned us about. We have navigated land tenure
                  complexities that no legal textbook fully captures. We have
                  sat with partners and learned, sometimes the hard way, that
                  trust is not given to organizations; it is earned, slowly, in
                  the language of presence and consistency.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We have watched promising agricultural ventures crumble not
                  because the soil was bad or the rains failed, but because the
                  human and commercial systems around them were not built for
                  the realities of this terrain.
                </p>
                <p className="mt-6 text-xl font-semibold text-primary">
                  We did not quit. We did not retreat. We went deeper.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 4 - Image Right */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  What We Built From Experience
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Every challenge became a data point. Every setback became a
                  design brief. Every lesson that cost us something became a
                  cornerstone of the model we have built today. We studied what
                  failed and we understood why it failed. We studied what worked
                  and we understood why it worked.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  And from that crucible of direct, firsthand African
                  agricultural experience, Farms Empire emerged, not as a
                  company that believes it has the answers, but as one that has
                  lived the questions long enough to build answers that hold.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Today, our model is not optimistic. It has been tested. It is
                  proven. It is built on transparent engagements, the specific
                  soil conditions, community dynamics, market realities, policy
                  environments, and human factors that define agriculture in
                  this part of the world.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/story-4.jpg"
                    alt="Farms Empire proven model"
                    className="h-full w-full object-top object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5 - Promise - Image Left */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/story-5.jpg"
                    alt="Farms Empire promise"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Our Promise
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  To every landowner and investor who trusts us with their most
                  valuable asset, to every community that opens its doors to our
                  partnership, to every investor who places their confidence and
                  their capital in our hands, hear this with the certainty it is
                  offered:
                </p>
                <blockquote className="mt-6 rounded-r-xl border-l-4 border-accent bg-accent/5 py-4 pr-6 pl-6">
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
