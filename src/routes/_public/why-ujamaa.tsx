import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";

export const Route = createFileRoute("/_public/why-ujamaa")({
  component: WhyUjamaaPage,
});

function WhyUjamaaPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Why Ujamaa?"
        subtitle="The Swahili philosophy of familyhood rooted in the belief that communities working together always produce more than any individual."
      />

      {/* What is Ujamaa */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/uj-1.jpg"
                    alt="Ujamaa philosophy of communal farming"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  What is Ujamaa?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  The word Ujamaa is Swahili for "familyhood", a philosophy
                  rooted in the belief that a community which works together,
                  owns together, and grows together will always produce more
                  than any individual working alone.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Coined and championed by Julius Nyerere, the visionary
                  founding father of Tanzania, Ujamaa was more than a political
                  idea. It was a declaration that Africa's greatest strength has
                  never been its land or its resources alone, it has always been
                  its people, and what those people are capable of when they are
                  united by shared purpose, shared labour, and shared reward.
                </p>
                <p className="mt-6 text-xl font-semibold text-primary">
                  At Farms Empire, we believe Ujamaa is not history. It is a
                  STRATEGY.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  Why Communal Farming Works
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Communal agriculture is farming organized around communities,
                  powered by collective effort, and structured to deliver shared
                  prosperity. It is the single most effective agricultural model
                  for the African context.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  It distributes risk. It multiplies productivity. It builds the
                  kind of deep community ownership that keeps farms productive
                  long after any external support has withdrawn. And it creates
                  the scale and consistency that investors need to see reliable,
                  sustainable returns from agricultural enterprise.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/uj-2.jpg"
                    alt="Communal farming in action"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Individual vs Communal */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Individual vs Communal
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                individual: "Vulnerable",
                communal: "Resilient",
                desc: "Where individual farming is vulnerable, communal farming is resilient.",
              },
              {
                individual: "Limited",
                communal: "Amplified",
                desc: "Where individual farming is limited by one person's capital and capacity, communal farming is amplified by the strength of many.",
              },
              {
                individual: "Feeds a Household",
                communal: "Feeds a Community",
                desc: "Where individual farming feeds a household, communal farming feeds a community, and generates the commercial surplus that creates real wealth.",
              },
            ].map((item) => (
              <div
                key={item.communal}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">
                    {item.individual}
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <span className="text-sm font-bold text-primary">
                    {item.communal}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ujamaa Effect */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  The Ujamaa Effect
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  This is why every farm we build, every partnership we
                  structure, and every community we mobilize is anchored in the
                  Ujamaa spirit; because we have seen, with our own eyes and on
                  our own farms, that when communities grow together, everyone
                  wins. Partners earn. Communities prosper. And Africa moves
                  closer to the day when hunger is no longer part of its story.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/uj-3.jpg"
                    alt="The Ujamaa effect in farming communities"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Investor Advantage */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-primary/10">
                  <img
                    src="/images/uj-4.jpg"
                    alt="Ujamaa as competitive advantage"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <blockquote className="rounded-r-xl border-l-4 border-accent bg-accent/5 py-4 pr-6 pl-6">
                  <p className="text-lg italic text-foreground/80">
                    For our investors, Ujamaa is not 'idealism'. It is your
                    COMPETITIVE ADVANTAGE.
                  </p>
                </blockquote>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  The communal model is why our farms are more productive, more
                  resilient, and more commercially sustainable than conventional
                  alternatives. It is why our community partners protect and
                  invest in the farms they co-own.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  And it is why Farms Empire is able to offer investors
                  something rare in African agriculture, a model that is both
                  deeply human and consistently profitable.
                </p>
                <p className="mt-6 text-xl font-display font-bold text-primary sm:text-2xl">
                  Communities grow empires. Ujamaa showed us how.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
