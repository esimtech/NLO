"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Sticker, Btn, Mono } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";

export default function HowItWorksPage() {
  return (
    <div style={{ background: C.cream }}>
      <Nav />

      {/* Hero */}
      <section className="section-pad" style={{ background: C.cream, paddingTop: "80px", paddingBottom: "80px", borderBottom: border.base, position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", right: -140, top: -100, fontFamily: F.display, fontWeight: 800, fontSize: 880, lineHeight: 1, color: C.mint, opacity: 0.25, pointerEvents: "none", userSelect: "none" }}>∞</div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Sticker color="mint" rotate={-3}>30 SECONDS · NO APP</Sticker>
            <Mono>// HOW IT WORKS</Mono>
          </div>
          <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(72px, 10vw, 156px)", letterSpacing: "-0.05em", lineHeight: 0.84, margin: 0 }}>
            Land. Scan.
            <br />
            <span style={{ color: C.blue }}>Scroll.</span>
          </h1>
          <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 760 }}>
            An eSIM is just a QR code. We email it, you scan it once, and your phone has a
            second data line ready to go. Your home SIM stays put — no swapping, no SIM ejector
            tool, no airport queue.
          </p>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="section-pad" style={{ background: C.cream2, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 56 }}>
            <div>
              <Mono>// 4 STEPS</Mono>
              <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(36px, 5vw, 84px)", letterSpacing: "-0.035em", lineHeight: 0.92, margin: "14px 0 0", maxWidth: 880 }}>
                From &quot;where am I going&quot; to{" "}
                <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>&quot;I&apos;m online.&quot;</span>
              </h2>
            </div>
            <Sticker color="yellow" rotate={4} size="lg">~30 SECONDS TOTAL</Sticker>
          </div>

          <div className="grid-4-col">
            {[
              { n: "01", t: "Pick a country", d: "Search 200+ destinations. You'll see whether it's unlimited or a bundle right next to the price — no fine print to dig for." },
              { n: "02", t: "We email the QR", d: "Within 30 seconds. The email has the QR plus a plain-text activation code — pick whichever your phone prefers." },
              { n: "03", t: "Scan it once", d: "Settings → Mobile data → Add eSIM → camera at the QR. Phone confirms, installs the profile." },
              { n: "04", t: "Land. Connect.", d: "Toggle the line on before take-off. It registers automatically when you land. No carrier search dance." },
            ].map((s) => (
              <div key={s.n} style={{ background: "#fff", color: C.ink, border: border.thick, borderRadius: 28, padding: 28, position: "relative", boxShadow: shadow.md, display: "flex", flexDirection: "column", gap: 16, minHeight: 340 }}>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 84, letterSpacing: "-0.045em", lineHeight: 0.85, color: C.blue }}>{s.n}</div>
                <div>
                  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{s.t}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.55, margin: "10px 0 0" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device check */}
      <DeviceCheck />

      {/* Timeline */}
      <section className="section-pad" style={{ background: C.yellow, paddingTop: "100px", paddingBottom: "100px", borderBottom: border.base, position: "relative", overflow: "hidden", color: C.ink }}>
        <div aria-hidden style={{ position: "absolute", left: -100, top: -120, fontFamily: F.display, fontWeight: 800, fontSize: 700, lineHeight: 1, color: C.ink, opacity: 0.06, userSelect: "none", pointerEvents: "none" }}>∞</div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <Mono>// A TYPICAL TIMELINE</Mono>
          <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 72px)", letterSpacing: "-0.035em", lineHeight: 0.95, margin: "14px 0 48px", maxWidth: 920 }}>
            Pre-flight to arrivals hall,{" "}
            <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>in actual minutes.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { time: "T-7 days", action: "You buy the plan. QR lands in your email within 30 seconds.", color: "#fff" },
              { time: "T-7 days", action: "Optional: scan the QR now and install the eSIM. Toggle the line OFF until you need it.", color: "#fff" },
              { time: "Boarding", action: "On the jet bridge, toggle the new line ON and your home line's data OFF.", color: C.cream },
              { time: "Landing", action: "Phone goes off airplane mode. The eSIM registers with the local carrier within ~30 seconds.", color: C.cream },
              { time: "Arrivals hall", action: "You're online. Open Maps, book the taxi, send the \"landed\" text. Done.", color: C.mint, final: true },
            ].map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, alignItems: "center", background: r.color, border: border.base, borderRadius: 18, padding: "20px 24px", marginBottom: 10, boxShadow: r.final ? shadow.md : shadow.sm }}>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: r.final ? C.blue : C.ink }}>{r.time}</div>
                <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 19, letterSpacing: "-0.015em", lineHeight: 1.35 }}>{r.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshoot */}
      <section className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 40 }}>
            <div>
              <Mono>// IF IT GOES WRONG</Mono>
              <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(40px, 4.5vw, 76px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: "14px 0 0", maxWidth: 880 }}>
                Three quick fixes,
                <br />
                then we take over.
              </h2>
            </div>
            <Btn color="ink" size="md" href="/support">Open WhatsApp →</Btn>
          </div>
          <div className="grid-3-col">
            {[
              { n: "1", t: "Toggle airplane mode", d: "On for 10 seconds, then off. Forces the phone to re-handshake with the local carrier. Solves about 60% of \"no signal\" cases." },
              { n: "2", t: "Check the data line", d: "Settings → Mobile data → make sure NoLimits∞nline is selected as the data line, and the line is toggled ON." },
              { n: "3", t: "Restart your phone", d: "Properly off, wait 10 seconds, back on. Cleans up any stale carrier state from your previous location." },
            ].map((s) => (
              <div key={s.n} style={{ background: "#fff", border: border.thick, borderRadius: 24, boxShadow: shadow.md, padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 999, background: C.yellow, color: C.ink, border: border.base, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.display, fontWeight: 800, fontSize: 22 }}>{s.n}</div>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 24, letterSpacing: "-0.02em", lineHeight: 1.1, marginTop: 14 }}>{s.t}</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, margin: "8px 0 0" }}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, background: C.mint, border: border.thick, borderRadius: 22, boxShadow: shadow.md, padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 12, height: 12, borderRadius: 999, background: C.ink, boxShadow: "0 0 0 4px rgba(14,14,20,0.15)" }} />
              <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 18, letterSpacing: "-0.015em" }}>
                Still stuck? A human on WhatsApp answers in &lt;2 minutes, 24/7.
              </span>
            </div>
            <Btn color="ink" size="md" href="/support">Chat now →</Btn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function DeviceCheck() {
  const [model, setModel] = useState("");
  const [result, setResult] = useState<{ ok: boolean | null; msg: string } | null>(null);

  const supported = [
    "iphone xs", "iphone xr", "iphone 11", "iphone 12", "iphone 13", "iphone 14", "iphone 15", "iphone 16",
    "pixel 4", "pixel 5", "pixel 6", "pixel 7", "pixel 8", "pixel 9",
    "galaxy s20", "galaxy s21", "galaxy s22", "galaxy s23", "galaxy s24", "galaxy s25",
    "galaxy z fold", "galaxy z flip", "galaxy note 20",
  ];

  const check = () => {
    const m = model.trim().toLowerCase();
    if (!m) { setResult({ ok: null, msg: "Type your phone model to check." }); return; }
    const hit = supported.find((s) => m.includes(s));
    if (hit) setResult({ ok: true, msg: `${model.trim()} supports eSIM. You're good to go.` });
    else setResult({ ok: false, msg: `We couldn't auto-confirm "${model.trim()}". Most phones from 2018 onward support eSIM — ping support and they'll check.` });
  };

  return (
    <section className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
      <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div>
          <Mono>// DEVICE CHECK</Mono>
          <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: "14px 0 18px" }}>
            Will your phone{" "}
            <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>even do this?</span>
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, margin: 0, maxWidth: 580 }}>
            Almost certainly yes, if it&apos;s from 2018 or later. iPhones from XS onward, Pixels from 4
            onward, Samsung Galaxy S20+ ship with eSIM support.
          </p>
          <div style={{ marginTop: 28, background: "#fff", border: border.thick, borderRadius: 24, boxShadow: shadow.md, padding: 8, display: "flex", alignItems: "center", gap: 6, maxWidth: 520 }}>
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && check()}
              placeholder="e.g. iPhone 15, Pixel 8…"
              style={{ flex: 1, border: "none", outline: "none", padding: "12px 14px", fontFamily: F.display, fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em", background: "transparent", minWidth: 0 }}
            />
            <Btn color="ink" size="md" onClick={check}>Check →</Btn>
          </div>
          {result && (
            <div style={{ marginTop: 18, padding: "14px 18px", background: result.ok === true ? C.mint : result.ok === false ? C.yellow : C.cream2, border: border.base, borderRadius: 14, boxShadow: shadow.sm, maxWidth: 520, fontFamily: F.display, fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>
              {result.ok === true ? "✓ " : result.ok === false ? "? " : ""}
              {result.msg}
            </div>
          )}
        </div>

        <div style={{ background: C.ink, color: C.cream, border: border.thick, borderRadius: 28, boxShadow: shadow.lg, padding: 32 }}>
          <Mono color={C.yellow}>// SUPPORTED · A SHORT LIST</Mono>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
            {[
              { brand: "iPhone", models: "XS, XR, 11, 12, 13, 14, 15, 16 (all variants)" },
              { brand: "Pixel", models: "4, 5, 6, 7, 8, 9" },
              { brand: "Galaxy", models: "S20 onward · Z Fold · Z Flip · Note 20" },
              { brand: "Others", models: "Most flagships from 2020 onward — check yours" },
            ].map((g, i) => (
              <div key={i}>
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 24, letterSpacing: "-0.02em", color: C.cream }}>{g.brand}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85, marginTop: 4 }}>{g.models}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px dashed rgba(250,246,238,0.25)", paddingTop: 16, marginTop: 20, fontSize: 14, lineHeight: 1.55, opacity: 0.85 }}>
            <strong style={{ color: C.coral }}>Important:</strong> some phones bought in mainland China
            ship without eSIM hardware. Double-check the model number before ordering.
          </div>
        </div>
      </div>
    </section>
  );
}
