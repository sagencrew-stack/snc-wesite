"use client";

import { useEffect, useRef, useState } from "react";

const CAPTIONS = [
  "Receiving requisition…",
  "Extracting required skills…",
  "Scanning candidate pool…",
  "Matching profiles…",
  "Ranking by fit score…",
  "3 qualified profiles found.",
];

const NODES = [
  { label: "AWS", x: 0.72, y: 0.18 },
  { label: "Kubernetes", x: 0.85, y: 0.38 },
  { label: "Terraform", x: 0.88, y: 0.62 },
  { label: "Docker", x: 0.68, y: 0.78 },
  { label: "Python", x: 0.48, y: 0.82 },
  { label: "CI/CD", x: 0.28, y: 0.72 },
  { label: "Remote-OK", x: 0.18, y: 0.44 },
  { label: "6+ yrs", x: 0.22, y: 0.22 },
];

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [caption, setCaption] = useState(CAPTIONS[0]);
  const [counter, setCounter] = useState(0);
  const frameRef = useRef<number>(0);
  const captionIdx = useRef(0);

  // Caption cycling
  useEffect(() => {
    const interval = setInterval(() => {
      captionIdx.current = (captionIdx.current + 1) % CAPTIONS.length;
      setCaption(CAPTIONS[captionIdx.current]);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Counter
  useEffect(() => {
    let current = 0;
    const target = 1247;
    const step = Math.ceil(target / 80);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setCounter(current);
      if (current >= target) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      // Center point (job card)
      const cx = W * 0.5;
      const cy = H * 0.48;

      // Draw connecting lines
      NODES.forEach((node, i) => {
        const nx = node.x * W;
        const ny = node.y * H;
        const alpha = 0.12 + 0.08 * Math.sin(t * 0.02 + i);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Node dot
        const pulse = 1 + 0.15 * Math.sin(t * 0.03 + i * 0.7);
        ctx.beginPath();
        ctx.arc(nx, ny, 3.5 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,175,55,0.5)";
        ctx.fill();

        // Label
        ctx.font = "11px 'Plus Jakarta Sans', system-ui, sans-serif";
        ctx.fillStyle = "rgba(248,247,242,0.75)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, nx, ny - 10);
      });

      // Center job card glow
      const glowRadius = 38 + 4 * Math.sin(t * 0.025);
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
      grad.addColorStop(0, "rgba(212,175,55,0.15)");
      grad.addColorStop(1, "rgba(212,175,55,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      t++;
      frameRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Main stage */}
      <div
        className="relative w-full overflow-hidden rounded-[20px] border border-gold/20"
        style={{
          height: "clamp(300px, 40vw, 460px)",
          background:
            "radial-gradient(circle at 30% 20%, rgba(212,175,55,0.10), transparent 60%), radial-gradient(circle at 70% 80%, rgba(122,158,126,0.10), transparent 60%), linear-gradient(180deg, rgba(11,31,58,0.55), rgba(11,31,58,0.78))",
          boxShadow: "0 0 0 1px rgba(212,175,55,0.06), 0 30px 60px -28px rgba(0,0,0,0.55)",
        }}
      >
        {/* Caption top-left */}
        <div className="absolute left-4 top-4 z-10">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-gold/90">
            Live Match Engine
          </div>
          <div className="mt-0.5 text-[12px] font-medium text-ivory/90">{caption}</div>
        </div>

        {/* Counter top-right */}
        <div className="absolute right-4 top-4 z-10 text-right">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-ivory/55">
            Profiles Scanned
          </div>
          <div className="mt-0.5 font-display text-[22px] tabular-nums text-ivory">
            {counter.toLocaleString()}
          </div>
        </div>

        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Center job card */}
        <div
          className="absolute left-1/2 top-[44%] z-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gold/30 bg-navy/70 px-4 py-3 shadow-gold backdrop-blur-sm"
          style={{ minWidth: 200 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <p className="font-display text-[15px] text-ivory">Senior DevOps Engineer</p>
          </div>
          <p className="mt-1 text-[11px] text-ivory/55">6+ yrs · Bangalore · Permanent</p>
        </div>
      </div>

      {/* Footer banner */}
      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-navy/60 p-3.5 backdrop-blur-sm">
        <div>
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ivory/55">
            Requisition → Qualified Profiles
          </div>
          <div className="mt-0.5 font-display text-[14px] text-ivory">In hours, not weeks.</div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37" stroke="#A8881F" strokeWidth="1.4">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span className="font-display text-[16px] text-gold">3 qualified</span>
        </div>
      </div>
    </div>
  );
}
