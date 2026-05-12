// NoLimits∞nline — Netherlands country page
// Local Odido eSIM · really unlimited · up to 1 Gbps · data-only

const { useState: useStateNL } = React;
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
      fontSize: 880, lineHeight: 1, color: "#2E5BFF",
      opacity: 0.06, pointerEvents: "none", userSelect: "none",
    }}>∞</div>

    {/* Breadcrumb */}
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
      <span style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}>NETHERLANDS</span>
    </div>

    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Sticker color="blue" rotate={-3} size="md">REAL UNLIMITED ∞</Sticker>
          <Sticker color="mint" rotate={4} size="sm">LOCAL eSIM · ODIDO</Sticker>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
          <h1 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 800,
            fontSize: 156, letterSpacing: "-0.05em", lineHeight: 0.85,
            margin: 0, textWrap: "balance",
          }}>
            Netherlands.
          </h1>
          <div style={{ fontSize: 72, lineHeight: 1 }}>🇳🇱</div>
        </div>

        <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 640 }}>
          A real Dutch eSIM, on Odido's network. Unlimited data, up to <strong>1 Gbps</strong> on 5G,
          no throttle, no voice. Data-only — because that's what you actually use.
        </p>

        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
          <Btn color="ink" size="lg">Get unlimited — €49 / 30 days</Btn>
          <a style={{ fontFamily:"var(--nlo-font-display)", fontWeight:700, fontSize: 18,
            textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 5,
            cursor: "pointer" }}>or see what's included →</a>
        </div>
      </div>

      {/* Right: spec card */}
      <div style={{
        background: "#2E5BFF", color: "#FAF6EE",
        border: "3px solid #0E0E14", borderRadius: 32,
        boxShadow: "8px 8px 0 #0E0E14", padding: 32,
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden style={{ position: "absolute", right: -60, bottom: -100,
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 380, lineHeight: 1, color: "#FFD23F",
          opacity: 0.18 }}>∞</div>

        <Mono color="#FFD23F">// AT A GLANCE</Mono>
        <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 60, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: "12px 0 24px" }}>
          The Dutch plan.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, position: "relative" }}>
          {[
            { n: "∞",      l: "Data — really" },
            { n: "1 Gbps", l: "Top speed · 5G" },
            { n: "30 days",l: "Validity · always" },
            { n: "0",      l: "Throttle, ever" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(250,246,238,0.08)", border: "1.5px solid rgba(250,246,238,0.25)",
              borderRadius: 18, padding: "16px 18px",
            }}>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 38, letterSpacing: "-0.03em", lineHeight: 1, color: i === 0 ? "#FFD23F" : "#FAF6EE" }}>
                {s.n}
              </div>
              <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 11,
                letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75, marginTop: 6 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(250,246,238,0.25)", paddingTop: 16, marginTop: 20,
          display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <Mono color="#FAF6EE" op={0.8}>// NETWORK</Mono>
          <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>
            Odido <span style={{ color: "#FFD23F" }}>5G</span>
          </div>
        </div>
      </div>
    </div>

    {/* Floating sticker */}
    <div style={{ position: "absolute", right: 80, top: 80 }}>
      <Sticker color="yellow" rotate={8} size="md">UP TO 1 Gbps</Sticker>
    </div>
  </section>
);

// ============================================================
// ODIDO STORY
// ============================================================
const OdidoStory = () => (
  <section style={{ background: "#F2EBDC", padding: "100px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 56, alignItems: "center" }}>

      <div style={{
        background: "#fff", border: "3px solid #0E0E14",
        borderRadius: 32, boxShadow: "8px 8px 0 #0E0E14",
        padding: 36, position: "relative",
      }}>
        <div style={{ position: "absolute", top: -18, left: 28 }}>
          <Sticker color="mint" rotate={-5} size="sm">LOCAL NETWORK</Sticker>
        </div>

        <Mono>// THE CARRIER</Mono>
        <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 84, letterSpacing: "-0.04em", lineHeight: 0.85, margin: "16px 0 18px" }}>
          Odido.
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.55, margin: 0 }}>
          The same towers Dutch households are connected to. Nationwide 5G coverage,
          consistently rated <strong>#1 for download speed</strong> in NL (Ookla 2024). You're not
          on a roaming agreement — you're on the network itself.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 24 }}>
          {[
            { n: "99.9%", l: "5G population coverage" },
            { n: "#1",    l: "Fastest 5G in NL · 2024" },
            { n: "EU",    l: "Roams free across EU" },
          ].map((s, i) => (
            <div key={i} style={{
              border: "2px solid #0E0E14", borderRadius: 18, padding: "12px 14px",
              background: "#FAF6EE",
            }}>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 28, letterSpacing: "-0.03em", lineHeight: 1, color: "#2E5BFF" }}>{s.n}</div>
              <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 10,
                letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <Mono>// WHY THIS MATTERS</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0, textWrap: "balance",
        }}>
          Same towers.<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>Same speeds.</span><br/>
          Locals get.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 560 }}>
          Other eSIM providers in NL run on roaming — your traffic detours through
          another country's gateway and you get a fraction of the speed. We don't.
          We negotiated a local profile directly with Odido, so your phone behaves
          exactly like a Dutch one.
        </p>
        <div style={{
          background: "#0E0E14", color: "#FAF6EE",
          border: "3px solid #0E0E14", borderRadius: 20,
          padding: "16px 22px", display: "flex", gap: 14, alignItems: "center",
          maxWidth: 560,
        }}>
          <div style={{ fontSize: 36 }}>⚡</div>
          <div>
            <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
              fontSize: 19, letterSpacing: "-0.015em" }}>
              Typical speeds: 600–950 Mbps down on 5G
            </div>
            <Mono color="#FAF6EE" op={0.6} size={11}>// MEASURED IN AMSTERDAM, ROTTERDAM, UTRECHT — 2024</Mono>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// THE PLAN
// ============================================================
const PlanRow = ({ label, value, highlight }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "20px 0", borderTop: "1.5px dashed rgba(14,14,20,0.18)",
  }}>
    <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
      fontSize: 20, letterSpacing: "-0.015em" }}>{label}</span>
    <span style={{
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 22, letterSpacing: "-0.02em",
      color: highlight ? "#2E5BFF" : "#0E0E14",
    }}>{value}</span>
  </div>
);

const ThePlan = () => (
  <section style={{ background: "#FAF6EE", padding: "120px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 48 }}>
        <div>
          <Mono>// THE PLAN</Mono>
          <h2 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 700,
            fontSize: 84, letterSpacing: "-0.035em", lineHeight: 0.92,
            margin: "14px 0 0", maxWidth: 880,
          }}>
            One plan. <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>One price.</span> No fine print.
          </h2>
        </div>
        <Sticker color="yellow" rotate={4} size="lg">DATA-ONLY · NO VOICE</Sticker>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "stretch" }}>
        {/* Big plan card */}
        <div style={{
          background: "#2E5BFF", color: "#FAF6EE",
          border: "3px solid #0E0E14", borderRadius: 32,
          boxShadow: "8px 8px 0 #0E0E14",
          padding: 40, position: "relative", overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          <div aria-hidden style={{
            position: "absolute", right: -60, top: -40,
            fontFamily: "var(--nlo-font-display)", fontWeight: 800,
            fontSize: 380, lineHeight: 1, color: "#FFD23F",
            opacity: 0.18, userSelect: "none", pointerEvents: "none",
          }}>∞</div>

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16 }}>
            <Mono color="#FFD23F">// PLAN</Mono>
            <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
              fontSize: 84, letterSpacing: "-0.045em", lineHeight: 0.85 }}>
              Unlimited<br/><span style={{ color: "#FFD23F" }}>NL.</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 110, letterSpacing: "-0.045em", lineHeight: 1 }}>€49</span>
              <span style={{ fontSize: 22, opacity: 0.85 }}>/ 30 days</span>
            </div>
            <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 13,
              letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.8 }}>
              one length · ⁈1.63 / day · no weekly trick-pricing
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0",
              display: "flex", flexDirection: "column", gap: 12, fontSize: 17 }}>
              {[
                "Really unlimited data — no 25 GB asterisk",
                "Up to 1 Gbps on Odido 5G",
                "We never throttle. Not at 100 GB. Not ever.",
                "Hotspot / tethering included",
                "Auto-renew off by default",
              ].map((f) => (
                <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{
                    flexShrink: 0, width: 24, height: 24, borderRadius: 999,
                    background: "#FFD23F", color: "#0E0E14", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 14,
                  }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 28 }}>
              <Btn color="yellow" size="lg">Get my Dutch eSIM →</Btn>
            </div>
          </div>
        </div>

        {/* Spec card */}
        <div style={{
          background: "#fff", color: "#0E0E14",
          border: "3px solid #0E0E14", borderRadius: 32,
          boxShadow: "8px 8px 0 #0E0E14",
          padding: 36, display: "flex", flexDirection: "column",
        }}>
          <Mono>// SPECS</Mono>
          <div style={{ marginTop: 12 }}>
            <PlanRow label="Validity" value="30 days · always" highlight />
            <PlanRow label="Data" value="∞ Unlimited" />
            <PlanRow label="Throttle after" value="Never" />
            <PlanRow label="Top speed" value="1 Gbps · 5G" />
            <PlanRow label="Network" value="Odido NL" />
            <PlanRow label="Voice / SMS" value="No — data only" />
            <PlanRow label="Hotspot" value="Yes" />
            <PlanRow label="Roaming in EU" value="Included" />
            <PlanRow label="Activation" value="30 sec · QR" />
            <PlanRow label="eSIM-compatible phone" value="Required" />
          </div>

          <div style={{
            marginTop: "auto",
            background: "#F2EBDC", border: "2px solid #0E0E14", borderRadius: 18,
            padding: "14px 18px", display: "flex", gap: 12, alignItems: "center",
          }}>
            <span style={{ fontSize: 22 }}>↻</span>
            <span style={{ fontFamily: "var(--nlo-font-body)", fontSize: 14, lineHeight: 1.4 }}>
              You'll keep your home number on your physical SIM. The eSIM only handles data.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// THE PROMISE STRIP
// ============================================================
const PromiseStrip = () => (
  <section style={{ background: "#FFD23F", padding: "80px 56px", borderBottom: "2px solid #0E0E14",
    position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", right: -60, top: -120,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 600, lineHeight: 1, color: "#0E0E14",
      opacity: 0.06, userSelect: "none", pointerEvents: "none",
    }}>∞</div>
    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 40, flexWrap: "wrap" }}>
      <div style={{ maxWidth: 720 }}>
        <Mono>// THE PROMISE</Mono>
        <div style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 56, letterSpacing: "-0.035em", lineHeight: 0.95,
          margin: "12px 0 0", textWrap: "balance",
        }}>
          We will <span style={{ color: "#2E5BFF" }}>never</span> throttle this plan.<br/>
          If we ever do — you get your money back, full stop.
        </div>
      </div>
      <Sticker color="ink" rotate={-4} size="lg">WRITTEN IN THE TERMS</Sticker>
    </div>
  </section>
);

// ============================================================
// FAQ
// ============================================================
const FAQ = () => {
  const [open, setOpen] = useStateNL(0);
  const items = [
    { q: "Why only a 30-day plan?",
      a: "Because every shorter \"weekly\" plan you see on other sites is just a worse-priced slice of the same monthly deal we get from Odido. Selling one clean 30-day plan keeps it honest and keeps the price down. If you're only in NL for a week, it's still the cheapest option — promise." },
    { q: "Is it actually unlimited?",
      a: "Yes. No 25 GB cap, no 384 kbps shadow throttle, no fair-use clause buried at the bottom. Stream 4K all week if you want — the network handles it, that's why we picked Odido." },
    { q: "Why is there no voice or SMS?",
      a: "Because nobody uses voice over their data SIM anymore — WhatsApp, FaceTime, Signal, and calls from your home number all work over data. Keeping it data-only lets us negotiate a better deal and pass the price down to you." },
    { q: "Will my phone work on Odido 5G?",
      a: "If your phone supports eSIM and Dutch 5G bands (n78, n28), yes. Most iPhones from XS onward, Pixel 4 onward, and Galaxy S20 onward will hit 5G. Older phones will fall back to 4G — still fast, no extra cost." },
    { q: "Can I keep my own number?",
      a: "Yes. The eSIM lives alongside your physical SIM. Your home number stays put, calls and SMS still arrive on it, but your data routes through Odido NL." },
    { q: "What happens after 30 days?",
      a: "It expires. Cleanly. We don't auto-renew unless you explicitly turn it on. No surprise charges, no \"trial converted\" emails. Need another month? Buy another plan in 30 seconds." },
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
const NLPage = () => (
  <div style={{ background: "#FAF6EE" }}>
    <Nav />
    <CountryHero />
    <OdidoStory />
    <ThePlan />
    <PromiseStrip />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<NLPage />);
