# Jacquie Real Estate V2 - Execution Strategy

## Core decision

V2 will be a new technical project built from scratch.

The current V1 repository should not be used as the implementation base for V2. It can be used only as a source of verified information, assets, data, and strategic lessons.

Reason:

> V1 carries too much structural and conceptual DNA from Esteban's site and from the earlier Jacquie iteration. V2 needs a real mental, visual, and technical break.

This means:

- Do not refactor the current Home into V2.
- Do not rebuild V2 by rearranging V1 components.
- Do not let existing routes, imports, section names, or components decide the new structure.
- Do not treat V1 as the default architecture.

## 1. What can be reused conceptually from V1

Reuse only what is factual, strategic, or asset-based.

Allowed conceptual reuse:

- Real information about Jacquie.
- Florida Realtor / Miami Life Realty context.
- Contact data, especially WhatsApp.
- Confirmed Property Management learnings.
- Short-term rental / Airbnb-style management scope.
- Listings data and real listing images.
- Existing project/pre-construction data only as secondary reference.
- Existing geographic focus: Miami, Sunny Isles, South Florida.
- Strategic documents already created for V2.
- Approved language rule: ES / EN / FR-CA website experience, with human communication confirmed in Spanish and English.
- Possible palette or visual direction if reconfirmed for V2.

V1 can inform what is true. It should not inform how the new Home is structured visually or narratively.

## 2. What is definitively discarded

Discard:

- Current V1 Home.
- V1 components.
- V1 section order.
- V1 navigation hierarchy.
- Catalog-first patterns.
- Project-first / pre-construction-first logic.
- Esteban-style investment/project structure.
- Search/filter behavior as a Home pattern.
- Repeated card grids that flatten priority.
- Services presented as equal business pillars.
- Any visual system that makes the site feel like a portal.
- Any FR copy that implies Jacquie personally communicates in French.
- Any unverified proof: testimonials, years, volume, rankings, awards, managed-property count.

The goal is not to clean V1. The goal is to avoid inheriting its assumptions.

## 3. Assets and data to extract before starting

Before scaffolding the new project, create a clean extraction inventory from V1.

### Required extraction

- Jacquie portrait images:
  - `public/images/jacquie-zarate.jpg`
  - `public/images/jacquie-zarate1.jpg`
- Hero / Miami imagery candidates:
  - `public/images/hero-fallback.jpg`
  - `public/images/hero-fallback-mobile.jpg`
  - `public/images/miami-hero*.jpg`
- Brokerage/logo assets:
  - `public/images/miamiliferealty_logo.png`
- WhatsApp icon:
  - `public/icons/whatsapp.svg`
- Favicons and app icons if still appropriate.
- Listings data:
  - `src/data/listings.ts`
  - listing image URLs or image references used by those listings.
- Listing FR overlays, if factually useful:
  - `src/data/listingsFrOverlay.ts`
- Pre-construction/project data only as reference:
  - `src/data/projects/**`
  - `src/data/projects.ts`
  - `src/data/projectsFrOverlay.ts`
- Existing i18n message files only as copy reference:
  - `src/i18n/messages/es.json`
  - `src/i18n/messages/en.json`
  - `src/i18n/messages/fr.json`

### Extraction rules

- Extract data and assets into a neutral holding folder before importing them into the new project.
- Do not copy V1 components into the new project.
- Do not copy V1 route structure as the starting architecture.
- Do not copy full locale message files blindly.
- Audit every FR-CA string for communication claims before reuse.
- Audit every listing/project claim for accuracy before reuse.
- Keep source attribution internally: note which data came from V1 and what was verified.

## 4. Recommended stack for the new V2

Use a modern, minimal stack that supports a premium marketing site, multilingual routes, fast iteration, and static-friendly content.

Recommended:

- Next.js App Router, using the current stable version at scaffold time.
- React with Server Components by default.
- TypeScript.
- Tailwind CSS.
- `next-intl` for ES / EN / FR-CA routing and messages.
- Local typed content/data for MVP.
- `next/image` for image optimization.
- Vercel deployment.
- ESLint and TypeScript checks from the scaffold.

Use only if needed:

- Resend or equivalent for contact form email.
- Zod for form validation.
- A small icon library such as `lucide-react`.

Avoid for MVP unless there is a clear need:

- CMS.
- Database.
- Complex animation libraries.
- Full UI kits that impose a generic SaaS/card aesthetic.
- Property search infrastructure.
- Map/search/filter packages.
- CRM integrations.

Stack principle:

> Keep the stack boring, typed, multilingual, static-friendly, and visually unconstrained.

## 5. i18n and routing decision

The MVP public locale routes must be:

- `/es`
- `/en`
- `/fr-ca`

French Canada must use `/fr-ca`, not `/fr`.

Reasons:

- The scope is specifically French Canada.
- It avoids ambiguity with France French.
- It is clearer for SEO.
- It matches the visible language selector label: FR-CA.

Recommended internal locale keys:

- `es`
- `en`
- `fr-CA`

If the i18n library requires a different internal key format, the public route segment must still remain `/fr-ca`, and the mapping must be documented in the i18n routing config.

Do not reuse V1's `/fr` route as the French Canada route.

## 6. Initial folder structure

Recommended new-project structure:

```text
src/
  app/
    [locale]/
      page.tsx
      layout.tsx
      property-management/
      listings/
      precon/
      about/
      contact/
  components/
    layout/
    sections/
    ui/
  content/
    home/
    property-management/
    about/
  data/
    listings/
    projects/
  i18n/
    routing.ts
    request.ts
    messages/
      es.json
      en.json
      fr-CA.json
  lib/
    contact.ts
    whatsapp.ts
    seo.ts
  styles/
    globals.css
public/
  images/
  icons/
docs/
  strategy/
```

### Structure rules

- Keep V2 docs in the new project under `docs/strategy/`.
- Keep content separate from components where practical.
- Keep listings/projects as data, not as Home architecture.
- Keep route names simple and human.
- Use `/fr-ca` as the public French Canada route.
- Use `fr-CA` as the preferred internal locale key if the routing/i18n setup supports it cleanly.
- If a different internal key is required, keep `/fr-ca` public and document the mapping.
- Do not create a route structure that makes Listings or Pre-construction feel primary.

## 7. Strategic documents that must guide development

These documents are the source of truth for V2:

1. `PROJECT_CONTEXT.md`
2. `STRATEGY.md`
3. `HOME_ARCHITECTURE.md`
4. `HOME_SECTIONS_PLAN.md`
5. `IMPLEMENTATION_BRIEF.md`
6. `EXECUTION_STRATEGY.md`

Priority order when there is conflict:

1. `EXECUTION_STRATEGY.md` for the technical reset decision.
2. `STRATEGY.md` for product truth.
3. `HOME_ARCHITECTURE.md` for Home narrative.
4. `HOME_SECTIONS_PLAN.md` for section plan.
5. `IMPLEMENTATION_BRIEF.md` for implementation guardrails.
6. `PROJECT_CONTEXT.md` for history and rationale.

Important update:

`IMPLEMENTATION_BRIEF.md` should now be read as hierarchy guidance, not as a mandate to reuse V1 components inside the current repo.

## 8. Risks of starting from scratch

Starting from scratch reduces inheritance risk, but creates new risks.

Risks:

- Losing useful real content from V1.
- Recreating features already solved, such as i18n routing or WhatsApp links.
- Underestimating asset migration effort.
- Reintroducing old patterns manually because they feel familiar.
- Overdesigning the new system before the Home narrative works.
- Spending too much time on architecture instead of the trust-led MVP.
- Accidentally omitting FR-CA depth because the content must be rewritten.
- Breaking listing data fidelity during migration.
- Creating a beautiful but empty site if proof/content is not extracted first.

Mitigation:

- Extract assets/data first.
- Keep MVP route scope tight.
- Build Home first.
- Delay advanced search, filters, CMS, and database decisions.
- Validate narrative before expanding pages.

## 9. How to avoid looking like Esteban

The new V2 must avoid Esteban's structural DNA.

Rules:

- Do not lead with pre-construction.
- Do not lead with projects.
- Do not lead with investment metrics.
- Do not use project cards as the visual center of the Home.
- Do not make financing, developers, or project comparison central.
- Do not make the Home a catalog.
- Do not use navigation that suggests "projects" are the main product.
- Do not let Listings become the default exploration mode.
- Do not use generic investment language before trust.

Positive direction:

- Lead with Jacquie as trusted local person.
- Establish calm confidence before showing opportunities.
- Make Property Management the primary commercial service.
- Use Listings and Pre-construction as proof that Jacquie understands the market.
- Keep the first screen personal, not transactional.
- Use fewer, stronger sections instead of many equal blocks.

Core test:

> If the page still works after replacing Jacquie's name with Esteban's, it is not specific enough.

## 10. Recommended execution order

### Phase 1: Extraction and audit

Goal:

- Identify exactly what is worth carrying into the new project.

Tasks:

- Inventory Jacquie assets.
- Inventory listings data and listing images.
- Inventory contact data.
- Extract confirmed Property Management facts.
- Audit FR copy for unsupported human communication claims.
- Mark all unverified claims as excluded.

Output:

- Clean extraction list.
- Confirmed content inventory.

### Phase 2: New project scaffold

Goal:

- Create a clean technical foundation.

Tasks:

- Scaffold a new Next.js App Router project.
- Add TypeScript, Tailwind, ESLint.
- Add `next-intl`.
- Establish public locale routes: `/es`, `/en`, `/fr-ca`.
- Use `fr-CA` as the preferred internal locale key, with documented mapping to `/fr-ca`.
- Add basic tokens and global styles.
- Do not import V1 components.

Output:

- Empty but working multilingual V2 shell.

### Phase 3: Content model

Goal:

- Define the content/data shape before UI.

Tasks:

- Create Home content structure for ES / EN / FR-CA.
- Create Property Management content structure.
- Create contact/WhatsApp helper content.
- Migrate listings into a clean typed data shape.
- Do not decide Pre-construction implementation until `PRECON_SUPPORT_SECTION_BRIEF.md` exists.

Output:

- Typed content and data ready for UI.

### Phase 4: Home MVP

Goal:

- Build the trust-led Home without catalog behavior.

Tasks:

- Hero.
- Jacquie.
- Property Management.
- Compact process.
- Main CTA.
- Light Listings support.
- Pre-construction support only after `PRECON_SUPPORT_SECTION_BRIEF.md` is created and approved.
- Final CTA only after `FINAL_CTA_BRIEF.md` is created and approved.

Output:

- Complete Home narrative in ES / EN / FR-CA.

### Phase 5: Supporting routes

Goal:

- Add only the pages needed to support the Home.

Recommended initial routes:

- Property Management.
- About Jacquie.
- Listings overview/detail.
- Pre-construction overview, secondary, only after its own brief and data review.
- Contact.

Avoid:

- Full marketplace search.
- Heavy project catalog.
- Financing hub.
- Extra routes copied from V1 by inertia.

### Phase 6: QA and strategy audit

Goal:

- Confirm the new V2 did not drift back toward V1.

Checks:

- First 10 seconds communicate trust, Jacquie, management, WhatsApp.
- Property Management feels stronger than Listings and Pre-construction.
- Listings and Pre-construction are secondary.
- No search/filter UI on Home.
- ES / EN / FR-CA are complete.
- No French-speaking human support claim exists.
- No unverified claims exist.
- Mobile Home does not become a long flat stack of cards.

### Phase 7: Deployment readiness

Goal:

- Prepare MVP for real use.

Tasks:

- SEO basics per locale.
- OG image strategy.
- Contact/WhatsApp validation.
- Image optimization.
- Accessibility pass.
- Build/lint/type checks.
- Manual mobile review.

## Final execution principle

Starting from scratch is not permission to overbuild.

The new V2 should be smaller, clearer, more personal, and more strategically controlled than V1.

The correct first version is not the most complete real estate site. It is the most accurate digital identity for Jacquie:

> Trust, guidance, Property Management, and direct conversation first. Inventory second.
