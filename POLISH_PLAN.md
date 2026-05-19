# Polish Plan

## Status

Planning document only.

No implementation yet.

The MVP is structurally approved. This plan defines small editorial and visual adjustments only.

## 1. Objective

Improve the perceived quality of the current MVP without changing strategy, routing, section order, conversion logic, or page architecture.

The goal is polish, not redesign.

## 2. Priorities

### P0: Blocking issues

Current status: none identified.

Only treat an item as P0 if it blocks:

- route access;
- responsive usability;
- i18n correctness;
- WhatsApp conversion;
- build/lint.

### P1: Perception polish

These should be handled first.

Editorial:

- Replace `Airbnb-style management` in ES with a natural Spanish phrase.
- Soften repeated `control` language in Property Management so owner approval stays clear without sounding defensive.
- Unify FR-CA apostrophes across copy.
- Review small anglicisms and language-mixing issues.

Visual / mobile:

- Compact mobile spacing on Home.
- Compact mobile spacing on `/property-management`.
- Compact mobile spacing on `/about`.
- Preserve desktop unless a specific issue is found.

### P2: Optional / post-MVP

These can wait.

- Fine-tune long FR-CA headlines if they feel heavy on mobile.
- Review CTA button width for long FR-CA labels.
- Review whether repeated dark plum sections need slightly more variation.
- Review screenshot-based rhythm after all P1 changes.

## 3. Editorial Adjustments

### ES: Replace Anglicism

Current issue:

- `Airbnb-style management` appears in Spanish copy.

Direction:

- Replace with a natural Spanish phrase such as:
  - `gestión tipo Airbnb`;
  - `gestión para renta corta`;
  - `gestión orientada a renta corta`.

Preferred direction:

> gestión orientada a renta corta

Reason:

- Clearer, less Spanglish, and aligned with the approved Property Management positioning.

### Property Management: Soften Control Repetition

Current issue:

- Property Management uses `control` language in several nearby places.

Direction:

- Keep owner approval explicit.
- Reduce repeated framing around `not losing control`.
- Prefer language around:
  - clarity;
  - approval;
  - informed decisions;
  - visibility over what happens.

Do not remove the owner approval concept.

### FR-CA Apostrophes

Current issue:

- FR-CA copy mixes curly and straight apostrophes.

Direction:

- Use proper French typography consistently in final UI copy.
- Prefer curly apostrophes where the surrounding FR-CA copy already uses them.

Examples:

- `d’information`, not mixed with `d'information`.
- `L’expérience`, not mixed with `L'experience`.

### Anglicism Review

Review copy for:

- English terms embedded in ES where a natural Spanish phrase exists.
- FR-CA phrases that feel translated rather than native.
- Labels that are technically correct but too long for mobile buttons.

Do not rewrite full sections unless a local phrase needs polish.

## 4. Visual / Mobile Adjustments

### Home Mobile

Goal:

- Reduce perceived length without removing sections.

Allowed changes:

- Reduce vertical margins between sections on mobile.
- Reduce excessive top/bottom padding in mobile-only contexts.
- Keep hierarchy intact.

Do not:

- reorder sections;
- remove sections;
- merge sections;
- change desktop rhythm unless necessary.

### `/property-management` Mobile

Goal:

- Make the dedicated page feel tighter on mobile while preserving clarity.

Allowed changes:

- Slightly reduce mobile section spacing.
- Review long CTA and headline wrapping.
- Keep all approved content.

### `/about` Mobile

Goal:

- Improve scan rhythm on mobile.

Allowed changes:

- Slightly reduce mobile section spacing.
- Review block padding in list/card-like areas.
- Keep all approved content.

### Desktop

Desktop should remain unchanged unless a specific visual issue appears during review.

## 5. Guardrails

Do not:

- restructure pages;
- add sections;
- remove approved sections;
- change route structure;
- change i18n routing;
- create Listings routes;
- create Precon routes;
- add a contact form;
- create an API route;
- add dependencies;
- change the core strategy;
- change WhatsApp as the primary conversion path;
- promise direct human French communication.

## 6. Acceptance Criteria

Polish is acceptable if:

- `npm run lint` passes.
- `npm run build` passes.
- Playwright re-audit passes for desktop and mobile.
- No route regressions appear.
- No horizontal overflow appears.
- Mobile pages feel shorter or tighter without losing clarity.
- FR-CA copy is typographically consistent.
- ES copy has fewer unnecessary anglicisms.
- Property Management still clearly communicates owner approval.
- No new structural debt is introduced.

## 7. Recommended Execution Order

1. Editorial P1 pass:
   - ES anglicism;
   - Property Management `control` wording;
   - FR-CA apostrophe consistency.

2. Mobile spacing P1 pass:
   - Home;
   - `/property-management`;
   - `/about`.

3. Validation:
   - lint;
   - build;
   - Playwright audit.

4. Review:
   - compare screenshots against current `.audit/mvp-full`;
   - decide whether P2 items are worth doing before MVP close.
