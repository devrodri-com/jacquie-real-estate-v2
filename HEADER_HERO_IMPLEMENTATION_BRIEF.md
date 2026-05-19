# Header + Hero Implementation Brief

## Status

Pre-implementation brief.

No code yet. No Cursor prompt yet.

Source direction:

- `HERO_DIRECTION.md`
- `STRATEGY.md`
- `HOME_ARCHITECTURE.md`
- `HOME_SECTIONS_PLAN.md`
- `IMPLEMENTATION_BRIEF.md`
- `I18N_DECISION.md`

## Strategic Goal

The first real V2 visual block must establish trust before inventory.

The Header + Hero should make the user understand:

- Jacquie is the trusted local person in Miami.
- The site is for people who need guidance, follow-up, and confidence.
- Property Management / short-term rental support is a priority.
- WhatsApp is the primary conversion path.

The block must not feel like a real estate portal, a project catalog, or a prettier V1.

## 1. Exact Header Structure

### Desktop

Recommended structure:

1. Left brand:
   - Primary: `Jacquie Zarate`
   - Pending variant: `Jacquie Zarate Realtor` only if final formal wording is confirmed.
   - Do not use `Miami Real Estate` as a qualifier or brand line.

2. Navigation:
   - ES: `Gestión de propiedades`, `Sobre Jacquie`, `Contacto`
   - EN: `Property Management`, `About`, `Contact`
   - FR-CA: `Gestion de propriétés`, `À propos`, `Contact`

3. Language switcher:
   - `ES`
   - `EN`
   - `FR-CA`

4. Optional visible CTA:
   - Use only if it does not crowd the header.
   - Label should match locale:
     - ES: `Hablar con Jacquie`
     - EN: `Talk to Jacquie`
     - FR-CA: `Contacter Jacquie`
   - Destination: WhatsApp.

### Mobile

Recommended structure:

1. Left brand:
   - `Jacquie Zarate`

2. Right side:
   - language access
   - compact menu or contact action

Mobile should not show too many links at once.

### Header rules

- Keep it minimal and quiet.
- Do not include Listings in the first Header implementation.
- Do not include Pre-construction in the first Header implementation.
- Do not include search, filters, property count, or catalog language.
- Do not make language switching visually louder than the main conversion path.
- Keep the header premium and editorial, not portal-like.

## 2. Exact Hero Structure

Recommended content order:

1. Small trust/context line.
2. Main headline.
3. Subheadline.
4. CTA row.
5. Small trust/support note.
6. Hero image area.

### Hero text structure

Small trust/context line should communicate:

- Miami.
- guidance.
- ownership/investment support.

It should not be a generic eyebrow like `Luxury Real Estate`.

Main headline should be the dominant visual element.

Subheadline should introduce:

- investment decisions;
- short-term rental management;
- local support;
- follow-up and care.

### Hero image structure

Preferred:

- Jacquie portrait or human presence.
- Image should feel personal and ownable.
- It should not overpower the headline.

Acceptable fallback:

- calm Miami background if Jacquie asset is not strong enough;
- Jacquie introduction must then appear immediately after or visually near the Hero.

Do not use:

- listing cards;
- pre-construction renderings;
- project images;
- service grids;
- search UI.

## 3. Final Recommended Content

### ES

Brand:

> Jacquie Zarate

Header links:

- Property Management
- Sobre Jacquie
- Contacto

Language labels:

- ES
- EN
- FR-CA

Hero context line:

> Realtor en Florida · Miami / Sur de Florida

Realtor wording note:

- Confirm final formal use of `Realtor®` / Realtor wording before launch.
- If not confirmed, replace with a safer Florida real estate professional phrase.

Headline:

> Tu persona de confianza en Miami

Subheadline:

> Desde la inversión hasta la gestión diaria de renta corta, tenés a alguien local que te orienta, responde y cuida el proceso.

Primary CTA:

> Hablar con Jacquie

Secondary CTA:

> Ver gestión de propiedades

Support note:

> Acompañamiento personalizado para propietarios e inversores internacionales.

### EN

Brand:

> Jacquie Zarate

Header links:

- Property Management
- About
- Contact

Language labels:

- ES
- EN
- FR-CA

Hero context line:

> Florida Realtor · Miami / South Florida

Headline:

> Your trusted person in Miami

Subheadline:

> From investment decisions to day-to-day short-term rental management, you have someone local to guide the process and follow through.

Primary CTA:

> Talk to Jacquie

Secondary CTA:

> View Property Management

Support note:

> Personalized guidance for international owners and investors.

### FR-CA

Brand:

> Jacquie Zarate

Header links:

- Gestion de propriétés
- À propos
- Contact

Language labels:

- ES
- EN
- FR-CA

Hero context line:

> Realtor en Floride · Miami / sud de la Floride

Headline:

> Votre repère de confiance à Miami

Subheadline:

> De la décision d'investissement à la gestion quotidienne de location courte durée, vous avez un accompagnement local pour avancer avec clarté.

Primary CTA:

> Contacter Jacquie

Secondary CTA:

> Voir la gestion de propriétés

Support note:

> Accompagnement personnalisé pour propriétaires et investisseurs internationaux.

### FR-CA copy rule

Final FR-CA interface copy must use correct French with accents.

The site must not claim Jacquie personally communicates in French. FR-CA is a first-level website experience, not a confirmed human-language support promise.

## 4. CTA Hierarchy

### Primary CTA

Purpose:

> Open WhatsApp conversation.

Labels:

- ES: `Hablar con Jacquie`
- EN: `Talk to Jacquie`
- FR-CA: `Contacter Jacquie`

Use primary visual weight.

### Secondary CTA

Purpose:

> Let the user understand the main commercial service before contacting.

Destination:

```text
/[locale]/property-management
```

Labels:

- ES: `Ver gestión de propiedades`
- EN: `View Property Management`
- FR-CA: `Voir la gestion de propriétés`

Use quieter visual weight.

### CTAs to avoid in Hero

Do not use as primary Hero CTA:

- Browse Listings.
- View Properties.
- Search Properties.
- See Projects.
- Explore Pre-construction.
- View Opportunities.
- Learn More.

These shift the page back toward portal/catalog logic.

## 5. Responsive Behavior

### Desktop

Expected behavior:

- Header remains horizontally simple.
- Hero should have strong text hierarchy and one visual focal point.
- Text should not overlap image.
- CTA row should remain clear and not wrap awkwardly.
- Hero should leave a hint of the next section below the fold if possible.

Recommended composition:

- Text and image in a balanced editorial layout.
- Image can sit to the side or act as a restrained background, but not as a noisy full-bleed catalog image.

### Tablet

Expected behavior:

- Header may reduce nav spacing.
- CTAs remain visible.
- Hero image should not crop Jacquie's face poorly.
- Text should remain readable without over-wide line lengths.

### Mobile

Expected behavior:

- Brand, language/menu/contact access stay simple.
- Hero stacks vertically.
- Headline remains readable and not oversized.
- CTAs stack or wrap cleanly.
- No text should overlap the image.
- If using Jacquie portrait, face crop must remain respectful and natural.

## 6. Hero Asset Candidates

Source folder reviewed:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/public
```

No asset should be copied into `/web` until the implementation step explicitly requires it.

### Best Jacquie candidates

`public/images/jacquie-zarate.jpg`

- Pros:
  - Creates immediate personal trust.
  - Makes the Hero ownable to Jacquie.
- Risks:
  - Square crop.
  - Retouched look.
  - Could feel less editorial if used too large.
- Recommendation:
  - Candidate for a portrait treatment, not full-bleed background.

`public/images/jacquie-zarate1.jpg`

- Pros:
  - Darker background may pair better with plum/aubergine.
  - Stronger visual separation.
- Risks:
  - Studio-like and still retouched.
  - Black background can feel too formal.
- Recommendation:
  - Candidate for restrained portrait use if it feels premium in context.

### Best Miami candidates

`public/images/miami-hero12.jpg`

- Pros:
  - Calm, panoramic, editorial.
  - Less loud than other skyline options.
- Risks:
  - Very wide crop may be hard on mobile.
- Recommendation:
  - Strongest non-Jacquie background candidate.

`public/images/hero-fallback.jpg`

- Pros:
  - Strong Miami context.
  - Good landscape framing.
- Risks:
  - Warm orange sunset may fight the plum palette.
  - Could feel generic if used full-bleed.
- Recommendation:
  - Possible fallback only with careful treatment.

`public/images/hero-fallback-mobile.jpg`

- Use only as mobile companion if `hero-fallback.jpg` is selected.

### Avoid for Hero

Do not use for Hero:

- `public/images/precon-hero*.jpg`
- `public/images/projects/*.webp`
- `public/images/storages/callaway-hero.jpg`

Reason:

- They push pre-construction, projects, catalog, or unrelated inventory too early.

### Later-use only

`public/images/miamiliferealty_logo.png`

- Can support brokerage trust later.
- Should not define the Hero.

`public/icons/whatsapp.svg`

- Can support the primary CTA if visually restrained.
- Should not become a decorative element.

## 7. What To Copy Or Not Copy From `/public`

### Do not copy yet

Do not copy any asset into `/web` during planning.

### When implementation starts

Copy only the selected Hero asset(s), not the whole image folder.

Recommended copy candidates for first implementation test:

1. One Jacquie portrait:
   - `jacquie-zarate.jpg` or `jacquie-zarate1.jpg`

2. Optional one Miami fallback:
   - `miami-hero12.jpg`

Do not copy:

- all Miami images;
- precon images;
- project images;
- storage images;
- old scaffold icons unless needed;
- any image that makes V2 feel inherited from V1.

## 8. Implementation Risks

Cursor must not:

- Add Listings or Pre-construction to the Hero.
- Add search or filters.
- Add a service grid above the fold.
- Add too many nav links.
- Use `Miami Real Estate` as the brand qualifier.
- Make WhatsApp secondary.
- Make Property Management invisible.
- Use project/precon imagery because it looks premium.
- Recreate V1 section order.
- Use FR-CA copy without accents in final UI.
- Imply direct French-speaking communication by Jacquie.
- Overuse purple as decoration.
- Turn the Hero into a generic luxury real estate page.

The implementation should preserve the single conversion idea:

> Trust Jacquie, then start a conversation.

## 9. Visual Acceptance Criteria

The Header + Hero can be accepted only if:

- The first screen clearly communicates trust before inventory.
- Jacquie is positioned as the trusted person in Miami.
- WhatsApp is the dominant CTA.
- Property Management appears early through the subheadline or secondary CTA.
- Listings and Pre-construction do not appear above the fold.
- The header is minimal and does not look like a portal.
- The brand reads as `Jacquie Zarate`. `Jacquie Zarate Realtor` remains pending formal wording confirmation. Do not use `Miami Real Estate`.
- ES / EN / FR-CA are treated as first-level experiences.
- FR-CA UI copy uses correct accents.
- No copy claims Jacquie speaks French.
- The deep plum / aubergine palette feels premium and restrained.
- Text fits cleanly on mobile and desktop.
- Images do not crop Jacquie awkwardly.
- The fold does not feel busy, card-heavy, or catalog-like.
- The implementation does not copy V1 components.
