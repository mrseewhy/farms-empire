import { type ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function Stagger({ children, staggerDelay = 100, className }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                isVisible ? "animate-fade-in-up" : "opacity-0"
              )}
              style={{
                animationDuration: "500ms",
                animationDelay: `${index * staggerDelay}ms`,
                animationFillMode: "forwards",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
