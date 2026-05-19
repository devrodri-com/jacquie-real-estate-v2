# Jacquie Real Estate V2 - Implementation Brief

## Purpose

This document translates the approved strategy, Home architecture, and Home sections plan into a pre-Cursor execution guide.

It is not a Cursor prompt, not code, and not a component specification. Its purpose is to prevent the Home from becoming long, flat, catalog-like, or visually equal across all sections.

The implementation goal is:

> A focused trust-led Home where Hero, Jacquie, Property Management, and CTA carry the most weight; Process stays clear but compact; Listings support credibility without becoming the product; Pre-construction remains pending until its own brief exists.

## Visual weight model

The Home should not give every section the same presence.

### Strong sections

These sections should carry the Home:

1. Hero
2. Jacquie
3. Property Management
4. Mid-page CTA / final CTA

They should receive the strongest narrative focus, clearest spacing, and most intentional CTA treatment.

### Medium sections

These sections should be clear but compact:

1. Management process

They should reduce uncertainty and support the main story, but they should not become large standalone destinations.

Trust Proof is not a separate Home section. Confirmed trust signals should live inside Jacquie, Property Management, or About.

### Light sections

These sections should be visibly secondary:

1. Listings
2. Pre-construction, after `PRECON_SUPPORT_SECTION_BRIEF.md` exists

They should feel like selected support paths, not catalogs, portals, or equal business pillars.

## Section execution guide

## 1. Hero

### Weight

Strong.

### Minimum content

- Jacquie as the trusted local person in Miami.
- Guidance for owners, buyers, and investors.
- Remote/international confidence.
- Short-term rental / Property Management signal.
- Primary WhatsApp CTA.
- One quieter secondary path at most.

### CTA priority

Primary:

- ES: Hablar con Jacquie
- EN: Talk to Jacquie
- FR-CA: Contacter Jacquie

Secondary:

- Learn how Jacquie can help.

### Execution rule

The fold must sell trust and contact, not exploration.

### Avoid

- Listing cards.
- Project cards.
- Search bars.
- Filters.
- "View opportunities" as the main secondary action above the fold.
- Pre-construction-first copy.
- Generic realtor hero copy.

## 2. Jacquie

### Weight

Strong.

### Minimum content

- Jacquie as local Miami contact.
- Personal attention and follow-up.
- Advisor + real estate professional / Realtor context + trusted local presence.
- International client support.
- Website available in ES / EN / FR-CA.
- Direct human communication confirmed in Spanish and English.

### CTA priority

Primary:

- Contact Jacquie.

Secondary:

- Learn more about Jacquie.

### Execution rule

Jacquie must appear before Listings and Pre-construction. She should not be reduced to a small badge or late About block.

### Avoid

- Biography overload.
- Generic "about me" copy.
- Claims about French-speaking service.
- Unverified years, rankings, testimonials, or transaction counts.

## 3. Property Management

### Weight

Strong.

### Minimum content

- Short-term rental / Airbnb-style management.
- Owner peace of mind.
- Property care.
- Guest selection.
- Guest communication and check-in coordination.
- Payment collection and transfer.
- Maintenance coordination with owner approval.
- Clear CTA for owners.

### CTA priority

Primary:

- ES: Consultar por mi propiedad
- EN: Ask about my property
- FR-CA: Demander pour ma propriete

Secondary:

- Understand what is included.

### Execution rule

This section must feel like the core service story, not one card in a generic services grid.

### Avoid

- Profit-only framing.
- Guaranteed return claims.
- Long-term management claims unless confirmed.
- A flat card grid that makes Property Management equal to Listings and Pre-construction.

## 4. Management process

### Weight

Medium.

### Minimum content

- Simple sequence for how support works.
- Publishing / setup.
- Guest handling.
- Check-in / stay coordination.
- Maintenance with approval.
- Owner follow-up.

### CTA priority

Primary:

- Consult my case / discuss my situation / present my situation.

Secondary:

- Continue to proof or details.

### Execution rule

Keep this clear and compact. It should reduce anxiety, not create a long operations manual.

### Could combine with

- Property Management, in a future iteration if the Home feels too long.

Current decision:

- Keep Process independent for now because its first version was visually validated.
- Revisit compacting it only if the Home feels too long after the support sections are complete.

## 5. Trust proof decision

### Weight

No standalone section.

### Execution rule

Do not implement Trust Proof as a separate Home block.

Trust proof should be integrated into:

- Jacquie section.
- Property Management section where operational clarity creates trust.
- About page or future About section.

Allowed proof signals:

- Florida real estate / Realtor license context, with final formal wording confirmed.
- Miami Life Realty.
- International client experience.
- Miami / Sunny Isles / South Florida focus.
- ES / EN / FR-CA website experience.
- Spanish and English human communication.

Pending wording decision:

- Confirm whether Jacquie can formally use `Realtor®`.

### Avoid

- Fake trust badges.
- Testimonials unless real and approved.
- Awards, years, rankings, volume, or managed-property count unless confirmed.
- Any direct French communication claim.

## 6. Mid-page CTA

### Weight

Strong, but compact.

### Minimum content

- The user does not need to know exactly what they need.
- The first step is a direct property-specific conversation.
- WhatsApp is the primary next step.

### CTA priority

Primary:

- One WhatsApp CTA.

Secondary:

- None.

### Execution rule

This is a conversion pause, not a new section with new content hierarchy.

Do not add context helper buttons such as:

- Ask about my property.
- I want to invest in Miami.
- I want to evaluate an opportunity.

## 7. Listings

### Weight

Light.

### Minimum content

- A small number of selected listings or examples.
- Copy framing them as market evidence.
- Guidance-oriented CTA before exploration CTA.

### CTA priority

Primary:

- I want to invest in Miami.

Secondary:

- View selected listings.

### Execution rule

Listings must support the funnel. They must not turn Home into a marketplace.

### Could combine with

- Pre-construction only as a future option after `PRECON_SUPPORT_SECTION_BRIEF.md` exists. Do not decide this fusion now.

### Avoid

- Full listings grid.
- Search/filter UI.
- "Active Listings" as a dominant section title.
- Many property cards.
- Marketplace language.
- Making property imagery visually louder than Property Management.

## 8. Pre-construction

### Weight

Light.

### Minimum content

- Pre-construction as an available advisory path.
- Guidance-first framing.
- No project-first or developer-catalog tone.
- CTA to evaluate whether it makes sense.

### CTA priority

Primary:

- Evaluate pre-construction.

Secondary:

- View selected opportunities.

### Execution rule

Pre-construction must remain secondary and should appear only after the trust, management, and conversion logic.

### Could combine with

- Listings, as a quieter support area, only as a future option after `PRECON_SUPPORT_SECTION_BRIEF.md` exists.

### Required before implementation

- Create and approve `PRECON_SUPPORT_SECTION_BRIEF.md`.
- The brief must protect against returning to Esteban / preconstruction-first logic.

### Avoid

- Featured project carousel as a dominant Home section.
- Financing plan emphasis.
- Investment metric overload.
- Project-first navigation.
- Esteban-style pre-construction hierarchy.

## 9. Final CTA

### Weight

Strong, but simple.

### Minimum content

- One human invitation to start.
- WhatsApp as primary.
- Contact form as fallback only.

### CTA priority

Primary:

- Talk to Jacquie / contact Jacquie.

Secondary:

- Contact form.

### Execution rule

End with conversation, not browsing.

### Required before implementation

- Create and approve `FINAL_CTA_BRIEF.md`.

## Combining rules if Home becomes too long

The Home should not become a long sequence of equal blocks. If the page feels too long, combine in this order:

1. Combine Management process into Property Management.
2. Keep Trust proof integrated into Jacquie / Property Management, not standalone.
3. Consider combining Listings and Pre-construction into one lower "selected paths" support area only after the Precon brief exists.
4. Keep only one mid-page CTA and one final CTA if both feel repetitive.

Do not combine away:

- Hero.
- Early Jacquie presence.
- Property Management as dominant service.
- A clear WhatsApp conversion path.

## V1 patterns that can be reused conceptually

These V1 patterns may be useful if reframed under the new hierarchy:

- `SectionAboutJacquieHome`: use the idea of Jacquie as personal trust, but move it early and make it strategically important.
- `SectionPropertyManagementHome`: reuse factual management content, but avoid generic card-grid equality and profit-only copy.
- `SectionHowItWorks`: reuse process clarity, but keep it compact and tied to management uncertainty.
- `SectionPropertyManagementTrust`: use only as factual reference for confirmed trust signals, not as a standalone Home section.
- `SectionListingsHome`: reuse selected listings as market evidence, but lower the visual weight and remove portal behavior from Home.
- WhatsApp link behavior: preserve as the main conversion path.
- Existing locale structure: preserve ES / EN / FR-CA as complete routes/experiences, with corrected communication claims.

Conceptual reuse does not mean preserving old order, old visual weight, old copy, or old CTA priority.

## V1 patterns to avoid

Avoid these patterns from V1:

- Hero secondary CTA pushing users to opportunities too early.
- Home sections with similar size, rhythm, and importance.
- Listings or projects presented as major Home destinations.
- `FeaturedProjects` or `ProjectCard` patterns dominating Home.
- `ProjectsFilters` or search/filter behavior on Home.
- `SectionServices` if it creates equal priority between services.
- Pre-construction content appearing before trust and Property Management are established.
- FR copy that says or implies Jacquie personally communicates in French.
- Bright, saturated, or decorative purple styling that overpowers the approved deep plum / aubergine V2 palette and hierarchy.
- Generic "investment opportunity" language before trust.

## Cursor implementation risks to control

Cursor must not decide product hierarchy.

Specific risks:

- It may rebuild the old `src/app/[locale]/page.tsx` order because existing imports suggest it.
- It may reuse old components without changing their narrative role.
- It may keep "View opportunities" above the fold and recreate inventory-first behavior.
- It may make Property Management a service card instead of the main service section.
- It may place Listings too high because listing components/data already exist.
- It may make Pre-construction visually louder through project cards or carousels.
- It may preserve FR copy that implies direct French-speaking support.
- It may introduce unverified proof during copy cleanup.
- It may flatten visual hierarchy by using repeated cards for every section.
- It may make contact form equal to WhatsApp.
- It may add search, filters, tabs, or marketplace affordances to Home.
- It may treat ES / EN / FR-CA as translations with unequal depth.

## Recommended implementation order by small commits

This is the future implementation sequence. It is not an instruction to implement now.

### Commit 1: Home skeleton and order

Goal:

- Establish the new Home section order.
- Remove portal-first ordering.
- Keep behavior minimal.

Scope:

- Home route structure.
- Section ordering.
- No deep visual polish yet.

### Commit 2: Hero and early Jacquie

Goal:

- Make trust and Jacquie the first narrative.
- Remove above-the-fold exploration.
- Set WhatsApp as dominant CTA.

Scope:

- Hero copy.
- Jacquie section.
- Primary/secondary CTA hierarchy.
- ES / EN / FR-CA copy parity.

### Commit 3: Property Management as dominant service

Goal:

- Elevate short-term rental management.
- Add confirmed service scope.
- Keep owner/investor confidence central.

Scope:

- Management section.
- Management CTA.
- Remove profit-only or long-term claims.

### Commit 4: Compact process and trust proof

Goal:

- Reduce operational uncertainty.
- Add only confirmed trust signals.
- Keep both sections compact.

Scope:

- Management process.
- License/brokerage/international client/local focus.
- FR communication limitation.

### Commit 5: Conversion moments

Goal:

- Keep mid-page CTA short with one WhatsApp action.
- Add final CTA only after `FINAL_CTA_BRIEF.md` is created and approved.

Scope:

- CTA copy.
- CTA destination logic.
- No context helper labels in Mid Conversion CTA.

### Commit 6: Listings support

Goal:

- Add lower-weight Listings support.
- Prevent marketplace or catalog behavior.

Scope:

- Selected Listings only.
- No filters/search on Home.

### Future commit: Pre-construction support

Goal:

- Add Pre-construction only after `PRECON_SUPPORT_SECTION_BRIEF.md` is created and approved.
- Prevent Esteban / preconstruction-first logic from returning.

Scope:

- Pre-construction advisory framing.
- No project catalog behavior.

### Commit 7: i18n and claims audit

Goal:

- Verify ES / EN / FR-CA completeness.
- Remove any unsupported claim.
- Confirm FR-CA does not promise French-speaking human support.

Scope:

- Locale files.
- Route consistency.
- CTA parity.

### Commit 8: Visual hierarchy QA

Goal:

- Ensure the page does not feel long, flat, or portal-like.
- Confirm strong/medium/light section weighting.

Scope:

- Spacing, section rhythm, CTA prominence, mobile scan.
- No new product decisions.

## Pre-Cursor acceptance criteria

Before writing a Cursor prompt, confirm:

- Hero, Jacquie, Property Management, and CTA are designated as dominant.
- Process is designated as compact and remains independent for now.
- Trust proof is integrated into Jacquie / Property Management, not standalone.
- Listings are designated as light support.
- Pre-construction is pending `PRECON_SUPPORT_SECTION_BRIEF.md`.
- Final CTA is pending `FINAL_CTA_BRIEF.md`.
- Any combined-section decision is made intentionally.
- V1 components are identified as conceptual sources only.
- Search/filter/project-first patterns are explicitly forbidden.
- FR-CA communication limitation is included.
- ES / EN / FR-CA copy parity is required.
- WhatsApp remains the primary conversion path.
