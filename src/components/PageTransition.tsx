import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    const unsub = router.subscribe("onBeforeNavigate", () => {
      setIsTransitioning(true);
    });
    return unsub;
  }, [router]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [children, isTransitioning]);

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      )}
    >
      {displayChildren}
    </div>
  );
}
