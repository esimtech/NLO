import { getAllCountries, getBundlesByCountry, seedIfEmpty } from "@/lib/db";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import HeroSection from "@/components/home/HeroSection";
import DifferenceSection from "@/components/home/DifferenceSection";
import EuropeanSection from "@/components/home/EuropeanSection";

export const dynamic = "force-dynamic";

export default function HomePage() {
  seedIfEmpty();
  const countries = getAllCountries();

  const destinations = countries.map((c) => {
    const bundles = getBundlesByCountry(c.id);
    return {
      name: c.name,
      flag: c.flag,
      note: c.carrier_note,
      plan: c.plan_type as "unlimited" | "bundle",
      price: bundles[0] ? String(bundles[0].price) : "",
      slug: c.slug,
    };
  });

  return (
    <div style={{ background: "#FAF6EE" }}>
      <Nav />
      <HeroSection destinations={destinations} />
      <DifferenceSection />
      <EuropeanSection />
      <CTA countries={countries} />
      <Footer />
    </div>
  );
}
