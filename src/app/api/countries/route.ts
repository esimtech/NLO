import { NextResponse } from "next/server";
import { getAllCountries, getBundlesByCountry, seedIfEmpty } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  seedIfEmpty();
  const countries = getAllCountries();
  const result = countries.map((c) => {
    const bundles = getBundlesByCountry(c.id);
    return {
      ...c,
      firstPrice: bundles.length > 0 ? bundles[0].price : "—",
    };
  });
  return NextResponse.json(result);
}
