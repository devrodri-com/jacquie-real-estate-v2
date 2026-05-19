# Contact Page Brief

## Status

Pre-implementation brief.

No code yet. No Cursor prompt yet.

This document defines the first real version of the `/[locale]/contact` page for V2.

## 1. Page Objective

The Contact page must give the user a clear, low-friction way to start a direct conversation with Jacquie.

The page should:

- make WhatsApp the obvious primary action;
- reduce hesitation about what to write;
- help the user understand what information to include;
- keep the interaction human, calm, and personal;
- avoid turning contact into a form-heavy or corporate process.

The goal is not to collect leads through a complex funnel.

The goal is to help the user write the first message.

## 2. Difference From Home CTAs

### Home CTAs

Home CTAs appear inside a broader narrative:

```text
trust -> Jacquie -> Property Management -> process -> WhatsApp -> support -> close
```

They invite users to act in context.

Examples:

- `Hablar con Jacquie`
- `Consultar por mi propiedad`
- `Preguntar por una propiedad`

### Contact page

The Contact page is the dedicated conversion endpoint.

It should:

- remove extra choices;
- confirm WhatsApp as the primary channel;
- explain when to write;
- give the user a simple guide for the first message;
- clarify language expectations.

It should not become a secondary landing page, service catalog, or form workflow.

## 3. Approved Page Structure

First implementation:

1. Hero Contact.
2. Primary WhatsApp CTA.
3. When to write.
4. What to include in the message.
5. Channels / language note.
6. Short final CTA.

No functional form in V1.

## 4. Recommended Copy

### ES

#### Section 1: Hero Contact

Eyebrow:

> Contacto

Headline:

> Empezá con una conversación simple

Body:

> Si tenés una propiedad, estás evaluando comprar o invertir, o simplemente necesitás entender por dónde empezar en Miami, escribime y vemos cuál es el mejor próximo paso.

Primary CTA:

> Hablar con Jacquie por WhatsApp

#### Section 2: Cuándo escribirme

Eyebrow:

> Cuándo escribirme

Headline:

> Podés escribirme si necesitás claridad antes de avanzar

Items:

- Tenés una propiedad en Miami o el sur de Florida.
- Querés gestionar una propiedad para renta corta.
- Estás evaluando comprar o invertir.
- No sabés por dónde empezar y necesitás orientación local.

#### Section 3: Qué incluir en el mensaje

Eyebrow:

> Qué incluir

Headline:

> Un primer mensaje puede ser simple

Body:

> Para entender mejor tu caso, podés contarme dónde está la propiedad o qué zona te interesa, qué necesitás resolver y si sos propietario, comprador o inversor.

Message prompts:

- Ubicación de la propiedad o zona de interés.
- Qué necesitás resolver.
- Si sos propietario, comprador o inversor.

#### Section 4: Canales e idioma

Eyebrow:

> Canales

Headline:

> Atención personalizada en español e inglés

Body:

> La experiencia web está disponible en español, inglés y francés de Canadá. La comunicación humana directa está confirmada en español e inglés.

#### Section 5: Final CTA

Headline:

> Si querés avanzar, escribime por WhatsApp

Body:

> No necesitás tener todo definido. El primer paso puede ser contarme qué estás evaluando.

Primary CTA:

> Hablar con Jacquie

### EN

#### Section 1: Hero Contact

Eyebrow:

> Contact

Headline:

> Start with a simple conversation

Body:

> If you have a property, are considering buying or investing, or simply need to understand where to begin in Miami, write to me and we can look at the best next step.

Primary CTA:

> Talk to Jacquie on WhatsApp

#### Section 2: When to write

Eyebrow:

> When to write

Headline:

> You can write to me when you need clarity before moving forward

Items:

- You have a property in Miami or South Florida.
- You want to manage a property for short-term rental.
- You are considering buying or investing.
- You do not know where to start and need local guidance.

#### Section 3: What to include in the message

Eyebrow:

> What to include

Headline:

> A first message can be simple

Body:

> To understand your situation better, you can tell me where the property is or which area interests you, what you need to solve, and whether you are an owner, buyer, or investor.

Message prompts:

- Property location or area of interest.
- What you need to solve.
- Whether you are an owner, buyer, or investor.

#### Section 4: Channels and language

Eyebrow:

> Channels

Headline:

> Personalized communication in Spanish and English

Body:

> The website experience is available in Spanish, English, and French (Canada). Direct human communication is confirmed in Spanish and English.

#### Section 5: Final CTA

Headline:

> If you want to move forward, write to me on WhatsApp

Body:

> You do not need to have everything defined. The first step can be telling me what you are evaluating.

Primary CTA:

> Talk to Jacquie

### FR-CA

#### Section 1: Hero Contact

Eyebrow:

> Contact

Headline:

> Commencez par une demande simple

Body:

> Si vous avez une propriété, évaluez un achat ou un investissement, ou souhaitez simplement comprendre par où commencer à Miami, envoyez une demande et nous verrons quelle est la meilleure prochaine étape.

Primary CTA:

> Contacter Jacquie sur WhatsApp

#### Section 2: Quand écrire

Eyebrow:

> Quand écrire

Headline:

> Vous pouvez envoyer une demande si vous avez besoin de clarté avant d’avancer

Items:

- Vous avez une propriété à Miami ou dans le sud de la Floride.
- Vous voulez gérer une propriété pour la location courte durée.
- Vous évaluez un achat ou un investissement.
- Vous ne savez pas par où commencer et avez besoin d’un accompagnement local.

#### Section 3: Quoi inclure dans le message

Eyebrow:

> Quoi inclure

Headline:

> Un premier message peut être simple

Body:

> Pour mieux comprendre votre situation, vous pouvez indiquer où se trouve la propriété ou quel secteur vous intéresse, ce que vous souhaitez résoudre et si vous êtes propriétaire, acheteur ou investisseur.

Message prompts:

- Emplacement de la propriété ou secteur d’intérêt.
- Ce que vous souhaitez résoudre.
- Si vous êtes propriétaire, acheteur ou investisseur.

#### Section 4: Canaux et langue

Eyebrow:

> Canaux

Headline:

> Communication humaine confirmée en espagnol et en anglais

Body:

> L’expérience du site est disponible en espagnol, en anglais et en français canadien. La communication humaine directe est confirmée en espagnol et en anglais.

#### Section 5: Final CTA

Headline:

> Si vous souhaitez avancer, envoyez une demande sur WhatsApp

Body:

> Vous n’avez pas besoin que tout soit défini. La première étape peut être d’indiquer ce que vous évaluez.

Primary CTA:

> Contacter Jacquie

## 5. Primary CTA

Primary CTA must open WhatsApp using the existing helper pattern.

Intent:

> Start direct contact with Jacquie.

Labels:

- ES: `Hablar con Jacquie por WhatsApp`
- EN: `Talk to Jacquie on WhatsApp`
- FR-CA: `Contacter Jacquie sur WhatsApp`

Final CTA labels:

- ES: `Hablar con Jacquie`
- EN: `Talk to Jacquie`
- FR-CA: `Contacter Jacquie`

No secondary route CTA is required for the first implementation.

## 6. What Not To Include

Do not include:

- functional contact form;
- API route;
- email backend;
- copied V1 endpoint or form logic;
- Calendly;
- Listings;
- Pre-construction;
- property cards;
- project cards;
- search;
- filters;
- map;
- multiple service-specific CTA buttons;
- claims of immediate response;
- claims that Jacquie speaks French;
- generic corporate language such as `submit your inquiry`;
- long legal disclaimers;
- testimonials unless verified.

## 7. FR-CA Rules

FR-CA is a first-level website experience and must be complete.

Rules:

- Use proper French with accents.
- Public route remains `/fr-ca`.
- Internal content locale remains `fr-CA`.
- Do not expose `/fr`.
- Do not claim Jacquie personally speaks French.
- Mention that the site experience is available in French Canada.
- Mention that direct human communication is confirmed in Spanish and English.
- Use request-oriented phrasing where needed.

Human communication is confirmed in Spanish and English only.

## 8. Acceptance Criteria

The first implementation is acceptable if:

- the page replaces the placeholder with real, complete content;
- ES, EN, and FR-CA have equivalent content quality;
- WhatsApp is the clear primary conversion action;
- no functional form or API is introduced;
- the page explains when to write and what to include;
- the page feels human, premium, clear, and low-friction;
- no Listings or Pre-construction appear;
- no direct human French communication is promised;
- no response-time claim appears;
- it does not copy V1 form components or V1 API logic;
- lint and build pass after implementation.

## 9. Implementation Risks

Main risks:

- Making Contact feel like a corporate form page.
- Adding a form too early and creating unnecessary backend/spam complexity.
- Weakening WhatsApp by adding too many alternate actions.
- Suggesting direct French-language human support.
- Copying V1 contact endpoint or form patterns.
- Adding response-time promises that Jacquie has not confirmed.
- Turning the page into a directory of services instead of a conversion endpoint.

## 10. Later Phase

Reserved for a later phase:

- functional contact form;
- email delivery provider;
- API route;
- validation;
- spam protection;
- confirmation state;
- optional email address display if confirmed;
- optional structured inquiry types if Jacquie asks for them.

If a form is added later, minimum fields should be:

- name;
- email or phone;
- reason for contact;
- short message;
- optional preferred language or country only if useful.

The future form must remain secondary to WhatsApp unless the conversion strategy changes.
