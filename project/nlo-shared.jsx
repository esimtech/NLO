// NoLimits∞nline — Shared primitives, chrome, and CTA/Footer
// Used by Hero.html, Netherlands.html, Turkey.html

const { useState, useEffect, useRef } = React;

// ---------- Primitives ----------
const Wordmark = ({ size = 28, variant = "default" }) => {
  const inf = variant === "inverse" ? "#FFD23F" : "#2E5BFF";
  const fg  = variant === "inverse" ? "#FAF6EE" : "#0E0E14";
  return (
    <span style={{
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      letterSpacing: "-0.045em", lineHeight: 0.85,
      fontSize: size, color: fg, whiteSpace: "nowrap",
    }}>
      NoLimits<span style={{ color: inf }}>∞nline</span>
    </span>
  );
};

const Sticker = ({ children, color = "ink", rotate = 0, size = "md" }) => {
  const bg = { ink:"#0E0E14", blue:"#2E5BFF", yellow:"#FFD23F", coral:"#FF6B6B", mint:"#7BE0B5", cream:"#FAF6EE", white:"#fff" }[color];
  const fg = (color === "ink" || color === "blue") ? "#FAF6EE" : "#0E0E14";
  const pad = size === "sm" ? "8px 14px" : size === "lg" ? "16px 26px" : "11px 18px";
  const fs = size === "sm" ? 13 : size === "lg" ? 20 : 15;
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: bg, color: fg,
      border: "2px solid #0E0E14", borderRadius: 999,
      padding: pad, fontFamily: "var(--nlo-font-display)",
      fontWeight: 700, fontSize: fs, letterSpacing: "-0.005em",
      boxShadow: "3px 3px 0 #0E0E14",
      transform: `rotate(${rotate}deg)`, whiteSpace: "nowrap",
    }}>{children}</div>
  );
};

const Btn = ({ children, color = "ink", size = "lg", style = {}, href, onClick }) => {
  const [h, sH] = useState(false), [p, sP] = useState(false);
  const bg = { ink:"#0E0E14", blue:"#2E5BFF", yellow:"#FFD23F", coral:"#FF6B6B", outline:"transparent" }[color];
  const fg = (color === "ink" || color === "blue" || color === "coral") ? "#FAF6EE" : "#0E0E14";
  const pad = size === "sm" ? "10px 18px" : size === "lg" ? "20px 34px" : "14px 26px";
  const fs = size === "sm" ? 15 : size === "lg" ? 20 : 17;
  const baseStyle = {
    background: bg, color: fg, border: "2px solid #0E0E14",
    borderRadius: 999, padding: pad,
    fontFamily: "var(--nlo-font-display)", fontWeight: 700,
    fontSize: fs, letterSpacing: "-0.01em", cursor: "pointer",
    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
    transform: p ? "translate(1px,1px)" : h ? "translate(-2px,-2px)" : "none",
    boxShadow: p ? "none" : h ? "6px 6px 0 #0E0E14" : "3px 3px 0 #0E0E14",
    ...style,
  };
  const handlers = {
    onMouseEnter: () => sH(true),
    onMouseLeave: () => { sH(false); sP(false); },
    onMouseDown: () => sP(true),
    onMouseUp: () => sP(false),
    onClick,
  };
  if (href) return <a href={href} style={baseStyle} {...handlers}>{children}</a>;
  return <button style={baseStyle} {...handlers}>{children}</button>;
};

const Mono = ({ children, color, op, size = 13 }) => (
  <div style={{
    fontFamily: "var(--nlo-font-mono)", fontSize: size,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: color || "#0E0E14", opacity: op ?? (color ? 1 : 0.7),
  }}>{children}</div>
);

const FlagDot = ({ c }) => (
  <span style={{ width: 10, height: 10, borderRadius: 999, background: c,
    border: "1.5px solid #0E0E14", display: "inline-block" }} />
);

// ---------- Nav ----------
const Nav = ({ inverse }) => {
  const fg = inverse ? "#FAF6EE" : "#0E0E14";
  const border = inverse ? "1px solid rgba(250,246,238,0.18)" : "2px solid #0E0E14";
  return (
    <header style={{
      borderBottom: border, padding: "20px 56px",
      display: "flex", alignItems: "center", gap: 36,
      background: inverse ? "#0E0E14" : "#FAF6EE",
    }}>
      <a href="Hero.html" style={{ textDecoration: "none" }}>
        <Wordmark size={28} variant={inverse ? "inverse" : "default"} />
      </a>
      <nav style={{ display: "flex", gap: 28, fontFamily: "var(--nlo-font-body)",
        fontSize: 15, fontWeight: 500, color: fg }}>
        {[
          { t: "Destinations",  href: "Destinations.html" },
          { t: "Why us",        href: "Why-us.html" },
          { t: "How it works",  href: "How-it-works.html" },
          { t: "Support",       href: "Support.html" },
        ].map(x =>
          <a key={x.t} href={x.href} style={{ color: fg, textDecoration: "none", cursor:"pointer" }}>{x.t}</a>)}
      </nav>
      <div style={{ marginLeft: "auto", display: "flex", gap: 14, alignItems: "center" }}>
        <a style={{ color: fg, fontSize: 15, fontWeight: 500, cursor:"pointer" }}>Sign in</a>
        <Btn color={inverse ? "yellow" : "ink"} size="sm">Get my eSIM →</Btn>
      </div>
    </header>
  );
};

// ---------- Destination data ----------
const DESTINATIONS = [
  { name: "Netherlands", flag: "🇳🇱", note: "Unlimited · 5G · local Odido · 30 days",       plan: "unlimited", price: "€49 / 30d", href: "Netherlands.html" },
  { name: "Japan",       flag: "🇯🇵", note: "Unlimited · 5G · local SoftBank",               plan: "unlimited", price: "€29 / wk" },
  { name: "Turkey",      flag: "🇹🇷", note: "Bundles · best-quality roaming",                plan: "bundle",    price: "€11 / wk", href: "Turkey.html" },
  { name: "Vietnam",     flag: "🇻🇳", note: "100 GB bundle · local Viettel",                 plan: "bundle",    price: "€14 / wk" },
  { name: "Portugal",    flag: "🇵🇹", note: "Unlimited · 5G · local NOS",                    plan: "unlimited", price: "€19 / wk" },
  { name: "Mexico",      flag: "🇲🇽", note: "50 GB bundle · local Telcel",                   plan: "bundle",    price: "€12 / wk" },
  { name: "Indonesia",   flag: "🇮🇩", note: "Unlimited · 4G · local Telkomsel",              plan: "unlimited", price: "€24 / wk" },
  { name: "Georgia",     flag: "🇬🇪", note: "30 GB bundle · local Magti",                    plan: "bundle",    price: "€9 / wk"  },
  { name: "Thailand",    flag: "🇹🇭", note: "Unlimited · 5G · local AIS · +66 number",      plan: "unlimited", price: "€22 / wk", href: "Thailand.html" },
  { name: "Morocco",     flag: "🇲🇦", note: "20 GB bundle · local Maroc Telecom",            plan: "bundle",    price: "€11 / wk" },
];

// ---------- Destination search ----------
const SearchBox = ({ placeholder = "Where are you headed?" }) => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const click = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", click);
    return () => document.removeEventListener("mousedown", click);
  }, []);

  const filtered = q.trim()
    ? DESTINATIONS.filter(d => d.name.toLowerCase().includes(q.trim().toLowerCase()))
    : DESTINATIONS.slice(0, 6);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", maxWidth: 640 }}>
      <div style={{
        background: "#fff", color: "#0E0E14",
        border: "3px solid #0E0E14", borderRadius: 999,
        boxShadow: "6px 6px 0 #0E0E14",
        display: "flex", alignItems: "center", gap: 6,
        padding: 6,
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 999,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E0E14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
        </div>
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          style={{
            flex: 1, border: "none", outline: "none", background: "transparent",
            fontFamily: "var(--nlo-font-display)", fontWeight: 600,
            fontSize: 22, letterSpacing: "-0.015em",
            color: "#0E0E14", padding: "10px 4px", minWidth: 0,
          }}
        />
        <Btn color="ink" size="md" style={{ borderRadius: 999 }}>Find a plan →</Btn>
      </div>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 12px)", left: 0, right: 0,
          background: "#fff", border: "3px solid #0E0E14",
          borderRadius: 24, boxShadow: "6px 6px 0 #0E0E14",
          padding: 14, zIndex: 20, textAlign: "left",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 12px 10px" }}>
            <Mono>// {q.trim() ? `matches for "${q.trim()}"` : "popular this week"}</Mono>
            <Mono color="#2E5BFF" op={1}>{filtered.length} · live</Mono>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {filtered.length === 0 && (
              <div style={{ padding: "16px 12px", fontFamily: "var(--nlo-font-body)", fontSize: 15, opacity: 0.7 }}>
                Nothing yet — try a country name (we cover 200+).
              </div>
            )}
            {filtered.slice(0, 5).map((d, i) => (
              <a key={d.name} href={d.href || "#"} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "12px 12px", borderRadius: 14,
                cursor: "pointer", textDecoration: "none", color: "inherit",
                borderTop: i === 0 ? "none" : "1px solid #EAE2D0",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#FAF6EE"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <div style={{ fontSize: 26, lineHeight: 1, width: 32 }}>{d.flag}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em" }}>
                    {d.name}
                  </div>
                  <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {d.note}
                  </div>
                </div>
                {d.plan === "unlimited" ? (
                  <div style={{
                    background: "#2E5BFF", color: "#FAF6EE",
                    border: "2px solid #0E0E14", borderRadius: 999,
                    padding: "6px 14px",
                    fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                    fontSize: 13, letterSpacing: "0.04em", whiteSpace: "nowrap",
                  }}>UNLIMITED ∞</div>
                ) : (
                  <div style={{
                    background: "#FFD23F", color: "#0E0E14",
                    border: "2px solid #0E0E14", borderRadius: 999,
                    padding: "6px 14px",
                    fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                    fontSize: 13, letterSpacing: "0.04em", whiteSpace: "nowrap",
                  }}>BUNDLE</div>
                )}
                <div style={{
                  fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                  fontSize: 19, letterSpacing: "-0.02em", minWidth: 86, textAlign: "right",
                }}>{d.price}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ---------- CTA ----------
const CTA = () => (
  <section style={{
    background: "#2E5BFF", color: "#FAF6EE",
    padding: "120px 56px", borderTop: "2px solid #0E0E14",
    position: "relative", overflow: "hidden",
  }}>
    <div aria-hidden style={{
      position: "absolute", right: -180, top: -140,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 900, lineHeight: 1, color: "#FFD23F",
      opacity: 0.18, userSelect: "none", pointerEvents: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 32 }}>
      <Sticker color="yellow" rotate={-3} size="md">READY WHEN YOU ARE</Sticker>

      <h2 style={{
        fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 140, letterSpacing: "-0.05em", lineHeight: 0.84,
        margin: 0, color: "#FAF6EE", textWrap: "balance",
      }}>
        One QR code.<br/>
        <span style={{ color: "#FFD23F" }}>200+ countries.</span><br/>
        Zero fine print.
      </h2>

      <p style={{ fontSize: 22, lineHeight: 1.45, margin: 0, maxWidth: 700, opacity: 0.92 }}>
        Tell us where you're going. We'll send the eSIM by email in 30 seconds.
        Activate it before take-off, connect on landing.
      </p>

      <div style={{ width: "100%", maxWidth: 720, marginTop: 8 }}>
        <SearchBox placeholder="Where are you headed?" />
      </div>

      <div style={{ display: "flex", gap: 28, alignItems: "center",
        marginTop: 8, flexWrap: "wrap" }}>
        <Btn color="yellow" size="lg">Get my eSIM →</Btn>
        <a style={{ color: "#FAF6EE", fontFamily:"var(--nlo-font-display)", fontWeight:700,
          fontSize: 19, textDecoration: "underline", textDecorationThickness: 2,
          textUnderlineOffset: 5, cursor: "pointer", opacity: 0.92 }}>
          See all plans →
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.85 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "#7BE0B5",
            boxShadow: "0 0 0 4px rgba(123,224,181,0.25)" }} />
          <Mono color="#FAF6EE" op={0.85}>42,108 connected right now</Mono>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Footer ----------
const Footer = () => (
  <footer style={{ background: "#0E0E14", color: "#FAF6EE", padding: "80px 56px 36px",
    borderTop: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }}>
        <div>
          <Wordmark size={36} variant="inverse" />
          <p style={{ fontSize: 16, lineHeight: 1.5, marginTop: 18, opacity: 0.78, maxWidth: 320 }}>
            Internet without the fine print. eSIMs for digital nomads, backpackers,
            and anyone with a passport — built in Amsterdam.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18 }}>
            <FlagDot c="#AE1C28" /><FlagDot c="#FFFFFF" /><FlagDot c="#21468B" />
            <Mono color="#FAF6EE" op={0.7}>NEDERLANDS BEDRIJF</Mono>
          </div>
        </div>
        {[
          { h: "Destinations",l: [
            { t: "Netherlands", href: "Netherlands.html" },
            { t: "Thailand",    href: "Thailand.html" },
            { t: "Turkey",      href: "Turkey.html" },
            { t: "All 200+",    href: "Destinations.html" },
          ] },
          { h: "Why us",      l: [
            { t: "Our story",        href: "Why-us.html" },
            { t: "House rules",      href: "Why-us.html" },
            { t: "Local vs roaming", href: "Why-us.html" },
          ] },
          { h: "How it works",l: [
            { t: "In 4 steps",       href: "How-it-works.html" },
            { t: "Device check",     href: "How-it-works.html" },
            { t: "Activation",       href: "How-it-works.html" },
          ] },
          { h: "Support",     l: [
            { t: "WhatsApp · 24/7", href: "Support.html" },
            { t: "Live chat",       href: "Support.html" },
            { t: "Email",           href: "Support.html" },
            { t: "FAQ",             href: "Support.html" },
          ] },
        ].map((col) => (
          <div key={col.h}>
            <Mono color="#FFD23F">// {col.h}</Mono>
            <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", fontSize: 15, lineHeight: 2 }}>
              {col.l.map((x, i) => {
                const isObj = typeof x === "object";
                const label = isObj ? x.t : x;
                const href = isObj ? x.href : "#";
                return (
                  <li key={label}>
                    <a href={href} style={{ color: "#FAF6EE", textDecoration: "none", opacity: 0.82, cursor: "pointer" }}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid rgba(250,246,238,0.18)", paddingTop: 24,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 20, flexWrap: "wrap",
        fontFamily: "var(--nlo-font-mono)", fontSize: 12, letterSpacing: "0.06em", opacity: 0.7 }}>
        <div>© 2026 NoLimits∞nline B.V. · Amsterdam, NL · KvK 90123456</div>
        <div>Privacy · Terms · Cookies — none of which contain a 25 GB cap.</div>
      </div>
    </div>
  </footer>
);

// Expose to other Babel script files
Object.assign(window, {
  Wordmark, Sticker, Btn, Mono, FlagDot,
  Nav, SearchBox, CTA, Footer,
  DESTINATIONS,
});
