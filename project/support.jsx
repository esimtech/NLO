// NoLimits∞nline — Support
// 24/7 WhatsApp + Live chat + Email + FAQ · real humans

const { useState: useStateSup } = React;
const { Wordmark, Sticker, Btn, Mono, FlagDot, Nav, SearchBox, CTA, Footer } = window;

// ============================================================
// HERO
// ============================================================
const Hero = () => (
  <section style={{ background: "#FAF6EE", padding: "80px 56px",
    borderBottom: "2px solid #0E0E14", position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", right: -140, top: -100,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 880, lineHeight: 1, color: "#7BE0B5",
      opacity: 0.22, pointerEvents: "none", userSelect: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <Sticker color="mint" rotate={-3}>24/7 · REAL HUMANS</Sticker>
        <Mono>// SUPPORT</Mono>
      </div>
      <h1 style={{
        fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 156, letterSpacing: "-0.05em", lineHeight: 0.84,
        margin: 0, textWrap: "balance",
      }}>
        Stuck? <span style={{ color: "#2E5BFF" }}>We pick up.</span>
      </h1>
      <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 760 }}>
        WhatsApp at <strong>any hour</strong>, any day. Live chat on the site.
        Email if you prefer paper trails. No queue tickets, no "your case is important
        to us", no bot pretending to be a person named Sarah. Just a small team that
        answers fast.
      </p>
    </div>
  </section>
);

// ============================================================
// CHANNELS
// ============================================================

const IconWhats = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path d="M3 21l1.5-5.4a8.5 8.5 0 1 1 3 3.5L3 21z" stroke="#0E0E14" strokeWidth="2.2" strokeLinejoin="round" fill="#7BE0B5"/>
    <path d="M9 9.5c.3 1 1 2.3 2.2 3.5 1.2 1.2 2.5 1.9 3.5 2.2.6.2 1-.1 1.3-.5l.5-.7c.2-.3.5-.4.8-.2l1.4.8c.4.2.5.6.3 1-.5.9-1.5 1.5-2.5 1.5-3.3 0-7.5-4.2-7.5-7.5 0-1 .6-2 1.5-2.5.4-.2.8-.1 1 .3l.8 1.4c.2.3.1.6-.2.8l-.7.5c-.4.3-.7.7-.5 1.3z"
      stroke="#0E0E14" strokeWidth="1.8" fill="#0E0E14"/>
  </svg>
);
const IconChat = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path d="M4 5h16v10H8l-4 4V5z" stroke="#0E0E14" strokeWidth="2.2" strokeLinejoin="round" fill="#FFD23F"/>
    <circle cx="9"  cy="10" r="1.3" fill="#0E0E14"/>
    <circle cx="12" cy="10" r="1.3" fill="#0E0E14"/>
    <circle cx="15" cy="10" r="1.3" fill="#0E0E14"/>
  </svg>
);
const IconMail = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#0E0E14" strokeWidth="2.2" fill="#C9B6FF"/>
    <path d="m3 7 9 6 9-6" stroke="#0E0E14" strokeWidth="2.2" strokeLinejoin="round"/>
  </svg>
);

const ChannelCard = ({ icon, name, status, line1, line2, action, color, href }) => (
  <a href={href || "#"} style={{
    textDecoration: "none", color: "inherit",
    background: color, border: "3px solid #0E0E14", borderRadius: 32,
    boxShadow: "8px 8px 0 #0E0E14", padding: 32,
    display: "flex", flexDirection: "column", gap: 16,
    position: "relative", overflow: "hidden", minHeight: 380,
  }}>
    <div style={{
      width: 72, height: 72, borderRadius: 18,
      background: "#FAF6EE", border: "2px solid #0E0E14",
      boxShadow: "3px 3px 0 #0E0E14",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>{icon}</div>

    <div>
      <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 38, letterSpacing: "-0.03em", lineHeight: 0.95 }}>{name}</div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8,
        background: "rgba(14,14,20,0.1)", border: "1.5px solid #0E0E14", borderRadius: 999,
        padding: "4px 12px", fontFamily: "var(--nlo-font-mono)", fontSize: 11,
        letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#0E0E14",
          boxShadow: "0 0 0 3px rgba(14,14,20,0.15)" }} />
        {status}
      </div>
    </div>

    <div style={{ fontSize: 17, lineHeight: 1.55, marginTop: 4 }}>
      <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em" }}>
        {line1}
      </div>
      <div style={{ opacity: 0.85, marginTop: 6 }}>{line2}</div>
    </div>

    <div style={{ marginTop: "auto" }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "#0E0E14", color: "#FAF6EE",
        border: "2px solid #0E0E14", borderRadius: 999,
        padding: "14px 24px",
        fontFamily: "var(--nlo-font-display)", fontWeight: 700,
        fontSize: 18, letterSpacing: "-0.01em",
        boxShadow: "3px 3px 0 #0E0E14",
      }}>{action}</span>
    </div>
  </a>
);

const Channels = () => (
  <section style={{ background: "#F2EBDC", padding: "120px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 40 }}>
        <div>
          <Mono>// PICK YOUR CHANNEL</Mono>
          <h2 style={{
            fontFamily: "var(--nlo-font-display)", fontWeight: 700,
            fontSize: 80, letterSpacing: "-0.035em", lineHeight: 0.95,
            margin: "14px 0 0", textWrap: "balance",
          }}>
            Three ways to reach us. <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>All staffed.</span>
          </h2>
        </div>
        <Sticker color="coral" rotate={4} size="lg">NO BOTS. NO QUEUES.</Sticker>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
        <ChannelCard
          icon={<IconWhats />} color="#7BE0B5"
          name="WhatsApp"
          status="ONLINE · 24/7"
          line1="Median reply: 1m 40s."
          line2="Best for in-trip emergencies. Reaches the same humans as live chat."
          action="Open WhatsApp →"
        />
        <ChannelCard
          icon={<IconChat />} color="#FFD23F"
          name="Live chat"
          status="ONLINE NOW"
          line1="Median reply: 2 minutes."
          line2="The bubble at the bottom-right of every page. Same team, slightly more screen-friendly."
          action="Start a chat →"
        />
        <ChannelCard
          icon={<IconMail />} color="#C9B6FF"
          name="Email"
          status="REPLIES <2H"
          line1="hi@nolimitsonline.eu"
          line2="If you want a paper trail, or your question is long. Always answered same business day."
          action="Compose email →"
        />
      </div>
    </div>
  </section>
);

// ============================================================
// HUMANS BEHIND THE CHAT
// ============================================================
const TeamStrip = () => (
  <section style={{ background: "#FAF6EE", padding: "100px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <Mono>// THE HUMANS</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 72, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: "14px 0 18px", textWrap: "balance",
        }}>
          A small team.<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>Different time zones.</span>
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, margin: 0, maxWidth: 580 }}>
          Support is split across Amsterdam, Lisbon, and Bali — which is how we
          stay genuinely 24/7 without robots. Everyone on the team has shipped an
          eSIM and travelled with it. When they tell you to toggle airplane mode,
          they know why.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {[
          { name: "Mira",  city: "Amsterdam · NL", shift: "EU mornings · afternoons", flag: "🇳🇱" },
          { name: "Tomás", city: "Lisbon · PT",    shift: "EU evenings", flag: "🇵🇹" },
          { name: "Ayu",   city: "Bali · ID",      shift: "Overnight in Europe", flag: "🇮🇩" },
        ].map((t) => (
          <div key={t.name} style={{
            background: "#fff", border: "3px solid #0E0E14",
            borderRadius: 24, boxShadow: "6px 6px 0 #0E0E14",
            padding: 22, display: "flex", flexDirection: "column", gap: 10,
            position: "relative",
          }}>
            {/* Avatar placeholder */}
            <div style={{
              width: 64, height: 64, borderRadius: 999,
              background: "#FFD23F", border: "2px solid #0E0E14",
              boxShadow: "3px 3px 0 #0E0E14",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--nlo-font-display)", fontWeight: 800,
              fontSize: 28, letterSpacing: "-0.02em",
            }}>{t.name[0]}</div>
            <div>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 22, letterSpacing: "-0.02em" }}>
                {t.name} <span style={{ fontSize: 18 }}>{t.flag}</span>
              </div>
              <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 11,
                letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginTop: 2 }}>
                {t.city}
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 8, opacity: 0.85 }}>
                {t.shift}
              </div>
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
  const [open, setOpen] = useStateSup(0);
  const [filter, setFilter] = useStateSup("All");

  const items = [
    { cat: "Activation", q: "I scanned the QR but nothing happened.",
      a: "Open Settings → Mobile data → Add eSIM, then point the camera. If you get a \"can't add eSIM\" error, it's usually one of two things: you've reached your phone's eSIM slot limit (delete an old unused one), or the QR has already been redeemed once. WhatsApp us and we'll re-issue." },
    { cat: "Activation", q: "When should I activate?",
      a: "Anywhere from 7 days before to the moment you land. We recommend installing the profile at home (so you can troubleshoot on Wi-Fi if needed) but leaving the line OFF until you board the flight." },
    { cat: "Coverage",   q: "Why don't I see 5G in [country]?",
      a: "Either: the area is genuinely 4G only (rural / non-urban regions of many countries), or your phone doesn't support the local 5G bands. The country page lists which 5G bands the carrier uses — match against your phone's spec sheet." },
    { cat: "Billing",    q: "Will I be charged again automatically?",
      a: "No. Auto-renew is OFF by default. The plan you bought expires, and that's it. If you want auto-renew, you can opt in from the app." },
    { cat: "Billing",    q: "Can I get a refund?",
      a: "Yes, if the eSIM hasn't been activated yet. Once you've connected to a network we can't roll back the carrier charge — but if there's a coverage problem, WhatsApp us and we'll work it out (we've never not refunded a legit complaint)." },
    { cat: "Numbers",    q: "When do I get a local phone number?",
      a: "In every country marked \"+ NUMBER\" on the destinations page — about 40 of them. The number is issued at the moment you activate the eSIM and appears in the email confirmation." },
    { cat: "Numbers",    q: "Does it work for WhatsApp / 2FA?",
      a: "Yes. The number can receive SMS for two-factor codes (banking, e-wallets, Grab Pay, etc.) and you can register WhatsApp / Telegram / Line against it." },
    { cat: "Device",     q: "My phone doesn't support eSIM. Now what?",
      a: "Then unfortunately we can't help you with this product — eSIMs are software-only. If you bought a recent flagship phone in mainland China, it may have come without eSIM hardware even though the model usually supports it. Drop us a line with your model + region and we'll confirm." },
  ];

  const cats = ["All", "Activation", "Coverage", "Billing", "Numbers", "Device"];
  const filtered = filter === "All" ? items : items.filter(i => i.cat === filter);

  return (
    <section style={{ background: "#FAF6EE", padding: "120px 56px", borderBottom: "2px solid #0E0E14" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Mono>// SELF-SERVE FIRST</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 700,
          fontSize: 80, letterSpacing: "-0.035em", lineHeight: 0.95,
          margin: "14px 0 28px",
        }}>
          The questions, answered.
        </h2>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              background: filter === c ? "#0E0E14" : "transparent",
              color: filter === c ? "#FAF6EE" : "#0E0E14",
              border: "2px solid #0E0E14", borderRadius: 999,
              padding: "8px 16px", cursor: "pointer",
              fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.04em", textTransform: "uppercase",
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {filtered.map((it, i) => (
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
                <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                  <Mono color="#2E5BFF" op={1} size={11}>// {it.cat.toUpperCase()}</Mono>
                  <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                    fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
                    {it.q}
                  </span>
                </div>
                <span style={{
                  width: 36, height: 36, borderRadius: 999,
                  background: open === i ? "#2E5BFF" : "transparent",
                  border: "2px solid #0E0E14", color: open === i ? "#FAF6EE" : "#0E0E14",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--nlo-font-display)", fontWeight: 800, fontSize: 22, flexShrink: 0,
                }}>{open === i ? "−" : "+"}</span>
              </div>
              {open === i && (
                <div style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 880 }}>
                  {it.a}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Escalation strip */}
        <div style={{
          marginTop: 32, background: "#0E0E14", color: "#FAF6EE",
          border: "3px solid #0E0E14", borderRadius: 22,
          boxShadow: "6px 6px 0 #0E0E14", padding: "20px 28px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 20, flexWrap: "wrap",
        }}>
          <div>
            <Mono color="#FFD23F">// CAN'T FIND IT?</Mono>
            <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
              fontSize: 22, letterSpacing: "-0.015em", marginTop: 4 }}>
              WhatsApp answers in under two minutes. No queue ticket.
            </div>
          </div>
          <Btn color="yellow" size="md">Message support →</Btn>
        </div>
      </div>
    </section>
  );
};

const Page = () => (
  <div style={{ background: "#FAF6EE" }}>
    <Nav />
    <Hero />
    <Channels />
    <TeamStrip />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
