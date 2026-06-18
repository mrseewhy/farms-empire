import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/who-we-are")({
  component: WhoWeArePage,
});

function WhoWeArePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl">Who We Are</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            We Are Africa's Communal Agriculture Movement
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p>
            Farms Empire and Agricultural Services is a purpose-driven agricultural
            solutions company uniting landowners, communities, and expert practitioners
            to build sustainable farming enterprises that feed Africa and create lasting
            income for partners.
          </p>

          <p>
            The organization is founded on a simple but powerful conviction: "With so
            much undeveloped land across Africa, no one should go hungry; and no land
            should go to waste!"
          </p>

          <p>
            Across Africa, millions of hectares of arable land lie undeveloped, not
            because the land lacks potential, but because many landowners believe land
            is only meant for buildings and physical structures. At the same time, the
            continent faces rising food insecurity, unemployment, and economic fragility.
          </p>

          <p>
            We exist at the intersection of these two realities, to bridge the gap
            between untapped land and untapped human potential through the power of
            communal agriculture.
          </p>

          <p>
            Registered and headquartered in Nigeria, but with operations across Africa,
            Farms Empire brings together landowners, local communities, agricultural
            experts, and strategic partners to co-create thriving farming enterprises.
            Our model is built on shared ownership, shared effort, and shared reward;
            ensuring that the communities who grow our food are the first to benefit
            from it.
          </p>

          <p className="text-xl font-medium text-primary">
            We are not just a consultancy. We are a movement — one harvest at a time.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-display text-2xl text-primary">Mission</h2>
            <p className="mt-4 text-muted-foreground">
              To provide smallholder farmers and communities with expert agricultural
              support, collective resources, and collaborative farming opportunities
              that drives sustainable growth and wealth creation.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-display text-2xl text-primary">Vision</h2>
            <p className="mt-4 text-muted-foreground">
              To build and support a network of 1,000 thriving farmers and agricultural
              communities by 2030, strengthening food security and driving sustainable
              economic development across Africa.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="font-display text-3xl text-foreground">What We Stand For</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Partnership",
                desc: "We believe no one grows alone. Every farm we build is rooted in relationships, trust, and mutual commitment.",
              },
              {
                title: "Integrity",
                desc: "We operate with full transparency in all land agreements, financial arrangements, and community partnerships.",
              },
              {
                title: "Community",
                desc: "The communities we serve are not beneficiaries; they are co-owners, co-investors, and co-beneficiaries.",
              },
              {
                title: "Sustainability",
                desc: "We farm with the future in mind: environmentally responsible, economically viable, and socially inclusive.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mt-16">
          <h2 className="font-display text-3xl text-foreground">Our Areas of Expertise</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>Crop cultivation and Animal husbandry</li>
            <li>Agricultural business and value chain development</li>
            <li>Community engagement and cooperative systems</li>
            <li>Financial modelling, partnerships and investor relations</li>
            <li>UN Sustainable Development Goals implementation</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
