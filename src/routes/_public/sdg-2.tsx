import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/sdg-2")({
  component: SDG2Page,
});

function SDG2Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl">UN SDG 2</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Farming Our Way to Zero Hunger
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground">
            Farms Empire is Africa's leading community-powered intervention
            organization working to achieve United Nations Sustainable Development
            Goal 2: Zero Hunger, through sustainable communal agriculture,
            cooperative enterprise, and food systems transformation.
          </p>

          <h2>What is UN SDG 2?</h2>
          <p>
            Adopted by all 193 United Nations Member States as part of the 2030
            Agenda for Sustainable Development, SDG 2 calls on the world to:
          </p>
          <blockquote>
            "End hunger, achieve food security and improved nutrition, and promote
            sustainable agriculture by 2030."
          </blockquote>
          <p>
            SDG 2 is not simply about feeding people today — it is about building
            the agricultural systems, inclusive institutions, and economic
            structures that make hunger permanently impossible.
          </p>
        </div>
      </section>

      {/* Crisis Numbers */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground">
            Africa's Food Security Crisis: The Numbers
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: "$350B", label: "Africa's annual food and agricultural market" },
              { stat: "40%", label: "Increase needed in agricultural production by 2030" },
              { stat: "$11B/yr", label: "Additional investment needed to close the gap" },
              { stat: "250M+", label: "Africans currently classified as food insecure" },
              { stat: "60%", label: "Of the world's uncultivated arable land is in Africa" },
            ].map((item) => (
              <div key={item.stat} className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="text-3xl font-bold text-primary">{item.stat}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-lg font-medium text-foreground">
            The gap between Africa's potential and its food reality is not a
            resource problem. It is a systems problem.
          </p>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground">
          How Farms Empire Advances SDG 2
        </h2>
        <div className="mt-8 space-y-4">
          {[
            { target: "Target 2.1: End Hunger", desc: "Our communal farms increase locally grown food availability in every community we serve" },
            { target: "Target 2.2: End Malnutrition", desc: "Diversified crop production improves nutritional quality and variety across partner communities" },
            { target: "Target 2.3: Smallholder Productivity", desc: "Expert support, shared resources, and market access systematically increase smallholder output and income" },
            { target: "Target 2.4: Sustainable Agriculture", desc: "We integrate soil health, water conservation, IPM, and crop rotation in all farm operations" },
            { target: "Target 2.a: Rural Investment", desc: "We mobilize private capital from landowners and investors into rural agricultural systems" },
            { target: "Target 2.c: Fair Markets", desc: "We build direct market linkages that remove exploitative intermediaries and ensure fair farmer returns" },
          ].map((item) => (
            <div key={item.target} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{item.target}</h3>
              <p className="mt-1 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2>Our Commitment</h2>
          <p>
            Farms Empire formally aligns all its programs, projects, and
            partnerships with the United Nations SDG 2 framework. We maintain
            rigorous impact measurement systems that track our contribution to
            each SDG 2 target, and we report transparently to our partners,
            stakeholders, and the communities we serve.
          </p>
          <blockquote>
            "The hunger age will not end because we produce more food; it will
            end because we build the systems that make hunger impossible."
          </blockquote>
        </div>
      </section>
    </main>
  );
}
