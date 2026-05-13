"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { C, F, shadow, border } from "@/components/tokens";
import { Wordmark, Mono, Btn } from "@/components/ui";

const REGIONS = ["Europe", "Asia", "Americas", "Middle East", "Africa", "Oceania"];

export default function NewCountryPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    slug: "",
    name: "",
    flag: "",
    region: "Europe",
    plan_type: "unlimited",
    has_number: false,
    carrier_name: "",
    carrier_note: "",
    hero_description: "",
    promise_text: "",
    why_no_local: "",
    active: true,
    display_order: 0,
  });

  const set = (k: string, v: unknown) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/countries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, has_number: form.has_number ? 1 : 0, active: form.active ? 1 : 0 }),
      });
      if (!res.ok) throw new Error("Failed to create country");
      const country = await res.json();
      router.push(`/admin/countries/${country.id}`);
    } catch {
      setError("Something went wrong. Please try again.");
      setSaving(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: C.cream2 }}>
      <header style={{ background: C.ink, padding: "18px 40px", display: "flex", alignItems: "center", gap: 24, borderBottom: border.base }}>
        <Wordmark size={24} inverse />
        <div style={{ marginLeft: 8 }}>
          <Mono color={C.yellow} size={11}>// ADMIN PANEL</Mono>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/admin" style={{ color: C.cream, fontFamily: F.mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, textDecoration: "none" }}>
            ← Back to dashboard
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px clamp(16px, 4vw, 40px)" }}>
        <div style={{ marginBottom: 36 }}>
          <Mono>// NEW COUNTRY</Mono>
          <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 48, letterSpacing: "-0.035em", lineHeight: 0.9, margin: "10px 0 0" }}>
            Add destination.
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Basic info */}
          <Section title="Basic info">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Country name" required>
                <input style={inputStyle} value={form.name} onChange={(e) => {
                  const name = e.target.value;
                  const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                  setForm((p) => ({ ...p, name, slug }));
                }} placeholder="e.g. Japan" required />
              </Field>
              <Field label="Slug (URL path)" required>
                <input style={inputStyle} value={form.slug} onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))} placeholder="e.g. japan" required />
              </Field>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
              <Field label="Flag emoji" required>
                <input style={inputStyle} value={form.flag} onChange={(e) => set("flag", e.target.value)} placeholder="🇯🇵" required />
              </Field>
              <Field label="Region">
                <select style={inputStyle} value={form.region} onChange={(e) => set("region", e.target.value)}>
                  {REGIONS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </Field>
            </div>
          </Section>

          {/* Plan type */}
          <Section title="Plan type">
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { value: "unlimited", label: "UNLIMITED ∞", desc: "One plan, billed monthly", bg: C.blue, fg: C.cream },
                { value: "bundle", label: "BUNDLE", desc: "Data bundles by GB or duration", bg: C.yellow, fg: C.ink },
              ].map((pt) => (
                <button
                  key={pt.value}
                  type="button"
                  onClick={() => set("plan_type", pt.value)}
                  style={{
                    flex: 1, padding: "16px 20px", borderRadius: 14, cursor: "pointer", textAlign: "left",
                    background: form.plan_type === pt.value ? pt.bg : "#fff",
                    border: form.plan_type === pt.value ? `2px solid ${C.ink}` : border.base,
                    boxShadow: form.plan_type === pt.value ? shadow.sm : "none",
                  }}
                >
                  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 16, color: form.plan_type === pt.value ? pt.fg : C.ink }}>{pt.label}</div>
                  <div style={{ fontFamily: F.body, fontSize: 13, opacity: 0.7, marginTop: 4, color: form.plan_type === pt.value ? pt.fg : C.ink }}>{pt.desc}</div>
                </button>
              ))}
            </div>
            {form.plan_type === "unlimited" && (
              <label style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16, cursor: "pointer" }}>
                <input type="checkbox" checked={form.has_number} onChange={(e) => set("has_number", e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: C.blue }} />
                <span style={{ fontFamily: F.body, fontSize: 14 }}>Includes local phone number (+# option)</span>
              </label>
            )}
          </Section>

          {/* Carrier */}
          <Section title="Carrier">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Carrier name">
                <input style={inputStyle} value={form.carrier_name} onChange={(e) => set("carrier_name", e.target.value)} placeholder="e.g. NTT Docomo" />
              </Field>
              <Field label="Carrier note">
                <input style={inputStyle} value={form.carrier_note} onChange={(e) => set("carrier_note", e.target.value)} placeholder="e.g. Japan's largest network" />
              </Field>
            </div>
          </Section>

          {/* Content */}
          <Section title="Page content">
            <Field label="Hero description">
              <textarea style={{ ...inputStyle, height: 80, resize: "vertical" }} value={form.hero_description} onChange={(e) => set("hero_description", e.target.value)} placeholder="Short description shown on the country hero section" />
            </Field>
            <div style={{ marginTop: 20 }}>
              <Field label="Promise text">
                <input style={inputStyle} value={form.promise_text} onChange={(e) => set("promise_text", e.target.value)} placeholder="e.g. Stay connected across all 47 prefectures" />
              </Field>
            </div>
            {form.plan_type === "bundle" && (
              <div style={{ marginTop: 20 }}>
                <Field label="Why no local eSIM (bundle explanation)">
                  <textarea style={{ ...inputStyle, height: 80, resize: "vertical" }} value={form.why_no_local} onChange={(e) => set("why_no_local", e.target.value)} placeholder="Explain why this destination uses data bundles instead of a local eSIM" />
                </Field>
              </div>
            )}
          </Section>

          {/* Settings */}
          <Section title="Settings">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Display order">
                <input style={inputStyle} type="number" value={form.display_order} onChange={(e) => set("display_order", Number(e.target.value))} min={0} />
              </Field>
              <Field label="Status">
                <select style={inputStyle} value={form.active ? "active" : "hidden"} onChange={(e) => set("active", e.target.value === "active")}>
                  <option value="active">Active (visible)</option>
                  <option value="hidden">Hidden</option>
                </select>
              </Field>
            </div>
          </Section>

          {error && (
            <div style={{ background: "#fee2e2", border: `1.5px solid ${C.coral}`, borderRadius: 12, padding: "12px 16px", marginBottom: 20, fontFamily: F.body, fontSize: 14, color: C.coral }}>
              {error}
            </div>
          )}

          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Link href="/admin">
              <Btn color="outline" size="md">Cancel</Btn>
            </Link>
            <button type="submit" disabled={saving} style={{
              background: C.blue, color: C.cream, border: `2px solid ${C.ink}`, borderRadius: 12,
              padding: "12px 28px", fontFamily: F.display, fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em",
              cursor: saving ? "not-allowed" : "pointer", opacity: saving ? 0.6 : 1,
              boxShadow: saving ? "none" : shadow.sm,
            }}>
              {saving ? "Creating…" : "Create country →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: border.base, borderRadius: 20, padding: "28px 28px 24px", marginBottom: 24, boxShadow: shadow.sm }}>
      <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5, marginBottom: 18 }}>{title}</div>
      {children}
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontFamily: F.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, marginBottom: 8 }}>
        {label}{required && <span style={{ color: C.coral, marginLeft: 4 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px", fontFamily: F.body, fontSize: 14,
  border: border.base, borderRadius: 10, background: C.cream2,
  outline: "none", boxSizing: "border-box", color: C.ink,
};
