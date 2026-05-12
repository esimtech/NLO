// NoLimits∞nline — Destinations index page
// Browse all countries · filter unlimited / bundle · search

const { useState: useStateDest } = React;
const { Wordmark, Sticker, Btn, Mono, FlagDot, Nav, SearchBox, CTA, Footer, DESTINATIONS } = window;

// Extended catalogue for the destinations page
const ALL_COUNTRIES = [
  // Unlimited / local
  { name: "Netherlands",  flag: "🇳🇱", carrier: "Odido · 30 days", plan: "unlimited", number: true,  price: "€49", unit: "30d", region: "Europe", href: "Netherlands.html" },
  { name: "Portugal",     flag: "🇵🇹", carrier: "NOS",            plan: "unlimited", number: false, price: "€19", region: "Europe" },
  { name: "Spain",        flag: "🇪🇸", carrier: "Movistar",       plan: "unlimited", number: true,  price: "€19", region: "Europe" },
  { name: "Germany",      flag: "🇩🇪", carrier: "O2 Telefónica",  plan: "unlimited", number: false, price: "€19", region: "Europe" },
  { name: "France",       flag: "🇫🇷", carrier: "Orange",         plan: "unlimited", number: false, price: "€19", region: "Europe" },
  { name: "Italy",        flag: "🇮🇹", carrier: "TIM",            plan: "unlimited", number: false, price: "€19", region: "Europe" },
  { name: "UK",           flag: "🇬🇧", carrier: "EE",             plan: "unlimited", number: true,  price: "€22", region: "Europe" },
  { name: "Iceland",      flag: "🇮🇸", carrier: "Síminn",         plan: "unlimited", number: false, price: "€24", region: "Europe" },
  { name: "Japan",        flag: "🇯🇵", carrier: "SoftBank",       plan: "unlimited", number: true,  price: "€29", region: "Asia"   },
  { name: "Thailand",     flag: "🇹🇭", carrier: "AIS",            plan: "unlimited", number: true,  price: "€22", region: "Asia",   href: "Thailand.html" },
  { name: "South Korea",  flag: "🇰🇷", carrier: "KT",             plan: "unlimited", number: true,  price: "€26", region: "Asia"   },
  { name: "Indonesia",    flag: "🇮🇩", carrier: "Telkomsel",      plan: "unlimited", number: false, price: "€24", region: "Asia"   },
  { name: "Malaysia",     flag: "🇲🇾", carrier: "Maxis",          plan: "unlimited", number: true,  price: "€21", region: "Asia"   },
  { name: "Singapore",    flag: "🇸🇬", carrier: "Singtel",        plan: "unlimited", number: true,  price: "€25", region: "Asia"   },
  { name: "USA",          flag: "🇺🇸", carrier: "T-Mobile",       plan: "unlimited", number: true,  price: "€29", region: "Americas" },
  { name: "Canada",       flag: "🇨🇦", carrier: "Rogers",         plan: "unlimited", number: true,  price: "€29", region: "Americas" },
  { name: "Mexico",       flag: "🇲🇽", carrier: "Telcel",         plan: "bundle",    number: false, price: "€12", region: "Americas" },
  { name: "Brazil",       flag: "🇧🇷", carrier: "Claro",          plan: "bundle",    number: false, price: "€14", region: "Americas" },
  { name: "Argentina",    flag: "🇦🇷", carrier: "Movistar AR",    plan: "bundle",    number: false, price: "€15", region: "Americas" },
  { name: "Peru",         flag: "🇵🇪", carrier: "Movistar PE",    plan: "bundle",    number: false, price: "€13", region: "Americas" },
  { name: "Chile",        flag: "🇨🇱", carrier: "Entel",          plan: "bundle",    number: false, price: "€14", region: "Americas" },

  // Bundles
  { name: "Turkey",       flag: "🇹🇷", carrier: "Turkcell",       plan: "bundle",    number: false, price: "€11", region: "Europe", href: "Turkey.html" },
  { name: "Vietnam",      flag: "🇻🇳", carrier: "Viettel",        plan: "bundle",    number: false, price: "€14", region: "Asia"   },
  { name: "Georgia",      flag: "🇬🇪", carrier: "Magti",          plan: "bundle",    number: false, price: "€9",  region: "Europe" },
  { name: "Morocco",      flag: "🇲🇦", carrier: "Maroc Telecom",  plan: "bundle",    number: false, price: "€11", region: "Africa" },
  { name: "Egypt",        flag: "🇪🇬", carrier: "Vodafone EG",    plan: "bundle",    number: false, price: "€12", region: "Africa" },
  { name: "Kenya",        flag: "🇰🇪", carrier: "Safaricom",      plan: "bundle",    number: false, price: "€13", region: "Africa" },
  { name: "South Africa", flag: "🇿🇦", carrier: "MTN",            plan: "bundle",    number: false, price: "€14", region: "Africa" },
  { name: "India",        flag: "🇮🇳", carrier: "Airtel",         plan: "bundle",    number: false, price: "€11", region: "Asia"   },
  { name: "Sri Lanka",    flag: "🇱🇰", carrier: "Dialog",         plan: "bundle",    number: false, price: "€10", region: "Asia"   },
  { name: "Philippines",  flag: "🇵🇭", carrier: "Globe",          plan: "bundle",    number: false, price: "€12", region: "Asia"   },
  { name: "Australia",    flag: "🇦🇺", carrier: "Telstra",        plan: "unlimited", number: true,  price: "€27", region: "Oceania" },
  { name: "New Zealand",  flag: "🇳🇿", carrier: "Spark",          plan: "unlimited", number: true,  price: "€27", region: "Oceania" },
];

// ============================================================
// HEADER
// ============================================================
const Header = () => (
  <section style={{ background: "#FAF6EE", padding: "64px 56px 32px",
    borderBottom: "2px solid #0E0E14", position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", right: -120, top: -100,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 700, lineHeight: 1, color: "#2E5BFF",
      opacity: 0.06, pointerEvents: "none", userSelect: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <Sticker color="yellow" rotate={-3}>200+ COUNTRIES, ONE eSIM</Sticker>
        <Mono>// DESTINATIONS</Mono>
      </div>
      <h1 style={{
        fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 124, letterSpacing: "-0.05em", lineHeight: 0.85,
        margin: 0, textWrap: "balance", maxWidth: 1100,
      }}>
        Where can we send you<br/>
        <span style={{ color: "#2E5BFF" }}>on the internet?</span>
      </h1>
      <p style={{ fontSize: 21, lineHeight: 1.5, margin: 0, maxWidth: 760 }}>
        Every country we cover, with the carrier behind it and the plan we offer there.
        Local eSIMs in <strong>40+ countries</strong> · honest bundles everywhere else.
        Filter by region, search by name.
      </p>
      <div style={{ marginTop: 8 }}>
        <SearchBox placeholder="Jump to a country…" />
      </div>
    </div>
  </section>
);

// ============================================================
// FILTER + TABLE
// ============================================================
const Filters = ({ region, setRegion, plan, setPlan, count }) => {
  const Chip = ({ active, onClick, children }) => (
    <button onClick={onClick} style={{
      background: active ? "#0E0E14" : "transparent",
      color: active ? "#FAF6EE" : "#0E0E14",
      border: "2px solid #0E0E14", borderRadius: 999,
      padding: "8px 16px", cursor: "pointer",
      fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 14,
      letterSpacing: "0.04em", textTransform: "uppercase",
    }}>{children}</button>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <Mono>// REGION:</Mono>
        {["All","Europe","Asia","Americas","Africa","Oceania"].map(r =>
          <Chip key={r} active={region === r} onClick={() => setRegion(r)}>{r}</Chip>)}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Mono>// PLAN:</Mono>
        {[
          { v: "all",       l: "All" },
          { v: "unlimited", l: "Unlimited ∞" },
          { v: "bundle",    l: "Bundles" },
          { v: "number",    l: "With number" },
        ].map(p =>
          <Chip key={p.v} active={plan === p.v} onClick={() => setPlan(p.v)}>{p.l}</Chip>)}
      </div>
      <Mono color="#2E5BFF" op={1}>{count} matches</Mono>
    </div>
  );
};

const CountryCard = ({ c }) => {
  const [hover, setHover] = useStateDest(false);
  return (
    <a href={c.href || "#"}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff", color: "#0E0E14",
        border: "2px solid #0E0E14", borderRadius: 22,
        padding: 18, textDecoration: "none",
        boxShadow: hover ? "6px 6px 0 #0E0E14" : "3px 3px 0 #0E0E14",
        transform: hover ? "translate(-2px,-2px)" : "none",
        transition: "transform 0.1s ease, box-shadow 0.1s ease",
        display: "flex", flexDirection: "column", gap: 12,
        cursor: "pointer", position: "relative",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 36, lineHeight: 1 }}>{c.flag}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
            fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{c.name}</div>
          <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 11,
            letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {c.carrier}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {c.plan === "unlimited" ? (
          <span style={{
            background: "#2E5BFF", color: "#FAF6EE",
            border: "1.5px solid #0E0E14", borderRadius: 999,
            padding: "3px 10px", fontFamily: "var(--nlo-font-display)",
            fontWeight: 700, fontSize: 11, letterSpacing: "0.06em",
          }}>UNLIMITED ∞</span>
        ) : (
          <span style={{
            background: "#FFD23F", color: "#0E0E14",
            border: "1.5px solid #0E0E14", borderRadius: 999,
            padding: "3px 10px", fontFamily: "var(--nlo-font-display)",
            fontWeight: 700, fontSize: 11, letterSpacing: "0.06em",
          }}>BUNDLE</span>
        )}
        {c.number && (
          <span style={{
            background: "#7BE0B5", color: "#0E0E14",
            border: "1.5px solid #0E0E14", borderRadius: 999,
            padding: "3px 10px", fontFamily: "var(--nlo-font-display)",
            fontWeight: 700, fontSize: 11, letterSpacing: "0.06em",
          }}>+ NUMBER</span>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline",
        borderTop: "1.5px dashed rgba(14,14,20,0.18)", paddingTop: 10, marginTop: "auto" }}>
        <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 26, letterSpacing: "-0.02em" }}>{c.price}<span style={{ fontSize: 14, opacity: 0.6 }}> / {c.unit || "wk"}</span></span>
        <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700, fontSize: 14,
          color: "#2E5BFF", textDecoration: "underline", textUnderlineOffset: 3 }}>View →</span>
      </div>
    </a>
  );
};

const CountryGrid = () => {
  const [region, setRegion] = useStateDest("All");
  const [plan, setPlan] = useStateDest("all");

  const filtered = ALL_COUNTRIES.filter(c => {
    if (region !== "All" && c.region !== region) return false;
    if (plan === "unlimited" && c.plan !== "unlimited") return false;
    if (plan === "bundle"    && c.plan !== "bundle")    return false;
    if (plan === "number"    && !c.number)              return false;
    return true;
  });

  return (
    <section style={{ background: "#F2EBDC", padding: "64px 56px", borderBottom: "2px solid #0E0E14" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Filters region={region} setRegion={setRegion} plan={plan} setPlan={setPlan} count={filtered.length} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {filtered.map(c => <CountryCard key={c.name} c={c} />)}
        </div>

        {/* Legend */}
        <div style={{
          marginTop: 40, display: "flex", gap: 18, alignItems: "center",
          flexWrap: "wrap", padding: "18px 22px",
          background: "#fff", border: "2px solid #0E0E14", borderRadius: 18,
          boxShadow: "3px 3px 0 #0E0E14",
        }}>
          <Mono>// LEGEND</Mono>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}>
            <span style={{ background: "#2E5BFF", color: "#FAF6EE", border: "1.5px solid #0E0E14",
              borderRadius: 999, padding: "2px 8px", fontFamily: "var(--nlo-font-display)",
              fontWeight: 700, fontSize: 10, letterSpacing: "0.06em" }}>UNLIMITED ∞</span>
            Local eSIM, no throttle.
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}>
            <span style={{ background: "#FFD23F", color: "#0E0E14", border: "1.5px solid #0E0E14",
              borderRadius: 999, padding: "2px 8px", fontFamily: "var(--nlo-font-display)",
              fontWeight: 700, fontSize: 10, letterSpacing: "0.06em" }}>BUNDLE</span>
            Fixed quota at full carrier speed.
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}>
            <span style={{ background: "#7BE0B5", color: "#0E0E14", border: "1.5px solid #0E0E14",
              borderRadius: 999, padding: "2px 8px", fontFamily: "var(--nlo-font-display)",
              fontWeight: 700, fontSize: 10, letterSpacing: "0.06em" }}>+ NUMBER</span>
            Comes with a real local phone number.
          </span>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// MISSING COUNTRY
// ============================================================
const MissingCountry = () => (
  <section style={{ background: "#FAF6EE", padding: "100px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <Mono>// CAN'T FIND IT?</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 72, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: "12px 0 16px", textWrap: "balance",
        }}>
          Missing a country?<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>Tell us where you're going.</span>
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 580 }}>
          We add new carriers every month — and the order is roughly: wherever
          our customers keep asking. Drop us the country and a date, we'll let
          you know what we can do.
        </p>
      </div>
      <div style={{
        background: "#0E0E14", color: "#FAF6EE",
        border: "3px solid #0E0E14", borderRadius: 28,
        boxShadow: "8px 8px 0 #0E0E14",
        padding: 28, display: "flex", flexDirection: "column", gap: 14,
      }}>
        <Mono color="#FFD23F">// REQUEST A COUNTRY</Mono>
        <input placeholder="Country (e.g. Nepal)"
          style={{ background: "transparent", border: "2px solid rgba(250,246,238,0.4)",
            borderRadius: 14, padding: "12px 16px", color: "#FAF6EE",
            fontFamily: "var(--nlo-font-body)", fontSize: 16, outline: "none" }} />
        <input placeholder="When are you going?"
          style={{ background: "transparent", border: "2px solid rgba(250,246,238,0.4)",
            borderRadius: 14, padding: "12px 16px", color: "#FAF6EE",
            fontFamily: "var(--nlo-font-body)", fontSize: 16, outline: "none" }} />
        <input placeholder="Your email"
          style={{ background: "transparent", border: "2px solid rgba(250,246,238,0.4)",
            borderRadius: 14, padding: "12px 16px", color: "#FAF6EE",
            fontFamily: "var(--nlo-font-body)", fontSize: 16, outline: "none" }} />
        <Btn color="yellow" size="md" style={{ marginTop: 4 }}>Send the request →</Btn>
      </div>
    </div>
  </section>
);

const Page = () => (
  <div style={{ background: "#FAF6EE" }}>
    <Nav />
    <Header />
    <CountryGrid />
    <MissingCountry />
    <CTA />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
