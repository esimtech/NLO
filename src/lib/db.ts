import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DATA_DIR = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "nlo.db");

let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (_db) return _db;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  _db = new Database(DB_PATH);
  _db.pragma("journal_mode = WAL");
  _db.pragma("foreign_keys = ON");
  initSchema(_db);
  return _db;
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS countries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      flag TEXT NOT NULL,
      region TEXT NOT NULL,
      plan_type TEXT NOT NULL DEFAULT 'bundle',
      has_number INTEGER NOT NULL DEFAULT 0,
      carrier_name TEXT NOT NULL DEFAULT '',
      carrier_note TEXT NOT NULL DEFAULT '',
      hero_description TEXT NOT NULL DEFAULT '',
      promise_text TEXT NOT NULL DEFAULT '',
      why_no_local TEXT NOT NULL DEFAULT '',
      active INTEGER NOT NULL DEFAULT 1,
      display_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS bundles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      country_id INTEGER NOT NULL REFERENCES countries(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      data_amount TEXT NOT NULL DEFAULT '∞',
      price TEXT NOT NULL,
      period TEXT NOT NULL,
      per_day TEXT NOT NULL DEFAULT '',
      value_label TEXT NOT NULL DEFAULT '',
      features TEXT NOT NULL DEFAULT '[]',
      checkout_url TEXT NOT NULL DEFAULT '',
      is_featured INTEGER NOT NULL DEFAULT 0,
      badge TEXT NOT NULL DEFAULT '',
      color TEXT NOT NULL DEFAULT 'cream',
      display_order INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS faqs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      country_id INTEGER REFERENCES countries(id) ON DELETE CASCADE,
      page TEXT,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      display_order INTEGER NOT NULL DEFAULT 0
    );
  `);
}

// ── Country queries ──────────────────────────────────────────

export interface Country {
  id: number;
  slug: string;
  name: string;
  flag: string;
  region: string;
  plan_type: "unlimited" | "bundle";
  has_number: number;
  carrier_name: string;
  carrier_note: string;
  hero_description: string;
  promise_text: string;
  why_no_local: string;
  active: number;
  display_order: number;
}

export interface Bundle {
  id: number;
  country_id: number;
  name: string;
  data_amount: string;
  price: string;
  period: string;
  per_day: string;
  value_label: string;
  features: string; // JSON string
  checkout_url: string;
  is_featured: number;
  badge: string;
  color: string;
  display_order: number;
  active: number;
}

export interface FAQ {
  id: number;
  country_id: number | null;
  page: string | null;
  question: string;
  answer: string;
  display_order: number;
}

export function getAllCountries(): Country[] {
  return getDb()
    .prepare("SELECT * FROM countries WHERE active = 1 ORDER BY display_order, name")
    .all() as Country[];
}

export function getAllCountriesAdmin(): Country[] {
  return getDb()
    .prepare("SELECT * FROM countries ORDER BY display_order, name")
    .all() as Country[];
}

export function getCountryBySlug(slug: string): Country | null {
  return (
    (getDb()
      .prepare("SELECT * FROM countries WHERE slug = ? AND active = 1")
      .get(slug) as Country) ?? null
  );
}

export function getCountryById(id: number): Country | null {
  return (
    (getDb()
      .prepare("SELECT * FROM countries WHERE id = ?")
      .get(id) as Country) ?? null
  );
}

export function createCountry(
  data: Omit<Country, "id" | "display_order" | "active"> & { active?: number; display_order?: number }
): Country {
  const db = getDb();
  const result = db
    .prepare(`INSERT INTO countries (slug, name, flag, region, plan_type, has_number, carrier_name, carrier_note, hero_description, promise_text, why_no_local, active, display_order)
       VALUES (@slug, @name, @flag, @region, @plan_type, @has_number, @carrier_name, @carrier_note, @hero_description, @promise_text, @why_no_local, @active, @display_order)`)
    .run({ active: 1, display_order: 0, ...data });
  return getCountryById(result.lastInsertRowid as number)!;
}

export function updateCountry(id: number, data: Partial<Omit<Country, "id">>): void {
  const fields = Object.keys(data)
    .map((k) => `${k} = @${k}`)
    .join(", ");
  getDb()
    .prepare(`UPDATE countries SET ${fields} WHERE id = @id`)
    .run({ ...data, id });
}

export function deleteCountry(id: number): void {
  getDb().prepare("DELETE FROM countries WHERE id = ?").run(id);
}

// ── Bundle queries ───────────────────────────────────────────

export function getBundlesByCountry(countryId: number): Bundle[] {
  return getDb()
    .prepare("SELECT * FROM bundles WHERE country_id = ? AND active = 1 ORDER BY display_order, id")
    .all(countryId) as Bundle[];
}

export function getBundlesByCountryAdmin(countryId: number): Bundle[] {
  return getDb()
    .prepare("SELECT * FROM bundles WHERE country_id = ? ORDER BY display_order, id")
    .all(countryId) as Bundle[];
}

export function getBundleById(id: number): Bundle | null {
  return (getDb().prepare("SELECT * FROM bundles WHERE id = ?").get(id) as Bundle) ?? null;
}

export function createBundle(data: Omit<Bundle, "id">): Bundle {
  const db = getDb();
  const result = db
    .prepare(`INSERT INTO bundles (country_id, name, data_amount, price, period, per_day, value_label, features, checkout_url, is_featured, badge, color, display_order, active)
       VALUES (@country_id, @name, @data_amount, @price, @period, @per_day, @value_label, @features, @checkout_url, @is_featured, @badge, @color, @display_order, @active)`)
    .run(data);
  return getBundleById(result.lastInsertRowid as number)!;
}

export function updateBundle(id: number, data: Partial<Omit<Bundle, "id">>): void {
  const fields = Object.keys(data)
    .map((k) => `${k} = @${k}`)
    .join(", ");
  getDb()
    .prepare(`UPDATE bundles SET ${fields} WHERE id = @id`)
    .run({ ...data, id });
}

export function deleteBundle(id: number): void {
  getDb().prepare("DELETE FROM bundles WHERE id = ?").run(id);
}

// ── FAQ queries ──────────────────────────────────────────────

export function getFAQsByCountry(countryId: number): FAQ[] {
  return getDb()
    .prepare("SELECT * FROM faqs WHERE country_id = ? ORDER BY display_order, id")
    .all(countryId) as FAQ[];
}

export function getFAQsByPage(page: string): FAQ[] {
  return getDb()
    .prepare("SELECT * FROM faqs WHERE page = ? AND country_id IS NULL ORDER BY display_order, id")
    .all(page) as FAQ[];
}

// ── Seed ─────────────────────────────────────────────────────

export function seedIfEmpty(): void {
  const db = getDb();
  const count = (db.prepare("SELECT COUNT(*) as c FROM countries").get() as { c: number }).c;
  if (count > 0) return;

  // Netherlands
  const nl = createCountry({
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "Europe",
    plan_type: "unlimited",
    has_number: 0,
    carrier_name: "Odido",
    carrier_note: "Odido · 30 days",
    hero_description:
      "A real Dutch eSIM, on Odido's network. Unlimited data, up to 1 Gbps on 5G, no throttle, no voice. Data-only — because that's what you actually use.",
    promise_text: "We will never throttle this plan. If we ever do — you get your money back, full stop.",
    why_no_local: "",
  });

  createBundle({
    country_id: nl.id,
    name: "Unlimited NL",
    data_amount: "∞",
    price: "€49",
    period: "30 days",
    per_day: "€1.63",
    value_label: "one length · no weekly trick-pricing",
    features: JSON.stringify([
      "Really unlimited data — no 25 GB asterisk",
      "Up to 1 Gbps on Odido 5G",
      "We never throttle. Not at 100 GB. Not ever.",
      "Hotspot / tethering included",
      "Auto-renew off by default",
    ]),
    checkout_url: "https://checkout.example.com/nl-unlimited",
    is_featured: 1,
    badge: "",
    color: "blue",
    display_order: 0,
    active: 1,
  });

  // Turkey
  const tr = createCountry({
    slug: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    region: "Europe",
    plan_type: "bundle",
    has_number: 0,
    carrier_name: "Turkcell",
    carrier_note: "Turkcell · Vodafone TR",
    hero_description:
      "No local eSIM here — and we're not going to pretend otherwise. What we do offer: well-priced bundles on the strongest available roaming partner.",
    promise_text:
      "If a better Turkish roaming deal exists, we'll switch to it. We re-tender the carrier deal every six months.",
    why_no_local:
      "Turkish carriers don't issue local eSIM profiles to foreign travellers — full stop. Anything sold as \"Turkey unlimited\" on the internet is roaming, and roaming-unlimited is always throttled, often to a crawl, often without warning.",
  });

  createBundle({
    country_id: tr.id,
    name: "Light",
    data_amount: "5 GB",
    price: "€11",
    period: "week",
    per_day: "",
    value_label: "",
    features: JSON.stringify([
      "5 GB at full 4G / 5G speed",
      "Turkcell or Vodafone TR",
      "30-day validity",
      "Hotspot included",
      "Easy top-up if you run out",
    ]),
    checkout_url: "https://checkout.example.com/tr-5gb",
    is_featured: 0,
    badge: "",
    color: "cream",
    display_order: 0,
    active: 1,
  });

  createBundle({
    country_id: tr.id,
    name: "Big",
    data_amount: "30 GB",
    price: "€19",
    period: "week",
    per_day: "",
    value_label: "",
    features: JSON.stringify([
      "30 GB at full 4G / 5G speed",
      "Turkcell or Vodafone TR",
      "30-day validity",
      "Hotspot · share with anyone",
      "Easy top-up · honest pricing",
    ]),
    checkout_url: "https://checkout.example.com/tr-30gb",
    is_featured: 1,
    badge: "MOST PICKED",
    color: "yellow",
    display_order: 1,
    active: 1,
  });

  createBundle({
    country_id: tr.id,
    name: "Heavy",
    data_amount: "100 GB",
    price: "€29",
    period: "week",
    per_day: "",
    value_label: "",
    features: JSON.stringify([
      "100 GB at full 4G / 5G speed",
      "Turkcell or Vodafone TR",
      "30-day validity",
      "Hotspot · share with anyone",
      "Top-ups stack — no expiry tricks",
    ]),
    checkout_url: "https://checkout.example.com/tr-100gb",
    is_featured: 0,
    badge: "FOR LONG STAYS",
    color: "blue",
    display_order: 2,
    active: 1,
  });

  // Thailand
  const th = createCountry({
    slug: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    region: "Asia",
    plan_type: "unlimited",
    has_number: 1,
    carrier_name: "AIS",
    carrier_note: "AIS · nationwide 5G",
    hero_description:
      "A real Thai eSIM, on AIS — the country's biggest 5G network. Unlimited data, no throttle, and an actual +66 phone number so taxis, hotels, and Grab can call you like a local.",
    promise_text:
      "Same eSIM. Same network. Same +66 line. All plans include AIS 5G, unlimited data, and your Thai number.",
    why_no_local: "",
  });

  createBundle({
    country_id: th.id,
    name: "7 days",
    data_amount: "∞",
    price: "€14",
    period: "7 days",
    per_day: "€2.00",
    value_label: "long-weekend rates",
    features: JSON.stringify([
      "Unlimited data — really",
      "AIS 5G · nationwide",
      "+66 number included",
      "Calls & SMS to TH numbers",
      "Hotspot included",
    ]),
    checkout_url: "https://checkout.example.com/th-7d",
    is_featured: 0,
    badge: "",
    color: "cream",
    display_order: 0,
    active: 1,
  });

  createBundle({
    country_id: th.id,
    name: "15 days",
    data_amount: "∞",
    price: "€22",
    period: "15 days",
    per_day: "€1.47",
    value_label: "island-hopping sweet spot",
    features: JSON.stringify([
      "Unlimited data — really",
      "AIS 5G · nationwide",
      "+66 number included",
      "Calls & SMS to TH numbers",
      "Hotspot · share with anyone",
    ]),
    checkout_url: "https://checkout.example.com/th-15d",
    is_featured: 1,
    badge: "MOST PICKED",
    color: "yellow",
    display_order: 1,
    active: 1,
  });

  createBundle({
    country_id: th.id,
    name: "30 days",
    data_amount: "∞",
    price: "€32",
    period: "30 days",
    per_day: "€1.07",
    value_label: "cheapest per day",
    features: JSON.stringify([
      "Unlimited data — really",
      "AIS 5G · nationwide",
      "+66 number included",
      "Calls & SMS to TH numbers",
      "Hotspot · share with anyone",
    ]),
    checkout_url: "https://checkout.example.com/th-30d",
    is_featured: 0,
    badge: "BEST VALUE",
    color: "blue",
    display_order: 2,
    active: 1,
  });
}
