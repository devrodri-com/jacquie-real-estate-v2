# PRECON_DATASET_EXPANSION_IMPLEMENTATION_PLAN.md

## Objective

Define how to import and normalize the full Pre-construction export from Esteban into Jacquie V2 without publishing every project and without turning Jacquie’s site into a portal or Esteban clone.

This is an implementation plan, not an implementation. Do not touch `/web` until the visible project strategy is approved.

## 1. Data Source

Known sources:

- Internal archived Markdown export in Jacquie:
  - `docs/imports/PRECON_FULL_EXPORT_FOR_JACQUIE.md`
- JSON export in Esteban repo:
  - `/Users/lolo/PROYECTOS/estebanfirpo-web/precon-full-export-for-jacquie.json`
- Esteban project source files:
  - `/Users/lolo/PROYECTOS/estebanfirpo-web/src/data/projects/*.ts`

Recommended source for the next implementation:

1. Use the JSON export from Esteban as the raw source of truth for the staging import.
2. Copy that JSON into Jacquie only as an internal raw import if needed.
3. Do not render directly from the raw export.
4. Generate or manually maintain a normalized Jacquie dataset from the raw export.

Recommended Jacquie location if the raw export is copied:

- `web/src/data/preconstruction/raw/precon-full-export-for-jacquie.json`

Alternative if keeping raw imports out of runtime:

- `docs/imports/precon-full-export-for-jacquie.json`
- Then manually normalize into `web/src/data/preconstruction-projects.ts`.

For MVP safety, the preferred approach is a local TypeScript normalized dataset, not runtime dependency on Esteban files.

## 2. Recommended Structure

Use three conceptual layers:

1. Raw import
   - internal-only;
   - mirrors Esteban export;
   - never rendered directly;
   - can include risky fields because it is not public-facing.

2. Mapping / normalization layer
   - converts raw fields into Jacquie-safe fields;
   - strips risky claims;
   - adds status fields;
   - marks verification state;
   - keeps Esteban source references internal only.

3. Public normalized dataset
   - used by `/pre-construction` and detail pages;
   - includes only Jacquie-safe fields;
   - separates visible projects from candidates.

Recommended future file structure:

```txt
web/src/data/preconstruction/
  projects.ts
  types.ts
  normalize.ts
  raw/precon-full-export-for-jacquie.json
```

Or, for a smaller first pass:

```txt
web/src/data/preconstruction-projects.ts
```

with clearly separated arrays:

- `visiblePreconstructionProjects`
- `candidatePreconstructionProjects`
- `needsReviewPreconstructionProjects`

## 3. States

Every project must have a visibility/status state.

Recommended states:

- `visible`
  - can appear publicly on `/pre-construction`;
  - can have a detail page if `detailReady` is true.

- `candidate`
  - imported and normalized;
  - not public yet;
  - possible future visible project.

- `needs_review`
  - imported only for internal review;
  - not public;
  - missing verification, safe copy, images, or business fit.

- `discard`
  - should not be imported into the public dataset;
  - can remain documented in raw/internal import if needed.

- `hidden/legal_review`
  - blocked from UI;
  - not eligible for public rendering until legal/compliance decision changes.

Mercedes-Benz Places Miami should remain excluded/blocked due to legal review unless explicitly re-approved later.

## 4. Render Rules

Public rendering rules:

- Only `visible` projects appear publicly.
- `candidate` projects remain imported but hidden.
- `needs_review` projects remain hidden.
- `discard` projects are excluded from the public dataset or kept only in raw/internal files.
- `hidden/legal_review` projects are never rendered.

Detail pages:

- Only projects with `visibilityStatus: "visible"` and `detailReady: true` should generate detail routes.
- Do not generate detail routes for `candidate`, `needs_review`, `discard`, or `hidden/legal_review`.

Search/filter rules:

- Search and filters should only operate on public `visible` projects.
- Hidden/candidate projects must not leak through search results, metadata, alternates, static params, or links.

## 5. Normalized Fields

Recommended normalized model:

```ts
type PreconstructionProject = {
  id: string;
  name: string;
  slug: string;
  area: string;
  city?: string;
  priceFromUsd?: number;
  priceStatus: "verified" | "needs_current_verification" | "do_not_publish";
  delivery?: string;
  deliveryStatus: "verified" | "needs_current_verification" | "do_not_publish";
  heroImage: string;
  galleryImages: string[];
  description?: {
    es: string;
    en: string;
    frCA: string;
  };
  highlights?: {
    es: string[];
    en: string[];
    frCA: string[];
  };
  amenities?: {
    es: string[];
    en: string[];
    frCA: string[];
  };
  unitMix?: {
    es: string[];
    en: string[];
    frCA: string[];
  };
  paymentPlan?: {
    items: {
      label: {
        es: string;
        en: string;
        frCA: string;
      };
      value: string;
    }[];
    status: "verified" | "needs_current_verification" | "do_not_publish";
  };
  mapQuery?: string;
  riskFlags: PreconstructionRiskFlag[];
  visibilityStatus:
    | "visible"
    | "candidate"
    | "needs_review"
    | "discard"
    | "hidden/legal_review";
  detailReady: boolean;
};
```

Recommended risk flags:

- `roi_claim`
- `eb5_claim`
- `leaseback_claim`
- `str_claim`
- `rental_policy_claim`
- `payment_plan_unverified`
- `developer_copy`
- `developer_legal_claim`
- `developer_tax_claim`
- `outdated_price`
- `outdated_delivery`
- `missing_images`
- `weak_visual_quality`
- `legal_review`
- `esteban_tone`
- `needs_current_verification`

## 6. Avoiding Sensitive Claims

Do not carry these directly into UI:

- ROI;
- rentability/profitability claims;
- returns;
- appreciation claims;
- projected income;
- EB-5;
- leaseback;
- STR;
- short-term rental claims;
- no rental restrictions;
- rental policy as a selling point;
- payment plan without verification note;
- developer legal/tax claims;
- urgency;
- best investment;
- exclusive;
- limited units;
- ranking language.

Payment plan can appear only if:

- it exists in a normalized safe form;
- it is marked with verification status;
- the page includes a note that payment terms must be confirmed with current official materials.

Rental policy should not be used as a filter or public claim until verified with current official source.

## 7. Selecting The Second Visible Batch

Known second-batch candidates:

- Baccarat Residences
- Cipriani Residences

They are already in Jacquie’s dataset as candidates but not visible. They should not become visible automatically.

Before making them visible, verify:

- current price from;
- delivery/completion timing;
- developer information;
- image quality and usage rights;
- whether copy can be rewritten in Jacquie’s consultive tone;
- whether any sensitive claims are present in source material;
- whether Jacquie wants to be commercially associated with each project.

Other projects from the export should be reviewed through the same lens:

- strong visual quality;
- Miami/South Florida relevance;
- clear basic data;
- no unresolved legal/compliance flags;
- no reliance on ROI/rental-policy claims;
- good fit with Jacquie’s trusted-advisor positioning.

## 8. Growth Plan

Recommended public growth path:

1. Keep current 3 visible projects.
2. Normalize full export internally.
3. Select 3 additional candidates for a 6-project public page.
4. Audit whether `/pre-construction` still feels curated.
5. If expanding to 9 or 12 projects, introduce search/sort according to `PRECON_FILTERS_SEARCH_BRIEF.md`.
6. Do not import or show all 38 projects directly in UI.

Search/filter activation:

- 3 projects: no controls.
- 6 projects: optional name search only if needed.
- 9/12 projects: search + A-Z/Z-A + area filter.
- Price/delivery sorting only after normalized verification fields exist.
- Rental policy filters only after current verified data exists.

## 9. Files A Future Implementation Would Touch

Likely files:

- `web/src/data/preconstruction-projects.ts`
- `web/src/data/preconstruction/types.ts` if extracted
- `web/src/data/preconstruction/normalize.ts` if using a mapping layer
- `web/src/data/preconstruction/raw/precon-full-export-for-jacquie.json` if raw import is copied
- `web/src/components/preconstruction-page.tsx`
- `web/src/components/preconstruction-detail-page.tsx`
- `web/src/app/[locale]/pre-construction/page.tsx`
- `web/src/app/[locale]/pre-construction/[projectSlug]/page.tsx`
- `web/src/lib/metadata.ts`
- `web/src/i18n/messages/es.json`
- `web/src/i18n/messages/en.json`
- `web/src/i18n/messages/fr-CA.json`

Do not touch:

- Home;
- Header;
- Footer, unless navigation strategy changes;
- Listings;
- Property Management;
- About;
- Contact;
- i18n routing.

## 10. Risks

Main risks:

- exposing hidden or risky projects publicly;
- leaking Esteban source tone, claims, or internal source names;
- making Jacquie look like a preconstruction catalog;
- stale pricing or delivery data;
- unverified payment plan or rental policy;
- image rights/quality issues;
- detail pages generated for projects that are not approved;
- search/filter controls surfacing candidate/hidden projects;
- overwhelming users before they understand Jacquie’s trust-led positioning.

The dataset must enforce business and compliance rules, not rely only on UI discipline.

## 11. Final Recommendation

Implement dataset staging first.

Recommended next technical step:

1. Copy or reference the Esteban JSON export as internal raw source.
2. Build a normalized Jacquie-safe dataset with statuses and risk flags.
3. Keep only the current 3 projects public.
4. Keep Baccarat, Cipriani, and other possible projects as `candidate`.
5. Keep `needs_review`, `discard`, and `hidden/legal_review` projects out of public routes.
6. Do not activate filters yet.
7. Do not expand the UI until the next visible batch is approved.

The immediate goal is data readiness, not more public inventory.
