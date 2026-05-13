import { getAllCountries, seedIfEmpty } from "@/lib/db";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Sticker, Btn, Mono, FlagDot } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";

export const dynamic = "force-dynamic";

export default function WhyUsPage() {
  seedIfEmpty();
  const countries = getAllCountries();

  return (
    <div style={{ background: C.cream }}>
      <Nav />

      {/* Hero */}
      <section
        className="section-pad"
        style={{
          background: C.cream,
          paddingTop: "80px",
          paddingBottom: "80px",
          borderBottom: border.base,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -140,
            top: -100,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: 880,
            lineHeight: 1,
            color: C.blue,
            opacity: 0.07,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          ∞
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Sticker color="coral" rotate={-3}>
              WE DON&apos;T DO FAKE UNLIMITED
            </Sticker>
            <Mono>// WHY US</Mono>
          </div>
          <h1
            style={{
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: "clamp(56px, 9vw, 148px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.84,
              margin: 0,
              maxWidth: 1180,
            }}
          >
            We started this because
            <br />
            <span style={{ color: C.blue }}>every other eSIM</span>
            <br />
            was lying to us.
          </h1>
          <p style={{ fontSize: 23, lineHeight: 1.5, margin: 0, maxWidth: 880 }}>
            &quot;Unlimited&quot; that throttled at 25 GB. &quot;5G&quot; that turned out to be
            roaming on 3G. &quot;Local&quot; that meant a sticker on the website. We got tired
            of it, so we built the eSIM we wished we&apos;d had on the last trip.
          </p>
        </div>
      </section>

      {/* Story 1 — The Problem */}
      <section className="section-pad" style={{ background: C.cream2, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
        <div
          className="grid-2-col"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <div>
            <Mono>// THE PROBLEM</Mono>
            <h2
              style={{
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: "clamp(40px, 5vw, 80px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                margin: "14px 0 24px",
              }}
            >
              Every &quot;unlimited&quot; plan
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>
                has an asterisk.
              </span>
            </h2>
            <div style={{ fontSize: 19, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ margin: 0 }}>
                The big eSIM providers all do the same trick. They sell &quot;unlimited&quot;, and buried
                in the terms is the real number: <strong>25 GB</strong>. Hit that and your speed drops to{" "}
                <strong>384 kbps</strong> — fine for text messages, useless for the maps you actually need.
              </p>
              <p style={{ margin: 0 }}>
                Worse, the network underneath is rarely the country you&apos;re in. It&apos;s a roaming
                partner — sometimes three countries away — selected because they were cheapest.
              </p>
              <p style={{ margin: 0 }}>
                We sat in a cafe in Lisbon paying €40 for an &quot;unlimited&quot; SIM that wouldn&apos;t
                even load Google Maps. That was the moment.
              </p>
            </div>
          </div>

          <div
            style={{
              background: C.ink,
              color: C.cream,
              border: border.thick,
              borderRadius: 32,
              boxShadow: shadow.lg,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Mono color={C.coral}>// WHAT &quot;UNLIMITED&quot; ACTUALLY MEANS</Mono>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { brand: "Big eSIM Co. A", real: "25 GB then 384 kbps", note: "Throttled in fine print, section 4.2", us: false },
                { brand: "Big eSIM Co. B", real: "20 GB then 256 kbps", note: '"Fair use policy" — unspecified', us: false },
                { brand: "Big eSIM Co. C", real: '30 GB then "variable"', note: "Throttle level not disclosed", us: false },
                { brand: "NoLimits∞nline", real: "Unlimited. No throttle.", note: "We wrote it into the terms", us: true },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 16px",
                    borderRadius: 16,
                    background: r.us ? C.mint : "rgba(250,246,238,0.06)",
                    color: r.us ? C.ink : C.cream,
                    border: r.us ? `2px solid ${C.ink}` : "1px solid rgba(250,246,238,0.18)",
                    gap: 12,
                  }}
                >
                  <div>
                    <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em" }}>
                      {r.brand}
                    </div>
                    <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.08em", opacity: 0.75, marginTop: 2 }}>
                      {r.note}
                    </div>
                  </div>
                  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 16, letterSpacing: "-0.01em", textAlign: "right" }}>
                    {r.real}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story 2 — The Fix */}
      <section
        className="section-pad"
        style={{
          background: C.cream,
          paddingTop: "120px",
          paddingBottom: "120px",
          borderBottom: border.base,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: -140,
            bottom: -180,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: 720,
            lineHeight: 1,
            color: C.yellow,
            opacity: 0.4,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ∞
        </div>
        <div
          className="grid-2-col"
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: C.blue,
              color: C.cream,
              border: border.thick,
              borderRadius: 32,
              boxShadow: shadow.lg,
              padding: 32,
            }}
          >
            <Mono color={C.yellow}>// LOCAL VS ROAMING</Mono>
            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 48, letterSpacing: "-0.035em", lineHeight: 0.9 }}>
                  Local profile
                </div>
                <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.92, marginTop: 8 }}>
                  Your phone sits on the country&apos;s actual network — same towers, same speeds, same
                  coverage as the locals. Often comes with a real local phone number.
                </div>
              </div>
              <div style={{ borderTop: "1px dashed rgba(250,246,238,0.3)" }} />
              <div>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 48, letterSpacing: "-0.035em", lineHeight: 0.9, color: C.coral }}>
                  Roaming
                </div>
                <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.92, marginTop: 8 }}>
                  Your traffic detours through another country&apos;s gateway before reaching the internet.
                  Speeds are throttled, 5G is rare, no local number.
                </div>
              </div>
            </div>
          </div>

          <div>
            <Mono>// THE FIX</Mono>
            <h2
              style={{
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: "clamp(40px, 5vw, 80px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                margin: "14px 0 24px",
              }}
            >
              We go negotiate
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>local deals.</span>
              <br />
              One carrier at a time.
            </h2>
            <div style={{ fontSize: 19, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ margin: 0 }}>
                It&apos;s slower than just reselling someone else&apos;s roaming agreement — which is why
                almost nobody does it. We walk into Odido in The Hague, SoftBank in Tokyo, AIS in Bangkok,
                and we hammer out a deal that gives travellers a real local profile.
              </p>
              <p style={{ margin: 0 }}>
                <strong>40+ countries</strong> now have it. The rest get bundles on the best roaming partner
                we can find — and we&apos;re honest about which is which.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story 3 — Amsterdam */}
      <section
        className="section-pad"
        style={{
          background: C.yellow,
          paddingTop: "120px",
          paddingBottom: "120px",
          borderBottom: border.base,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -100,
            top: -140,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: 700,
            lineHeight: 1,
            color: C.ink,
            opacity: 0.06,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ∞
        </div>
        <div
          className="grid-2-col"
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <Sticker color="blue" rotate={-2} size="md">
                PROUD EUROPEAN COMPANY
              </Sticker>
              <Mono>// AMSTERDAM · NL</Mono>
            </div>
            <h2
              style={{
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: "clamp(48px, 5.5vw, 92px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                margin: "20px 0 24px",
              }}
            >
              Built in Amsterdam.
              <br />
              Honest by{" "}
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>habit.</span>
            </h2>
            <div style={{ fontSize: 19, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 16, maxWidth: 620 }}>
              <p style={{ margin: 0 }}>
                We&apos;re a small Dutch team, and the Dutch have a habit you&apos;ve probably noticed:
                we say what we mean. Sometimes a little too directly.
              </p>
              <p style={{ margin: 0 }}>
                So our &quot;unlimited&quot; really is unlimited. Our prices are the prices. Our coverage
                list says &quot;yes&quot; or &quot;no&quot;, not &quot;yes, but&quot;.
              </p>
              <p style={{ margin: 0 }}>
                That&apos;s not a tagline — it&apos;s just how we&apos;d want to be sold to ourselves. And
                it&apos;s how we&apos;d want to be sold to our parents, who are exactly the kind of people
                who deserve internet on holiday without a 30-minute terms-and-conditions stare-down at the airport.
              </p>
            </div>
            <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FlagDot c="#AE1C28" /><FlagDot c="#FFFFFF" /><FlagDot c="#21468B" />
                <Mono>NEDERLANDS BEDRIJF</Mono>
              </div>
              <div style={{ width: 1, height: 22, background: C.ink, opacity: 0.2 }} />
              <Mono>GDPR · EU DATA · NO RESALE</Mono>
            </div>
          </div>

          <div
            style={{
              background: C.cream,
              color: C.ink,
              border: border.thick,
              borderRadius: 32,
              boxShadow: shadow.lg,
              padding: 36,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ position: "absolute", top: -18, left: 28 }}>
              <Sticker color="ink" rotate={-5} size="sm">THE DUTCH BIT</Sticker>
            </div>
            <Mono>// HOUSE RULES</Mono>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { k: "01", t: "If we say unlimited, no throttle. Period." },
                { k: "02", t: "The price on the homepage is the price you pay." },
                { k: "03", t: "Local network where we can get one. Roaming as a last resort." },
                { k: "04", t: "Your data stays in the EU. We don't resell it." },
                { k: "05", t: "If we can't beat your home plan, the country page will say so." },
                { k: "06", t: "24/7 humans on WhatsApp. No bots dressed as people." },
              ].map((r) => (
                <li key={r.k} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: C.blue, lineHeight: 1.3, minWidth: 36 }}>
                    {r.k}
                  </span>
                  <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", lineHeight: 1.3 }}>
                    {r.t}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: `2px dashed ${C.ink}`, paddingTop: 14, marginTop: 4, fontStyle: "italic", fontFamily: F.display, fontWeight: 500, fontSize: 18, lineHeight: 1.4 }}>
              &quot;Doe maar gewoon, dan doe je al gek genoeg.&quot;
              <div style={{ fontStyle: "normal", fontFamily: F.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginTop: 6 }}>
                — dutch proverb. just act normal, that&apos;s plenty.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="section-pad" style={{ background: C.ink, color: C.cream, paddingTop: "80px", paddingBottom: "80px", borderBottom: border.base }}>
        <div
          className="grid-4-col"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {[
            { n: "200+", l: "countries covered", color: C.yellow },
            { n: "40+", l: "with local eSIM profile", color: C.yellow },
            { n: "0", l: 'asterisks on "unlimited"', color: C.coral },
            { n: "24/7", l: "humans on WhatsApp", color: C.mint },
          ].map((s, i) => (
            <div key={i} style={{ borderRight: i === 3 ? "none" : "1px solid rgba(250,246,238,0.18)", paddingRight: 24 }}>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 88, letterSpacing: "-0.045em", lineHeight: 0.85, color: s.color }}>
                {s.n}
              </div>
              <Mono color={C.cream} opacity={0.75}>{s.l}</Mono>
            </div>
          ))}
        </div>
      </section>

      {/* Final promise */}
      <section className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base, position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: 900,
            lineHeight: 1,
            color: C.blue,
            opacity: 0.05,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.06em",
          }}
        >
          ∞
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: 1100,
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <Sticker color="coral" rotate={-3} size="lg">THE PROMISE</Sticker>
          <h2
            style={{
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: "clamp(56px, 7vw, 116px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              margin: 0,
            }}
          >
            Unlimited means
            <br />
            <span style={{ color: C.blue }}>unlimited.</span>
          </h2>
          <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 720 }}>
            If we ever throttle a plan we sold as unlimited, you get your money back.
            Full stop. We&apos;ve written it into the terms — feel free to read them. They&apos;re short.
          </p>
          <div style={{ display: "flex", gap: 20, alignItems: "center", marginTop: 8 }}>
            <Btn color="ink" size="lg" href="/destinations">
              Browse destinations →
            </Btn>
            <a
              href="/how-it-works"
              style={{
                fontFamily: F.display,
                fontWeight: 700,
                fontSize: 19,
                textDecoration: "underline",
                textDecorationThickness: 2,
                textUnderlineOffset: 5,
                color: C.ink,
              }}
            >
              or see how it works →
            </a>
          </div>
        </div>
      </section>

      <CTA countries={countries} />
      <Footer />
    </div>
  );
}
