# Cursor Prompt - Header + Hero V2

## Prompt

Implement only the initial V2 Header + Hero for Jacquie Real Estate.

Work inside:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/web
```

Read and follow:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/HEADER_HERO_IMPLEMENTATION_BRIEF.md
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/HERO_DIRECTION.md
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/I18N_DECISION.md
```

Do not edit strategy documents.

## Scope

Implement:

- Global minimal Header.
- Initial Home Hero.
- ES / EN / FR-CA copy.
- WhatsApp primary CTA.
- Property Management secondary CTA.
- Language switcher that preserves the current path.

Do not implement:

- Remaining Home sections.
- Listings.
- Precon.
- Service grids.
- Search UI.
- Filters.
- Property counts.
- Metrics.
- Testimonials.
- New routes.
- V1 components.
- New dependencies.

## Files To Create

Create exactly these files:

```text
src/components/site-header.tsx
src/components/home-hero.tsx
src/lib/whatsapp.ts
```

## Files To Modify

Modify exactly these files:

```text
src/components/site-shell.tsx
src/app/[locale]/page.tsx
src/i18n/messages/es.json
src/i18n/messages/en.json
src/i18n/messages/fr-CA.json
```

Do not modify i18n routing files:

```text
src/i18n/routing.ts
src/i18n/request.ts
src/proxy.ts
```

Do not modify route structure.

## Asset Copy

Copy exactly one asset:

From:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/public/images/jacquie-zarate1.jpg
```

To:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/web/public/images/jacquie-zarate-hero.jpg
```

Create the destination folder:

```text
public/images
```

Do not copy any other asset.

## WhatsApp Helper

Create:

```text
src/lib/whatsapp.ts
```

It must export:

- `WHATSAPP_NUMBER` with value `17864072591`.
- `type WhatsAppLocale = "es" | "en" | "fr-ca"`.
- `WHATSAPP_MESSAGES`, a locale-keyed object for Hero CTA messages.
- `createWhatsAppUrl(locale: WhatsAppLocale): string`.

Add one short comment above `WHATSAPP_NUMBER`:

```text
Confirm this public number before launch.
```

Hero CTA messages:

ES:

```text
Hola Jacquie, quiero hablar sobre una propiedad en Miami.
```

EN:

```text
Hi Jacquie, I want to talk about a property in Miami.
```

FR-CA:

```text
Bonjour Jacquie, je veux discuter d'une propriété à Miami.
```

The returned URL must use:

```text
https://wa.me/17864072591?text=
```

Encode the message with `encodeURIComponent`.

## Site Header

Create:

```text
src/components/site-header.tsx
```

This component must be a client component using:

```text
"use client"
```

Use `usePathname` from `next/navigation`.

The Header must render globally through `SiteShell`, not only on Home.

### Header Brand

Brand text:

```text
Jacquie Zarate
```

Do not render:

```text
Miami Real Estate
```

Do not render:

```text
Jacquie Real Estate V2
```

### Desktop Header

Desktop layout:

- Brand on the left.
- Navigation links after the brand.
- Language switcher on the right.
- No WhatsApp CTA in the Header.

Navigation links:

- `Property Management`
- `About`
- `Contact`

Navigation destinations must preserve locale:

ES:

```text
/es/property-management
/es/about
/es/contact
```

EN:

```text
/en/property-management
/en/about
/en/contact
```

FR-CA:

```text
/fr-ca/property-management
/fr-ca/about
/fr-ca/contact
```

Header link labels by locale:

ES:

```text
Property Management
Sobre Jacquie
Contacto
```

EN:

```text
Property Management
About
Contact
```

FR-CA:

```text
Gestion de propriétés
À propos
Contact
```

### Mobile Header

Mobile layout:

- Brand.
- Language switcher.
- No complex menu.
- No WhatsApp CTA.
- No hidden service menu.

Hide the nav links on small screens. Keep language links visible.

### Header Restrictions

Do not include:

- Listings.
- Precon.
- Search.
- Filters.
- Property count.
- Project links.
- Service grid.
- WhatsApp CTA.

## Language Switcher

The language switcher must render exactly:

```text
ES
EN
FR-CA
```

It must preserve the current path after the locale segment.

Required path behavior:

```text
/es/property-management -> /en/property-management
/es/property-management -> /fr-ca/property-management
/fr-ca/about -> /es/about
/en/contact -> /fr-ca/contact
```

Home path behavior:

```text
/es -> /en
/es -> /fr-ca
/fr-ca -> /es
/en -> /fr-ca
```

Implementation rule:

- Derive the current route locale from the first path segment.
- Supported route locales are `es`, `en`, `fr-ca`.
- Strip the first segment from `pathname`.
- Rebuild links as `/${targetLocale}${remainingPath}`.
- For Home, the rebuilt link must not include a trailing slash.

Do not send all language links to the locale Home.

## Home Hero

Create:

```text
src/components/home-hero.tsx
```

Use `next/image`.

The Hero must render only on:

```text
src/app/[locale]/page.tsx
```

Replace the Home placeholder with `HomeHero`.

Do not remove placeholders from:

```text
src/app/[locale]/property-management/page.tsx
src/app/[locale]/about/page.tsx
src/app/[locale]/contact/page.tsx
```

### Hero Structure

Render this structure in order:

1. Context line.
2. Headline.
3. Subheadline.
4. CTA row.
5. Support note.
6. Image area.

### Hero Layout

Desktop:

- Editorial two-column layout.
- Text column on the left.
- Jacquie image column on the right.
- No text overlap with image.

Mobile:

- Text first.
- Image second.
- CTAs stacked or wrapped cleanly.
- No text overlap with image.
- Jacquie's face remains visible and respectful.

### Hero Image

Use:

```text
/images/jacquie-zarate-hero.jpg
```

Use `next/image`.

Use a stable image container with responsive dimensions.

Do not use Miami skyline images.

Do not use project images.

Do not use preconstruction images.

## Hero Copy

Add the required message keys to:

```text
src/i18n/messages/es.json
src/i18n/messages/en.json
src/i18n/messages/fr-CA.json
```

Keep existing placeholder keys for non-Home pages.

Use this exact Home Hero copy.

### ES

```text
context: Realtor en Florida · Miami / South Florida
headline: Tu persona de confianza en Miami
subheadline: Desde la inversión hasta la gestión diaria de renta corta, tenés a alguien local que te orienta, responde y cuida el proceso.
primaryCta: Hablar con Jacquie
secondaryCta: Ver Property Management
supportNote: Acompañamiento personalizado para propietarios e inversores internacionales.
imageAlt: Jacquie Zarate, Realtor en Miami
```

### EN

```text
context: Florida Realtor · Miami / South Florida
headline: Your trusted person in Miami
subheadline: From investment decisions to day-to-day short-term rental management, you have someone local to guide the process and follow through.
primaryCta: Talk to Jacquie
secondaryCta: View Property Management
supportNote: Personalized guidance for international owners and investors.
imageAlt: Jacquie Zarate, Miami Realtor
```

### FR-CA

```text
context: Realtor en Floride · Miami / South Florida
headline: Votre repère de confiance à Miami
subheadline: De la décision d'investissement à la gestion quotidienne de location courte durée, vous avez un accompagnement local pour avancer avec clarté.
primaryCta: Contacter Jacquie
secondaryCta: Voir la gestion de propriétés
supportNote: Accompagnement personnalisé pour propriétaires et investisseurs internationaux.
imageAlt: Jacquie Zarate, Realtor à Miami
```

FR-CA UI copy must use correct accents.

Do not claim Jacquie personally communicates in French.

## CTA Behavior

Primary CTA:

- Label comes from locale messages.
- Href comes from `createWhatsAppUrl(locale)`.
- Opens WhatsApp.
- Use dominant visual weight.

Secondary CTA:

- Label comes from locale messages.
- Href is `/${locale}/property-management`.
- Use quieter visual weight.

Route locale passed to WhatsApp helper must be one of:

```text
es
en
fr-ca
```

## Styling Rules

Use existing Tailwind v4 tokens from `globals.css`:

```text
primary: #3B274A
accent: #A98BB8
surface: #F8F5FA
foreground: #2B2530
white: #FFFFFF
```

Visual direction:

- Premium.
- Editorial.
- Minimal.
- Calm.
- Human.
- Trust-led.

Do not use:

- Bright purple.
- Decorative gradients.
- Heavy cards.
- Nested cards.
- Portal-style search UI.
- Catalog-style property layout.
- Generic luxury brokerage styling.

## Site Shell

Modify:

```text
src/components/site-shell.tsx
```

It must:

- Import `SiteHeader`.
- Render `SiteHeader` above `main`.
- Remove the current placeholder header content.
- Remove the text `Miami Real Estate`.
- Keep a single global `main` content area.

## Restrictions

Do not:

- Touch root strategy documents.
- Change i18n routing.
- Create `/fr`.
- Create Listings routes.
- Create Precon routes.
- Add new dependencies.
- Copy V1 components.
- Add unverified claims.
- Add ROI.
- Add occupancy rates.
- Add years of experience.
- Add rankings.
- Add testimonials.
- Add project cards.
- Add property cards.
- Add service cards.
- Add search UI.
- Add filters.

## Final Validations

Run:

```bash
npm run lint
```

Run:

```bash
npm run build
```

Do not start a persistent dev server.

Report this manual review command at the end:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3100
```

Report smoke test URLs for manual review:

```text
http://127.0.0.1:3100/es
http://127.0.0.1:3100/en
http://127.0.0.1:3100/fr-ca
```

## Completion Report

At completion, report:

- Files created.
- Files modified.
- Asset copied.
- `npm run lint` result.
- `npm run build` result.
- Manual review command.
- Confirmation that Header has no WhatsApp CTA.
- Confirmation that Header has no `Miami Real Estate` text.
- Confirmation that language switcher preserves path.
- Confirmation that Hero has no Listings, Precon, service grid, metrics, search, or filters.
