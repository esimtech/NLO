// NoLimits∞nline — Thailand country page
// Local AIS eSIM · unlimited · WITH a real Thai phone number · 7 / 15 / 30 days

const { useState: useStateTH } = React;
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
      fontSize: 880, lineHeight: 1, color: "#7BE0B5",
      opacity: 0.18, pointerEvents: "none", userSelect: "none",
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
      <span style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}>THAILAND</span>
    </div>

    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Sticker color="blue" rotate={-3} size="md">REAL UNLIMITED ∞</Sticker>
          <Sticker color="mint" rotate={4} size="sm">+66 LOCAL NUMBER</Sticker>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
          <h1 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 800,
            fontSize: 156, letterSpacing: "-0.05em", lineHeight: 0.85,
            margin: 0, textWrap: "balance",
          }}>
            Thailand.
          </h1>
          <div style={{ fontSize: 72, lineHeight: 1 }}>🇹🇭</div>
        </div>

        <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 660 }}>
          A real Thai eSIM, on AIS — the country's biggest 5G network.
          Unlimited data, no throttle, and <strong>an actual +66 phone number</strong> so taxis,
          hotels, and Grab can call you like a local. Pick the length that fits your trip.
        </p>

        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
          <Btn color="ink" size="lg">Get unlimited — from €14</Btn>
          <a style={{ fontFamily:"var(--nlo-font-display)", fontWeight:700, fontSize: 18,
            textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 5,
            cursor: "pointer" }}>or jump to plans →</a>
        </div>
      </div>

      {/* Right: phone-number showcase card */}
      <div style={{
        background: "#7BE0B5", color: "#0E0E14",
        border: "3px solid #0E0E14", borderRadius: 32,
        boxShadow: "8px 8px 0 #0E0E14", padding: 32,
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden style={{ position: "absolute", right: -60, bottom: -100,
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 380, lineHeight: 1, color: "#0E0E14",
          opacity: 0.08 }}>∞</div>

        <Mono>// YOUR THAI LINE</Mono>

        {/* Faux number display */}
        <div style={{
          background: "#FAF6EE", border: "2px solid #0E0E14",
          borderRadius: 18, padding: "20px 22px", marginTop: 14,
          display: "flex", alignItems: "center", gap: 14,
          boxShadow: "3px 3px 0 #0E0E14",
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 999,
            background: "#2E5BFF", color: "#FAF6EE",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <Mono op={0.7} size={11}>YOUR NUMBER · CALL / SMS / 2FA</Mono>
            <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
              fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1, marginTop: 4 }}>
              +66 6 1234 5678
            </div>
          </div>
        </div>

        {/* Stat grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 20, position: "relative" }}>
          {[
            { n: "∞",      l: "Data — really", color: "#2E5BFF" },
            { n: "+66",    l: "Real Thai number", color: "#0E0E14" },
            { n: "5G",     l: "AIS · nationwide", color: "#0E0E14" },
            { n: "7/15/30",l: "Day options", color: "#0E0E14" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "rgba(14,14,20,0.06)", border: "1.5px solid rgba(14,14,20,0.25)",
              borderRadius: 18, padding: "14px 16px",
            }}>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 32, letterSpacing: "-0.03em", lineHeight: 1, color: s.color }}>
                {s.n}
              </div>
              <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 10,
                letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.8, marginTop: 6 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Floating sticker */}
    <div style={{ position: "absolute", right: 80, top: 80 }}>
      <Sticker color="yellow" rotate={8} size="md">CALL · TEXT · 2FA — ALL LOCAL</Sticker>
    </div>
  </section>
);

// ============================================================
// WHY A PHONE NUMBER MATTERS
// ============================================================

const UseCaseRow = ({ icon, title, body }) => (
  <div style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: "20px 0",
    borderTop: "1.5px dashed rgba(14,14,20,0.2)" }}>
    <div style={{
      flexShrink: 0, width: 52, height: 52, borderRadius: 14,
      border: "2px solid #0E0E14", background: "#FAF6EE",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "3px 3px 0 #0E0E14",
    }}>{icon}</div>
    <div>
      <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{title}</div>
      <div style={{ fontSize: 16, lineHeight: 1.55, marginTop: 6, opacity: 0.9 }}>{body}</div>
    </div>
  </div>
);

const IconTaxi = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E0E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17h14M5 17v-5l2-5h10l2 5v5M5 17h2M19 17h-2M9 7V5h6v2" />
    <circle cx="8" cy="17" r="1.5" fill="#0E0E14" /><circle cx="16" cy="17" r="1.5" fill="#0E0E14" />
  </svg>
);
const IconHotel = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E0E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="14" rx="1" />
    <path d="M3 10h18M8 6V3h8v3M7 14h2M11 14h2M15 14h2M7 17h2M11 17h2M15 17h2" />
  </svg>
);
const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E0E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" fill="#FFD23F" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconChat = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E0E14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#7BE0B5" />
  </svg>
);

const PhoneNumberStory = () => (
  <section style={{ background: "#F2EBDC", padding: "100px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 56, alignItems: "center" }}>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Sticker color="yellow" rotate={-3}>WHY THIS MATTERS</Sticker>
          <Mono>// THE +66</Mono>
        </div>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0, textWrap: "balance",
        }}>
          A number people<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>can actually</span><br/>call you on.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 560 }}>
          Most travel eSIMs are data-only. That's fine in Amsterdam — useless when
          your Grab driver is two blocks away and can't reach you. In Thailand you'll
          get an actual local number on the eSIM. Calls, SMS, two-factor codes,
          all of it. Same line the locals get.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, maxWidth: 560, opacity: 0.85 }}>
          Your home number stays put on your physical SIM — calls and texts still
          arrive on it. The Thai line is a second number, ready when you need it.
        </p>
      </div>

      {/* Use-case list card */}
      <div style={{
        background: "#fff", border: "3px solid #0E0E14",
        borderRadius: 32, boxShadow: "8px 8px 0 #0E0E14",
        padding: 32, position: "relative",
      }}>
        <div style={{ position: "absolute", top: -16, right: 24 }}>
          <Sticker color="mint" rotate={5} size="sm">WHEN YOU'LL USE IT</Sticker>
        </div>
        <Mono>// EVERYDAY MOMENTS</Mono>
        <div style={{ marginTop: 8 }}>
          <UseCaseRow icon={<IconTaxi />} title="Grab, Bolt, taxi callbacks"
            body="Drivers ring the number on the booking. With a +66 line, that ring lands on your phone." />
          <UseCaseRow icon={<IconHotel />} title="Hotel check-in & restaurant bookings"
            body="Front desks call to confirm. Booking sites want a local number. Done — no awkward email-only loops." />
          <UseCaseRow icon={<IconShield />} title="2FA & banking codes"
            body="Some Thai services (banking apps, e-wallets, Grab Pay top-ups) require an SMS to a local number. Yours arrives instantly." />
          <UseCaseRow icon={<IconChat />} title="WhatsApp & Line signups"
            body="Spin up a fresh chat profile tied to the Thai number — useful for tour operators and dive shops that prefer Line." />
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// THE PLANS — 7 / 15 / 30 days
// ============================================================
const PlanCard = ({ days, price, perDay, features, color, featured, badge, value }) => {
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
      <Mono color={color === "blue" ? "#FFD23F" : undefined}>// PLAN</Mono>
      <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 64, letterSpacing: "-0.045em", lineHeight: 0.85 }}>
        {days}<br/>
        <span style={{ color: color === "blue" ? "#FFD23F" : "#2E5BFF",
          fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontStyle: "italic", fontSize: 36 }}>days.</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 84, letterSpacing: "-0.04em", lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: 18, opacity: 0.75 }}>total</span>
      </div>
      <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 12,
        letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75 }}>
        ≈ {perDay} / day · {value}
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
        <Btn color={color === "blue" ? "yellow" : "ink"}>Pick {days} days →</Btn>
      </div>
    </div>
  );
};

const Plans = () => (
  <section style={{ background: "#FAF6EE", padding: "120px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 56 }}>
        <div>
          <Mono>// THE PLANS</Mono>
          <h2 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 700,
            fontSize: 84, letterSpacing: "-0.035em", lineHeight: 0.92,
            margin: "14px 0 0", maxWidth: 880, textWrap: "balance",
          }}>
            Pick the length of your trip.<br/>
            <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>Everything else is the same.</span>
          </h2>
        </div>
        <Sticker color="mint" rotate={4} size="lg">UNLIMITED · +66 NUMBER</Sticker>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        <PlanCard
          days="7"
          price="€14"
          perDay="€2.00"
          value="long-weekend rates"
          color="cream"
          features={[
            "Unlimited data — really",
            "AIS 5G · nationwide",
            "+66 number included",
            "Calls & SMS to TH numbers",
            "Hotspot included",
          ]}
        />
        <PlanCard
          days="15"
          price="€22"
          perDay="€1.47"
          value="island-hopping sweet spot"
          color="yellow"
          badge="MOST PICKED"
          featured
          features={[
            "Unlimited data — really",
            "AIS 5G · nationwide",
            "+66 number included",
            "Calls & SMS to TH numbers",
            "Hotspot · share with anyone",
          ]}
        />
        <PlanCard
          days="30"
          price="€32"
          perDay="€1.07"
          value="cheapest per day"
          color="blue"
          badge="BEST VALUE"
          features={[
            "Unlimited data — really",
            "AIS 5G · nationwide",
            "+66 number included",
            "Calls & SMS to TH numbers",
            "Hotspot · share with anyone",
          ]}
        />
      </div>

      {/* What's the same row */}
      <div style={{
        marginTop: 48, background: "#0E0E14", color: "#FAF6EE",
        border: "3px solid #0E0E14", borderRadius: 24,
        padding: "24px 28px", boxShadow: "6px 6px 0 #0E0E14",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr) auto", gap: 24, alignItems: "center",
      }}>
        <div style={{
          display: "flex", flexDirection: "column", gap: 4,
          paddingRight: 20, borderRight: "1px solid rgba(250,246,238,0.2)",
        }}>
          <Mono color="#FFD23F">// EVERY PLAN</Mono>
          <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Same eSIM. Same network. Same +66 line.
          </span>
        </div>
        {[
          { n: "AIS", l: "Thailand's #1 5G" },
          { n: "∞",   l: "No throttle" },
          { n: "+66", l: "Calls · SMS · 2FA" },
        ].map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
              fontSize: 34, letterSpacing: "-0.03em", lineHeight: 1, color: i === 1 ? "#FFD23F" : "#FAF6EE" }}>
              {s.n}
            </div>
            <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 11,
              letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginTop: 4 }}>
              {s.l}
            </div>
          </div>
        ))}
        <Btn color="yellow" size="md">See all specs →</Btn>
      </div>
    </div>
  </section>
);

// ============================================================
// HOW THE +66 NUMBER WORKS — a quick step strip
// ============================================================
const HowItWorks = () => (
  <section style={{ background: "#2E5BFF", color: "#FAF6EE",
    padding: "100px 56px", borderBottom: "2px solid #0E0E14",
    position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", right: -60, top: -120,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 600, lineHeight: 1, color: "#FFD23F",
      opacity: 0.16, userSelect: "none", pointerEvents: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
      <Mono color="#FFD23F">// HOW THE +66 NUMBER WORKS</Mono>
      <h2 style={{
        fontFamily: "var(--nlo-font-display)", fontWeight: 700,
        fontSize: 72, letterSpacing: "-0.035em", lineHeight: 0.95,
        margin: "14px 0 48px", maxWidth: 900, textWrap: "balance",
      }}>
        You get your number <span style={{ fontStyle: "italic", fontWeight: 500, color: "#FFD23F" }}>before</span> you land.
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {[
          { n: "01", t: "Pick a plan", d: "7, 15 or 30 days. All include the +66 number." },
          { n: "02", t: "We email a QR", d: "Within 30 seconds, with your assigned Thai number written on it." },
          { n: "03", t: "Scan it", d: "Adds the eSIM to your phone. Your home SIM stays put." },
          { n: "04", t: "Land in BKK", d: "It connects automatically. The number is live before passport control." },
        ].map((s) => (
          <div key={s.n} style={{
            background: "rgba(250,246,238,0.08)",
            border: "2px solid rgba(250,246,238,0.25)",
            borderRadius: 24, padding: 24, minHeight: 200,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div style={{
              fontFamily: "var(--nlo-font-display)", fontWeight: 800,
              fontSize: 72, letterSpacing: "-0.045em", lineHeight: 0.85,
              color: "#FFD23F",
            }}>{s.n}</div>
            <div>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                fontSize: 24, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{s.t}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, marginTop: 8, opacity: 0.88 }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// FAQ
// ============================================================
const FAQ = () => {
  const [open, setOpen] = useStateTH(0);
  const items = [
    { q: "Is the +66 number really mine while my plan is active?",
      a: "Yes. You get a real Thai mobile number on the AIS network — not a virtual VoIP forward. People call it, your phone rings. SMS to it lands on your phone. When the plan expires, the number is recycled back to AIS." },
    { q: "Can I keep the same number if I extend or come back?",
      a: "If you renew before the plan expires, the number stays. If it lapses for more than 90 days, it goes back into the AIS pool — we'll assign you a fresh one next time." },
    { q: "Does my home number still work?",
      a: "Yes. Your physical SIM keeps your home line — calls and SMS still arrive on it. The Thai eSIM is a second line on the same phone." },
    { q: "Can I call internationally with the Thai number?",
      a: "Calls and SMS to Thai numbers are included unlimited. International calling out is pay-as-you-go at honest per-minute rates (cheaper than roaming) — you'll see the rates in-app before any call connects." },
    { q: "Will my phone work on AIS 5G?",
      a: "If your phone supports eSIM and Thai 5G bands (n1, n3, n28, n41), yes. Most iPhones from XS onward, Pixel 4+, Galaxy S20+ will hit 5G. Older phones fall back to 4G — still fast across all major cities and islands." },
    { q: "What happens after my 7 / 15 / 30 days?",
      a: "Nothing — it expires. We don't auto-renew unless you turn it on. Need more time? Top up in-app and the plan extends from the day it would've ended." },
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
const THPage = () => (
  <div style={{ background: "#FAF6EE" }}>
    <Nav />
    <CountryHero />
    <PhoneNumberStory />
    <Plans />
    <HowItWorks />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<THPage />);
