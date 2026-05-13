"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Sticker, Btn, Mono } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";
import { useIsMobile } from "@/hooks/useIsMobile";
import type { Country, Bundle } from "@/lib/db";

interface CountryData extends Country {
  bundles: Bundle[];
  allCountries: Country[];
}

export default function CountryPage() {
  const params = useParams();
  const slug = params.country as string;
  const [data, setData] = useState<CountryData | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/country/${slug}`)
      .then((r) => {
        if (r.status === 404) { setNotFound(true); return null; }
        return r.json();
      })
      .then((d) => { if (d) setData(d); });
  }, [slug]);

  if (notFound) {
    return (
      <div style={{ background: C.cream }}>
        <Nav />
        <div style={{ padding: "120px 56px", textAlign: "center" }}>
          <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 80 }}>Country not found.</h1>
          <Btn color="ink" size="lg" href="/destinations" style={{ marginTop: 32 }}>Browse all destinations →</Btn>
        </div>
        <Footer />
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ background: C.cream }}>
        <Nav />
        <div style={{ padding: "120px 56px", textAlign: "center", fontFamily: F.mono, fontSize: 14, opacity: 0.5 }}>
          Loading…
        </div>
      </div>
    );
  }

  const { bundles, allCountries } = data;
  const isBundle = data.plan_type === "bundle";
  const hasNumber = Boolean(data.has_number);
  const singlePlan = bundles.length === 1;

  return (
    <div style={{ background: C.cream }}>
      <Nav />

      {/* Country Hero */}
      <CountryHero country={data} bundles={bundles} />

      {/* Middle sections differ by type */}
      {isBundle ? (
        <>
          <WhyNoLocal country={data} />
          <BundleGrid bundles={bundles} country={data} />
          <QualityPromise country={data} />
        </>
      ) : hasNumber ? (
        <>
          <PhoneNumberStory />
          <PlanGrid bundles={bundles} country={data} />
          <HowNumberWorks />
        </>
      ) : (
        <>
          <CarrierStory country={data} />
          <ThePlan bundles={bundles} country={data} singlePlan={singlePlan} />
          <PromiseStrip country={data} />
        </>
      )}

      <FAQSection country={data} />
      <CTA countries={allCountries} />
      <Footer />
    </div>
  );
}

// ── Country Hero ──────────────────────────────────────────────

function CountryHero({ country, bundles }: { country: Country; bundles: Bundle[] }) {
  const isBundle = country.plan_type === "bundle";
  const hasNumber = Boolean(country.has_number);
  const cardBg = isBundle ? C.yellow : hasNumber ? C.mint : C.blue;
  const cardFg = isBundle || hasNumber ? C.ink : C.cream;
  const accentInf = isBundle ? C.blue : cardFg === C.cream ? C.yellow : C.blue;
  const firstBundle = bundles[0];
  const priceFrom = firstBundle ? firstBundle.price : "";
  const isMobile = useIsMobile();

  return (
    <section className="section-pad" style={{ background: C.cream, paddingTop: "56px", paddingBottom: "80px", borderBottom: border.base, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: -120, top: -80, fontFamily: F.display, fontWeight: 800, fontSize: 880, lineHeight: 1, color: isBundle ? C.coral : hasNumber ? C.mint : C.blue, opacity: isBundle ? 0.08 : 0.12, pointerEvents: "none", userSelect: "none" }}>∞</div>

      {/* Breadcrumb */}
      <div style={{ position: "relative", display: "flex", gap: 10, alignItems: "center", marginBottom: 32, flexWrap: "wrap" }}>
        {[
          { label: "// HOME", href: "/" },
          { label: "DESTINATIONS", href: "/destinations" },
          { label: country.name.toUpperCase() },
        ].reduce<React.ReactNode[]>((acc, item, i) => {
          if (i > 0) acc.push(<span key={`sep-${i}`} style={{ opacity: 0.4 }}>→</span>);
          acc.push(
            item.href ? (
              <a key={item.label} href={item.href} style={{ color: C.ink, textDecoration: "none", fontFamily: F.mono, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.7 }}>{item.label}</a>
            ) : (
              <span key={item.label} style={{ fontFamily: F.mono, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}>{item.label}</span>
            )
          );
          return acc;
        }, [])}
      </div>

      <div className="grid-2-col" style={{ position: "relative" }}>
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            {isBundle ? (
              <>
                <Sticker color="yellow" rotate={-3} size="md">BUNDLES — HONEST ABOUT IT</Sticker>
                <Sticker color="coral" rotate={4} size="sm">
                  {bundles.map((b) => b.data_amount).join(" / ")}
                </Sticker>
              </>
            ) : hasNumber ? (
              <>
                <Sticker color="blue" rotate={-3} size="md">REAL UNLIMITED ∞</Sticker>
                <Sticker color="mint" rotate={4} size="sm">+{getDialCode(country.name)} LOCAL NUMBER</Sticker>
              </>
            ) : (
              <>
                <Sticker color="blue" rotate={-3} size="md">REAL UNLIMITED ∞</Sticker>
                <Sticker color="mint" rotate={4} size="sm">LOCAL eSIM · {country.carrier_name.toUpperCase()}</Sticker>
              </>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(64px, 9vw, 156px)", letterSpacing: "-0.05em", lineHeight: 0.85, margin: 0 }}>
              {country.name}.
            </h1>
            <div style={{ fontSize: 72, lineHeight: 1 }}>{country.flag}</div>
          </div>

          <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 660 }}>{country.hero_description}</p>

          <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
            {firstBundle && (
              <a href={firstBundle.checkout_url} target="_blank" rel="noopener noreferrer">
                <Btn color="ink" size="lg">
                  {isBundle ? `From ${priceFrom} / week →` : `Get unlimited — ${priceFrom} →`}
                </Btn>
              </a>
            )}
            <a style={{ fontFamily: F.display, fontWeight: 700, fontSize: 18, textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 5, cursor: "pointer" }} href="#plans">
              {bundles.length > 1 ? "See all plans →" : "See what's included →"}
            </a>
          </div>
        </div>

        {/* Right: at-a-glance card */}
        <div style={{ background: cardBg, color: cardFg, border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 32, position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", right: -60, bottom: -100, fontFamily: F.display, fontWeight: 800, fontSize: 380, lineHeight: 1, color: cardFg, opacity: 0.08 }}>∞</div>

          <Mono color={!isBundle && !hasNumber ? C.yellow : undefined} opacity={1}>// AT A GLANCE</Mono>
          <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 56, letterSpacing: "-0.04em", lineHeight: 0.9, margin: "12px 0 24px" }}>
            {isBundle ? "Bundles only — but the good kind." : hasNumber ? "Your local line." : `The ${country.name} plan.`}
          </div>

          {hasNumber && firstBundle && (
            <div style={{ background: C.cream, border: border.base, borderRadius: 18, padding: "20px 22px", marginBottom: 20, display: "flex", alignItems: "center", gap: 14, boxShadow: shadow.sm }}>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: C.blue, color: C.cream, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>📞</div>
              <div>
                <Mono opacity={0.7} size={11}>YOUR NUMBER · CALL / SMS / 2FA</Mono>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1, marginTop: 4, color: C.ink }}>
                  +{getDialCode(country.name)} 6 1234 5678
                </div>
              </div>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isBundle ? 14 : 16 }}>
            {(isBundle ? [
              { n: firstBundle ? firstBundle.data_amount : "100 GB", l: `Top bundle · ${firstBundle?.price || ""} / wk` },
              { n: "5G", l: "Where carrier serves it" },
              { n: bundles.length > 0 ? bundles.map(b => b.period).join(" / ") : "30 days", l: "Validity options" },
              { n: "0", l: "Hidden top-up fees" },
            ] : hasNumber ? [
              { n: "∞", l: "Data — really" },
              { n: `+${getDialCode(country.name)}`, l: "Real local number" },
              { n: "5G", l: `${country.carrier_name} · nationwide` },
              { n: bundles.length > 1 ? bundles.map(b => b.period).join(" / ") : (firstBundle?.period || "30 days"), l: "Day options" },
            ] : [
              { n: "∞", l: "Data — really" },
              { n: firstBundle?.period || "30 days", l: "Validity · always" },
              { n: "0", l: "Throttle, ever" },
              { n: "1 Gbps", l: "Top speed · 5G" },
            ]).map((s, i) => (
              <div key={i} style={{ background: "rgba(14,14,20,0.06)", border: "1.5px solid rgba(14,14,20,0.2)", borderRadius: 18, padding: "16px 18px" }}>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 36, letterSpacing: "-0.03em", lineHeight: 1, color: i === 0 ? accentInf : cardFg }}>{s.n}</div>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75, marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: isBundle ? `2px dashed ${C.ink}` : "1px solid rgba(250,246,238,0.25)", paddingTop: 16, marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Mono opacity={0.8}>// CARRIER</Mono>
            <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
              {country.carrier_name}
            </div>
          </div>
        </div>
      </div>

      {/* Floating sticker - hide on mobile */}
      {!isMobile && !isBundle && (
        <div style={{ position: "absolute", right: 80, top: 80 }}>
          <Sticker color="yellow" rotate={8} size="md">
            {hasNumber ? "CALL · TEXT · 2FA — ALL LOCAL" : "NO FAKE UNLIMITED"}
          </Sticker>
        </div>
      )}
      {!isMobile && isBundle && (
        <div style={{ position: "absolute", right: 80, top: 80 }}>
          <Sticker color="ink" rotate={8} size="md">NO FAKE UNLIMITED</Sticker>
        </div>
      )}
    </section>
  );
}

// ── Bundle-only: why no local ────────────────────────────────

function WhyNoLocal({ country }: { country: Country }) {
  if (!country.why_no_local) return null;
  return (
    <section className="section-pad" style={{ background: C.cream2, paddingTop: "100px", paddingBottom: "100px", borderBottom: border.base }}>
      <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Sticker color="coral" rotate={-3}>HONEST ABOUT IT</Sticker>
            <Mono>// THE WHY</Mono>
          </div>
          <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>
            Why we don&apos;t sell
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>&quot;unlimited&quot;</span> in {country.name}.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 580 }}>{country.why_no_local}</p>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 580, opacity: 0.85 }}>
            So we don&apos;t sell that. We sell <strong>fixed bundles</strong> on the best roaming partner
            we can negotiate with — and you know exactly what you&apos;re getting.
          </p>
        </div>

        <div style={{ background: "#fff", border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 28, position: "relative" }}>
          <div style={{ position: "absolute", top: -16, right: 24 }}>
            <Sticker color="ink" rotate={5} size="sm">QUICK CHECK</Sticker>
          </div>
          <Mono>// WHAT YOU&apos;RE BUYING IN {country.name.toUpperCase()}</Mono>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { l: `Others' "${country.name} unlimited"`, v: "Roaming · throttled to 384 kbps after 5 GB", bad: true },
              { l: "Our bundles", v: "Fixed quota, full carrier speed, no throttle", bad: false },
              { l: "If you blow through the quota", v: "Easy top-up at honest prices. No surprise charges.", bad: false },
            ].map((r, i) => (
              <div key={i} style={{ border: border.base, borderRadius: 18, background: r.bad ? C.ink : C.mint, color: r.bad ? C.cream : C.ink, padding: "16px 18px" }}>
                <Mono color={r.bad ? C.coral : C.ink} opacity={1} size={11}>{r.bad ? "// AVOID" : "// US"}</Mono>
                <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em", lineHeight: 1.35, marginTop: 4 }}>{r.l}</div>
                <div style={{ fontSize: 14, lineHeight: 1.4, marginTop: 4, opacity: r.bad ? 0.8 : 0.9 }}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Bundle grid ───────────────────────────────────────────────

function BundleGrid({ bundles, country }: { bundles: Bundle[]; country: Country }) {
  return (
    <section id="plans" className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 56 }}>
          <div>
            <Mono>// THE BUNDLES</Mono>
            <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(40px, 5vw, 84px)", letterSpacing: "-0.035em", lineHeight: 0.92, margin: "14px 0 0" }}>
              {bundles.length} {bundles.length === 1 ? "option" : "sizes"}.{" "}
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>One promise.</span>
            </h2>
          </div>
          <Sticker color="mint" rotate={4} size="lg">FULL CARRIER SPEED</Sticker>
        </div>

        <PlanCards bundles={bundles} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 56, gap: 14, flexWrap: "wrap" }}>
          <Mono>// EVERY BUNDLE INCLUDES:</Mono>
          {["Hotspot · tethering", "No throttle below quota", "No hidden top-up fees", "Activate in 30s · QR"].map((t) => (
            <span key={t} style={{ fontFamily: F.body, fontWeight: 500, fontSize: 14, padding: "6px 14px", border: `1.5px solid ${C.ink}`, borderRadius: 999 }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Unlimited plan section ────────────────────────────────────

function ThePlan({ bundles, country, singlePlan }: { bundles: Bundle[]; country: Country; singlePlan: boolean }) {
  const b = bundles[0];
  if (!b) return null;
  const features: string[] = JSON.parse(b.features || "[]");

  return (
    <section id="plans" className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 48 }}>
          <div>
            <Mono>// THE PLAN</Mono>
            <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(40px, 5vw, 84px)", letterSpacing: "-0.035em", lineHeight: 0.92, margin: "14px 0 0", maxWidth: 880 }}>
              One plan.{" "}
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>One price.</span> No fine print.
            </h2>
          </div>
          <Sticker color="yellow" rotate={4} size="lg">DATA-ONLY · NO VOICE</Sticker>
        </div>

        <div className="grid-2-col" style={{ alignItems: "stretch" }}>
          {/* Plan card */}
          <div style={{ background: C.blue, color: C.cream, border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 40, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div aria-hidden style={{ position: "absolute", right: -60, top: -40, fontFamily: F.display, fontWeight: 800, fontSize: 380, lineHeight: 1, color: C.yellow, opacity: 0.18, userSelect: "none", pointerEvents: "none" }}>∞</div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16 }}>
              <Mono color={C.yellow}>// PLAN</Mono>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 84, letterSpacing: "-0.045em", lineHeight: 0.85 }}>
                Unlimited<br /><span style={{ color: C.yellow }}>{country.name.slice(0, 2).toUpperCase()}.</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 110, letterSpacing: "-0.045em", lineHeight: 1 }}>{b.price}</span>
                <span style={{ fontSize: 22, opacity: 0.85 }}>/ {b.period}</span>
              </div>
              {b.per_day && (
                <div style={{ fontFamily: F.mono, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.8 }}>
                  ≈ {b.per_day} / day · {b.value_label}
                </div>
              )}
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 12, fontSize: 17 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 999, background: C.yellow, color: C.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.display, fontWeight: 800, fontSize: 14 }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28 }}>
                <a href={b.checkout_url} target="_blank" rel="noopener noreferrer">
                  <Btn color="yellow" size="lg">Get my {country.name} eSIM →</Btn>
                </a>
              </div>
            </div>
          </div>

          {/* Spec card */}
          <div style={{ background: "#fff", color: C.ink, border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 36, display: "flex", flexDirection: "column" }}>
            <Mono>// SPECS</Mono>
            <div style={{ marginTop: 12 }}>
              {[
                ["Validity", b.period],
                ["Data", `${b.data_amount} Unlimited`],
                ["Throttle after", "Never"],
                ["Network", `${country.carrier_name}`],
                ["Hotspot", "Yes"],
                ["Activation", "30 sec · QR"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", borderTop: "1.5px dashed rgba(14,14,20,0.18)" }}>
                  <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em" }}>{label}</span>
                  <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: label === "Validity" ? C.blue : C.ink }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Plan cards (for multi-plan layouts) ──────────────────────

function PlanCards({ bundles }: { bundles: Bundle[] }) {
  return (
    <div className="grid-3-col">
      {bundles.map((b) => {
        const bg = { cream: "#fff", yellow: C.yellow, blue: C.blue }[b.color] || "#fff";
        const fg = b.color === "blue" ? C.cream : C.ink;
        const features: string[] = JSON.parse(b.features || "[]");
        const isFeatured = Boolean(b.is_featured);
        return (
          <div key={b.id} style={{ background: bg, color: fg, border: border.thick, borderRadius: 32, padding: 32, position: "relative", boxShadow: isFeatured ? shadow.xl : shadow.md, display: "flex", flexDirection: "column", gap: 14, transform: isFeatured ? "translateY(-8px)" : "none" }}>
            {b.badge && (
              <div style={{ position: "absolute", top: -16, right: 24 }}>
                <Sticker color={b.color === "blue" ? "yellow" : "coral"} rotate={6} size="sm">{b.badge}</Sticker>
              </div>
            )}
            <Mono color={b.color === "blue" ? C.yellow : undefined} opacity={1}>// PLAN</Mono>
            <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 52, letterSpacing: "-0.035em", lineHeight: 0.9 }}>
              {b.name}<br />
              <span style={{ color: b.color === "blue" ? C.yellow : C.blue }}>{b.data_amount}.</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 84, letterSpacing: "-0.04em", lineHeight: 1 }}>{b.price}</span>
              <span style={{ fontSize: 18, opacity: 0.75 }}>/ {b.period}</span>
            </div>
            {b.per_day && (
              <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75 }}>
                ≈ {b.per_day} / day · {b.value_label}
              </div>
            )}
            <div style={{ height: 2, background: fg, opacity: 0.15, margin: "4px 0" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 16, lineHeight: 1.7 }}>
              {features.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: b.color === "blue" ? C.yellow : C.blue, fontFamily: F.display, fontWeight: 800, lineHeight: 1.4 }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", paddingTop: 16 }}>
              <a href={b.checkout_url} target="_blank" rel="noopener noreferrer">
                <Btn color={b.color === "blue" ? "yellow" : "ink"}>Pick this →</Btn>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Carrier story (for unlimited / no number countries) ───────

function CarrierStory({ country }: { country: Country }) {
  return (
    <section className="section-pad" style={{ background: C.cream2, paddingTop: "100px", paddingBottom: "100px", borderBottom: border.base }}>
      <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ background: "#fff", border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 36, position: "relative" }}>
          <div style={{ position: "absolute", top: -18, left: 28 }}>
            <Sticker color="mint" rotate={-5} size="sm">LOCAL NETWORK</Sticker>
          </div>
          <Mono>// THE CARRIER</Mono>
          <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 84, letterSpacing: "-0.04em", lineHeight: 0.85, margin: "16px 0 18px" }}>
            {country.carrier_name}.
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.55, margin: 0 }}>
            The same towers local households are connected to. You&apos;re not on a roaming agreement
            — you&apos;re on the network itself. Locally negotiated, locally delivered.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 24 }}>
            {[
              { n: "99.9%", l: "Coverage" },
              { n: "#1", l: "Fastest 5G" },
              { n: "EU", l: "Roams free" },
            ].map((s, i) => (
              <div key={i} style={{ border: border.base, borderRadius: 18, padding: "12px 14px", background: C.cream }}>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 28, letterSpacing: "-0.03em", lineHeight: 1, color: C.blue }}>{s.n}</div>
                <div style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Mono>// WHY THIS MATTERS</Mono>
          <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>
            Same towers.
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>Same speeds.</span>
            <br />
            Locals get.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 560 }}>
            Other eSIM providers run on roaming — your traffic detours through another country&apos;s
            gateway. We negotiated a local profile directly with {country.carrier_name}, so your phone
            behaves exactly like a local one.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Promise strip ─────────────────────────────────────────────

function PromiseStrip({ country }: { country: Country }) {
  if (!country.promise_text) return null;
  return (
    <section className="section-pad" style={{ background: C.yellow, paddingTop: "80px", paddingBottom: "80px", borderBottom: border.base, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 720 }}>
          <Mono>// THE PROMISE</Mono>
          <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(32px, 3.5vw, 56px)", letterSpacing: "-0.035em", lineHeight: 0.95, margin: "12px 0 0" }}>
            {country.promise_text}
          </div>
        </div>
        <Sticker color="ink" rotate={-4} size="lg">WRITTEN IN THE TERMS</Sticker>
      </div>
    </section>
  );
}

// ── Quality promise for bundle countries ─────────────────────

function QualityPromise({ country }: { country: Country }) {
  if (!country.promise_text) return null;
  return (
    <section className="section-pad" style={{ background: C.coral, paddingTop: "100px", paddingBottom: "100px", borderBottom: border.base, position: "relative", overflow: "hidden", color: C.ink }}>
      <div className="grid-2-col" style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Mono>// THE PROMISE</Mono>
          <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>
            {country.promise_text}
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 620 }}>
            We re-tender the carrier deal every six months. If a different network gives travellers
            better speeds or wider 5G coverage, we move. You don&apos;t have to change anything.
          </p>
        </div>
        <div style={{ background: C.cream, color: C.ink, border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
          <Mono>// COVERAGE NOTES</Mono>
          <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 16, lineHeight: 1.6, opacity: 0.85 }}>
            Cities: 5G core areas (120–280 Mbps)
            <br />
            Coastal / resort: 4G+ widespread (80–180 Mbps)
            <br />
            Remote / rural: 4G, varies (10–90 Mbps)
          </div>
          <Mono opacity={0.6} size={11}>// MEASURED Q1 2026. WE UPDATE THIS QUARTERLY.</Mono>
        </div>
      </div>
    </section>
  );
}

// ── Phone number story section ────────────────────────────────

function PhoneNumberStory() {
  return (
    <section className="section-pad" style={{ background: C.cream2, paddingTop: "100px", paddingBottom: "100px", borderBottom: border.base }}>
      <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Sticker color="yellow" rotate={-3}>WHY THIS MATTERS</Sticker>
            <Mono>// THE LOCAL NUMBER</Mono>
          </div>
          <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>
            A number people
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>can actually</span>
            <br />call you on.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 560 }}>
            Most travel eSIMs are data-only. That&apos;s fine in Amsterdam — useless when your Grab
            driver is two blocks away and can&apos;t reach you. With a local number on the eSIM, calls,
            SMS, two-factor codes — all of it. Same line the locals get.
          </p>
        </div>

        <div style={{ background: "#fff", border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 32, position: "relative" }}>
          <div style={{ position: "absolute", top: -16, right: 24 }}>
            <Sticker color="mint" rotate={5} size="sm">WHEN YOU&apos;LL USE IT</Sticker>
          </div>
          <Mono>// EVERYDAY MOMENTS</Mono>
          <div style={{ marginTop: 8 }}>
            {[
              { icon: "🚕", title: "Grab, Bolt, taxi callbacks", body: "Drivers ring the number on the booking. With a local line, that ring lands on your phone." },
              { icon: "🏨", title: "Hotel check-in & restaurant bookings", body: "Front desks call to confirm. Booking sites want a local number. Done." },
              { icon: "🔐", title: "2FA & banking codes", body: "Some local services require an SMS to a local number. Yours arrives instantly." },
              { icon: "💬", title: "WhatsApp & messaging signups", body: "Spin up a fresh chat profile tied to the local number — useful for local apps and services." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: "20px 0", borderTop: "1.5px dashed rgba(14,14,20,0.2)" }}>
                <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: 14, border: border.base, background: C.cream, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: shadow.sm, fontSize: 24 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{item.title}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.55, marginTop: 6, opacity: 0.9 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Plan grid (for countries with number / multiple durations) ─

function PlanGrid({ bundles, country }: { bundles: Bundle[]; country: Country }) {
  return (
    <section id="plans" className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 56 }}>
          <div>
            <Mono>// THE PLANS</Mono>
            <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(40px, 5vw, 84px)", letterSpacing: "-0.035em", lineHeight: 0.92, margin: "14px 0 0", maxWidth: 880 }}>
              Pick the length of your trip.
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>Everything else is the same.</span>
            </h2>
          </div>
          <Sticker color="mint" rotate={4} size="lg">UNLIMITED · +{getDialCode(country.name)} NUMBER</Sticker>
        </div>

        <PlanCards bundles={bundles} />

        {/* Same strip */}
        <div style={{ marginTop: 48, background: C.ink, color: C.cream, border: border.thick, borderRadius: 24, padding: "24px 28px", boxShadow: shadow.md, display: "grid", gridTemplateColumns: "repeat(4, 1fr) auto", gap: 24, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingRight: 20, borderRight: "1px solid rgba(250,246,238,0.2)" }}>
            <Mono color={C.yellow}>// EVERY PLAN</Mono>
            <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Same eSIM. Same network. Same local line.
            </span>
          </div>
          {[
            { n: country.carrier_name, l: "Local network" },
            { n: "∞", l: "No throttle", yellow: true },
            { n: `+${getDialCode(country.name)}`, l: "Calls · SMS · 2FA" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 34, letterSpacing: "-0.03em", lineHeight: 1, color: s.yellow ? C.yellow : C.cream }}>{s.n}</div>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
          <a href={bundles[0]?.checkout_url || "#"} target="_blank" rel="noopener noreferrer">
            <Btn color="yellow" size="md">See all specs →</Btn>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── How number works ──────────────────────────────────────────

function HowNumberWorks() {
  return (
    <section className="section-pad" style={{ background: C.blue, color: C.cream, paddingTop: "100px", paddingBottom: "100px", borderBottom: border.base, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: -60, top: -120, fontFamily: F.display, fontWeight: 800, fontSize: 600, lineHeight: 1, color: C.yellow, opacity: 0.16, userSelect: "none", pointerEvents: "none" }}>∞</div>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <Mono color={C.yellow}>// HOW THE LOCAL NUMBER WORKS</Mono>
        <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.95, margin: "14px 0 48px", maxWidth: 900 }}>
          You get your number{" "}
          <span style={{ fontStyle: "italic", fontWeight: 500, color: C.yellow }}>before</span> you land.
        </h2>
        <div className="grid-4-col">
          {[
            { n: "01", t: "Pick a plan", d: "Any duration. All include the local number." },
            { n: "02", t: "We email a QR", d: "Within 30 seconds, with your assigned number written on it." },
            { n: "03", t: "Scan it", d: "Adds the eSIM to your phone. Your home SIM stays put." },
            { n: "04", t: "Land", d: "It connects automatically. The number is live before passport control." },
          ].map((s) => (
            <div key={s.n} style={{ background: "rgba(250,246,238,0.08)", border: "2px solid rgba(250,246,238,0.25)", borderRadius: 24, padding: 24, minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 72, letterSpacing: "-0.045em", lineHeight: 0.85, color: C.yellow }}>{s.n}</div>
              <div>
                <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 24, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{s.t}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5, marginTop: 8, opacity: 0.88 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ section ───────────────────────────────────────────────

function FAQSection({ country }: { country: Country }) {
  const [open, setOpen] = useState<number | null>(0);

  const defaultFaqs = country.plan_type === "bundle" ? [
    { q: `Why isn't there an unlimited plan for ${country.name}?`, a: "Local carriers don't open up local eSIM profiles to foreign travellers. Anything sold as unlimited is roaming dressed up — and roaming-unlimited always has a hidden throttle. We'd rather give you a clear bundle." },
    { q: "Which carrier am I actually on?", a: `${country.carrier_name}, whichever has the stronger handshake when you land. You'll see the carrier name in your phone's network settings.` },
    { q: "What happens if I use up my bundle?", a: "Data pauses cleanly — no surprise pay-per-MB charges. Top up another bundle from the app; new data stacks on top of any remaining validity." },
    { q: "Can I use the eSIM for tethering?", a: "Yes, hotspot is included on every bundle." },
  ] : country.has_number ? [
    { q: "Is the local number really mine while my plan is active?", a: "Yes. You get a real local mobile number — not a virtual VoIP forward. People call it, your phone rings. When the plan expires, the number is recycled back to the carrier." },
    { q: "Does my home number still work?", a: "Yes. Your physical SIM keeps your home line — calls and SMS still arrive on it. The local eSIM is a second line on the same phone." },
    { q: "Can I call internationally with the local number?", a: "Calls and SMS to local numbers are included unlimited. International calling is pay-as-you-go at honest per-minute rates." },
    { q: "What happens after my plan expires?", a: "Nothing — it expires cleanly. We don't auto-renew unless you turn it on." },
  ] : [
    { q: "Is it actually unlimited?", a: "Yes. No cap, no shadow throttle, no fair-use clause buried at the bottom. Stream 4K all week if you want." },
    { q: "Why is there no voice or SMS?", a: "Because nobody uses voice over their data SIM anymore — WhatsApp, FaceTime, Signal all work over data. Keeping it data-only lets us negotiate a better deal." },
    { q: "What happens after the plan expires?", a: "It expires cleanly. We don't auto-renew unless you explicitly turn it on. No surprise charges." },
    { q: "Can I keep my own number?", a: "Yes. The eSIM lives alongside your physical SIM. Your home number stays put." },
  ];

  return (
    <section className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <Mono>// FAQ</Mono>
        <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.035em", lineHeight: 0.95, margin: "14px 0 40px" }}>
          The questions, answered.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {defaultFaqs.map((it, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} style={{ textAlign: "left", cursor: "pointer", background: open === i ? "#fff" : C.cream2, border: border.thick, borderRadius: 24, boxShadow: "4px 4px 0 #0E0E14", padding: "22px 26px", color: C.ink, display: "flex", flexDirection: "column", gap: 14, font: "inherit" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 24, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{it.q}</span>
                <span style={{ width: 36, height: 36, borderRadius: 999, background: open === i ? C.blue : "transparent", border: border.base, color: open === i ? C.cream : C.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.display, fontWeight: 800, fontSize: 22, flexShrink: 0 }}>
                  {open === i ? "−" : "+"}
                </span>
              </div>
              {open === i && <div style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 760 }}>{it.a}</div>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Helpers ───────────────────────────────────────────────────

function getDialCode(countryName: string): string {
  const codes: Record<string, string> = {
    Thailand: "66", Netherlands: "31", Turkey: "90", Japan: "81",
    Germany: "49", France: "33", Italy: "39", Spain: "34",
    USA: "1", UK: "44",
  };
  return codes[countryName] || "XX";
}
