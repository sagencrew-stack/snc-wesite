/* Project UI thumbnail illustrations — one per product, inline SVG */

function BrowserChrome({ children, url, dark = true }: {
  children: React.ReactNode;
  url: string;
  dark?: boolean;
}) {
  const bar = dark ? "#1C2030" : "#F0F0F4";
  const dot1 = "#FF5F57"; const dot2 = "#FFBD2E"; const dot3 = "#28CA41";
  const urlBg = dark ? "#252839" : "#E2E2E8";
  const urlText = dark ? "#666C8A" : "#888";

  return (
    <svg
      viewBox="0 0 560 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      aria-hidden="true"
    >
      {/* Chrome bar */}
      <rect x="0" y="0" width="560" height="32" fill={bar} />
      <circle cx="18" cy="16" r="5" fill={dot1} />
      <circle cx="34" cy="16" r="5" fill={dot2} />
      <circle cx="50" cy="16" r="5" fill={dot3} />
      <rect x="90" y="8" width="220" height="16" rx="8" fill={urlBg} />
      <text x="200" y="20" textAnchor="middle" fontSize="9" fill={urlText} fontFamily="system-ui,sans-serif">{url}</text>
      {/* Content area */}
      {children}
    </svg>
  );
}

/* ── 1. Sage Hire Stack — dark kanban pipeline ── */
export function SageHireStackThumb() {
  const bg = "#0A1628";
  const col = "#0F1E38";
  const border = "rgba(255,255,255,0.06)";
  const sage = "#7A9E7E";
  const gold = "#C9A646";
  const muted = "rgba(255,255,255,0.35)";

  const stages = [
    { label: "Screening", count: 3, color: "#60A5FA" },
    { label: "Shortlisted", count: 2, color: sage },
    { label: "Interview", count: 1, color: gold },
  ];

  const cards = [
    [
      { initials: "AK", name: "Arjun Kumar",   role: "Sr. React Dev",   score: 92, c: "#7A9E7E" },
      { initials: "PS", name: "Priya Sharma",  role: "Product Manager", score: 87, c: "#60A5FA" },
      { initials: "RV", name: "Rahul Verma",   role: "DevOps Engineer", score: 81, c: "#C9A646" },
    ],
    [
      { initials: "SM", name: "Sneha Mehta",   role: "Full Stack Dev",  score: 94, c: "#7A9E7E" },
      { initials: "DG", name: "Dev Gupta",     role: "Backend Dev",     score: 78, c: "#60A5FA" },
    ],
    [
      { initials: "AP", name: "Ananya Patel",  role: "UI/UX Designer",  score: 96, c: "#C9A646" },
    ],
  ];

  return (
    <BrowserChrome url="sagehirestack.com/pipeline">
      {/* App bg */}
      <rect x="0" y="32" width="560" height="268" fill={bg} />

      {/* Top bar */}
      <rect x="0" y="32" width="560" height="32" fill="#0E1F36" />
      <circle cx="14" cy="48" r="9" fill={sage} opacity="0.9" />
      <text x="14" y="52" textAnchor="middle" fontSize="9" fill="white" fontWeight="700" fontFamily="system-ui,sans-serif">S</text>
      <text x="32" y="52" fontSize="11" fill="white" fontWeight="600" fontFamily="system-ui,sans-serif">Sage Hire Stack</text>
      <text x="150" y="52" fontSize="9.5" fill={muted} fontFamily="system-ui,sans-serif">Pipeline</text>
      <rect x="185" y="41" width="48" height="14" rx="7" fill={gold} opacity="0.15" />
      <text x="209" y="52" textAnchor="middle" fontSize="8.5" fill={gold} fontFamily="system-ui,sans-serif">3 Roles</text>
      <circle cx="540" cy="48" r="8" fill="rgba(255,255,255,0.06)" />
      <text x="540" y="52" textAnchor="middle" fontSize="9" fill={muted} fontFamily="system-ui,sans-serif">VP</text>

      {/* Kanban columns */}
      {stages.map((stage, si) => {
        const colX = 10 + si * 183;
        const colCards = cards[si];
        return (
          <g key={stage.label}>
            <rect x={colX} y={72} width={176} height={220} rx="8" fill={col} stroke={border} strokeWidth="1" />
            {/* Stage header */}
            <rect x={colX + 8} y={80} width="6" height="14" rx="3" fill={stage.color} />
            <text x={colX + 22} y={91} fontSize="10" fill="rgba(255,255,255,0.7)" fontWeight="600" fontFamily="system-ui,sans-serif">{stage.label}</text>
            <rect x={colX + 130} y={81} width="36" height="12" rx="6" fill="rgba(255,255,255,0.06)" />
            <text x={colX + 148} y={91} textAnchor="middle" fontSize="8" fill={muted} fontFamily="system-ui,sans-serif">{stage.count} candidates</text>

            {/* Cards */}
            {colCards.map((card, ci) => {
              const cy = 104 + ci * 62;
              return (
                <g key={card.initials}>
                  <rect x={colX + 8} y={cy} width="160" height="54" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                  {/* Avatar */}
                  <circle cx={colX + 26} cy={cy + 18} r="11" fill={card.c} opacity="0.25" />
                  <text x={colX + 26} y={cy + 22} textAnchor="middle" fontSize="8" fill={card.c} fontWeight="700" fontFamily="system-ui,sans-serif">{card.initials}</text>
                  {/* Name + role */}
                  <text x={colX + 44} y={cy + 15} fontSize="9.5" fill="rgba(255,255,255,0.85)" fontWeight="600" fontFamily="system-ui,sans-serif">{card.name}</text>
                  <text x={colX + 44} y={cy + 27} fontSize="8" fill={muted} fontFamily="system-ui,sans-serif">{card.role}</text>
                  {/* AI score */}
                  <rect x={colX + 8} y={cy + 36} width="50" height="12" rx="6" fill={card.c} opacity="0.15" />
                  <text x={colX + 13} y={cy + 46} fontSize="8" fill={card.c} fontFamily="system-ui,sans-serif">AI {card.score}%</text>
                  {/* Stage dot */}
                  <circle cx={colX + 152} cy={cy + 18} r="4" fill={stage.color} opacity="0.7" />
                </g>
              );
            })}
          </g>
        );
      })}
    </BrowserChrome>
  );
}

/* ── 2. Liferra — mobile life dashboard ── */
export function LiferraThumb() {
  const bg = "#0E0E14";
  const gold = "#C9A646";
  const sage = "#7A9E7E";

  // Sparkline points for mood chart (last 7 days)
  const moodPts = [5, 7, 6, 8, 7, 9, 8];
  const chartW = 180; const chartH = 40;
  const ptX = (i: number) => 200 + (i / 6) * chartW;
  const ptY = (v: number) => 228 - ((v - 4) / 6) * chartH;
  const pathD = moodPts.map((v, i) => `${i === 0 ? "M" : "L"}${ptX(i)},${ptY(v)}`).join(" ");
  const areaD = `${pathD} L${ptX(6)},${ptY(4)} L${ptX(0)},${ptY(4)} Z`;

  return (
    <BrowserChrome url="liferra.app">
      <rect x="0" y="32" width="560" height="268" fill="#0A0A12" />

      {/* Phone frame centered */}
      <rect x="180" y="40" width="200" height="256" rx="22" fill={bg} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      <rect x="222" y="44" width="116" height="8" rx="4" fill="#1A1A28" />

      {/* App header */}
      <text x="280" y="80" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)" letterSpacing="2" fontFamily="system-ui,sans-serif">LIFERRA</text>
      <text x="280" y="100" textAnchor="middle" fontSize="14" fill="rgba(255,255,255,0.85)" fontWeight="600" fontFamily="system-ui,sans-serif">Good morning, V.</text>

      {/* Stat rings */}
      {[
        { label: "Habits", value: 7, max: 10, pct: 0.7,  x: 214, color: sage   },
        { label: "Goals",  value: 4, max: 6,  pct: 0.67, x: 280, color: gold   },
        { label: "Mood",   value: 8, max: 10, pct: 0.8,  x: 346, color: "#60A5FA" },
      ].map(s => {
        const r = 24; const circ = 2 * Math.PI * r;
        const dash = circ * s.pct;
        return (
          <g key={s.label}>
            <circle cx={s.x} cy={148} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
            <circle cx={s.x} cy={148} r={r} fill="none" stroke={s.color} strokeWidth="5"
              strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
              transform={`rotate(-90 ${s.x} 148)`} />
            <text x={s.x} y={145} textAnchor="middle" fontSize="11" fill="white" fontWeight="700" fontFamily="system-ui,sans-serif">{s.value}</text>
            <text x={s.x} y={157} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.35)" fontFamily="system-ui,sans-serif">/{s.max}</text>
            <text x={s.x} y={184} textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="system-ui,sans-serif">{s.label}</text>
          </g>
        );
      })}

      {/* Mood chart */}
      <rect x="192" y="196" width="176" height="56" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <text x="200" y="210" fontSize="7.5" fill="rgba(255,255,255,0.3)" fontFamily="system-ui,sans-serif" letterSpacing="1">MOOD · 7 DAYS</text>
      <defs>
        <linearGradient id="moodGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gold} stopOpacity="0.3" />
          <stop offset="100%" stopColor={gold} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill="url(#moodGrad)" />
      <path d={pathD} fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={ptX(6)} cy={ptY(8)} r="3" fill={gold} />

      {/* Finance strip */}
      <rect x="192" y="260" width="176" height="28" rx="8" fill="rgba(122,158,126,0.1)" />
      <text x="202" y="278" fontSize="8.5" fill={sage} fontFamily="system-ui,sans-serif">₹ Finance snapshot</text>
      <text x="356" y="278" textAnchor="end" fontSize="8.5" fill={sage} fontWeight="600" fontFamily="system-ui,sans-serif">↑ 12%</text>

      {/* Left ambient glow */}
      <ellipse cx="110" cy="160" rx="80" ry="80" fill={gold} opacity="0.04" />
      <ellipse cx="450" cy="160" rx="80" ry="80" fill={sage} opacity="0.05" />
    </BrowserChrome>
  );
}

/* ── 3. Teampurex — health coaching booking ── */
export function TeampurexThumb() {
  const bg = "#FFFFFF";
  const blue = "#3B82F6";
  const darkText = "#1A2033";
  const muted = "#8A93A8";

  const slots = [
    { day: "Mon", times: ["9:00", "11:00", "3:00 PM"] },
    { day: "Tue", times: ["10:00", "2:00 PM"] },
    { day: "Wed", times: ["9:30", "12:00", "4:00 PM"] },
  ];

  const coaches = [
    { initials: "DS", name: "Dr. Sharma", spec: "Physiotherapy", color: blue },
    { initials: "RP", name: "Ravi Patel",  spec: "Personal Training", color: "#10B981" },
  ];

  return (
    <BrowserChrome url="teampurex.com" dark={false}>
      <rect x="0" y="32" width="560" height="268" fill={bg} />

      {/* Sidebar */}
      <rect x="0" y="32" width="140" height="268" fill="#F8FAFF" />
      <rect x="0" y="32" width="1" height="268" fill="rgba(59,130,246,0.12)" />
      <rect x="12" y="50" width="116" height="24" rx="6" fill={blue} opacity="0.1" />
      <text x="20" y="67" fontSize="10" fill={blue} fontWeight="600" fontFamily="system-ui,sans-serif">📅  Bookings</text>
      {["Coaches", "Progress", "Messages", "Settings"].map((item, i) => (
        <text key={item} x="20" y={105 + i * 24} fontSize="9.5" fill={muted} fontFamily="system-ui,sans-serif">{item}</text>
      ))}

      {/* Main content */}
      <text x="160" y="60" fontSize="13" fill={darkText} fontWeight="700" fontFamily="system-ui,sans-serif">Book a Session</text>
      <text x="160" y="75" fontSize="9" fill={muted} fontFamily="system-ui,sans-serif">Choose a coach and pick your time slot</text>

      {/* Coach cards */}
      {coaches.map((c, i) => (
        <g key={c.initials}>
          <rect x="160" y={90 + i * 52} width="130" height="44" rx="8" fill="white" stroke="rgba(26,32,51,0.08)" strokeWidth="1" />
          <circle cx="180" cy={90 + i * 52 + 22} r="14" fill={c.color} opacity="0.15" />
          <text x="180" y={90 + i * 52 + 26} textAnchor="middle" fontSize="9" fill={c.color} fontWeight="700" fontFamily="system-ui,sans-serif">{c.initials}</text>
          <text x="200" y={90 + i * 52 + 18} fontSize="9.5" fill={darkText} fontWeight="600" fontFamily="system-ui,sans-serif">{c.name}</text>
          <text x="200" y={90 + i * 52 + 30} fontSize="8" fill={muted} fontFamily="system-ui,sans-serif">{c.spec}</text>
        </g>
      ))}

      {/* Slot grid */}
      <text x="160" y="215" fontSize="9" fill={muted} letterSpacing="1" fontFamily="system-ui,sans-serif">AVAILABLE SLOTS</text>
      {slots.map((col, ci) => {
        const sx = 160 + ci * 130;
        return (
          <g key={col.day}>
            <text x={sx} y="230" fontSize="9" fill={darkText} fontWeight="600" fontFamily="system-ui,sans-serif">{col.day}</text>
            {col.times.map((t, ti) => {
              const booked = ci === 0 && ti === 1;
              return (
                <g key={t}>
                  <rect x={sx} y={235 + ti * 18} width="60" height="14" rx="7"
                    fill={booked ? blue : "white"}
                    stroke={booked ? blue : "rgba(26,32,51,0.12)"}
                    strokeWidth="1" />
                  <text x={sx + 30} y={235 + ti * 18 + 10} textAnchor="middle" fontSize="7.5"
                    fill={booked ? "white" : muted}
                    fontFamily="system-ui,sans-serif">{t}</text>
                </g>
              );
            })}
          </g>
        );
      })}
    </BrowserChrome>
  );
}

/* ── 4. Mahantraders — ERP trading dashboard ── */
export function MahantraderThumb() {
  const bg = "#0F1117";
  const purple = "#8B5CF6";
  const sidebar = "#13161F";
  const muted = "rgba(255,255,255,0.35)";
  const border = "rgba(255,255,255,0.06)";

  const rows = [
    { date: "30 Jul", product: "Sugar M-30", qty: "12.4 MT", rate: "₹3,620", amount: "₹44,888", status: "Settled"  },
    { date: "29 Jul", product: "Sugar S-30", qty: "8.0 MT",  rate: "₹3,540", amount: "₹28,320", status: "Pending"  },
    { date: "28 Jul", product: "Sugar M-30", qty: "20.0 MT", rate: "₹3,600", amount: "₹72,000", status: "Settled"  },
    { date: "27 Jul", product: "Raw Sugar",  qty: "5.5 MT",  rate: "₹3,200", amount: "₹17,600", status: "Pending"  },
  ];

  return (
    <BrowserChrome url="mahantraders.com/erp">
      <rect x="0" y="32" width="560" height="268" fill={bg} />

      {/* Sidebar */}
      <rect x="0" y="32" width="110" height="268" fill={sidebar} />
      <text x="14" y="58" fontSize="11" fill="white" fontWeight="700" letterSpacing="-0.3" fontFamily="system-ui,sans-serif">Mahan</text>
      <text x="14" y="70" fontSize="9" fill={purple} fontFamily="system-ui,sans-serif">Traders ERP</text>
      <rect x="8" y="82" width="94" height="18" rx="5" fill={purple} opacity="0.15" />
      <text x="14" y="95" fontSize="9" fill={purple} fontFamily="system-ui,sans-serif">Daily Entry</text>
      {["Suppliers", "Cash Book", "Buyers", "Reports"].map((item, i) => (
        <text key={item} x="14" y={122 + i * 22} fontSize="9" fill={muted} fontFamily="system-ui,sans-serif">{item}</text>
      ))}

      {/* Stats row */}
      {[
        { label: "Today", value: "₹44.9K", color: "#10B981" },
        { label: "This Week", value: "₹1.6L", color: purple },
        { label: "Pending", value: "₹45.9K", color: "#F59E0B" },
      ].map((s, i) => (
        <g key={s.label}>
          <rect x={120 + i * 144} y="42" width="136" height="38" rx="7" fill="rgba(255,255,255,0.03)" stroke={border} strokeWidth="1" />
          <text x={128 + i * 144} y="60" fontSize="9" fill={muted} fontFamily="system-ui,sans-serif">{s.label}</text>
          <text x={128 + i * 144} y="74" fontSize="14" fill={s.color} fontWeight="700" fontFamily="'Courier New',monospace">{s.value}</text>
        </g>
      ))}

      {/* Table */}
      <text x="122" y="102" fontSize="10" fill="rgba(255,255,255,0.7)" fontWeight="600" fontFamily="system-ui,sans-serif">Daily Entry Log</text>
      {/* Header */}
      <rect x="118" y="108" width="432" height="18" rx="4" fill="rgba(255,255,255,0.03)" />
      {["DATE", "PRODUCT", "QTY", "RATE", "AMOUNT", "STATUS"].map((h, i) => {
        const hx = [126, 186, 286, 336, 390, 450];
        return <text key={h} x={hx[i]} y="121" fontSize="7.5" fill={muted} letterSpacing="0.8" fontFamily="system-ui,sans-serif">{h}</text>;
      })}

      {rows.map((row, i) => {
        const ry = 134 + i * 26;
        const settled = row.status === "Settled";
        return (
          <g key={i}>
            <rect x="118" y={ry - 10} width="432" height="24" fill={i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent"} />
            <text x="126" y={ry + 6} fontSize="8.5" fill="rgba(255,255,255,0.5)" fontFamily="'Courier New',monospace">{row.date}</text>
            <text x="186" y={ry + 6} fontSize="8.5" fill="rgba(255,255,255,0.75)" fontFamily="system-ui,sans-serif">{row.product}</text>
            <text x="286" y={ry + 6} fontSize="8.5" fill="rgba(255,255,255,0.6)" fontFamily="'Courier New',monospace">{row.qty}</text>
            <text x="336" y={ry + 6} fontSize="8.5" fill="rgba(255,255,255,0.6)" fontFamily="'Courier New',monospace">{row.rate}</text>
            <text x="390" y={ry + 6} fontSize="8.5" fill="rgba(255,255,255,0.85)" fontWeight="600" fontFamily="'Courier New',monospace">{row.amount}</text>
            <rect x="447" y={ry - 4} width="46" height="14" rx="7" fill={settled ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)"} />
            <text x="470" y={ry + 6} textAnchor="middle" fontSize="7.5" fill={settled ? "#10B981" : "#F59E0B"} fontFamily="system-ui,sans-serif">{row.status}</text>
          </g>
        );
      })}
    </BrowserChrome>
  );
}

/* ── 5. RishiDisha — vaastu & astrology portal ── */
export function RishiDishaThumb() {
  const bg = "#FEF8F0";
  const amber = "#D97706";
  const darkText = "#2C1A06";
  const muted = "#9A7A50";

  const services = [
    { icon: "🏠", name: "Vaastu Shastra", sessions: "42 sessions", rating: "4.9" },
    { icon: "⭐", name: "Jyotish Vidya",  sessions: "38 sessions", rating: "4.8" },
    { icon: "🔢", name: "Numerology",      sessions: "29 sessions", rating: "4.7" },
  ];

  return (
    <BrowserChrome url="rishidisha.in" dark={false}>
      <rect x="0" y="32" width="560" height="268" fill={bg} />

      {/* Decorative mandala ring */}
      <circle cx="480" cy="90" r="70" fill="none" stroke={amber} strokeWidth="0.5" opacity="0.2" />
      <circle cx="480" cy="90" r="50" fill="none" stroke={amber} strokeWidth="0.5" opacity="0.15" />
      <circle cx="480" cy="90" r="30" fill="none" stroke={amber} strokeWidth="0.8" opacity="0.12" />

      {/* Nav */}
      <rect x="0" y="32" width="560" height="32" fill="white" />
      <rect x="0" y="63" width="560" height="1" fill="rgba(44,26,6,0.07)" />
      <text x="20" y="53" fontSize="13" fill={darkText} fontWeight="700" fontFamily="Georgia,serif">RishiDisha</text>
      <text x="20" y="65" fontSize="7" fill={amber} letterSpacing="2" fontFamily="system-ui,sans-serif">VAASTU · JYOTISH · NUMEROLOGY</text>
      {["Services", "Experts", "Articles", "Book"].map((item, i) => (
        <text key={item} x={330 + i * 56} y="53" fontSize="9" fill={muted} fontFamily="system-ui,sans-serif">{item}</text>
      ))}

      {/* Hero strip */}
      <text x="20" y="100" fontSize="8.5" fill={amber} letterSpacing="1.5" fontFamily="system-ui,sans-serif">ONLINE CONSULTATIONS · HYDERABAD</text>
      <text x="20" y="120" fontSize="18" fill={darkText} fontWeight="700" fontFamily="Georgia,serif">Ancient wisdom,</text>
      <text x="20" y="140" fontSize="18" fill={amber} fontFamily="Georgia,serif" fontStyle="italic">modern guidance.</text>

      {/* Service cards */}
      {services.map((s, i) => (
        <g key={s.name}>
          <rect x={20 + i * 172} y="158" width="160" height="92" rx="10"
            fill="white"
            stroke="rgba(44,26,6,0.07)"
            strokeWidth="1"
          />
          {/* Top bar */}
          <rect x={20 + i * 172} y="158" width="160" height="3" rx="1.5" fill={amber} opacity={1 - i * 0.1} />

          <text x={40 + i * 172} y="180" fontSize="16" fontFamily="system-ui,sans-serif">{s.icon}</text>
          <text x={20 + i * 172 + 80} y="185" textAnchor="middle" fontSize="10" fill={darkText} fontWeight="600" fontFamily="Georgia,serif">{s.name}</text>
          <text x={20 + i * 172 + 80} y="200" textAnchor="middle" fontSize="8" fill={muted} fontFamily="system-ui,sans-serif">{s.sessions}</text>

          {/* Stars */}
          <text x={20 + i * 172 + 50} y="220" fontSize="8" fill={amber} fontFamily="system-ui,sans-serif">★★★★★</text>
          <text x={20 + i * 172 + 113} y="220" fontSize="8" fill={muted} fontFamily="system-ui,sans-serif">{s.rating}</text>

          {/* CTA */}
          <rect x={20 + i * 172 + 20} y="228" width="120" height="16" rx="8" fill={amber} opacity="0.12" />
          <text x={20 + i * 172 + 80} y="240" textAnchor="middle" fontSize="8.5" fill={amber} fontWeight="600" fontFamily="system-ui,sans-serif">Book Session →</text>
        </g>
      ))}
    </BrowserChrome>
  );
}
