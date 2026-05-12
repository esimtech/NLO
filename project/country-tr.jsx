// NoLimits∞nline — Turkey country page
// No local eSIM here · honest about it · best-quality roaming bundles

const { useState: useStateTR } = React;
const { Wordmark, Sticker, Btn, Mono, FlagDot, Nav, SearchBox, CTA, Footer } = window;

// ============================================================
// COUNTRY HERO
// ============================================================
const CountryHero = () => (
  <section style={{ background: "#FAF6EE", padding: "56px 56px 80px",
    borderBottom: "2px solid #0E0E14", position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", right: -120, top: -80,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 880, lineHeight: 1, color: "#FF6B6B",
      opacity: 0.08, pointerEvents: "none", userSelect: "none",
    }}>∞</div>

    <div style={{ position: "relative", display: "flex", gap: 10, alignItems: "center", marginBottom: 32 }}>
      <a href="Hero.html" style={{ color: "#0E0E14", textDecoration: "none",
        fontFamily: "var(--nlo-font-mono)", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7 }}>
        // HOME
      </a>
      <span style={{ opacity: 0.4 }}>→</span>
      <a href="#" style={{ color: "#0E0E14", textDecoration: "none",
        fontFamily: "var(--nlo-font-mono)", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7 }}>
        DESTINATIONS
      </a>
      <span style={{ opacity: 0.4 }}>→</span>
      <span style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}>TURKEY</span>
    </div>

    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Sticker color="yellow" rotate={-3} size="md">BUNDLES — HONEST ABOUT IT</Sticker>
          <Sticker color="coral" rotate={4} size="sm">5 / 30 / 100 GB</Sticker>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
          <h1 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 800,
            fontSize: 156, letterSpacing: "-0.05em", lineHeight: 0.85,
            margin: 0, textWrap: "balance",
          }}>
            Türkiye.
          </h1>
          <div style={{ fontSize: 72, lineHeight: 1 }}>🇹🇷</div>
        </div>

        <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 660 }}>
          No local eSIM here — and we're not going to pretend otherwise.
          What we <em>do</em> offer: well-priced bundles on the strongest available
          roaming partner. <strong>If it's the best quality you can get without a Turkish passport,
          we promise it.</strong>
        </p>

        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
          <Btn color="ink" size="lg">From €11 / week →</Btn>
          <a style={{ fontFamily:"var(--nlo-font-display)", fontWeight:700, fontSize: 18,
            textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 5,
            cursor: "pointer" }}>why no unlimited here? →</a>
        </div>
      </div>

      {/* Right: at-a-glance card */}
      <div style={{
        background: "#FFD23F", color: "#0E0E14",
        border: "3px solid #0E0E14", borderRadius: 32,
        boxShadow: "8px 8px 0 #0E0E14", padding: 32,
        position: "relative", overflow: "hidden",
      }}>
        <Mono>// AT A GLANCE</Mono>
        <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 60, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: "12px 0 24px" }}>
          Bundles only — but the good kind.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { n: "100 GB", l: "Top bundle · €29 / wk" },
            { n: "5G",     l: "Where carrier serves it" },
            { n: "30 days",l: "Validity" },
            { n: "0",      l: "Hidden top-up fees" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(14,14,20,0.06)", border: "1.5px solid rgba(14,14,20,0.25)",
              borderRadius: 18, padding: "16px 18px",
            }}>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 36, letterSpacing: "-0.03em", lineHeight: 1, color: i === 0 ? "#2E5BFF" : "#0E0E14" }}>{s.n}</div>
              <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 11,
                letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75, marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "2px dashed #0E0E14", paddingTop: 16, marginTop: 20,
          display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Mono op={0.8}>// CARRIER PARTNER</Mono>
          <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
            Turkcell · Vodafone TR
          </div>
        </div>
      </div>
    </div>

    <div style={{ position: "absolute", right: 80, top: 80 }}>
      <Sticker color="ink" rotate={8} size="md">NO FAKE UNLIMITED</Sticker>
    </div>
  </section>
);

// ============================================================
// WHY NO LOCAL ESIM HERE
// ============================================================
const WhyNoLocal = () => (
  <section style={{ background: "#F2EBDC", padding: "100px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Sticker color="coral" rotate={-3}>HONEST ABOUT IT</Sticker>
          <Mono>// THE WHY</Mono>
        </div>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0, textWrap: "balance",
        }}>
          Why we don't sell<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>"unlimited"</span> in Türkiye.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 580 }}>
          Turkish carriers don't issue local eSIM profiles to foreign travellers — full stop.
          Anything sold as "Turkey unlimited" on the internet is roaming, and roaming-unlimited
          is always throttled, often to a crawl, often without warning.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 580, opacity: 0.85 }}>
          So we don't sell that. We sell <strong>fixed bundles</strong> on the best roaming partner
          we can negotiate with — Turkcell and Vodafone TR — and you know exactly what you're
          getting. When the carriers eventually open up, we'll be first in line. Until then,
          a bundle is the honest answer.
        </p>
      </div>

      {/* Side-by-side mini comparison */}
      <div style={{
        background: "#fff", border: "3px solid #0E0E14",
        borderRadius: 32, boxShadow: "8px 8px 0 #0E0E14",
        padding: 28, position: "relative",
      }}>
        <div style={{ position: "absolute", top: -16, right: 24 }}>
          <Sticker color="ink" rotate={5} size="sm">QUICK CHECK</Sticker>
        </div>
        <Mono>// WHAT YOU'RE BUYING IN TR</Mono>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { l: "Others' \"Turkey unlimited\"",
              v: "Roaming · throttled to 384 kbps after 5 GB", bad: true },
            { l: "Our bundles",
              v: "Fixed quota, full carrier speed, no throttle", bad: false },
            { l: "If you blow through the quota",
              v: "Easy top-up at honest prices. No surprise charges.", bad: false },
          ].map((r, i) => (
            <div key={i} style={{
              border: "2px solid #0E0E14", borderRadius: 18,
              background: r.bad ? "#0E0E14" : "#7BE0B5",
              color: r.bad ? "#FAF6EE" : "#0E0E14",
              padding: "16px 18px",
            }}>
              <Mono color={r.bad ? "#FF6B6B" : "#0E0E14"} op={1} size={11}>
                {r.bad ? "// AVOID" : "// US"}
              </Mono>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                fontSize: 18, letterSpacing: "-0.01em", lineHeight: 1.35, marginTop: 4 }}>
                {r.l}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.4, marginTop: 4, opacity: r.bad ? 0.8 : 0.9 }}>
                {r.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// BUNDLE PLANS
// ============================================================
const BundleCard = ({ name, gb, price, period, features, color, featured, badge }) => {
  const bg = { cream: "#fff", yellow: "#FFD23F", blue: "#2E5BFF" }[color];
  const fg = color === "blue" ? "#FAF6EE" : "#0E0E14";
  return (
    <div style={{
      background: bg, color: fg,
      border: "3px solid #0E0E14", borderRadius: 32,
      padding: 32, position: "relative",
      boxShadow: featured ? "10px 10px 0 #0E0E14" : "6px 6px 0 #0E0E14",
      display: "flex", flexDirection: "column", gap: 14,
      transform: featured ? "translateY(-8px)" : "none",
    }}>
      {badge && (
        <div style={{ position: "absolute", top: -16, right: 24 }}>
          <Sticker color={color === "blue" ? "yellow" : "coral"} rotate={6} size="sm">{badge}</Sticker>
        </div>
      )}
      <Mono color={color === "blue" ? "#FFD23F" : undefined}>// BUNDLE</Mono>
      <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 52, letterSpacing: "-0.035em", lineHeight: 0.9 }}>
        {name}<br/>
        <span style={{ color: color === "blue" ? "#FFD23F" : "#2E5BFF" }}>{gb}.</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 84, letterSpacing: "-0.04em", lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: 18, opacity: 0.75 }}>/ {period}</span>
      </div>
      <div style={{ height: 2, background: fg, opacity: 0.15, margin: "4px 0" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 16, lineHeight: 1.7 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: color === "blue" ? "#FFD23F" : "#2E5BFF",
              fontFamily: "var(--nlo-font-display)", fontWeight: 800, lineHeight: 1.4 }}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", paddingTop: 16 }}>
        <Btn color={color === "blue" ? "yellow" : "ink"}>Pick this →</Btn>
      </div>
    </div>
  );
};

const Bundles = () => (
  <section style={{ background: "#FAF6EE", padding: "120px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 56 }}>
        <div>
          <Mono>// THE BUNDLES</Mono>
          <h2 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 700,
            fontSize: 84, letterSpacing: "-0.035em", lineHeight: 0.92,
            margin: "14px 0 0", maxWidth: 880,
          }}>
            Three sizes. <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>One promise.</span>
          </h2>
        </div>
        <Sticker color="mint" rotate={4} size="lg">FULL CARRIER SPEED</Sticker>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        <BundleCard
          name="Light"
          gb="5 GB"
          price="€11"
          period="week"
          color="cream"
          features={[
            "5 GB at full 4G / 5G speed",
            "Turkcell or Vodafone TR",
            "30-day validity",
            "Hotspot included",
            "Easy top-up if you run out",
          ]}
        />
        <BundleCard
          name="Big"
          gb="30 GB"
          price="€19"
          period="week"
          color="yellow"
          badge="MOST PICKED"
          featured
          features={[
            "30 GB at full 4G / 5G speed",
            "Turkcell or Vodafone TR",
            "30-day validity",
            "Hotspot · share with anyone",
            "Easy top-up · honest pricing",
          ]}
        />
        <BundleCard
          name="Heavy"
          gb="100 GB"
          price="€29"
          period="week"
          color="blue"
          badge="FOR LONG STAYS"
          features={[
            "100 GB at full 4G / 5G speed",
            "Turkcell or Vodafone TR",
            "30-day validity",
            "Hotspot · share with anyone",
            "Top-ups stack — no expiry tricks",
          ]}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center",
        marginTop: 56, gap: 14, flexWrap: "wrap" }}>
        <Mono>// EVERY BUNDLE INCLUDES:</Mono>
        {[
          "30-day validity",
          "Hotspot · tethering",
          "No throttle below quota",
          "No hidden top-up fees",
          "Activate in 30 s · QR to tap",
        ].map((t) => (
          <span key={t} style={{
            fontFamily: "var(--nlo-font-body)", fontWeight: 500, fontSize: 14,
            padding: "6px 14px", border: "1.5px solid #0E0E14",
            borderRadius: 999, background: "transparent",
          }}>{t}</span>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// QUALITY PROMISE
// ============================================================
const QualityPromise = () => (
  <section style={{ background: "#FF6B6B", padding: "100px 56px", borderBottom: "2px solid #0E0E14",
    position: "relative", overflow: "hidden", color: "#0E0E14" }}>
    <div aria-hidden style={{
      position: "absolute", right: -60, top: -120,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 600, lineHeight: 1, color: "#0E0E14",
      opacity: 0.08, userSelect: "none", pointerEvents: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <Mono>// THE PROMISE</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0, textWrap: "balance",
        }}>
          If a better Turkish<br/>roaming deal exists,<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>we'll switch to it.</span>
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 620 }}>
          We re-tender the carrier deal every six months. If a different network
          gives travellers better speeds or wider 5G coverage, we move. You don't
          have to change anything — your eSIM just gets faster.
        </p>
      </div>

      <div style={{
        background: "#FAF6EE", color: "#0E0E14",
        border: "3px solid #0E0E14", borderRadius: 32,
        boxShadow: "8px 8px 0 #0E0E14", padding: 28,
        display: "flex", flexDirection: "column", gap: 18,
      }}>
        <Mono>// COVERAGE NOTES</Mono>
        {[
          { city: "Istanbul",     speed: "120–280 Mbps · 5G core areas" },
          { city: "Antalya",      speed: "80–180 Mbps · 4G+ widespread" },
          { city: "Cappadocia",   speed: "30–90 Mbps · 4G, varies by valley" },
          { city: "Eastern TR",   speed: "10–40 Mbps · 4G, patchy in rural" },
        ].map((r, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            borderTop: i === 0 ? "none" : "1.5px dashed rgba(14,14,20,0.2)",
            paddingTop: i === 0 ? 0 : 12,
          }}>
            <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
              fontSize: 19, letterSpacing: "-0.015em" }}>{r.city}</span>
            <span style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 12,
              letterSpacing: "0.08em", opacity: 0.75 }}>{r.speed}</span>
          </div>
        ))}
        <Mono op={0.6} size={11}>// MEASURED Q1 2026. WE UPDATE THIS QUARTERLY.</Mono>
      </div>
    </div>
  </section>
);

// ============================================================
// FAQ
// ============================================================
const FAQ = () => {
  const [open, setOpen] = useStateTR(0);
  const items = [
    { q: "Why isn't there an unlimited plan for Turkey?",
      a: "Because Turkish carriers don't open up local eSIM profiles to foreign travellers. Anything sold as \"unlimited Turkey\" is roaming dressed up — and roaming-unlimited always has a hidden throttle. We'd rather give you a clear bundle than lie about the cap." },
    { q: "Which carrier am I actually on?",
      a: "Turkcell or Vodafone Türkiye, whichever has the stronger handshake when you land. You'll see the carrier name in your phone's network settings — both deliver full 4G / 5G speeds where available." },
    { q: "What happens if I use up my bundle?",
      a: "Data pauses cleanly — no surprise pay-per-MB charges. Top up another bundle from the app or website; new data stacks on top of any remaining validity." },
    { q: "Can I use the eSIM for tethering?",
      a: "Yes, hotspot is included on every bundle. Share with a laptop, friend, anything you want." },
    { q: "Will the price go up while I'm there?",
      a: "No. The price you see at checkout is locked for the validity period. We don't do surge pricing during high season." },
  ];
  return (
    <section style={{ background: "#FAF6EE", padding: "120px 56px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <Mono>// FAQ</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 700,
          fontSize: 80, letterSpacing: "-0.035em", lineHeight: 0.95,
          margin: "14px 0 40px",
        }}>
          The questions, answered.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {items.map((it, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                textAlign: "left", cursor: "pointer",
                background: open === i ? "#fff" : "#F2EBDC",
                border: "3px solid #0E0E14", borderRadius: 24,
                boxShadow: "4px 4px 0 #0E0E14",
                padding: "22px 26px", color: "#0E0E14",
                display: "flex", flexDirection: "column", gap: 14,
                font: "inherit",
              }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                  fontSize: 24, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
                  {it.q}
                </span>
                <span style={{
                  width: 36, height: 36, borderRadius: 999,
                  background: open === i ? "#2E5BFF" : "transparent",
                  border: "2px solid #0E0E14", color: open === i ? "#FAF6EE" : "#0E0E14",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 22, flexShrink: 0,
                }}>{open === i ? "−" : "+"}</span>
              </div>
              {open === i && (
                <div style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 760 }}>
                  {it.a}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// PAGE
// ============================================================
const TRPage = () => (
  <div style={{ background: "#FAF6EE" }}>
    <Nav />
    <CountryHero />
    <WhyNoLocal />
    <Bundles />
    <QualityPromise />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<TRPage />);
