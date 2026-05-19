# Mid Conversion CTA Brief

## Status

Pre-implementation brief.

No code yet. No Cursor prompt yet.

This section appears after `ProcessSection`.

## 1. Section Objective

The Mid Conversion CTA closes the first Home journey:

```text
trust -> main service -> how it works -> WhatsApp
```

Its job is to give the user a clear moment to act before the Home introduces any secondary support content.

The section should:

- reinforce that Jacquie is reachable;
- invite the owner/investor to ask about their property;
- keep the conversion path simple;
- avoid adding more explanations or options.

It should feel like a natural pause:

> If this sounds like what you need, write to Jacquie.

## 2. Main Message

Core message:

> You do not need to solve the next step alone. Start with a direct conversation about your property.

In Jacquie's voice:

> Contame qué propiedad tenés o qué estás evaluando, y vemos juntas cuál es el mejor próximo paso.

The emphasis is:

- direct conversation;
- clarity;
- next step;
- property-specific context;
- calm guidance.

## 3. Recommended Copy

### ES

Headline:

> ¿Querés saber si tu propiedad puede gestionarse mejor?

Body:

> Escribime y contame qué propiedad tenés, dónde está y qué necesitás resolver. El primer paso puede ser una conversación simple.

Primary CTA:

> Consultar por mi propiedad

Small note:

> Sin compromiso. Primero entendemos tu caso.

### EN

Headline:

> Want to know if your property can be managed better?

Body:

> Write to me and tell me what property you have, where it is, and what you need to solve. The first step can be a simple conversation.

Primary CTA:

> Ask about my property

Small note:

> No pressure. First, we understand your situation.

### FR-CA

Headline:

> Vous voulez savoir si votre propriété peut être mieux gérée?

Body:

> Envoyez une demande avec le type de propriété, son emplacement et ce que vous souhaitez résoudre. La première étape peut être simple.

Primary CTA:

> Demander de l'information sur ma propriété

Small note:

> Sans engagement. D’abord, nous devons comprendre votre situation.

### FR-CA guardrail

FR-CA is a first-level website experience.

Do not claim that Jacquie personally communicates in French. Human communication is confirmed in Spanish and English only.

## 4. CTA Principal

Primary CTA:

- ES: `Consultar por mi propiedad`
- EN: `Ask about my property`
- FR-CA: `Demander de l'information sur ma propriété`

Destination:

- WhatsApp using the existing helper pattern.

CTA intent:

> Start a property-specific conversation.

CTA should be clear and visible, but the section should not feel like a hard sell.

## 5. Secondary CTA

Do not include a secondary CTA in this section.

Reason:

- The purpose is conversion, not exploration.
- The user has already seen the service and process.
- Adding a second path weakens the moment.

If a user wants more detail, the prior Property Management section already has a secondary link to `/property-management`.

## 6. Visual Direction

The section should be short, calm, and premium.

Recommended structure:

1. Compact section block.
2. Headline.
3. One short paragraph.
4. WhatsApp CTA.
5. Small note.

Visual style:

- Use the light surface or a subtle white inset.
- Keep it less heavy than the dark Property Management block.
- Avoid a large card if it feels like a promo banner.
- Use generous spacing, but keep total section height compact.
- No image required.
- No icons required.
- No decorative gradients.

The section should feel like a refined invitation, not an ad.

## 7. What Not To Include

Do not include:

- Listings.
- Precon.
- Property cards.
- Project cards.
- Search or filters.
- Service grid.
- ROI claims.
- Guaranteed occupancy.
- Guaranteed profitability.
- Revenue projections.
- Metrics.
- Testimonials unless verified.
- Claims that Jacquie speaks French.
- Long explanation of the process.
- Multiple CTAs.
- Urgency pressure.

Avoid language like:

- "Limited spots."
- "Guaranteed results."
- "Maximize your returns."
- "Start earning now."
- "Book a free strategy call" if the real conversion is WhatsApp.

## 8. Acceptance Criteria

The section is acceptable if:

- It appears after `ProcessSection`.
- It is short and focused on conversion.
- WhatsApp is the only CTA.
- It invites a property-specific conversation.
- It does not mention Listings or Precon.
- It does not promise ROI, occupancy, profitability, or metrics.
- It does not claim direct French-speaking support.
- ES / EN / FR-CA copy is complete and natural.
- FR-CA uses correct accents.
- It feels premium, human, and calm.
- It closes the first Home journey before secondary support content begins.
