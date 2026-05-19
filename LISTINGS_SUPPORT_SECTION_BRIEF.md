# Listings Support Section Brief

## Status

Pre-implementation brief.

No code yet. No Cursor prompt yet.

This section appears after the first Home conversion journey:

```text
Header -> Hero -> Jacquie Trust -> Property Management -> Process -> Mid Conversion CTA
```

## 1. Section Objective

The Listings support section should add market tangibility without changing the Home's strategic focus.

Its job is to show:

- there are real Miami opportunities;
- Jacquie is connected to the market;
- users can explore selected properties if they want;
- inventory exists, but trust and guidance remain the main product.

This section should support credibility, not become the Home's center.

## 2. Strategic Role In Home

Listings are secondary support content.

They should function as:

- evidence of real market access;
- a light exploration path;
- a way to reassure buyers/investors that the site is grounded in actual opportunities.

They should not function as:

- the main conversion path;
- a property portal;
- a marketplace;
- a search experience;
- the main proof of Jacquie's value.

The user should feel:

> Jacquie can show me real opportunities, but I should talk to her to understand what makes sense.

## 3. Content To Show

The Home should show only a curated preview.

Recommended content per listing:

- image;
- neighborhood / area;
- short title;
- price if verified;
- key facts if verified;
- short context line if available;
- link to view detail if the listing route exists;
- CTA to ask about the property through WhatsApp.

Do not show unverified data.

If a field is not verified, omit it rather than filling a placeholder.

## 4. Maximum Listings On Home

Show a maximum of 3 listings on the Home.

Recommended starting point:

- 2 or 3 curated listings.

Reason:

- Enough to make the market feel real.
- Not enough to become a catalog.
- Keeps the Home hierarchy focused on trust and Property Management.

Do not show a grid with many properties.

Do not add pagination.

Do not add filters.

## 5. Recommended Copy

### ES

Eyebrow:

> Oportunidades seleccionadas

Headline:

> Algunas propiedades para empezar a mirar el mercado

Body:

> Estos listings sirven como una primera referencia. Si alguna propiedad te interesa, lo más importante es conversar para entender si realmente encaja con tu objetivo.

Primary CTA:

> Preguntar por una propiedad

Secondary CTA:

> Ver propiedades seleccionadas

Small note:

> La selección completa puede cambiar según disponibilidad y contexto del mercado.

### EN

Eyebrow:

> Selected opportunities

Headline:

> Selected properties to understand the market

Body:

> These listings are a first reference point. If a property interests you, the most important step is to talk and understand whether it truly fits your goal.

Primary CTA:

> Ask about a property

Secondary CTA:

> View selected properties

Small note:

> The selection may change based on availability and market context.

### FR-CA

Eyebrow:

> Opportunités sélectionnées

Headline:

> Quelques propriétés pour commencer à lire le marché

Body:

> Ces listings servent de premier repère. Si une propriété vous intéresse, l'étape la plus importante est de comprendre si elle correspond vraiment à votre objectif.

Primary CTA:

> Demander de l'information sur une propriété

Secondary CTA:

> Voir les propriétés sélectionnées

Small note:

> La sélection peut changer selon la disponibilité et le contexte du marché.

### FR-CA guardrail

FR-CA is a first-level website experience.

Do not claim that Jacquie personally communicates in French. Human communication is confirmed in Spanish and English only.

## 6. CTA Hierarchy

### Primary CTA

Intent:

> Ask Jacquie about a property through WhatsApp.

Labels:

- ES: `Preguntar por una propiedad`
- EN: `Ask about a property`
- FR-CA: `Demander de l'information sur une propriété`

Destination:

- WhatsApp using the existing helper pattern.

CTA role:

- Clear but not louder than the earlier Property Management and Mid Conversion CTAs.
- Should keep conversation as the preferred next step.

### Secondary CTA

Intent:

> Let users browse a limited selected listings page if/when it exists.

Labels:

- ES: `Ver propiedades seleccionadas`
- EN: `View selected properties`
- FR-CA: `Voir les propriétés sélectionnées`

Destination:

```text
/[locale]/listings
```

Important:

- Only include this secondary CTA when the `/listings` route exists.
- Do not create the route as part of this brief.
- If the route is not implemented yet, omit the secondary CTA and keep WhatsApp as the only CTA.

## 7. What Not To Include

Do not include:

- Search.
- Filters.
- Sort controls.
- Map view.
- Pagination.
- Many properties.
- Marketplace language.
- "Browse all inventory" as the dominant action.
- ROI claims.
- Profitability claims.
- Guaranteed rental potential.
- Investment metrics unless verified and strategically approved.
- Precon.
- Project cards.
- Financing tables.
- Urgency pressure.
- Unverified badges.
- Testimonials unless verified.
- Claims that Jacquie speaks French.

Avoid language like:

- "Find your dream home."
- "Browse all properties."
- "Best deals."
- "High ROI."
- "Investment guaranteed."
- "Hot listings."
- "Exclusive inventory" unless verified.

## 8. Visual Direction

The section should feel lighter than Property Management and less urgent than conversion sections.

Recommended visual approach:

- editorial preview;
- 2-3 selected items;
- generous spacing;
- restrained imagery;
- minimal metadata;
- no filters/search UI;
- no dense cards;
- no marketplace grid.

Listing items should feel curated, not mass-produced.

Preferred structure:

1. Section header and short body copy.
2. 2-3 selected listing previews.
3. Small note.
4. WhatsApp CTA.
5. Secondary listing CTA only if route exists.

Visual hierarchy:

- The section should be clearly secondary.
- Property Management should still feel more important.
- WhatsApp conversation should still feel like the better next step.

## 9. Acceptance Criteria

The section is acceptable if:

- It appears only after the first conversion journey.
- It shows no more than 3 listings.
- It does not include filters, search, pagination, or map behavior.
- It does not use marketplace language.
- It reinforces Jacquie's market connection without making inventory dominant.
- It keeps WhatsApp as the primary action.
- It does not mention Precon.
- It does not promise ROI, profitability, guaranteed rent, or metrics.
- ES / EN / FR-CA copy is complete and natural.
- FR-CA uses correct accents.
- It does not claim direct French-speaking support.
- It feels curated and premium, not like a portal.

## 10. Implementation Risks

Main risks:

- Cursor may turn this into a listing grid or portal.
- Cursor may add filters/search because listings often imply catalog behavior.
- Cursor may show too many properties.
- Cursor may make Listings visually compete with Property Management.
- Cursor may add a `/listings` route before the route is intentionally planned.
- Cursor may copy V1 listing components and inherit V1 hierarchy.
- Cursor may use unverified listing data or claims.
- Cursor may add Precon or project-style cards by association.
- Cursor may make browsing the dominant CTA instead of WhatsApp.

Implementation should stay narrow:

> Show a curated glimpse of real opportunities, then guide the user back to conversation.
