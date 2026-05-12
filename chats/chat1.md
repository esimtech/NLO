# Bedrijf Hero Ontwerp

_Started 2026-05-12 20:26 UTC_

---

## User

Maak een hero voor dit bedrijf voor deze site

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: copy_files]_

_[tool: copy_starter_component]_

I'll make a hero for NoLimits∞nline. I see there's already an existing hero in the UI kit — I'll explore 3 fresh hero variations on a design canvas so you can pick a direction. Let me set up the project.

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Drie hero-richtingen op één canvas in **Hero.html**:

- **A — Type bleed** · editorial cream, gigantische display-typografie, "fine print" geel gehighlight, trust strip met numerals
- **B — Color block** · gele helft + koraal helft, telefoon-mock met QR en stickers eroverheen
- **C — Ink night** · donker met landen-marquee, reuze ∞ doorlopend, live-counter en gele/koraal numerals

Sleep ze rond op het canvas of klik een artboard om fullscreen te focussen. Laat me weten welke richting (of mix) je wilt doorzetten — dan werk ik die uit en integreer 'm met de rest van de site.

## User

Het moet meer een opener zijn waar je ook een bestemming kan zoeken, en het is als er unlimited is ook echt unlimited, en anders goed geprijsde databundels. Wij doen niet aan Fake Unlimited

## Assistant

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Drie heropeners met destination search en het "geen fake unlimited" verhaal centraal:

- **A — Cream opener** · grote "Where are you headed?" + zoekbalk, daaronder twee promise-kaarten (blauw "really unlimited" vs geel "well-priced bundles")
- **B — Sticker poster** · gecentreerd, "We don't do fake unlimited" sticker, zoekbalk in het midden, twee inline pills voor het Unlimited/Bundles-onderscheid, city stickers eronder
- **C — Split** · donkere linkerhelft met search + claim, gele rechterhelft met foto-placeholder en een receipt-card die de drie prijspunten (∞ · 100 GB · 5 GB) eerlijk naast elkaar laat zien

De zoekbalk is in alle drie functioneel: typ een land en je krijgt suggesties met een gekleurde tag — blauwe "UNLIMITED ∞" of gele "BUNDLE" — zodat het verschil meteen visueel is. Laat me weten welke je wilt aanscherpen.

## User

B is top, daar op verder, maak daaronder een blokje met what we do different, en dan verhaal over local eSIM waar mogelijk want dat is altijd beter dan een roaming in terms van Kwaliteit en vaak ook een telefoonnummer. Probleem bij grote clubs is dat unlimited nooit echt is altijd een throttle.

## Assistant

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Hero B staat nu als de echte opener, met daaronder een **"What we do differently"** sectie:

- **Sectiekop**: "Local eSIM where possible. *Not roaming dressed up* as something else."
- **Drie kaarten**:
  - **Local first** — local profile op de daadwerkelijke carrier (SoftBank, Telcel, AIS, NOS)
  - **No throttle** — direct vergelijk: hun "unlimited" is 25 GB → 384 kbps, die van jullie niet
  - **Real local number** — in 40+ landen, voor WhatsApp/2FA/taxi
- **Vs-tabel** in zwart: 5 rijen "The big providers" ✕ vs "NoLimits∞nline" ✓ (unlimited, network, speed, local number, hidden fees)
- **Voetnoot** in mono: *"If we can't beat your home SIM, we'll say so on the product page"* — eerlijkheid als positionering

De zoekresultaten in de hero noemen nu ook de lokale carrier per land (SoftBank in Japan, Viettel in Vietnam, etc.) zodat het "local-first" verhaal al begint zodra iemand zoekt. Laat me weten wat nog scherper kan — copy, volgorde, of een extra blokje (FAQ over fair use, of een wereldkaart?).

## User

En daaronder een blok met Proud European company en dan een verhaal over dat wij Nederlanders altijd eerlijk zijn en daarom ook een eerlijk product willen bieden. Daaronder een CTA en daaronder de footer

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Drie nieuwe blokken eronder geplakt:

- **Proud European company** — split layout. Links het verhaal ("Built in Amsterdam. Honest by *habit*."), eronder de Nederlandse-vlag-dots + GDPR/EU mono-strip. Rechts een gele "House rules"-kaart met 5 directe regels (unlimited = unlimited, prijs op homepage = de prijs, local first, EU data, eerlijkheid in coverage) + spreekwoord *"Doe maar gewoon, dan doe je al gek genoeg"* met Engelse uitleg.
- **CTA** — full-bleed blauw, met "One QR code. **200+ countries.** Zero fine print." in giant display, een tweede zoekbalk om direct te beginnen, gele "Get my eSIM →" knop en live-counter.
- **Footer** — donker, met wordmark + Dutch-bedrijf signature, vier link-kolommen (Plans, Destinations, Help, Company) en KvK-regel onderaan.

Laat me weten of de toon van het Dutch-honesty stuk goed zit of dat het ergens iets directer / iets minder cheeky mag — die regelaar kan ik zo verschuiven.

## User

Maak 2 voorbeeld pagina van landen, bijvoorbeeld voor Nederland, waar we echt unlimited bieden, een lokale eSIM van Odido, geen limiet, geen voice, alleen data met snelheden tot 1gbps. en we throttlen nooit. en dan 1 pagina voor Turkije, een lokale eSIM hebben we hier niet maar wel bundels met de beste kwaliteit en dat beloven wij.

## Assistant

_[tool: read_file]_

I'll factor out shared components first, then build both country pages so they share the same chrome.

_[tool: write_file]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Twee landpagina's klaar, beide vanaf de hero linkbaar (zoekresultaten + de city-stickers AMSTERDAM en ISTANBUL):

**Netherlands.html** — local Odido eSIM
- Hero met breadcrumb, vlag, 🇳🇱 + REAL UNLIMITED sticker, blauwe at-a-glance kaart (∞ · 1 Gbps · 30 days · 0 throttle)
- "Odido" story-blok met snelheidsmetingen Amsterdam/Rotterdam/Utrecht
- Plan-card: €19/week unlimited, met spec-tabel (∞ data, never throttle, 1 Gbps, geen voice, hotspot ja, EU roaming included)
- Geel promise-strip: "We will never throttle this plan. If we ever do — money back."
- FAQ (5 vragen)

**Turkey.html** — bundles only, eerlijk erover
- Hero met 🇹🇷 + BUNDLES — HONEST ABOUT IT sticker, gele at-a-glance kaart
- "Why we don't sell unlimited in Türkiye" sectie met directe quick-check (vermijden vs ons)
- Drie bundle-kaarten (5/30/100 GB · Turkcell of Vodafone TR), middelste uitgelicht
- Koraal promise-blok: re-tender elke 6 maanden + coverage-tabel (Istanbul / Antalya / Cappadocia / Eastern TR)
- FAQ

De CTA + footer (incl. NL/TR in de footer-destinations) zijn nu shared via `nlo-shared.jsx` zodat alle pagina's één chrome delen. Laat me weten welke je verder wilt aanscherpen of als je een derde land wilt om het patroon te testen (bv. een EU-buurland of een echt afgelegen land).

## User

Verifier agent check completed

## Assistant

Top — verifier is groen. Beide pagina's renderen schoon en de navigatie tussen Hero → Netherlands → Turkey werkt. Klaar voor de volgende ronde wanneer je wil.

## User

Maak nu een Thailand pagina, dat is een voorbeeld met Telefoonnummer zodat je ook kan bellen lokaal in het land. Opties zijn daar 7 15 30 dagen.

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

**Thailand.html** klaar in dezelfde stijl als de andere landen, met de telefoonnummer-feature als hero:

- **Hero** — minty kaart rechts met faux nummer "+66 6 1234 5678" prominent in beeld, 4-stat grid (∞ data, +66, AIS 5G, 7/15/30 dagen)
- **Why this matters** — split met vier use-case rijen (Grab/taxi callbacks, hotel/restaurant, 2FA & banking, WhatsApp/Line signup) — uitleg waarom een data-only eSIM in Thailand juist tekortschiet
- **Plans** — drie kaarten naast elkaar:
  - **7 dagen** — €14 (€2,00/dag)
  - **15 dagen** — €22 (€1,47/dag) — middelste, "MOST PICKED"
  - **30 dagen** — €32 (€1,07/dag) — "BEST VALUE, cheapest per day"
  - Onder de kaarten een zwarte strip "Same eSIM. Same network. Same +66 line."
- **How the +66 works** — blauwe sectie met 4 stappen, hamert op *"You get your number **before** you land"*
- **FAQ** — 6 vragen, specifiek over of het nummer echt van jou is, of het bij verlenging blijft, of je thuisnummer blijft werken, internationaal bellen, en wat er na 7/15/30 dagen gebeurt

Thailand is ook toegevoegd aan de zoek-dropdown op de homepage en de footer-destinations. Laat me weten of de prijzen / dagen redelijk zijn of dat je een ander voorbeeldland wil als test van een ander patroon (bv. een EU-land waar local + EU-roaming de hook is).

## User

In het menu wil ik enkel destinations, why us, how it works, support. Maak een why us pagina met een heel verhaal zoals je het verhaal kent. Destinations pagina ook maken, en how it works ook, support ook 24/7 via Whatsapp, Live chat.

## Assistant

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Menu is bijgewerkt op alle pagina's — nu **Destinations · Why us · How it works · Support**. Vier nieuwe pagina's klaar:

**Why-us.html** — het volledige verhaal
- "We started this because every other eSIM was lying to us"
- The problem: vergelijking-tabel van wat "unlimited" écht betekent bij grote eSIM-co's (25 GB → 384 kbps, fair-use, etc.) vs ons (no throttle, in de terms)
- The fix: lokale deals onderhandelen per land, 40+ landen
- Proud European: Amsterdam + Dutch directness + 6 house rules (incl. de nieuwe "24/7 humans on WhatsApp")
- Numbers strip in zwart: 200+ landen, 40+ local eSIM, 0 asterisks, 24/7 humans
- Final promise: "Unlimited means unlimited. If we throttle — money back."

**Destinations.html** — alle landen
- 32 landen in grid van vier kolommen
- Filter chips: region (Europe / Asia / Americas / Africa / Oceania) + plan type (Unlimited / Bundle / met nummer)
- Elke kaart: vlag, carrier, badges (UNLIMITED ∞ blauw · BUNDLE geel · + NUMBER mint), prijs per week, link naar pagina als die bestaat
- "Missing a country?" form onderaan

**How-it-works.html**
- 4 stappen in grote kaarten (Pick · Email · Scan · Land)
- **Interactieve device check** — typ "iPhone 15" of "Pixel 8" → krijg ja/nee
- Tijdlijn-blok in geel (T-7 dagen → Boarding → Landing → Arrivals)
- "If it goes wrong" — 3 quick fixes + escalatie naar WhatsApp

**Support.html**
- Drie kanaal-kaarten naast elkaar: **WhatsApp** (mint, "ONLINE · 24/7, median 1m 40s"), **Live chat** (geel), **Email** (lilac, &lt;2h reply)
- "The humans" — drie teamleden met avatar-bubble, gespreid over Amsterdam / Lisbon / Bali (24/7 zonder bots)
- FAQ met filter-chips per categorie (Activation / Coverage / Billing / Numbers / Device)
- Escalatie-strip onderaan: "WhatsApp answers in under two minutes. No queue ticket."

Alle nav-links én footer-links wijzen nu naar de juiste pagina. Laat me weten wat nog aanscherpen — copy, een sectie missen, of een ander land toevoegen.

## User

Verifier agent check completed

## Assistant

Top — verifier is groen op alle vier de pagina's. Menu en cross-links werken overal. Laat maar weten wat de volgende stap is.

## User

the netherlands is 30 days always.

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

Got it — Netherlands is one fixed 30-day plan, no weekly option. Let me update.

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Aangepast:

- **Netherlands.html** — alleen nog een 30-dagen plan. Hero CTA "Get unlimited — €49 / 30 days", spec-tabel begint met "Validity: 30 days · always", en een nieuwe FAQ-vraag *"Why only a 30-day plan?"* die uitlegt waarom geen week-prijs-truc.
- **Destinations.html** — Nederland-kaart toont "€49 / 30d" en carrier-label "Odido · 30 days".
- **Hero.html** — zoekresultaat voor Netherlands toont nu "€49 / 30d".

