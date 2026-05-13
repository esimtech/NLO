import Link from "next/link";
import { C, F, border } from "./tokens";
import { Wordmark, Mono, FlagDot } from "./ui";

// Footer uses CSS classes for responsive grid (server component - no hook)

const cols = [
  {
    h: "Destinations",
    l: [
      { t: "Netherlands", href: "/netherlands" },
      { t: "Thailand", href: "/thailand" },
      { t: "Turkey", href: "/turkey" },
      { t: "All 200+", href: "/destinations" },
    ],
  },
  {
    h: "Why us",
    l: [
      { t: "Our story", href: "/why-us" },
      { t: "House rules", href: "/why-us" },
      { t: "Local vs roaming", href: "/why-us" },
    ],
  },
  {
    h: "How it works",
    l: [
      { t: "In 4 steps", href: "/how-it-works" },
      { t: "Device check", href: "/how-it-works" },
      { t: "Activation", href: "/how-it-works" },
    ],
  },
  {
    h: "Support",
    l: [
      { t: "WhatsApp · 24/7", href: "/support" },
      { t: "Live chat", href: "/support" },
      { t: "Email", href: "/support" },
      { t: "FAQ", href: "/support" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="section-pad"
      style={{
        background: C.ink,
        color: C.cream,
        paddingTop: 80,
        paddingBottom: 36,
        borderTop: border.base,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            marginBottom: 56,
          }}
        >
          <div>
            <Wordmark size={36} inverse />
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.5,
                marginTop: 18,
                opacity: 0.78,
                maxWidth: 320,
              }}
            >
              Internet without the fine print. eSIMs for digital nomads, backpackers,
              and anyone with a passport — built in Amsterdam.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 18,
              }}
            >
              <FlagDot c="#AE1C28" />
              <FlagDot c="#FFFFFF" />
              <FlagDot c="#21468B" />
              <Mono color={C.cream} opacity={0.7}>
                NEDERLANDS BEDRIJF
              </Mono>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.h}>
              <Mono color={C.yellow}>// {col.h}</Mono>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "14px 0 0",
                  fontSize: 15,
                  lineHeight: 2,
                }}
              >
                {col.l.map((x) => (
                  <li key={x.t}>
                    <Link
                      href={x.href}
                      style={{
                        color: C.cream,
                        textDecoration: "none",
                        opacity: 0.82,
                      }}
                    >
                      {x.t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(250,246,238,0.18)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            fontFamily: F.mono,
            fontSize: 12,
            letterSpacing: "0.06em",
            opacity: 0.7,
          }}
        >
          <div>© 2026 NoLimits∞nline B.V. · Amsterdam, NL · KvK 90123456</div>
          <div>Privacy · Terms · Cookies — none of which contain a 25 GB cap.</div>
        </div>
      </div>
    </footer>
  );
}
