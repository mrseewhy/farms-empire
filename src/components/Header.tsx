import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { DropdownMenu } from "./DropdownMenu";

const aboutItems = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    description: "Our mission, values, and expertise",
  },
  {
    label: "Our Story",
    href: "/our-story",
    description: "Forged in the field",
  },
  {
    label: "Our Solution",
    href: "/our-solution",
    description: "The communal farming partnership",
  },
  {
    label: "Partner With Us",
    href: "/partner-with-us",
    description: "Your land. Our expertise.",
  },
];

const resourcesItems = [
  {
    label: "Publications",
    href: "/publications",
    description: "Research and insights",
  },
  { label: "Blog", href: "/blog", description: "Stories from the field" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl transition-shadow duration-200 ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo.jpg"
            alt="Farms Empire"
            className="h-18 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          <Link
            to="/"
            className="rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary"
          >
            Home
          </Link>
          <DropdownMenu label="About" items={aboutItems} />
          <Link
            to="/our-solution"
            className="rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary"
          >
            Our Services
          </Link>
          <Link
            to="/projects"
            className="rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary"
          >
            Projects
          </Link>
          <Link
            to="/why-ujamaa"
            className="rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary"
          >
            Why Ujamaa?
          </Link>
          <Link
            to="/sdg-2"
            className="rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground/80 transition-all hover:bg-primary/5 hover:text-primary"
          >
            UN SDG 2
          </Link>
          <DropdownMenu label="Resources" items={resourcesItems} />
          <Link
            to="/contact"
            className="ml-2 rounded-lg bg-primary px-5 py-2.5 text-[15px] font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground/70 transition-all hover:bg-primary/5 hover:text-primary xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="dropdown-animate-in border-t border-border/60 bg-background/95 px-4 py-6 backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary"
            >
              Home
            </Link>
            <div className="py-2">
              <p className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">
                About
              </p>
              {aboutItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/our-solution"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary"
            >
              Our Services
            </Link>
            <Link
              to="/projects"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary"
            >
              Projects
            </Link>
            <Link
              to="/why-ujamaa"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary"
            >
              Why Ujamaa?
            </Link>
            <Link
              to="/sdg-2"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary"
            >
              UN SDG 2
            </Link>
            <div className="py-2">
              <p className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/50">
                Resources
              </p>
              {resourcesItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/70 hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
