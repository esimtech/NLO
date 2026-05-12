import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getCountryById, updateCountry, deleteCountry, getBundlesByCountryAdmin } from "@/lib/db";

export const dynamic = "force-dynamic";

async function guard() {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return null;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = await guard(); if (err) return err;
  const { id } = await params;
  const country = getCountryById(Number(id));
  if (!country) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const bundles = getBundlesByCountryAdmin(country.id);
  return NextResponse.json({ ...country, bundles });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = await guard(); if (err) return err;
  const { id } = await params;
  const body = await req.json();
  updateCountry(Number(id), body);
  return NextResponse.json(getCountryById(Number(id)));
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = await guard(); if (err) return err;
  const { id } = await params;
  deleteCountry(Number(id));
  return NextResponse.json({ ok: true });
}
