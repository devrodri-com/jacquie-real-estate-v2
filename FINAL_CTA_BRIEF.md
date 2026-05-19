# Final CTA Brief

## Status

Pre-implementation brief.

No code yet. No Cursor prompt yet.

This section should appear after `ListingsSupportSection`.

## 1. Objective

The Final CTA closes the full Home experience.

By this point, the user has already seen:

- Jacquie as the trusted person in Miami;
- the Property Management priority;
- a simple process;
- a mid-page property-specific conversion moment;
- Listings as light market evidence.

The Final CTA should give one last clear human next step:

> If something on this page matches your situation, write to Jacquie and start with a conversation.

It should serve users who:

- have a property in Miami;
- want help managing it;
- want to invest;
- are evaluating buying;
- do not know where to start;
- simply want to speak with Jacquie.

## 2. Difference From Mid Conversion CTA

The Mid Conversion CTA is specific and tactical.

It appears after Property Management and Process, before secondary support content. Its job is:

> Ask about my property.

The Final CTA is broader and closing-oriented.

It appears after Listings Support and closes the full Home. Its job is:

> Start the conversation with Jacquie, even if you are not sure which path fits yet.

Do not repeat the Mid Conversion CTA copy.

## 3. Main Message

Core message:

> You do not need to choose the perfect path before reaching out. Start with a direct conversation and Jacquie can help you understand the next step.

The emphasis is:

- human close;
- direct WhatsApp contact;
- guidance before decisions;
- trust and calm;
- no pressure;
- no inventory-first browsing.

## 4. Recommended Copy

### ES

Eyebrow:

> Próximo paso

Headline:

> Empezá con una conversación simple

Body:

> Si tenés una propiedad, estás evaluando invertir o simplemente querés entender por dónde empezar en Miami, escribime y vemos cuál es el mejor próximo paso.

Primary CTA:

> Hablar con Jacquie

Secondary CTA:

> Ir a contacto

Small note:

> Atención personalizada en español e inglés.

### EN

Eyebrow:

> Next step

Headline:

> Start with a simple conversation

Body:

> If you have a property, are considering investing, or simply want to understand where to begin in Miami, write to me and we can look at the best next step.

Primary CTA:

> Talk to Jacquie

Secondary CTA:

> Go to contact

Small note:

> Personalized communication in Spanish and English.

### FR-CA

Eyebrow:

> Prochaine étape

Headline:

> Commencez par une demande simple

Body:

> Si vous avez une propriété, évaluez un investissement ou souhaitez simplement comprendre par où commencer à Miami, envoyez une demande et nous verrons quelle est la meilleure prochaine étape.

Primary CTA:

> Contacter Jacquie

Secondary CTA:

> Aller au contact

Small note:

> Communication humaine confirmée en espagnol et en anglais. L'expérience du site est disponible en français canadien.

### FR-CA Guardrail

FR-CA is a first-level website experience.

Do not claim that Jacquie personally communicates in French. Human communication is confirmed in Spanish and English only.

The FR-CA final CTA can invite the user to contact Jacquie through the website, but it must not promise a French-language human conversation.

## 5. Primary CTA

Primary CTA:

- ES: `Hablar con Jacquie`
- EN: `Talk to Jacquie`
- FR-CA: `Contacter Jacquie`

Destination:

- WhatsApp using the existing helper pattern.

CTA intent:

> Start direct contact.

The primary CTA should be visually dominant, but the section must not feel aggressive or promotional.

## 6. Secondary CTA

Include one secondary CTA to Contact.

Labels:

- ES: `Ir a contacto`
- EN: `Go to contact`
- FR-CA: `Aller au contact`

Destination:

```text
/{locale}/contact
```

Justification:

- Some users may not want WhatsApp as the final action.
- Contact is already part of the MVP route set.
- As a fallback, it supports conversion without introducing new service paths.

Rules:

- The Contact CTA must be visually quieter than WhatsApp.
- Do not add service-specific helper buttons here.
- Do not add Listings, Precon, or browsing CTAs here.

## 7. What Not To Include

Do not include:

- Listings.
- Precon.
- Property cards.
- Project cards.
- Search.
- Filters.
- Maps.
- Service grids.
- Multiple service-specific CTA buttons.
- ROI.
- Rentabilidad.
- Occupancy promises.
- Guaranteed income.
- Guaranteed results.
- Metrics.
- Urgency pressure.
- Testimonials unless verified.
- Claims that Jacquie speaks French.
- Long explanation of Property Management.
- Long bio content.
- "Browse properties" as a closing action.

Avoid language like:

- "Limited opportunity."
- "Best investment."
- "High ROI."
- "Guaranteed returns."
- "Start earning now."
- "Exclusive deal."
- "Book a strategy session" if WhatsApp is the real conversion.

## 8. Visual Direction

The Final CTA should feel like a premium closing note, not an ad banner.

Recommended structure:

1. Compact but strong closing section.
2. Small eyebrow.
3. Headline.
4. One paragraph.
5. CTA row with WhatsApp primary and Contact secondary.
6. Small note.

Visual style:

- It can be slightly stronger than the Listings Support section.
- It should not be heavier than Property Management.
- Use the V2 plum / surface palette with restraint.
- Keep generous whitespace.
- Avoid loud gradients, decorative blobs, icons, badges, or sales banners.
- No image required.
- No card grid.

The close should feel:

- calm;
- human;
- confident;
- direct;
- premium;
- easy to act on.

## 9. Acceptance Criteria

The section is acceptable if:

- It appears after `ListingsSupportSection`.
- It closes the Home with a clear conversation path.
- It does not repeat the Mid Conversion CTA copy.
- WhatsApp is the primary CTA.
- Contact is secondary and visually quieter.
- It does not introduce Listings, Precon, search, filters, maps, or new service paths.
- It does not promise ROI, profitability, occupancy, income, guarantees, or metrics.
- It does not claim direct French-speaking support.
- ES / EN / FR-CA copy is complete and natural.
- FR-CA uses correct accents.
- It feels premium, human, calm, and not aggressive.

## 10. Implementation Risks

Main risks:

- Cursor may repeat the Mid Conversion CTA copy instead of creating a broader closing message.
- Cursor may add too many CTA buttons.
- Cursor may make Contact visually equal to WhatsApp.
- Cursor may add Listings or Precon links and reopen exploration at the end.
- Cursor may make the section look like a promotional banner.
- Cursor may use aggressive sales language.
- Cursor may imply French-language human communication in FR-CA.
- Cursor may make the section too visually heavy and compete with Property Management.
- Cursor may add new routes or components beyond the approved scope.

Implementation guardrail:

> The Final CTA should close the Home with conversation, not restart browsing.
