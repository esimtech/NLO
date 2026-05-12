import SearchBox from "@/components/SearchBox";
import { Sticker, Btn, Mono, FlagDot } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";

type Destination = { name: string; flag: string; note: string; plan: "unlimited" | "bundle"; price: string; slug: string };

const cities = [
  { name: "AMSTERDAM", tone: C.yellow, slug: "netherlands" },
  { name: "LISBON", tone: C.coral },
  { name: "ISTANBUL", tone: C.mint, slug: "turkey" },
  { name: "TOKYO", tone: C.lilac },
  { name: "BALI", tone: C.yellow },
  { name: "BANGKOK", tone: C.mint, slug: "thailand" },
];

export default function HeroSection({ destinations }: { destinations: Destination[] }) {
  return (
    <section style={{ position: "relative", padding: "72px 56px 0", overflow: "hidden", background: C.cream }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent 0 38px, rgba(14,14,20,0.04) 38px 39px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <Sticker color="coral" rotate={-4}>WE DON&apos;T DO FAKE UNLIMITED</Sticker>
          <Sticker color="mint" rotate={3} size="sm">200+ COUNTRIES</Sticker>
        </div>

        <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(72px, 10vw, 144px)", letterSpacing: "-0.05em", lineHeight: 0.84, margin: 0 }}>
          Pick a country.
          <br />
          <span style={{ color: C.blue }}>Get on the internet.</span>
        </h1>

        <p style={{ fontSize: 21, lineHeight: 1.45, margin: 0, maxWidth: 720 }}>
          Real <em>unlimited</em> in the countries where we can offer it.
          Honest, well-priced bundles everywhere else. Same eSIM, same QR code.
        </p>

        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 8 }}>
          <SearchBox placeholder="Search 200+ countries…" destinations={destinations} />
        </div>

        <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { dot: C.blue, label: "Unlimited", sub: "— really. No 25 GB cap." },
            { dot: C.yellow, label: "Bundles", sub: "— 5 GB → 100 GB, honest prices.", dotBorder: true },
          ].map((p) => (
            <div key={p.label} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", border: border.base, borderRadius: radius.pill, padding: "10px 18px", boxShadow: shadow.sm }}>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: p.dot, border: p.dotBorder ? `1.5px solid ${C.ink}` : undefined }} />
              <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 16 }}>{p.label}</span>
              <span style={{ fontFamily: F.body, fontSize: 15, opacity: 0.75 }}>{p.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "relative", display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 72, paddingBottom: 72 }}>
        {cities.map((c, i) => (
          <a key={c.name} href={c.slug ? `/${c.slug}` : "#"} style={{ transform: `rotate(${(i % 2 ? 1 : -1) * (2 + (i % 3))}deg)`, background: c.tone, color: C.ink, border: border.base, borderRadius: radius.pill, padding: "12px 22px", fontFamily: F.display, fontWeight: 800, fontSize: 18, letterSpacing: "0.04em", boxShadow: shadow.sm, display: "inline-flex", gap: 8, alignItems: "center", textDecoration: "none" }}>
            <span style={{ color: C.blue }}>∞</span>
            {c.name}
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
}
