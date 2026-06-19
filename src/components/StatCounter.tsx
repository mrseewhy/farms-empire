import { useCountUp } from "@/hooks/use-count-up";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({ end, suffix = "", label, duration = 5000 }: StatCounterProps) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-white/70">{label}</p>
    </div>
  );
}