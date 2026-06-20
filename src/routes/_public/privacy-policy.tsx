import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../../components/PageHero";
import { siteConfig } from "../../lib/config";

export const Route = createFileRoute("/_public/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Farms Empire" },
      { name: "description", content: "How we collect, use, and protect your personal information." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteConfig.url}/privacy-policy` },
      { property: "og:title", content: "Privacy Policy | Farms Empire" },
      { property: "og:description", content: "How we collect, use, and protect your personal information." },
      { property: "og:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | Farms Empire" },
      { name: "twitter:description", content: "How we collect, use, and protect your personal information." },
      { name: "twitter:image", content: `${siteConfig.url}/images/farmsempire-card.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${siteConfig.url}/privacy-policy` },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">
              Effective Date: May 2026
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Introduction
            </h2>
            <p>
              Farms Empire and Agricultural Services Limited ("Farms Empire,"
              "we," "us," or "our") is committed to protecting the privacy and
              security of all individuals who interact with our website,
              services, and partnership programs. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website at www.farmsempire.africa, engage with our
              communal farming partnerships, subscribe to our communications, or
              otherwise interact with us.
            </p>
            <p>
              By accessing or using our website and services, you consent to the
              practices described in this Privacy Policy. If you do not agree
              with the terms of this policy, please do not access or use our
              website.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Information We Collect
            </h2>
            <p>We may collect the following categories of information:</p>

            <h3 className="font-display text-xl font-bold text-foreground mt-6">
              Personal Information You Provide to Us
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Physical or mailing address</li>
              <li>Organization or community name</li>
              <li>
                Role or capacity (e.g., landowner, community representative,
                investor, government agency)
              </li>
              <li>
                Land ownership and property details submitted for partnership
                purposes
              </li>
              <li>
                Financial and payment information related to partnership
                contributions, subscriptions, or transactions
              </li>
              <li>
                Any other information you voluntarily submit through our contact
                forms, partnership applications, or correspondence
              </li>
            </ul>

            <h3 className="font-display text-xl font-bold text-foreground mt-6">
              Information Collected Automatically
            </h3>
            <p>
              When you visit our website, we may automatically collect certain
              technical information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>
                Cookies and similar tracking technologies (see Cookies and
                Tracking Technologies section below)
              </li>
            </ul>

            <h3 className="font-display text-xl font-bold text-foreground mt-6">
              Information from Third Parties
            </h3>
            <p>
              We may receive information about you from third parties,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Partner farms and cooperative organizations</li>
              <li>Payment processors and financial institutions</li>
              <li>
                Publicly available sources, where relevant to verifying
                landownership or partnership eligibility
              </li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To process and manage land partnership agreements, communal
                farming arrangements, and cooperative subscriptions
              </li>
              <li>
                To communicate with you regarding your partnership, inquiries,
                or service requests
              </li>
              <li>
                To process payments and manage subscription-based programs
                (including seasonal livestock and produce savings plans)
              </li>
              <li>
                To improve our website, services, and overall user experience
              </li>
              <li>
                To send updates, newsletters, publications, and promotional
                communications, where you have consented to receive them
              </li>
              <li>
                To comply with applicable legal, regulatory, and contractual
                obligations
              </li>
              <li>
                To detect, prevent, and address fraud, security issues, or
                technical problems
              </li>
              <li>
                To conduct internal research, analytics, and impact assessment
                related to our agricultural and community development programs
              </li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Legal Basis for Processing
            </h2>
            <p>
              We process your personal information based on one or more of the
              following legal grounds:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Consent</strong> — Where you have given clear consent
                for us to process your information for a specific purpose
              </li>
              <li>
                <strong>Contractual Necessity</strong> — Where processing is
                necessary to fulfil a partnership agreement or service you have
                requested
              </li>
              <li>
                <strong>Legal Obligation</strong> — Where we are required to
                process your information to comply with applicable law
              </li>
              <li>
                <strong>Legitimate Interest</strong> — Where processing is
                necessary for our legitimate business interests, provided this
                does not override your rights and freedoms
              </li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>With Partner Farms and Cooperatives</strong> — To
                facilitate land partnerships, communal farming arrangements, and
                subscription-based livestock or produce programs
              </li>
              <li>
                <strong>With Service Providers</strong> — Third-party vendors
                who perform services on our behalf, such as payment processing,
                data hosting, and communications
              </li>
              <li>
                <strong>With Legal and Regulatory Authorities</strong> — Where
                required by law, regulation, court order, or governmental
                request
              </li>
              <li>
                <strong>With Professional Advisors</strong> — Including legal,
                financial, and consulting advisors, where necessary for the
                proper conduct of our business
              </li>
              <li>
                <strong>In Connection with Business Transactions</strong> —
                Such as a merger, acquisition, restructuring, or sale of assets,
                where your information may be transferred as part of that
                transaction
              </li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Cookies and Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              enhance user experience, analyze website traffic, and understand
              visitor behavior. Cookies are small data files stored on your
              device.
            </p>
            <p>
              You may control or disable cookies through your browser settings.
              Please note that disabling cookies may affect the functionality of
              certain features on our website.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Data Retention
            </h2>
            <p>
              We retain personal information for as long as necessary to fulfil
              the purposes outlined in this Privacy Policy, including for the
              duration of any active partnership agreement, and thereafter for as
              long as required to comply with our legal, regulatory, accounting,
              or reporting obligations.
            </p>
            <p>
              Where information is no longer required, we will take reasonable
              steps to securely delete, anonymize, or destroy it.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures
              designed to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These measures
              include secure data storage, restricted access controls, and
              regular review of our security practices.
            </p>
            <p>
              However, no method of electronic transmission or storage is
              completely secure. While we strive to protect your personal
              information, we cannot guarantee its absolute security.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Your Privacy Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Right to Access</strong> — Request a copy of the personal
                information we hold about you
              </li>
              <li>
                <strong>Right to Correction</strong> — Request correction of
                inaccurate or incomplete information
              </li>
              <li>
                <strong>Right to Deletion</strong> — Request deletion of your
                personal information, subject to certain legal exceptions
              </li>
              <li>
                <strong>Right to Object</strong> — Object to certain types of
                processing, including direct marketing
              </li>
              <li>
                <strong>Right to Withdraw Consent</strong> — Withdraw previously
                given consent at any time, where processing is based on consent
              </li>
              <li>
                <strong>Right to Data Portability</strong> — Request transfer of
                your information to another service provider, where technically
                feasible
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              details provided in the Contact Us section below.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Children's Privacy
            </h2>
            <p>
              Our website and services are not directed at individuals under the
              age of 18. We do not knowingly collect personal information from
              minors. If we become aware that we have inadvertently collected
              personal information from a minor, we will take steps to delete
              such information promptly.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites, including
              partner farms, payment processors, or social media platforms. We
              are not responsible for the privacy practices or content of any
              third-party websites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              International Data Transfers
            </h2>
            <p>
              Where applicable, your personal information may be transferred to,
              stored, or processed in a country other than your country of
              residence. Where such transfers occur, we take reasonable steps to
              ensure that your information continues to be protected in
              accordance with this Privacy Policy and applicable data protection
              laws.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Farms Empire and Agricultural Services Limited</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@farmsempire.africa"
                className="text-primary hover:underline"
              >
                privacy@farmsempire.africa
              </a>
              <br />
              General Enquiries:{" "}
              <a
                href="mailto:info@farmsempire.africa"
                className="text-primary hover:underline"
              >
                info@farmsempire.africa
              </a>
              <br />
              Contact details:{" "}
              <a
                href="https://www.farmsempire.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.farmsempire.africa
              </a>
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, services, or applicable law. Any changes
              will be posted on this page with a revised "Last Updated" date. We
              encourage you to review this Privacy Policy periodically to stay
              informed about how we are protecting your information.
            </p>
            <p>
              Your continued use of our website following any changes to this
              Privacy Policy constitutes your acceptance of the revised terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
