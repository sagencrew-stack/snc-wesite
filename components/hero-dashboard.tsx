"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type Tab = "build" | "automate" | "deploy";

const TABS: { id: Tab; label: string }[] = [
  { id: "build",    label: "Build Software"   },
  { id: "automate", label: "Automate with AI" },
  { id: "deploy",   label: "Ship & Deploy"    },
];

/* ── Ship & Deploy Panel ─────────────────────────────── */
function DeployPanel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/40">
          Production Deployments
        </div>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
          All Systems Live
        </span>
      </div>

      <div className="space-y-1.5">
        {[
          { name: "Sage Hire Stack v2", env: "Production", status: "Live",      dot: "bg-emerald-400", time: "2h ago"  },
          { name: "Liferra · Beta",     env: "Staging",    status: "Testing",   dot: "bg-gold",        time: "4h ago"  },
          { name: "Mahantraders ERP",   env: "Production", status: "Live",      dot: "bg-emerald-400", time: "1d ago"  },
          { name: "Teampurex v3",       env: "Production", status: "Live",      dot: "bg-emerald-400", time: "3d ago"  },
        ].map((d) => (
          <div key={d.name} className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/4 px-3 py-2.5">
            <div className={cn("h-1.5 w-1.5 shrink-0 rounded-full animate-pulse-glow", d.dot)} />
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-ivory/80 truncate">{d.name}</div>
              <div className="text-[9px] text-ivory/35">{d.env}</div>
            </div>
            <span className={cn(
              "rounded-full px-1.5 py-0.5 text-[9px] font-semibold",
              d.status === "Live" ? "bg-emerald-500/20 text-emerald-400" : "bg-gold/15 text-gold"
            )}>{d.status}</span>
            <span className="text-[9px] text-ivory/30 shrink-0">{d.time}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "30+", l: "Products",  c: "text-gold"        },
          { v: "99%", l: "Uptime",    c: "text-emerald-400" },
          { v: "3",   l: "Countries", c: "text-ivory/70"    },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/6 bg-white/4 p-2.5 text-center">
            <div className={cn("font-display text-[18px] font-bold", s.c)}>{s.v}</div>
            <div className="text-[9px] uppercase tracking-wider text-ivory/35">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gold/15 bg-gold/5 px-3 py-2 text-center">
        <span className="text-[11px] text-ivory/60">Fixed-scope delivery · Full code ownership</span>
      </div>
    </div>
  );
}

/* ── Build Software Panel ────────────────────────────── */
function BuildPanel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/40">
          Software Delivery
        </div>
        <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold">
          Sprint 4 / 6
        </span>
      </div>

      {/* Progress */}
      <div className="rounded-xl border border-white/6 bg-white/5 p-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-ivory/90">Sage Hire Stack v2</span>
          <span className="text-[11px] font-bold text-gold">72%</span>
        </div>
        <div className="mb-3 h-1.5 rounded-full bg-white/8">
          <div className="h-1.5 rounded-full bg-gradient-to-r from-gold to-gold/50" style={{ width: "72%" }} />
        </div>
        {[
          { layer: "Frontend",  pct: 80,  done: true  },
          { layer: "Backend",   pct: 100, done: true  },
          { layer: "API Layer", pct: 90,  done: true  },
          { layer: "Testing",   pct: 70,  done: false },
          { layer: "Deploy",    pct: 20,  done: false },
        ].map((l) => (
          <div key={l.layer} className="mb-1.5 flex items-center gap-2">
            <span className="w-16 text-[10px] text-ivory/45">{l.layer}</span>
            <div className="flex-1 rounded-full bg-white/5">
              <div
                className={cn("h-1 rounded-full", l.done ? "bg-emerald-400/60" : "bg-gold/50")}
                style={{ width: `${l.pct}%` }}
              />
            </div>
            <span className="w-8 text-right text-[10px] text-ivory/45">{l.pct}%</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "12", l: "Shipped", c: "text-emerald-400" },
          { v: "3",  l: "Review",  c: "text-gold"        },
          { v: "2",  l: "Pending", c: "text-ivory/50"    },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/6 bg-white/4 p-2.5 text-center">
            <div className={cn("font-display text-[18px] font-bold", s.c)}>{s.v}</div>
            <div className="text-[9px] uppercase tracking-wider text-ivory/35">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-gold/15 bg-gold/5 px-3 py-2 text-center">
        <span className="text-[11px] text-ivory/60">Fixed-scope delivery · Post-launch support included</span>
      </div>
    </div>
  );
}

/* ── Automate with AI Panel ──────────────────────────── */
function AutomatePanel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/40">
          Active AI Workflows
        </div>
        <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-purple-400">
          4 Running
        </span>
      </div>

      <div className="space-y-1.5">
        {[
          { name: "Invoice Generator",    count: "23 created",    status: "Live",   dot: "bg-emerald-400" },
          { name: "Lead Scoring Agent",   count: "89 scored",     status: "Live",   dot: "bg-emerald-400" },
          { name: "Report Automation",    count: "12 dispatched", status: "Live",   dot: "bg-emerald-400" },
          { name: "Data Sync Pipeline",   count: "3 queued",      status: "Queue",  dot: "bg-gold"        },
        ].map((w) => (
          <div key={w.name} className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/4 px-3 py-2.5">
            <div className={cn("h-1.5 w-1.5 shrink-0 rounded-full animate-pulse-glow", w.dot)} />
            <span className="flex-1 text-[11px] font-medium text-ivory/80">{w.name}</span>
            <span className="text-[10px] text-ivory/45">{w.count}</span>
            <span className={cn(
              "rounded-full px-1.5 py-0.5 text-[9px] font-semibold",
              w.status === "Live" ? "bg-emerald-500/20 text-emerald-400" : "bg-gold/15 text-gold"
            )}>{w.status}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { v: "4.2h", l: "Saved Today", c: "text-gold"         },
          { v: "0%",   l: "Error Rate",  c: "text-emerald-400"  },
          { v: "100%", l: "Reviewed",    c: "text-ivory/70"     },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/6 bg-white/4 p-2.5 text-center">
            <div className={cn("font-display text-[16px] font-bold", s.c)}>{s.v}</div>
            <div className="text-[9px] uppercase tracking-wider text-ivory/35">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────── */
export function HeroDashboard() {
  const [tab, setTab] = useState<Tab>("build");
  const [visible, setVisible] = useState(true);

  const cycle = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setTab((prev) => prev === "build" ? "automate" : prev === "automate" ? "deploy" : "build");
      setVisible(true);
    }, 250);
  }, []);

  useEffect(() => {
    const t = setInterval(cycle, 5000);
    return () => clearInterval(t);
  }, [cycle]);

  const handleTab = (id: Tab) => {
    if (id === tab) return;
    setVisible(false);
    setTimeout(() => { setTab(id); setVisible(true); }, 200);
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-navy-mid/60 p-5 shadow-card-dark backdrop-blur-md">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl" style={{
        background: "radial-gradient(400px 300px at 80% 0%, rgba(212,175,55,0.07), transparent)"
      }} />

      {/* Header */}
      <div className="mb-4 flex items-center gap-2 border-b border-white/6 pb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-deep font-display text-[11px] font-bold text-navy">S</div>
        <span className="text-[12px] font-semibold text-ivory/80">Growth Command Center</span>
        <span className="ml-auto flex items-center gap-1 text-[9.5px] text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          Live
        </span>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex rounded-xl border border-white/6 bg-white/4 p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => handleTab(t.id)}
            className={cn(
              "flex-1 rounded-lg py-1.5 text-[10.5px] font-semibold transition-all duration-200",
              tab === t.id
                ? "bg-accent text-white shadow-sm"
                : "text-ivory/40 hover:text-ivory/70"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}>
        {tab === "build"    && <BuildPanel    />}
        {tab === "automate" && <AutomatePanel />}
        {tab === "deploy"   && <DeployPanel   />}
      </div>

      {/* Footer */}
      <div className="mt-4 border-t border-white/6 pt-3 text-center text-[9.5px] text-ivory/25">
        Sage &amp; Crew Next · Software Studio · Hyderabad
      </div>
    </div>
  );
}
