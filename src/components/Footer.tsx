import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/logo.png" alt="Farms Empire" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Communities Grow Empires. We partner with landowners, communities,
              and investors to build sustainable agricultural enterprises across
              Africa.
            </p>
            <div className="mt-6 flex gap-4">
              {["Instagram", "Facebook", "LinkedIn", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-medium text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">About</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Our Story", href: "/our-story" },
                { label: "Our Solution", href: "/our-solution" },
                { label: "Why Ujamaa?", href: "/why-ujamaa" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">Programs</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Partner With Us", href: "/partner-with-us" },
                { label: "UN SDG 2", href: "/sdg-2" },
                { label: "Publications", href: "/publications" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:info@farmsempire.africa" className="transition-colors hover:text-white">
                  info@farmsempire.africa
                </a>
              </li>
              <li>
                <a href="tel:+2349120800107" className="transition-colors hover:text-white">
                  +234 (0) 912 080 0107
                </a>
              </li>
              <li>Port Harcourt, Rivers State, Nigeria</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Farms Empire. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-sm text-white/50 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm text-white/50 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
