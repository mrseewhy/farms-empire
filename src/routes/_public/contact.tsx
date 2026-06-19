import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";

export const Route = createFileRoute("/_public/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="Whether you are a landowner, community representative, or investor, we would love to hear from you."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground">
            Contact form coming soon. See Issue #2.4.
          </p>
        </div>
      </section>
    </main>
  );
}