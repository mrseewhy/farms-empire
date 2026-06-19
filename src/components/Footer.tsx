import { Link } from "@tanstack/react-router";
import { siteConfig } from "../lib/config";

export function Footer() {
  return (
    <footer className="bg-primary">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="Farms Empire"
              className="h-16 w-auto "
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Communities Grow Empires. We partner with landowners, communities,
              and investors to build sustainable agricultural enterprises across
              Africa.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white/60 transition-all duration-200 hover:bg-white/20 hover:text-white hover:scale-110"
                >
                  {platform.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
              About
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Our Story", href: "/our-story" },
                { label: "Our Solution", href: "/our-solution" },
                { label: "Why Ujamaa?", href: "/why-ujamaa" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Programs
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Partner With Us", href: "/partner-with-us" },
                { label: "UN SDG 2", href: "/sdg-2" },
                { label: "Publications", href: "/publications" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email.general}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.contact.email.general}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.address.offices.join(", ")}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-white/40 transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <a
              href="https://bigyarddigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 transition-colors duration-200 hover:text-white"
            >
              Made by BigYard Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
