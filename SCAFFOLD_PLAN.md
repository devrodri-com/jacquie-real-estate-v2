# Jacquie Real Estate V2 - Scaffold Plan

## Purpose

This document defines the clean technical scaffold for Jacquie Real Estate V2 before any implementation begins.

V2 is a new project from scratch. V1 is only a source of verified facts, assets, and reference data.

This plan does not include code or Cursor prompts.

The technical app will be created inside:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/web
```

The repository root remains the documentation and strategy workspace.

## 1. Exact stack for V2

### Core

- Create the app with `create-next-app@latest`.
- Use the latest compatible versions installed by the scaffold for Next.js, React, React DOM, TypeScript, Tailwind CSS, and ESLint.
- Do not manually pin framework/compiler/linter versions before scaffold.
- Document the actual installed versions after scaffold.
- Package manager: npm

### i18n

- Add `next-intl` after scaffold.
- Use the latest compatible version installed at setup time.
- Document the actual installed version after setup.

### Optional MVP utilities

Use only when needed:

- `lucide-react` for icons.
- `zod` if a contact form is implemented.
- `resend` only if email sending is included and Jacquie's destination inbox/domain are confirmed.
- `clsx` and `tailwind-merge` only if class composition becomes useful.

### Do not add at scaffold

- CMS.
- Database.
- Search provider.
- Map provider.
- Animation framework.
- shadcn/ui or a large UI kit.
- CRM integration.
- Property search/filter infrastructure.

Stack principle:

> Start minimal, typed, multilingual, static-friendly, and visually unconstrained.

## 2. Public MVP routes

The public locale routes are:

- `/es`
- `/en`
- `/fr-ca`

Rules:

- Do not expose French Canada as `/fr`.
- Use `fr-CA` as the preferred internal locale key.
- Map internal `fr-CA` to public segment `/fr-ca`.
- The visible selector label should be `FR-CA`.
- ES / EN / FR-CA are first-level website experiences from MVP.
- Jacquie speaks Spanish and English.
- Do not promise direct human communication in French unless confirmed.

## 3. Initial folder structure

Recommended clean scaffold structure:

```text
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      property-management/
        page.tsx
      about/
        page.tsx
      contact/
        page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  content/
    home/
    property-management/
    about/
    contact/
  data/
    placeholders/
  i18n/
    routing.ts
    request.ts
    messages/
      es.json
      en.json
      fr-CA.json
  lib/
    seo.ts
    whatsapp.ts
    locale.ts
    content.ts
  styles/
    tokens.css
public/
  images/
    jacquie/
    miami/
  icons/
docs/
  strategy/
```

Structure rules:

- Use route groups only if they simplify organization without changing URLs.
- Keep content/data separate from rendering.
- Do not create Listings or Pre-construction routes in the initial scaffold.
- Keep future listings and precon data out of Home architecture.
- Do not create `/fr`.
- Do not copy V1 folders wholesale.

## 4. i18n system from scratch

### Locale model

Supported locales:

- `es`
- `en`
- `fr-CA`

Public segments:

- `es`
- `en`
- `fr-ca`

The i18n routing config must explicitly map `fr-CA` to `/fr-ca`.

### Message files

Create fresh message files:

- `src/i18n/messages/es.json`
- `src/i18n/messages/en.json`
- `src/i18n/messages/fr-CA.json`

Do not copy V1 message files directly.

### Message organization

Keep messages grouped by domain:

- `nav`
- `home`
- `propertyManagement`
- `about`
- `contact`
- `common`
- `seo`

### Content parity rules

- Every MVP page must exist in ES / EN / FR-CA.
- No locale should have placeholder-only sections once content is considered ready.
- During scaffold, controlled placeholders are allowed if clearly marked.
- CTA intent must be equivalent across languages.
- FR-CA must be written for French Canada, not as generic `/fr`.
- Do not imply Jacquie speaks French.

## 5. Design system and tokens from scratch

Start with a small custom token system, not a UI kit.

### Initial token candidates

Use the approved strategic palette as initial tokens:

- `primary`: `#3B274A`
- `accent`: `#A98BB8`
- `surface`: `#F8F5FA`
- `foreground`: `#2B2530`
- `white`: `#FFFFFF`

These are starting tokens, not permission to make every section the same color or weight.

The purple direction should remain deep plum / aubergine: premium, editorial, minimal, and restrained. Avoid green, navy, brown, bright violet, or decorative purple treatments.

### Token categories

Define tokens for:

- Color.
- Typography.
- Spacing.
- Radius.
- Borders.
- Focus states.
- CTA hierarchy.
- Section weight: strong / medium / light.

### Visual hierarchy rules

- Hero, Jacquie, Property Management, and CTA are strong.
- Process is medium / compact.
- Trust proof is not a standalone Home section; it is integrated into Jacquie and Property Management.
- Listings and Pre-construction are light.
- Avoid repeated card grids as the default pattern.
- Avoid portal-like property browsing visuals.
- Avoid visual patterns inherited from Esteban/V1.

### Typography

Use a clean system font or Geist if the scaffold includes it cleanly.

Do not let typography become tech/SaaS generic. The feel should be calm, editorial, premium, and personal.

## 6. Pages to create in the initial scaffold

Create only the minimum pages needed to validate the clean base, i18n, tokens, layout, and core conversion path:

### Required

- `/es`, `/en`, `/fr-ca`: Home.
- `/es/property-management`, `/en/property-management`, `/fr-ca/property-management`.
- `/es/about`, `/en/about`, `/fr-ca/about`.
- `/es/contact`, `/en/contact`, `/fr-ca/contact`.

### Later phase, not initial scaffold

- `/es/listings`, `/en/listings`, `/fr-ca/listings`.
- `/es/listings/[slug]`, `/en/listings/[slug]`, `/fr-ca/listings/[slug]`.
- `/es/precon`, `/en/precon`, `/fr-ca/precon`.

Listings and Pre-construction will be added only after the base scaffold, i18n, tokens, layout, and Home hierarchy are validated.

### Do not create initially

- Listings routes.
- Listing detail routes.
- Pre-construction routes.
- Full project catalog pages.
- Project detail pages.
- Financing pages.
- Storage pages.
- Search/filter routes.
- Blog/news/resources routes.
- Any route copied from V1 only because it existed there.

## 7. Controlled placeholder content

Scaffold may use placeholders if they are controlled and clearly temporary.

### Allowed placeholders

- Short Home placeholder copy that follows approved hierarchy.
- Generic section labels for layout validation.
- One verified Jacquie image if approved for internal scaffold use.
- WhatsApp CTA placeholder using confirmed or review-pending number, marked as pending if not confirmed.
- No listing data yet.
- No Pre-construction data yet.

### Required placeholder behavior

- Placeholder copy must not introduce new claims.
- Placeholder copy must not sound like final marketing copy unless approved.
- FR-CA placeholders must not promise French-speaking human support.
- Needs-review data must not be treated as final.

### Minimum verified content allowed

- Jacquie name.
- Realtor in Florida.
- Miami Life Realty brokerage.
- Miami / Sunny Isles / South Florida focus.
- Property Management confirmed scope.
- ES / EN / FR-CA website experience.
- Spanish and English human communication.

## 8. What not to bring from V1 yet

Do not bring:

- V1 components.
- V1 Home.
- V1 navigation.
- V1 route names if they preserve old strategy.
- V1 section order.
- V1 `SectionServices`.
- V1 `FeaturedProjects`.
- V1 `ProjectCard`.
- V1 `ProjectsFilters`.
- V1 project detail pages.
- V1 contact endpoint.
- V1 `/fr` route.
- V1 full locale message files.
- V1 search/filter behavior.
- V1 storage content.
- V1 developer/project catalog copy.
- Any unverified proof claim.

V1 data/assets may enter later only through the extraction inventory.

## 9. Recommended project creation order

### Step 1: Create clean project shell

Create the V2 technical app at:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/web
```

Do not scaffold in the repository root.

Initial setup:

- Next.js App Router.
- TypeScript.
- Tailwind.
- ESLint.
- npm.
- `src` directory.
- Import alias.

After scaffold, document the actual installed versions in this plan or a follow-up setup note.

### Step 2: Add i18n foundation

- Install and configure `next-intl`.
- Define locale list: `es`, `en`, `fr-CA`.
- Define public segments: `/es`, `/en`, `/fr-ca`.
- Add redirect/detection behavior only after route behavior is explicit.
- Add language switcher data model, not final UI.

### Step 3: Add design tokens

- Create global styles.
- Define color tokens.
- Define CTA hierarchy.
- Define section weight tokens or conventions.
- Add focus/accessibility defaults.

### Step 4: Add route placeholders

- Home.
- Property Management.
- About.
- Contact.

### Step 5: Add content structure

- Create message files.
- Add controlled placeholder copy.
- Add content/domain grouping.
- Mark draft placeholders clearly.

### Step 6: Add minimal data placeholders

- Add only placeholder data needed for Home, Property Management, About, Contact, and WhatsApp CTA behavior.
- Do not add Listings or Pre-construction data yet.

### Step 7: Add basic layout shell

- Locale-aware layout.
- Navigation placeholder with correct hierarchy.
- Footer placeholder.
- No catalog-first nav.
- WhatsApp CTA model.

### Step 8: Validate scaffold

- Run build/type/lint checks.
- Manually verify all three locale routes.
- Verify `/fr` does not exist.
- Verify no V1 components were copied.
- Document actual installed package versions.

## 10. Minimum validations after scaffold

### Technical

- App starts locally.
- Build passes.
- TypeScript passes.
- ESLint passes.
- No broken imports.
- No copied V1 components.
- App lives inside `/Users/lolo/PROYECTOS/jacquie-real-estate-v2/web`.
- Public routes exist:
  - `/es`
  - `/en`
  - `/fr-ca`
- `/fr` is not a public route.

### i18n

- `es`, `en`, and `fr-CA` are configured.
- `/fr-ca` maps to internal `fr-CA`.
- Language switcher data includes `FR-CA`.
- No locale has missing scaffold messages.
- No FR-CA copy promises French-speaking human support.

### Product

- Home placeholder order matches approved hierarchy.
- Hero does not show listings, projects, filters, or search.
- Property Management is structurally prominent in the scaffold.
- Listings and Precon are not present yet.
- WhatsApp is the primary conversion path.
- Contact form, if present, is secondary.

### Extraction discipline

- Items marked `discard` are not present.
- Items marked `needs review` are not treated as final.
- Any imported asset/data is traceable to `EXTRACTION_INVENTORY.md`.

## Scaffold approval gate

The scaffold is acceptable when it proves:

- V2 is technically clean.
- Routing is correct.
- i18n is first-class.
- design tokens are independent from V1.
- no V1 component structure leaked in.
- placeholders respect the approved strategy.

Only after that should actual Home implementation begin.
