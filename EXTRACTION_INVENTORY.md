# Jacquie Real Estate V2 - Extraction Inventory

## Purpose

This document defines what can be extracted from V1 before creating the new V2 technical project.

V1 is only a source of assets, verified data, and learnings. It is not the base architecture for V2.

Status key:

- `verified`: can be extracted as a source item for V2.
- `needs review`: exists in V1 but must be confirmed, rewritten, audited, or visually approved before use.
- `discard`: do not bring into V2.

## 1. Reusable assets

### Jacquie photos

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| Jacquie portrait | `public/images/jacquie-zarate.jpg` | verified | Primary personal trust asset candidate. Extract before scaffold. |
| Jacquie alternate portrait | `public/images/jacquie-zarate1.jpg` | needs review | Review quality, crop, and whether it is distinct enough to keep. |

### Hero / imagery candidates

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| Current hero fallback | `public/images/hero-fallback.jpg` | needs review | Candidate only. Must be checked against V2 visual direction. |
| Current mobile hero fallback | `public/images/hero-fallback-mobile.jpg` | needs review | Candidate only. Review mobile crop and tone. |
| Alternate mobile hero | `public/images/hero-fallback-mobile1.jpg` | needs review | Candidate only. |
| Miami imagery set | `public/images/miami-hero*.jpg` | needs review | Extract to review as possible environmental imagery; do not assume final use. |
| Precon hero imagery | `public/images/precon-hero*.jpg` | needs review | May be useful only for secondary Pre-construction page/support area. Not for top Home hero. |
| Storage imagery | `public/images/storages/callaway-hero.jpg` | discard | Storage is not part of the approved V2 MVP strategy. |

### Logos

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| Miami Life Realty logo | `public/images/miamiliferealty_logo.png` | verified | Extract as confirmed brokerage credibility asset. Use restrainedly. |

### Icons

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| WhatsApp icon | `public/icons/whatsapp.svg` | verified | Extract if visually compatible with V2. |
| Generic Next/Vercel/template icons | `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg` | discard | Framework/template leftovers. Do not bring into V2. |

### Favicons and app icons

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| Favicon | `public/favicon.ico` | needs review | Keep only if still aligned with V2 brand. |
| PNG favicon | `public/favicon-96x96.png` | needs review | Review against final brand. |
| Apple touch icon | `public/apple-touch-icon.png` | needs review | Review against final brand. |
| PWA icons | `public/icon-192.png`, `public/icon-512.png` | needs review | Extract only if V2 keeps PWA/app icon support. |
| Manifest | `public/manifest.webmanifest` | needs review | Text says Jacquie Zarate Realtor; structure can be referenced, not copied blindly. |
| OG image | `public/og-image.jpg` | needs review | Review visual fit and language neutrality. |

## 2. Reusable data

### Listings

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| Listings data file | `src/data/listings.ts` | verified | Contains 2 real listings: `tides-hollywood-2c` and `le-frontenac-505`. Extract into a clean V2 data shape. |
| Listing image URLs | inside `src/data/listings.ts` | verified | ImageKit MLS image URLs are available. Validate availability before V2 launch. |
| Listing facts: price, beds, baths, size, MLS, address, city, coordinates, HOA, amenities | `src/data/listings.ts` | needs review | Extract, but verify current accuracy before publishing. Listings can become stale. |
| Listing descriptions ES/EN | `src/data/listings.ts` | needs review | Use as reference. Rewrite to fit V2 trust-led tone. |
| Listing FR overlay | `src/data/listingsFrOverlay.ts` | needs review | Use as reference only. Must be rewritten/audited for FR-CA and current strategy. |

### Contact and conversion data

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| WhatsApp number | multiple V1 files: `17864072591` | needs review | Extract as current V1 number, but confirm with Jacquie before launch. |
| WhatsApp URL pattern | `https://wa.me/17864072591?...` | verified | Pattern can be reused conceptually. Messages must be rewritten for V2 context. |
| Email | `jacqueline@miamiliferealty.com` in mailto links | needs review | Confirm active inbox and preferred destination before V2 launch. |
| Contact form field shape | `src/app/[locale]/contacto/page.tsx`, `src/app/api/contact/route.ts` | needs review | Reference only. Endpoint email sending is disabled in V1 until Resend/domain setup. |
| Contact form endpoint implementation | `src/app/api/contact/route.ts` | discard | Do not copy. Build fresh if V2 needs a form. |
| Rate limit/honeypot ideas | `src/app/api/contact/route.ts` | needs review | Conceptual reference only if a form is implemented. |

### Property Management facts

| Item | Source | Status | Notes |
|---|---|---:|---|
| Short-term rental / Airbnb-style focus | `STRATEGY.md`, user-confirmed | verified | Core V2 service priority. |
| Publishing on platforms such as Airbnb | `STRATEGY.md`, V1 PM copy | verified | Confirmed scope. |
| Jacquie's own contact network | `STRATEGY.md`, user-confirmed | verified | Confirmed scope. |
| Careful guest selection | `STRATEGY.md`, V1 PM copy | verified | Confirmed scope. |
| Guest attention / guest support | `STRATEGY.md`, V1 PM copy | verified | Confirmed scope. |
| Personalized check-in | `STRATEGY.md`, V1 PM copy | verified | Confirmed scope. |
| Payment collection and transfer to owner | `STRATEGY.md`, user-confirmed | verified | Confirmed scope. |
| Repairs/maintenance coordinated with owner approval | `STRATEGY.md`, V1 PM copy | verified | Confirmed scope. |
| Long-term rental management | not confirmed | discard | Do not include unless later approved. |
| Guaranteed income / return claims | not confirmed | discard | Do not include. |

### About / Jacquie facts

| Item | Source | Status | Notes |
|---|---|---:|---|
| Jacquie Zarate name | V1 and strategy docs | verified | Use. |
| Realtor in Florida | `STRATEGY.md`, V1 About copy | verified | Use as credibility signal. |
| Miami Life Realty brokerage | V1 and strategy docs | verified | Use as credibility signal. |
| Spanish and English human communication | user-confirmed, `STRATEGY.md` | verified | Use. |
| Website supports ES / EN / FR-CA | user-confirmed, strategy docs | verified | Use. |
| Direct French human communication | not confirmed | discard | Do not claim. |
| Originally from Argentina | V1 About copy | needs review | Confirm with Jacquie before using. |
| Miami / Sunny Isles / South Florida focus | strategy docs | verified | Use. |
| Experience with international clients | strategy docs | verified | Use, but keep wording measured. |
| Years of experience | not confirmed | discard | Do not invent. |
| Number of properties managed | not confirmed | discard | Do not invent. |
| Testimonials / case studies | not available | discard | Do not invent. |

## 3. Projects / Pre-construction data

### What can be used as reference

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| Project catalog data | `src/data/projects.ts`, `src/data/projects/**` | needs review | Reference only. Do not migrate wholesale into MVP. |
| Featured project list | `src/data/projects.ts` | needs review | May inform a small secondary Pre-construction support section later. |
| Project images | `public/images/projects/*.webp`, remote ImageKit URLs in project files | needs review | Extract only after deciding which projects are allowed in V2. |
| Project FR overlay | `src/data/projectsFrOverlay.ts` | needs review | Reference only. Must be audited for FR-CA and current claims. |
| Rental policy fields | project data files | needs review | Needs accuracy review before publishing. |
| Price-from, delivery, financing fields | project data files | needs review | Highly time-sensitive. Must be verified before use. |

### What must not be copied directly

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| Full project catalog experience | `src/app/[locale]/proyectos/**` | discard | Recreates V1/Esteban project-first logic. |
| Project filters | `src/components/ProjectsFilters.tsx` | discard | Catalog/search behavior does not belong on V2 Home. |
| Project cards as dominant Home pattern | `src/components/ProjectCard.tsx`, `FeaturedProjects.tsx` | discard | Too close to portal/catalog behavior. |
| Financing/payment plan emphasis | `PaymentPlan.tsx`, project pages | needs review | Do not use on Home. May be referenced only on a later secondary Pre-construction detail path, if needed. |
| Developer-style sales copy | project pages/data | discard | Conflicts with trust-led positioning. |

### Needs review before entering V2

- Which pre-construction projects are still current.
- Whether Jacquie wants any pre-construction detail pages in MVP.
- Whether prices, delivery dates, rental policies, and availability are current.
- Whether FR-CA copy should be rewritten from scratch.
- Whether any project imagery visually competes with Property Management.
- Whether Pre-construction should appear as a single advisory block instead of a catalog.

## 4. i18n / copy

### V1 copy that can be used only as reference

| Item | Source in V1 | Status | Notes |
|---|---|---:|---|
| ES messages | `src/i18n/messages/es.json` | needs review | Reference only. Must be rewritten for V2 strategy. |
| EN messages | `src/i18n/messages/en.json` | needs review | Reference only. Must be rewritten for V2 strategy. |
| FR messages | `src/i18n/messages/fr.json` | needs review | Reference only. V2 route is `/fr-ca`, not `/fr`. Rewrite as FR-CA. |
| Home hero copy | `src/app/[locale]/page.tsx` | discard | Too investment/opportunity-led and V1-specific. |
| About copy | `SectionAboutJacquieHome.tsx`, `sobre-mi/page.tsx` | needs review | Some facts useful; copy should be rewritten for V2. |
| Property Management copy | `SectionPropertyManagementHome.tsx`, `SectionPropertyManagementIncluded.tsx`, `SectionPropertyManagementTrust.tsx` | needs review | Strong factual reference, but rewrite to avoid overpromising and French communication ambiguity. |
| Listings copy | `src/data/listings.ts`, listing pages | needs review | Use facts as data. Rewrite marketing copy. |
| Preconstruction copy | project files/pages | needs review | Reference only if current; not Home-leading. Discard any developer-style or project-first copy. |

### Texts that must be rewritten

- Home hero.
- Home Jacquie section.
- Home Property Management section.
- Home process/proof copy.
- Home Listings support copy.
- Home Pre-construction support copy.
- WhatsApp prefilled messages.
- FR-CA copy for all MVP routes.
- SEO titles/descriptions for `/es`, `/en`, `/fr-ca`.

### ES / EN / FR-CA review rules

- MVP public routes must be `/es`, `/en`, `/fr-ca`.
- Internal locale key should be `fr-CA` if supported.
- No V2 route should expose French Canada as `/fr`.
- FR-CA must feel complete, not like a partial translation.
- No language should have missing, shorter, or placeholder content.
- CTA intent must be equivalent across languages.
- Do not promise human communication in French.
- Jacquie speaks Spanish and English.
- The website supports Spanish, English, and French Canada.

## 5. Explicitly discard

| Item | Status | Reason |
|---|---:|---|
| V1 Home implementation | discard | Carries old hierarchy and V1/Esteban DNA. |
| V1 Home section order | discard | Too flat and exploration-heavy. |
| V1 components | discard | Do not import into V2. Use only as reference for facts. |
| V1 navigation | discard | Preserves routes and priorities from old structure. |
| Catalog patterns | discard | Conflicts with trust-led landing. |
| Search/filter patterns | discard | Not part of Home MVP. |
| Project-first routes | discard | Pre-construction is secondary. |
| `/fr` as French Canada route | discard | V2 uses `/fr-ca`. |
| Claims about French-speaking human support | discard | Not confirmed. |
| Testimonials, case studies, years, rankings, volume | discard | Not confirmed. |
| Storage route/data | discard | Not in approved V2 strategy. |
| Generic framework/template assets | discard | Not brand assets. |

## 6. Extraction checklist by status

### Verified

- Jacquie primary portrait.
- Miami Life Realty logo.
- WhatsApp icon.
- Listings data source exists with 2 real listings.
- Listing image URLs exist.
- WhatsApp URL pattern.
- Property Management confirmed scope.
- Jacquie name.
- Florida Realtor positioning.
- Miami Life Realty brokerage.
- ES/EN human communication.
- ES/EN/FR-CA website experience.
- Miami / Sunny Isles / South Florida focus.

### Needs review

- Alternate Jacquie portrait.
- Hero and Miami imagery.
- Favicons/app icons/OG image.
- Listing facts for current accuracy.
- Listing descriptions and FR overlay.
- WhatsApp number final confirmation.
- Email final confirmation.
- Contact form requirements.
- About fact: originally from Argentina.
- Project/pre-construction data and images.
- All V1 locale/copy files.
- Any FR-CA wording.
- Any price, rental policy, delivery date, or availability field.

### Discard

- V1 components.
- V1 Home.
- V1 navigation.
- V1 route structure.
- Catalog/search/filter patterns.
- Project-first Home patterns.
- `/fr` public route for French Canada.
- Storage content.
- Unverified claims.
- Direct French human communication claims.

## 7. Pending confirmations from Jacquie

Before scaffold or before content migration, confirm:

- Preferred WhatsApp number for public site.
- Preferred email for public contact.
- Whether contact form should send emails, and to which inbox.
- Whether `jacqueline@miamiliferealty.com` is active and preferred.
- Whether the primary portrait is approved for V2.
- Whether any Miami/hero image candidates are approved or new photography is needed.
- Whether "originally from Argentina" should be used publicly.
- Exact wording/format for Realtor and brokerage credentials.
- Whether Miami Life Realty logo can be displayed and how.
- Whether there are real testimonials available.
- Whether years of experience can be stated.
- Whether number of managed properties can be stated.
- Whether any current listings should be shown in MVP.
- Whether listing data/prices are still current.
- Which Pre-construction projects, if any, are approved for MVP.
- Whether any pre-construction prices/delivery/rental-policy data is current.
- Whether direct human communication in French is available. If not confirmed, do not claim it.

## Pre-scaffold rule

The new V2 scaffold can move forward once this inventory is separated into `verified`, `needs review`, and `discard`.

Scaffold can start with controlled placeholders and minimal verified data. Items marked `needs review` do not block the clean technical base, but they must not be published as definitive content or migrated as final data without confirmation.

Nothing marked `discard` should enter the new project.

The new project should start clean. V1 should enter only through intentional extraction, not through copied structure.
