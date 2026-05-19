# Jacquie Trust Section Brief

## Status

Pre-implementation brief.

No code yet. No Cursor prompt yet.

This section appears immediately after the Hero.

## 1. Section Objective

The section must make Jacquie feel present, credible, and reachable early in the Home experience.

Its job is to answer the user's first trust questions:

- Who is Jacquie?
- Why should I write to her?
- Can she help me if I am not in Miami?
- Is this a personal advisory relationship or just another real estate site?

The section should extend the Hero promise:

> Tu persona de confianza en Miami.

It should not sell inventory. It should make the user feel that there is a real person behind the service.

## 2. Recommended Content

### ES

Eyebrow:

> Conocé a Jacquie

Headline:

> Una guía local para tomar decisiones con más confianza

Body:

> Jacquie Zarate acompaña a propietarios, compradores e inversores que necesitan una persona de confianza en Miami. Su trabajo combina orientación inmobiliaria, seguimiento personalizado y apoyo real para quienes quieren invertir, comprar o gestionar una propiedad a distancia.

Trust points:

- Realtor licenciada en Florida.
- Parte de Miami Life Realty.
- Atención en español e inglés.
- Experiencia acompañando clientes internacionales.
- Enfoque en Miami, Sunny Isles y South Florida.

CTA:

> Hablar con Jacquie

Secondary text:

> Si estás evaluando una propiedad o necesitás ayuda para gestionarla, el primer paso es conversar.

### EN

Eyebrow:

> Meet Jacquie

Headline:

> Local guidance for more confident decisions

Body:

> Jacquie Zarate supports owners, buyers, and investors who need a trusted person in Miami. Her work combines real estate guidance, personal follow-up, and practical support for people who want to invest, buy, or manage a property from a distance.

Trust points:

- Licensed Realtor in Florida.
- Part of Miami Life Realty.
- Spanish and English communication.
- Experience supporting international clients.
- Focused on Miami, Sunny Isles, and South Florida.

CTA:

> Talk to Jacquie

Secondary text:

> If you are evaluating a property or need help managing one, the first step is a conversation.

### FR-CA

Eyebrow:

> Découvrez Jacquie

Headline:

> Un accompagnement local pour décider avec plus de confiance

Body:

> Jacquie Zarate accompagne les propriétaires, acheteurs et investisseurs qui cherchent une personne de confiance à Miami. Son approche combine conseils immobiliers, suivi personnalisé et soutien concret pour celles et ceux qui veulent investir, acheter ou gérer une propriété à distance.

Trust points:

- Realtor agréée en Floride.
- Membre de Miami Life Realty.
- Communication confirmée en espagnol et en anglais.
- Expérience auprès de clients internationaux.
- Présence centrée sur Miami, Sunny Isles et le sud de la Floride.

CTA:

> Contacter Jacquie

Secondary text:

> Si vous évaluez une propriété ou avez besoin d'aide pour la gérer, la première étape est une conversation.

### FR-CA guardrail

FR-CA is a first-level website experience.

Do not claim direct human communication in French. The section may say the site supports FR-CA, but human communication is confirmed only in Spanish and English.

## 3. Recommended Visual Structure

Use a calm editorial section, not a card grid.

Recommended structure:

1. Section container with generous vertical spacing.
2. Left column:
   - eyebrow;
   - headline;
   - body copy;
   - CTA and secondary text.
3. Right column:
   - compact trust facts list;
   - optional small portrait or visual accent.

Visual direction:

- Premium, restrained, human.
- Use the deep plum palette with soft contrast.
- Avoid heavy bordered cards.
- Avoid nested cards.
- Avoid a corporate bio layout.
- Keep the section lighter than the Hero but more substantial than a small note.

The section should feel like a personal introduction with proof, not an About page compressed into the Home.

## 4. Image Recommendation

Use a photo only if it helps Jacquie feel more present without repeating the Hero too heavily.

Current recommendation:

- Do not introduce a second large portrait immediately after the Hero if the Hero already uses Jacquie's portrait.
- Use either:
  - a smaller cropped portrait treatment; or
  - no image, with trust facts and typography carrying the section.

Preferred first implementation:

- No new asset copy.
- Reuse the existing Hero portrait only if a small visual anchor is needed.
- Keep the section text-led.

Reason:

- A second large photo directly after the Hero can feel repetitive.
- The trust section should deepen credibility, not compete visually with the Hero.

## 5. Recommended CTA

Primary CTA:

- ES: `Hablar con Jacquie`
- EN: `Talk to Jacquie`
- FR-CA: `Contacter Jacquie`

Destination:

- WhatsApp, using the existing centralized WhatsApp helper.

CTA role:

- Secondary within the page hierarchy, because the Hero already has the dominant CTA.
- Visually clear but quieter than the Hero primary button.

No secondary CTA is required in this section.

## 6. What This Section Must Not Include

Do not include:

- Listings.
- Precon.
- Property cards.
- Project cards.
- Search.
- Filters.
- Service grid.
- ROI, returns, occupancy, or investment metrics.
- Testimonials unless verified.
- Years of experience unless confirmed.
- Number of managed properties unless confirmed.
- Claims that Jacquie speaks French.
- Generic luxury realtor copy.
- A long biography.

Do not make this section compete with Property Management. It should build trust before the next service section.

## 7. Acceptance Criteria

The section is acceptable if:

- It appears immediately after the Hero.
- Jacquie is clearly introduced as a trusted local advisor/person in Miami.
- It reinforces trust without inventing proof.
- It keeps WhatsApp as the conversation path.
- It uses ES / EN / FR-CA with complete, natural copy.
- FR-CA uses correct accents.
- It does not claim direct French-speaking support.
- It does not include Listings, Precon, service grids, metrics, or catalog behavior.
- It feels premium and personal, not generic brokerage.
- It does not visually overpower the Hero.
- It prepares the user for the later Property Management section.

## 8. Technical Note For Later

The current Header/Hero implementation temporarily uses inline styles to force white text on the active language button and Hero primary CTA.

This is accepted only as a temporary unblocker for visual review.

Before broad UI expansion, review whether this should be resolved through tokens/classes instead of repeating inline color styles.
