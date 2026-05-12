"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { C, F, shadow, border } from "@/components/tokens";
import { Wordmark, Mono, Btn } from "@/components/ui";
import type { Country, Bundle } from "@/lib/db";

const REGIONS = ["Europe", "Asia", "Americas", "Middle East", "Africa", "Oceania"];
const COLORS = ["cream", "blue", "yellow", "coral", "mint", "lilac", "ink"];
const COLOR_MAP: Record<string, string> = {
  cream: C.cream2, blue: C.blue, yellow: C.yellow,
  coral: "#FF6B6B", mint: "#7BE0B5", lilac: "#C9B6FF", ink: C.ink,
};

type BundleRow = Bundle & { _editing?: boolean; _new?: boolean };

const emptyBundle = (): Omit<BundleRow, "id" | "country_id"> => ({
  name: "", data_amount: "", price: "", period: "", per_day: "",
  value_label: "", features: "[]", checkout_url: "", is_featured: 0,
  badge: "", color: "cream", display_order: 0, active: 1,
  _editing: true, _new: true,
});

export default function EditCountryPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const [country, setCountry] = useState<Country | null>(null);
  const [bundles, setBundles] = useState<BundleRow[]>([]);
  const [saving, setSaving] = useState(false);
  const [savingBundle, setSavingBundle] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/countries/${id}`)
      .then((r) => { if (r.status === 401) { router.push("/admin/login"); return null; } return r.json(); })
      .then((data) => {
        if (!data) return;
        const { bundles: b, ...c } = data;
        setCountry(c);
        setBundles((b || []).map((x: Bundle) => ({ ...x, _editing: false, _new: false })));
      });
  }, [id, router]);

  const saveCountry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!country) return;
    setSaving(true);
    setError("");
    try {
      await fetch(`/api/admin/countries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(country),
      });
      setSaving(false);
    } catch {
      setError("Failed to save country.");
      setSaving(false);
    }
  };

  const setC = (k: string, v: unknown) => setCountry((p) => p ? { ...p, [k]: v } : p);

  const saveBundle = async (b: BundleRow) => {
    setSavingBundle(b._new ? -1 : b.id);
    try {
      let features = b.features;
      if (typeof features === "string") {
        try { JSON.parse(features); } catch { features = JSON.stringify(features.split("\n").filter(Boolean)); }
      }
      const payload = { ...b, features, _editing: undefined, _new: undefined };
      if (b._new) {
        const res = await fetch("/api/admin/bundles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, country_id: id }),
        });
        const created = await res.json();
        setBundles((prev) => prev.map((x) => x._new ? { ...created, _editing: false, _new: false } : x));
      } else {
        const res = await fetch(`/api/admin/bundles/${b.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const updated = await res.json();
        setBundles((prev) => prev.map((x) => x.id === b.id ? { ...updated, _editing: false, _new: false } : x));
      }
    } finally {
      setSavingBundle(null);
    }
  };

  const deleteBundle = async (b: BundleRow) => {
    if (b._new) { setBundles((prev) => prev.filter((x) => x !== b)); return; }
    if (!confirm("Delete this bundle?")) return;
    await fetch(`/api/admin/bundles/${b.id}`, { method: "DELETE" });
    setBundles((prev) => prev.filter((x) => x.id !== b.id));
  };

  const setBundle = (idx: number, k: string, v: unknown) =>
    setBundles((prev) => prev.map((b, i) => i === idx ? { ...b, [k]: v } : b));

  const addBundle = () =>
    setBundles((prev) => [...prev, { ...emptyBundle(), id: 0, country_id: id }]);

  const featuresDisplay = (raw: string | string[]) => {
    if (Array.isArray(raw)) return raw.join("\n");
    try { const p = JSON.parse(raw); return Array.isArray(p) ? p.join("\n") : raw; } catch { return raw; }
  };

  if (!country) {
    return (
      <div style={{ minHeight: "100vh", background: C.cream2, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Mono opacity={0.4}>Loading…</Mono>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.cream2 }}>
      <header style={{ background: C.ink, padding: "18px 40px", display: "flex", alignItems: "center", gap: 24, borderBottom: border.base }}>
        <Wordmark size={24} inverse />
        <div style={{ marginLeft: 8 }}>
          <Mono color={C.yellow} size={11}>// ADMIN PANEL</Mono>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16, alignItems: "center" }}>
          <Link href={`/${country.slug}`} target="_blank" style={{ color: C.cream, fontFamily: F.mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, textDecoration: "none" }}>
            View page →
          </Link>
          <Link href="/admin" style={{ color: C.cream, fontFamily: F.mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, textDecoration: "none" }}>
            ← Dashboard
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 36 }}>
          <span style={{ fontSize: 48 }}>{country.flag}</span>
          <div>
            <Mono>// EDIT COUNTRY</Mono>
            <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 48, letterSpacing: "-0.035em", lineHeight: 0.9, margin: "6px 0 0" }}>
              {country.name}
            </h1>
          </div>
        </div>

        {/* Country form */}
        <form onSubmit={saveCountry}>
          <Section title="Basic info">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Country name">
                <input style={inputStyle} value={country.name} onChange={(e) => setC("name", e.target.value)} required />
              </Field>
              <Field label="Slug">
                <input style={inputStyle} value={country.slug} onChange={(e) => setC("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))} required />
              </Field>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
              <Field label="Flag emoji">
                <input style={inputStyle} value={country.flag} onChange={(e) => setC("flag", e.target.value)} />
              </Field>
              <Field label="Region">
                <select style={inputStyle} value={country.region} onChange={(e) => setC("region", e.target.value)}>
                  {REGIONS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </Field>
            </div>
          </Section>

          <Section title="Plan type">
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { value: "unlimited", label: "UNLIMITED ∞", bg: C.blue, fg: C.cream },
                { value: "bundle", label: "BUNDLE", bg: C.yellow, fg: C.ink },
              ].map((pt) => (
                <button key={pt.value} type="button" onClick={() => setC("plan_type", pt.value)}
                  style={{
                    flex: 1, padding: "14px 20px", borderRadius: 12, cursor: "pointer", textAlign: "left",
                    background: country.plan_type === pt.value ? pt.bg : "#fff",
                    border: country.plan_type === pt.value ? `2px solid ${C.ink}` : border.base,
                    boxShadow: country.plan_type === pt.value ? shadow.sm : "none",
                  }}>
                  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 15, color: country.plan_type === pt.value ? pt.fg : C.ink }}>{pt.label}</div>
                </button>
              ))}
            </div>
            {country.plan_type === "unlimited" && (
              <label style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 14, cursor: "pointer" }}>
                <input type="checkbox" checked={!!country.has_number} onChange={(e) => setC("has_number", e.target.checked ? 1 : 0)}
                  style={{ width: 18, height: 18, accentColor: C.blue }} />
                <span style={{ fontFamily: F.body, fontSize: 14 }}>Includes local phone number</span>
              </label>
            )}
          </Section>

          <Section title="Carrier">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Carrier name">
                <input style={inputStyle} value={country.carrier_name || ""} onChange={(e) => setC("carrier_name", e.target.value)} />
              </Field>
              <Field label="Carrier note">
                <input style={inputStyle} value={country.carrier_note || ""} onChange={(e) => setC("carrier_note", e.target.value)} />
              </Field>
            </div>
          </Section>

          <Section title="Page content">
            <Field label="Hero description">
              <textarea style={{ ...inputStyle, height: 72, resize: "vertical" }} value={country.hero_description || ""} onChange={(e) => setC("hero_description", e.target.value)} />
            </Field>
            <div style={{ marginTop: 16 }}>
              <Field label="Promise text">
                <input style={inputStyle} value={country.promise_text || ""} onChange={(e) => setC("promise_text", e.target.value)} />
              </Field>
            </div>
            {country.plan_type === "bundle" && (
              <div style={{ marginTop: 16 }}>
                <Field label="Why no local eSIM">
                  <textarea style={{ ...inputStyle, height: 72, resize: "vertical" }} value={country.why_no_local || ""} onChange={(e) => setC("why_no_local", e.target.value)} />
                </Field>
              </div>
            )}
          </Section>

          <Section title="Settings">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <Field label="Display order">
                <input style={inputStyle} type="number" value={country.display_order || 0} onChange={(e) => setC("display_order", Number(e.target.value))} min={0} />
              </Field>
              <Field label="Status">
                <select style={inputStyle} value={country.active ? "active" : "hidden"} onChange={(e) => setC("active", e.target.value === "active" ? 1 : 0)}>
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

          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginBottom: 48 }}>
            <button type="submit" disabled={saving} style={{
              background: C.ink, color: C.cream, border: `2px solid ${C.ink}`, borderRadius: 12,
              padding: "12px 28px", fontFamily: F.display, fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em",
              cursor: saving ? "not-allowed" : "pointer", opacity: saving ? 0.6 : 1,
              boxShadow: saving ? "none" : shadow.sm,
            }}>
              {saving ? "Saving…" : "Save country ✓"}
            </button>
          </div>
        </form>

        {/* Bundles section */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <Mono>// BUNDLES</Mono>
              <h2 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 32, letterSpacing: "-0.03em", margin: "6px 0 0" }}>
                Manage plans.
              </h2>
            </div>
            <button onClick={addBundle} style={{
              background: C.blue, color: C.cream, border: `2px solid ${C.ink}`, borderRadius: 12,
              padding: "10px 22px", fontFamily: F.display, fontWeight: 800, fontSize: 14, letterSpacing: "-0.01em",
              cursor: "pointer", boxShadow: shadow.sm,
            }}>
              + Add bundle
            </button>
          </div>

          {bundles.length === 0 && (
            <div style={{ background: "#fff", border: border.base, borderRadius: 20, padding: "40px 24px", textAlign: "center", boxShadow: shadow.sm }}>
              <div style={{ fontFamily: F.display, fontSize: 20, opacity: 0.4 }}>No bundles yet.</div>
              <div style={{ fontFamily: F.mono, fontSize: 12, opacity: 0.4, marginTop: 8 }}>Add a bundle to make this country bookable.</div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {bundles.map((b, idx) => (
              <div key={b._new ? `new-${idx}` : b.id} style={{ background: "#fff", border: b._editing ? `2px solid ${C.blue}` : border.base, borderRadius: 20, overflow: "hidden", boxShadow: shadow.sm }}>
                {/* Bundle header */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "16px 24px", background: b._editing ? `${C.blue}12` : C.cream2,
                  borderBottom: b._editing ? `1.5px solid ${C.blue}30` : `1px solid ${C.cream2}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 14, height: 14, borderRadius: 4, background: COLOR_MAP[b.color] || C.cream2, border: border.base }} />
                    <div>
                      <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 16 }}>{b.name || "New bundle"}</div>
                      <div style={{ fontFamily: F.mono, fontSize: 11, opacity: 0.5, marginTop: 2 }}>
                        {b.data_amount} · {b.period}d · €{b.price}
                        {b.is_featured ? " · ★ Featured" : ""}
                        {!b.active ? " · HIDDEN" : ""}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {!b._editing && (
                      <button onClick={() => setBundle(idx, "_editing", true)}
                        style={{ background: C.cream2, border: border.base, borderRadius: 8, padding: "6px 14px", fontFamily: F.mono, fontSize: 11, cursor: "pointer" }}>
                        Edit
                      </button>
                    )}
                    <button onClick={() => deleteBundle(b)}
                      style={{ background: "#fee2e2", border: `1.5px solid ${C.coral}`, borderRadius: 8, padding: "6px 10px", fontFamily: F.mono, fontSize: 11, cursor: "pointer", color: C.coral }}>
                      ✕
                    </button>
                  </div>
                </div>

                {/* Bundle edit form */}
                {b._editing && (
                  <div style={{ padding: "24px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <Field label="Bundle name">
                        <input style={inputStyle} value={b.name} onChange={(e) => setBundle(idx, "name", e.target.value)} placeholder="e.g. Light 5GB" />
                      </Field>
                      <Field label="Data amount">
                        <input style={inputStyle} value={b.data_amount} onChange={(e) => setBundle(idx, "data_amount", e.target.value)} placeholder="5 GB or ∞" />
                      </Field>
                      <Field label="Price (€)">
                        <input style={inputStyle} type="number" value={b.price} onChange={(e) => setBundle(idx, "price", Number(e.target.value))} min={0} step={0.01} />
                      </Field>
                      <Field label="Period (days)">
                        <input style={inputStyle} type="number" value={b.period} onChange={(e) => setBundle(idx, "period", Number(e.target.value))} min={1} />
                      </Field>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <Field label="Per day">
                        <input style={inputStyle} value={b.per_day} onChange={(e) => setBundle(idx, "per_day", e.target.value)} placeholder="e.g. €0.71/day" />
                      </Field>
                      <Field label="Value label">
                        <input style={inputStyle} value={b.value_label} onChange={(e) => setBundle(idx, "value_label", e.target.value)} placeholder="e.g. Best value" />
                      </Field>
                      <Field label="Badge text">
                        <input style={inputStyle} value={b.badge} onChange={(e) => setBundle(idx, "badge", e.target.value)} placeholder="e.g. MOST POPULAR" />
                      </Field>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <Field label="Checkout URL (external)">
                        <input style={{ ...inputStyle, fontFamily: F.mono, fontSize: 12 }} value={b.checkout_url} onChange={(e) => setBundle(idx, "checkout_url", e.target.value)} placeholder="https://checkout.example.com/bundle/..." />
                      </Field>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <Field label="Features (one per line)">
                        <textarea
                          style={{ ...inputStyle, height: 90, resize: "vertical", fontFamily: F.mono, fontSize: 12 }}
                          value={featuresDisplay(b.features)}
                          onChange={(e) => setBundle(idx, "features", e.target.value)}
                          placeholder={"Unlimited data\nLocal number included\nNo speed throttling"}
                        />
                      </Field>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
                      <Field label="Card color">
                        <select style={inputStyle} value={b.color} onChange={(e) => setBundle(idx, "color", e.target.value)}>
                          {COLORS.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </Field>
                      <Field label="Display order">
                        <input style={inputStyle} type="number" value={b.display_order} onChange={(e) => setBundle(idx, "display_order", Number(e.target.value))} min={0} />
                      </Field>
                      <Field label="Featured">
                        <select style={inputStyle} value={b.is_featured ? "yes" : "no"} onChange={(e) => setBundle(idx, "is_featured", e.target.value === "yes" ? 1 : 0)}>
                          <option value="no">No</option>
                          <option value="yes">Yes ★</option>
                        </select>
                      </Field>
                      <Field label="Status">
                        <select style={inputStyle} value={b.active ? "active" : "hidden"} onChange={(e) => setBundle(idx, "active", e.target.value === "active" ? 1 : 0)}>
                          <option value="active">Active</option>
                          <option value="hidden">Hidden</option>
                        </select>
                      </Field>
                    </div>

                    <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                      {!b._new && (
                        <button type="button" onClick={() => setBundle(idx, "_editing", false)}
                          style={{ background: C.cream2, border: border.base, borderRadius: 10, padding: "9px 20px", fontFamily: F.mono, fontSize: 12, cursor: "pointer" }}>
                          Cancel
                        </button>
                      )}
                      <button type="button" onClick={() => saveBundle(b)} disabled={savingBundle !== null}
                        style={{
                          background: C.blue, color: C.cream, border: `2px solid ${C.ink}`, borderRadius: 10,
                          padding: "9px 24px", fontFamily: F.display, fontWeight: 800, fontSize: 14,
                          cursor: "pointer", boxShadow: shadow.sm, opacity: savingBundle !== null ? 0.6 : 1,
                        }}>
                        {savingBundle !== null ? "Saving…" : b._new ? "Create bundle →" : "Save bundle ✓"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, textAlign: "center" }}>
            <Mono opacity={0.4} size={11}>Bundles are shown on the country page in display_order · checkout_url opens in a new tab</Mono>
          </div>
        </div>
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

function Field({ label, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontFamily: F.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, marginBottom: 8 }}>
        {label}
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
