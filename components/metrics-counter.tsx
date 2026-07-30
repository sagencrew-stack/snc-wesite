"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

const METRICS: Metric[] = [
  { value: 30,  suffix: "+", label: "Products Shipped",    sublabel: "web, mobile & SaaS"     },
  { value: 20,  suffix: "+", label: "Clients Served",      sublabel: "across 3 countries"      },
  { value: 5,   suffix: "+", label: "Years Active",        sublabel: "Hyderabad-based"         },
  { value: 100, suffix: "%", label: "Code Ownership",      sublabel: "no lock-in, ever"        },
  { value: 48,  suffix: "h", label: "Avg. Spec Time",      sublabel: "brief to written scope"  },
  { value: 3,   suffix: "",  label: "Countries",           sublabel: "IN · SG · AE"            },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [active, target, duration]);

  return count;
}

function MetricCard({ metric, active, index }: { metric: Metric; active: boolean; index: number }) {
  const count = useCountUp(metric.value, active);

  return (
    <div
      className="metric-card"
      style={{ animationDelay: active ? `${index * 80}ms` : "0ms" }}
    >
      <div className="metric-num">
        {count}<span className="metric-suffix">{metric.suffix}</span>
      </div>
      <div className="metric-label">{metric.label}</div>
      {metric.sublabel && <div className="metric-sub">{metric.sublabel}</div>}
    </div>
  );
}

export function MetricsCounter({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = () => { setActive(true); observer.disconnect(); };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) trigger(); },
      { threshold: 0.05 }
    );
    observer.observe(el);

    // Fallback: if already in viewport on mount, fire immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      trigger();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("metrics-grid", className)}>
      {METRICS.map((m, i) => (
        <MetricCard key={m.label} metric={m} active={active} index={i} />
      ))}
    </div>
  );
}
