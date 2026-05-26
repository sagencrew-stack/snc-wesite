"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function ShsTrumpCard() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem("shs-card-dismissed") === "1") {
        setDismissed(true);
      }
    } catch {}
  }, []);

  function dismiss() {
    setDismissed(true);
    try { sessionStorage.setItem("shs-card-dismissed", "1"); } catch {}
  }

  if (!mounted || dismissed) return null;

  return (
    <div className="shs-card">
      <button
        className="shs-card-close"
        aria-label="Dismiss announcement"
        onClick={dismiss}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <Link href="/sage-hire-stack" className="shs-card-link">
        <span className="shs-card-badge">
          <span className="shs-card-dot" />
          Live 2026
        </span>
        <span className="shs-card-title">Sage Hire Stack</span>
        <span className="shs-card-desc">The complete recruitment pipeline, automated.</span>
        <span className="shs-card-cta">
          Get Early Access
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </span>
      </Link>
    </div>
  );
}
