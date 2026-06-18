import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/why-ujamaa")({
  component: WhyUjamaaPage,
});

function WhyUjamaaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl">Why Ujamaa?</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            The Philosophy Behind Our Model
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p>
            The word Ujamaa is Swahili for "familyhood" — a philosophy rooted in
            the belief that a community which works together, owns together, and
            grows together will always produce more than any individual working
            alone.
          </p>

          <p>
            Coined and championed by Julius Nyerere, the visionary founding father
            of Tanzania, Ujamaa was more than a political idea. It was a
            declaration that Africa's greatest strength has never been its land or
            its resources alone — it has always been its people, and what those
            people are capable of when they are united by shared purpose, shared
            labour, and shared reward.
          </p>

          <p className="text-xl font-medium text-primary">
            At Farms Empire, we believe Ujamaa is not history. It is a STRATEGY!
          </p>

          <p>
            Communal agriculture is farming organized around communities, powered
            by collective effort, and structured to deliver shared prosperity. It
            is, we have found, the single most effective agricultural model for the
            African context. It distributes risk. It multiplies productivity. It
            builds the kind of deep community ownership that keeps farms productive
            long after any external support has withdrawn.
          </p>

          <p>
            Where individual farming is vulnerable, communal farming is resilient.
            Where individual farming is limited by one person's capital and
            capacity, communal farming is amplified by the strength of many. Where
            individual farming feeds a household, communal farming feeds a
            community, and generates the commercial surplus that creates real
            wealth.
          </p>

          <p>
            This is why every farm we build, every partnership we structure, and
            every community we mobilize is anchored in the Ujamaa spirit; because
            we have seen, with our own eyes and on our own farms, that when
            communities grow together, everyone wins. Partners earn. Communities
            prosper. And Africa moves closer to the day when hunger is no longer
            part of its story.
          </p>

          <blockquote>
            For our investors, Ujamaa is not 'idealism'. It is your COMPETITIVE
            ADVANTAGE.
          </blockquote>

          <p>
            The communal model is why our farms are more productive, more
            resilient, and more commercially sustainable than conventional
            alternatives. It is why our community partners protect and invest in
            the farms they co-own. And it is why Farms Empire is able to offer
            investors something rare in African agriculture — a model that is both
            deeply human and consistently profitable.
          </p>

          <p className="text-2xl font-display text-primary">
            Communities grow empires. Ujamaa showed us how.
          </p>
        </div>
      </section>
    </main>
  );
}
