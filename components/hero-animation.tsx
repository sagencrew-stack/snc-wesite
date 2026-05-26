"use client";

import { useEffect, useRef } from "react";

export function HeroAnimation() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number>(0);
  const t0Ref = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const captionEl = captionRef.current;
    const counterEl = counterRef.current;
    if (!canvas || !stage) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LOOP_MS = 7800;
    const SKILL_TOKENS = ["AWS", "Kubernetes", "Terraform", "CI/CD", "Python", "Docker", "6+ yrs", "Remote-OK"];
    const INITIALS = ["AS","MK","PJ","RT","SH","VK","NA","DR","RG","PM","SK","AR","MV","TS","RB","AK","SA","JD","HN","BC"];

    const C = {
      gold: "#D4AF37", goldSoft: "rgba(212,175,55,0.45)", goldFaint: "rgba(212,175,55,0.15)",
      sageSoft: "rgba(122,158,126,0.55)",
      ivory: "#F8F7F2", ivorySoft: "rgba(248,247,242,0.78)", ivoryFaint: "rgba(248,247,242,0.18)",
      greyMid: "rgba(255,255,255,0.22)",
    };

    let W = 0, H = 0, DPR = 1;
    let jd: { x: number; y: number; w: number; h: number; title: string; meta: string } | null = null;
    let tokens: { label: string; x: number; y: number; fromX: number; fromY: number; phase: number }[] = [];
    let cloud: { initials: string; tx: number; ty: number; sx: number; sy: number; score: number; matched: boolean; skillIdx: number; delay: number; finalX?: number; finalY?: number; role?: string }[] = [];
    let topThree: typeof cloud = [];

    function buildScene() {
      if (!jd) {
        jd = { x: 0, y: 0, w: 0, h: 0, title: "", meta: "" };
      }
      const cx = W * 0.5;
      jd.x = cx; jd.y = H * 0.36;
      jd.w = Math.min(220, W * 0.55); jd.h = 64;
      jd.title = "Senior DevOps Engineer";
      jd.meta = "6+ yrs · Bangalore · Permanent";

      tokens = SKILL_TOKENS.map((label, i) => {
        const angle = (i / SKILL_TOKENS.length) * Math.PI * 2 - Math.PI / 2;
        const radius = Math.min(W, H) * 0.34;
        return {
          label,
          x: cx + Math.cos(angle) * radius,
          y: jd!.y + Math.sin(angle) * radius * 0.55,
          fromX: jd!.x, fromY: jd!.y,
          phase: i * 0.7,
        };
      });

      const N = Math.max(34, Math.min(64, Math.floor((W * H) / 9000)));
      cloud = [];
      for (let i = 0; i < N; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.min(W, H) * (0.3 + Math.random() * 0.3);
        cloud.push({
          initials: INITIALS[i % INITIALS.length],
          tx: cx + Math.cos(ang) * dist,
          ty: (H * 0.5) + Math.sin(ang) * dist * 0.85,
          sx: W + 40 + Math.random() * 160,
          sy: (H * 0.5) + (Math.random() - 0.5) * H * 0.9,
          score: 30 + Math.floor(Math.random() * 70),
          matched: false,
          skillIdx: i % SKILL_TOKENS.length,
          delay: Math.random() * 0.6,
        });
      }
      cloud.sort((a, b) => b.score - a.score);
      topThree = cloud.slice(0, 3);
      topThree.forEach((c, i) => {
        c.matched = true;
        c.score = [94, 91, 89][i];
        c.finalX = cx + (i - 1) * 95;
        c.finalY = H * 0.74;
        c.role = ["DevOps Engineer", "Cloud Architect", "SRE Lead"][i];
      });
    }

    function resize() {
      const rect = stage!.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, Math.floor(rect.width));
      H = Math.max(1, Math.floor(rect.height));
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildScene();
    }

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    function roundRect(x: number, y: number, w: number, h: number, r: number) {
      const rr = Math.min(r, w / 2, h / 2);
      ctx!.beginPath();
      ctx!.moveTo(x + rr, y);
      ctx!.lineTo(x + w - rr, y); ctx!.quadraticCurveTo(x + w, y, x + w, y + rr);
      ctx!.lineTo(x + w, y + h - rr); ctx!.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
      ctx!.lineTo(x + rr, y + h); ctx!.quadraticCurveTo(x, y + h, x, y + h - rr);
      ctx!.lineTo(x, y + rr); ctx!.quadraticCurveTo(x, y, x + rr, y);
      ctx!.closePath();
    }

    function drawJD(opacity: number, scale: number) {
      if (!jd) return;
      ctx!.save();
      const w = jd.w * scale, h = jd.h * scale;
      const x = jd.x - w / 2, y = jd.y - h / 2;
      ctx!.globalAlpha = opacity;
      ctx!.shadowColor = C.goldSoft; ctx!.shadowBlur = 24;
      ctx!.fillStyle = "rgba(11,31,58,0.78)";
      ctx!.strokeStyle = C.goldSoft; ctx!.lineWidth = 1.2;
      roundRect(x, y, w, h, 10); ctx!.fill(); ctx!.stroke();
      ctx!.shadowBlur = 0;
      ctx!.fillStyle = C.ivory;
      ctx!.font = "600 12.5px \"Plus Jakarta Sans\", system-ui, sans-serif";
      ctx!.textBaseline = "top";
      ctx!.fillText(jd.title, x + 12, y + 11);
      ctx!.fillStyle = C.ivorySoft;
      ctx!.font = "500 10.5px \"Plus Jakarta Sans\", system-ui, sans-serif";
      ctx!.fillText(jd.meta, x + 12, y + 30);
      ctx!.fillStyle = C.gold;
      ctx!.beginPath(); ctx!.arc(x + w - 12, y + 12, 3, 0, Math.PI * 2); ctx!.fill();
      ctx!.restore();
    }

    function drawToken(tok: typeof tokens[0], x: number, y: number, opacity: number, highlight: boolean) {
      ctx!.save();
      ctx!.globalAlpha = opacity;
      ctx!.font = "600 10.5px \"Plus Jakarta Sans\", system-ui, sans-serif";
      const w = ctx!.measureText(tok.label).width + 18;
      const h = 20;
      const bx = x - w / 2, by = y - h / 2;
      ctx!.fillStyle = highlight ? "rgba(212,175,55,0.18)" : "rgba(255,255,255,0.06)";
      ctx!.strokeStyle = highlight ? C.goldSoft : C.greyMid;
      ctx!.lineWidth = 1;
      roundRect(bx, by, w, h, 10); ctx!.fill(); ctx!.stroke();
      ctx!.fillStyle = highlight ? C.gold : C.ivorySoft;
      ctx!.textBaseline = "middle";
      ctx!.fillText(tok.label, bx + 9, y + 0.5);
      ctx!.restore();
    }

    function drawCandidate(c: typeof cloud[0], x: number, y: number, r: number, opacity: number, matched: boolean, scoreShown: boolean) {
      ctx!.save();
      ctx!.globalAlpha = opacity;
      if (matched) {
        ctx!.fillStyle = "rgba(122,158,126,0.95)";
        ctx!.shadowColor = "rgba(122,158,126,0.6)"; ctx!.shadowBlur = 12;
      } else {
        ctx!.fillStyle = "rgba(255,255,255,0.12)";
      }
      ctx!.beginPath(); ctx!.arc(x, y, r, 0, Math.PI * 2); ctx!.fill();
      ctx!.shadowBlur = 0;
      ctx!.strokeStyle = matched ? C.gold : "rgba(255,255,255,0.25)";
      ctx!.lineWidth = matched ? 1.2 : 0.7;
      ctx!.beginPath(); ctx!.arc(x, y, r, 0, Math.PI * 2); ctx!.stroke();
      ctx!.fillStyle = matched ? C.ivory : C.ivorySoft;
      ctx!.font = `700 ${Math.floor(r * 0.75)}px "Plus Jakarta Sans", system-ui, sans-serif`;
      ctx!.textAlign = "center"; ctx!.textBaseline = "middle";
      ctx!.fillText(c.initials, x, y + 0.5);
      ctx!.textAlign = "start";
      if (scoreShown) {
        const sw = 36, sh = 16;
        const sx = x + r + 6, sy = y - sh / 2;
        ctx!.fillStyle = "rgba(212,175,55,0.20)";
        ctx!.strokeStyle = C.goldSoft; ctx!.lineWidth = 1;
        roundRect(sx, sy, sw, sh, 8); ctx!.fill(); ctx!.stroke();
        ctx!.fillStyle = C.gold;
        ctx!.font = "700 10px \"Plus Jakarta Sans\", system-ui, sans-serif";
        ctx!.textAlign = "center"; ctx!.textBaseline = "middle";
        ctx!.fillText(c.score + "%", sx + sw / 2, sy + sh / 2 + 0.5);
        ctx!.textAlign = "start";
      }
      ctx!.restore();
    }

    function drawBeam(x1: number, y1: number, x2: number, y2: number, color: string, opacity: number, dashOffset: number) {
      ctx!.save();
      ctx!.globalAlpha = opacity;
      ctx!.strokeStyle = color; ctx!.lineWidth = 1.1;
      ctx!.setLineDash([6, 6]); ctx!.lineDashOffset = dashOffset;
      ctx!.beginPath(); ctx!.moveTo(x1, y1); ctx!.lineTo(x2, y2); ctx!.stroke();
      ctx!.setLineDash([]);
      ctx!.restore();
    }

    function drawConnection(x1: number, y1: number, x2: number, y2: number, color: string, opacity: number) {
      ctx!.save();
      ctx!.globalAlpha = opacity;
      ctx!.strokeStyle = color; ctx!.lineWidth = 1.4;
      ctx!.beginPath(); ctx!.moveTo(x1, y1);
      const midY = (y1 + y2) / 2;
      ctx!.bezierCurveTo(x1, midY, x2, midY, x2, y2); ctx!.stroke();
      ctx!.fillStyle = color; ctx!.globalAlpha = opacity * 0.9;
      ctx!.beginPath(); ctx!.arc(x2, y2, 2.5, 0, Math.PI * 2); ctx!.fill();
      ctx!.restore();
    }

    function drawRoleLabel(c: typeof cloud[0], x: number, y: number, opacity: number) {
      ctx!.save();
      ctx!.globalAlpha = opacity;
      ctx!.fillStyle = C.ivory;
      ctx!.font = "600 11px \"Plus Jakarta Sans\", system-ui, sans-serif";
      ctx!.textAlign = "center";
      ctx!.fillText(c.role ?? "", x, y + 38);
      ctx!.textAlign = "start";
      ctx!.restore();
    }

    function setCaption(scene: string, text: string) {
      if (!captionEl) return;
      if ((captionEl as any).dataset.scene === scene) return;
      (captionEl as any).dataset.scene = scene;
      captionEl.textContent = text;
    }

    function render(now: number) {
      if (!W || !H || !jd) { frameRef.current = requestAnimationFrame(render); return; }

      const elapsed = (now - t0Ref.current) % LOOP_MS;
      const t = elapsed / 1000;

      ctx!.clearRect(0, 0, W, H);

      // Subtle background dots
      ctx!.fillStyle = "rgba(248,247,242,0.04)";
      for (let i = 0; i < 24; i++) {
        const ax = (i * 137 + now * 0.01) % W;
        const ay = ((i * 53) + 30) % H;
        ctx!.beginPath(); ctx!.arc(ax, ay, 0.8, 0, Math.PI * 2); ctx!.fill();
      }

      // ── Scene 1: JD entry (0–1s) ──
      if (t < 1.0) {
        setCaption("1", "Receiving requisition…");
        const p = easeOut(t / 1.0);
        drawJD(p, 0.7 + 0.3 * p);
      }
      // ── Scene 1b: skills shatter into orbit (1–2s) ──
      else if (t < 2.0) {
        setCaption("2", "Extracting required skills…");
        const local = (t - 1.0) / 1.0;
        drawJD(1 - easeOut(local) * 0.4, 1.0);
        tokens.forEach((tok, i) => {
          const tp = clamp((local - i * 0.05) / 0.7, 0, 1);
          const x = jd!.x + (tok.x - jd!.x) * easeOut(tp);
          const y = jd!.y + (tok.y - jd!.y) * easeOut(tp);
          if (tp > 0.05) drawToken(tok, x, y, tp, false);
        });
      }
      // ── Scene 2: candidate cloud + matching beams (2–4s) ──
      else if (t < 4.0) {
        const local = (t - 2.0) / 2.0;
        setCaption(local < 0.5 ? "3a" : "3b", local < 0.5 ? "Scanning candidate pool…" : "Matching skills in real-time…");
        if (counterEl) counterEl.textContent = Math.floor(local * 1247).toLocaleString();

        drawJD(0.55, 0.92);
        tokens.forEach((tok, i) => {
          const drift = Math.sin(now * 0.0008 + tok.phase) * 3;
          drawToken(tok, tok.x, tok.y + drift, 0.95, false);
        });
        cloud.forEach((c, i) => {
          const cp = clamp((local - c.delay) / 0.55, 0, 1);
          if (cp <= 0) return;
          const x = c.sx + (c.tx - c.sx) * easeOut(cp);
          const y = c.sy + (c.ty - c.sy) * easeOut(cp);
          if (local > 0.55 && c.matched) {
            const tok = tokens[c.skillIdx % tokens.length];
            drawBeam(x, y, tok.x, tok.y, C.sageSoft, clamp((local - 0.55) / 0.35, 0, 1) * 0.75, -now * 0.05);
          } else if (local > 0.5 && i % 4 === 0 && !c.matched) {
            const tok = tokens[c.skillIdx % tokens.length];
            drawBeam(x, y, tok.x, tok.y, C.ivoryFaint, 0.25, now * 0.03);
          }
          drawCandidate(c, x, y, 11, cp, c.matched && local > 0.6, false);
        });
      }
      // ── Scene 3: top 3 fly to center with scores (4–6s) ──
      else if (t < 6.0) {
        const local = (t - 4.0) / 2.0;
        setCaption("4", "3 qualified profiles ready.");
        if (counterEl) counterEl.textContent = "1,247";

        drawJD(0.85, 0.85);
        const tokenAlpha = clamp(1 - local * 1.4, 0, 1);
        tokens.forEach(tok => { if (tokenAlpha > 0.05) drawToken(tok, tok.x, tok.y, tokenAlpha * 0.7, false); });
        cloud.forEach(c => {
          if (c.matched) return;
          const fadeP = clamp(local * 1.3, 0, 1);
          const op = (1 - fadeP) * 0.6;
          if (op > 0.04) drawCandidate(c, c.tx + (c.tx - jd!.x) * fadeP * 0.4, c.ty + (c.ty - jd!.y) * fadeP * 0.4, 9, op, false, false);
        });
        const p = easeInOut(clamp(local * 1.2, 0, 1));
        topThree.forEach(c => {
          const x = c.tx + (c.finalX! - c.tx) * p;
          const y = c.ty + (c.finalY! - c.ty) * p;
          const r = 11 + 8 * p;
          if (local > 0.35) drawConnection(jd!.x, jd!.y + jd!.h / 2, x, y - r, C.goldSoft, clamp((local - 0.35) / 0.5, 0, 1));
          drawCandidate(c, x, y, r, 1, true, local > 0.4);
          if (local > 0.55) drawRoleLabel(c, x, y, clamp((local - 0.55) / 0.4, 0, 1));
        });
      }
      // ── Settle (6–7.8s) ──
      else {
        const local = (t - 6.0) / 1.8;
        drawJD(0.85 * (1 - local * 0.3), 0.85);
        topThree.forEach(c => {
          const op = 1 - clamp((local - 0.4) / 0.6, 0, 1) * 0.7;
          drawConnection(jd!.x, jd!.y + jd!.h / 2, c.finalX!, c.finalY! - 19, C.goldSoft, op * 0.7);
          drawCandidate(c, c.finalX!, c.finalY!, 19, op, true, op > 0.4);
          if (op > 0.5) drawRoleLabel(c, c.finalX!, c.finalY!, op);
        });
      }

      frameRef.current = requestAnimationFrame(render);
    }

    function renderStatic() {
      if (!W || !H || !jd) return;
      ctx!.clearRect(0, 0, W, H);
      drawJD(0.95, 1.0);
      tokens.forEach(tok => drawToken(tok, tok.x, tok.y, 0.85, false));
      topThree.forEach(c => {
        drawConnection(jd!.x, jd!.y + jd!.h / 2, c.finalX!, c.finalY! - 19, C.goldSoft, 0.7);
        drawCandidate(c, c.finalX!, c.finalY!, 19, 1, true, true);
        drawRoleLabel(c, c.finalX!, c.finalY!, 1);
      });
      if (captionEl) captionEl.textContent = "3 qualified profiles ready.";
      if (counterEl) counterEl.textContent = "1,247";
    }

    // Pause when off-screen (perf)
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && pausedRef.current) {
          pausedRef.current = false;
          t0Ref.current = performance.now();
          frameRef.current = requestAnimationFrame(render);
        } else if (!e.isIntersecting && !pausedRef.current) {
          pausedRef.current = true;
          cancelAnimationFrame(frameRef.current);
        }
      });
    }, { threshold: 0.05 });
    io.observe(stage);

    resize();
    window.addEventListener("resize", resize, { passive: true });
    t0Ref.current = performance.now();

    if (reduced) { renderStatic(); }
    else { frameRef.current = requestAnimationFrame(render); }

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* ATM Stage */}
      <div ref={stageRef} className="atm-stage" aria-label="AI talent match animation">
        {/* Caption top-left */}
        <div className="atm-caption-wrap">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-gold/90">
            Live Match Engine
          </div>
          <div ref={captionRef} className="mt-0.5 text-[12px] font-medium text-ivory/90">
            Receiving requisition…
          </div>
        </div>

        {/* Counter top-right */}
        <div className="atm-counter-wrap">
          <div className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-ivory/55">
            Profiles Scanned
          </div>
          <div className="mt-0.5 font-display text-[22px] tabular-nums text-ivory">
            <span ref={counterRef}>0</span>
          </div>
        </div>

        {/* Canvas — full animation drawn here */}
        <canvas ref={canvasRef} className="atm-canvas" />
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
