"use client";

import { useEffect, useRef, useState } from "react";
import { C, F, shadow, border, radius } from "./tokens";
import { Btn, Mono } from "./ui";

interface Destination {
  name: string;
  flag: string;
  note: string;
  plan: "unlimited" | "bundle";
  price: string;
  slug?: string;
}

interface SearchBoxProps {
  placeholder?: string;
  destinations: Destination[];
}

export default function SearchBox({ placeholder = "Where are you headed?", destinations }: SearchBoxProps) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", click);
    return () => document.removeEventListener("mousedown", click);
  }, []);

  const filtered = q.trim()
    ? destinations.filter((d) => d.name.toLowerCase().includes(q.trim().toLowerCase()))
    : destinations.slice(0, 6);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", maxWidth: 640 }}>
      <div
        style={{
          background: "#fff",
          color: C.ink,
          border: border.thick,
          borderRadius: radius.pill,
          boxShadow: shadow.md,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: 6,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: radius.pill,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </div>
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: F.display,
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: "-0.015em",
            color: C.ink,
            padding: "10px 4px",
            minWidth: 0,
          }}
        />
        <Btn color="ink" size="md" style={{ borderRadius: radius.pill }}>
          Find a plan →
        </Btn>
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: 0,
            right: 0,
            background: "#fff",
            border: border.thick,
            borderRadius: 24,
            boxShadow: shadow.md,
            padding: 14,
            zIndex: 20,
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 12px 10px",
            }}
          >
            <Mono>// {q.trim() ? `matches for "${q.trim()}"` : "popular this week"}</Mono>
            <Mono color={C.blue} opacity={1}>{filtered.length} · live</Mono>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {filtered.length === 0 && (
              <div
                style={{
                  padding: "16px 12px",
                  fontFamily: F.body,
                  fontSize: 15,
                  opacity: 0.7,
                }}
              >
                Nothing yet — try a country name (we cover 200+).
              </div>
            )}
            {filtered.slice(0, 5).map((d, i) => (
              <a
                key={d.name}
                href={d.slug ? `/${d.slug}` : "#"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "12px 12px",
                  borderRadius: 14,
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                  borderTop: i === 0 ? "none" : `1px solid #EAE2D0`,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = C.cream)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
              >
                <div style={{ fontSize: 26, lineHeight: 1, width: 32 }}>{d.flag}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: F.display,
                      fontWeight: 700,
                      fontSize: 19,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {d.name}
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
                    {d.note}
                  </div>
                </div>
                {d.plan === "unlimited" ? (
                  <div
                    style={{
                      background: C.blue,
                      color: C.cream,
                      border: border.base,
                      borderRadius: radius.pill,
                      padding: "6px 14px",
                      fontFamily: F.display,
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    UNLIMITED ∞
                  </div>
                ) : (
                  <div
                    style={{
                      background: C.yellow,
                      color: C.ink,
                      border: border.base,
                      borderRadius: radius.pill,
                      padding: "6px 14px",
                      fontFamily: F.display,
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    BUNDLE
                  </div>
                )}
                <div
                  style={{
                    fontFamily: F.display,
                    fontWeight: 800,
                    fontSize: 19,
                    letterSpacing: "-0.02em",
                    minWidth: 86,
                    textAlign: "right",
                  }}
                >
                  {d.price}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
