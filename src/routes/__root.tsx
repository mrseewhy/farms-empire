import { Outlet, createRootRoute } from "@tanstack/react-router";
import { siteConfig } from "../lib/config";

import appCss from "../styles.css?url";

const ogImage = `${siteConfig.url}/images/farmsempire-card.jpg`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${siteConfig.name} | ${siteConfig.tagline}` },
      { name: "description", content: siteConfig.description },
      { name: "robots", content: "index, follow" },
      { name: "author", content: siteConfig.name },
      { name: "keywords", content: "communal farming, agriculture, Africa, SDG 2, zero hunger, land partnership, food security, farming enterprise" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteConfig.url },
      { property: "og:title", content: `${siteConfig.name} | ${siteConfig.tagline}` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:locale", content: "en_US" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: siteConfig.url },
      { name: "twitter:title", content: `${siteConfig.name} | ${siteConfig.tagline}` },
      { name: "twitter:description", content: siteConfig.description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: siteConfig.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="font-sans antialiased bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
                logo: `${siteConfig.url}/images/logo-nobg.png`,
                description: siteConfig.description,
                sameAs: [
                  siteConfig.social.instagram,
                  siteConfig.social.facebook,
                  siteConfig.social.linkedin,
                  siteConfig.social.twitter,
                  siteConfig.social.youtube,
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: siteConfig.contact.phone,
                  contactType: "customer service",
                  email: siteConfig.contact.email.general,
                },
              },
              {
                "@type": "LocalBusiness",
                name: siteConfig.name,
                url: siteConfig.url,
                telephone: siteConfig.contact.phone,
                email: siteConfig.contact.email.general,
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "NG",
                },
                areaServed: siteConfig.contact.address.offices.map((office) => ({
                  "@type": "Country",
                  name: office,
                })),
              },
            ],
          }),
        }}
      />
      <Outlet />
    </div>
  );
}
