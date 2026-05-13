"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Sticker, Btn, Mono } from "@/components/ui";
import { C, F, shadow, border, radius } from "@/components/tokens";

export default function SupportPage() {
  return (
    <div style={{ background: C.cream }}>
      <Nav />

      {/* Hero */}
      <section className="section-pad" style={{ background: C.cream, paddingTop: "80px", paddingBottom: "80px", borderBottom: border.base, position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", right: -140, top: -100, fontFamily: F.display, fontWeight: 800, fontSize: 880, lineHeight: 1, color: C.mint, opacity: 0.22, pointerEvents: "none", userSelect: "none" }}>∞</div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Sticker color="mint" rotate={-3}>24/7 · REAL HUMANS</Sticker>
            <Mono>// SUPPORT</Mono>
          </div>
          <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(64px, 9vw, 156px)", letterSpacing: "-0.05em", lineHeight: 0.84, margin: 0 }}>
            Stuck? <span style={{ color: C.blue }}>We pick up.</span>
          </h1>
          <p style={{ fontSize: 22, lineHeight: 1.5, margin: 0, maxWidth: 760 }}>
            WhatsApp at <strong>any hour</strong>, any day. Live chat on the site. Email if you
            prefer paper trails. No queue tickets, no bots pretending to be a person named Sarah.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="section-pad" style={{ background: C.cream2, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 40 }}>
            <div>
              <Mono>// PICK YOUR CHANNEL</Mono>
              <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.035em", lineHeight: 0.95, margin: "14px 0 0" }}>
                Three ways to reach us.{" "}
                <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>All staffed.</span>
              </h2>
            </div>
            <Sticker color="coral" rotate={4} size="lg">NO BOTS. NO QUEUES.</Sticker>
          </div>

          <div className="grid-3-col">
            <ChannelCard
              color={C.mint}
              name="WhatsApp"
              status="ONLINE · 24/7"
              line1="Median reply: 1m 40s."
              line2="Best for in-trip emergencies. Reaches the same humans as live chat."
              action="Open WhatsApp →"
              icon="💬"
            />
            <ChannelCard
              color={C.yellow}
              name="Live chat"
              status="ONLINE NOW"
              line1="Median reply: 2 minutes."
              line2="The bubble at the bottom-right of every page. Same team, slightly more screen-friendly."
              action="Start a chat →"
              icon="🗨️"
            />
            <ChannelCard
              color={C.lilac}
              name="Email"
              status="REPLIES <2H"
              line1="hi@nolimitsonline.eu"
              line2="If you want a paper trail, or your question is long. Always answered same business day."
              action="Compose email →"
              icon="✉️"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: C.cream, paddingTop: "100px", paddingBottom: "100px", borderBottom: border.base }}>
        <div className="grid-2-col" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div>
            <Mono>// THE HUMANS</Mono>
            <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: "clamp(40px, 4.5vw, 72px)", letterSpacing: "-0.04em", lineHeight: 0.9, margin: "14px 0 18px" }}>
              A small team.
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 500, color: C.blue }}>Different time zones.</span>
            </h2>
            <p style={{ fontSize: 19, lineHeight: 1.6, margin: 0, maxWidth: 580 }}>
              Support is split across Amsterdam, Lisbon, and Bali — which is how we stay genuinely
              24/7 without robots. Everyone on the team has shipped an eSIM and travelled with it.
            </p>
          </div>
          <div className="grid-3-col" style={{ gap: 18 }}>
            {[
              { name: "Mira", city: "Amsterdam · NL", shift: "EU mornings · afternoons", flag: "🇳🇱" },
              { name: "Tomás", city: "Lisbon · PT", shift: "EU evenings", flag: "🇵🇹" },
              { name: "Ayu", city: "Bali · ID", shift: "Overnight in Europe", flag: "🇮🇩" },
            ].map((t) => (
              <div key={t.name} style={{ background: "#fff", border: border.thick, borderRadius: 24, boxShadow: shadow.md, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ width: 64, height: 64, borderRadius: 999, background: C.yellow, border: border.base, boxShadow: shadow.sm, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.display, fontWeight: 800, fontSize: 28, letterSpacing: "-0.02em" }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>
                    {t.name} <span style={{ fontSize: 18 }}>{t.flag}</span>
                  </div>
                  <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginTop: 2 }}>{t.city}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 8, opacity: 0.85 }}>{t.shift}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      <Footer />
    </div>
  );
}

function ChannelCard({ color, name, status, line1, line2, action, icon }: {
  color: string; name: string; status: string; line1: string; line2: string; action: string; icon: string;
}) {
  return (
    <div style={{ background: color, border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 32, display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden", minHeight: 380 }}>
      <div style={{ width: 72, height: 72, borderRadius: 18, background: C.cream, border: border.base, boxShadow: shadow.sm, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 38, letterSpacing: "-0.03em", lineHeight: 0.95 }}>{name}</div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8, background: "rgba(14,14,20,0.1)", border: `1.5px solid ${C.ink}`, borderRadius: 999, padding: "4px 12px", fontFamily: F.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: C.ink, boxShadow: "0 0 0 3px rgba(14,14,20,0.15)" }} />
          {status}
        </div>
      </div>
      <div style={{ fontSize: 17, lineHeight: 1.55, marginTop: 4 }}>
        <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em" }}>{line1}</div>
        <div style={{ opacity: 0.85, marginTop: 6 }}>{line2}</div>
      </div>
      <div style={{ marginTop: "auto" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.ink, color: C.cream, border: border.base, borderRadius: 999, padding: "14px 24px", fontFamily: F.display, fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em", boxShadow: shadow.sm }}>
          {action}
        </span>
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [filter, setFilter] = useState("All");

  const items = [
    { cat: "Activation", q: "I scanned the QR but nothing happened.", a: "Open Settings → Mobile data → Add eSIM, then point the camera. If you get a \"can't add eSIM\" error, it's usually one of two things: you've reached your phone's eSIM slot limit (delete an old unused one), or the QR has already been redeemed once. WhatsApp us and we'll re-issue." },
    { cat: "Activation", q: "When should I activate?", a: "Anywhere from 7 days before to the moment you land. We recommend installing the profile at home (so you can troubleshoot on Wi-Fi if needed) but leaving the line OFF until you board the flight." },
    { cat: "Coverage", q: "Why don't I see 5G in [country]?", a: "Either: the area is genuinely 4G only, or your phone doesn't support the local 5G bands. The country page lists which 5G bands the carrier uses — match against your phone's spec sheet." },
    { cat: "Billing", q: "Will I be charged again automatically?", a: "No. Auto-renew is OFF by default. The plan you bought expires, and that's it. If you want auto-renew, you can opt in from the app." },
    { cat: "Billing", q: "Can I get a refund?", a: "Yes, if the eSIM hasn't been activated yet. Once you've connected to a network we can't roll back the carrier charge — but if there's a coverage problem, WhatsApp us and we'll work it out." },
    { cat: "Numbers", q: "When do I get a local phone number?", a: "In every country marked \"+ NUMBER\" on the destinations page — about 40 of them. The number is issued at the moment you activate the eSIM." },
    { cat: "Numbers", q: "Does it work for WhatsApp / 2FA?", a: "Yes. The number can receive SMS for two-factor codes and you can register WhatsApp / Telegram / Line against it." },
    { cat: "Device", q: "My phone doesn't support eSIM. Now what?", a: "Then unfortunately we can't help you with this product — eSIMs are software-only. Drop us a line with your model + region and we'll confirm." },
  ];

  const cats = ["All", "Activation", "Coverage", "Billing", "Numbers", "Device"];
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <section className="section-pad" style={{ background: C.cream, paddingTop: "120px", paddingBottom: "120px", borderBottom: border.base }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Mono>// SELF-SERVE FIRST</Mono>
        <h2 style={{ fontFamily: F.display, fontWeight: 700, fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.035em", lineHeight: 0.95, margin: "14px 0 28px" }}>
          The questions, answered.
        </h2>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} style={{ background: filter === c ? C.ink : "transparent", color: filter === c ? C.cream : C.ink, border: border.base, borderRadius: radius.pill, padding: "8px 16px", cursor: "pointer", fontFamily: F.display, fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {filtered.map((it, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} style={{ textAlign: "left", cursor: "pointer", background: open === i ? "#fff" : C.cream2, border: border.thick, borderRadius: 24, boxShadow: "4px 4px 0 #0E0E14", padding: "22px 26px", color: C.ink, display: "flex", flexDirection: "column", gap: 14, font: "inherit" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                  <Mono color={C.blue} opacity={1} size={11}>// {it.cat.toUpperCase()}</Mono>
                  <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{it.q}</span>
                </div>
                <span style={{ width: 36, height: 36, borderRadius: 999, background: open === i ? C.blue : "transparent", border: border.base, color: open === i ? C.cream : C.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.display, fontWeight: 800, fontSize: 22, flexShrink: 0 }}>
                  {open === i ? "−" : "+"}
                </span>
              </div>
              {open === i && <div style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 880 }}>{it.a}</div>}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 32, background: C.ink, color: C.cream, border: border.thick, borderRadius: 22, boxShadow: shadow.md, padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <div>
            <Mono color={C.yellow}>// CAN&apos;T FIND IT?</Mono>
            <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.015em", marginTop: 4 }}>
              WhatsApp answers in under two minutes. No queue ticket.
            </div>
          </div>
          <Btn color="yellow" size="md">Message support →</Btn>
        </div>
      </div>
    </section>
  );
}
