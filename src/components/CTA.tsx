import { C, F, shadow, border } from "./tokens";
import { Sticker, Btn, Mono } from "./ui";
import SearchBox from "./SearchBox";
import { Country } from "@/lib/db";

interface CTAProps {
  countries: Country[];
}

export default function CTA({ countries }: CTAProps) {
  const destinations = countries.map((c) => ({
    name: c.name,
    flag: c.flag,
    note: c.carrier_note,
    plan: c.plan_type as "unlimited" | "bundle",
    price: "",
    slug: c.slug,
  }));

  return (
    <section
      className="section-pad"
      style={{
        background: C.blue,
        color: C.cream,
        paddingTop: "120px",
        paddingBottom: "120px",
        borderTop: border.base,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -180,
          top: -140,
          fontFamily: F.display,
          fontWeight: 800,
          fontSize: 900,
          lineHeight: 1,
          color: C.yellow,
          opacity: 0.18,
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
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 32,
        }}
      >
        <Sticker color="yellow" rotate={-3} size="md">
          READY WHEN YOU ARE
        </Sticker>

        <h2
          style={{
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: "clamp(64px, 8vw, 140px)",
            letterSpacing: "-0.05em",
            lineHeight: 0.84,
            margin: 0,
            color: C.cream,
          }}
        >
          One QR code.
          <br />
          <span style={{ color: C.yellow }}>200+ countries.</span>
          <br />
          Zero fine print.
        </h2>

        <p style={{ fontSize: 22, lineHeight: 1.45, margin: 0, maxWidth: 700, opacity: 0.92 }}>
          Tell us where you&apos;re going. We&apos;ll send the eSIM by email in 30 seconds.
          Activate it before take-off, connect on landing.
        </p>

        <div style={{ width: "100%", maxWidth: 720, marginTop: 8 }}>
          <SearchBox placeholder="Where are you headed?" destinations={destinations} />
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            alignItems: "center",
            marginTop: 8,
            flexWrap: "wrap",
          }}
        >
          <Btn color="yellow" size="lg">
            Get my eSIM →
          </Btn>
          <a
            href="/destinations"
            style={{
              color: C.cream,
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 19,
              textDecoration: "underline",
              textDecorationThickness: 2,
              textUnderlineOffset: 5,
              opacity: 0.92,
            }}
          >
            See all plans →
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.85 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: C.mint,
                boxShadow: `0 0 0 4px rgba(123,224,181,0.25)`,
              }}
            />
            <Mono color={C.cream} opacity={0.85}>
              42,108 connected right now
            </Mono>
          </div>
        </div>
      </div>
    </section>
  );
}
