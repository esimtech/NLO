"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { C, F, shadow, border } from "@/components/tokens";
import { Wordmark, Btn, Mono } from "@/components/ui";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Wrong password. Try again.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: C.cream2, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 460, padding: "0 24px" }}>
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <Wordmark size={32} />
          <div style={{ marginTop: 12 }}>
            <Mono>// ADMIN PANEL</Mono>
          </div>
        </div>

        <div style={{ background: "#fff", border: border.thick, borderRadius: 32, boxShadow: shadow.lg, padding: 40 }}>
          <h1 style={{ fontFamily: F.display, fontWeight: 800, fontSize: 40, letterSpacing: "-0.03em", lineHeight: 0.95, margin: "0 0 28px" }}>
            Sign in.
          </h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              autoFocus
              required
              style={{ border: border.base, borderRadius: 14, padding: "14px 18px", fontFamily: F.display, fontWeight: 600, fontSize: 18, outline: "none", background: C.cream, color: C.ink }}
            />
            {error && (
              <div style={{ padding: "10px 14px", background: "#FFE4E4", border: `2px solid ${C.coral}`, borderRadius: 10, fontFamily: F.display, fontWeight: 600, fontSize: 15, color: C.coral }}>
                {error}
              </div>
            )}
            <Btn color="ink" size="lg" type="submit" disabled={loading}>
              {loading ? "Checking…" : "Enter admin →"}
            </Btn>
          </form>
        </div>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a href="/" style={{ fontFamily: F.mono, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5, textDecoration: "none", color: C.ink }}>
            ← Back to site
          </a>
        </div>
      </div>
    </div>
  );
}
