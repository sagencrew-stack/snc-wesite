"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Hide loader after animations complete (~3.2s)
    const timer = setTimeout(() => {
      setHidden(true);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`snc-loader${hidden ? " snc-loader--hidden" : ""}`} aria-hidden="true">
      <div className="snc-loader-glow" />
      <div className="snc-loader-stage">
        {/* Inner gold orbit ring */}
        <svg className="snc-loader-orbit snc-loader-orbit--inner" viewBox="0 0 280 280" aria-hidden="true">
          <g className="snc-loader-orbit-spin">
            <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(212,175,55,0.18)" strokeWidth="0.8" strokeDasharray="2 8"/>
            <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(212,175,55,0.7)" strokeWidth="1.2" strokeDasharray="60 360" strokeLinecap="round"/>
            <circle cx="270" cy="140" r="3" fill="#F5E6B8"/>
            <circle cx="10" cy="140" r="2" fill="#D4AF37" opacity="0.6"/>
          </g>
        </svg>
        {/* Outer sage orbit ring */}
        <svg className="snc-loader-orbit snc-loader-orbit--outer" viewBox="0 0 320 320" aria-hidden="true">
          <g className="snc-loader-orbit-spin snc-loader-orbit-spin--reverse">
            <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(122,158,126,0.25)" strokeWidth="0.6" strokeDasharray="1 14"/>
            <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(245,230,184,0.5)" strokeWidth="0.8" strokeDasharray="20 580" strokeLinecap="round"/>
          </g>
        </svg>
        {/* Logo */}
        <Image
          src="/logo-mark.svg"
          alt="Sage and Crew Next"
          width={200}
          height={200}
          className="snc-loader-logo"
          priority
        />
        {/* Shimmer */}
        <div className="snc-loader-shimmer">
          <div className="snc-loader-shimmer-stripe" />
        </div>
        {/* Pulse */}
        <div className="snc-loader-pulse" />
      </div>
      {/* Wordmark */}
      <div className="snc-loader-wordmark">
        <div className="snc-loader-brand">
          <span className="snc-loader-brand--italic">Sage</span>{" "}
          <span className="snc-loader-brand--mid">&amp; Crew</span>{" "}
          <span className="snc-loader-brand--accent">Next</span>
        </div>
        <div className="snc-loader-tagline">Build · Systems · AI Growth</div>
      </div>
    </div>
  );
}
