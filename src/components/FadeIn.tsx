import { type ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationDirection = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(ref.current);

    // If already in view on mount, show immediately
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, [once]);

  const directionClass = {
    up: "animate-fade-in-up",
    down: "animate-fade-in-down",
    left: "animate-fade-in-left",
    right: "animate-fade-in-right",
    none: "animate-fade-in",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? directionClass : "opacity-0",
        className
      )}
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
