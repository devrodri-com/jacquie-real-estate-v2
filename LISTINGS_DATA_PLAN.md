# LISTINGS_DATA_PLAN.md

## 1. Purpose

Define how V2 should use Jacquie's 2 real listings without turning the Home into a portal, catalog, or inventory-led real estate experience.

Listings in V2 are a supporting proof point:

1. trust;
2. Jacquie;
3. Property Management;
4. WhatsApp;
5. selected listings as tangible market evidence.

They should help the user feel that Jacquie is active in the Miami / South Florida market, but they should not become the main product of the Home.

## 2. Source Material Reviewed

Available sources:

- User-provided listing facts in the current thread.
- PDF: `/Users/lolo/Downloads/3801 S Ocean Dr #2C Hollywood, FL 33019-2902.pdf`
- PDF: `/Users/lolo/Downloads/17801 N Bay Rd #505 Sunny Isles Beach, FL 33160-1907  .pdf`
- Existing inventory note: `EXTRACTION_INVENTORY.md`

Important verification note:

- The PDFs appear to be OneHome listing exports dated May 18, 2026.
- Both PDFs show `Status: Active`, but availability should still be confirmed with Jacquie before launch.
- Both PDFs show `Esteban Firpo` as contact agent because the source export may come from Rodrigo's / a partner / MLS / OneHome access. Treat this as source-system metadata, not public V2 content.
- Do not copy or display Esteban's name, email, phone, branding, or contact attribution in V2.
- Esteban appearing in PDFs does not block using factual listing data if those facts are verified. It does require attribution cleanup before anything is public.
- The prices in the PDFs differ from the user-provided prices. This may represent legitimate price reductions over time, not necessarily an error. V2 should use the most recent confirmed current price.

## 3. Price And Price Reduction Rules

V2 should always use the most recent confirmed current price.

If a previous price is also confirmed, V2 may show a restrained price reduction signal:

- ES: `Precio reducido`
- EN: `Price reduced`
- FR-CA: `Prix réduit`

Show `Antes` / `Previously` / `Avant` only if the previous price is confirmed.

Allowed example:

- Current price: USD 455,000
- Previously: USD 465,000
- Price reduced: USD 10,000

Rules:

- Mark any price reduction display as `needs current verification` before final publication.
- Do not present the reduction as urgency.
- Do not use "hot deal", "best opportunity", "ROI", "rentabilidad", "guaranteed", "garantizado", or similar language.
- Do not show stale price history on Home.
- If current price is confirmed but previous price is not, show only the current price or omit price entirely.

## 4. Attribution Cleanup Rules

Source PDFs, screenshots, MLS exports, or OneHome views may contain third-party contact information.

For V2:

- Do not copy or show Esteban Firpo's name.
- Do not copy or show Esteban's email.
- Do not copy or show Esteban's phone.
- Do not copy or show Esteban's branding.
- Do not attribute listings to Esteban in the interface.
- Keep public attribution and contact aligned to Jacquie / Miami Life Realty, as appropriate and confirmed.
- Clean all user-visible listing content before publication.

This is a content hygiene rule, not a reason to discard verified factual listing data.

## 5. Listing 1: 3801 S Ocean Dr #2C

### Data Provided

- Address: 3801 S Ocean Dr #2C, Hollywood, FL 33019
- MLS: A11955684
- Price: USD 489,000
- Type: Condominium
- Beds: 2
- Baths: 2
- Size: 874 sqft
- Year built: 1969
- HOA: USD 1,038/month
- View / location: Partial ocean / Oceanfront
- Rentals: Daily rentals allowed
- Parking: One Space, Valet
- Pets: Conditional, Yes
- Notes: The Tides Hollywood Beach, short-term rental potential, building allows daily rentals.

### PDF-Confirmed Data

- Beds: 2
- Baths: 2 full
- Size: 874 sqft
- Type: Condominium
- Year built: 1969
- HOA fee: USD 1,038 monthly
- Pets allowed: Conditional, Yes
- Subdivision: Tides on Hollywood Beach
- Status in PDF: Active
- Parking: One Space, Valet
- Waterfront: Yes
- Waterfront features: Ocean Access, OceanFront
- Building allows daily rentals according to listing description.
- Short-term rental use is mentioned in the listing description.

### Needs Review Before Publishing

- Price: user-provided earlier price is USD 489,000; PDF extraction shows `List Price: $459,000`. This may be a price reduction. Use the most recent confirmed current price and mark as `needs current verification` before launch.
- If USD 489,000 and USD 459,000 are both confirmed, V2 may show a restrained `Precio reducido` / `Price reduced` / `Prix réduit` signal.
- MLS number: user provided A11955684, but the extracted PDF text did not clearly expose the MLS number.
- Exact public address format.
- Availability/current status.
- Public attribution/contact cleanup so no Esteban source metadata appears in V2.
- Whether Jacquie / Miami Life Realty should be named as listing/contact/advisor for this property.
- Whether "partial ocean" should be used, since the PDF text exposes `View: Other` while the description says partial oceanfront.
- Any rental language must avoid implied revenue guarantees.

## 6. Listing 2: 17801 N Bay Rd #505

### Data Provided

- Address: 17801 N Bay Rd #505, Sunny Isles Beach, FL 33160
- MLS: A11883428
- Price: USD 465,000
- Type: Condominium
- Beds: 2
- Baths: 2
- Size: 1,330 sqft
- Year built: 1991
- HOA: USD 755/month
- View: Bay view
- Furnished: Yes
- Parking: Guest, One Space
- Pets: No
- Notes: Le Frontenac, renovated 2-bedroom condo, furnished, Sunny Isles Beach.

### PDF-Confirmed Data

- Beds: 2
- Baths: 2 full
- Size: 1,330 sqft
- Type: Condominium
- Year built: 1991
- HOA fee: USD 755 monthly
- Pets allowed: No
- Subdivision: Le Frontenac Condo
- Status in PDF: Active
- Parking: Guest, One Space
- View: Bay
- Description references Le Frontenac, renovated 2-bed / 2-bath, furnished, Sunny Isles Beach, washer/dryer, balcony, and bay views.

### Needs Review Before Publishing

- Price: user-provided earlier price is USD 465,000; PDF extraction shows `List Price: $455,000`. This may be a price reduction. Use the most recent confirmed current price and mark as `needs current verification` before launch.
- If USD 465,000 and USD 455,000 are both confirmed, V2 may show a restrained `Precio reducido` / `Price reduced` / `Prix réduit` signal.
- MLS number: user provided A11883428, but the extracted PDF text did not clearly expose the MLS number.
- Availability/current status.
- Public attribution/contact cleanup so no Esteban source metadata appears in V2.
- Whether Jacquie / Miami Life Realty should be named as listing/contact/advisor for this property.
- Exact furnished wording and whether all furnishings are included.
- Any description should be rewritten in V2 tone rather than copied from MLS/OneHome.

## 7. What Can Appear On Home

The Home can show a very restrained listing preview only after:

- Hero;
- Jacquie Trust Section;
- Property Management;
- Process;
- Mid Conversion CTA.

Recommended Home fields:

- listing image, only if image rights and URL availability are confirmed;
- area/neighborhood;
- short title;
- 2-3 verified facts maximum;
- a soft context line;
- WhatsApp CTA.

Do not show:

- full MLS description;
- long amenity list;
- all financial fields;
- exact price until current price is confirmed;
- price reduction labels unless current price and previous price are both confirmed;
- availability/status unless Jacquie confirms it immediately before launch;
- MLS number unless needed for credibility and verified;
- route/detail link until the route is intentionally planned.

## 8. What Should Stay For A Future Detail Page

Reserve these fields for a future listing detail page:

- full address;
- MLS number;
- price history;
- HOA details;
- taxes;
- rental restrictions;
- full building amenities;
- appliances;
- parking details;
- pet policy details;
- full gallery;
- map/location module;
- school data;
- legal/tax description;
- full disclaimer.

Reason:

Putting these fields on Home would shift the page toward a portal pattern and dilute the trust-led conversion path.

## 9. Should Home Show The 2 Real Listings Now?

Not as definitive real listings yet.

Reason:

- Prices changed between user-provided data and PDF-extracted data; this may be a legitimate reduction, but the current price still needs final verification.
- Listing status can become stale quickly.
- The PDF contact attribution includes Esteban as source-system metadata. This does not block using verified factual listing data, but it must be cleaned from all public V2 content.
- Image URLs exist in V1 according to `EXTRACTION_INVENTORY.md`, but the exact URLs were not provided in this step and should be validated before use.
- Publishing real listing cards too early may make the Home feel like inventory again.

Recommended current state:

- Keep the current controlled placeholders in Home for now.
- Prepare the data model and verification checklist.
- Replace placeholders with 2 real previews only after price, status, attribution, and images are confirmed.

## 10. Should V2 Create `/listings` Now?

No.

Recommendation:

- Do not create `/listings` in the MVP phase.
- Do not add navigation to Listings yet.
- Do not create listing detail pages or slugs yet.

Reason:

- The Home has only just established the trust-led and Property Management-led journey.
- A listing route would create pressure to build catalog behavior: filters, search, maps, pagination, detail pages.
- The current verified data is not ready for public listing pages.
- Listings should first prove they can support the narrative without hijacking it.

## 11. How To Show Listings Without Portal Behavior

Use an editorial preview, not a grid/catalog.

Preferred pattern:

- 2 selected previews maximum for MVP.
- Restrained image crop.
- Minimal metadata.
- No filters.
- No search.
- No map.
- No pagination.
- No "view all" CTA until `/listings` is intentionally created.
- WhatsApp remains the primary action.

Recommended hierarchy:

1. Small eyebrow: "Selected properties" / equivalent by locale.
2. Headline that frames listings as market context.
3. Short explanation that Jacquie can help evaluate fit.
4. Two quiet previews.
5. Single WhatsApp CTA.

The previews should feel like:

> "Here are examples of real market opportunities we can evaluate together."

Not:

> "Browse inventory."

## 12. Future `Listing` Model

Minimum future model:

```ts
type Listing = {
  id: string;
  slug: string;
  status: "draft" | "review" | "published" | "archived";
  sourceStatus?: "active" | "pending" | "sold" | "unknown";
  title: Record<"es" | "en" | "fr-CA", string>;
  shortDescription: Record<"es" | "en" | "fr-CA", string>;
  address: {
    line1: string;
    unit?: string;
    city: string;
    state: "FL";
    postalCode: string;
  };
  areaLabel: Record<"es" | "en" | "fr-CA", string>;
  mlsNumber?: string;
  propertyType: "condominium" | "house" | "townhouse" | "other";
  priceUsd?: number;
  previousPriceUsd?: number;
  priceReducedLabel?: Record<"es" | "en" | "fr-CA", string>;
  beds?: number;
  baths?: number;
  sizeSqft?: number;
  yearBuilt?: number;
  hoaMonthlyUsd?: number;
  parking?: string;
  pets?: string;
  furnished?: boolean;
  rentalPolicy?: string;
  viewLabel?: Record<"es" | "en" | "fr-CA", string>;
  images: Array<{
    src: string;
    alt: Record<"es" | "en" | "fr-CA", string>;
    width?: number;
    height?: number;
    approvedForWeb: boolean;
  }>;
  flags: {
    shortTermRentalPotential?: boolean;
    needsCurrentPriceVerification: boolean;
    needsPreviousPriceVerification?: boolean;
    needsAvailabilityConfirmation: boolean;
    needsAttributionConfirmation: boolean;
  };
  lastVerifiedAt?: string;
};
```

Important:

- `sourceStatus` should not be shown publicly unless recently confirmed.
- `priceUsd` should represent the most recent confirmed current price.
- `previousPriceUsd` should be used only when the previous price is confirmed.
- Price reduction labels must stay sober and never imply urgency, ROI, or guaranteed value.
- `lastVerifiedAt` should be required before launch if prices/status are displayed.

## 13. Images

Available image source:

- ImageKit MLS image URLs are referenced in V1 according to `EXTRACTION_INVENTORY.md`.

Potential use:

- Use one approved exterior/interior image per listing in Home.
- Use a gallery only in a future detail page.

Visual risks:

- MLS imagery can make the Home feel like a portal.
- Poor crops can look generic or low-end.
- Too many photos will shift attention away from Jacquie and Property Management.
- OneHome/PDF screenshots should not be used.
- Images may carry MLS/compliance restrictions; usage rights should be confirmed before publication.

Recommended Home image treatment:

- One calm image per preview.
- No carousel.
- No badges.
- No "new", "hot", "exclusive", or "deal" labels.
- Use restrained captions, not sales-heavy labels.

## 14. What Not To Show

Do not show:

- ROI;
- rentabilidad;
- guaranteed rental income;
- occupancy promises;
- "hot deal";
- "exclusive" unless legally and commercially verified;
- unconfirmed metrics;
- stale availability;
- unverified price;
- unverified previous price;
- aggressive price-drop language;
- full price history on Home;
- market performance projections;
- investment guarantees;
- "best deal";
- "high income";
- copied MLS marketing copy;
- Esteban contact data from PDFs, screenshots, OneHome exports, or MLS views;
- Esteban attribution in public UI;
- portal UI patterns.

## 15. MVP Recommendation

Recommended decision for MVP:

Keep placeholders controlled for the current Home until the following are confirmed:

1. current price for both listings;
2. previous price, only if showing `Precio reducido` / `Price reduced` / `Prix réduit`;
3. current status/availability;
4. MLS numbers;
5. attribution/contact cleanup so no Esteban metadata appears publicly;
6. attribution/relationship to Jacquie / Miami Life Realty;
7. image URLs and usage rights;
8. approved ES / EN / FR-CA listing copy.

Then, replace placeholders with 2 real previews in the existing Home support block.

Do not create `/listings` yet.
Do not create detail pages yet.
Do not add navigation yet.
Do not add filters, search, maps, or pagination.

## 16. What To Do Now vs Later

### Now

- Keep the current Home listings support block secondary.
- Keep placeholders controlled.
- Request/confirm final listing facts with Jacquie.
- Confirm current price and previous price if showing a price reduction signal.
- Decide whether `Precio reducido` / `Price reduced` / `Prix réduit` should appear on Home.
- Clean all source attribution so no Esteban data appears in public UI.
- Collect exact ImageKit URLs for both listings.
- Decide whether price should appear on Home at all.
- Decide whether these properties should be framed as "selected listings", "market examples", or "current opportunities".

### Later

- Replace placeholders with 2 real previews after verification.
- Consider a small `/[locale]/listings` route only if there is a clear need.
- Consider detail pages only if Jacquie wants ongoing inventory management.
- Add a data model only after the display rules are final.

## 17. Open Questions For Jacquie

- Are both properties still available?
- What are the correct current prices?
- Are the previous prices confirmed and allowed to be shown?
- Should Home show `Precio reducido` / `Price reduced` / `Prix réduit`, or keep pricing simpler?
- Are the MLS numbers A11955684 and A11883428 correct?
- Can V2 publicly present these as Jacquie's selected listings?
- Confirm that Esteban appearing in PDFs is only source-system metadata from Rodrigo's / partner / MLS / OneHome access.
- What exact Jacquie / Miami Life Realty attribution should appear publicly, if any?
- Which ImageKit images are approved for public use?
- Should Home show price, or only location/facts and invite conversation?
- Should "daily rentals allowed" be shown on Home, or saved for a property-specific conversation?
- Does Jacquie want listings to remain secondary support, or eventually become a dedicated but restrained page?
