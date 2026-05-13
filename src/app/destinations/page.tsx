"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SearchBox from "@/components/SearchBox";
import { Sticker, Btn, Mono } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";
import type { Country, Bundle } from "@/lib/db";

type CountryWithBundle = Country & { firstPrice: string };

export default function DestinationsPage() {
  const [countries, setCountries] = useState<CountryWithBundle[]>([]);
  const [region, setRegion] = useState("All");
  const [plan, setPlan] = useState("all");

  useEffect(() => {
    fetch("/api/countries")
      .then((r) => r.json())
      .then(setCountries);
  }, []);

  const filtered = countries.filter((c) => {
    if (region !== "All" && c.region !== region) return false;
    if (plan === "unlimited" && c.plan_type !== "unlimited") return false;
    if (plan === "bundle" && c.plan_type !== "bundle") return false;
    if (plan === "number" && !c.has_number) return false;
    return true;
  });

  const destinations = countries.map((c) => ({
    name: c.name,
    flag: c.flag,
    note: c.carrier_note,
    plan: c.plan_type as "unlimited" | "bundle",
    price: c.firstPrice,
    slug: c.slug,
  }));

  return (
    <div style={{ background: C.cream }}>
      <Nav />

      {/* Header */}
      <section
        className="section-pad"
        style={{
          background: C.cream,
          paddingTop: "64px",
          paddingBottom: "32px",
          borderBottom: border.base,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -120,
            top: -100,
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: 700,
            lineHeight: 1,
            color: C.blue,
            opacity: 0.06,
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
            gap: 24,
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Sticker color="yellow" rotate={-3}>
              200+ COUNTRIES, ONE eSIM
            </Sticker>
            <Mono>// DESTINATIONS</Mono>
          </div>
          <h1
            style={{
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: "clamp(56px, 8vw, 124px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.85,
              margin: 0,
              maxWidth: 1100,
            }}
          >
            Where can we send you
            <br />
            <span style={{ color: C.blue }}>on the internet?</span>
          </h1>
          <p style={{ fontSize: 21, lineHeight: 1.5, margin: 0, maxWidth: 760 }}>
            Every country we cover, with the carrier behind it and the plan we offer there.
            Local eSIMs in <strong>40+ countries</strong> · honest bundles everywhere else.
          </p>
          <div style={{ marginTop: 8 }}>
            <SearchBox placeholder="Jump to a country…" destinations={destinations} />
          </div>
        </div>
      </section>

      {/* Grid + Filters */}
      <section
        className="section-pad"
        style={{
          background: C.cream2,
          paddingTop: "64px",
          paddingBottom: "64px",
          borderBottom: border.base,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Filters */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <Mono>// REGION:</Mono>
              {["All", "Europe", "Asia", "Americas", "Africa", "Oceania"].map((r) => (
                <FilterChip key={r} active={region === r} onClick={() => setRegion(r)}>
                  {r}
                </FilterChip>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Mono>// PLAN:</Mono>
              {[
                { v: "all", l: "All" },
                { v: "unlimited", l: "Unlimited ∞" },
                { v: "bundle", l: "Bundles" },
                { v: "number", l: "With number" },
              ].map((p) => (
                <FilterChip key={p.v} active={plan === p.v} onClick={() => setPlan(p.v)}>
                  {p.l}
                </FilterChip>
              ))}
            </div>
            <Mono color={C.blue} opacity={1}>
              {filtered.length} matches
            </Mono>
          </div>

          {/* Grid */}
          <div
            className="grid-4-col"
            style={{}}
          >
            {filtered.map((c) => (
              <CountryCard key={c.id} c={c} />
            ))}
          </div>

          {/* Legend */}
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 18,
              alignItems: "center",
              flexWrap: "wrap",
              padding: "18px 22px",
              background: "#fff",
              border: border.base,
              borderRadius: 18,
              boxShadow: shadow.sm,
            }}
          >
            <Mono>// LEGEND</Mono>
            {[
              { bg: C.blue, fg: C.cream, label: "UNLIMITED ∞", desc: "Local eSIM, no throttle." },
              { bg: C.yellow, fg: C.ink, label: "BUNDLE", desc: "Fixed quota at full carrier speed." },
              { bg: C.mint, fg: C.ink, label: "+ NUMBER", desc: "Comes with a real local phone number." },
            ].map((l) => (
              <span
                key={l.label}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}
              >
                <span
                  style={{
                    background: l.bg,
                    color: l.fg,
                    border: `1.5px solid ${C.ink}`,
                    borderRadius: 999,
                    padding: "2px 8px",
                    fontFamily: F.display,
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: "0.06em",
                  }}
                >
                  {l.label}
                </span>
                {l.desc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Missing country */}
      <section
        className="section-pad"
        style={{
          background: C.cream,
          paddingTop: "100px",
          paddingBottom: "100px",
          borderBottom: border.base,
        }}
      >
        <div
          className="grid-2-col"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <div>
            <Mono>// CAN&apos;T FIND IT?</Mono>
            <h2
              style={{
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: 72,
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                margin: "12px 0 16px",
              }}
            >
              Missing a country?
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>
                Tell us where you&apos;re going.
              </span>
            </h2>
            <p style={{ fontSize: 19, lineHeight: 1.55, margin: 0, maxWidth: 580 }}>
              We add new carriers every month — and the order is roughly: wherever our customers
              keep asking. Drop us the country and a date, we&apos;ll let you know what we can do.
            </p>
          </div>
          <div
            style={{
              background: C.ink,
              color: C.cream,
              border: border.thick,
              borderRadius: 28,
              boxShadow: shadow.lg,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <Mono color={C.yellow}>// REQUEST A COUNTRY</Mono>
            {["Country (e.g. Nepal)", "When are you going?", "Your email"].map((ph) => (
              <input
                key={ph}
                placeholder={ph}
                style={{
                  background: "transparent",
                  border: "2px solid rgba(250,246,238,0.4)",
                  borderRadius: 14,
                  padding: "12px 16px",
                  color: C.cream,
                  fontFamily: F.body,
                  fontSize: 16,
                  outline: "none",
                }}
              />
            ))}
            <Btn color="yellow" size="md" style={{ marginTop: 4 }}>
              Send the request →
            </Btn>
          </div>
        </div>
      </section>

      <CTA countries={countries} />
      <Footer />
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? C.ink : "transparent",
        color: active ? C.cream : C.ink,
        border: border.base,
        borderRadius: radius.pill,
        padding: "8px 16px",
        cursor: "pointer",
        fontFamily: F.display,
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </button>
  );
}

function CountryCard({ c }: { c: CountryWithBundle }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={`/${c.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        color: C.ink,
        border: border.base,
        borderRadius: 22,
        padding: 18,
        textDecoration: "none",
        boxShadow: hover ? shadow.md : shadow.sm,
        transform: hover ? "translate(-2px,-2px)" : "none",
        transition: "transform 0.1s ease, box-shadow 0.1s ease",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 36, lineHeight: 1 }}>{c.flag}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: F.display,
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {c.name}
          </div>
          <div
            style={{
              fontFamily: F.mono,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.7,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {c.carrier_note}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {c.plan_type === "unlimited" ? (
          <span
            style={{
              background: C.blue,
              color: C.cream,
              border: `1.5px solid ${C.ink}`,
              borderRadius: 999,
              padding: "3px 10px",
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.06em",
            }}
          >
            UNLIMITED ∞
          </span>
        ) : (
          <span
            style={{
              background: C.yellow,
              color: C.ink,
              border: `1.5px solid ${C.ink}`,
              borderRadius: 999,
              padding: "3px 10px",
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.06em",
            }}
          >
            BUNDLE
          </span>
        )}
        {c.has_number ? (
          <span
            style={{
              background: C.mint,
              color: C.ink,
              border: `1.5px solid ${C.ink}`,
              borderRadius: 999,
              padding: "3px 10px",
              fontFamily: F.display,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.06em",
            }}
          >
            + NUMBER
          </span>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderTop: "1.5px dashed rgba(14,14,20,0.18)",
          paddingTop: 10,
          marginTop: "auto",
        }}
      >
        <span
          style={{
            fontFamily: F.display,
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: "-0.02em",
          }}
        >
          {c.firstPrice}
          <span style={{ fontSize: 14, opacity: 0.6 }}> / from</span>
        </span>
        <span
          style={{
            fontFamily: F.display,
            fontWeight: 700,
            fontSize: 14,
            color: C.blue,
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          View →
        </span>
      </div>
    </a>
  );
}
