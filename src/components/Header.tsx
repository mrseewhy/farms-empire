import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { DropdownMenu } from "./DropdownMenu";

const aboutItems = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Our Story", href: "/our-story" },
  { label: "Partner With Us", href: "/partner-with-us" },
];

const resourcesItems = [
  { label: "Publications", href: "/publications" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/40 bg-white/90 shadow-sm backdrop-blur-xl header-scrolled"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo-nobg.png"
            alt="Farms Empire"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          <Link
            to="/"
            className="font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
          >
            Home
          </Link>
          <DropdownMenu label="About" items={aboutItems} />
          <Link
            to="/our-solution"
            className="font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            to="/our-services"
            className="font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
          >
            Projects
          </Link>
          <Link
            to="/why-ujamaa"
            className="font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
          >
            Why Ujamaa?
          </Link>
          <Link
            to="/sdg-2"
            className="font-display rounded-lg px-4 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
          >
            UN SDG 2
          </Link>
          <DropdownMenu label="Resources" items={resourcesItems} />
          <Link
            to="/contact"
            className="ml-3 rounded-full bg-primary px-6 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-muted text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
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
        <div className="animate-dropdown-in border-t border-border/40 bg-white/95 px-4 py-4 backdrop-blur-xl xl:hidden">
          <nav className="flex flex-col gap-0.5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="font-display flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              About
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {mobileAboutOpen && (
              <div className="ml-4 border-l-2 border-border/40 pl-4">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display block rounded-lg px-4 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/our-solution"
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              to="/our-services"
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/projects"
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Projects
            </Link>
            <Link
              to="/why-ujamaa"
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Why Ujamaa?
            </Link>
            <Link
              to="/sdg-2"
              onClick={() => setMobileOpen(false)}
              className="font-display rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              UN SDG 2
            </Link>

            {/* Resources Dropdown */}
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="font-display flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Resources
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {mobileResourcesOpen && (
              <div className="ml-4 border-l-2 border-border/40 pl-4">
                {resourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display block rounded-lg px-4 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="my-2 border-t border-border/40" />
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-primary px-6 py-3 text-center text-[15px] font-semibold text-white transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
