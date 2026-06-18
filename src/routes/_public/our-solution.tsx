import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/our-solution")({
  component: OurSolutionPage,
});

function OurSolutionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl">Our Solution</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Turning Idle Land Into Living Enterprises
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground">
            Farms Empire delivers end-to-end agricultural solutions from expert
            consultancy and farm design to community mobilization, active farm
            management, and return-on-investment delivery for our partners.
          </p>

          <p>
            Africa loses billions of dollars in agricultural potential every year,
            not because the land is absent; but because the systems, expertise, and
            community coordination needed to activate it are missing. The result:
            landowners earn nothing from their assets, communities go hungry, and
            Africa's agricultural promise remains largely unrealized.
          </p>

          <p className="text-xl font-medium text-primary">
            Farms Empire changes that!
          </p>
        </div>
      </section>

      {/* The Model */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground">
            Our Model: The Communal Farming Partnership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our unique Communal Farming Partnership Model brings together four
            essential elements that no single stakeholder could achieve alone:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { element: "Land", contributor: "Landowners & Property Investors", what: "Undeveloped or idle arable land activated under structured agreement" },
              { element: "Community", contributor: "Local Farming Communities", what: "Labour, local knowledge, community trust, and shared stake in outcomes" },
              { element: "Expertise", contributor: "Farms Empire Technical Team", what: "Agronomy, farm design, crop management, and commercial operations" },
              { element: "Market Access", contributor: "Farms Empire Commercial Division", what: "Offtaker relationships, value chain links, retail and export channels" },
            ].map((item) => (
              <div key={item.element} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary">{item.element}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{item.contributor}</p>
                <p className="mt-2 text-muted-foreground">{item.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground">Our Services</h2>
        <div className="mt-8 space-y-6">
          {[
            { num: "1", title: "Agricultural Consultancy", desc: "Expert advisory services for individual farmers, cooperatives, agribusinesses, and government agencies seeking to optimize agricultural productivity and enterprise sustainability." },
            { num: "2", title: "Farm Design and Setup", desc: "End-to-end farm establishment, from soil testing and crop selection to infrastructure setup, irrigation design, and operational planning." },
            { num: "3", title: "Communal Farm Management", desc: "We actively manage farms on behalf of our landowner and community partners: handling all operational, technical, and commercial activities while delivering agreed returns." },
            { num: "4", title: "Community Mobilization and Cooperative Development", desc: "We identify, train, and organize farming communities into productive cooperative units with clear governance, defined roles, and shared accountability structures." },
            { num: "5", title: "Agricultural Training and Capacity Building", desc: "We equip community farmers with practical skills in modern farming techniques, post-harvest handling, cooperative management, and agricultural business fundamentals." },
            { num: "6", title: "Investor Engagement and Land Asset Optimization", desc: "For landowners and property investors, we provide structured agricultural partnerships that generate consistent income from land awaiting development." },
          ].map((service) => (
            <div key={service.num} className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                {service.num}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-1 text-muted-foreground">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
