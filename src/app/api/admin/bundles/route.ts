import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createBundle, getBundlesByCountryAdmin } from "@/lib/db";

export const dynamic = "force-dynamic";

async function guard() {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return null;
}

export async function POST(req: NextRequest) {
  const err = await guard(); if (err) return err;
  const body = await req.json();
  const bundle = createBundle({
    country_id: body.country_id,
    name: body.name,
    data_amount: body.data_amount || "∞",
    price: body.price,
    period: body.period,
    per_day: body.per_day || "",
    value_label: body.value_label || "",
    features: JSON.stringify(Array.isArray(body.features) ? body.features : []),
    checkout_url: body.checkout_url || "",
    is_featured: body.is_featured ? 1 : 0,
    badge: body.badge || "",
    color: body.color || "cream",
    display_order: body.display_order || 0,
    active: body.active !== false ? 1 : 0,
  });
  return NextResponse.json(bundle, { status: 201 });
}
