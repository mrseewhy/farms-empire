import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/partner-with-us")({
  component: PartnerWithUsPage,
});

function PartnerWithUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl">Partner With Us</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Your Land. Our Expertise. One Harvest. Infinite Potential.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground">
            If you are not earning from your land, someone else is. Your land may
            be sitting idle, but your wealth does not have to. Partner with Farms
            Empire today, put your undeveloped land to work through communal
            farming, and watch it generate massive returns while you wait for
            development.
          </p>
        </div>
      </section>

      {/* Who Should Partner */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground">
            Who Should Partner With Us?
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Landowners and Property Investors",
                desc: "You own land in Nigeria or across Africa. It may be awaiting development, caught in planning processes, or simply lying idle. Farms Empire will partner with you to activate your land through our communal farming model; managing everything from farm design and community mobilization to harvest operations and commercial sales.",
                benefits: [
                  "A legally structured land use agreement with clear terms and return structures",
                  "Zero operational burden; Farms Empire manages all farm operations end to end",
                  "Regular farm performance reports and open site visit access",
                  "A share of commercial revenues from every harvest cycle",
                  "Enhanced land value through active agricultural development",
                  "Full financial transparency and accountability",
                ],
              },
              {
                title: "Communities and Farming Groups",
                desc: "Your community has people, local knowledge, and a desire for economic independence. Farms Empire brings the land access, expert management, cooperative structure, and market linkages that transform community farming potential into commercial agricultural enterprise.",
                benefits: [
                  "Structured income from communal agricultural activity",
                  "Training in modern, productive farming techniques",
                  "Cooperative governance structures that protect community interests",
                  "Access to institutional markets and fair commercial pricing",
                  "Food security for community members",
                ],
              },
              {
                title: "Impact Investors and Development Finance Partners",
                desc: "Agriculture is Africa's most impactful investment, generating returns in financial yield, food security, employment, community resilience, and SDG alignment simultaneously.",
                benefits: [],
              },
              {
                title: "Government and Development Agencies",
                desc: "Partner with Farms Empire to design and deliver community agricultural development programs that create measurable impact at scale.",
                benefits: [],
              },
            ].map((partner) => (
              <div key={partner.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{partner.title}</h3>
                <p className="mt-2 text-muted-foreground">{partner.desc}</p>
                {partner.benefits.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {partner.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 text-primary">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground">
          How the Partnership Works
        </h2>
        <div className="mt-8 space-y-4">
          {[
            { step: "1", title: "Initial Consultation", desc: "Contact us to discuss your land, community, or investment interest. We assess your situation and identify the best partnership model for you." },
            { step: "2", title: "Due Diligence and Agreement", desc: "We conduct a site assessment and structure a legally binding partnership agreement protecting all parties with clearly defined returns and responsibilities." },
            { step: "3", title: "Farm Activation", desc: "Our team designs and establishes the farm, mobilizing community partners, setting up infrastructure, and beginning the first production cycle." },
            { step: "4", title: "Active Management", desc: "We manage all farm operations with regular reporting on productivity, financials, and impact metrics delivered to all partners." },
            { step: "5", title: "Harvest and Returns", desc: "At every harvest, commercial revenues are distributed to all partners per the agreement. You earn your return. The community earns its income." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl">Book a Free Consultation</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            The harvest does not wait. Neither should you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
