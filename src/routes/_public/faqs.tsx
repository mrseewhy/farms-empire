import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { FadeIn } from "../../components/FadeIn";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Farms Empire" },
      { name: "description", content: "Quick answers to common questions about partnering with Farms Empire." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/faqs` },
      { property: "og:title", content: "FAQs | Farms Empire" },
      { property: "og:description", content: "Quick answers to common questions about partnering with Farms Empire." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FAQs | Farms Empire" },
      { name: "twitter:description", content: "Quick answers to common questions about partnering with Farms Empire." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/faqs` },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  {
    question: "How much land do I need to partner with Farms Empire?",
    answer:
      "We work with landowners and communities with any size of land depending on the crop or animals in perspective.",
  },
  {
    question: "Do I need farming experience to benefit from the partnership?",
    answer:
      "No. Our model is designed so that landowners and community partners do not need agricultural expertise. Our team manages all technical and operational aspects of the farm.",
  },
  {
    question: "How are returns calculated and disbursed?",
    answer:
      "Returns are calculated based on commercial revenues generated from each harvest cycle, minus agreed operational costs. The full structure is documented in the partnership agreement before any farm activity begins. Disbursements are made on an agreed schedule, typically quarterly or after each harvest.",
  },
  {
    question: "Is my land legally protected under the partnership?",
    answer:
      "Yes. All partnerships are governed by legally binding agreements drafted and reviewed by qualified legal professionals. Land titles and ownership rights remain fully with the landowner throughout the entire partnership term.",
  },
  {
    question: "How long is the partnership term?",
    answer:
      "Partnership terms are negotiated on a case-by-case basis, typically ranging from 1 to 5 years with renewal options. We work fully within your development timeline and plans.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form or call us directly to schedule your free initial consultation. We will assess your situation and recommend the best partnership structure for you.",
  },
];

function FAQPage() {
  useEffect(() => {
    document.title = "FAQs | Farms Empire";
  }, []);
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <PageHero
        title="FAQs"
        subtitle="Quick answers to common questions about partnering with Farms Empire."
      />

      {/* FAQs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <div className="group flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 sm:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We are here to help. Reach out to us and we will get back to you
              as soon as possible.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
