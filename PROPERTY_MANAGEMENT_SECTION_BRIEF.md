# Property Management Section Brief

## Status

Pre-implementation brief.

No code yet. No Cursor prompt yet.

This section belongs on the Home after the Hero and Jacquie trust introduction.

## 1. Objective In The Home

The Home Property Management section must position short-term rental management as Jacquie's main commercial service without turning the Home into the full service page.

Its job is to make the user understand:

- Jacquie can help manage a Miami property for short-term rental.
- The value is peace of mind, care, follow-up, and less daily burden.
- The service is especially relevant for owners who are not in Miami.
- The next step is to ask about their property.

The section should convert uncertainty into a conversation.

It should answer:

> Can I generate income from my property without managing every detail myself?

## 2. Difference From `/property-management`

### Home section

The Home section should be a concise positioning block.

It should:

- introduce the service;
- explain the core promise;
- show 3-4 key responsibilities;
- connect the service to Jacquie's trust role;
- push the user to WhatsApp or the dedicated page.

### Dedicated page

The `/property-management` page should hold the deeper explanation.

It can include:

- full process;
- detailed service scope;
- owner approval flow;
- guest handling details;
- maintenance coordination;
- FAQs;
- intake questions;
- expectations and limitations;
- more complete conversion section.

The Home should not duplicate all of that. It should create enough clarity and trust for the user to continue.

## 3. Main Message

Core message:

> Your Miami property can generate income without requiring you to manage the daily operation from a distance.

In Jacquie's voice:

> Tu propiedad puede generar ingresos sin que tengas que estar encima de cada detalle.

The emphasis is not only profitability.

The emphasis is:

- peace of mind;
- care;
- occupancy support;
- guest quality;
- real follow-up;
- owner approval where needed;
- a local person who responds.

## 4. Recommended Copy

### ES

Eyebrow:

> Gestión de propiedades

Headline:

> Tu propiedad en Miami, gestionada con cuidado y seguimiento real

Body:

> Si tenés una propiedad para renta corta, puedo ayudarte a publicarla, recibir huéspedes, coordinar detalles y mantenerte informado sin que tengas que estar encima de la gestión diaria.

Key points:

- Publicación en plataformas como Airbnb.
- Selección cuidadosa de huéspedes y atención directa.
- Check-in personalizado y seguimiento durante la estadía.
- Coordinación de arreglos con aprobación del propietario.

Primary CTA:

> Consultar por mi propiedad

Secondary CTA:

> Ver cómo funciona

Support note:

> Ideal para propietarios que quieren generar ingresos sin perder control ni tranquilidad.

### EN

Eyebrow:

> Property Management

Headline:

> Your Miami property, managed with care and real follow-up

Body:

> If you have a property for short-term rental, I can help publish it, receive guests, coordinate details, and keep you informed without requiring you to manage the daily operation.

Key points:

- Publishing on platforms such as Airbnb.
- Careful guest selection and direct guest attention.
- Personalized check-in and follow-up during the stay.
- Repair coordination with owner approval.

Primary CTA:

> Ask about my property

Secondary CTA:

> See how it works

Support note:

> Designed for owners who want income potential without losing control or peace of mind.

### FR-CA

Eyebrow:

> Gestion de propriétés

Headline:

> Votre propriété à Miami, gérée avec soin et suivi réel

Body:

> Si vous avez une propriété destinée à la location courte durée, je peux vous aider à la publier, accueillir les voyageurs, coordonner les détails et vous tenir informé sans que vous ayez à gérer chaque étape au quotidien.

Key points:

- Publication sur des plateformes comme Airbnb.
- Sélection attentive des voyageurs et suivi direct.
- Check-in personnalisé et accompagnement pendant le séjour.
- Coordination des réparations avec approbation du propriétaire.

Primary CTA:

> Demander de l’information sur ma propriété

Secondary CTA:

> Voir comment ça fonctionne

Support note:

> Pensé pour les propriétaires qui veulent un potentiel de revenus sans perdre le contrôle ni la tranquillité d'esprit.

### FR-CA guardrail

FR-CA is a first-level website experience.

Do not claim that Jacquie personally communicates in French. Human communication is confirmed in Spanish and English only.

## 5. Key Points Limit

Use a maximum of 4 key points on the Home.

Recommended final set:

1. Airbnb / platform publication.
2. Careful guest selection and direct guest attention.
3. Personalized check-in and stay follow-up.
4. Maintenance or repair coordination with owner approval.

Do not add every operational detail to the Home section.

## 6. CTA Hierarchy

### Primary CTA

Intent:

> Open a property-specific conversation through WhatsApp.

Labels:

- ES: `Consultar por mi propiedad`
- EN: `Ask about my property`
- FR-CA: `Demander de l’information sur ma propriété`

Destination:

- WhatsApp using the existing helper pattern.

CTA role:

- Strong, but not louder than the Hero's main CTA.
- Contextual to Property Management.

### Secondary CTA

Intent:

> Let the user continue to the dedicated Property Management page.

Labels:

- ES: `Ver cómo funciona`
- EN: `See how it works`
- FR-CA: `Voir comment ça fonctionne`

Destination:

```text
/[locale]/property-management
```

CTA role:

- Quieter than primary.
- Useful for users who need more explanation before contacting.

## 7. Content Reserved For Dedicated Page

Keep these for `/property-management`, not the Home section:

- Full step-by-step process.
- Detailed platform publishing flow.
- Guest screening explanation.
- Payment collection and transfer details.
- Maintenance approval process in depth.
- Owner onboarding questions.
- House rules / guest expectations.
- Pricing strategy.
- Calendar management details.
- Cleaning and turnover details unless confirmed.
- FAQs.
- Legal, tax, or compliance notes.
- Detailed limitations or exclusions.

The Home section should create interest and trust, then move the user to conversation or deeper reading.

## 8. What This Section Must Not Include

Do not include:

- ROI claims.
- Guaranteed occupancy.
- Guaranteed profitability.
- Revenue projections.
- "Passive income" promises.
- Metrics not confirmed.
- Testimonials not confirmed.
- Number of properties managed unless confirmed.
- Long-term rental management unless later defined.
- Listings.
- Precon.
- Property cards.
- Project cards.
- Search or filters.
- Cold corporate language.
- Claims that Jacquie speaks French.

Avoid language like:

- "Maximize returns."
- "Guaranteed income."
- "Hands-free investment."
- "Luxury concierge management."
- "We handle everything" if owner approvals are still part of the process.

## 9. Visual Direction

The section should feel like the primary service block, but not become a landing page inside the Home.

Recommended visual structure:

1. Strong section header.
2. Short body paragraph.
3. 4 key points in a compact layout.
4. Primary CTA + secondary CTA.
5. Small support note.

Visual weight:

- Stronger than the Jacquie trust section.
- Slightly quieter than Hero.
- Clear enough to establish business priority.

Layout direction:

- Use a full-width section band or spacious editorial block.
- Use the deep plum / aubergine palette.
- Avoid card grids with equal service weight.
- Avoid nested cards.
- Avoid icons unless they are restrained and purposeful.
- Do not use listing/project imagery.
- Do not use a big second portrait of Jacquie here.

The section should feel practical, calm, and trustworthy.

## 10. Acceptance Criteria

The section is acceptable if:

- It appears after Hero and Jacquie trust section.
- It clearly positions short-term rental Property Management as the main service.
- It explains peace of mind, care, and follow-up without overpromising.
- It uses no more than 4 key points.
- It has a WhatsApp primary CTA and `/property-management` secondary CTA.
- It does not include Listings or Precon.
- It does not include ROI, guaranteed occupancy, or guaranteed profitability.
- It does not imply long-term management.
- It does not claim direct French-speaking support.
- ES / EN / FR-CA copy is complete and natural.
- FR-CA uses correct accents.
- It feels personal and premium, not corporate or portal-like.
- It does not duplicate the full dedicated page.
