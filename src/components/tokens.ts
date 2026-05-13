// Design tokens — mirrors colors_and_type.css

export const C = {
  cream: "#FAF6EE",
  cream2: "#F2EBDC",
  ink: "#0E0E14",
  inkSoft: "#2A2A35",
  blue: "#2E5BFF",
  blueDeep: "#1E3FBF",
  yellow: "#FFD23F",
  coral: "#FF6B6B",
  mint: "#7BE0B5",
  lilac: "#C9B6FF",
} as const;

export const F = {
  display: "var(--font-bricolage), system-ui, sans-serif",
  body: "var(--font-geist), var(--font-bricolage), system-ui, sans-serif",
  mono: "var(--font-jetbrains), ui-monospace, monospace",
} as const;

export const shadow = {
  sm: `3px 3px 0 ${C.ink}`,
  md: `6px 6px 0 ${C.ink}`,
  lg: `8px 8px 0 ${C.ink}`,
  xl: `10px 10px 0 ${C.ink}`,
} as const;

export const border = {
  base: `2px solid ${C.ink}`,
  thick: `3px solid ${C.ink}`,
} as const;

export const radius = {
  sm: 10,
  md: 18,
  lg: 24,
  xl: 32,
  pill: 999,
} as const;
