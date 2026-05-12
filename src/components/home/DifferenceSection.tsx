import { Sticker, Btn, Mono } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";

const cards = [
  { badge: "LOCAL FIRST", badgeColor: "mint" as "mint", title: "On the country's own network.", body: "Where carriers will play ball, we ship a local profile — Odido in the Netherlands, SoftBank in Japan, AIS in Thailand. Same network the locals use, same towers, same speeds.", icon: "📍" },
  { badge: "NO THROTTLE", badgeColor: "yellow" as "yellow", title: "Unlimited means unlimited.", body: "The big clubs' “unlimited” is 25 GB then throttled to 384 kbps — unusable for anything except text. Ours doesn't slow down. If we can't offer it honestly, we don't call it unlimited.", icon: "∞" },
  { badge: "40+ COUNTRIES", badgeColor: "coral" as "coral", title: "A real local number, often.", body: "Because we issue a local profile, you often get a local phone number with it — for WhatsApp signup, two-factor codes, a taxi callback, hotel check-in.", icon: "📞" },
];

const vsRows = [
  { feature: '"Unlimited" plans', them: "Throttled to 384 kbps after 25 GB", us: "Actually unlimited. No throttle." },
  { feature: "Network underneath", them: "Roaming — whichever is cheapest", us: "Local carrier, every time we can" },
  { feature: "Speed in-country", them: "Roaming speeds, often 3G fallback", us: "Full local 5G / 4G — same as locals" },
  { feature: "Local phone number", them: "Never", us: "Yes, in 40+ countries" },
  { feature: "Hidden fees", them: 'Surprise "data top-up" charges', us: "What you see is what you pay" },
];

export default function DifferenceSection() {
  return (
    <section style={{ background: C.cream2, padding: "120px 56px", borderTop: border.base }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 56 }}>
          <div>
            <Mono>// WHAT WE DO DIFFERENTLY</Mono>
            <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(36px, 5vw, 84px)", letterSpacing: "-0.035em", lineHeight: 0.92, margin: "14px 0 0", maxWidth: 880 }}>
              Local eSIM where possible.
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>Not roaming dressed up</span>{" "}
              as something else.
            </h2>
          </div>
          <Sticker color="coral" rotate={-3} size="lg">REAL UNLIMITED, OR NOTHING</Sticker>
        </div>

        <p style={{ fontSize: 21, lineHeight: 1.5, maxWidth: 900, margin: "0 0 56px" }}>
          Most eSIM providers resell the same handful of roaming agreements — which is why their
          &quot;unlimited&quot; always has an asterisk and a throttle. We do it the slow way: a real,{" "}
          <strong>local</strong> profile on the country&apos;s actual network whenever we can negotiate one.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {cards.map((card) => (
            <div key={card.badge} style={{ background: "#fff", border: border.thick, borderRadius: 28, padding: 32, position: "relative", boxShadow: shadow.md, display: "flex", flexDirection: "column", gap: 18, minHeight: 360 }}>
              <div style={{ position: "absolute", top: -16, right: 24 }}>
                <Sticker color={card.badgeColor} rotate={5} size="sm">{card.badge}</Sticker>
              </div>
              <div style={{ width: 80, height: 80, borderRadius: 20, border: border.base, background: C.cream, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: shadow.sm, fontSize: 36 }}>
                {card.icon}
              </div>
              <h3 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 34, letterSpacing: "-0.03em", lineHeight: 0.95, margin: 0 }}>{card.title}</h3>
              <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0 }}>{card.body}</p>
            </div>
          ))}
        </div>

        {/* VS Table */}
        <div style={{ background: C.ink, color: C.cream, borderRadius: 32, border: border.thick, boxShadow: shadow.lg, overflow: "hidden", marginTop: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", padding: "20px 32px", alignItems: "center", borderBottom: "1px solid rgba(250,246,238,0.15)" }}>
            <Mono color={C.cream} opacity={0.6}>// SIDE-BY-SIDE</Mono>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ background: "#2A2A35", color: C.cream, border: "1.5px solid rgba(250,246,238,0.3)", borderRadius: radius.pill, padding: "6px 18px", fontFamily: F.display, fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                The big providers
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ background: C.yellow, color: C.ink, border: border.base, borderRadius: radius.pill, padding: "6px 18px", fontFamily: F.display, fontWeight: 800, fontSize: 14, letterSpacing: "0.04em" }}>
                NoLimits∞nline
              </div>
            </div>
          </div>
          {vsRows.map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", padding: "22px 32px", borderTop: i === 0 ? "none" : "1px solid rgba(250,246,238,0.12)", alignItems: "center" }}>
              <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em" }}>{r.feature}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", fontSize: 15, lineHeight: 1.4, opacity: 0.8, textAlign: "center" }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: "transparent", border: `1.5px solid ${C.coral}`, color: C.coral, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.display, fontWeight: 800, fontSize: 14 }}>✕</span>
                <span>{r.them}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", fontSize: 15, lineHeight: 1.4, textAlign: "center", color: C.cream }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: "#7BE0B5", color: C.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.display, fontWeight: 800, fontSize: 14 }}>✓</span>
                <span>{r.us}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginTop: 56 }}>
          <Mono>// IF WE CAN&apos;T BEAT YOUR HOME SIM, WE&apos;LL SAY SO ON THE PRODUCT PAGE.</Mono>
          <Btn color="ink" size="lg" href="/destinations">See the country list →</Btn>
        </div>
      </div>
    </section>
  );
}
