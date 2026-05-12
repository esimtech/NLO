import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getBundleById, updateBundle, deleteBundle } from "@/lib/db";

export const dynamic = "force-dynamic";

async function guard() {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return null;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = await guard(); if (err) return err;
  const { id } = await params;
  const body = await req.json();
  // Serialize features array if provided
  if (Array.isArray(body.features)) body.features = JSON.stringify(body.features);
  updateBundle(Number(id), body);
  return NextResponse.json(getBundleById(Number(id)));
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const err = await guard(); if (err) return err;
  const { id } = await params;
  deleteBundle(Number(id));
  return NextResponse.json({ ok: true });
}
