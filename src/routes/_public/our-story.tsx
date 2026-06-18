import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/our-story")({
  component: OurStoryPage,
});

function OurStoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl">Our Story</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Forged in the Field
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground">
            We did not arrive at this model from a textbook. We earned it.
          </p>

          <p>
            Before Farms Empire became the organization you see today; before the
            structured partnerships, the proven farm systems, the community
            cooperatives, and the harvest returns, there was something far more
            valuable than capital or credentials. There was experience. Raw,
            unfiltered, African experience.
          </p>

          <p>
            We entered this continent's agricultural terrain with vision, with
            passion, and with every intention of changing the story of food and
            farming in Africa. And Africa, in her characteristic way, tested us.
            She tested our systems. She tested our assumptions. She tested our
            patience, our capital, and our convictions.
          </p>

          <p>
            She showed us that farming in Africa is not a theory you can read in a
            report; it is a living, breathing, unpredictable, and profoundly human
            endeavour that demands more than knowledge. It demands wisdom. And
            wisdom, in Africa, has only one true teacher: experience.
          </p>

          <p>
            We have felt the sting of a harvest delayed by logistics no one warned
            us about. We have navigated land tenure complexities that no legal
            textbook fully captures. We have sat with partners and learned
            (sometimes the hard way) that trust is not given to organizations; it
            is earned, slowly, in the language of presence and consistency.
          </p>

          <p>
            We did not quit. We did not retreat. We went deeper.
          </p>

          <p>
            Every challenge became a data point. Every setback became a design
            brief. Every lesson that cost us something became a cornerstone of the
            model we have built today. We studied what failed and we understood
            why it failed. We studied what worked and we understood why it worked.
            And from that crucible of direct, firsthand African agricultural
            experience, Farms Empire emerged.
          </p>

          <p>
            Today, our model is not optimistic. It has been tested. It is proven.
          </p>

          <p>
            It is built on transparent engagements, the specific soil conditions,
            community dynamics, market realities, policy environments, and human
            factors that define agriculture in this part of the world. It accounts
            for what goes wrong, because we have seen what goes wrong. It is
            designed around the communities that make farming possible, because we
            have learned, without exception, that no farm survives without the full
            commitment of the people who work it.
          </p>

          <p>
            To every landowner and investor who trusts us with their most valuable
            asset, to every community that opens its doors to our partnership, to
            every investor who places their confidence and their capital in our
            hands, hear this with the certainty it is offered:
          </p>

          <blockquote>
            "You are not partnering with a company that is learning. You are
            partnering with a company that has already learned, and built something
            extraordinary from everything it learned."
          </blockquote>

          <p className="text-xl font-medium text-primary">
            The fire of Africa's agricultural terrain did not break us. It refined
            us. And what has been refined in fire does not bend easily.
          </p>

          <p className="text-2xl font-display text-primary">
            Communities Grow Empires. And this empire was built to last!
          </p>
        </div>
      </section>
    </main>
  );
}
