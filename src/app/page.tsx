import { getAllCountries, getBundlesByCountry, seedIfEmpty } from "@/lib/db";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SearchBox from "@/components/SearchBox";
import { Sticker, Btn, Mono, FlagDot } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";

export const dynamic = "force-dynamic";

export default function HomePage() {
  seedIfEmpty();
  const countries = getAllCountries();

  const destinations = countries.map((c) => {
    const bundles = getBundlesByCountry(c.id);
    const firstBundle = bundles[0];
    return {
      name: c.name,
      flag: c.flag,
      note: c.carrier_note,
      plan: c.plan_type as "unlimited" | "bundle",
      price: firstBundle ? firstBundle.price : "",
      slug: c.slug,
    };
  });

  const cities = [
    { name: "AMSTERDAM", tone: C.yellow, slug: "netherlands" },
    { name: "LISBON", tone: C.coral },
    { name: "ISTANBUL", tone: C.mint, slug: "turkey" },
    { name: "TOKYO", tone: C.lilac },
    { name: "BALI", tone: C.yellow },
    { name: "BANGKOK", tone: C.mint, slug: "thailand" },
  ];

  return (
    <div style={{ background: C.cream }}>
      <Nav />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "72px 56px 0",
          overflow: "hidden",
          background: C.cream,
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0 38px, rgba(14,14,20,0.04) 38px 39px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            textAlign: "center",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Sticker color="coral" rotate={-4}>
              WE DON&apos;T DO FAKE UNLIMITED
            </Sticker>
            <Sticker color="mint" rotate={3} size="sm">
              200+ COUNTRIES
            </Sticker>
          </div>

          <h1
            style={{
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: "clamp(72px, 10vw, 144px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.84,
              margin: 0,
            }}
          >
            Pick a country.
            <br />
            <span style={{ color: C.blue }}>Get on the internet.</span>
          </h1>

          <p style={{ fontSize: 21, lineHeight: 1.45, margin: 0, maxWidth: 720 }}>
            Real <em>unlimited</em> in the countries where we can offer it.
            Honest, well-priced bundles everywhere else. Same eSIM, same QR code.
          </p>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <SearchBox placeholder="Search 200+ countries…" destinations={destinations} />
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              marginTop: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { dot: C.blue, label: "Unlimited", sub: "— really. No 25 GB cap." },
              { dot: C.yellow, label: "Bundles", sub: "— 5 GB → 100 GB, honest prices.", dotBorder: true },
            ].map((p) => (
              <div
                key={p.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#fff",
                  border: border.base,
                  borderRadius: radius.pill,
                  padding: "10px 18px",
                  boxShadow: shadow.sm,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: p.dot,
                    border: p.dotBorder ? `1.5px solid ${C.ink}` : undefined,
                  }}
                />
                <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 16 }}>
                  {p.label}
                </span>
                <span style={{ fontFamily: F.body, fontSize: 15, opacity: 0.75 }}>{p.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* City pills */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginTop: 72,
            paddingBottom: 72,
          }}
        >
          {cities.map((c, i) => (
            <a
              key={c.name}
              href={c.slug ? `/${c.slug}` : "#"}
              style={{
                transform: `rotate(${(i % 2 ? 1 : -1) * (2 + (i % 3))}deg)`,
                background: c.tone,
                color: C.ink,
                border: border.base,
                borderRadius: radius.pill,
                padding: "12px 22px",
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: 18,
                letterSpacing: "0.04em",
                boxShadow: shadow.sm,
                display: "inline-flex",
                gap: 8,
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <span style={{ color: C.blue }}>∞</span>
              {c.name}
            </a>
          ))}
        </div>

        {/* Floating stickers */}
        <div style={{ position: "absolute", left: 56, top: 220 }}>
          <Sticker color="yellow" rotate={-12} size="md">
            ✓ ESIM · 30s SETUP
          </Sticker>
        </div>
        <div style={{ position: "absolute", right: 56, top: 280 }}>
          <Sticker color="ink" rotate={9} size="md">
            NO ROAMING. EVER.
          </Sticker>
        </div>
      </section>

      {/* WHAT WE DO DIFFERENTLY */}
      <section
        style={{
          background: C.cream2,
          padding: "120px 56px",
          borderTop: border.base,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 40,
              flexWrap: "wrap",
              marginBottom: 56,
            }}
          >
            <div>
              <Mono>// WHAT WE DO DIFFERENTLY</Mono>
              <h2
                style={{
                  fontFamily: F.display,
                  fontWeight: 700,
                  fontSize: "clamp(36px, 5vw, 84px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 0.92,
                  margin: "14px 0 0",
                  maxWidth: 880,
                }}
              >
                Local eSIM where possible.
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>
                  Not roaming dressed up
                </span>{" "}
                as something else.
              </h2>
            </div>
            <Sticker color="coral" rotate={-3} size="lg">
              REAL UNLIMITED, OR NOTHING
            </Sticker>
          </div>

          <p
            style={{
              fontSize: 21,
              lineHeight: 1.5,
              maxWidth: 900,
              margin: "0 0 56px",
            }}
          >
            Most eSIM providers resell the same handful of roaming agreements — which is why their
            &quot;unlimited&quot; always has an asterisk and a throttle. We do it the slow way: a real,{" "}
            <strong>local</strong> profile on the country&apos;s actual network whenever we can negotiate one.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {[
              {
                badge: "LOCAL FIRST",
                badgeColor: "mint" as const,
                title: "On the country's own network.",
                body: "Where carriers will play ball, we ship a local profile — Odido in the Netherlands, SoftBank in Japan, AIS in Thailand. Same network the locals use, same towers, same speeds.",
                icon: "📍",
              },
              {
                badge: "NO THROTTLE",
                badgeColor: "yellow" as const,
                title: "Unlimited means unlimited.",
                body: "The big clubs' "unlimited" is 25 GB then throttled to 384 kbps — unusable for anything except text. Ours doesn't slow down. If we can't offer it honestly, we don't call it unlimited.",
                icon: "∞",
              },
              {
                badge: "40+ COUNTRIES",
                badgeColor: "coral" as const,
                title: "A real local number, often.",
                body: "Because we issue a local profile, you often get a local phone number with it — for WhatsApp signup, two-factor codes, a taxi callback, hotel check-in.",
                icon: "📞",
              },
            ].map((card) => (
              <div
                key={card.badge}
                style={{
                  background: "#fff",
                  border: border.thick,
                  borderRadius: 28,
                  padding: 32,
                  position: "relative",
                  boxShadow: shadow.md,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  minHeight: 360,
                }}
              >
                <div style={{ position: "absolute", top: -16, right: 24 }}>
                  <Sticker color={card.badgeColor} rotate={5} size="sm">
                    {card.badge}
                  </Sticker>
                </div>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    border: border.base,
                    background: C.cream,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: shadow.sm,
                    fontSize: 36,
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: F.display,
                    fontWeight: 800,
                    fontSize: 34,
                    letterSpacing: "-0.03em",
                    lineHeight: 0.95,
                    margin: 0,
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>

          {/* VS Table */}
          <div
            style={{
              background: C.ink,
              color: C.cream,
              borderRadius: 32,
              border: border.thick,
              boxShadow: shadow.lg,
              overflow: "hidden",
              marginTop: 56,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 1fr 1fr",
                padding: "20px 32px",
                alignItems: "center",
                borderBottom: "1px solid rgba(250,246,238,0.15)",
              }}
            >
              <Mono color={C.cream} opacity={0.6}>
                // SIDE-BY-SIDE
              </Mono>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    background: "#2A2A35",
                    color: C.cream,
                    border: "1.5px solid rgba(250,246,238,0.3)",
                    borderRadius: radius.pill,
                    padding: "6px 18px",
                    fontFamily: F.display,
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  The big providers
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    background: C.yellow,
                    color: C.ink,
                    border: border.base,
                    borderRadius: radius.pill,
                    padding: "6px 18px",
                    fontFamily: F.display,
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: "0.04em",
                  }}
                >
                  NoLimits∞nline
                </div>
              </div>
            </div>
            {[
              { feature: '"Unlimited" plans', them: "Throttled to 384 kbps after 25 GB", us: "Actually unlimited. No throttle." },
              { feature: "Network underneath", them: "Roaming — whichever is cheapest", us: "Local carrier, every time we can" },
              { feature: "Speed in-country", them: "Roaming speeds, often 3G fallback", us: "Full local 5G / 4G — same as locals" },
              { feature: "Local phone number", them: "Never", us: "Yes, in 40+ countries" },
              { feature: "Hidden fees", them: 'Surprise "data top-up" charges', us: "What you see is what you pay" },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.3fr 1fr 1fr",
                  padding: "22px 32px",
                  borderTop: i === 0 ? "none" : "1px solid rgba(250,246,238,0.12)",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: F.display,
                    fontWeight: 700,
                    fontSize: 19,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {r.feature}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    justifyContent: "center",
                    fontSize: 15,
                    lineHeight: 1.4,
                    opacity: 0.8,
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: "transparent",
                      border: `1.5px solid ${C.coral}`,
                      color: C.coral,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: F.display,
                      fontWeight: 800,
                      fontSize: 14,
                    }}
                  >
                    ✕
                  </span>
                  <span>{r.them}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    justifyContent: "center",
                    fontSize: 15,
                    lineHeight: 1.4,
                    textAlign: "center",
                    color: C.cream,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: C.mint,
                      color: C.ink,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: F.display,
                      fontWeight: 800,
                      fontSize: 14,
                    }}
                  >
                    ✓
                  </span>
                  <span>{r.us}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
              marginTop: 56,
            }}
          >
            <Mono>
              // IF WE CAN&apos;T BEAT YOUR HOME SIM, WE&apos;LL SAY SO ON THE PRODUCT PAGE.
            </Mono>
            <Btn color="ink" size="lg" href="/destinations">
              See the country list →
            </Btn>
          </div>
        </div>
      </section>

      {/* PROUD EUROPEAN */}
      <section
        style={{
          background: C.cream,
          padding: "120px 56px",
          borderTop: border.base,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: -120,
            bottom: -180,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: 720,
            lineHeight: 1,
            color: C.blue,
            opacity: 0.05,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ∞
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Sticker color="blue" rotate={-2} size="md">
                PROUD EUROPEAN COMPANY
              </Sticker>
              <Mono>// AMSTERDAM · NL</Mono>
            </div>

            <h2
              style={{
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: "clamp(48px, 6vw, 96px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                margin: 0,
              }}
            >
              Built in <span style={{ color: C.blue }}>Amsterdam.</span>
              <br />
              Honest by <span style={{ fontStyle: "italic", fontWeight: 500 }}>habit.</span>
            </h2>

            <p style={{ fontSize: 21, lineHeight: 1.55, margin: 0, maxWidth: 620 }}>
              We&apos;re a small Dutch team, and the Dutch have a habit you&apos;ve probably noticed:
              we say what we mean. Sometimes a little too directly. It makes us terrible at
              marketing fluff — and pretty good at building a product that doesn&apos;t need any.
            </p>

            <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 620, opacity: 0.85 }}>
              So our &quot;unlimited&quot; really is unlimited. Our prices are the prices.
              Our coverage list says &quot;yes&quot; or &quot;no&quot;, not &quot;yes, but&quot;.
            </p>

            <div
              style={{
                display: "flex",
                gap: 18,
                alignItems: "center",
                marginTop: 12,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FlagDot c="#AE1C28" />
                <FlagDot c="#FFFFFF" />
                <FlagDot c="#21468B" />
                <Mono>NEDERLANDS BEDRIJF</Mono>
              </div>
              <div style={{ width: 1, height: 22, background: C.ink, opacity: 0.2 }} />
              <Mono>GDPR · EU DATA · NO RESALE</Mono>
            </div>
          </div>

          {/* House rules card */}
          <div
            style={{
              background: C.yellow,
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
              <Sticker color="ink" rotate={-5} size="sm">
                THE DUTCH BIT
              </Sticker>
            </div>
            <Mono>// HOUSE RULES</Mono>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {[
                { k: "01", t: "If we say unlimited, no throttle. Period." },
                { k: "02", t: "The price on the homepage is the price you pay." },
                { k: "03", t: "Local network where we can get one. Roaming only as a last resort." },
                { k: "04", t: "Your data stays in the EU. We don't resell it." },
                { k: "05", t: "If we can't beat your home plan, the country page will say so." },
              ].map((r) => (
                <li key={r.k} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: F.display,
                      fontWeight: 800,
                      fontSize: 22,
                      letterSpacing: "-0.02em",
                      color: C.blue,
                      lineHeight: 1.3,
                      minWidth: 36,
                    }}
                  >
                    {r.k}
                  </span>
                  <span
                    style={{
                      fontFamily: F.display,
                      fontWeight: 700,
                      fontSize: 20,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {r.t}
                  </span>
                </li>
              ))}
            </ul>
            <div
              style={{
                borderTop: `2px dashed ${C.ink}`,
                paddingTop: 16,
                marginTop: 4,
                fontStyle: "italic",
                fontFamily: F.display,
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 1.4,
              }}
            >
              &quot;Doe maar gewoon, dan doe je al gek genoeg.&quot;
              <div
                style={{
                  fontStyle: "normal",
                  fontFamily: F.mono,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: 0.7,
                  marginTop: 6,
                }}
              >
                — dutch proverb. roughly: just act normal, that&apos;s plenty.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA countries={countries} />
      <Footer />
    </div>
  );
}
