"use client";

import { useState } from "react";
import Link from "next/link";
import { C, F, border } from "./tokens";
import { Wordmark, Btn } from "./ui";
import { useIsMobile } from "@/hooks/useIsMobile";

const navLinks = [
  { t: "Destinations", href: "/destinations" },
  { t: "Why us", href: "/why-us" },
  { t: "How it works", href: "/how-it-works" },
  { t: "Support", href: "/support" },
];

export default function Nav({ inverse = false }: { inverse?: boolean }) {
  const fg = inverse ? C.cream : C.ink;
  const borderStyle = inverse ? "1px solid rgba(250,246,238,0.18)" : border.base;
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: borderStyle,
        padding: isMobile ? "16px 20px" : "20px 56px",
        display: "flex",
        alignItems: "center",
        gap: isMobile ? 0 : 36,
        background: inverse ? C.ink : C.cream,
        position: "relative",
        zIndex: 100,
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Wordmark size={isMobile ? 22 : 28} inverse={inverse} />
      </Link>

      {/* Desktop nav links */}
      {!isMobile && (
        <nav
          style={{
            display: "flex",
            gap: 28,
            fontFamily: F.body,
            fontSize: 15,
            fontWeight: 500,
            color: fg,
          }}
        >
          {navLinks.map((x) => (
            <Link
              key={x.t}
              href={x.href}
              style={{ color: fg, textDecoration: "none" }}
            >
              {x.t}
            </Link>
          ))}
        </nav>
      )}

      {/* Right side */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: isMobile ? 10 : 14,
          alignItems: "center",
        }}
      >
        {!isMobile && (
          <a
            style={{
              color: fg,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              textDecoration: "none",
            }}
            href="#"
          >
            Sign in
          </a>
        )}
        <Btn
          color={inverse ? "yellow" : "ink"}
          size="sm"
          style={isMobile ? { fontSize: 13, padding: "8px 14px" } : undefined}
        >
          Get my eSIM →
        </Btn>

        {/* Hamburger button (mobile only) */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "transparent",
              border: `1.5px solid ${fg}`,
              borderRadius: 8,
              width: 40,
              height: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              cursor: "pointer",
              padding: 8,
            }}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={fg} strokeWidth="2.5" strokeLinecap="round">
                <line x1="2" y1="2" x2="16" y2="16" />
                <line x1="16" y1="2" x2="2" y2="16" />
              </svg>
            ) : (
              <>
                <span style={{ width: 18, height: 2, background: fg, borderRadius: 2 }} />
                <span style={{ width: 18, height: 2, background: fg, borderRadius: 2 }} />
                <span style={{ width: 18, height: 2, background: fg, borderRadius: 2 }} />
              </>
            )}
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: inverse ? C.ink : C.cream,
            borderBottom: borderStyle,
            padding: "12px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            zIndex: 99,
          }}
        >
          {navLinks.map((x, i) => (
            <Link
              key={x.t}
              href={x.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: fg,
                textDecoration: "none",
                fontFamily: F.body,
                fontSize: 17,
                fontWeight: 500,
                padding: "14px 0",
                borderTop: i > 0 ? `1px solid ${inverse ? "rgba(250,246,238,0.12)" : "rgba(14,14,20,0.1)"}` : "none",
                display: "block",
              }}
            >
              {x.t}
            </Link>
          ))}
          <a
            href="#"
            style={{
              color: fg,
              fontFamily: F.body,
              fontSize: 17,
              fontWeight: 500,
              padding: "14px 0",
              borderTop: `1px solid ${inverse ? "rgba(250,246,238,0.12)" : "rgba(14,14,20,0.1)"}`,
              textDecoration: "none",
              display: "block",
            }}
          >
            Sign in
          </a>
        </div>
      )}
    </header>
  );
}
