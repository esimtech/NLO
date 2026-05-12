import { NextRequest, NextResponse } from "next/server";
import { getCountryBySlug, getBundlesByCountry, getAllCountries, seedIfEmpty } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  seedIfEmpty();
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const bundles = getBundlesByCountry(country.id);
  const allCountries = getAllCountries();

  return NextResponse.json({ ...country, bundles, allCountries });
}
