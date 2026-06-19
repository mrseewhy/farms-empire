import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";

export const Route = createFileRoute("/_public/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">Last Updated: June 2026</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">1. Introduction</h2>
            <p>
              Farms Empire and Agricultural Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">2. Information We Collect</h2>
            <p>We may collect information about you in various ways, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when filling out forms or contacting us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to enhance your experience on our website.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send you updates about our programs, partnerships, and agricultural initiatives.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to operate our website, conduct our business, or serve you, provided those parties agree to keep this information confidential.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Opt out of receiving marketing communications from us.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@farmsempire.africa" className="text-primary hover:underline">info@farmsempire.africa</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
