import Link from "next/link";
import { C, F, border } from "./tokens";
import { Wordmark, Btn } from "./ui";

export default function Nav({ inverse = false }: { inverse?: boolean }) {
  const fg = inverse ? C.cream : C.ink;
  const borderStyle = inverse ? "1px solid rgba(250,246,238,0.18)" : border.base;

  return (
    <header
      style={{
        borderBottom: borderStyle,
        padding: "20px 56px",
        display: "flex",
        alignItems: "center",
        gap: 36,
        background: inverse ? C.ink : C.cream,
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Wordmark size={28} inverse={inverse} />
      </Link>
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
        {[
          { t: "Destinations", href: "/destinations" },
          { t: "Why us", href: "/why-us" },
          { t: "How it works", href: "/how-it-works" },
          { t: "Support", href: "/support" },
        ].map((x) => (
          <Link
            key={x.t}
            href={x.href}
            style={{ color: fg, textDecoration: "none" }}
          >
            {x.t}
          </Link>
        ))}
      </nav>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: 14,
          alignItems: "center",
        }}
      >
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
        <Btn color={inverse ? "yellow" : "ink"} size="sm">
          Get my eSIM →
        </Btn>
      </div>
    </header>
  );
}
