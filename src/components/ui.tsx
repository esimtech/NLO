"use client";

import { CSSProperties, ReactNode, useState } from "react";
import { C, F, shadow, border, radius } from "./tokens";

// ── Wordmark ─────────────────────────────────────────────────

export function Wordmark({ size = 28, inverse = false }: { size?: number; inverse?: boolean }) {
  const inf = inverse ? C.yellow : C.blue;
  const fg = inverse ? C.cream : C.ink;
  return (
    <span
      style={{
        fontFamily: F.display,
        fontWeight: 800,
        letterSpacing: "-0.045em",
        lineHeight: 0.85,
        fontSize: size,
        color: fg,
        whiteSpace: "nowrap",
      }}
    >
      NoLimits<span style={{ color: inf }}>∞nline</span>
    </span>
  );
}

// ── Sticker ───────────────────────────────────────────────────

type StickerColor = "ink" | "blue" | "yellow" | "coral" | "mint" | "cream" | "white";
type StickerSize = "sm" | "md" | "lg";

const stickerBg: Record<StickerColor, string> = {
  ink: C.ink, blue: C.blue, yellow: C.yellow, coral: C.coral, mint: C.mint, cream: C.cream, white: "#fff",
};
const stickerFg: Record<StickerColor, string> = {
  ink: C.cream, blue: C.cream, yellow: C.ink, coral: C.ink, mint: C.ink, cream: C.ink, white: C.ink,
};
const stickerPad: Record<StickerSize, string> = {
  sm: "8px 14px", md: "11px 18px", lg: "16px 26px",
};
const stickerFs: Record<StickerSize, number> = { sm: 13, md: 15, lg: 20 };

export function Sticker({
  children,
  color = "ink",
  rotate = 0,
  size = "md",
}: {
  children: ReactNode;
  color?: StickerColor;
  rotate?: number;
  size?: StickerSize;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: stickerBg[color],
        color: stickerFg[color],
        border: border.base,
        borderRadius: radius.pill,
        padding: stickerPad[size],
        fontFamily: F.display,
        fontWeight: 700,
        fontSize: stickerFs[size],
        letterSpacing: "-0.005em",
        boxShadow: shadow.sm,
        transform: `rotate(${rotate}deg)`,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────

type BtnColor = "ink" | "blue" | "yellow" | "coral" | "outline";
type BtnSize = "sm" | "md" | "lg";

const btnBg: Record<BtnColor, string> = {
  ink: C.ink, blue: C.blue, yellow: C.yellow, coral: C.coral, outline: "transparent",
};
const btnFg: Record<BtnColor, string> = {
  ink: C.cream, blue: "#fff", yellow: C.ink, coral: "#fff", outline: C.ink,
};
const btnPad: Record<BtnSize, string> = {
  sm: "10px 18px", md: "14px 26px", lg: "20px 34px",
};
const btnFs: Record<BtnSize, number> = { sm: 15, md: 17, lg: 20 };

export function Btn({
  children,
  color = "ink",
  size = "lg",
  style,
  href,
  onClick,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  color?: BtnColor;
  size?: BtnSize;
  style?: CSSProperties;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const base: CSSProperties = {
    background: btnBg[color],
    color: btnFg[color],
    border: border.base,
    borderRadius: radius.pill,
    padding: btnPad[size],
    fontFamily: F.display,
    fontWeight: 700,
    fontSize: btnFs[size],
    letterSpacing: "-0.01em",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
    transform: pressed ? "translate(1px,1px)" : hover ? "translate(-2px,-2px)" : "none",
    boxShadow: pressed ? "none" : hover ? shadow.md : shadow.sm,
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setPressed(false); },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onClick,
  };

  if (href) return <a href={href} style={base} {...handlers}>{children}</a>;
  return <button type={type} style={base} disabled={disabled} {...handlers}>{children}</button>;
}

// ── Mono label ────────────────────────────────────────────────

export function Mono({
  children,
  color,
  opacity,
  size = 13,
}: {
  children: ReactNode;
  color?: string;
  opacity?: number;
  size?: number;
}) {
  return (
    <div
      style={{
        fontFamily: F.mono,
        fontSize: size,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: color || C.ink,
        opacity: opacity ?? (color ? 1 : 0.7),
      }}
    >
      {children}
    </div>
  );
}

// ── Flag dot ──────────────────────────────────────────────────

export function FlagDot({ c }: { c: string }) {
  return (
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        background: c,
        border: "1.5px solid #0E0E14",
        display: "inline-block",
      }}
    />
  );
}

// ── Section heading helpers ───────────────────────────────────

export function SectionEyebrow({ tag, label }: { tag: string; label?: string }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <Mono>// {tag}</Mono>
      {label && <Mono opacity={0.7}>{label}</Mono>}
    </div>
  );
}
