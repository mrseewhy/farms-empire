import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl">Contact</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let's Grow Something Together
          </p>
        </div>
      </section>

      {/* Placeholder */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-muted-foreground">
          Contact form coming soon — see Issue #2.4.
        </p>
      </section>
    </main>
  );
}
