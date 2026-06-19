import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

export function DropdownMenu({ label, items, className }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="font-display flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[15px] font-semibold text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
      >
        {label}
        <svg
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180 text-primary"
          )}
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
      {open && (
        <div className="animate-dropdown-in absolute left-0 top-full z-50 mt-1 min-w-[220px] overflow-hidden rounded-xl border border-border/50 bg-card py-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="font-display group block px-4 py-2.5 text-[15px] font-semibold text-foreground transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}