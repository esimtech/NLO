// NoLimits∞nline — Why us page
// Full brand story · house rules · local vs roaming · Dutch directness

const { Wordmark, Sticker, Btn, Mono, FlagDot, Nav, SearchBox, CTA, Footer } = window;

// ============================================================
// HERO
// ============================================================
const WhyHero = () => (
  <section style={{ background: "#FAF6EE", padding: "80px 56px 80px",
    borderBottom: "2px solid #0E0E14", position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", right: -140, top: -100,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 880, lineHeight: 1, color: "#2E5BFF",
      opacity: 0.07, pointerEvents: "none", userSelect: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <Sticker color="coral" rotate={-3}>WE DON'T DO FAKE UNLIMITED</Sticker>
        <Mono>// WHY US</Mono>
      </div>
      <h1 style={{
        fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 148, letterSpacing: "-0.05em", lineHeight: 0.84,
        margin: 0, textWrap: "balance", maxWidth: 1180,
      }}>
        We started this because<br/>
        <span style={{ color: "#2E5BFF" }}>every other eSIM</span><br/>
        was lying to us.
      </h1>
      <p style={{ fontSize: 23, lineHeight: 1.5, margin: 0, maxWidth: 880 }}>
        "Unlimited" that throttled at 25 GB. "5G" that turned out to be roaming on 3G.
        "Local" that meant a sticker on the website. We got tired of it, so we built the eSIM
        we wished we'd had on the last trip. Then a second one. Then 200+.
      </p>
    </div>
  </section>
);

// ============================================================
// STORY — three big blocks
// ============================================================

const StoryBlock = ({ tag, title, body, side, color = "#fff" }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "1fr 1fr",
    gap: 56, alignItems: "center",
    background: color, color: "#0E0E14",
    padding: "100px 56px", borderBottom: "2px solid #0E0E14",
    position: "relative",
  }}>
    <div style={{ order: side === "right" ? 2 : 1, position: "relative", zIndex: 1 }}>
      <Mono>// {tag}</Mono>
      <h2 style={{
        fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 84, letterSpacing: "-0.04em", lineHeight: 0.9,
        margin: "14px 0 24px", textWrap: "balance",
      }}>{title}</h2>
      <div style={{ fontSize: 19, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 16 }}>
        {body}
      </div>
    </div>
    <div style={{ order: side === "right" ? 1 : 2, display: "flex", justifyContent: "center" }}>
    </div>
  </div>
);

const StoryOne = () => (
  <section style={{ background: "#F2EBDC", padding: "120px 56px", borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <Mono>// THE PROBLEM</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: "14px 0 24px", textWrap: "balance",
        }}>
          Every "unlimited" plan<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>has an asterisk.</span>
        </h2>
        <div style={{ fontSize: 19, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ margin: 0 }}>
            The big eSIM providers all do the same trick. They sell "unlimited", and
            buried in the terms is the real number: <strong>25 GB</strong>. Hit that and your
            speed drops to <strong>384 kbps</strong> — fine for text messages, useless
            for the maps you actually need.
          </p>
          <p style={{ margin: 0 }}>
            Worse, the network underneath is rarely the country you're in. It's
            a roaming partner — sometimes three countries away — selected because
            they were cheapest. So your "5G in Tokyo" is actually 3G being relayed
            through a Hong Kong gateway, which is why nothing loads.
          </p>
          <p style={{ margin: 0 }}>
            We sat in a cafe in Lisbon paying €40 for an "unlimited" SIM that
            wouldn't even load Google Maps. That was the moment.
          </p>
        </div>
      </div>

      <div style={{
        background: "#0E0E14", color: "#FAF6EE",
        border: "3px solid #0E0E14", borderRadius: 32,
        boxShadow: "8px 8px 0 #0E0E14", padding: 32,
        position: "relative", overflow: "hidden",
      }}>
        <Mono color="#FF6B6B">// WHAT "UNLIMITED" ACTUALLY MEANS</Mono>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { brand: "Big eSIM Co. A", real: "25 GB then 384 kbps", note: "Throttled in fine print, section 4.2" },
            { brand: "Big eSIM Co. B", real: "20 GB then 256 kbps", note: "\"Fair use policy\" — unspecified" },
            { brand: "Big eSIM Co. C", real: "30 GB then \"variable\"", note: "Throttle level not disclosed" },
            { brand: "NoLimits∞nline", real: "Unlimited. No throttle.",  note: "We wrote it into the terms", us: true },
          ].map((r, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "14px 16px", borderRadius: 16,
              background: r.us ? "#7BE0B5" : "rgba(250,246,238,0.06)",
              color: r.us ? "#0E0E14" : "#FAF6EE",
              border: r.us ? "2px solid #0E0E14" : "1px solid rgba(250,246,238,0.18)",
              gap: 12,
            }}>
              <div>
                <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                  fontSize: 17, letterSpacing: "-0.01em" }}>{r.brand}</div>
                <div style={{ fontFamily: "var(--nlo-font-mono)", fontSize: 11,
                  letterSpacing: "0.08em", opacity: 0.75, marginTop: 2 }}>{r.note}</div>
              </div>
              <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 16, letterSpacing: "-0.01em", textAlign: "right" }}>
                {r.real}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const StoryTwo = () => (
  <section style={{ background: "#FAF6EE", padding: "120px 56px", borderBottom: "2px solid #0E0E14",
    position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", left: -140, bottom: -180,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 720, lineHeight: 1, color: "#FFD23F",
      opacity: 0.4, userSelect: "none", pointerEvents: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>

      <div style={{
        background: "#2E5BFF", color: "#FAF6EE",
        border: "3px solid #0E0E14", borderRadius: 32,
        boxShadow: "8px 8px 0 #0E0E14", padding: 32,
      }}>
        <Mono color="#FFD23F">// LOCAL VS ROAMING</Mono>
        <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
              fontSize: 48, letterSpacing: "-0.035em", lineHeight: 0.9 }}>
              Local profile
            </div>
            <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.92, marginTop: 8 }}>
              Your phone sits on the country's actual network — same towers,
              same speeds, same coverage as the locals. Often comes with a real
              local phone number for calls, SMS, and 2FA.
            </div>
          </div>
          <div style={{ borderTop: "1px dashed rgba(250,246,238,0.3)" }} />
          <div>
            <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
              fontSize: 48, letterSpacing: "-0.035em", lineHeight: 0.9, color: "#FF6B6B" }}>
              Roaming
            </div>
            <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.92, marginTop: 8 }}>
              Your traffic detours through another country's gateway before reaching
              the internet. Speeds are throttled by agreement, 5G is rare, and you
              definitely don't get a local number.
            </div>
          </div>
        </div>
      </div>

      <div>
        <Mono>// THE FIX</Mono>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: "14px 0 24px", textWrap: "balance",
        }}>
          We go negotiate<br/>
          <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>local deals.</span><br/>
          One carrier at a time.
        </h2>
        <div style={{ fontSize: 19, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ margin: 0 }}>
            It's slower than just reselling someone else's roaming agreement —
            which is why almost nobody does it. We walk into Odido in The Hague,
            SoftBank in Tokyo, AIS in Bangkok, and we hammer out a deal that gives
            travellers a real local profile.
          </p>
          <p style={{ margin: 0 }}>
            <strong>40+ countries</strong> now have it. The rest get bundles on the best
            roaming partner we can find — and we're honest about which is which.
          </p>
          <p style={{ margin: 0 }}>
            If we can't beat your home plan in a country, the country page will say so.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const StoryThree = () => (
  <section style={{ background: "#FFD23F", padding: "120px 56px", borderBottom: "2px solid #0E0E14",
    position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", right: -100, top: -140,
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 700, lineHeight: 1, color: "#0E0E14",
      opacity: 0.06, userSelect: "none", pointerEvents: "none",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>

      <div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <Sticker color="blue" rotate={-2} size="md">PROUD EUROPEAN COMPANY</Sticker>
          <Mono>// AMSTERDAM · NL</Mono>
        </div>
        <h2 style={{
          fontFamily: "var(--nlo-font-display)", fontWeight: 800,
          fontSize: 92, letterSpacing: "-0.04em", lineHeight: 0.9,
          margin: "20px 0 24px", textWrap: "balance",
        }}>
          Built in Amsterdam.<br/>
          Honest by <span style={{ fontStyle: "italic", fontWeight: 500, color: "#2E5BFF" }}>habit.</span>
        </h2>
        <div style={{ fontSize: 19, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 16, maxWidth: 620 }}>
          <p style={{ margin: 0 }}>
            We're a small Dutch team, and the Dutch have a habit you've probably noticed:
            we say what we mean. Sometimes a little too directly. It makes us terrible at
            marketing fluff — and pretty good at building a product that doesn't need any.
          </p>
          <p style={{ margin: 0 }}>
            So our "unlimited" really is unlimited. Our prices are the prices. Our coverage
            list says "yes" or "no", not "yes, but". If we can't do something well, we
            don't sell it.
          </p>
          <p style={{ margin: 0 }}>
            That's not a tagline — it's just how we'd want to be sold to ourselves.
            And it's how we'd want to be sold to our parents, who are exactly the kind
            of people who deserve internet on holiday without a 30-minute terms-and-conditions
            stare-down at the airport.
          </p>
        </div>
        <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FlagDot c="#AE1C28" /><FlagDot c="#FFFFFF" /><FlagDot c="#21468B" />
            <Mono>NEDERLANDS BEDRIJF</Mono>
          </div>
          <div style={{ width: 1, height: 22, background: "#0E0E14", opacity: 0.2 }} />
          <Mono>GDPR · EU DATA · NO RESALE</Mono>
        </div>
      </div>

      <div style={{
        background: "#FAF6EE", color: "#0E0E14",
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
          display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { k: "01", t: "If we say unlimited, no throttle. Period." },
            { k: "02", t: "The price on the homepage is the price you pay." },
            { k: "03", t: "Local network where we can get one. Roaming as a last resort." },
            { k: "04", t: "Your data stays in the EU. We don't resell it." },
            { k: "05", t: "If we can't beat your home plan, the country page will say so." },
            { k: "06", t: "24/7 humans on WhatsApp. No bots dressed as people." },
          ].map((r) => (
            <li key={r.k} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span style={{
                fontFamily: "var(--nlo-font-display)", fontWeight: 800,
                fontSize: 22, letterSpacing: "-0.02em", color: "#2E5BFF",
                lineHeight: 1.3, minWidth: 36,
              }}>{r.k}</span>
              <span style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 700,
                fontSize: 19, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{r.t}</span>
            </li>
          ))}
        </ul>

        <div style={{ borderTop: "2px dashed #0E0E14", paddingTop: 14, marginTop: 4,
          fontStyle: "italic", fontFamily: "var(--nlo-font-display)", fontWeight: 500,
          fontSize: 18, lineHeight: 1.4 }}>
          "Doe maar gewoon, dan doe je al gek genoeg."
          <div style={{ fontStyle: "normal", fontFamily: "var(--nlo-font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginTop: 6 }}>
            — dutch proverb. just act normal, that's plenty.
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================
// NUMBERS STRIP
// ============================================================
const NumbersStrip = () => (
  <section style={{ background: "#0E0E14", color: "#FAF6EE", padding: "80px 56px",
    borderBottom: "2px solid #0E0E14" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto",
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
      {[
        { n: "200+",  l: "countries covered" },
        { n: "40+",   l: "with local eSIM profile" },
        { n: "0",     l: "asterisks on \"unlimited\"" },
        { n: "24/7",  l: "humans on WhatsApp" },
      ].map((s, i) => (
        <div key={i} style={{ borderRight: i === 3 ? "none" : "1px solid rgba(250,246,238,0.18)",
          paddingRight: 24 }}>
          <div style={{ fontFamily: "var(--nlo-font-display)", fontWeight: 800,
            fontSize: 88, letterSpacing: "-0.045em", lineHeight: 0.85,
            color: i === 2 ? "#FF6B6B" : i === 3 ? "#7BE0B5" : "#FFD23F" }}>{s.n}</div>
          <Mono color="#FAF6EE" op={0.75}>{s.l}</Mono>
        </div>
      ))}
    </div>
  </section>
);

// ============================================================
// PROMISE
// ============================================================
const FinalPromise = () => (
  <section style={{ background: "#FAF6EE", padding: "120px 56px", borderBottom: "2px solid #0E0E14",
    position: "relative", overflow: "hidden" }}>
    <div aria-hidden style={{
      position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
      fontFamily: "var(--nlo-font-display)", fontWeight: 800,
      fontSize: 900, lineHeight: 1, color: "#2E5BFF",
      opacity: 0.05, userSelect: "none", pointerEvents: "none",
      letterSpacing: "-0.06em",
    }}>∞</div>

    <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", textAlign: "center",
      display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <Sticker color="coral" rotate={-3} size="lg">THE PROMISE</Sticker>
      <h2 style={{
        fontFamily: "var(--nlo-font-display)", fontWeight: 800,
        fontSize: 116, letterSpacing: "-0.05em", lineHeight: 0.85,
        margin: 0, textWrap: "balance",
      }}>
        Unlimited means<br/>
        <span style={{ color: "#2E5BFF" }}>unlimited.</span>
      </h2>
      <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 720 }}>
        If we ever throttle a plan we sold as unlimited, you get your money back.
        Full stop. We've written it into the terms — feel free to read them.
        They're short.
      </p>
      <div style={{ display: "flex", gap: 20, alignItems: "center", marginTop: 8 }}>
        <Btn color="ink" size="lg" href="Destinations.html">Browse destinations →</Btn>
        <a href="How-it-works.html" style={{ fontFamily:"var(--nlo-font-display)", fontWeight:700, fontSize: 19,
          textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 5,
          cursor: "pointer", color: "#0E0E14" }}>or see how it works →</a>
      </div>
    </div>
  </section>
);

const Page = () => (
  <div style={{ background: "#FAF6EE" }}>
    <Nav />
    <WhyHero />
    <StoryOne />
    <StoryTwo />
    <StoryThree />
    <NumbersStrip />
    <FinalPromise />
    <CTA />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
