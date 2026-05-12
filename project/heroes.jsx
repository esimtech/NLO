// NoLimits∞nline — Homepage
// Sticker poster hero + "What we do differently" + Proud European + CTA + Footer
// Uses shared components from nlo-shared.jsx

const { useState } = React;
const { Wordmark, Sticker, Btn, Mono, FlagDot, Nav, SearchBox, CTA, Footer } = window;

// ============================================================
// HERO — Sticker poster opener
// ============================================================
const Hero = () => {
  const cities = [
    { name: "AMSTERDAM",   tone: "#FFD23F" },
    { name: "LISBON",      tone: "#FF6B6B" },
    { name: "ISTANBUL",    tone: "#7BE0B5" },
    { name: "TOKYO",       tone: "#C9B6FF" },
    { name: "BALI",        tone: "#FFD23F" },
  ];
  return (
    <section style={{ position: "relative", padding: "72px 56px 0", overflow: "hidden", background: "#FAF6EE" }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(135deg, transparent 0 38px, rgba(14,14,20,0.04) 38px 39px)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", display: "flex", flexDirection: "column",
        alignItems: "center", gap: 24, textAlign: "center", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <Sticker color="coral" rotate={-4}>WE DON'T DO FAKE UNLIMITED</Sticker>
          <Sticker color="mint" rotate={3} size="sm">200+ COUNTRIES</Sticker>
        </div>

        <h1 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 144, letterSpacing: "-0.05em", lineHeight: 0.84,
          margin: 0, textWrap: "balance",
        }}>
          Pick a country.<br/>
          <span style={{ color: "#2E5BFF" }}>Get on the internet.</span>
        </h1>

        <p style={{ fontSize: 21, lineHeight: 1.45, margin: 0, maxWidth: 720 }}>
          Real <em>unlimited</em> in the countries where we can offer it.
          Honest, well-priced bundles everywhere else. Same eSIM, same QR code.
        </p>

        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 8 }}>
          <SearchBox placeholder="Search 200+ countries…" />
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#fff", border: "2px solid #0E0E14",
            borderRadius: 999, padding: "10px 18px",
            boxShadow: "3px 3px 0 #0E0E14",
          }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#2E5BFF" }} />
            <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 16 }}>Unlimited</span>
            <span style={{ fontFamily: "var(--nlo-font-body)", fontSize: 15, opacity: 0.75 }}>— really. No 25 GB cap.</span>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "#fff", border: "2px solid #0E0E14",
            borderRadius: 999, padding: "10px 18px",
            boxShadow: "3px 3px 0 #0E0E14",
          }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FFD23F", border: "1.5px solid #0E0E14" }} />
            <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 16 }}>Bundles</span>
            <span style={{ fontFamily: "var(--nlo-font-body)", fontSize: 15, opacity: 0.75 }}>— 5 GB → 100 GB, honest prices.</span>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", display: "flex", justifyContent: "center",
        gap: 14, flexWrap: "wrap", marginTop: 72, paddingBottom: 72 }}>
        {cities.map((c, i) => (
          <a key={c.name} href={
            c.name === "AMSTERDAM" ? "Netherlands.html" :
            c.name === "ISTANBUL" ? "Turkey.html" : "#"
          } style={{
            transform: `rotate(${(i % 2 ? 1 : -1) * (2 + (i % 3))}deg)`,
            background: c.tone, color: "#0E0E14",
            border: "2px solid #0E0E14", borderRadius: 999,
            padding: "12px 22px",
            fontFamily: "var(--nlo-font-display)", fontWeight: 800,
            fontSize: 18, letterSpacing: "0.04em",
            boxShadow: "3px 3px 0 #0E0E14",
            display: "inline-flex", gap: 8, alignItems: "center",
            textDecoration: "none",
          }}>
            <span style={{ color: "#2E5BFF" }}>∞</span>{c.name}
          </a>
        ))}
      </div>

      <div style={{ position: "absolute", left: 56, top: 220 }}>
        <Sticker color="yellow" rotate={-12} size="md">✓ ESIM · 30s SETUP</Sticker>
      </div>
      <div style={{ position: "absolute", right: 56, top: 280 }}>
        <Sticker color="ink" rotate={9} size="md">NO ROAMING. EVER.</Sticker>
      </div>
    </section>
  );
};

// ============================================================
// WHAT WE DO DIFFERENTLY
// ============================================================
const IconLocal = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#0E0E14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="28" cy="24" r="9" />
    <path d="M28 33c-7 7-12 11-12 16h24c0-5-5-9-12-16Z" />
    <circle cx="28" cy="24" r="3" fill="#2E5BFF" stroke="none" />
  </svg>
);
const IconUnlimited = () => (
  <svg width="64" height="56" viewBox="0 0 64 56" fill="none" stroke="#0E0E14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 28c0-7 5-12 11-12 5 0 8 4 13 12s8 12 13 12c6 0 11-5 11-12s-5-12-11-12c-5 0-8 4-13 12s-8 12-13 12c-6 0-11-5-11-12Z" fill="#FFD23F" />
  </svg>
);
const IconPhone = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#0E0E14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="6" width="28" height="44" rx="6" fill="#7BE0B5" />
    <line x1="14" y1="14" x2="42" y2="14" />
    <line x1="14" y1="42" x2="42" y2="42" />
    <circle cx="28" cy="46" r="1.5" fill="#0E0E14" stroke="none" />
  </svg>
);

const DiffCard = ({ icon, badge, title, body, color }) => (
  <div style={{
    background: "#fff", color: "#0E0E14",
    border: "3px solid #0E0E14", borderRadius: 28,
    padding: 32, position: "relative",
    boxShadow: "6px 6px 0 #0E0E14",
    display: "flex", flexDirection: "column", gap: 18,
    minHeight: 360,
  }}>
    <div style={{ position: "absolute", top: -16, right: 24 }}>
      <Sticker color={color} rotate={5} size="sm">{badge}</Sticker>
    </div>
    <div style={{
      width: 80, height: 80, borderRadius: 20,
      border: "2px solid #0E0E14", background: "#FAF6EE",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "3px 3px 0 #0E0E14",
    }}>{icon}</div>
    <h3 style={{
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 34, letterSpacing: "-0.03em", lineHeight: 0.95,
      margin: 0, textWrap: "balance",
    }}>{title}</h3>
    <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0 }}>{body}</p>
  </div>
);

const VsTable = () => {
  const rows = [
    { feature: "\"Unlimited\" plans",      them: "Throttled to 384 kbps after 25 GB",   us: "Actually unlimited. No throttle." },
    { feature: "Network underneath",        them: "Roaming partner — whichever is cheapest", us: "Local carrier, every time we can" },
    { feature: "Speed in-country",          them: "Roaming speeds, often 3G fallback",   us: "Full local 5G / 4G — same as locals get" },
    { feature: "Local phone number",        them: "Never",                              us: "Yes, in 40+ countries" },
    { feature: "Hidden fees",               them: "Surprise \"data top-up\" charges",   us: "What you see is what you pay" },
  ];
  return (
    <div style={{
      background: "#0E0E14", color: "#FAF6EE",
      borderRadius: 32, border: "3px solid #0E0E14",
      boxShadow: "8px 8px 0 #0E0E14",
      overflow: "hidden", marginTop: 56,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr",
        padding: "20px 32px", alignItems: "center",
        borderBottom: "1px solid rgba(250,246,238,0.15)" }}>
        <Mono color="#FAF6EE" op={0.6}>// SIDE-BY-SIDE</Mono>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            background: "#2A2A35", color: "#FAF6EE",
            border: "1.5px solid rgba(250,246,238,0.3)",
            borderRadius: 999, padding: "6px 18px",
            fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 14,
            letterSpacing: "0.06em", textTransform: "uppercase",
          }}>The big providers</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            background: "#FFD23F", color: "#0E0E14",
            border: "2px solid #0E0E14", borderRadius: 999,
            padding: "6px 18px",
            fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 14,
            letterSpacing: "0.04em",
          }}>NoLimits∞nline</div>
        </div>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr",
          padding: "22px 32px",
          borderTop: i === 0 ? "none" : "1px solid rgba(250,246,238,0.12)",
          alignItems: "center",
        }}>
          <div style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 700,
            fontSize: 19, letterSpacing: "-0.01em",
          }}>{r.feature}</div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, justifyContent: "center",
            fontSize: 15, lineHeight: 1.4, opacity: 0.8, textAlign: "center",
          }}>
            <span style={{
              flexShrink: 0, width: 22, height: 22, borderRadius: 999,
              background: "transparent", border: "1.5px solid #FF6B6B",
              color: "#FF6B6B", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 14,
            }}>✕</span>
            <span>{r.them}</span>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, justifyContent: "center",
            fontSize: 15, lineHeight: 1.4, textAlign: "center",
            color: "#FAF6EE",
          }}>
            <span style={{
              flexShrink: 0, width: 22, height: 22, borderRadius: 999,
              background: "#7BE0B5", color: "#0E0E14",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 14,
            }}>✓</span>
            <span>{r.us}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Differently = () => (
  <section style={{ background: "#F2EBDC", padding: "120px 56px", borderTop: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 56 }}>
        <div>
          <Mono>// WHAT WE DO DIFFERENTLY</Mono>
          <h2 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 700,
            fontSize: 84, letterSpacing: "-0.035em", lineHeight: 0.92,
            margin: "14px 0 0", maxWidth: 880, textWrap: "balance",
          }}>
            Local eSIM where possible.<br/>
            <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>
              Not roaming dressed up
            </span> as something else.
          </h2>
        </div>
        <Sticker color="coral" rotate={-3} size="lg">REAL UNLIMITED, OR NOTHING</Sticker>
      </div>

      <p style={{ fontSize: 21, lineHeight: 1.5, maxWidth: 900, margin: "0 0 56px" }}>
        Most eSIM providers resell the same handful of roaming agreements —
        which is why their "unlimited" always has an asterisk and a throttle.
        We do it the slow way: a real, <strong>local</strong> profile on the country's actual network
        whenever we can negotiate one. Better speed, better coverage, and — in 40+ countries —
        an actual local number you can hand to a hotel or a taxi.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        <DiffCard
          icon={<IconLocal />}
          badge="LOCAL FIRST"
          color="mint"
          title="On the country's own network."
          body={<>
            Where carriers will play ball, we ship a <strong>local profile</strong> — Odido in the Netherlands,
            SoftBank in Japan, Telcel in Mexico, AIS in Thailand. Same network the locals use,
            same towers, same speeds. Not a roaming hop through three countries.
          </>}
        />
        <DiffCard
          icon={<IconUnlimited />}
          badge="NO THROTTLE"
          color="yellow"
          title="Unlimited means unlimited."
          body={<>
            The big clubs' "unlimited" is <strong>25 GB then throttled to 384 kbps</strong> —
            unusable for anything except text. Ours doesn't slow down at 25 GB, doesn't slow down
            at 100 GB, doesn't slow down. If we can't offer it honestly, we don't call it unlimited.
          </>}
        />
        <DiffCard
          icon={<IconPhone />}
          badge="40+ COUNTRIES"
          color="coral"
          title="A real local number, often."
          body={<>
            Because we issue a local profile, you often get a <strong>local phone number</strong>
            with it — for WhatsApp signup, two-factor codes, a taxi callback, hotel check-in.
            Not "your home number, roaming". An actual number that works where you are.
          </>}
        />
      </div>

      <VsTable />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 24, marginTop: 56 }}>
        <Mono>// IF WE CAN'T BEAT YOUR HOME SIM, WE'LL SAY SO ON THE PRODUCT PAGE.</Mono>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <Btn color="ink" size="lg">See the country list →</Btn>
          <a style={{ fontFamily:"var(--nlo-font-display)", fontWeight:700, fontSize: 18,
            textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 5,
            cursor: "pointer" }}>How we negotiate local deals →</a>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// PROUD EUROPEAN
// ============================================================
const ProudEuropean = () => (
  <section style={{ background: "#FAF6EE", padding: "120px 56px", borderTop: "2px solid #0E0E14", position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", left: -120, bottom: -180,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 720, lineHeight: 1, color: "#2E5BFF",
      opacity: 0.05, userSelect: "none", pointerEvents: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 64, alignItems: "center" }}>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <Sticker color="blue" rotate={-2} size="md">PROUD EUROPEAN COMPANY</Sticker>
          <Mono>// AMSTERDAM · NL</Mono>
        </div>

        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: 0, textWrap: "balance",
        }}>
          Built in <span style={{ color: "#2E5BFF" }}>Amsterdam.</span><br/>
          Honest by <span style={{ fontStyle: "italic", fontWeight: 500 }}>habit.</span>
        </h2>

        <p style={{ fontSize: 21, lineHeight: 1.55, margin: 0, maxWidth: 620 }}>
          We're a small Dutch team, and the Dutch have a habit you've probably noticed:
          we say what we mean. Sometimes a little too directly. It makes us terrible at
          marketing fluff — and pretty good at building a product that doesn't need any.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 620, opacity: 0.85 }}>
          So our "unlimited" really is unlimited. Our prices are the prices.
          Our coverage list says "yes" or "no", not "yes, but". If we can't do something
          well, we don't sell it. That's not a tagline — it's just how we'd want
          to be sold to ourselves.
        </p>

        <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 12, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FlagDot c="#AE1C28" /><FlagDot c="#FFFFFF" /><FlagDot c="#21468B" />
            <Mono>NEDERLANDS BEDRIJF</Mono>
          </div>
          <div style={{ width: 1, height: 22, background: "#0E0E14", opacity: 0.2 }} />
          <Mono>GDPR · EU DATA · NO RESALE</Mono>
        </div>
      </div>

      <div style={{
        background: "#FFD23F", color: "#0E0E14",
        border: "3px solid #0E0E14", borderRadius: 32,
        boxShadow: "8px 8px 0 #0E0E14",
        padding: 36, position: "relative",
        display: "flex", flexDirection: "column", gap: 20,
      }}>
        <div style={{ position: "absolute", top: -18, left: 28 }}>
          <Sticker color="ink" rotate={-5} size="sm">THE DUTCH BIT</Sticker>
        </div>

        <Mono>// HOUSE RULES</Mono>

        <ul style={{ listStyle: "none", padding: 0, margin: 0,
          display: "flex", flexDirection: "column", gap: 18 }}>
          {[
            { k: "01", t: "If we say unlimited, no throttle. Period." },
            { k: "02", t: "The price on the homepage is the price you pay." },
            { k: "03", t: "Local network where we can get one. Roaming only as a last resort." },
            { k: "04", t: "Your data stays in the EU. We don't resell it." },
            { k: "05", t: "If we can't beat your home plan, the country page will say so." },
          ].map((r) => (
            <li key={r.k} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span style={{
                fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 22, letterSpacing: "-0.02em", color: "#2E5BFF",
                lineHeight: 1.3, minWidth: 36,
              }}>{r.k}</span>
              <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{r.t}</span>
            </li>
          ))}
        </ul>

        <div style={{ borderTop: "2px dashed #0E0E14", paddingTop: 16, marginTop: 4,
          fontStyle: "italic", fontFamily: "var(--nlo-font-display)", fontWeight: 500,
          fontSize: 18, lineHeight: 1.4 }}>
          "Doe maar gewoon, dan doe je al gek genoeg."
          <div style={{ fontStyle: "normal", fontFamily: "var(--nlo-font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginTop: 6 }}>
            — dutch proverb. roughly: just act normal, that's plenty.
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// PAGE
// ============================================================
const Page = () => (
  <div style={{ background: "#FAF6EE" }}>
    <Nav />
    <Hero />
    <Differently />
    <ProudEuropean />
    <CTA />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
