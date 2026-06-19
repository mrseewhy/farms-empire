import { useEffect, useRef } from "react";

const logos = [
  { src: "/images/logos/logo-1.jpg", alt: "Partner 1" },
  { src: "/images/logos/logo-2.jpg", alt: "Partner 2" },
  { src: "/images/logos/logo-3.jpg", alt: "Partner 3" },
  { src: "/images/logos/logo-4.jpg", alt: "Partner 4" },
  { src: "/images/logos/logo-5.jpg", alt: "Partner 5" },
  { src: "/images/logos/logo-6.jpg", alt: "Partner 6" },
  { src: "/images/logos/logo-7.jpg", alt: "Partner 7" },
  { src: "/images/logos/logo-8.jpg", alt: "Partner 8" },
  { src: "/images/logos/logo-9.jpg", alt: "Partner 9" },
];

export function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.5;

    function animate() {
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      el.scrollLeft += speed;
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animId);
    const handleMouseLeave = () => {
      animId = requestAnimationFrame(animate);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="border-y border-border/40 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
          They Trust Us
        </p>
      </div>
      <div
        ref={scrollRef}
        className="mx-auto flex max-w-7xl gap-12 overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Double the logos for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className="flex h-16 w-40 shrink-0 items-center justify-center opacity-40 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
