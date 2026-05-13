"use client";

import { Sticker, Mono, FlagDot } from "@/components/ui";
import { C, F, shadow, border } from "@/components/tokens";
import { useIsMobile } from "@/hooks/useIsMobile";

const rules = [
  { k: "01", t: "If we say unlimited, no throttle. Period." },
  { k: "02", t: "The price on the homepage is the price you pay." },
  { k: "03", t: "Local network where we can get one. Roaming only as a last resort." },
  { k: "04", t: "Your data stays in the EU. We don't resell it." },
  { k: "05", t: "If we can't beat your home plan, the country page will say so." },
];

export default function EuropeanSection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ background: C.cream, padding: isMobile ? "60px 20px" : "120px 56px", borderTop: border.base, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", left: -120, bottom: -180, fontFamily: F.display, fontWeight: 800, fontSize: 720, lineHeight: 1, color: C.blue, opacity: 0.05, userSelect: "none", pointerEvents: "none" }}>
        ∞
      </div>

      <div className="grid-2-col" style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <Sticker color="blue" rotate={-2} size="md">PROUD EUROPEAN COMPANY</Sticker>
            <Mono>// AMSTERDAM · NL</Mono>
          </div>

          <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(48px, 6vw, 96px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>
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

          <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 12, flexWrap: "wrap" }}>
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

        <div style={{ background: C.yellow, color: C.ink, border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 36, position: "relative", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ position: "absolute", top: -18, left: 28 }}>
            <Sticker color="ink" rotate={-5} size="sm">THE DUTCH BIT</Sticker>
          </div>
          <Mono>// HOUSE RULES</Mono>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            {rules.map((r) => (
              <li key={r.k} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: C.blue, lineHeight: 1.3, minWidth: 36 }}>{r.k}</span>
                <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{r.t}</span>
              </li>
            ))}
          </ul>
          <div style={{ borderTop: `2px dashed ${C.ink}`, paddingTop: 16, marginTop: 4, fontStyle: "italic", fontFamily: F.display, fontWeight: 500, fontSize: 18, lineHeight: 1.4 }}>
            &quot;Doe maar gewoon, dan doe je al gek genoeg.&quot;
            <div style={{ fontStyle: "normal", fontFamily: F.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginTop: 6 }}>
              — dutch proverb. roughly: just act normal, that&apos;s plenty.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
