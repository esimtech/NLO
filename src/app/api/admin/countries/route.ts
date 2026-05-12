import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getAllCountriesAdmin, createCountry, seedIfEmpty } from "@/lib/db";

export const dynamic = "force-dynamic";

async function guard() {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return null;
}

export async function GET() {
  const err = await guard(); if (err) return err;
  seedIfEmpty();
  return NextResponse.json(getAllCountriesAdmin());
}

export async function POST(req: NextRequest) {
  const err = await guard(); if (err) return err;
  const body = await req.json();
  const country = createCountry({
    slug: body.slug,
    name: body.name,
    flag: body.flag,
    region: body.region,
    plan_type: body.plan_type,
    has_number: body.has_number ? 1 : 0,
    carrier_name: body.carrier_name || "",
    carrier_note: body.carrier_note || "",
    hero_description: body.hero_description || "",
    promise_text: body.promise_text || "",
    why_no_local: body.why_no_local || "",
    active: body.active !== false ? 1 : 0,
    display_order: body.display_order || 0,
  });
  return NextResponse.json(country, { status: 201 });
}
