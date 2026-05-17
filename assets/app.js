/* =========================================================
   SAGE & CREW NEXT — Premium Interaction Layer
   - Loader, particle network, mouse-glow, parallax, role typer
   - Live Employer Pipeline (loops), Candidate Transformation
   - Marquee duplication, testimonial carousel, modals
   - Form validation + automation stubs (EmailJS / Formspree
     / Google Sheets / Supabase) + WhatsApp pre-fill
   ========================================================= */
(function () {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  /* ---------------- 1. Page loader ---------------- */
  // Robust loader hide: triggers on window.load, and also has a safety timeout
  // in case 'load' fires too early (cached pages) or never fires (slow CDN).
  // Handles BOTH legacy #loader (old pages) and new #page-loader (Push 4+ pages).
  (function hideLoader() {
    const loader = document.getElementById('page-loader') || document.getElementById('loader');
    if (!loader) return;
    let hidden = false;
    const fade = () => {
      if (hidden) return;
      hidden = true;
      loader.style.transition = 'opacity .6s ease, visibility .6s';
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      document.body.classList.add('loaded');
      setTimeout(() => loader.remove(), 650);
    };
    // Primary trigger: full window load
    if (document.readyState === 'complete') {
      setTimeout(fade, 400);
    } else {
      window.addEventListener('load', () => setTimeout(fade, 400));
    }
    // Safety net: never let the loader stick past 3.5 seconds, no matter what
    setTimeout(fade, 3500);
  })();

  /* ---------------- 2. Lucide ---------------- */
  if (window.lucide?.createIcons) lucide.createIcons();

  /* ---------------- 3. Lenis smooth scroll ---------------- */
  if (!reduced && window.Lenis) {
    const lenis = new Lenis({
      duration: 1.05,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })();
  }

  /* ---------------- 4. Header scroll + active nav ---------------- */
  const header = $('#site-header');
  const navLinks = $$('.nav-link');
  const sectionMap = navLinks
    .map(a => ({ link: a, id: a.getAttribute('href')?.slice(1) }))
    .filter(x => x.id && document.getElementById(x.id))
    .map(x => ({ link: x.link, el: document.getElementById(x.id) }));

  const onScroll = () => {
    if (window.scrollY > 24) header?.classList.add('header-solid');
    else header?.classList.remove('header-solid');

    // Active section highlight
    const y = window.scrollY + window.innerHeight * 0.35;
    let active = null;
    for (const s of sectionMap) {
      const top = s.el.offsetTop;
      const bottom = top + s.el.offsetHeight;
      if (y >= top && y < bottom) { active = s.link; break; }
    }
    navLinks.forEach(l => l.classList.toggle('active', l === active));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- 5. Mobile menu ---------------- */
  const menuBtn = $('#menu-btn');
  const mobileMenu = $('#mobile-menu');
  menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );

  /* ---------------- 6. Magnetic CTA ---------------- */
  if (!reduced && window.matchMedia('(hover: hover)').matches) {
    $$('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------------- 7. Hero word reveal ---------------- */
  const hero = $('#hero-title');
  if (hero) {
    hero.querySelectorAll('span.block').forEach(line => {
      line.innerHTML = line.innerHTML.replace(/(>|^)([^<]+)(<|$)/g, (m, a, txt, b) => {
        const out = txt.split(/(\s+)/).map(w => /\s+/.test(w) ? w : `<span class="word">${w}</span>`).join('');
        return a + out + b;
      });
    });
    hero.querySelectorAll('.word').forEach((w, i) => {
      setTimeout(() => w.classList.add('in'), 150 + i * 90);
    });
  }
  ['hero-sub', 'hero-ctas', 'hero-stats'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.classList.add('in'), 1100 + i * 160);
  });

  /* ---------------- 8. AI TALENT MATCH ANIMATION ----------------
     6-second looping scene:
       0.0-1.0s  Scene 1: JD card flies in, pulses
       1.0-2.0s  JD shatters into skill tokens, scatter into orbital field
       2.0-4.0s  Scene 2: candidate cloud sweeps in, matching beams draw,
                 counter ticks (1247 → 86 matches), top-3 selected
       4.0-6.0s  Scene 3: cloud collapses, top-3 fly to center with scores,
                 lines connect back to JD, headline reveal
       6.0s+     1s settle, then restart
  */
  (function aiTalentMatch() {
    const canvas = document.getElementById('atm-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const stage = document.getElementById('atm-stage');
    const captionEl = document.getElementById('atm-caption');
    const counterEl = document.getElementById('atm-counter');
    const shortlistEl = document.getElementById('atm-shortlist');

    // ----- palette (matches site brand tokens) -----
    const C = {
      gold: '#D4AF37', goldSoft: 'rgba(212,175,55,0.45)', goldFaint: 'rgba(212,175,55,0.15)',
      sage: '#7A9E7E', sageSoft: 'rgba(122,158,126,0.55)',
      ivory: '#F8F7F2', ivorySoft: 'rgba(248,247,242,0.78)', ivoryFaint: 'rgba(248,247,242,0.18)',
      grey: 'rgba(255,255,255,0.10)', greyMid: 'rgba(255,255,255,0.22)',
      red: 'rgba(220, 90, 90, 0.55)',
      navy: '#0B1F3A'
    };

    // ----- skill tokens (orbital, fixed positions, will animate in) -----
    const SKILL_TOKENS = ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Python', 'Docker', '6+ yrs', 'Remote-OK'];
    // ----- candidate initials pool -----
    const INITIALS = ['AS','MK','PJ','RT','SH','VK','NA','DR','RG','PM','SK','AR','MV','TS','RB','AK','SA','JD','HN','BC','LM','GP','EJ','VS','DK','CA','RV','SP','MN','KK','BS','TM','RN','AB','NV','JL','OM','UI'];

    // ----- state -----
    let W = 0, H = 0, DPR = 1;
    let t0 = performance.now();
    let raf = null;
    let prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LOOP_MS = 7800;  // total loop length (6s scene + 1.8s settle)

    // Pre-computed objects, regenerated on resize
    let jd = null;          // JD card
    let tokens = [];        // skill chips
    let cloud = [];         // candidate dots
    let topThree = [];      // chosen candidates
    let displayedCount = 0; // smoothed counter

    // ----- sizing -----
    function resize() {
      const rect = stage.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, Math.floor(rect.width));
      H = Math.max(1, Math.floor(rect.height));
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      buildScene();
    }

    function buildScene() {
      const cx = W * 0.5, cy = H * 0.5;

      // JD card target position (center-ish, slightly up)
      jd = {
        x: cx, y: H * 0.36, w: Math.min(220, W * 0.55), h: 64,
        title: 'Senior DevOps Engineer',
        meta: '6+ yrs · Bangalore · Permanent'
      };

      // skill tokens: arrange in orbit ring around JD
      tokens = SKILL_TOKENS.map((label, i) => {
        const angle = (i / SKILL_TOKENS.length) * Math.PI * 2 - Math.PI / 2;
        const radius = Math.min(W, H) * 0.34;
        return {
          label,
          x: cx + Math.cos(angle) * radius,
          y: jd.y + Math.sin(angle) * radius * 0.55,
          w: ctx.measureText(label).width + 22,
          h: 22,
          // start collapsed in JD
          fromX: jd.x, fromY: jd.y,
          // angular drift
          phase: i * 0.7
        };
      });

      // candidate cloud: random scatter in right + bottom area, 60 dots
      const N = Math.max(34, Math.min(64, Math.floor((W * H) / 9000)));
      cloud = [];
      for (let i = 0; i < N; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.min(W, H) * (0.30 + Math.random() * 0.30);
        cloud.push({
          initials: INITIALS[i % INITIALS.length],
          tx: cx + Math.cos(ang) * dist,            // final position in cloud
          ty: cy + Math.sin(ang) * dist * 0.85,
          // start off-screen right
          sx: W + 40 + Math.random() * 160,
          sy: cy + (Math.random() - 0.5) * H * 0.9,
          score: 30 + Math.floor(Math.random() * 70),
          matched: false,
          skillIdx: i % SKILL_TOKENS.length,
          delay: Math.random() * 0.6
        });
      }
      // pick top 3 by score, mark as matched, give them final positions
      cloud.sort((a, b) => b.score - a.score);
      topThree = cloud.slice(0, 3);
      topThree.forEach((c, i) => {
        c.matched = true;
        c.score = [94, 91, 89][i];
        c.finalX = cx + (i - 1) * 95;
        c.finalY = H * 0.74;
        c.role = ['DevOps Engineer','Cloud Architect','SRE Lead'][i];
      });
    }

    // ----- easing -----
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const easeInOut = t => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
    const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));

    // ----- draw helpers -----
    function roundRect(x, y, w, h, r) {
      const rr = Math.min(r, w/2, h/2);
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.lineTo(x + w - rr, y); ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
      ctx.lineTo(x + w, y + h - rr); ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
      ctx.lineTo(x + rr, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
      ctx.lineTo(x, y + rr); ctx.quadraticCurveTo(x, y, x + rr, y);
      ctx.closePath();
    }

    function drawJD(opacity, scale) {
      ctx.save();
      const w = jd.w * scale, h = jd.h * scale;
      const x = jd.x - w / 2, y = jd.y - h / 2;
      ctx.globalAlpha = opacity;
      // glow
      ctx.shadowColor = C.goldSoft; ctx.shadowBlur = 24;
      ctx.fillStyle = 'rgba(11,31,58,0.78)';
      ctx.strokeStyle = C.goldSoft;
      ctx.lineWidth = 1.2;
      roundRect(x, y, w, h, 10); ctx.fill(); ctx.stroke();
      ctx.shadowBlur = 0;
      // text
      ctx.fillStyle = C.ivory;
      ctx.font = '600 12.5px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.textBaseline = 'top';
      ctx.fillText(jd.title, x + 12, y + 11);
      ctx.fillStyle = C.ivorySoft;
      ctx.font = '500 10.5px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.fillText(jd.meta, x + 12, y + 30);
      // gold dot
      ctx.fillStyle = C.gold;
      ctx.beginPath(); ctx.arc(x + w - 12, y + 12, 3, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }

    function drawToken(tok, x, y, opacity, highlight) {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.font = '600 10.5px "Plus Jakarta Sans", system-ui, sans-serif';
      const w = ctx.measureText(tok.label).width + 18;
      const h = 20;
      const bx = x - w / 2, by = y - h / 2;
      ctx.fillStyle = highlight ? 'rgba(212,175,55,0.18)' : 'rgba(255,255,255,0.06)';
      ctx.strokeStyle = highlight ? C.goldSoft : C.greyMid;
      ctx.lineWidth = 1;
      roundRect(bx, by, w, h, 10); ctx.fill(); ctx.stroke();
      ctx.fillStyle = highlight ? C.gold : C.ivorySoft;
      ctx.textBaseline = 'middle';
      ctx.fillText(tok.label, bx + 9, y + 0.5);
      ctx.restore();
    }

    function drawCandidate(c, x, y, r, opacity, matched, scoreShown) {
      ctx.save();
      ctx.globalAlpha = opacity;
      // circle
      if (matched) {
        ctx.fillStyle = 'rgba(122,158,126,0.95)';
        ctx.shadowColor = 'rgba(122,158,126,0.6)'; ctx.shadowBlur = 12;
      } else {
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
      }
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur = 0;
      // ring
      ctx.strokeStyle = matched ? C.gold : 'rgba(255,255,255,0.25)';
      ctx.lineWidth = matched ? 1.2 : 0.7;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.stroke();
      // initials
      ctx.fillStyle = matched ? C.ivory : C.ivorySoft;
      ctx.font = `700 ${Math.floor(r*0.75)}px "Plus Jakarta Sans", system-ui, sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(c.initials, x, y + 0.5);
      ctx.textAlign = 'start';
      // score badge
      if (scoreShown) {
        const sw = 36, sh = 16;
        const sx = x + r + 6, sy = y - sh/2;
        ctx.fillStyle = 'rgba(212,175,55,0.20)';
        ctx.strokeStyle = C.goldSoft; ctx.lineWidth = 1;
        roundRect(sx, sy, sw, sh, 8); ctx.fill(); ctx.stroke();
        ctx.fillStyle = C.gold;
        ctx.font = '700 10px "Plus Jakarta Sans", system-ui, sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(c.score + '%', sx + sw/2, sy + sh/2 + 0.5);
        ctx.textAlign = 'start';
      }
      ctx.restore();
    }

    function drawBeam(x1, y1, x2, y2, color, opacity, dashOffset) {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.1;
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = dashOffset;
      ctx.beginPath();
      ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }

    function drawConnection(x1, y1, x2, y2, color, opacity) {
      // smooth curved connection for final scene
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color; ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      const midY = (y1 + y2) / 2;
      ctx.bezierCurveTo(x1, midY, x2, midY, x2, y2);
      ctx.stroke();
      // endpoint dots
      ctx.fillStyle = color; ctx.globalAlpha = opacity * 0.9;
      ctx.beginPath(); ctx.arc(x2, y2, 2.5, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }

    function drawRoleLabel(c, x, y, opacity) {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = C.ivory;
      ctx.font = '600 11px "Plus Jakarta Sans", system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(c.role, x, y + 38);
      ctx.textAlign = 'start';
      ctx.restore();
    }

    // ----- main render loop -----
    function render(now) {
      if (!W || !H) { raf = requestAnimationFrame(render); return; }

      const elapsed = (now - t0) % LOOP_MS;
      const t = elapsed / 1000;  // seconds in loop

      ctx.clearRect(0, 0, W, H);

      // soft background pattern dots
      ctx.fillStyle = 'rgba(248,247,242,0.04)';
      for (let i = 0; i < 24; i++) {
        const ax = (i * 137 + (now*0.01)) % W;
        const ay = ((i * 53) + 30) % H;
        ctx.beginPath(); ctx.arc(ax, ay, 0.8, 0, Math.PI*2); ctx.fill();
      }

      // ===== Scene 1: JD entry (0–1.0s) =====
      if (t < 1.0) {
        if (captionEl && captionEl.dataset.scene !== '1') {
          captionEl.dataset.scene = '1';
          captionEl.textContent = 'Receiving requisition…';
        }
        const p = easeOut(t / 1.0);
        drawJD(p, 0.7 + 0.3 * p);
      }
      // ===== Scene 1b: shatter into tokens (1.0–2.0s) =====
      else if (t < 2.0) {
        if (captionEl && captionEl.dataset.scene !== '2') {
          captionEl.dataset.scene = '2';
          captionEl.textContent = 'Extracting required skills…';
        }
        const local = (t - 1.0) / 1.0;
        const p = easeOut(local);
        drawJD(1 - p * 0.4, 1.0);
        // tokens fly out
        tokens.forEach((tok, i) => {
          const tDelay = i * 0.05;
          const tp = clamp((local - tDelay) / 0.7, 0, 1);
          const x = jd.x + (tok.x - jd.x) * easeOut(tp);
          const y = jd.y + (tok.y - jd.y) * easeOut(tp);
          if (tp > 0.05) drawToken(tok, x, y, tp, false);
        });
      }
      // ===== Scene 2: candidate cloud + matching beams (2.0–4.0s) =====
      else if (t < 4.0) {
        const local = (t - 2.0) / 2.0;

        if (captionEl) {
          if (local < 0.5) {
            if (captionEl.dataset.scene !== '3a') {
              captionEl.dataset.scene = '3a';
              captionEl.textContent = 'Scanning candidate pool…';
            }
          } else if (captionEl.dataset.scene !== '3b') {
            captionEl.dataset.scene = '3b';
            captionEl.textContent = 'Matching skills in real-time…';
          }
        }

        // counter logic: scan up to 1247 over the 2s
        const target = Math.floor(local * 1247);
        if (counterEl) counterEl.textContent = target.toLocaleString();

        // JD fading in background
        drawJD(0.55, 0.92);
        // tokens stable, with subtle drift
        tokens.forEach((tok, i) => {
          const drift = Math.sin(now * 0.0008 + tok.phase) * 3;
          drawToken(tok, tok.x, tok.y + drift, 0.95, false);
        });

        // candidate cloud entering
        cloud.forEach((c, i) => {
          const cDelay = c.delay;
          const cp = clamp((local - cDelay) / 0.55, 0, 1);
          if (cp <= 0) return;
          const x = c.sx + (c.tx - c.sx) * easeOut(cp);
          const y = c.sy + (c.ty - c.sy) * easeOut(cp);

          // draw matching beam (only top-3 light up green during 2nd half)
          if (local > 0.55 && c.matched) {
            const beamP = clamp((local - 0.55) / 0.35, 0, 1);
            const tok = tokens[c.skillIdx % tokens.length];
            drawBeam(x, y, tok.x, tok.y, C.sageSoft, beamP * 0.75, -now * 0.05);
          } else if (local > 0.5 && i % 4 === 0 && !c.matched) {
            // faint mismatch beams for atmosphere
            const tok = tokens[c.skillIdx % tokens.length];
            drawBeam(x, y, tok.x, tok.y, C.ivoryFaint, 0.25, now * 0.03);
          }

          drawCandidate(c, x, y, 11, cp, c.matched && local > 0.6, false);
        });
      }
      // ===== Scene 3: collapse → top 3 fly to center with scores (4.0–6.0s) =====
      else if (t < 6.0) {
        const local = (t - 4.0) / 2.0;

        if (captionEl && captionEl.dataset.scene !== '4') {
          captionEl.dataset.scene = '4';
          captionEl.textContent = '3 qualified profiles ready.';
        }
        if (counterEl) counterEl.textContent = '1,247';

        // JD shrinks slightly, stays in top center
        drawJD(0.85, 0.85);
        // tokens fade
        const tokenAlpha = clamp(1 - local * 1.4, 0, 1);
        tokens.forEach((tok) => {
          if (tokenAlpha > 0.05) drawToken(tok, tok.x, tok.y, tokenAlpha * 0.7, false);
        });

        // non-matched candidates fade and drift away
        cloud.forEach((c) => {
          if (c.matched) return;
          const fadeP = clamp(local * 1.3, 0, 1);
          const x = c.tx + (c.tx - jd.x) * fadeP * 0.4;
          const y = c.ty + (c.ty - jd.y) * fadeP * 0.4;
          const op = (1 - fadeP) * 0.6;
          if (op > 0.04) drawCandidate(c, x, y, 9, op, false, false);
        });

        // top 3 fly to their final positions
        const p = easeInOut(clamp(local * 1.2, 0, 1));
        topThree.forEach((c) => {
          const x = c.tx + (c.finalX - c.tx) * p;
          const y = c.ty + (c.finalY - c.ty) * p;
          const r = 11 + 8 * p;
          // connection beam JD → candidate
          if (local > 0.35) {
            const beamP = clamp((local - 0.35) / 0.5, 0, 1);
            drawConnection(jd.x, jd.y + jd.h/2, x, y - r, C.goldSoft, beamP);
          }
          drawCandidate(c, x, y, r, 1, true, local > 0.4);
          if (local > 0.55) {
            const labelP = clamp((local - 0.55) / 0.4, 0, 1);
            drawRoleLabel(c, x, y, labelP);
          }
        });
      }
      // ===== Settle (6.0–7.8s) =====
      else {
        const local = (t - 6.0) / 1.8;
        drawJD(0.85 * (1 - local * 0.3), 0.85);
        topThree.forEach((c) => {
          const fadeOut = clamp((local - 0.4) / 0.6, 0, 1);
          const op = 1 - fadeOut * 0.7;
          drawConnection(jd.x, jd.y + jd.h/2, c.finalX, c.finalY - 19, C.goldSoft, op * 0.7);
          drawCandidate(c, c.finalX, c.finalY, 19, op, true, op > 0.4);
          if (op > 0.5) drawRoleLabel(c, c.finalX, c.finalY, op);
        });
      }

      raf = requestAnimationFrame(render);
    }

    // ----- reduced motion: render a static composed scene, no loop -----
    function renderStatic() {
      ctx.clearRect(0, 0, W, H);
      drawJD(0.95, 1.0);
      tokens.forEach(tok => drawToken(tok, tok.x, tok.y, 0.85, false));
      topThree.forEach((c) => {
        drawConnection(jd.x, jd.y + jd.h/2, c.finalX, c.finalY - 19, C.goldSoft, 0.7);
        drawCandidate(c, c.finalX, c.finalY, 19, 1, true, true);
        drawRoleLabel(c, c.finalX, c.finalY, 1);
      });
      if (captionEl) captionEl.textContent = '3 qualified profiles ready.';
      if (counterEl) counterEl.textContent = '1,247';
    }

    // ----- pause when offscreen for perf -----
    let paused = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && paused) {
          paused = false;
          t0 = performance.now() - 0;
          raf = requestAnimationFrame(render);
        } else if (!e.isIntersecting && !paused) {
          paused = true;
          if (raf) cancelAnimationFrame(raf);
        }
      });
    }, { threshold: 0.05 });
    io.observe(stage);

    // ----- init -----
    resize();
    window.addEventListener('resize', resize, { passive: true });

    if (prefersReduced) {
      renderStatic();
    } else {
      raf = requestAnimationFrame(render);
    }
  })();

  /* ---------------- 9. Role typer ---------------- */
  const roleEl = $('#role-text');
  if (roleEl) {
    const roles = ['DevOps Engineers', 'Cloud Architects', 'HR Executives', 'Sales Managers', 'Finance Analysts', 'Backend Developers'];
    let r = 0, i = 0, mode = 'typing';
    const tick = () => {
      const cur = roles[r];
      if (mode === 'typing') {
        i++; roleEl.textContent = cur.slice(0, i);
        if (i === cur.length) { mode = 'pause'; return setTimeout(tick, 1400); }
        return setTimeout(tick, 70);
      }
      if (mode === 'pause') { mode = 'erase'; return setTimeout(tick, 200); }
      if (mode === 'erase') {
        i--; roleEl.textContent = cur.slice(0, i);
        if (i === 0) { mode = 'typing'; r = (r + 1) % roles.length; return setTimeout(tick, 250); }
        return setTimeout(tick, 35);
      }
    };
    if (!reduced) tick(); else roleEl.textContent = roles[0];
  }

  /* ---------------- 10. Hero parallax + mouse glow + cursor ---------------- */
  const heroSection = document.getElementById('top');
  const cursorGlow = $('#cursor-glow');
  if (heroSection && !reduced) {
    const cards = $$('.parallax-card', heroSection);
    heroSection.addEventListener('mousemove', e => {
      const r = heroSection.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cards.forEach((c, i) => {
        const depth = (i + 1) * 6;
        const rotX = -y * 6, rotY = x * 6;
        c.style.transform = `translate(${x * depth}px, ${y * depth}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
      if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
      }
    });
    heroSection.addEventListener('mouseleave', () => {
      cards.forEach(c => c.style.transform = '');
      if (cursorGlow) cursorGlow.style.opacity = '0';
    });
  }

  /* ---------------- 11. Particle network in hero ---------------- */
  (function particleNetwork() {
    const canvas = $('#particles');
    if (!canvas || reduced) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let dots = [], W = 0, H = 0;

    const resize = () => {
      const r = parent.getBoundingClientRect();
      W = canvas.width = r.width * devicePixelRatio;
      H = canvas.height = r.height * devicePixelRatio;
      canvas.style.width = r.width + 'px';
      canvas.style.height = r.height + 'px';
      const isMobile = r.width < 768;
      const target = isMobile ? 26 : 60;
      dots = Array.from({ length: target }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      }));
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // Lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const max = 110 * devicePixelRatio;
          if (d < max) {
            const a = 0.18 * (1 - d / max);
            ctx.strokeStyle = `rgba(212,175,55,${a})`;
            ctx.lineWidth = 0.6 * devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      // Dots
      for (const p of dots) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.fillStyle = 'rgba(212,175,55,0.55)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    draw();
  })();

  /* ---------------- 12. GSAP scroll reveals + counters ---------------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    $$('.reveal').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: () => el.classList.add('in'),
      });
    });
    $$('.counter').forEach(el => {
      const target = +el.dataset.target;
      ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: () => {
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target, duration: 1.6, ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.round(obj.v); },
          });
        },
      });
    });
  }

  /* ---------------- 13. LIVE EMPLOYER PIPELINE (loops) ---------------- */
  (function employerPipeline() {
    const root = $('#emp-pipeline');
    if (!root) return;
    const skills = ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Linux'];
    const extract = $('#emp-extract');
    const scanner = $('#emp-scanner');
    const strength = $('#emp-strength');
    const bar = $('#emp-strength-bar');
    const cands = ['#emp-cand-1', '#emp-cand-2', '#emp-cand-3'].map(s => $(s));
    const interview = $('#emp-interview');
    const hire = $('#emp-hire');

    const reset = () => {
      if (extract) extract.innerHTML = '';
      if (strength) strength.textContent = '0%';
      if (bar) bar.style.width = '0%';
      cands.forEach(c => { if (c) { c.style.opacity = 0; c.style.transform = 'translateX(20px)'; }});
      if (interview) { interview.style.opacity = 0; interview.style.transform = 'scale(.95)'; }
      if (hire) { hire.style.opacity = .35; hire.style.transform = 'scale(.95)'; }
    };

    const animateOnce = async () => {
      reset();
      // Scanner sweep
      if (scanner) {
        scanner.style.opacity = 1;
        scanner.animate(
          [{ top: '8%' }, { top: '92%' }],
          { duration: 1700, easing: 'cubic-bezier(.4,0,.2,1)' }
        );
      }
      // Skill chips appear one by one
      for (let i = 0; i < skills.length; i++) {
        await sleep(180);
        if (!extract) break;
        const span = document.createElement('span');
        span.className = 'chip chip-dark skill-chip-anim';
        span.textContent = skills[i];
        extract.appendChild(span);
        requestAnimationFrame(() => span.classList.add('in'));
      }
      if (scanner) scanner.style.opacity = 0;

      // Pool match strength counter to 92%
      const target = 92;
      const start = performance.now();
      const dur = 900;
      await new Promise(res => {
        const tick = t => {
          const p = Math.min(1, (t - start) / dur);
          const v = Math.round(p * target);
          if (strength) strength.textContent = v + '%';
          if (bar) bar.style.width = v + '%';
          if (p < 1) requestAnimationFrame(tick); else res();
        };
        requestAnimationFrame(tick);
      });

      // Candidate cards fly in
      for (let i = 0; i < cands.length; i++) {
        await sleep(220);
        const c = cands[i]; if (!c) continue;
        c.style.transition = 'opacity .45s ease, transform .55s cubic-bezier(.2,.7,.2,1)';
        c.style.opacity = 1;
        c.style.transform = 'translateX(0)';
      }

      // Interview card appears
      await sleep(450);
      if (interview) {
        interview.style.transition = 'opacity .5s ease, transform .55s cubic-bezier(.2,.7,.2,1)';
        interview.style.opacity = 1;
        interview.style.transform = 'scale(1)';
      }

      // Hire confirmation glow
      await sleep(550);
      if (hire) {
        hire.style.transition = 'opacity .5s ease, transform .55s cubic-bezier(.2,.7,.2,1), box-shadow .8s';
        hire.style.opacity = 1;
        hire.style.transform = 'scale(1)';
        hire.style.boxShadow = '0 0 0 1px rgba(212,175,55,.6), 0 0 30px rgba(212,175,55,.45)';
        setTimeout(() => { if (hire) hire.style.boxShadow = ''; }, 1200);
      }
    };

    // Trigger once in view, then loop while in viewport
    let started = false, looping = false, visible = false;
    const io = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible && !started) { started = true; loop(); }
    }, { threshold: 0.25 });
    io.observe(root);

    async function loop() {
      if (looping) return; looping = true;
      while (true) {
        if (visible) await animateOnce();
        await sleep(reduced ? 0 : 4000);
        if (reduced) break;
      }
    }
  })();

  /* ---------------- 14. CANDIDATE TRANSFORMATION ---------------- */
  (function candidateTransform() {
    const root = $('#resume-transform');
    if (!root) return;
    const beforeCount = $('#ats-before');
    const afterCount = $('#ats-after');
    const warns = $$('.warn-pop[data-warn]', root);
    const goods = $$('.warn-pop[data-good]', root);

    const seq = async () => {
      // Reset
      warns.forEach(w => w.classList.remove('in'));
      goods.forEach(g => g.classList.remove('in'));
      if (beforeCount) beforeCount.textContent = '42%';
      if (afterCount) afterCount.textContent = '0%';

      // Pop red warnings one by one
      for (const w of warns) {
        await sleep(220);
        w.classList.add('in');
      }

      // Count up the after score
      await sleep(300);
      const dur = 1400;
      const start = performance.now();
      await new Promise(res => {
        const tick = t => {
          const p = Math.min(1, (t - start) / dur);
          const v = Math.round(42 + p * (86 - 42));
          if (afterCount) afterCount.textContent = v + '%';
          if (p < 1) requestAnimationFrame(tick); else res();
        };
        requestAnimationFrame(tick);
      });
      if (afterCount) afterCount.textContent = '86%';

      // Pop green successes
      for (const g of goods) {
        await sleep(180);
        g.classList.add('in');
      }
    };

    let played = false;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !played) {
        played = true;
        seq();
      }
    }, { threshold: 0.3 });
    io.observe(root);
  })();

  /* ---------------- 15. TALENT MARQUEE — duplicate for seamless loop ---------------- */
  (function marquee() {
    const track = $('#marquee-track');
    if (!track) return;
    track.innerHTML += track.innerHTML;
  })();

  /* ---------------- 16. SERVICE CARD TILT + GOLD GLOW POSITION ---------------- */
  if (!reduced && window.matchMedia('(hover: hover)').matches) {
    $$('.svc-card, .tilt').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        const rx = (y - 0.5) * -6;
        const ry = (x - 0.5) * 6;
        card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        card.style.setProperty('--mx', (x * 100) + '%');
        card.style.setProperty('--my', (y * 100) + '%');
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------------- 17. HOW IT WORKS — tab switch + step glow on scroll ---------------- */
  $$('[data-tab-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('[data-tab-btn]').forEach(b => { b.classList.remove('tab-active'); b.classList.add('text-charcoal/70'); });
      btn.classList.add('tab-active'); btn.classList.remove('text-charcoal/70');
      const id = btn.dataset.tabBtn;
      $$('[data-tab-panel]').forEach(p => p.classList.add('hidden'));
      $(`[data-tab-panel="${id}"]`)?.classList.remove('hidden');
      // re-trigger reveals
      $$(`[data-tab-panel="${id}"] .reveal`).forEach(r => r.classList.add('in'));
    });
  });

  // Step glow as user scrolls (light up sequentially)
  if (window.gsap && window.ScrollTrigger) {
    $$('[data-tab-panel]').forEach(panel => {
      const steps = $$('.step', panel);
      steps.forEach((s, i) => {
        ScrollTrigger.create({
          trigger: s, start: 'top 80%', once: true,
          onEnter: () => setTimeout(() => s.classList.add('active'), i * 90),
        });
      });
    });
  }

  /* ---------------- 18. TESTIMONIAL CAROUSEL ---------------- */
  (function carousel() {
    const track = $('#testi-track');
    if (!track) return;
    const cards = Array.from(track.children);
    const dotsWrap = $('#testi-dots');
    const prev = $('[data-testi="prev"]');
    const next = $('[data-testi="next"]');
    let index = 0, perPage = 1, autoplayId;

    const computePerPage = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 3;
      if (w >= 640) return 2;
      return 1;
    };

    const updateDots = () => {
      if (!dotsWrap) return;
      const pages = Math.max(1, cards.length - perPage + 1);
      dotsWrap.innerHTML = '';
      for (let i = 0; i < pages; i++) {
        const d = document.createElement('button');
        d.className = 'dot-nav' + (i === index ? ' active' : '');
        d.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        d.addEventListener('click', () => { index = i; render(); resetAuto(); });
        dotsWrap.appendChild(d);
      }
    };

    const render = () => {
      perPage = computePerPage();
      const max = Math.max(0, cards.length - perPage);
      if (index > max) index = max;
      const card = cards[0];
      if (!card) return;
      const cw = card.getBoundingClientRect().width + 20; // gap-5
      track.style.transform = `translateX(${-index * cw}px)`;
      $$('.dot-nav', dotsWrap).forEach((d, i) => d.classList.toggle('active', i === index));
    };

    const move = (dir) => {
      const max = Math.max(0, cards.length - perPage);
      index = (index + dir + max + 1) % (max + 1);
      render();
    };

    prev?.addEventListener('click', () => { move(-1); resetAuto(); });
    next?.addEventListener('click', () => { move(1); resetAuto(); });

    function startAuto() {
      if (reduced) return;
      autoplayId = setInterval(() => move(1), 5500);
    }
    function resetAuto() { clearInterval(autoplayId); startAuto(); }

    // pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoplayId));
    track.addEventListener('mouseleave', startAuto);

    window.addEventListener('resize', () => { updateDots(); render(); });
    updateDots(); render(); startAuto();
  })();

  /* ---------------- 19. CONTACT FORM TABS + PRE-SELECT ---------------- */
  function setFormTab(name) {
    $$('[data-form-tab]').forEach(b => {
      const active = b.dataset.formTab === name;
      b.classList.toggle('tab-active', active);
      b.classList.toggle('text-charcoal/65', !active);
    });
    $$('[data-form-panel]').forEach(p => {
      p.classList.toggle('hidden', p.dataset.formPanel !== name);
    });
  }
  $$('[data-form-tab]').forEach(b => b.addEventListener('click', () => setFormTab(b.dataset.formTab)));
  $$('a[data-tab]').forEach(a => {
    a.addEventListener('click', () => {
      const tab = a.dataset.tab;
      setTimeout(() => setFormTab(tab), 300);
    });
  });

  // Auto-switch form tab from ?intent=... URL param
  (function() {
    if (!$('[data-form-tab]')) return; // not on contact page
    try {
      const params = new URLSearchParams(window.location.search);
      const intent = params.get('intent');
      const validIntents = ['project', 'employer', 'candidate'];
      if (intent && validIntents.includes(intent)) {
        setFormTab(intent);
      }
    } catch (_) { /* no-op */ }
  })();

  /* ---------------- 20. FORM VALIDATION + AUTOMATION HOOKS ----------------
     Configure ONE of these endpoints to go live:
     - FORMSPREE_URL   → e.g. 'https://formspree.io/f/xxxxxx'
     - SHEETS_URL      → Google Apps Script Web App POST endpoint
     - SUPABASE_URL    → Supabase Edge Function URL
     - EMAILJS         → use emailjs.send() inside the submit handler
     If none configured, falls back to local success modal (demo mode).
  ----------------------------------------------------------------- */
  const ENDPOINTS = {
    project: '',   // <-- paste your URL here (or leave empty for mailto fallback)
    employer: '',  // <-- paste your URL here
    candidate: '', // <-- paste your URL here
  };
  // EmailJS (optional): include https://cdn.emailjs.com/dist/email.min.js then:
  //   emailjs.init('YOUR_PUBLIC_KEY');
  //   emailjs.send('SERVICE_ID','TEMPLATE_ID', payload);

  const ALLOWED_EXT = ['pdf', 'doc', 'docx'];
  const MAX_MB = 5;

  const showModal = (title, body, isError = false) => {
    const m = isError ? $('#modal-error') : $('#modal');
    if (!m) return;
    if (!isError) {
      const t = $('#modal-title'); if (t) t.textContent = title;
      const b = $('#modal-body'); if (b) b.textContent = body;
    } else {
      const b = $('#modal-error-body'); if (b) b.textContent = body;
    }
    m.classList.add('show');
  };
  const closeModal = () => $$('.modal-backdrop').forEach(m => m.classList.remove('show'));
  $('#modal-close')?.addEventListener('click', closeModal);
  $$('.modal-close-btn').forEach(b => b.addEventListener('click', closeModal));
  $$('.modal-backdrop').forEach(m => m.addEventListener('click', e => { if (e.target === m) closeModal(); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const validateField = (input) => {
    const errEl = input.parentElement.querySelector('.field-error');
    let valid = true;
    let msg = '';

    if (input.required && !input.value.trim()) {
      valid = false; msg = 'This field is required.';
    } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      valid = false; msg = 'Please enter a valid email.';
    } else if (input.type === 'tel' && input.value && !/^[\d\s\+\-\(\)]{7,}$/.test(input.value)) {
      valid = false; msg = 'Please enter a valid phone number.';
    } else if (input.type === 'file' && input.files?.[0]) {
      const f = input.files[0];
      const ext = f.name.split('.').pop().toLowerCase();
      if (!ALLOWED_EXT.includes(ext)) { valid = false; msg = 'Only PDF, DOC, or DOCX files are allowed.'; }
      else if (f.size > MAX_MB * 1024 * 1024) { valid = false; msg = `File must be under ${MAX_MB} MB.`; }
    }

    input.classList.toggle('invalid', !valid);
    if (errEl) { errEl.textContent = msg; errEl.classList.toggle('show', !valid); }
    return valid;
  };

  $$('#contact .form-input').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('invalid')) validateField(input);
    });
  });

  const FALLBACK_EMAIL = 'sagencrew@gmail.com';

  // Build a mailto: link that contains the form contents as a pre-composed email.
  // Used when no backend endpoint is configured — visitor's email client opens
  // and they hit Send. You actually receive the inquiry, no Formspree needed.
  const buildMailtoFromForm = (form, kind) => {
    const fd = new FormData(form);
    const lines = [];
    const subject = kind === 'employer'
      ? `Hiring requirement — Sage & Crew Next`
      : kind === 'project'
      ? `New project inquiry — Sage & Crew Next`
      : `Resume submission — Sage & Crew Next`;
    lines.push(kind === 'employer'
      ? 'New hiring requirement submitted via the website:'
      : kind === 'project'
      ? 'New project inquiry submitted via the website:'
      : 'New candidate enquiry submitted via the website:');
    lines.push('');
    for (const [key, val] of fd.entries()) {
      if (key.startsWith('_')) continue;          // skip internal markers
      if (val instanceof File) {
        if (val.name) lines.push(`${key}: (attachment "${val.name}" — please re-attach manually before sending)`);
      } else if (String(val).trim()) {
        lines.push(`${key}: ${val}`);
      }
    }
    lines.push('');
    lines.push('— Sent from sage-and-crew website');
    return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  const submitToEndpoint = async (endpoint, payload, form, kind) => {
    if (!endpoint) {
      // No backend yet — open visitor's email client with a pre-composed message.
      // We return a special marker so handleSubmit can show the right confirmation.
      const mailto = buildMailtoFromForm(form, kind);
      window.location.href = mailto;
      return { ok: true, mode: 'mailto' };
    }
    try {
      // Works for Formspree and most Apps Script web-apps with FormData
      const res = await fetch(endpoint, {
        method: 'POST',
        body: payload, // FormData supports file uploads
        // Formspree expects this header for JSON acks; harmless otherwise
        headers: { 'Accept': 'application/json' },
      });
      return { ok: res.ok };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  };

  const handleSubmit = async (form, kind) => {
    const inputs = $$('.form-input', form);
    let allValid = true;
    inputs.forEach(i => { if (!validateField(i)) allValid = false; });
    if (!allValid) {
      showModal('', 'Please fix the highlighted fields and try again.', true);
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span><span class="ml-2">Sending…</span>';
    btn.classList.add('inline-flex', 'items-center', 'justify-center');

    const fd = new FormData(form);
    fd.append('_kind', kind);
    fd.append('_source', 'sage-and-crew-next');

    const result = await submitToEndpoint(ENDPOINTS[kind], fd, form, kind);

    btn.disabled = false;
    btn.innerHTML = originalHTML;

    if (result.ok && result.mode === 'mailto') {
      // Email client should open. Show a clarifying message so visitor knows what to do.
      showModal(
        'Opening your email…',
        `Your email app should open with the message pre-filled to ${FALLBACK_EMAIL}. Please review and hit Send. (If a file was attached, you'll need to re-attach it in the email.)`
      );
    } else if (result.ok) {
      form.reset();
      $$('.form-input', form).forEach(i => i.classList.remove('invalid'));
      if (kind === 'employer') {
        showModal('Hiring requirement received', 'Our team will review your requirement and contact you shortly.');
      } else {
        showModal('Resume received', 'Our team will review your profile and contact you shortly.');
      }
    } else {
      showModal('', `We couldn't send your details. Please email us directly at ${FALLBACK_EMAIL}.`, true);
    }
  };

  $('#form-project')?.addEventListener('submit', e => { e.preventDefault(); handleSubmit(e.currentTarget, 'project'); });
  $('#form-employer')?.addEventListener('submit', e => { e.preventDefault(); handleSubmit(e.currentTarget, 'employer'); });
  $('#form-candidate')?.addEventListener('submit', e => { e.preventDefault(); handleSubmit(e.currentTarget, 'candidate'); });

  /* ---------------- 21. WHATSAPP — pre-fill messages, auto-rewrite, placeholder guard ----------------
     HOW TO SET YOUR REAL NUMBER:
       Change the value of WA_NUMBER below. That's it — links across all pages
       auto-rewrite to the new number on load. No need to edit HTML files.

       Format: country code + number, no '+' or spaces.
       Example for India: '919876543210'
  */
  const WA_NUMBER = '919133666619';                  // Live: India (+91) 9133666619
  const WA_PLACEHOLDER_PATTERN = /^91X+$|^910000000000$/i;

  const isPlaceholder = WA_PLACEHOLDER_PATTERN.test(WA_NUMBER);

  if (isPlaceholder) {
    console.warn(
      '%c[Sage & Crew] WhatsApp number not configured.',
      'color:#D4AF37;font-weight:bold;',
      '\nClicks on WhatsApp buttons will show a setup notice instead of opening WhatsApp.',
      '\nFix: set WA_NUMBER in assets/app.js (e.g. \'919876543210\') and redeploy.'
    );
  }

  const WA_BASE = `https://wa.me/${WA_NUMBER}`;

  const buildWA = (intent) => {
    const msg = intent === 'employer'
      ? 'Hi Sage & Crew, I need hiring support for my company.'
      : intent === 'candidate'
      ? 'Hi Sage & Crew, I need resume / career support.'
      : 'Hi Sage & Crew, I’d like to know more.';
    return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
  };

  // Rewrite ALL existing wa.me links on the page to use the current WA_NUMBER.
  // This covers FAB, contact-page buttons, and any other hardcoded ones in HTML.
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    try {
      const orig = a.getAttribute('href') || '';
      // preserve the original ?text= portion (it's intent-specific)
      const queryIdx = orig.indexOf('?');
      const query = queryIdx >= 0 ? orig.slice(queryIdx) : '';
      a.href = WA_BASE + query;
    } catch (_) {}
  });

  // Floating WhatsApp FAB defaults to general
  const fab = $('#wa-fab');
  if (fab) fab.href = buildWA('general');

  // Intent-aware WhatsApp links (data-wa="employer" / "candidate" / "general")
  $$('a[data-wa]').forEach(a => {
    a.href = buildWA(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Click guard: when number is a placeholder, prevent opening a broken chat.
  // Shows a friendly setup notice instead.
  if (isPlaceholder) {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href*="wa.me/"]');
      if (!a) return;
      e.preventDefault();
      // Build a small modal-style alert
      const existing = document.getElementById('wa-placeholder-modal');
      if (existing) return;
      const modal = document.createElement('div');
      modal.id = 'wa-placeholder-modal';
      modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(11,31,58,0.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;animation:waFadeIn .25s ease;';
      modal.innerHTML = `
        <div style="background:#F8F7F2;border-radius:16px;max-width:420px;width:100%;padding:28px;box-shadow:0 24px 60px -12px rgba(0,0,0,0.4);font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
          <div style="width:48px;height:48px;border-radius:12px;background:rgba(212,175,55,0.15);color:#A8881F;display:flex;align-items:center;justify-content:center;margin-bottom:14px;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
          </div>
          <div style="font-family:'Playfair Display',serif;font-size:22px;color:#0B1F3A;line-height:1.3;margin-bottom:8px;">WhatsApp not yet configured</div>
          <p style="font-size:14px;color:#4B5563;line-height:1.5;margin:0 0 18px;">This is a brand-new site and the WhatsApp number is still a placeholder. For now please email us at <a href="mailto:sagencrew@gmail.com" style="color:#A8881F;text-decoration:underline;">sagencrew@gmail.com</a> and we'll get back to you quickly.</p>
          <div style="display:flex;gap:10px;">
            <a href="mailto:sagencrew@gmail.com" style="flex:1;background:#0B1F3A;color:#F8F7F2;padding:11px 16px;border-radius:9999px;text-align:center;font-size:13.5px;font-weight:600;text-decoration:none;">Email us instead</a>
            <button type="button" id="wa-modal-close" style="padding:11px 16px;border-radius:9999px;border:1px solid rgba(11,31,58,0.15);background:transparent;color:#0B1F3A;font-size:13.5px;font-weight:600;cursor:pointer;">Close</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      const closeFn = () => modal.remove();
      modal.addEventListener('click', (ev) => { if (ev.target === modal) closeFn(); });
      document.getElementById('wa-modal-close')?.addEventListener('click', closeFn);
    }, true);
    // small inline keyframes for the modal fade-in
    if (!document.getElementById('wa-placeholder-style')) {
      const s = document.createElement('style');
      s.id = 'wa-placeholder-style';
      s.textContent = '@keyframes waFadeIn{from{opacity:0}to{opacity:1}}';
      document.head.appendChild(s);
    }
  }

  /* ---------------- 22B. FREE HR TOOLS ---------------- */

  // Helpers
  const fmtINR = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const fmtINRshort = (n) => {
    if (n >= 1e7) return '₹' + (n / 1e7).toFixed(2) + ' Cr';
    if (n >= 1e5) return '₹' + (n / 1e5).toFixed(2) + ' L';
    if (n >= 1e3) return '₹' + (n / 1e3).toFixed(1) + 'K';
    return '₹' + Math.round(n);
  };

  // ===== Tool 1: ATS Resume Score =====
  (function atsTool() {
    const resumeEl = $('#ats-resume');
    const jdEl = $('#ats-jd');
    const runBtn = $('#ats-run');
    const sampleBtn = $('#ats-sample');
    const clearBtn = $('#ats-clear');
    const result = $('#ats-result');
    if (!resumeEl) return;

    const STOPWORDS = new Set(('a an and are as at be by for from has have he her his i in is it its of on or our she that the their they this to was we were will with you your at having been being should would could may might must do does did not no nor so than then there these those very can about across after among any been before behind between both during each every few how if into just like more most much off only other out over per same since some such them through under up upon what when where which while who why all').split(/\s+/));

    const tokenize = (txt) => (txt || '').toLowerCase()
      .replace(/[^a-z0-9+.# /-]/g, ' ')
      .split(/\s+/)
      .filter(w => w && w.length > 1 && !STOPWORDS.has(w) && !/^\d+$/.test(w));

    const ngrams = (tokens, n) => {
      const out = [];
      for (let i = 0; i <= tokens.length - n; i++) out.push(tokens.slice(i, i + n).join(' '));
      return out;
    };

    const ACTION_VERBS = ['led','built','launched','designed','developed','implemented','reduced','increased','improved','automated','migrated','architected','delivered','managed','scaled','optimized','streamlined','spearheaded','drove','grew','generated','saved','negotiated','founded','restructured','mentored','coached','owned','shipped','deployed','engineered','rewrote','refactored','accelerated'];

    const analyze = () => {
      const resume = resumeEl.value.trim();
      const jd = jdEl.value.trim();
      if (!resume || !jd) {
        alert('Please paste both your resume and the job description.');
        return;
      }

      const rTokens = tokenize(resume);
      const jdTokens = tokenize(jd);
      const rSet = new Set([...rTokens, ...ngrams(rTokens, 2)]);

      // JD keyword frequency
      const jdFreq = {};
      [...jdTokens, ...ngrams(jdTokens, 2)].forEach(w => { jdFreq[w] = (jdFreq[w] || 0) + 1; });
      // Sort, take top 25 (filter overly generic)
      const jdTop = Object.entries(jdFreq)
        .filter(([w]) => w.length > 2 && !STOPWORDS.has(w))
        .sort((a, b) => b[1] - a[1])
        .slice(0, 25);

      // Match keywords
      const matched = jdTop.filter(([w]) => rSet.has(w));
      const missing = jdTop.filter(([w]) => !rSet.has(w));
      const keywordScore = jdTop.length ? Math.round((matched.length / jdTop.length) * 100) : 0;

      // Action verb count
      const verbHits = ACTION_VERBS.filter(v => new RegExp('\\b' + v + '\\b', 'i').test(resume)).length;
      const verbScore = Math.min(100, Math.round((verbHits / 8) * 100));

      // Quantified achievements (numbers, %, $, ₹)
      const quantMatches = (resume.match(/\b\d+\s*%|\b\d{2,}|\$\d|\₹\s?\d/g) || []).length;
      const quantScore = Math.min(100, Math.round((quantMatches / 8) * 100));

      // Length / readability
      const wordCount = resume.split(/\s+/).filter(Boolean).length;
      let lengthScore = 100;
      if (wordCount < 250) lengthScore = Math.round((wordCount / 250) * 100);
      else if (wordCount > 1200) lengthScore = Math.max(40, 100 - Math.round((wordCount - 1200) / 20));

      // Contact info
      const hasEmail = /\b[\w.+-]+@[\w-]+\.[\w.-]+\b/.test(resume);
      const hasPhone = /\b[\d][\d\s\-+().]{7,}\b/.test(resume);
      const hasLinks = /(linkedin|github|portfolio|behance|dribbble)/i.test(resume);
      const contactScore = (hasEmail ? 40 : 0) + (hasPhone ? 30 : 0) + (hasLinks ? 30 : 0);

      // Formatting heuristic — looks like sections present
      const sectionWords = ['experience','education','skills','summary','projects','certifications','achievements'];
      const sectionsHit = sectionWords.filter(s => new RegExp('\\b' + s + '\\b', 'i').test(resume)).length;
      const formatScore = Math.min(100, Math.round((sectionsHit / 4) * 100));

      // Composite
      const overall = Math.round(
        keywordScore * 0.40 +
        verbScore   * 0.15 +
        quantScore  * 0.15 +
        lengthScore * 0.10 +
        contactScore * 0.10 +
        formatScore * 0.10
      );

      // Render
      result.classList.remove('hidden');
      const ring = $('#ats-ring');
      const total = 97.4;
      ring.style.strokeDashoffset = total * (1 - overall / 100);
      const scoreEl = $('#ats-score');
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / 1300);
        scoreEl.textContent = Math.round(p * overall);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);

      const verdict = overall >= 80 ? 'Strong match — ready to apply.'
                    : overall >= 65 ? 'Good match — small tweaks recommended.'
                    : overall >= 50 ? 'Moderate match — needs targeted improvements.'
                    : 'Low match — meaningful rework needed.';
      $('#ats-verdict').textContent = verdict;

      const breakdown = [
        ['Keyword match', keywordScore],
        ['Action verbs', verbScore],
        ['Quantified achievements', quantScore],
        ['Resume length', lengthScore],
        ['Contact info', contactScore],
        ['Section structure', formatScore],
      ];
      $('#ats-breakdown').innerHTML = breakdown.map(([label, s]) => `
        <div>
          <div class="flex justify-between text-[13px] mb-1.5"><span class="text-charcoal/70">${label}</span><span class="font-semibold ${s >= 70 ? 'text-sage-deep' : s >= 50 ? 'text-gold-deep' : 'text-red-600'}">${s}%</span></div>
          <div class="h-1.5 rounded-full bg-mist overflow-hidden"><div class="h-full rounded-full ${s >= 70 ? 'bg-sage' : s >= 50 ? 'bg-gold' : 'bg-red-400'}" style="width: ${s}%; transition: width 1s ease"></div></div>
        </div>
      `).join('');

      // Missing keywords
      const missingPanel = $('#ats-missing');
      const missingChips = $('#ats-missing-chips');
      if (missing.length) {
        missingPanel.classList.remove('hidden');
        missingChips.innerHTML = missing.slice(0, 12).map(([w]) =>
          `<span class="chip" style="background:rgba(220,38,38,0.06);color:#B91C1C;border-color:rgba(220,38,38,0.18)">${w}</span>`
        ).join('');
      } else {
        missingPanel.classList.add('hidden');
      }

      // Tips
      const tips = [];
      if (keywordScore < 70) tips.push('Add the missing keywords above where they truthfully apply to your experience.');
      if (verbScore < 60) tips.push('Start more bullet points with strong action verbs (led, built, reduced, scaled, automated).');
      if (quantScore < 50) tips.push('Quantify outcomes — add numbers, percentages, time saved, revenue impact.');
      if (!hasEmail || !hasPhone) tips.push('Add a clear email and phone number at the top.');
      if (!hasLinks) tips.push('Include a LinkedIn URL. Recruiters expect it.');
      if (sectionsHit < 4) tips.push('Use clear section headers (Summary · Experience · Skills · Education).');
      if (wordCount < 250) tips.push('Resume looks short — flesh out experience and add measurable achievements.');
      if (wordCount > 1200) tips.push('Resume is long — aim for 1–2 pages and trim less-relevant detail.');
      if (!tips.length) tips.push('Solid foundation — review for tailoring to each application.');
      $('#ats-tips-list').innerHTML = tips.map(t => `<li class="flex gap-2"><span class="text-gold mt-0.5">•</span><span>${t}</span></li>`).join('');

      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    runBtn?.addEventListener('click', analyze);
    sampleBtn?.addEventListener('click', () => {
      resumeEl.value = `Rohan Sharma
Senior Software Engineer | Backend & Cloud
rohan@example.com · +91 98765 43210 · linkedin.com/in/rohan

SUMMARY
Backend engineer with 5 years building scalable APIs on AWS. Reduced p99 latency by 38% and cut deployment time by 60% through CI/CD automation.

EXPERIENCE
TechCorp · Senior Software Engineer · 2022–Present
- Led migration of monolith to microservices on Kubernetes, scaling to 10M+ requests/day
- Built event-driven pipelines with Kafka serving 50+ internal teams
- Mentored 3 junior engineers, conducted 30+ technical interviews

SKILLS
Java, Spring Boot, AWS, PostgreSQL, Docker, Jenkins

EDUCATION
B.Tech Computer Science, IIT Delhi, 2019`;
      jdEl.value = `Senior Backend Engineer — DevOps focus

We are hiring a Senior Backend Engineer with strong DevOps skills.

Required:
- 5+ years building scalable APIs in Java/Spring Boot
- Hands-on AWS experience (EC2, S3, Lambda, RDS)
- Kubernetes and Docker in production
- CI/CD pipelines (Jenkins, GitHub Actions)
- PostgreSQL, Redis, Kafka
- Monitoring and observability (Prometheus, Grafana)

Nice to have: Terraform, Go, GraphQL.

You'll lead microservices design, mentor engineers, and drive deployment automation.`;
      analyze();
    });
    clearBtn?.addEventListener('click', () => {
      resumeEl.value = ''; jdEl.value = ''; result.classList.add('hidden');
    });
  })();

  // ===== Tool 2: CTC Calculator (India, FY 2025-26 new regime) =====
  (function ctcTool() {
    const slider = $('#ctc-input');
    const display = $('#ctc-display');
    const exact = $('#ctc-exact');
    const bonusEl = $('#ctc-bonus');
    if (!slider) return;

    // FY 2025-26 New tax regime (illustrative — for guidance only)
    const taxNewRegime = (taxableIncome) => {
      if (taxableIncome <= 1200000) return 0; // rebate u/s 87A under new regime
      let tax = 0;
      const slabs = [
        [400000, 0],
        [800000, 0.05],
        [1200000, 0.10],
        [1600000, 0.15],
        [2000000, 0.20],
        [2400000, 0.25],
        [Infinity, 0.30],
      ];
      let prev = 0;
      for (const [limit, rate] of slabs) {
        if (taxableIncome > limit) { tax += (limit - prev) * rate; prev = limit; }
        else { tax += (taxableIncome - prev) * rate; break; }
      }
      return tax * 1.04; // 4% cess
    };

    const compute = () => {
      const ctc = +slider.value;
      const bonus = +(bonusEl.value || 0);
      const baseAnnual = ctc - bonus;

      const basic = baseAnnual * 0.5;
      const hra = basic * 0.4;
      const epfEmployer = Math.min(basic * 0.12, 21600);
      const gratuity = basic * 0.0481;
      const fixedDeducted = epfEmployer + gratuity;
      const special = Math.max(0, baseAnnual - basic - hra - fixedDeducted);
      const grossAnnual = basic + hra + special + bonus;
      const epfEmployee = Math.min(basic * 0.12, 21600);
      const profTax = 2400;
      const standardDeduction = 75000;
      const taxableIncome = Math.max(0, grossAnnual - epfEmployee - profTax - standardDeduction);
      const incomeTax = taxNewRegime(taxableIncome);
      const netAnnual = grossAnnual - epfEmployee - profTax - incomeTax;
      const monthly = netAnnual / 12;

      display.textContent = fmtINRshort(ctc);
      $('#ctc-monthly').textContent = fmtINR(monthly);
      $('#ctc-annual').textContent = fmtINR(netAnnual);
      $('#ctc-basic').textContent = fmtINR(basic);
      $('#ctc-hra').textContent = fmtINR(hra);
      $('#ctc-special').textContent = fmtINR(special);
      $('#ctc-gross').textContent = fmtINR(grossAnnual);
      $('#ctc-epf').textContent = fmtINR(epfEmployee);
      $('#ctc-tax').textContent = fmtINR(incomeTax);
      $('#ctc-pt').textContent = fmtINR(profTax);
      $('#ctc-net').textContent = fmtINR(netAnnual);
    };

    slider.addEventListener('input', compute);
    bonusEl.addEventListener('input', compute);
    exact.addEventListener('input', () => {
      const v = +exact.value;
      if (v >= 100000 && v <= 500000000) {
        slider.value = Math.min(+slider.max, Math.max(+slider.min, v));
        compute();
      }
    });
    compute();
  })();

  // ===== Tool 3: JD Keyword Extractor =====
  (function jdTool() {
    const input = $('#jd-input');
    const runBtn = $('#jd-run');
    const sampleBtn = $('#jd-sample');
    const result = $('#jd-result');
    if (!input) return;

    const SKILL_BANK = ['javascript','typescript','python','java','c++','c#','go','rust','ruby','php','swift','kotlin','scala','sql','nosql','html','css','sass','tailwind','react','vue','angular','svelte','next.js','node.js','express','django','flask','spring','spring boot','rails','laravel','aws','azure','gcp','terraform','kubernetes','k8s','docker','jenkins','github actions','gitlab','ci/cd','devops','sre','linux','bash','postgresql','mysql','mongodb','redis','elasticsearch','kafka','rabbitmq','graphql','rest','grpc','microservices','agile','scrum','jira','figma','salesforce','sap','hubspot','tableau','power bi','excel','recruitment','sourcing','onboarding','hrms','workday','greenhouse','lever','ats','tax','gst','accounting','sales','marketing','seo','sem','content','copywriting','automation','selenium','cypress','jest','pytest','machine learning','deep learning','tensorflow','pytorch','nlp','data science','analytics','etl','airflow','snowflake','databricks','hadoop','spark','communication','leadership','teamwork','problem solving','stakeholder management','project management','prince2','pmp','six sigma','itil','ios','android','flutter','react native','blockchain','solidity','prometheus','grafana','observability','monitoring','networking','security','iam','soc2','iso','penetration testing','figma','photoshop','illustrator'];
    const STOP = new Set(('a an and are as at be by for from has have he her his i in is it its of on or our she that the their they this to was we were will with you your having been being should would could may might must do does did not no nor so than then there these those very can about across after among any been before behind between both during each every few how if into just like more most much off only other out over per same since some such them through under up upon what when where which while who why all also able role roles position required must work team teams company looking experience years year work').split(/\s+/));

    const run = () => {
      const txt = input.value.trim();
      if (!txt) { alert('Please paste a job description.'); return; }
      const cleaned = txt.toLowerCase().replace(/[^a-z0-9+.# /-]/g, ' ');
      const words = cleaned.split(/\s+/).filter(Boolean);
      const filtered = words.filter(w => w.length > 2 && !STOP.has(w));
      const totalWords = words.length;
      const unique = new Set(filtered).size;

      // Reading level (very rough Flesch-ish)
      const sentences = (txt.match(/[.!?]+/g) || []).length || 1;
      const avgWordsPerSentence = totalWords / sentences;
      const level = avgWordsPerSentence > 22 ? 'Complex' : avgWordsPerSentence > 16 ? 'Standard' : 'Easy';

      // Skill detection
      const lower = ' ' + cleaned + ' ';
      const foundSkills = SKILL_BANK.filter(s => lower.includes(' ' + s + ' ') || lower.includes(s + ',') || lower.includes(s + '.'));

      // Top keywords by frequency
      const freq = {};
      filtered.forEach(w => freq[w] = (freq[w] || 0) + 1);
      const top = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 10);
      const maxFreq = top[0]?.[1] || 1;

      // Years of experience
      const expMatch = txt.match(/(\d+)\s*(?:\+|to|-)?\s*\d*\s*years?/i);
      const exp = expMatch ? expMatch[0] : 'Not specified';

      // Qualifications
      const qualHit = ['bachelor','master','mba','phd','b.tech','m.tech','b.e','m.e','degree','diploma','engineering','computer science','mca','bca'].filter(q => new RegExp('\\b' + q.replace('.', '\\.') + '\\b', 'i').test(txt));
      const qual = qualHit.length ? qualHit.slice(0, 3).join(', ') : 'Not specified';

      // Tier
      const tier = /\bsenior|lead|principal|staff|head of|director|vp\b/i.test(txt) ? 'Senior / Leadership'
                : /\bjunior|entry|fresher|graduate|intern\b/i.test(txt) ? 'Entry / Junior'
                : /\bmanager\b/i.test(txt) ? 'Mid–Senior / Manager'
                : 'Mid-level (likely)';

      result.classList.remove('hidden');
      $('#jd-words').textContent = totalWords;
      $('#jd-unique').textContent = unique;
      $('#jd-level').textContent = level;
      $('#jd-skills').innerHTML = foundSkills.length
        ? foundSkills.map(s => `<span class="chip chip-gold">${s}</span>`).join('')
        : '<span class="text-[13px] text-charcoal/55">No common skills detected — paste a longer JD.</span>';
      $('#jd-keywords').innerHTML = top.map(([w, c]) => `
        <div>
          <div class="flex justify-between text-[12.5px] mb-1"><span class="text-charcoal/75 font-medium">${w}</span><span class="text-charcoal/55">${c}×</span></div>
          <div class="h-1.5 rounded-full bg-mist overflow-hidden"><div class="h-full bg-gradient-to-r from-gold to-sage rounded-full" style="width: ${(c / maxFreq) * 100}%; transition: width 1s ease"></div></div>
        </div>
      `).join('');
      $('#jd-exp').textContent = exp;
      $('#jd-qual').textContent = qual;
      $('#jd-tier').textContent = tier;
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    runBtn?.addEventListener('click', run);
    sampleBtn?.addEventListener('click', () => {
      input.value = `We are hiring a Senior DevOps Engineer with 6+ years of experience.

Responsibilities:
- Design and maintain CI/CD pipelines using Jenkins and GitHub Actions
- Manage Kubernetes clusters in production on AWS
- Build infrastructure as code with Terraform
- Implement observability with Prometheus and Grafana
- Collaborate with development teams on deployment automation

Required skills:
- Strong AWS experience (EC2, S3, Lambda, EKS)
- Docker, Kubernetes, Terraform, Jenkins
- Linux administration, Bash scripting
- Python or Go for tooling
- Bachelor's degree in Computer Science or related field

Nice to have: SRE experience, multi-region deployments, security/IAM.

Location: Hyderabad / Remote.`;
      run();
    });
  })();

  // ===== Tool 4: Cost of Hire =====
  (function cohTool() {
    const ids = ['coh-salary','coh-days','coh-fee','coh-jobs','coh-onboard','coh-hours','coh-rate','coh-ramp'];
    const inputs = ids.map(id => $('#' + id));
    if (!inputs[0]) return;

    const compute = () => {
      const [salary, days, feePct, jobs, onboard, hours, rate, rampPct] = inputs.map(el => +el.value || 0);
      const monthly = salary / 12;
      const dailySalary = salary / 250; // working days
      const agencyFee = salary * (feePct / 100);
      const interviewerCost = hours * rate;
      const rampCost = monthly * (rampPct / 100); // assume 1 month of partial productivity
      const vacancyCost = days * dailySalary * 0.5; // 50% productivity loss while role open

      const total = agencyFee + jobs + interviewerCost + onboard + rampCost + vacancyCost;
      const perDay = days > 0 ? total / days : 0;
      const pct = salary > 0 ? Math.min(100, Math.round((total / salary) * 100)) : 0;

      $('#coh-total').textContent = fmtINRshort(total);
      $('#coh-perday').textContent = fmtINR(perDay);
      $('#coh-out-fee').textContent = fmtINR(agencyFee);
      $('#coh-out-jobs').textContent = fmtINR(jobs);
      $('#coh-out-time').textContent = fmtINR(interviewerCost);
      $('#coh-out-onboard').textContent = fmtINR(onboard);
      $('#coh-out-ramp').textContent = fmtINR(rampCost);
      $('#coh-out-vacant').textContent = fmtINR(vacancyCost);
      $('#coh-bar').style.width = pct + '%';
      $('#coh-pct').textContent = pct;
    };

    inputs.forEach(el => el.addEventListener('input', compute));
    compute();
  })();

  // ===== Tool 5: LinkedIn Headline Generator =====
  (function liTool() {
    const runBtn = $('#li-run');
    const result = $('#li-result');
    if (!runBtn) return;

    runBtn.addEventListener('click', () => {
      const role = $('#li-role').value.trim() || 'Professional';
      const years = $('#li-years').value.trim();
      const skillsRaw = $('#li-skills').value.trim();
      const value = $('#li-value').value.trim();
      const industry = $('#li-industry').value.trim();
      const status = $('#li-status').value.trim();
      const skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);
      const skillsStr = skills.length ? skills.join(' · ') : '';
      const exp = years ? `${years}+ Years` : '';

      const headlines = [];

      // 1. Achievement-led
      if (value) {
        headlines.push({
          label: 'Achievement-led',
          desc: 'Leads with proof and impact. Strong for senior roles.',
          text: `${role} | Helping teams ${value} | ${skillsStr || (industry || 'Building results')}`
        });
      } else {
        headlines.push({
          label: 'Achievement-led',
          desc: 'Leads with proof and impact. Strong for senior roles.',
          text: `${role} ${exp ? '· ' + exp : ''} | ${skillsStr || industry || 'Driving measurable outcomes'}`
        });
      }

      // 2. Value-led
      headlines.push({
        label: 'Value-led',
        desc: 'Shows the "why" — what you bring, not just titles.',
        text: `${role} who ${value || 'builds high-performing systems'}${industry ? ' for ' + industry + ' teams' : ''}${skills[0] ? ' · ' + skills.slice(0, 2).join(' & ') : ''}`
      });

      // 3. Keyword-led (best for ATS / recruiters searching)
      headlines.push({
        label: 'Keyword-led',
        desc: 'Maximizes recruiter search visibility. Best for active job seekers.',
        text: `${role} | ${skillsStr || 'Skills coming soon'}${exp ? ' | ' + exp : ''}${industry ? ' | ' + industry : ''}`
      });

      // 4. Story-led
      headlines.push({
        label: 'Story-led',
        desc: 'Personal and memorable. Stands out in a recruiter\'s feed.',
        text: `Turning ${industry || 'complex problems'} into clear outcomes · ${role}${exp ? ' · ' + exp : ''}${status ? ' · Open to ' + status.toLowerCase() : ''}`
      });

      result.innerHTML = headlines.map((h, i) => `
        <div class="rounded-2xl border border-navy/8 bg-ivory p-5">
          <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <span class="chip chip-gold">${i + 1}. ${h.label}</span>
              <span class="text-[12px] text-charcoal/55">${h.desc}</span>
            </div>
            <button class="li-copy text-[12px] font-semibold text-navy hover:text-gold transition inline-flex items-center gap-1.5" data-copy="${h.text.replace(/"/g, '&quot;')}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              <span>Copy</span>
            </button>
          </div>
          <div class="text-[15px] text-navy font-medium leading-snug" style="font-family:'Plus Jakarta Sans',sans-serif">${h.text}</div>
          <div class="mt-2 text-[11.5px] text-charcoal/50">${h.text.length} characters · LinkedIn limit 220</div>
        </div>
      `).join('');

      result.classList.remove('hidden');
      result.querySelectorAll('.li-copy').forEach(btn => {
        btn.addEventListener('click', async () => {
          const txt = btn.dataset.copy;
          try {
            await navigator.clipboard.writeText(txt);
            const span = btn.querySelector('span');
            const orig = span.textContent;
            span.textContent = 'Copied ✓';
            btn.style.color = '#5A7E5E';
            setTimeout(() => { span.textContent = orig; btn.style.color = ''; }, 1600);
          } catch (e) { /* clipboard blocked */ }
        });
      });
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  })();

  /* ---------------- 22C. PRICING + FAQ TABS, PACKAGE PRE-FILL ---------------- */
  // Pricing tab switching
  $$('[data-price-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.priceTab;
      $$('[data-price-tab]').forEach(b => {
        const active = b.dataset.priceTab === name;
        b.classList.toggle('tab-active', active);
        b.classList.toggle('text-charcoal/70', !active);
      });
      $$('[data-price-panel]').forEach(p => {
        p.classList.toggle('hidden', p.dataset.pricePanel !== name);
      });
      // re-trigger reveals
      $$(`[data-price-panel="${name}"] .reveal`).forEach(r => r.classList.add('in'));
    });
  });

  // FAQ tab switching
  $$('[data-faq-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.faqTab;
      $$('[data-faq-tab]').forEach(b => {
        const active = b.dataset.faqTab === name;
        b.classList.toggle('tab-active', active);
        b.classList.toggle('text-charcoal/70', !active);
      });
      $$('[data-faq-panel]').forEach(p => {
        p.classList.toggle('hidden', p.dataset.faqPanel !== name);
      });
      $$(`[data-faq-panel="${name}"] .reveal`).forEach(r => r.classList.add('in'));
    });
  });

  // Pricing card CTA → pre-fill the contact form's Message with the package name
  $$('.pricing-cta').forEach(a => {
    a.addEventListener('click', () => {
      const pkg = a.dataset.package;
      if (!pkg) return;
      // After the tab switch (handled by existing data-tab handler), populate message
      setTimeout(() => {
        const tab = a.dataset.tab; // 'employer' or 'candidate'
        const panel = $(`[data-form-panel="${tab}"]`);
        if (!panel) return;
        const msgField = panel.querySelector('textarea');
        if (msgField && !msgField.value) {
          msgField.value = `I'm interested in the "${pkg}" package. Please share a quote and next steps.`;
          msgField.classList.add('flash-highlight');
          setTimeout(() => msgField.classList.remove('flash-highlight'), 1800);
        }
      }, 400);
    });
  });

  /* ---------------- 22. STICKY MOBILE CTA after hero ---------------- */
  const mobileCTA = $('#mobile-cta');
  if (mobileCTA) {
    const heroEl = document.getElementById('top');
    const onScroll2 = () => {
      const past = heroEl ? (heroEl.getBoundingClientRect().bottom < 100) : window.scrollY > 600;
      const inFooter = (document.documentElement.scrollHeight - window.scrollY - window.innerHeight) < 200;
      mobileCTA.classList.toggle('show', past && !inFooter);
    };
    window.addEventListener('scroll', onScroll2, { passive: true });
    onScroll2();
  }

  /* ---------------- 23. TOOL 6 — PROJECT COST ESTIMATOR ----------------
     Ballpark estimator. Base ranges roughly in INR thousands; multiplied
     by complexity, integration count, and timeline. Conservative, not a quote.
  ---------------------------------------------------------------- */
  (function () {
    const run = $('#pc-run');
    if (!run) return;
    const fmt = (n) => '₹' + Math.round(n / 1000) * 1000 >= 100000
      ? '₹' + (n / 100000).toFixed(n >= 1000000 ? 0 : 1) + 'L'
      : '₹' + Math.round(n / 1000) + 'K';
    const formatINR = (n) => {
      if (n >= 10000000) return '₹' + (n / 10000000).toFixed(1) + ' Cr';
      if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + ' L';
      if (n >= 1000) return '₹' + Math.round(n / 1000) + 'K';
      return '₹' + n;
    };
    // Base ballparks in INR (mid-point of typical bracket for Indian market, 2026)
    const base = {
      'landing':       { low: 25000,   mid: 45000,   high: 80000   },
      'business-site': { low: 60000,   mid: 120000,  high: 200000  },
      'ecommerce':     { low: 150000,  mid: 300000,  high: 600000  },
      'webapp':        { low: 250000,  mid: 500000,  high: 1200000 },
      'dashboard':     { low: 150000,  mid: 300000,  high: 700000  },
      'automation':    { low: 60000,   mid: 150000,  high: 400000  },
      'crm':           { low: 200000,  mid: 450000,  high: 1000000 },
    };
    const complexityMult = { simple: 0.7, standard: 1.0, advanced: 1.5, enterprise: 2.2 };
    const timelineMult = { flexible: 0.95, standard: 1.0, rush: 1.25 };
    const integrationCost = 25000; // per integration, added to mid

    run.addEventListener('click', () => {
      const type = $('#pc-type').value;
      const complexity = $('#pc-complexity').value;
      const integrations = Math.max(0, Math.min(20, parseInt($('#pc-integrations').value || '0', 10)));
      const timeline = $('#pc-timeline').value;

      const b = base[type] || base['business-site'];
      const cm = complexityMult[complexity] || 1.0;
      const tm = timelineMult[timeline] || 1.0;
      const intAdd = integrations * integrationCost;

      const low = Math.round((b.low * cm * tm + intAdd * 0.7) / 1000) * 1000;
      const mid = Math.round((b.mid * cm * tm + intAdd) / 1000) * 1000;
      const high = Math.round((b.high * cm * tm + intAdd * 1.3) / 1000) * 1000;

      $('#pc-low').textContent = formatINR(low);
      $('#pc-mid').textContent = formatINR(mid);
      $('#pc-high').textContent = formatINR(high);
      $('#pc-result').classList.remove('hidden');
      $('#pc-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  })();

  /* ---------------- 24. TOOL 7 — WEBSITE READINESS CHECKLIST ---------------- */
  (function () {
    const list = $('#wc-list');
    if (!list) return;
    const items = [
      { id: 'wc1', label: 'Domain & hosting set up', detail: 'Domain registered, DNS pointed, SSL active' },
      { id: 'wc2', label: 'Mobile responsive on phones & tablets', detail: 'Tested on at least one iOS and one Android device' },
      { id: 'wc3', label: 'All page copy proofread', detail: 'Spelling, grammar, factual accuracy double-checked' },
      { id: 'wc4', label: 'Contact form actually delivers email', detail: 'Submit a test entry — confirm you receive it' },
      { id: 'wc5', label: 'WhatsApp / phone numbers are live (not placeholders)', detail: 'No "910000000000" or "+91 XXXXX" anywhere' },
      { id: 'wc6', label: 'Page titles & meta descriptions set', detail: 'Each page has a unique SEO title and description' },
      { id: 'wc7', label: 'Favicon and social share image (OG) added', detail: 'Looks polished when shared on WhatsApp / LinkedIn' },
      { id: 'wc8', label: 'Loading speed under 3 seconds', detail: 'Test at pagespeed.web.dev — aim for 80+ mobile score' },
      { id: 'wc9', label: 'Privacy policy & terms pages exist', detail: 'Required if you collect any visitor data' },
      { id: 'wc10', label: 'Analytics installed (GA4 or alternative)', detail: 'You can see how many people visit and which pages' },
      { id: 'wc11', label: 'Backups configured', detail: 'Automatic, off-site, restorable if site breaks' },
      { id: 'wc12', label: 'Tested on Chrome, Safari, Firefox', detail: 'No layout breaks across major browsers' },
    ];

    const render = () => {
      list.innerHTML = items.map(it => `
        <label class="flex items-start gap-3 py-2.5 border-b border-navy/5 last:border-0 cursor-pointer group">
          <input type="checkbox" data-wc id="${it.id}" class="mt-1 w-4 h-4 rounded border-navy/20 text-gold-deep focus:ring-gold/30" />
          <div class="flex-1 min-w-0">
            <div class="text-[14px] text-charcoal group-has-[:checked]:line-through group-has-[:checked]:text-charcoal/45 transition">${it.label}</div>
            <div class="text-[12px] text-charcoal/55 mt-0.5">${it.detail}</div>
          </div>
        </label>
      `).join('');
      updateScore();
    };

    const updateScore = () => {
      const total = items.length;
      const done = $$('[data-wc]:checked').length;
      const pct = Math.round((done / total) * 100);
      $('#wc-score-badge').textContent = `${done} / ${total} Complete`;
      $('#wc-bar').style.width = pct + '%';
      const msg = $('#wc-message');
      if (done === 0) msg.textContent = 'Tick items as you complete them. Aim for at least 10/12 before launch.';
      else if (done < 6) msg.textContent = `${done}/${total} done — good start. Keep going through the list before launch.`;
      else if (done < 10) msg.textContent = `${done}/${total} done — you're well on your way. A few key items left.`;
      else if (done < total) msg.innerHTML = `<strong class="text-navy">${done}/${total} — nearly there!</strong> Wrap up the last items and you're ready to launch.`;
      else msg.innerHTML = `<strong class="text-navy">✅ All ${total} items complete!</strong> Your site is ready for launch. Time to share the URL.`;
    };

    list.addEventListener('change', e => { if (e.target.matches('[data-wc]')) updateScore(); });
    $('#wc-reset')?.addEventListener('click', () => {
      $$('[data-wc]').forEach(cb => cb.checked = false);
      updateScore();
    });
    render();
  })();

  /* ---------------- 25. TOOL 8 — HIRING REQUIREMENT TEMPLATE ---------------- */
  (function () {
    const run = $('#jt-run');
    if (!run) return;

    const build = () => {
      const role = ($('#jt-role').value || '[Role Title]').trim();
      const company = ($('#jt-company').value || '[Company Name]').trim();
      const exp = ($('#jt-exp').value || '[Experience]').trim();
      const loc = ($('#jt-loc').value || '[Location]').trim();
      const type = $('#jt-type').value;
      const ctc = ($('#jt-ctc').value || '[CTC]').trim();
      const musts = ($('#jt-musts').value || '').split(',').map(s => s.trim()).filter(Boolean);
      const nices = ($('#jt-nices').value || '').split(',').map(s => s.trim()).filter(Boolean);
      const respLines = ($('#jt-resp').value || '').split('\n').map(s => s.trim()).filter(Boolean);
      const openings = ($('#jt-openings').value || '[Openings & timeline]').trim();

      const lines = [];
      lines.push(`HIRING REQUIREMENT — ${role.toUpperCase()}`);
      lines.push('═'.repeat(50));
      lines.push('');
      lines.push(`Company:        ${company}`);
      lines.push(`Role:           ${role}`);
      lines.push(`Experience:     ${exp}`);
      lines.push(`Location:       ${loc}`);
      lines.push(`Hiring Type:    ${type}`);
      lines.push(`CTC Range:      ${ctc}`);
      lines.push(`Openings:       ${openings}`);
      lines.push('');
      lines.push('MUST-HAVE SKILLS');
      lines.push('─'.repeat(50));
      if (musts.length) musts.forEach(s => lines.push(`  • ${s}`));
      else lines.push('  • [Add at least 3-5 must-have skills]');
      lines.push('');
      if (nices.length) {
        lines.push('GOOD-TO-HAVE SKILLS');
        lines.push('─'.repeat(50));
        nices.forEach(s => lines.push(`  • ${s}`));
        lines.push('');
      }
      lines.push('KEY RESPONSIBILITIES');
      lines.push('─'.repeat(50));
      if (respLines.length) respLines.forEach(r => lines.push(`  • ${r}`));
      else lines.push('  • [List 3-5 core responsibilities]');
      lines.push('');
      lines.push('═'.repeat(50));
      lines.push('Submitted to: Sage & Crew Next');
      lines.push('Contact:      sagencrew@gmail.com · +91 91336 66619');
      return lines.join('\n');
    };

    run.addEventListener('click', () => {
      const text = build();
      $('#jt-output').textContent = text;
      $('#jt-result').classList.remove('hidden');
      $('#jt-result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    $('#jt-copy')?.addEventListener('click', async () => {
      const btn = $('#jt-copy');
      const text = $('#jt-output').textContent;
      try {
        await navigator.clipboard.writeText(text);
        const orig = btn.textContent;
        btn.textContent = '✓ Copied';
        setTimeout(() => { btn.textContent = orig; }, 1800);
      } catch (_) {
        // Fallback: select text
        const range = document.createRange();
        range.selectNodeContents($('#jt-output'));
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });

    $('#jt-download')?.addEventListener('click', () => {
      const text = $('#jt-output').textContent;
      const role = ($('#jt-role').value || 'role').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hiring-requirement-${role}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  })();

})();
