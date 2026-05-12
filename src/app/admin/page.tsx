"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { C, F, shadow, border, radius } from "@/components/tokens";
import { Wordmark, Mono, Btn } from "@/components/ui";
import type { Country } from "@/lib/db";

type CountryRow = Country & { bundleCount?: number };

export default function AdminDashboard() {
  const [countries, setCountries] = useState<CountryRow[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/countries")
      .then((r) => {
        if (r.status === 401) { router.push("/admin/login"); return null; }
        return r.json();
      })
      .then((data) => { if (data) setCountries(data); });
  }, [router]);

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const toggleActive = async (c: Country) => {
    await fetch(`/api/admin/countries/${c.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: c.active ? 0 : 1 }),
    });
    setCountries((prev) => prev.map((x) => x.id === c.id ? { ...x, active: c.active ? 0 : 1 } : x));
  };

  const deleteCountry = async (id: number) => {
    if (!confirm("Delete this country and all its bundles?")) return;
    await fetch(`/api/admin/countries/${id}`, { method: "DELETE" });
    setCountries((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div style={{ minHeight: "100vh", background: C.cream2 }}>
      {/* Admin nav */}
      <header style={{ background: C.ink, padding: "18px 40px", display: "flex", alignItems: "center", gap: 24, borderBottom: border.base }}>
        <Wordmark size={24} inverse />
        <div style={{ marginLeft: 8 }}>
          <Mono color={C.yellow} size={11}>// ADMIN PANEL</Mono>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 16, alignItems: "center" }}>
          <Link href="/" target="_blank" style={{ color: C.cream, fontFamily: F.mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, textDecoration: "none" }}>
            View site →
          </Link>
          <button onClick={logout} style={{ background: "transparent", border: "1.5px solid rgba(250,246,238,0.3)", borderRadius: 8, padding: "6px 14px", color: C.cream, fontFamily: F.mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", opacity: 0.7 }}>
            Logout
          </button>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px" }}>
        {/* Page header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 36 }}>
          <div>
            <Mono>// COUNTRIES</Mono>
            <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 56, letterSpacing: "-0.035em", lineHeight: 0.9, margin: "10px 0 0" }}>
              Manage destinations.
            </h1>
          </div>
          <Link href="/admin/countries/new">
            <Btn color="blue" size="md">+ Add country</Btn>
          </Link>
        </div>

        {/* Stats strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 36 }}>
          {[
            { n: countries.length.toString(), l: "Total countries" },
            { n: countries.filter((c) => c.active).length.toString(), l: "Active" },
            { n: countries.filter((c) => c.plan_type === "unlimited").length.toString(), l: "Unlimited plans" },
            { n: countries.filter((c) => c.plan_type === "bundle").length.toString(), l: "Bundle only" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#fff", border: border.base, borderRadius: 18, padding: "18px 22px", boxShadow: shadow.sm }}>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 40, letterSpacing: "-0.03em", lineHeight: 1, color: i === 1 ? C.blue : C.ink }}>{s.n}</div>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Countries table */}
        <div style={{ background: "#fff", border: border.base, borderRadius: 24, boxShadow: shadow.sm, overflow: "hidden" }}>
          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 100px", gap: 16, padding: "14px 24px", background: C.cream2, borderBottom: border.base }}>
            {["Country", "Region", "Type", "Carrier", "Status", "Actions"].map((h) => (
              <div key={h} style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7 }}>{h}</div>
            ))}
          </div>

          {countries.length === 0 && (
            <div style={{ padding: "48px 24px", textAlign: "center", opacity: 0.5, fontFamily: F.display, fontSize: 18 }}>
              No countries yet. Add one to get started.
            </div>
          )}

          {countries.map((c, i) => (
            <div key={c.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 100px", gap: 16, padding: "18px 24px", alignItems: "center", borderTop: i === 0 ? "none" : `1px solid ${C.cream2}` }}>
              {/* Country name + flag */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 28 }}>{c.flag}</span>
                <div>
                  <div style={{ fontFamily: F.display, fontWeight: 700, fontSize: 18, letterSpacing: "-0.015em" }}>{c.name}</div>
                  <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: "0.08em", opacity: 0.5 }}>/{c.slug}</div>
                </div>
              </div>
              {/* Region */}
              <div style={{ fontFamily: F.body, fontSize: 14, opacity: 0.8 }}>{c.region}</div>
              {/* Type badge */}
              <div>
                <span style={{ background: c.plan_type === "unlimited" ? C.blue : C.yellow, color: c.plan_type === "unlimited" ? C.cream : C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 999, padding: "3px 10px", fontFamily: F.display, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em" }}>
                  {c.plan_type === "unlimited" ? "UNLIMITED ∞" : "BUNDLE"}
                </span>
                {c.has_number ? (
                  <span style={{ background: C.mint, color: C.ink, border: `1.5px solid ${C.ink}`, borderRadius: 999, padding: "3px 8px", fontFamily: F.display, fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", marginLeft: 6 }}>
                    +#
                  </span>
                ) : null}
              </div>
              {/* Carrier */}
              <div style={{ fontFamily: F.body, fontSize: 14, opacity: 0.8 }}>{c.carrier_name}</div>
              {/* Status */}
              <button onClick={() => toggleActive(c)} style={{ background: c.active ? "#dcfce7" : "#fee2e2", border: `1.5px solid ${c.active ? "#16a34a" : C.coral}`, borderRadius: 8, padding: "4px 12px", cursor: "pointer", fontFamily: F.mono, fontSize: 11, letterSpacing: "0.08em", color: c.active ? "#16a34a" : C.coral }}>
                {c.active ? "ACTIVE" : "HIDDEN"}
              </button>
              {/* Actions */}
              <div style={{ display: "flex", gap: 8 }}>
                <Link href={`/admin/countries/${c.id}`} style={{ background: C.cream2, border: border.base, borderRadius: 8, padding: "6px 12px", fontFamily: F.mono, fontSize: 11, letterSpacing: "0.08em", textDecoration: "none", color: C.ink, cursor: "pointer" }}>
                  Edit
                </Link>
                <button onClick={() => deleteCountry(c.id)} style={{ background: "#fee2e2", border: `1.5px solid ${C.coral}`, borderRadius: 8, padding: "6px 10px", fontFamily: F.mono, fontSize: 11, cursor: "pointer", color: C.coral }}>
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, textAlign: "center" }}>
          <Mono opacity={0.4} size={11}>Changes take effect immediately · data stored in data/nlo.db</Mono>
        </div>
      </div>
    </div>
  );
}
