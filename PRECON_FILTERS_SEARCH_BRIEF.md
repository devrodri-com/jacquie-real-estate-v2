# PRECON_FILTERS_SEARCH_BRIEF.md

## 1. Objective

Define how Jacquie V2 can add search, sorting, and light filtering to `/pre-construction` without turning the site into a portal, catalog, or Esteban-style investment platform.

The goal is not to make users browse endlessly. The goal is to help them orient themselves inside a curated set of projects and then move toward a guided WhatsApp conversation.

Search and filters should support clarity, not replace Jacquie’s advisory role.

## 2. When Search And Filters Make Sense

With the current 3 visible projects, search and filters are not necessary. The page should remain editorial and curated.

Recommended thresholds:

- 3 projects: no search or filters.
- 6 projects: search is optional, filters are usually not needed.
- 9 to 12 projects: search and one or two light filters start to make sense.
- More than 12 projects: search, sorting, and limited filtering become useful, but must stay restrained.

The feature should be activated only when the visible project count makes discovery harder than simple scrolling.

## 3. Controls To Add First

If the project count justifies discovery controls, add them in this order:

1. Search by project name.
2. Sort A-Z / Z-A.
3. Sort by price from low/high, only when `priceFromUsd` exists and price status is clearly verified or marked.
4. Sort by delivery, only when delivery data exists in a normalized format.
5. Filter by area / neighborhood.

These controls are enough for a first discovery layer. They help users orient without making the page feel like Zillow, Redfin, or a generic preconstruction portal.

## 4. Controls Not To Add Yet

Do not add in the first filters/search pass:

- map;
- advanced filters;
- project comparison;
- many categories;
- saved searches;
- pagination as a catalog behavior;
- rental policy filter unless verified;
- STR / short-term rental filter unless verified;
- “no restrictions” filter unless verified;
- 30 / 60 / 90 day rental filters unless verified;
- investment-style sorting;
- “best opportunity” or “top investment” logic.

The page should not invite users to optimize for aggressive investment claims. It should invite them to ask better questions.

## 5. Rental Policy

Rental policy is sensitive because it can easily become a claim.

Do not filter by rental policy unless the field is verified from a current official source. Do not infer rental flexibility from old marketing copy, Esteban data, screenshots, broker notes, or developer language without current confirmation.

Avoid using filter labels such as:

- no restrictions;
- short-term rental;
- STR;
- daily rentals;
- 30 days;
- 60 days;
- 90 days;
- 6 months.

Those labels may be useful later, but only after the data model can distinguish:

- confirmed current policy;
- unverified historical claim;
- developer marketing claim;
- not publishable.

If rental policy is added later, the UI must make clear that policy must be confirmed before decisions are made.

## 6. Dataset Requirements

Before implementing search and filters, the dataset should support normalized fields instead of ad hoc strings.

Recommended fields:

```ts
type PreconstructionProject = {
  id: string;
  name: string;
  slug: string;
  searchableName: string;
  area: string;
  normalizedArea: string;
  city?: string;
  priceFromUsd?: number;
  priceStatus: "verified" | "needs_current_verification" | "do_not_publish";
  delivery?: string;
  deliveryYear?: number;
  deliveryStatus: "verified" | "needs_current_verification" | "do_not_publish";
  rentalPolicy?: string;
  rentalPolicyStatus:
    | "verified"
    | "needs_current_verification"
    | "do_not_publish"
    | "not_applicable";
  visibilityStatus: "visible" | "candidate" | "needs_review" | "discard";
};
```

Additional internal fields may be useful:

- `riskFlags`;
- `sourceFilePath`;
- `lastVerifiedAt`;
- `verificationNotes`;
- `sortPriority`.

Only fields that are safe and user-facing should appear in the UI.

## 7. Visual Direction

The discovery UI should feel like a refined advisory tool, not a real estate portal.

Recommended visual behavior:

- one compact search input;
- one restrained sort select;
- one area filter if useful;
- no heavy filter sidebar;
- no sticky marketplace toolbar;
- no count-heavy marketplace language;
- no “showing X results” emphasis unless subtle;
- no colored filter chips unless they feel editorial and restrained;
- mobile controls stacked simply;
- desktop controls in a quiet horizontal band.

The page should still lead with context and trust. Controls should appear after the page intro, not before the narrative.

## 8. ES / EN / FR-CA

All controls must be localized in ES, EN, and FR-CA.

Recommended labels:

ES:

- Search: `Buscar por proyecto`
- Sort: `Ordenar`
- A-Z: `A-Z`
- Z-A: `Z-A`
- Price low/high: `Precio menor a mayor`
- Price high/low: `Precio mayor a menor`
- Delivery: `Entrega`
- Area: `Zona`

EN:

- Search: `Search by project`
- Sort: `Sort`
- A-Z: `A-Z`
- Z-A: `Z-A`
- Price low/high: `Price low to high`
- Price high/low: `Price high to low`
- Delivery: `Delivery`
- Area: `Area`

FR-CA:

- Search: `Rechercher par projet`
- Sort: `Trier`
- A-Z: `A-Z`
- Z-A: `Z-A`
- Price low/high: `Prix croissant`
- Price high/low: `Prix décroissant`
- Delivery: `Livraison`
- Area: `Secteur`

FR-CA must not imply that Jacquie provides human communication in French. This feature is web experience only.

## 9. Acceptance Criteria

Search/filter implementation is acceptable only if:

- it does not appear with only 3 visible projects;
- it does not introduce portal-like visual density;
- it does not add search or filters to Home;
- it works in ES / EN / FR-CA;
- it preserves locale paths;
- it does not expose `/fr`;
- it avoids rental policy filters unless verified;
- it does not show ROI, profitability, returns, rental guarantees, STR claims, EB-5, leaseback, or aggressive investment language;
- it does not copy Esteban UI, components, filter logic, or tone;
- mobile remains simple and usable;
- lint/build pass;
- Playwright smoke checks confirm no overflow and controls behave correctly.

## 10. Risks

Main risks:

- turning Jacquie V2 into a catalog;
- copying Esteban’s product behavior instead of extracting only useful learning;
- surfacing unverified rental policy claims;
- making price sorting feel like an investment marketplace;
- overwhelming users before they trust Jacquie;
- burying WhatsApp conversion behind browsing behavior;
- increasing maintenance burden with stale project data.

The more controls are added, the more important data verification becomes.

## 11. Final Recommendation

Do not implement search or filters immediately while `/pre-construction` shows only 3 visible projects.

Recommended activation plan:

1. Keep current 3-project Precon page as curated V1.
2. If expanding to 6 projects, consider search only if the page starts to feel hard to scan.
3. If expanding to 9 or 12 projects, add:
   - search by project name;
   - A-Z / Z-A sorting;
   - area filter.
4. Add price/delivery sorting only after normalized verification fields exist.
5. Do not add rental policy filters until every visible project has current verified rental policy data.

Before implementation, normalize the dataset and define which projects are actually `visible`, `candidate`, `needs_review`, or `discard`.
