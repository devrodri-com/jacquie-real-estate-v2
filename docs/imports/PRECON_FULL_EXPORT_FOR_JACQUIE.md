# Internal Precon Import Source

This document is an internal source export from Esteban's project for future preconstruction expansion in Jacquie V2.

It is not public-facing content.
Do not copy claims, pricing, payment plans, rental policies, or developer copy directly into the UI without verification and rewriting.

# Preconstruction Full Export For Jacquie

Generated: 2026-05-20. This is a data-only export from Esteban Firpo repo for Jacquie Real Estate V2. It must not be treated as publishable copy and must not copy Esteban design, components, routes, CTAs, catalog logic, or investment-first narrative.

## Summary

- Total projects exported: 38.
- Imported in catalog: 37.
- Not imported but present as source file: 1.
- Hidden in Esteban index: 1.
- visible_candidate: 6.
- needs_review: 31.
- discard: 1.
- Source glob: `src/data/projects/*.ts` excluding `index.ts`.
- Catalog index: `src/data/projects/index.ts`.
- JSON companion: `precon-full-export-for-jacquie.json`.

## Field Coverage

- Consistent fields (13): id, name, slug, city, priceFromUsd, image, images, microClaimsEs, microClaimsEn, highlights, highlightsEn, unitMixEs, unitMixEn.
- Inconsistent fields:
  - delivery: 37/38
  - featuresEs: 37/38
  - featuresEn: 37/38
  - paymentPlanEs: 37/38
  - paymentPlanEn: 37/38
  - faqsEs: 37/38
  - faqsEn: 37/38
  - rentalPolicy: 10/38
  - rentalPolicyEs: 33/38
  - rentalPolicyEn: 33/38
  - furnished: 31/38
  - financingAtClosing: 9/38
  - hoa: 1/38
  - lat: 0/38
  - lng: 0/38

## Risk Counts

- needs_current_verification: 38
- rental_policy_claim: 38
- payment_plan_claim: 37
- esteban_tone: 36
- developer_copy: 32
- tax_or_legal_claim: 28
- short_term_rental_claim: 22
- brand_usage_review: 19
- no_rental_restrictions_claim: 11
- outdated_price: 9
- outdated_delivery: 8
- str_claim: 8
- weak_visual_quality: 6
- eb5_claim: 4
- leaseback_claim: 2
- legal_review: 1
- opportunity_zone_claim: 1
- returns_claim: 1

## Import Recommendation For Jacquie V2

Import only as a private candidate dataset. Build Jacquie copy and schema from neutral verified facts, then verify every price, delivery, rental, payment, legal/tax, developer/brand, and image-rights claim before exposing cards or detail pages.

Recommended workflow: import JSON into a staging dataset, keep all projects hidden by default, verify facts against current official/developer materials, clear brand/image usage, rewrite public copy in Jacquie tone, then selectively enable cards/detail pages.

## Project Index

| Project | Imported | Hidden | Recommended | Card | Detail | Source |
|---|---:|---:|---|---:|---:|---|
| 2200 Brickell Residences | true | false | needs_review | false | false | src/data/projects/2200-brickell.ts |
| 72 Park | true | false | needs_review | false | false | src/data/projects/72-park.ts |
| 7200 Collins | true | false | needs_review | false | false | src/data/projects/7200-collins.ts |
| Ambar Residences Orlando | true | false | needs_review | false | false | src/data/projects/ambar-orlando.ts |
| Ave Maria - Maple Ridge | true | false | needs_review | false | false | src/data/projects/ave-maria.ts |
| Baccarat Residences | true | false | needs_review | false | false | src/data/projects/baccarat.ts |
| Cassia - The Residences at Coral Gables | true | false | needs_review | false | false | src/data/projects/cassia.ts |
| Cipriani Residences | true | false | needs_review | false | false | src/data/projects/cipriani.ts |
| Domus Brickell Center | true | false | needs_review | false | false | src/data/projects/domus-brickell-center.ts |
| Domus Brickell Park | true | false | needs_review | false | false | src/data/projects/domus-brickell-park.ts |
| Edge House Miami | true | false | needs_review | false | false | src/data/projects/edge-house.ts |
| ELLA Miami Beach | true | false | needs_review | false | false | src/data/projects/ella-miami.ts |
| ELLE Residences Miami | true | false | visible_candidate | true | true | src/data/projects/elle-residences-edgewater.ts |
| Faena Residences Miami | true | false | visible_candidate | true | true | src/data/projects/faena.ts |
| Flow House | true | false | needs_review | false | false | src/data/projects/flow-house.ts |
| Frida Kahlo Wynwood Residences | true | false | needs_review | false | false | src/data/projects/frida-kahlo.ts |
| Gaia Residences | true | false | needs_review | false | false | src/data/projects/gaia.ts |
| Jean‑Georges Miami Tropic Residences | true | false | needs_review | false | false | src/data/projects/jean-georges.ts |
| Mercedes-Benz Places Miami | true | true | discard | false | false | src/data/projects/mercedes-benz-places.ts |
| Midtown Park | true | false | visible_candidate | true | true | src/data/projects/midtown-park.ts |
| Millenia Park | true | false | needs_review | false | false | src/data/projects/millenia-park.ts |
| Millux Place Brickell | true | false | visible_candidate | true | true | src/data/projects/millux.ts |
| Nexo Residences | true | false | needs_review | false | false | src/data/projects/nexo.ts |
| Nickelodeon™ Hotels & Resorts Orlando (Condo-Residences) | true | false | needs_review | false | false | src/data/projects/nickelodeon.ts |
| NoMad Residences Wynwood | true | false | needs_review | false | false | src/data/projects/nomad.ts |
| Oasis Hallandale | true | false | needs_review | false | false | src/data/projects/oasis.ts |
| Okan Tower Miami | true | false | visible_candidate | true | true | src/data/projects/okan-tower.ts |
| One Hollywood Residences | false | false | needs_review | false | false | src/data/projects/one-hollywood-residences.ts |
| One Park Tower by Turnberry | true | false | needs_review | false | false | src/data/projects/one-park-tower.ts |
| Palma Miami Beach | true | false | needs_review | false | false | src/data/projects/palma.ts |
| Parkside Brickell | true | false | needs_review | false | false | src/data/projects/parkside.ts |
| Seven Park Residences | true | false | needs_review | false | false | src/data/projects/seven-park.ts |
| The Lauderdale | true | false | needs_review | false | false | src/data/projects/thelauderdale.ts |
| The Rider Wynwood | true | false | needs_review | false | false | src/data/projects/rider.ts |
| The Standard Residences, Brickell Miami | true | false | needs_review | false | false | src/data/projects/the-standard-brickell.ts |
| The William Residences | true | false | needs_review | false | false | src/data/projects/the-william.ts |
| Twenty Six & 2nd (Wynwood) | true | false | visible_candidate | true | true | src/data/projects/twenty-six-and-2nd.ts |
| Viceroy Brickell - The Residences | true | false | needs_review | false | false | src/data/projects/viceroy-brickell-residences.ts |

## 2200 Brickell Residences

### Identification
- id: 2200-brickell
- name: 2200 Brickell Residences
- slug: /proyectos/2200-brickell
- sourceFilePath: src/data/projects/2200-brickell.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Brickell
- neighborhood / area: Brickell
- address: 105 unidades distribuidas en 5 niveles
- developer: Custom kitchens by ODA with Thermador & Bosch appliances; Prime Brickell Avenue location near shops and dining; Design by ODA New York
- buildingType: villa/townhome component candidate; boutique residential condominium candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 830000
- priceLabel: From USD 830,000
- delivery / completion: 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/2200%20Brickell/BTag7Isw.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/2200%20Brickell/BTag7Isw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/XMNHJ8ow.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/bw1m7DrA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/xZLyIoxg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/wHA79dJw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/vHAiVX2A.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/-zYSgcQw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/Zz7QF-6Q.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/2200%20Brickell/7XtnkE7w.jpeg [usable]

### Description / Copy
- shortDescription ES: 2200 Brickell Residences | Brickell | 1 Dormitorio | Boutique de 5 pisos en Brickell | Diseño de ODA New York | 105 residencias (1-4 BR y Garden Villas)
- shortDescription EN: 2200 Brickell Residences | Brickell | 1 Bedroom | 5-story boutique in Brickell | Design by ODA New York | 105 residences (1-4 BR & Garden Villas)
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Boutique de 5 pisos en Brickell
- Diseño de ODA New York
- ≈4,000 m² de rooftop verde
- microClaims EN:
- 5-story boutique in Brickell
- Design by ODA New York
- One-acre rooftop haven
- usableCopyReference:
- Boutique de 5 pisos en Brickell
- Diseño de ODA New York
- ≈4,000 m² de rooftop verde
- 5-story boutique in Brickell
- One-acre rooftop haven
- 105 residencias (1-4 BR y Garden Villas)
- ≈55-190 m² con balcones
- 105 residences (1-4 BR & Garden Villas)
- 590-2,070 sf with balconies
- Ventanas de piso a techo con vidrio de alto impacto
- Cocinas personalizadas por ODA con electrodomésticos Thermador y Bosch
- Balcón privado con barandas de vidrio
- ... 8 more in JSON
- needsRewrite:
- Design by ODA New York
- ≈4,000 m² de rooftop con piscina resort, spa, pickleball y summer kitchen
- Certificación WELL Building Standard™ enfocada en salud y bienestar
- Ubicación privilegiada en Brickell Avenue, cerca de tiendas y restaurantes
- One-acre rooftop with resort pool, spa, pickleball and summer kitchen
- WELL Building Standard™ certified for health and wellbeing
- Prime Brickell Avenue location near shops and dining
- Piscina estilo resort con cabañas, wellness lounge con sauna
- Custom closets and luxury primary bathrooms
- Resort-style pool with cabanas, wellness lounge with sauna
- 60% at closing (financing available for foreign buyers)
- 105 unidades distribuidas en 5 niveles.
- ... 1 more in JSON
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- 105 residences (1-4 BR & Garden Villas)
- WELL Building Standard™ certified for health and wellbeing
- residences EN:
- 590-2,070 sf with balconies
- One-acre rooftop with resort pool, spa, pickleball and summer kitchen
- Floor-to-ceiling impact glass windows
- Custom kitchens by ODA with Thermador & Bosch appliances
- Private balconies with glass railings
- Custom closets and luxury primary bathrooms
- amenities EN:
- One-acre rooftop with resort pool, spa, pickleball and summer kitchen
- Custom kitchens by ODA with Thermador & Bosch appliances
- Homage Fitness gym, coworking & conference rooms
- Resort-style pool with cabanas, wellness lounge with sauna
- Children’s playroom and cycling lounge with storage
- Double-height lobby and 24h valet
- lifestyle EN:
- Prime Brickell Avenue location near shops and dining
- Resort-style pool with cabanas, wellness lounge with sauna
- location EN:
- Prime Brickell Avenue location near shops and dining

### Unit Mix / Residences
- unitMix ES:
- 1 Dormitorio
- 2 Dormitorios
- 3 Dormitorios
- Garden Villas 2BR
- Garden Villas 4BR
- unitMix EN:
- 1 Bedroom
- 2 Bedrooms
- 3 Bedrooms
- Garden Villas 2BR
- Garden Villas 4BR
- bedrooms: 1 bedroom, 2 bedrooms, 3 bedrooms, 4 bedrooms
- squareFootageRanges: 55-190 m2; 190 m2; 000 m2
- residence count: 105
- floors: 5

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 20% al contrato
- 10% al inicio de obra
- 10% al top off
- 60% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at contract
- 10% at groundbreaking
- 10% at top off
- 60% at closing (financing available for foreign buyers)
- percentages: 10, 20, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 105 unidades distribuidas en 5 niveles
- mapQuery: 105 unidades distribuidas en 5 niveles
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- No sensitive FAQ claims detected.

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/2200%20Brickell/XMNHJ8ow.jpeg
- https://ik.imagekit.io/devrodri/2200%20Brickell/bw1m7DrA.jpeg
- https://ik.imagekit.io/devrodri/2200%20Brickell/xZLyIoxg.jpeg
- https://ik.imagekit.io/devrodri/2200%20Brickell/wHA79dJw.jpeg
- https://ik.imagekit.io/devrodri/2200%20Brickell/vHAiVX2A.jpeg
- https://ik.imagekit.io/devrodri/2200%20Brickell/-zYSgcQw.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, developer_copy, esteban_tone, outdated_price, brand_usage_review, needs_current_verification

## 72 Park

### Identification
- id: 72park
- name: 72 Park
- slug: /proyectos/72-park
- sourceFilePath: src/data/projects/72-park.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Miami Beach
- neighborhood / area: Miami Beach
- address: 72 Park está aprobado para alquileres a corto plazo y ofrece un programa de gestión en sitio
- developer: European kitchen (Bosch/SMEG/Fisher & Paykel)
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 720000
- priceLabel: From USD 720,000
- delivery / completion: 2025
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/72%20Park/B4XUDwSQ.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/72%20Park/B4XUDwSQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/pool.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/lobby.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/beach.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/gym.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/kitchen.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/byron-bar.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/rooftop.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/72%20Park/bathroom.webp [usable]

### Description / Copy
- shortDescription ES: 72 Park | Miami Beach | Jr-1, 1, 2 y 3 dormitorios | Renta corta aprobada | Club de playa privado | Piscina tipo resort de 45m con bar y cabañas
- shortDescription EN: 72 Park | Miami Beach | Jr-1, 1, 2 & 3 bedrooms | STR approved | Private beach club | 50-ft resort-style pool with bar and cabanas
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Renta corta aprobada
- Club de playa privado
- North Beach
- microClaims EN:
- STR approved
- Private beach club
- North Beach
- usableCopyReference:
- Renta corta aprobada
- Club de playa privado
- North Beach
- Private beach club
- Club de playa privado con servicio de toallas
- Coworking 24/7 y gimnasio de doble altura
- Opciones amuebladas disponibles
- Restaurante y lounge en 5° piso con vistas
- Sala de yoga y terrazas exteriores
- Spa para mascotas en planta baja
- Private beach club with towel service
- 24/7 coworking and double-height gym
- ... 7 more in JSON
- needsRewrite:
- STR approved
- Piscina tipo resort de 45m con bar y cabañas
- 50-ft resort-style pool with bar and cabanas
- 10% al completar estructura
- 10% at structure completion
- 60% at closing (financing available for foreigners)
- Sí. 72 Park posee certificación LEED Oro, reflejando su compromiso con la sustentabilidad.
- En North Beach, entre Bal Harbour y Faena District, a pasos de la playa.
- Primer torre aprobada para rentas cortas en la zona, con gestión en sitio y club de playa privado.
- Are short-term rentals allowed?
- Yes. 72 Park is approved for short-term rentals with an on-site management program.
- Yes. 72 Park holds LEED Gold certification, reflecting sustainability commitment.
- ... 4 more in JSON
- discardCopy:
- ¿Se permiten rentas cortas?

### Highlights / Features
- projectHighlights EN:
- Not found.
- residences EN:
- Restaurant and lounge on 5th floor with views
- Yoga room and outdoor terraces
- European kitchen (Bosch/SMEG/Fisher & Paykel)
- Bathrooms with Hansgrohe fixtures; spa feel
- amenities EN:
- 50-ft resort-style pool with bar and cabanas
- Private beach club with towel service
- 24/7 coworking and double-height gym
- Restaurant and lounge on 5th floor with views
- Yoga room and outdoor terraces
- Ground-level pet spa
- European kitchen (Bosch/SMEG/Fisher & Paykel)
- Bathrooms with Hansgrohe fixtures; spa feel
- lifestyle EN:
- Private beach club with towel service
- Restaurant and lounge on 5th floor with views
- Quartz countertops & backsplashes
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Jr-1, 1, 2 y 3 dormitorios
- 43-109 m² interiores
- Balcón privado de 2 m
- Alturas de 2-3 m; ventanales piso‑techo
- unitMix EN:
- Jr-1, 1, 2 & 3 bedrooms
- 463-1,173 sq ft interiors
- 2 m deep private balcony
- 9-10 ft ceilings; floor‑to‑ceiling glass
- bedrooms: junior suite, 3 bedrooms
- squareFootageRanges: 463-1,173 sq ft; 1,173 sq ft; 43-109 m2; 109 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 20% al contrato
- 10% a los 90 días
- 10% al completar estructura
- 60% al cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at contract
- 10% in 90 days
- 10% at structure completion
- 60% at closing (financing available for foreigners)
- percentages: 10, 20, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 72 Park está aprobado para alquileres a corto plazo y ofrece un programa de gestión en sitio
- mapQuery: 72 Park está aprobado para alquileres a corto plazo y ofrece un programa de gestión en sitio
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 9
- FAQ EN count: 9
- sensitive FAQ claims:
- ¿Se permiten rentas cortas? -> tax_or_legal_claim
- Are short-term rentals allowed? -> rental_policy_claim
- What makes 72 Park different? -> rental_policy_claim

### Risk Flags
- str_claim (high): STR wording found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_delivery (medium): Delivery value is missing or time-sensitive: 2025.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/72%20Park/pool.webp
- https://ik.imagekit.io/devrodri/72%20Park/lobby.webp
- https://ik.imagekit.io/devrodri/72%20Park/beach.webp
- https://ik.imagekit.io/devrodri/72%20Park/gym.webp
- https://ik.imagekit.io/devrodri/72%20Park/kitchen.webp
- https://ik.imagekit.io/devrodri/72%20Park/byron-bar.webp
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: str_claim, short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_delivery, brand_usage_review, needs_current_verification

## 7200 Collins

### Identification
- id: 7200-collins
- name: 7200 Collins
- slug: /proyectos/7200-collins
- sourceFilePath: src/data/projects/7200-collins.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Miami Beach
- neighborhood / area: Miami Beach
- address: Not found.
- developer: Revuelta Architecture curved façade with glass balconies and open views
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 570000
- priceLabel: From USD 570,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/7200%20Collins/Hero-Sunset-Thumbnail-7200-Collins-North-Beach-Miami.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: needs_review
- image flags:
- hero: https://ik.imagekit.io/devrodri/7200%20Collins/Hero-Sunset-Thumbnail-7200-Collins-North-Beach-Miami.jpg [weak_quality]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Hummingbird-Main-Banner-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220367551 [usable]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Amenities-Rooftop-Terrace-Gallery-5-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220367575 [usable]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Home-Building-Hero-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220367392 [weak_quality]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Home-Pool-Amenities-Gallery-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220365868 [usable]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Amenities-Gym-Gallery-4-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220367530 [usable]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Home-Library-Lounge-Amenities-Gallery-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220366454 [usable]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Home-Residents-Lounge-Amenities-Gallery-7200-Collins-North-Beach-Miami-2.jpg?updatedAt=1757220365850 [usable]
- gallery: https://ik.imagekit.io/devrodri/7200%20Collins/Residences-Kitchen-Full-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220365994 [usable]

### Description / Copy
- shortDescription ES: 7200 Collins | Miami Beach | Studios junior: 35-39 m² | Renta corta aprobada | Club de playa privado | Frente al mar, propiedad flexible (STR)
- shortDescription EN: 7200 Collins | Miami Beach | Junior studios: 375-420 sf | STR friendly | Private beach club | Oceanfront, STR‑friendly ownership
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Renta corta aprobada
- Club de playa privado
- Frente al mar en North Beach
- microClaims EN:
- STR friendly
- Private beach club
- Oceanfront in North Beach
- usableCopyReference:
- Renta corta aprobada
- Club de playa privado
- Frente al mar en North Beach
- Private beach club
- Oceanfront in North Beach
- 222 unidades amuebladas por Adriana Hoyos
- Arquitectura de Revuelta, fachada curva con balcones de vidrio y vistas abiertas
- Más de 3 niveles de amenidades: rooftop con piscina, lounge y cine al aire libre
- Club de playa privado con sillas y sombrillas
- Locales comerciales seleccionados en planta baja y concierge/valet
- 222 furnished homes by Adriana Hoyos
- Three+ levels of amenities: rooftop pool, lounge and outdoor cinema
- ... 8 more in JSON
- needsRewrite:
- STR friendly
- Frente al mar, propiedad flexible (STR)
- Oceanfront, STR‑friendly ownership
- Revuelta Architecture curved façade with glass balconies and open views
- Piscinas estilo resort (rooftop y nivel 3)
- Resort-style pools (rooftop and level 3)
- 10% al completar estructura (top off, fin 2026)
- 10% at construction start (late 2025)
- 10% at structure completion / top off (late 2026)
- 60% at closing (financing available for foreigners)
- Sí. Propiedad flexible con STR-friendly (sin restricciones de renta).
- Sí. Unidades completamente amuebladas por Adriana Hoyos Design Studio.
- ... 5 more in JSON
- discardCopy:
- ¿Se permiten rentas cortas?

### Highlights / Features
- projectHighlights EN:
- Not found.
- residences EN:
- Revuelta Architecture curved façade with glass balconies and open views
- Concierge, valet and curated ground-floor retail
- amenities EN:
- Three+ levels of amenities: rooftop pool, lounge and outdoor cinema
- Private beach club with chairs and umbrellas
- Curated retail at ground level plus concierge/valet
- Resort-style pools (rooftop and level 3)
- Fitness center + yoga deck and zen gardens
- Rooftop lounge with self-serve bar and outdoor cinema
- Library and private owners’ lounge
- Concierge, valet and curated ground-floor retail
- Private beach club with umbrellas and chairs
- lifestyle EN:
- Revuelta Architecture curved façade with glass balconies and open views
- Private beach club with chairs and umbrellas
- Private beach club with umbrellas and chairs
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios junior: 35-39 m²
- 1 dormitorio: 51-60 m²
- 1 dormitorio + den: 56-78 m²
- 2 dormitorios: 92 m²
- 2 dormitorios + den: 92-109 m²
- Penthouses con vistas al océano
- unitMix EN:
- Junior studios: 375-420 sf
- 1 bedroom: 550-644 sf
- 1 bed + den: 603-841 sf
- 2 bedrooms: 989 sf
- 2 bed + den: 1,011-1,186 sf
- Penthouses with ocean views
- bedrooms: studio, 1 bedroom, 2 bedrooms
- squareFootageRanges: 35-39 m2; 51-60 m2; 56-78 m2; 92-109 m2; 39 m2; 60 m2; 78 m2; 92 m2; 109 m2
- residence count: 222
- floors: 3

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 20% al contrato
- 10% al inicio de obra (fin 2025)
- 10% al completar estructura (top off, fin 2026)
- 60% al cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at contract
- 10% at construction start (late 2025)
- 10% at structure completion / top off (late 2026)
- 60% at closing (financing available for foreigners)
- percentages: 10, 20, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: 7200 Collins Miami Beach Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Miami Beach

### FAQs
- FAQ ES count: 3
- FAQ EN count: 3
- sensitive FAQ claims:
- ¿Se permiten rentas cortas? -> rental_policy_claim, tax_or_legal_claim
- Are short‑term rentals allowed? -> rental_policy_claim

### Risk Flags
- str_claim (high): STR wording found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- weak_visual_quality (medium): Some image filenames look like screenshots, thumbnails, or weak-quality captures.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/7200%20Collins/Hummingbird-Main-Banner-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220367551
- https://ik.imagekit.io/devrodri/7200%20Collins/Amenities-Rooftop-Terrace-Gallery-5-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220367575
- https://ik.imagekit.io/devrodri/7200%20Collins/Home-Pool-Amenities-Gallery-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220365868
- https://ik.imagekit.io/devrodri/7200%20Collins/Amenities-Gym-Gallery-4-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220367530
- https://ik.imagekit.io/devrodri/7200%20Collins/Home-Library-Lounge-Amenities-Gallery-7200-Collins-North-Beach-Miami.jpg?updatedAt=1757220366454
- https://ik.imagekit.io/devrodri/7200%20Collins/Home-Residents-Lounge-Amenities-Gallery-7200-Collins-North-Beach-Miami-2.jpg?updatedAt=1757220365850
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: str_claim, short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, weak_visual_quality, needs_current_verification

## Ambar Residences Orlando

### Identification
- id: ambar-orlando
- name: Ambar Residences Orlando
- slug: /proyectos/ambar-orlando
- sourceFilePath: src/data/projects/ambar-orlando.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 3251 Secret Lake Dr, Kissimmee, FL 34747
- neighborhood / area: Kissimmee
- address: 3251 Secret Lake Dr, Kissimmee, FL 34747
- developer: Contemporary hotel-inspired interiors
- buildingType: condo-hotel / hospitality-managed residences candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 363900
- priceLabel: From USD 363,900
- delivery / completion: Not found.
- priceStatus: needs_current_verification
- deliveryStatus: do_not_publish

### Images
- heroImage: https://ik.imagekit.io/devrodri/Ambar/portada.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: needs_review
- image flags:
- hero: https://ik.imagekit.io/devrodri/Ambar/portada.jpg [weak_quality]
- gallery: https://ik.imagekit.io/devrodri/Ambar/docs_f8f2126f-fb5b-4d7a-9daa-d7625169d2fb_riviera_images_1.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Ambar/docs_0031cc80-6976-483a-9708-8b17d5cf6f6e_riviera_images_1.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Ambar/Captura%20de%20pantalla%202026-01-17%20a%20la(s)%204.08.44%E2%80%AFp.m..jpg [screenshot, weak_quality]
- gallery: https://ik.imagekit.io/devrodri/Ambar/Captura%20de%20pantalla%202026-01-17%20a%20la(s)%204.13.12%E2%80%AFp.m..jpg [screenshot, weak_quality]
- gallery: https://ik.imagekit.io/devrodri/Ambar/Captura%20de%20pantalla%202026-01-17%20a%20la(s)%204.11.02%E2%80%AFp.m..png?updatedAt=1768684347893 [screenshot, weak_quality]
- gallery: https://ik.imagekit.io/devrodri/Ambar/Captura%20de%20pantalla%202026-01-17%20a%20la(s)%204.20.36%E2%80%AFp.m..jpg [screenshot, weak_quality]
- gallery: https://ik.imagekit.io/devrodri/Ambar/Captura%20de%20pantalla%202026-01-17%20a%20la(s)%204.23.26%E2%80%AFp.m..jpg [screenshot, weak_quality]
- gallery: https://ik.imagekit.io/devrodri/Ambar/Captura%20de%20pantalla%202026-01-17%20a%20la(s)%204.24.34%E2%80%AFp.m..jpg [screenshot, weak_quality]

### Description / Copy
- shortDescription ES: Ambar Residences Orlando | 3251 Secret Lake Dr, Kissimmee, FL 34747 | Studio · 49 m² | 3 torres · 322 residencias | Terreno de 11 acres · estilo resort | Residencias totalmente amuebladas, listas para habitar
- shortDescription EN: Ambar Residences Orlando | 3251 Secret Lake Dr, Kissimmee, FL 34747 | Studio · ~527 sq ft | 3 towers · 322 residences | 11-acre resort-style property | Fully furnished residences, move-in ready
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 3 torres · 322 residencias
- Terreno de 11 acres · estilo resort
- Studios a 3 dormitorios · 49–110 m²
- microClaims EN:
- 3 towers · 322 residences
- 11-acre resort-style property
- Studios to 3 bedrooms · 527–1,184 sq ft
- usableCopyReference:
- 3 torres · 322 residencias
- Studios a 3 dormitorios · 49–110 m²
- 3 towers · 322 residences
- Studios to 3 bedrooms · 527–1,184 sq ft
- Residencias totalmente amuebladas, listas para habitar
- Restaurante y bar en el lugar
- Grab & go market + café
- Fitness center de última generación
- Spa, sauna y áreas de bienestar
- Recepción y servicios hoteleros
- Acceso directo a US-192 e Interstate 4
- Fully furnished residences, move-in ready
- ... 7 more in JSON
- needsRewrite:
- Terreno de 11 acres · estilo resort
- 11-acre resort-style property
- Piscina estilo resort con solárium y cabañas
- Administración profesional por Coury Hospitality
- Resort-style pool with sundeck and cabanas
- Spa, sauna and wellness areas
- Distribuciones optimizadas para renta
- ¿Cómo se administra la propiedad?
- Administración hotelera profesional por Coury Hospitality.
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- Fully furnished residences, move-in ready
- residences EN:
- Fully equipped kitchens
- Modern functional bathrooms
- amenities EN:
- Resort-style pool with sundeck and cabanas
- On-site restaurant and bar
- Grab & go market + café
- State-of-the-art fitness center
- Spa, sauna and wellness areas
- Fully equipped kitchens
- lifestyle EN:
- State-of-the-art fitness center
- Spa, sauna and wellness areas
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studio · 49 m²
- 1 dormitorio · 60–61 m²
- 1 dormitorio + den · 70–71 m²
- 2 dormitorios · 96 m²
- 2 dormitorios + den · 101 m²
- 3 dormitorios · 110 m²
- unitMix EN:
- Studio · ~527 sq ft
- 1 bedroom · ~646–657 sq ft
- 1 bedroom + den · ~753–764 sq ft
- 2 bedrooms · ~1,033 sq ft
- 2 bedrooms + den · ~1,087 sq ft
- 3 bedrooms · ~1,184 sq ft
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: 646-657 sq ft; 753-764 sq ft; 527 sq ft; 657 sq ft; 764 sq ft; 1,033 sq ft; 1,087 sq ft; 1,184 sq ft; 60-61 m2; 70-71 m2; 49 m2; 61 m2; 71 m2; 96 m2; 101 m2; 110 m2
- residence count: 322
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 5% al firmar el contrato
- 10% 30 días después
- 5% 120 días después
- 10% 180 días después
- 70% al cierre
- paymentPlan EN:
- 5% at contract
- 10% 30 days after contract
- 5% 120 days after contract
- 10% 180 days after contract
- 70% at closing
- percentages: 5, 10, 70
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 3251 Secret Lake Dr, Kissimmee, FL 34747
- mapQuery: 3251 Secret Lake Dr, Kissimmee, FL 34747
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- No sensitive FAQ claims detected.

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- outdated_delivery (high): Delivery value is missing or time-sensitive: missing.
- weak_visual_quality (medium): Some image filenames look like screenshots, thumbnails, or weak-quality captures.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Ambar/docs_f8f2126f-fb5b-4d7a-9daa-d7625169d2fb_riviera_images_1.jpeg
- https://ik.imagekit.io/devrodri/Ambar/docs_0031cc80-6976-483a-9708-8b17d5cf6f6e_riviera_images_1.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, developer_copy, esteban_tone, outdated_price, outdated_delivery, weak_visual_quality, needs_current_verification

## Ave Maria - Maple Ridge

### Identification
- id: ave-maria
- name: Ave Maria - Maple Ridge
- slug: /proyectos/ave-maria
- sourceFilePath: src/data/projects/ave-maria.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Naples, Florida
- neighborhood / area: Naples
- address: Not found.
- developer: Town Center with 50+ shops, restaurants & services
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 340000
- priceLabel: From USD 340,000
- delivery / completion: 8-12 meses
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Ave%20Maria/TheClub_MapleRidge28of38-1600x1198.jpg
- gallery count: 4
- ImageKit URL count: 5
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Ave%20Maria/TheClub_MapleRidge28of38-1600x1198.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Ave%20Maria/Inlet-Coastal-Photo.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Ave%20Maria/Harbour_KLD_0008-2-1-1600x1067.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Ave%20Maria/Fairawy_LR_0019-1600x1067.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Ave%20Maria/Greenview_Kitchen_-1600x1066.jpg [usable]

### Description / Copy
- shortDescription ES: Ave Maria - Maple Ridge | Naples, Florida | 2 Dormitorios | Casas unifamiliares de 2 a 6 dormitorios | Precios desde USD 340,000 | Maple Ridge: el vecindario #1 en ventas en Ave Maria
- shortDescription EN: Ave Maria - Maple Ridge | Naples, Florida | 2 Bedrooms | Single-family homes (2-6 bedrooms) | Prices from USD 340,000 | Maple Ridge: #1 selling neighborhood in Ave Maria
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Casas unifamiliares de 2 a 6 dormitorios
- Precios desde USD 340,000
- Comunidad planificada y autosuficiente
- microClaims EN:
- Single-family homes (2-6 bedrooms)
- Prices from USD 340,000
- Master-planned, self-sustaining community
- usableCopyReference:
- Casas unifamiliares de 2 a 6 dormitorios
- Precios desde USD 340,000
- Comunidad planificada y autosuficiente
- Single-family homes (2-6 bedrooms)
- Prices from USD 340,000
- Master-planned, self-sustaining community
- Maple Ridge: el vecindario #1 en ventas en Ave Maria
- Ubicado en una Comunidad Certificada Blue Zones®
- Clubhouse privado de ≈930 m² con piscina, gimnasio y parque para perros
- Town Center con más de 50 tiendas, restaurantes y servicios
- Maple Ridge: #1 selling neighborhood in Ave Maria
- Located in a Certified Blue Zones® Community
- ... 8 more in JSON
- needsRewrite:
- Clubhouse con piscina estilo resort, spa, café, salón de masajes y juegos
- 18 distinctive 1- and 2-story home designs
- Clubhouse with resort-style pool, spa, café, massage & game rooms
- Financing available
- No. Airbnb no está permitido.
- Are short-term rentals allowed?
- No. Airbnb is not permitted.
- discardCopy:
- ¿Se permiten alquileres temporales?
- No. Airbnb no está permitido.
- No. Airbnb is not permitted.

### Highlights / Features
- projectHighlights EN:
- 18 distinctive 1- and 2-story home designs
- residences EN:
- Modern kitchens with premium appliances
- amenities EN:
- 10,000 sf private clubhouse with pool, gym & dog park
- Town Center with 50+ shops, restaurants & services
- Modern kitchens with premium appliances
- Clubhouse with resort-style pool, spa, café, massage & game rooms
- lifestyle EN:
- 10,000 sf private clubhouse with pool, gym & dog park
- Town Center with 50+ shops, restaurants & services
- Integrated smart home technology
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 2 Dormitorios
- 3 Dormitorios
- 4 Dormitorios
- 5 Dormitorios
- 6 Dormitorios
- unitMix EN:
- 2 Bedrooms
- 3 Bedrooms
- 4 Bedrooms
- 5 Bedrooms
- 6 Bedrooms
- bedrooms: 2 bedrooms, 3 bedrooms, 4 bedrooms, 5 bedrooms, 6 bedrooms
- squareFootageRanges: 930 m2
- residence count: Not found.
- floors: 2

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- Entrega en 8-12 meses (dependiendo del modelo)
- Financiamiento disponible
- paymentPlan EN:
- Delivery in 8-12 months (depending on model)
- Financing available
- percentages: None parsed.
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Ave Maria - Maple Ridge Naples Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Naples

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- ¿Se permiten alquileres temporales? -> rental_policy_claim, tax_or_legal_claim
- Are short-term rentals allowed? -> rental_policy_claim, tax_or_legal_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Ave%20Maria/Inlet-Coastal-Photo.jpg
- https://ik.imagekit.io/devrodri/Ave%20Maria/Harbour_KLD_0008-2-1-1600x1067.jpeg
- https://ik.imagekit.io/devrodri/Ave%20Maria/Fairawy_LR_0019-1600x1067.jpg
- https://ik.imagekit.io/devrodri/Ave%20Maria/Greenview_Kitchen_-1600x1066.jpg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, needs_current_verification

## Baccarat Residences

### Identification
- id: baccarat
- name: Baccarat Residences
- slug: /proyectos/baccarat
- sourceFilePath: src/data/projects/baccarat.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Brickell
- neighborhood / area: Brickell
- address: Not found.
- developer: Interiors by Meyer Davis Studio; bespoke kitchen/bath/flooring options
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 1200000
- priceLabel: From USD 1,200,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Baccarat/Related-OneBrickell-03-Extrior_Grua-01.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: needs_review
- image flags:
- hero: https://ik.imagekit.io/devrodri/Baccarat/Related-OneBrickell-03-Extrior_Grua-01.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/BACCARAT_3-Porte-Cochere.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/BACCARAT_17-Pool-Red-Umbrellas_HD-Copy.jpg [weak_quality, branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/BACCARAT_16-Orangerie.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/BACCARAT_28-Master-Bedroom.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/BACCARAT_9-Grand-Salon_HD-copy.jpg [weak_quality, branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/BACCARAT_27-Unit-Kitchen.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/BACCARAT_8-Harmonie-Room.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Baccarat/Fitness-by-Anatomy.jpg [branded]

### Description / Copy
- shortDescription ES: Baccarat Residences | Brickell | 1-4 dormitorios y penthouses | Frente al río y bahía | Grand Salon | 75 pisos en la ribera del Miami River, Biscayne Bay
- shortDescription EN: Baccarat Residences | Brickell | 1-4 bedroom residences and penthouses | River & bay views | Grand Salon | 75‑story tower on the Miami River where it meets Biscayne Bay
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Frente al río y bahía
- Grand Salon
- Beach Club en 1 Hotel
- microClaims EN:
- River & bay views
- Grand Salon
- 1 Hotel Beach Club
- usableCopyReference:
- Frente al río y bahía
- Grand Salon
- Beach Club en 1 Hotel
- River & bay views
- 1 Hotel Beach Club
- 75 pisos en la ribera del Miami River, Biscayne Bay
- 316 residencias, 8 penthouses y 28 flats frente al río
- Interiores por Meyer Davis Studio; acabados de cocina/baño/pisos personalizados
- Gimnasio curado por Anatomy con salas de yoga y meditación
- Hammam spa, salas de tratamiento y sala de cine privada
- Membresía Beach Club en 1 Hotel South Beach
- 75‑story tower on the Miami River where it meets Biscayne Bay
- ... 7 more in JSON
- needsRewrite:
- Piscina resort en nivel 14 con spa, cabañas y terraza con vistas a la bahía
- 14th‑level resort deck with pool, spa, cabanas and bay‑view terrace
- Piscina estilo resort con borde cero y café restaurante
- Resort pool with zero‑entry edge and café restaurant
- 60% at Closing (financing available for foreign buyers)
- discardCopy:
- Marina privada con taxi acuático y muelle para residentes
- Private marina with resident water taxi
- Sí. Muelle privado con taxi acuático y más de ≈90 m lineales de atraque.
- Yes. Private dock with resident water taxi and over 300 linear feet of dockage.

### Highlights / Features
- projectHighlights EN:
- 75‑story tower on the Miami River where it meets Biscayne Bay
- 316 residences, 8 penthouses and 28 flats on the river
- residences EN:
- Interiors by Meyer Davis Studio; bespoke kitchen/bath/flooring options
- 14th‑level resort deck with pool, spa, cabanas and bay‑view terrace
- amenities EN:
- Interiors by Meyer Davis Studio; bespoke kitchen/bath/flooring options
- 14th‑level resort deck with pool, spa, cabanas and bay‑view terrace
- Fitness curated by Anatomy with yoga & meditation rooms
- Hammam spa, treatment rooms and private screening room
- Beach Club membership at 1 Hotel South Beach
- Resort pool with zero‑entry edge and café restaurant
- Anatomy fitness + yoga & meditation rooms
- Hammam spa with steam/sauna and treatment rooms
- Wine cellar & tasting, gourmet market and club room
- Access to 1 Hotel South Beach Beach Club
- lifestyle EN:
- Private marina with resident water taxi
- Beach Club membership at 1 Hotel South Beach
- Access to 1 Hotel South Beach Beach Club
- location EN:
- 75‑story tower on the Miami River where it meets Biscayne Bay
- Private marina and dock on the Miami River

### Unit Mix / Residences
- unitMix ES:
- 1-4 dormitorios y penthouses
- 316 residencias flow‑through + 8 penthouses
- unitMix EN:
- 1-4 bedroom residences and penthouses
- 316 flow‑through residences + 8 penthouses
- bedrooms: 4 bedrooms
- squareFootageRanges: Not detected.
- residence count: 316
- floors: 75

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 10% al contrato
- 10% a los 60 días (completa 20%)
- 10% en groundbreaking (completa 30%)
- 10% en top‑off (completa 40%)
- 60% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 10% at Contract
- 10% sixty days after Contract (to complete 20%)
- 10% at Groundbreaking (to complete 30%)
- 10% at Top‑off (to complete 40%)
- 60% at Closing (financing available for foreign buyers)
- percentages: 10, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Baccarat Residences Brickell Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Brickell

### FAQs
- FAQ ES count: 3
- FAQ EN count: 3
- sensitive FAQ claims:
- ¿Hay marina privada? -> tax_or_legal_claim
- Is there a private marina? -> tax_or_legal_claim

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- weak_visual_quality (medium): Some image filenames look like screenshots, thumbnails, or weak-quality captures.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, weak_visual_quality, brand_usage_review, needs_current_verification

## Cassia - The Residences at Coral Gables

### Identification
- id: cassia-miami
- name: Cassia - The Residences at Coral Gables
- slug: /proyectos/cassia
- sourceFilePath: src/data/projects/cassia.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Coral Gables · Merrick Park
- neighborhood / area: Coral Gables
- address: 4011 Salzedo St
- developer: Bosch appliance suite · in‑unit washer/dryer; 4011 Salzedo St., Coral Gables (steps from The Shops at Merrick Park).
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 773000
- priceLabel: From USD 773,000
- delivery / completion: Q1 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Cassia/1.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Cassia/1.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/2.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/3.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/4.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/5.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/6.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/7.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/8.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Cassia/9.jpeg [usable]

### Description / Copy
- shortDescription ES: Cassia - The Residences at Coral Gables | Coral Gables · Merrick Park | Edificio de 12 pisos · 174 residencias | Residencias llave en mano amuebladas por RH | Airbnb/estancias cortas (mín. ~3 noches) | Piscina rooftop tipo resort, cabañas y áreas de comedor
- shortDescription EN: Cassia - The Residences at Coral Gables | Coral Gables · Merrick Park | 12‑story building · 174 residences | Turn‑key residences furnished by RH | Airbnb‑friendly (min. ~3 nights) | Resort‑style rooftop pool with cabanas & dining areas
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Residencias llave en mano amuebladas por RH
- Airbnb/estancias cortas (mín. ~3 noches)
- microClaims EN:
- Turn‑key residences furnished by RH
- Airbnb‑friendly (min. ~3 nights)
- usableCopyReference:
- Residencias llave en mano amuebladas por RH
- Turn‑key residences furnished by RH
- Gimnasio de última generación + estudio de yoga/barre
- Gran lobby de doble altura y centro de negocios/co‑working
- >≈4,000 m² de amenidades interiores/exteriores
- State‑of‑the‑art fitness center + yoga/barre studio
- Grand double‑height lobby & business/co‑working center
- >1 acre of indoor/outdoor amenities
- Cocinas italianas; encimeras y salpicaderos elegantes
- Electrodomésticos Bosch · lavadora/secadora en unidad
- Pisos importados de gran formato y persianas blackout
- Armario del propietario con cerradura; terrazas tranquilas
- ... 8 more in JSON
- needsRewrite:
- Airbnb/estancias cortas (mín. ~3 noches)
- Airbnb‑friendly (min. ~3 nights)
- Piscina rooftop tipo resort, cabañas y áreas de comedor
- Wellness spa (piscina interior, sauna, vapor, masajes)
- Resort‑style rooftop pool with cabanas & dining areas
- Wellness spa (indoor pool, sauna, steam, massage rooms)
- Propiedad flexible con posibilidad de alquiler de corta/larga estadía; sujeta a normativa local y permisos.
- Flexible ownership allowing short/long‑term rentals; subject to local rules and permits.
- Renta corta permitida (Airbnb); estadía mínima ~3 noches.
- Short‑term rentals permitted (Airbnb); ~3‑night minimum.
- discardCopy:
- Flexible ownership allowing short/long‑term rentals; subject to local rules and permits.
- Renta corta permitida (Airbnb); estadía mínima ~3 noches.
- Short‑term rentals permitted (Airbnb); ~3‑night minimum.

### Highlights / Features
- projectHighlights EN:
- Imported large‑format floors & blackout shades
- residences EN:
- Italian kitchens; elegant counters & backsplashes
- Bosch appliance suite · in‑unit washer/dryer
- Imported large‑format floors & blackout shades
- Lockable owner’s closet; tranquil terraces
- amenities EN:
- Resort‑style rooftop pool with cabanas & dining areas
- Wellness spa (indoor pool, sauna, steam, massage rooms)
- State‑of‑the‑art fitness center + yoga/barre studio
- Italian kitchens; elegant counters & backsplashes
- lifestyle EN:
- Resort‑style rooftop pool with cabanas & dining areas
- Wellness spa (indoor pool, sauna, steam, massage rooms)
- State‑of‑the‑art fitness center + yoga/barre studio
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Edificio de 12 pisos · 174 residencias
- 1-3 dormitorios · 62-135 m²
- unitMix EN:
- 12‑story building · 174 residences
- 1-3 BR · 662-1,461 sq ft
- bedrooms: 3 bedrooms
- squareFootageRanges: 662-1,461 sq ft; 1,461 sq ft; 62-135 m2; 135 m2; 000 m2
- residence count: 174
- floors: 12

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 30% al contrato
- 10% a ~6 meses
- 60% al cierre
- paymentPlan EN:
- 30% at contract
- 10% ~6 months after contract
- 60% at closing
- percentages: 10, 30, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 4011 Salzedo St
- mapQuery: 4011 Salzedo St
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 6
- FAQ EN count: 6
- sensitive FAQ claims:
- ¿Plan de depósitos? -> payment_plan_claim
- Rental policy? -> tax_or_legal_claim
- Deposit schedule? -> payment_plan_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Cassia/2.jpeg
- https://ik.imagekit.io/devrodri/Cassia/3.jpeg
- https://ik.imagekit.io/devrodri/Cassia/4.jpg
- https://ik.imagekit.io/devrodri/Cassia/5.jpg
- https://ik.imagekit.io/devrodri/Cassia/6.jpg
- https://ik.imagekit.io/devrodri/Cassia/7.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_price, needs_current_verification

## Cipriani Residences

### Identification
- id: cipriani
- name: Cipriani Residences
- slug: /proyectos/cipriani
- sourceFilePath: src/data/projects/cipriani.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Brickell
- neighborhood / area: Brickell
- address: Not found.
- developer: 80-story tower by Arquitectonica; Elegant interiors by 1508 London; Design by Arquitectonica + 1508 London
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 1500000
- priceLabel: From USD 1,500,000
- delivery / completion: 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: /images/projects/cipriani.webp
- gallery count: 8
- ImageKit URL count: 8
- local image count: 1
- imageStatus: usable
- image flags:
- hero: /images/projects/cipriani.webp [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-2.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-7.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-3.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-8.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-9.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-6.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-4.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/CIpriani/1-5.jpg [branded]

### Description / Copy
- shortDescription ES: Cipriani Residences | Brickell | 1-4 dormitorios y penthouses | 80 pisos con curvas icónicas | Diseño de Arquitectonica + 1508 London | Torre de 80 pisos diseñada por Arquitectonica
- shortDescription EN: Cipriani Residences | Brickell | 1-4 bedroom residences and penthouses | 80-story iconic curved tower | Design by Arquitectonica + 1508 London | 80-story tower by Arquitectonica
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 80 pisos con curvas icónicas
- Diseño de Arquitectonica + 1508 London
- Servicio Cipriani exclusivo
- microClaims EN:
- 80-story iconic curved tower
- Design by Arquitectonica + 1508 London
- Exclusive Cipriani service
- usableCopyReference:
- 80 pisos con curvas icónicas
- Diseño de Arquitectonica + 1508 London
- Servicio Cipriani exclusivo
- Torre de 80 pisos diseñada por Arquitectonica
- Residencias de 1-4 dormitorios + penthouses
- Interiores sofisticados de 1508 London
- Deck elevado con 2 piscinas y spa
- Restaurante privado Cipriani exclusivo
- Acceso directo a Brickell y Biscayne Bay
- 80-story tower by Arquitectonica
- 1-4 bedroom residences + penthouses
- Elegant interiors by 1508 London
- ... 8 more in JSON
- needsRewrite:
- 80-story iconic curved tower
- Design by Arquitectonica + 1508 London
- Exclusive Cipriani service
- Elevated resort deck with 2 pools and spa
- Private Cipriani restaurant exclusive to residents
- Salón privado para belleza y wellness
- Private salon for beauty and wellness
- 10% al completar estructura
- 60% at Closing (financing available for foreign buyers)
- Is the Cipriani restaurant exclusive?
- discardCopy:
- ¿Se permite tener mascotas?

### Highlights / Features
- projectHighlights EN:
- 80-story tower by Arquitectonica
- 1-4 bedroom residences + penthouses
- residences EN:
- 1-4 bedroom residences + penthouses
- amenities EN:
- Elevated resort deck with 2 pools and spa
- Private Cipriani restaurant exclusive to residents
- Dramatic lobby with Cipriani concierge
- Private restaurant + 24h in-home catering
- Italian Riviera-inspired pools with cabanas
- Fitness center + golf simulator + pickleball
- Holistic spa with sauna and treatment rooms
- Residents’ social lounge, library, screening room
- Private salon for beauty and wellness
- Children’s playroom indoor + outdoor
- lifestyle EN:
- Italian Riviera-inspired pools with cabanas
- Private salon for beauty and wellness
- location EN:
- Direct access to Brickell and Biscayne Bay

### Unit Mix / Residences
- unitMix ES:
- 1-4 dormitorios y penthouses
- Penthouses con terrazas privadas y piscinas
- unitMix EN:
- 1-4 bedroom residences and penthouses
- Penthouses with private terraces and pools
- bedrooms: 4 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: 80

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 20% al contrato
- 10% a los 90 días
- 10% al completar estructura
- 60% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at Contract
- 10% in 90 days
- 10% at Rooftop
- 60% at Closing (financing available for foreign buyers)
- percentages: 10, 20, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Cipriani Residences Brickell Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Brickell

### FAQs
- FAQ ES count: 7
- FAQ EN count: 7
- sensitive FAQ claims:
- ¿Se permite tener mascotas? -> tax_or_legal_claim

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_price, brand_usage_review, needs_current_verification

## Domus Brickell Center

### Identification
- id: domus-brickell-center
- name: Domus Brickell Center
- slug: /proyectos/domus-brickell-center
- sourceFilePath: src/data/projects/domus-brickell-center.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Brickell
- neighborhood / area: Brickell
- address: 1034 SW 2nd Ave, in the heart of Brickell, steps to Metrorail/Metromover and Brickell City Centre
- developer: Not found as dedicated field.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 470000
- priceLabel: From USD 470,000
- delivery / completion: 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/c_nOVrUw.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/c_nOVrUw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/osYxguqg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/uUMtGHZw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/sw7vVp0w.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/Cjir9QRQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/KvH4wVCA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/SEtJgUoQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/4mj3v7Kw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus%20Brickell%20Center/PP8zSn4w.jpeg [branded]

### Description / Copy
- shortDescription ES: Domus Brickell Center | Brickell | Studios | Modelo flexible de renta (Airbnb/Booking/Hyatt/Marriott) | 579 FLATS amueblados (Estudio, 1 y 2BR) | Ubicación: 1034 SW 2nd Ave, junto a Brickell City Centre
- shortDescription EN: Domus Brickell Center | Brickell | Studios | Flexible rental model (Airbnb/Booking/Hyatt/Marriott) | 579 furnished FLATS (Studio, 1 & 2BR) | Prime address: 1034 SW 2nd Ave, next to Brickell City Centre
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Modelo flexible de renta (Airbnb/Booking/Hyatt/Marriott)
- 579 FLATS amueblados (Estudio, 1 y 2BR)
- 35 pisos · ≈1,900 m² de amenities
- microClaims EN:
- Flexible rental model (Airbnb/Booking/Hyatt/Marriott)
- 579 furnished FLATS (Studio, 1 & 2BR)
- 35 stories · 20,000 sq ft of amenities
- usableCopyReference:
- 579 FLATS amueblados (Estudio, 1 y 2BR)
- 35 pisos · ≈1,900 m² de amenities
- 579 furnished FLATS (Studio, 1 & 2BR)
- 35 stories · 20,000 sq ft of amenities
- Ubicación: 1034 SW 2nd Ave, junto a Brickell City Centre
- Piscina rooftop con vistas + lounge/bar y restaurante en lobby
- Sistema Domus Management con pricing dinámico y 100+ canales (Hyatt/Marriott)
- Rooftop pool with views + sky lounge/bar and lobby restaurant
- Domus Management: dynamic pricing & 100+ channels (Hyatt/Marriott)
- FLATS terminados y amueblados (hard flooring en toda la unidad)
- Balcón privado en todas las unidades
- Cerradura inteligente sin llave (smart lock)
- ... 8 more in JSON
- needsRewrite:
- Modelo flexible de renta (Airbnb/Booking/Hyatt/Marriott)
- Flexible rental model (Airbnb/Booking/Hyatt/Marriott)
- Wellness Deck: yoga, spa y gimnasio indoor/outdoor
- Prime address: 1034 SW 2nd Ave, next to Brickell City Centre
- Wellness Deck with yoga, spa and indoor/outdoor gym
- 70% at Closing (financing available for foreign buyers)
- Sí. Modelo flexible con integración a Airbnb, Booking y alianzas con Hyatt/Marriott.
- Rooftop con piscina y lounge, wellness deck (yoga, spa, gimnasio), restaurante en lobby y business lounge.
- Are short‑term rentals allowed?
- Yes. Flexible model integrated with Airbnb/Booking and Hyatt/Marriott partnerships.
- Rooftop pool & lounge, wellness deck (yoga, spa, gym), lobby restaurant and business lounge.
- 10% at contract, 10% in 30 days, 10% in 60 days and 70% at closing (financing for foreign buyers).
- ... 2 more in JSON
- discardCopy:
- ¿Se permiten alquileres de corto plazo?

### Highlights / Features
- projectHighlights EN:
- Building‑wide UV water filtration and filtered air in common areas
- residences EN:
- Turnkey furnished FLATS (hard flooring throughout)
- Private balcony in every unit
- Kitchen with premium appliance package
- amenities EN:
- Wellness Deck with yoga, spa and indoor/outdoor gym
- Rooftop pool with views + sky lounge/bar and lobby restaurant
- Kitchen with premium appliance package
- Bike sharing, business lounge and owner portal with analytics
- lifestyle EN:
- Wellness Deck with yoga, spa and indoor/outdoor gym
- Rooftop pool with views + sky lounge/bar and lobby restaurant
- Keyless smart lock entry
- Building‑wide UV water filtration and filtered air in common areas
- location EN:
- Prime address: 1034 SW 2nd Ave, next to Brickell City Centre

### Unit Mix / Residences
- unitMix ES:
- Studios
- 1 Dormitorio
- 2 Dormitorios
- unitMix EN:
- Studios
- 1 Bedroom
- 2 Bedrooms
- bedrooms: studio, 1 bedroom, 2 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: 35

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 10% al contrato
- 10% a los 30 días (completa 20%)
- 10% a los 60 días (completa 30%)
- 70% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 10% at contract
- 10% in 30 days (to complete 20%)
- 10% in 60 days (to complete 30%)
- 70% at Closing (financing available for foreign buyers)
- percentages: 10, 70
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 1034 SW 2nd Ave, in the heart of Brickell, steps to Metrorail/Metromover and Brickell City Centre
- mapQuery: 1034 SW 2nd Ave, in the heart of Brickell, steps to Metrorail/Metromover and Brickell City Centre
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 6
- FAQ EN count: 6
- sensitive FAQ claims:
- ¿Se permiten alquileres de corto plazo? -> rental_policy_claim, tax_or_legal_claim
- ¿Cuál es el plan de pagos? -> payment_plan_claim
- Are short‑term rentals allowed? -> rental_policy_claim
- What is the payment plan? -> payment_plan_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, brand_usage_review, needs_current_verification

## Domus Brickell Park

### Identification
- id: domus-brickell-park
- name: Domus Brickell Park
- slug: /proyectos/domus-brickell-park
- sourceFilePath: src/data/projects/domus-brickell-park.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Brickell
- neighborhood / area: Brickell
- address: Not found.
- developer: Not found as dedicated field.
- buildingType: villa/townhome component candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 629000
- priceLabel: From USD 629,000
- delivery / completion: 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: /images/projects/domus-brickell-park.webp
- gallery count: 8
- ImageKit URL count: 8
- local image count: 1
- imageStatus: usable
- image flags:
- hero: /images/projects/domus-brickell-park.webp [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/gallery-6.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/Domus_02_rev05_Final.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/Domus_Pool01_rev05_2000-px.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/Domus_Pool02_rev01-1_2000-px.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/Domus_Gym_rev05_2000-px.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/Domus_WineBar_02_Unbranded_2000px.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/DomusBrickellPark_The-Peacock-Room_2000-px.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Domus/gallery-5.jpg [branded]

### Description / Copy
- shortDescription ES: Domus Brickell Park | Brickell | Estudios, 1 y 2 dorms · 30-90 m² totales | STR‑friendly | The Peacock Room | Concepto Domus FLATS: departamentos con servicios y lujos de hotel
- shortDescription EN: Domus Brickell Park | Brickell | Studios, 1 & 2 beds · 323-969 sf total | STR‑friendly | The Peacock Room | Domus FLATS concept: serviced apartments with hotel‑level amenities
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- STR‑friendly
- The Peacock Room
- En el corazón de Brickell
- microClaims EN:
- STR‑friendly
- The Peacock Room
- In the heart of Brickell
- usableCopyReference:
- The Peacock Room
- En el corazón de Brickell
- In the heart of Brickell
- Concepto Domus FLATS: departamentos con servicios y lujos de hotel
- Portal Domus con exposición a +85 plataformas
- Lobby con cafetería/panadería, wine & beer bar y mercado artesanal
- Roof con piscina, cabañas, jacuzzi y áreas sociales
- Amplio co‑working y gimnasio de última generación
- Domus FLATS concept: serviced apartments with hotel‑level amenities
- Domus portal with exposure to 85+ platforms
- Lobby with café/bakery, wine & beer bar and artisanal market
- Rooftop with pool, cabanas, jacuzzi and social areas
- ... 7 more in JSON
- needsRewrite:
- STR‑friendly
- Ubicación privilegiada: a minutos de BCC, Mary Brickell Village y Metrorail
- Prime location: minutes to BCC, Mary Brickell Village and Metrorail
- 70% at Closing (financing available for foreigners)
- Are short‑term rentals allowed?
- Yes. Domus FLATS enables STR with exposure to 85+ booking platforms.
- 20% at contract, 10% six months later, 70% at closing (financing available for foreigners).
- Daily rentals allowed (1 day to 6 months + 1 day)
- discardCopy:
- ¿Se permiten rentas cortas?
- Alquiler diario permitido (1 día a 6 meses + 1 día)

### Highlights / Features
- projectHighlights EN:
- Not found.
- residences EN:
- Jacuzzi and lush garden terrace
- Impact‑resistant windows · ~9 ft ceilings · private balconies
- amenities EN:
- Lobby with café/bakery, wine & beer bar and artisanal market
- Rooftop with pool, cabanas, jacuzzi and social areas
- Large co‑working lounge and state‑of‑the‑art fitness center
- Rooftop pool and cabanas
- State‑of‑the‑art gym + steam room
- Large co‑working lounge and Peacock Room
- Café/bakery with barista and wine & beer bar
- Pet‑friendly with local art exhibitions
- lifestyle EN:
- Domus FLATS concept: serviced apartments with hotel‑level amenities
- Lobby with café/bakery, wine & beer bar and artisanal market
- Large co‑working lounge and state‑of‑the‑art fitness center
- State‑of‑the‑art gym + steam room
- Artisanal gourmet market in the lobby
- Smart lock system, in‑unit W/D, premium TV & audio
- Pet‑friendly with local art exhibitions
- location EN:
- Prime location: minutes to BCC, Mary Brickell Village and Metrorail

### Unit Mix / Residences
- unitMix ES:
- Estudios, 1 y 2 dorms · 30-90 m² totales
- Ejemplo 1BR · 59-75 m² totales (interior 54 m² + exterior 5 m²)
- Ejemplo 2BR · 78-80 m² totales (interior 74 m² + exterior 4-6 m²)
- unitMix EN:
- Studios, 1 & 2 beds · 323-969 sf total
- Sample 1BR · 633-799 sf total (576 sf int + 38-57 sf ext)
- Sample 2BR · 837-853 sf total (799-802 sf int + 38-51 sf ext)
- bedrooms: studio, 1 bedroom, 2 bedrooms
- squareFootageRanges: 30-90 m2; 59-75 m2; 78-80 m2; 4-6 m2; 90 m2; 75 m2; 54 m2; 5 m2; 80 m2; 74 m2; 6 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 20% al contrato
- 10% a los 6 meses del contrato
- 70% al cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at Contract
- 10% six months after contract
- 70% at Closing (financing available for foreigners)
- percentages: 10, 20, 70
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Domus Brickell Park Brickell Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Brickell

### FAQs
- FAQ ES count: 6
- FAQ EN count: 6
- sensitive FAQ claims:
- ¿Se permiten rentas cortas? -> tax_or_legal_claim
- ¿Cuál es el plan de pagos? -> payment_plan_claim
- Are short‑term rentals allowed? -> rental_policy_claim
- What’s the payment plan? -> payment_plan_claim

### Risk Flags
- str_claim (high): STR wording found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: str_claim, short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, brand_usage_review, needs_current_verification

## Edge House Miami

### Identification
- id: edge-house
- name: Edge House Miami
- slug: /proyectos/edge-house
- sourceFilePath: src/data/projects/edge-house.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 1837 NE 4th Ave, Miami, FL 33132
- neighborhood / area: Edgewater
- address: 1837 NE 4th Ave, Miami, FL 33132
- developer: Kobi Karp architecture in Edgewater
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 500000
- priceLabel: From USD 500,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/ayxrpX4g.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/ayxrpX4g.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/TerraceView.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/10_Edge-House_Pool-Deck1.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/12_Edge-House_Jacuzzi.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/17_Edge-House_BBQ-Area.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/SkyLounge2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/Lounge.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/21_Edge-House-Treatment-Room.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/EDGE%20HOUSE/Residence2.jpg [usable]

### Description / Copy
- shortDescription ES: Edge House Miami | 1837 NE 4th Ave, Miami, FL 33132 | Studios | Short‑term friendly (Airbnb) | Totalmente amueblado por Adriana Hoyos | Edgewater: minutos de Wynwood/Midtown/Downtown
- shortDescription EN: Edge House Miami | 1837 NE 4th Ave, Miami, FL 33132 | Studios | Short‑term friendly (Airbnb) | Fully furnished by Adriana Hoyos | Edgewater: minutes to Wynwood/Midtown/Downtown
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Short‑term friendly (Airbnb)
- Totalmente amueblado por Adriana Hoyos
- Arquitectura Kobi Karp en Edgewater
- microClaims EN:
- Short‑term friendly (Airbnb)
- Fully furnished by Adriana Hoyos
- Kobi Karp architecture in Edgewater
- usableCopyReference:
- Totalmente amueblado por Adriana Hoyos
- Arquitectura Kobi Karp en Edgewater
- Fully furnished by Adriana Hoyos
- Edgewater: minutos de Wynwood/Midtown/Downtown
- Sky Bar con vistas a la bahía; coworking y podcast
- Spa, gimnasio de última generación, estudio de yoga y jardín zen
- Cocinas de verano/BBQ, putting green y áreas para niños
- Edgewater: minutes to Wynwood/Midtown/Downtown
- Sky Bar with bay views; coworking & podcast
- Spa, state‑of‑the‑art gym, yoga studio and zen garden
- Summer kitchens/BBQ, putting green and kids’ areas
- Residencias totalmente amuebladas y equipadas (curadas por Adriana Hoyos)
- ... 8 more in JSON
- needsRewrite:
- Short‑term friendly (Airbnb)
- Kobi Karp architecture in Edgewater
- Doble piscina resort, jacuzzis y bar de piscina
- Dual resort pools, jacuzzis and pool bar
- Doble piscina con camastros, cabañas y plataforma húmeda
- Jacuzzis, spa de tratamientos, sauna y wellness lounge
- Twin resort pools with loungers, cabanas and sun shelf
- Jacuzzis, treatment spa, sauna and wellness lounge
- 10% al finalizar la estructura del piso 25 (top off)
- 50% at closing (financing available for foreign buyers)
- Sí. Proyecto orientado a short‑term con máxima flexibilidad.
- Are short‑term rentals allowed?
- ... 3 more in JSON
- discardCopy:
- ¿Se permiten alquileres de corto plazo?

### Highlights / Features
- projectHighlights EN:
- Fully furnished and turnkey residences (curated by Adriana Hoyos)
- residences EN:
- Summer kitchens/BBQ, putting green and kids’ areas
- Floor‑to‑ceiling glass, European cabinetry and premium appliances
- Summer kitchens/BBQ and sky lounge/bar
- amenities EN:
- Sky Bar with bay views; coworking & podcast
- Dual resort pools, jacuzzis and pool bar
- Spa, state‑of‑the‑art gym, yoga studio and zen garden
- Summer kitchens/BBQ, putting green and kids’ areas
- Concierge, 24h valet and smart parcel system
- Twin resort pools with loungers, cabanas and sun shelf
- Jacuzzis, treatment spa, sauna and wellness lounge
- Full gym + yoga studio
- Summer kitchens/BBQ and sky lounge/bar
- lifestyle EN:
- Edgewater: minutes to Wynwood/Midtown/Downtown
- Sky Bar with bay views; coworking & podcast
- Spa, state‑of‑the‑art gym, yoga studio and zen garden
- Concierge, 24h valet and smart parcel system
- Jacuzzis, treatment spa, sauna and wellness lounge
- location EN:
- Edgewater: minutes to Wynwood/Midtown/Downtown

### Unit Mix / Residences
- unitMix ES:
- Studios
- 1 Dormitorio
- 2 Dormitorios
- 3 Dormitorios
- unitMix EN:
- Studios
- 1 Bedroom
- 2 Bedrooms
- 3 Bedrooms
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 5% al contrato
- 5% a los 15 días
- 10% a los 45 días
- 10% a los 90 días
- 10% al finalizar la estructura del piso 25 (top off)
- 10% al top‑off
- 50% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 5% at contract
- 5% 15 days from contract
- 10% 45 days from contract
- 10% 90 days after contract
- 10% at 25th floor pour
- 10% at top off
- 50% at closing (financing available for foreign buyers)
- percentages: 5, 10, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 1837 NE 4th Ave, Miami, FL 33132
- mapQuery: 1837 NE 4th Ave, Miami, FL 33132
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 3
- FAQ EN count: 3
- sensitive FAQ claims:
- ¿Se permiten alquileres de corto plazo? -> rental_policy_claim, tax_or_legal_claim
- Are short‑term rentals allowed? -> rental_policy_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/EDGE%20HOUSE/TerraceView.jpg
- https://ik.imagekit.io/devrodri/EDGE%20HOUSE/10_Edge-House_Pool-Deck1.webp
- https://ik.imagekit.io/devrodri/EDGE%20HOUSE/12_Edge-House_Jacuzzi.webp
- https://ik.imagekit.io/devrodri/EDGE%20HOUSE/17_Edge-House_BBQ-Area.webp
- https://ik.imagekit.io/devrodri/EDGE%20HOUSE/SkyLounge2.jpg
- https://ik.imagekit.io/devrodri/EDGE%20HOUSE/Lounge.jpg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, needs_current_verification

## ELLA Miami Beach

### Identification
- id: ella-miami
- name: ELLA Miami Beach
- slug: /proyectos/ella-miami
- sourceFilePath: src/data/projects/ella-miami.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Miami Beach
- neighborhood / area: Miami Beach
- address: Not found.
- developer: ItalKraft kitchens with panel‑ready appliance package; Optional furnishing packages by Interiors by Steven G; Yes, by Interiors by Steven G.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 477000
- priceLabel: From USD 477,000
- delivery / completion: 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: /images/projects/ella.webp
- gallery count: 8
- ImageKit URL count: 8
- local image count: 1
- imageStatus: usable
- image flags:
- hero: /images/projects/ella.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-03.jpg?updatedAt=1757212992581 [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-07.jpg?updatedAt=1757212992507 [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/Gtd1LINg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/1X7YlYjw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-08.jpg?updatedAt=1757212992563 [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-01.jpg?updatedAt=1757212991986 [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/G4m3fvVQ.jpeg?updatedAt=1757212991597 [usable]
- gallery: https://ik.imagekit.io/devrodri/ELLA-Miami/hh6lcwuQ.jpeg?updatedAt=1757212991625 [usable]

### Description / Copy
- shortDescription ES: ELLA Miami Beach | Miami Beach | Estudios · ~32 m² interiores · 8 m² terraza · total ~40 m² | Renta corta aprobada | Rooftop con piscina | Residencias inspiradas en el Art Deco de Miami Beach
- shortDescription EN: ELLA Miami Beach | Miami Beach | Studios · ~342 sf interiors · 87-90 sf exterior · total ~429-432 sf | STR friendly | Rooftop pool | Art‑Deco inspired collection in Miami Beach
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Renta corta aprobada
- Rooftop con piscina
- North Beach
- microClaims EN:
- STR friendly
- Rooftop pool
- North Beach
- usableCopyReference:
- Renta corta aprobada
- Rooftop con piscina
- North Beach
- Rooftop pool
- Residencias inspiradas en el Art Deco de Miami Beach
- Estudios, 1 y 2 dormitorios con amplias terrazas
- A ~5 minutos a pie de la playa
- Cocinas ItalKraft y paquete de electrodomésticos panel‑ready
- Paquetes de amueblado disponibles por Interiors by Steven G
- Art‑Deco inspired collection in Miami Beach
- Studios, 1 & 2‑bedroom residences with large terraces
- ≈5‑minute walk to the beach
- ... 7 more in JSON
- needsRewrite:
- STR friendly
- Rentas de corto plazo permitidas (STR friendly)
- Short‑term rentals allowed (STR friendly)
- Sala de trabajo y administración de propiedades
- 15% al completar estructura (top off)
- 50% at Closing (financing available for foreigners)
- Sí. El proyecto es STR‑friendly (rentas de corto plazo permitidas).
- Are short‑term rentals allowed?
- Yes. STR‑friendly (short‑term rentals allowed).
- Sin restricciones
- No restrictions
- discardCopy:
- Rentas de corto plazo permitidas (STR friendly)
- ¿Se permiten rentas cortas?
- Sí. El proyecto es STR‑friendly (rentas de corto plazo permitidas).

### Highlights / Features
- projectHighlights EN:
- Studios, 1 & 2‑bedroom residences with large terraces
- residences EN:
- Studios, 1 & 2‑bedroom residences with large terraces
- ItalKraft kitchens with panel‑ready appliance package
- Summer kitchen and covered outdoor dining
- amenities EN:
- ItalKraft kitchens with panel‑ready appliance package
- Rooftop pool with bay & skyline views
- Cold plunge and sauna
- Fitness center + outdoor yoga & meditation deck
- Paddle & pickleball court
- Summer kitchen and covered outdoor dining
- Work lounge and on‑site property management
- lifestyle EN:
- Art‑Deco inspired collection in Miami Beach
- ≈5‑minute walk to the beach
- Rooftop pool with bay & skyline views
- Summer kitchen and covered outdoor dining
- location EN:
- Art‑Deco inspired collection in Miami Beach

### Unit Mix / Residences
- unitMix ES:
- Estudios · ~32 m² interiores · 8 m² terraza · total ~40 m²
- 1 dormitorio · ~51-73 m² interiores · 17-48 m² terraza · total ~72-121 m²
- 2 dormitorios · ~95-101 m² interiores · 46-68 m² terraza · total ~142-163 m²
- unitMix EN:
- Studios · ~342 sf interiors · 87-90 sf exterior · total ~429-432 sf
- 1 bed · ~615-618 sf interiors · 183-384 sf exterior · total ~798-1,002 sf
- 2 bed · ~1,019-1,089 sf interiors · 499-737 sf exterior · total ~1,526-1,756 sf
- bedrooms: studio, 1 bedroom, 2 bedrooms
- squareFootageRanges: 51-73 m2; 17-48 m2; 72-121 m2; 95-101 m2; 46-68 m2; 142-163 m2; 32 m2; 8 m2; 40 m2; 73 m2; 48 m2; 121 m2; 101 m2; 68 m2; 163 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 20% al contrato
- 15% a los 90 días
- 15% al completar estructura (top off)
- 50% al cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at Contract
- 15% 90 days after contract
- 15% at Top Off
- 50% at Closing (financing available for foreigners)
- percentages: 15, 20, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: ELLA Miami Beach Miami Beach Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Miami Beach

### FAQs
- FAQ ES count: 3
- FAQ EN count: 3
- sensitive FAQ claims:
- ¿Se permiten rentas cortas? -> rental_policy_claim, tax_or_legal_claim
- Are short‑term rentals allowed? -> rental_policy_claim

### Risk Flags
- str_claim (high): STR wording found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-03.jpg?updatedAt=1757212992581
- https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-07.jpg?updatedAt=1757212992507
- https://ik.imagekit.io/devrodri/ELLA-Miami/Gtd1LINg.jpeg
- https://ik.imagekit.io/devrodri/ELLA-Miami/1X7YlYjw.jpeg
- https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-08.jpg?updatedAt=1757212992563
- https://ik.imagekit.io/devrodri/ELLA-Miami/ella-miami-beach-01.jpg?updatedAt=1757212991986
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: str_claim, short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, needs_current_verification

## ELLE Residences Miami

### Identification
- id: elle-residences
- name: ELLE Residences Miami
- slug: /proyectos/elle-residences
- sourceFilePath: src/data/projects/elle-residences-edgewater.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 3618 NE 5th Ave, Miami, FL 33137, EE. UU.
- neighborhood / area: Miami
- address: 3618 NE 5th Ave, Miami, FL 33137, EE. UU.
- salesGalleryAddress: 600 NE 36th St, Suite C1, Miami, FL 33137 (Edgewater).
- developer: Miele appliance suite; Imported Italian cabinetry & woodwork by Italkraft
- buildingType: boutique residential condominium candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 590000
- priceLabel: From USD 590,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Elle%20Residences/Elle%20Residences%20Miami%2008.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Elle%20Residences/Elle%20Residences%20Miami%2008.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/1.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/2.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/3.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/4.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/5.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/6.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/7.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Elle%20Residences/8.jpeg [branded]

### Description / Copy
- shortDescription ES: ELLE Residences Miami | 3618 NE 5th Ave, Miami, FL 33137, EE. UU. | 1–2 dormitorios · ≈42–79 m² (equivalente a 450–845 sq ft) | 25 pisos · 180 residencias | 2 piscinas (deck + rooftop) | Lobby doble altura · valet · concierge 24/7
- shortDescription EN: ELLE Residences Miami | 3618 NE 5th Ave, Miami, FL 33137, EE. UU. | 1–2 bedrooms · 450–845 sq ft | 25 floors · 180 residences | 2 pools (deck + rooftop) | Double-height lobby · valet · 24/7 concierge
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 25 pisos · 180 residencias
- 2 piscinas (deck + rooftop)
- 1–2 dormitorios · ≈42–79 m²
- microClaims EN:
- 25 floors · 180 residences
- 2 pools (deck + rooftop)
- 1–2 bedrooms · 450–845 sq ft
- usableCopyReference:
- 25 pisos · 180 residencias
- 2 piscinas (deck + rooftop)
- 1–2 dormitorios · ≈42–79 m²
- 25 floors · 180 residences
- 2 pools (deck + rooftop)
- 1–2 bedrooms · 450–845 sq ft
- Lobby doble altura · valet · concierge 24/7
- Café & restaurant · boutique retail · Wi-Fi
- Outdoor movie theater · shuffleboard & bocce
- Gym + fitness programming · yoga & meditation garden
- Spa: sauna, steam, experience shower, salt wall · soaking spa & cold plunge
- Rooftop Sky Pool con vistas (norte/este/oeste)
- ... 6 more in JSON
- needsRewrite:
- Deck estilo resort (inspirado en la Riviera Francesa) con pool, cabanas y lounge
- French Riviera-inspired resort deck with pool, cabanas & lounge
- Gym + branded fitness programming · yoga & meditation garden
- 10% 90 días después o al nivel de amenidades (lo que ocurra primero)
- Renta flexible: opción de usar plataformas o un programa de renta totalmente administrado.
- Flexible rentals: option to use platforms or a fully managed rental program.
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- Gym + branded fitness programming · yoga & meditation garden
- residences EN:
- Floor-to-ceiling impact windows & doors
- High ceilings · top-floor Grande Suites with 11-foot ceilings
- Miele appliance suite
- Imported Italian cabinetry & woodwork by Italkraft
- French-inspired chevron pattern wood flooring
- High-efficiency washer/dryer · built-in closets
- amenities EN:
- Double-height lobby · valet · 24/7 concierge
- Café & restaurant · boutique retail · high-speed Wi-Fi
- French Riviera-inspired resort deck with pool, cabanas & lounge
- Outdoor movie theater · shuffleboard & bocce
- Gym + branded fitness programming · yoga & meditation garden
- Spa: sauna, steam, experience shower, salt wall · soaking spa & cold plunge
- Rooftop Sky Pool with views (north/east/west)
- Maison Club: library, listening room, lounge with bar
- lifestyle EN:
- French Riviera-inspired resort deck with pool, cabanas & lounge
- Rooftop Sky Pool with views (north/east/west)
- Quartz countertops
- Modern brass fixtures · smart climate control
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 1–2 dormitorios · ≈42–79 m² (equivalente a 450–845 sq ft)
- unitMix EN:
- 1–2 bedrooms · 450–845 sq ft
- bedrooms: 1 bedroom, 2 bedrooms
- squareFootageRanges: 450-845 sq ft; 845 sq ft; 42-79 m2; 79 m2
- residence count: 180
- floors: 25

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 20% al contrato
- 10% al inicio de obra (groundbreaking)
- 10% 90 días después o al nivel de amenidades (lo que ocurra primero)
- 10% al top-off
- Balance al cierre
- paymentPlan EN:
- 20% at contract
- 10% at groundbreaking
- 10% 90 days later or at amenity level (whichever comes first)
- 10% at top-off
- Balance at closing
- percentages: 10, 20
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 3618 NE 5th Ave, Miami, FL 33137, EE. UU.
- mapQuery: 3618 NE 5th Ave, Miami, FL 33137, EE. UU.
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 5
- FAQ EN count: 5
- sensitive FAQ claims:
- ¿Depósito de reserva? -> payment_plan_claim
- ¿Plan de pagos? -> payment_plan_claim
- Reservation deposit? -> payment_plan_claim
- Deposit schedule? -> payment_plan_claim
- Rentals? -> rental_policy_claim

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: visible_candidate
- reason: Core project data exists. Use only as a neutral candidate after verification and rewrite.
- canShowCard: true
- canCreateDetailPage: true
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, developer_copy, esteban_tone, brand_usage_review, needs_current_verification

## Faena Residences Miami

### Identification
- id: faena-residences-miami
- name: Faena Residences Miami
- slug: /proyectos/faena
- sourceFilePath: src/data/projects/faena.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Miami River
- neighborhood / area: Miami River
- address: Not found.
- developer: Not found as dedicated field.
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 1300000
- priceLabel: From USD 1,300,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Faena/dT-Dx4lg.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Faena/dT-Dx4lg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/-oBqAd-w.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/3_ypp2Dg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/SJGaLFeQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/pQnVS2uQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/rXcPduug.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/mSEtdNnw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/LlSqs7nA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Faena/abbIlMwQ.jpeg [branded]

### Description / Copy
- shortDescription ES: Faena Residences Miami | Miami River | 1-4 dormitorios; River Lofts; Sky Lofts; Penthouses | Dos torres frente al río conectadas por Sky Bridge | Faena Beach en el piso 64 | Sky Bridge 61-64: club y lounges
- shortDescription EN: Faena Residences Miami | Miami River | 1-4 bedrooms; River Lofts; Sky Lofts; Penthouses | Two riverfront towers linked by a Sky Bridge | Faena Beach on the 64th floor | Sky Bridge on levels 61/62/64 with social club, dining and lounges
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Dos torres frente al río conectadas por Sky Bridge
- Faena Beach en el piso 64
- Cultura + wellness + comunidad
- ≈100 m de frente al Miami River
- Distrito de ≈6 hectáreas
- microClaims EN:
- Two riverfront towers linked by a Sky Bridge
- Faena Beach on the 64th floor
- Culture + wellness + community
- 327 ft of Miami River frontage
- 14‑acre district
- usableCopyReference:
- Dos torres frente al río conectadas por Sky Bridge
- Faena Beach en el piso 64
- ≈100 m de frente al Miami River
- Two riverfront towers linked by a Sky Bridge
- Faena Beach on the 64th floor
- 327 ft of Miami River frontage
- Sky Bridge 61-64: club y lounges
- Faena Beach: piscina infinity, cabañas y bar
- Foro cultural The Pistil, Library Lounge y programación artística
- Acceso a muelle y concierge náutico; porte‑cochère y lobbies privados
- Teatro para 40 personas y suites de huéspedes en el Sky Bridge
- Clínica de longevidad, hammam y cold plunge; juice & coffee bar
- ... 8 more in JSON
- needsRewrite:
- Cultura + wellness + comunidad
- Distrito de ≈6 hectáreas
- Culture + wellness + community
- 14‑acre district
- Wellness de alto desempeño: fitness, spa, salas de creación y estudio
- Cancha de pádel, kids club y pet wellness
- High‑performance wellness: fitness, spa, content studios
- Padel court, kids club and pet wellness
- 50% at Closing (financing available for foreign buyers)
- Club social y cultural con The Pistil, Library Lounge, teatro, suites de huéspedes, wellness y piscina Faena Beach.
- Delivered fully finished with luxury finishes; furnishing not specified in the materials.
- How are deposits structured?
- ... 1 more in JSON
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- Residences delivered fully finished; travertine floors in social areas
- residences EN:
- 40‑seat theater and guest suites within the Sky Bridge
- Residences delivered fully finished; travertine floors in social areas
- Impact‑resistant floor‑to‑ceiling glass; smart‑home pre‑wiring
- Italian kitchens in natural stone with Gaggenau appliances
- Primary baths with handcrafted stone vanities and THG fixtures
- amenities EN:
- Sky Bridge on levels 61/62/64 with social club, dining and lounges
- Faena Beach infinity pool, cabanas and full‑service bar
- The Pistil cultural forum, Library Lounge and curated program
- High‑performance wellness: fitness, spa, content studios
- Private marina access and nautical concierge; porte‑cochère and private lobbies
- 40‑seat theater and guest suites within the Sky Bridge
- Longevity clinic, hammam and cold plunge; juice & coffee bar
- Padel court, kids club and pet wellness
- Italian kitchens in natural stone with Gaggenau appliances
- lifestyle EN:
- Sky Bridge on levels 61/62/64 with social club, dining and lounges
- Faena Beach infinity pool, cabanas and full‑service bar
- High‑performance wellness: fitness, spa, content studios
- Padel court, kids club and pet wellness
- Impact‑resistant floor‑to‑ceiling glass; smart‑home pre‑wiring
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 1-4 dormitorios; River Lofts; Sky Lofts; Penthouses
- Residencias con terrazas de ≈3 m y ventanales piso‑techo
- unitMix EN:
- 1-4 bedrooms; River Lofts; Sky Lofts; Penthouses
- Residences with 10‑ft terraces and floor‑to‑ceiling glass
- bedrooms: 4 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 5% al Contrato
- 5% a los 45 días de la firma
- 10% a los 120 días de la firma
- 10% al inicio de obra (groundbreaking)
- 10% a los 12 meses del inicio de obra
- 10% al colado de la losa de la unidad residencial más alta
- 50% al Cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- 5% at Contract
- 5% 45 days after Signing
- 10% 120 days from Signing
- 10% at Groundbreaking
- 10% 12 Months after Groundbreaking
- 10% at Pouring of Highest Residential Unit
- 50% at Closing (financing available for foreign buyers)
- percentages: 5, 10, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Faena Residences Miami Miami River Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Miami River

### FAQs
- FAQ ES count: 8
- FAQ EN count: 8
- sensitive FAQ claims:
- ¿Cómo es el plan de depósitos? -> payment_plan_claim
- How are deposits structured? -> payment_plan_claim

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: visible_candidate
- reason: Core project data exists. Use only as a neutral candidate after verification and rewrite.
- canShowCard: true
- canCreateDetailPage: true
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, developer_copy, esteban_tone, brand_usage_review, needs_current_verification

## Flow House

### Identification
- id: flow-house
- name: Flow House
- slug: /proyectos/flow-house
- sourceFilePath: src/data/projects/flow-house.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Downtown Miami
- neighborhood / area: Downtown Miami
- address: 697 N. Miami Ave, within Miami Worldcenter, Miami
- developer: Not found as dedicated field.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 450000
- priceLabel: From USD 450,000
- delivery / completion: Nov-Dec 2025
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: /images/projects/flow-house.webp
- gallery count: 8
- ImageKit URL count: 8
- local image count: 1
- imageStatus: usable
- image flags:
- hero: /images/projects/flow-house.webp [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/1.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/2.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/3.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/4.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/6.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/7.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/8.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Flow%20House/5.jpg [branded]

### Description / Copy
- shortDescription ES: Flow House | Downtown Miami | Studio | Miami Worldcenter | 41 pisos · 466 residencias | Amenidades ≈4,300 m² (wellness & cowork)
- shortDescription EN: Flow House | Downtown Miami | Studio | Miami Worldcenter | 41 floors · 466 residences | 46,100 sq ft of amenities (wellbeing, workflow, experience)
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Miami Worldcenter
- 41 pisos · 466 residencias
- Residencias amuebladas
- microClaims EN:
- Miami Worldcenter
- 41 floors · 466 residences
- Furnished residences
- usableCopyReference:
- Miami Worldcenter
- 41 pisos · 466 residencias
- Residencias amuebladas
- 41 floors · 466 residences
- Furnished residences
- Piscina semi‑olímpica de ≈38 m con day beds y cabañas
- Coworking con oficinas privadas, salas de reunión y podcast room
- Residencias terminadas y amuebladas con lavadora/secadora
- Ubicado en el corazón de Miami Worldcenter
- 126‑ft lap pool with day beds & cabanas
- Coworking with private offices, meeting rooms & podcast room
- Finished & furnished residences with washer/dryer
- ... 7 more in JSON
- needsRewrite:
- Amenidades ≈4,300 m² (wellness & cowork)
- 46,100 sq ft of amenities (wellbeing, workflow, experience)
- Luxury bath fixtures
- 70% at Closing (financing available for foreign buyers, target Nov-Dec 2025)
- Its focus on wellbeing, community, modern design and tech spaces. Includes exclusive Flow furnishings.
- How is the payment plan structured?
- 10% at contract, 10% in 30 days, 10% in 60 days and 70% at closing (financing for foreign buyers). Completion Nov-Dec 2025.
- discardCopy:
- Leaseback 6% neto por 2 años (promoción limitada)
- 2‑year 6% net leaseback (limited promotion)
- Sí. Alquiler mínimo: 30 días. Además, hay opción de leaseback por 2 años.
- ¿Leaseback 6%?
- Yes. Minimum rental: 30 days. In addition, there is a 2-year leaseback option.
- Property tax?
- 6% leaseback?
- 2‑year guaranteed 6% net annual leaseback; HOA & taxes covered, 0% management fee (request official terms from sales).

### Highlights / Features
- projectHighlights EN:
- Finished & furnished residences with washer/dryer
- Finished and furnished residences
- Private balconies in select units
- Pet‑friendly building
- residences EN:
- 46,100 sq ft of amenities (wellbeing, workflow, experience)
- Finished & furnished residences with washer/dryer
- Private balconies in select units
- European‑style cabinetry
- Luxury bath fixtures
- Full appliances with washer & dryer
- amenities EN:
- 126‑ft lap pool with day beds & cabanas
- Coworking with private offices, meeting rooms & podcast room
- Pet‑friendly building
- Parking spaces available for rent
- lifestyle EN:
- Located in the heart of Miami Worldcenter
- Parking spaces available for rent
- location EN:
- Located in the heart of Miami Worldcenter

### Unit Mix / Residences
- unitMix ES:
- Studio
- Jr 1 Dormitorio
- 1 Dormitorio
- 2 Dormitorios
- unitMix EN:
- Studio
- Jr 1 Bedroom
- 1 Bedroom
- 2 Bedrooms
- bedrooms: studio, junior suite, 1 bedroom, 2 bedrooms
- squareFootageRanges: 46,100 sq ft; 300 m2
- residence count: 466
- floors: 41

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 10% reserva/contrato
- 10% a 30-60 días (completa 20%)
- 10% a 60-120 días (completa 30%)
- 70% al cierre (con financiación disponible para extranjeros, previsto Nov-Dic 2025)
- paymentPlan EN:
- 10% at reservation/contract
- 10% in 30-60 days (to complete 20%)
- 10% in 60-120 days (to complete 30%)
- 70% at Closing (financing available for foreign buyers, target Nov-Dec 2025)
- percentages: 10, 70
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 697 N. Miami Ave, within Miami Worldcenter, Miami
- mapQuery: 697 N. Miami Ave, within Miami Worldcenter, Miami
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 12
- FAQ EN count: 12
- sensitive FAQ claims:
- ¿Cómo es el plan de pago? -> payment_plan_claim
- ¿Se puede alquilar? -> leaseback_claim
- ¿Leaseback 6%? -> leaseback_claim, tax_or_legal_claim
- How is the payment plan structured? -> payment_plan_claim
- Can it be rented? -> leaseback_claim
- Property tax? -> tax_or_legal_claim
- 6% leaseback? -> leaseback_claim, tax_or_legal_claim

### Risk Flags
- leaseback_claim (high): Leaseback or guaranteed-rent language found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_delivery (medium): Delivery value is missing or time-sensitive: Nov-Dec 2025.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- leaseback or guaranteed-rent claims
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: leaseback_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_delivery, brand_usage_review, needs_current_verification

## Frida Kahlo Wynwood Residences

### Identification
- id: frida-kahlo
- name: Frida Kahlo Wynwood Residences
- slug: /proyectos/frida-kahlo
- sourceFilePath: src/data/projects/frida-kahlo.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 119 NW 29th St, Miami, FL 33127
- neighborhood / area: Wynwood
- address: 119 NW 29th St, Miami, FL 33127
- developer: Not found as dedicated field.
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 500000
- priceLabel: From USD 500,000
- delivery / completion: 2029
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Frida%20Khalo/1(1).jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Frida%20Khalo/1(1).jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/Untitled%20design%20(16).jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/2ds.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/3(1).jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/4(1).jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/5(1).jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/6(1).jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/7(1).jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Frida%20Khalo/8(1).jpg [branded]

### Description / Copy
- shortDescription ES: Frida Kahlo Wynwood Residences | 119 NW 29th St, Miami, FL 33127 | Estudios | Desde US$500K | Residencias amuebladas + oficina privada | Piscina estilo resort
- shortDescription EN: Frida Kahlo Wynwood Residences | 119 NW 29th St, Miami, FL 33127 | Studios | Starting in the $500Ks | Furnished residences + deeded office suite | Resort-style pool
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Desde US$500K
- Residencias amuebladas + oficina privada
- microClaims EN:
- Starting in the $500Ks
- Furnished residences + deeded office suite
- usableCopyReference:
- Desde US$500K
- Residencias amuebladas + oficina privada
- Starting in the $500Ks
- Furnished residences + deeded office suite
- Áreas de relax sombreadas con paisajismo
- Gimnasio con equipamiento de última generación
- Bar al aire libre y social lounge
- Speakeasy bar en lobby
- Colección curada de instalaciones de arte
- Tecnología de edificio inteligente
- Membresía de atención médica concierge en Baker Health (incluida para propietarios)
- Flexibilidad para alquileres a corto plazo
- ... 8 more in JSON
- needsRewrite:
- Piscina estilo resort
- Circuito termal / wellness center
- Resort-style pool
- Wellness center with thermal circuit
- Short-term rental flexibility
- 10% a los 12 meses del inicio de obra (aprox. top-off de la estructura).
- Are short-term rentals allowed?
- The project promotes short-term rental flexibility. Final terms depend on the condominium documents and applicable regulations.
- Short-term rental flexibility.
- discardCopy:
- ¿Se permiten alquileres a corto plazo?

### Highlights / Features
- projectHighlights EN:
- Latest smart building technology
- Fully-finished and furnished residences (studios to 3 bedrooms, including penthouses)
- Deeded office suite (select residences)
- Private balconies (select residences)
- residences EN:
- Fully-finished and furnished residences (studios to 3 bedrooms, including penthouses)
- Deeded office suite (select residences)
- Private balconies (select residences)
- Built-in closets in primary bedrooms with shelving and drawers
- High-end appliance package
- Integrated kitchens with custom countertops
- Modern bath fixtures + custom vanities
- Integrated washer and dryer
- amenities EN:
- Resort-style pool
- Shaded lounge areas with lush landscaping
- State-of-the-art fitness studio
- Wellness center with thermal circuit
- Outdoor bar and social lounge
- Speakeasy-inspired lobby bar
- Baker Health concierge medical care membership (included for owners)
- Integrated kitchens with custom countertops
- lifestyle EN:
- State-of-the-art fitness studio
- Wellness center with thermal circuit
- Curated collection of custom art installations
- Latest smart building technology
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Estudios
- 1 dormitorio
- 2 dormitorios
- 3 dormitorios
- Penthouses (selectos)
- unitMix EN:
- Studios
- 1-bedroom
- 2-bedroom
- 3-bedroom
- Select penthouses
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 10% al firmar el contrato de compraventa (no hay depósito de reserva separado).
- 10% a los 150 días desde la firma del contrato.
- 10% al inicio de la obra (groundbreaking, estimado Q3/Q4).
- 10% a los 12 meses del inicio de obra (aprox. top-off de la estructura).
- 60% al cierre de la unidad (estimado Q3 2028).
- paymentPlan EN:
- 10% at contract signing (no separate reservation deposit required).
- 10% 150 days after contract execution.
- 10% at groundbreaking (estimated Q3/Q4).
- 10% 12 months after groundbreaking (approximately at top-off).
- 60% balance at closing (estimated Q3 2028).
- percentages: 10, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 119 NW 29th St, Miami, FL 33127
- mapQuery: 119 NW 29th St, Miami, FL 33127
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- ¿Se permiten alquileres a corto plazo? -> tax_or_legal_claim
- Are short-term rentals allowed? -> rental_policy_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_price, brand_usage_review, needs_current_verification

## Gaia Residences

### Identification
- id: gaia-residences
- name: Gaia Residences
- slug: /proyectos/gaia-residences
- sourceFilePath: src/data/projects/gaia.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 401 N Federal Hwy, Hollywood, FL 33020
- neighborhood / area: Hollywood
- address: 401 N Federal Hwy, Hollywood, FL 33020
- salesGalleryAddress: 1811 North Young Circle, Hollywood, FL 33020.
- developer: Modern Italian kitchens; integrated Bosch appliances; European cabinetry; Developer: Alta Developers · Architecture: CFE Architects · Interiors: ID & Design International · Sales & Marketing: Fortune International Group.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 480000
- priceLabel: From USD 480,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Gaia%20Residences/ymdwzF9g.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Gaia%20Residences/ymdwzF9g.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/JdYl62qQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/RLZT2qMQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/nmK_B4Sw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/6kzJnggQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/yAkYTngw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/Ba1678xw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/EjjF2_cA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Gaia%20Residences/5R4NzwtQ.jpeg [usable]

### Description / Copy
- shortDescription ES: Gaia Residences | 401 N Federal Hwy, Hollywood, FL 33020 | Studios a 3 dormitorios · ver planos para m² | 18 pisos · 238 residencias | Amenidades ≈6,700 m² | Amenidades ≈6,700 m² (indoor + outdoor)
- shortDescription EN: Gaia Residences | 401 N Federal Hwy, Hollywood, FL 33020 | Studios to 3 bedrooms · see plans for m²/sq.ft | 18 stories · 238 residences | ~72,000 sq.ft of amenities | ~72,000 sq.ft indoor + outdoor amenity program
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 18 pisos · 238 residencias
- Amenidades ≈6,700 m²
- Membresía: beach space + Hollywood Beach Golf Club
- microClaims EN:
- 18 stories · 238 residences
- ~72,000 sq.ft of amenities
- Memberships: private beach space + Hollywood Beach Golf Club
- usableCopyReference:
- 18 pisos · 238 residencias
- Amenidades ≈6,700 m²
- Membresía: beach space + Hollywood Beach Golf Club
- 18 stories · 238 residences
- ~72,000 sq.ft of amenities
- Memberships: private beach space + Hollywood Beach Golf Club
- Amenidades ≈6,700 m² (indoor + outdoor)
- Rooftop: piscina climatizada con vistas + jacuzzi
- Water garden + zonas de relax (daybeds y cabanas)
- Pavilion con summer kitchen + BBQ stations
- Hammock garden + terrazas de outdoor dining
- Sky lounge con wet bar + pool spa
- ... 7 more in JSON
- needsRewrite:
- Aura Wellness Spa: steam room, sauna y plunge pools
- Aura Wellness Spa: steam room, dry sauna, plunge pools
- 10% al top-off (estructura).
- Membresías incluidas (beach space + Hollywood Beach Golf Club) y un programa de amenidades ~72,000 ft² (≈6,700 m²) orientado a wellness y vida social.
- Desarrollador: Alta Developers · Arquitectura: CFE Architects · Interiores: ID & Design International · Sales & Marketing: Fortune International Group.
- Alquiler flexible: se permiten estadías cortas, incluso diarias.
- Included memberships (private beach space + Hollywood Beach Golf Club) plus a ~72,000 sq.ft wellness + social amenity program.
- Developer: Alta Developers · Architecture: CFE Architects · Interiors: ID & Design International · Sales & Marketing: Fortune International Group.
- Estimated completion 2028 (subject to permits and construction timeline).
- Flexible rentals: short stays allowed, including daily.
- discardCopy:
- Alquiler flexible: se permiten estadías cortas, incluso diarias.
- Estimated completion 2028 (subject to permits and construction timeline).

### Highlights / Features
- projectHighlights EN:
- Not found.
- residences EN:
- Pavilion with summer kitchen + private BBQ stations
- Hammock garden + outdoor dining terraces
- Modern Italian kitchens; integrated Bosch appliances; European cabinetry
- Imported large-format porcelain tile flooring
- Seamless quartz countersplash and bath countertops
- Floor-to-ceiling windows with golf, city or ocean views
- Airy living spaces with ~9-14 ft ceiling heights
- Private terraces extend living space outdoors
- Smart thermostats · front-loading washer/dryer
- Built-out primary closets · backlit bathroom mirrors
- amenities EN:
- Rooftop: heated ocean-view pool + jacuzzi
- Water garden + relaxation zones (daybeds and cabanas)
- Pavilion with summer kitchen + private BBQ stations
- Sky lounge with wet bar + pool spa
- Health Club + outdoor fitness lawn
- Yoga / barre / pilates studio
- Aura Wellness Spa: steam room, dry sauna, plunge pools
- Co-working lounge + private meeting rooms + zoom pods
- 24/7 concierge · package room · bike/storage rooms
- Memberships: private beach space + Hollywood Beach Golf Club
- Modern Italian kitchens; integrated Bosch appliances; European cabinetry
- Airy living spaces with ~9-14 ft ceiling heights
- Private terraces extend living space outdoors
- lifestyle EN:
- Water garden + relaxation zones (daybeds and cabanas)
- Hammock garden + outdoor dining terraces
- Aura Wellness Spa: steam room, dry sauna, plunge pools
- Memberships: private beach space + Hollywood Beach Golf Club
- Seamless quartz countersplash and bath countertops
- Floor-to-ceiling windows with golf, city or ocean views
- Smart thermostats · front-loading washer/dryer
- location EN:
- Memberships: private beach space + Hollywood Beach Golf Club

### Unit Mix / Residences
- unitMix ES:
- Studios a 3 dormitorios · ver planos para m²
- unitMix EN:
- Studios to 3 bedrooms · see plans for m²/sq.ft
- bedrooms: studio, 3 bedrooms
- squareFootageRanges: 72,000 sq ft; 700 m2
- residence count: 238
- floors: 18

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 5% al hacer la reserva (reservation).
- 5% a los 45 días de la reserva.
- 10% al firmar el contrato.
- 10% al inicio de obra (groundbreaking).
- 10% al top-off (estructura).
- 60% saldo al cierre.
- paymentPlan EN:
- 5% at reservation.
- 5% 45 days after reservation.
- 10% at contract.
- 10% at groundbreaking.
- 10% at top-off.
- 60% balance due at closing.
- percentages: 5, 10, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 401 N Federal Hwy, Hollywood, FL 33020
- mapQuery: 401 N Federal Hwy, Hollywood, FL 33020
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 11
- FAQ EN count: 11
- sensitive FAQ claims:
- ¿Política de alquileres? -> tax_or_legal_claim
- Completion date? -> tax_or_legal_claim
- Rental policy? -> rental_policy_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Gaia%20Residences/JdYl62qQ.jpeg
- https://ik.imagekit.io/devrodri/Gaia%20Residences/RLZT2qMQ.jpeg
- https://ik.imagekit.io/devrodri/Gaia%20Residences/nmK_B4Sw.jpeg
- https://ik.imagekit.io/devrodri/Gaia%20Residences/6kzJnggQ.jpeg
- https://ik.imagekit.io/devrodri/Gaia%20Residences/yAkYTngw.jpeg
- https://ik.imagekit.io/devrodri/Gaia%20Residences/Ba1678xw.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, needs_current_verification

## Jean‑Georges Miami Tropic Residences

### Identification
- id: jean-georges-tropic
- name: Jean‑Georges Miami Tropic Residences
- slug: /proyectos/jean-georges-tropic
- sourceFilePath: src/data/projects/jean-georges.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Design District / Midtown
- neighborhood / area: Midtown
- address: Not found.
- developer: Not found as dedicated field.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 1100000
- priceLabel: From USD 1,100,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Jean%20Georges/1.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Jean%20Georges/1.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/2.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/3-2.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/4.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/5.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/6.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/7.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/8.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Jean%20Georges/9.jpg [branded]

### Description / Copy
- shortDescription ES: Jean‑Georges Miami Tropic Residences | Design District / Midtown | Estudios y 1-4 dorm · ~80-270 m² | Residencias de lujo con la firma culinaria de Jean‑Georges | Airbnb‑friendly | Skydeck en piso 49 con piscina y Sky Bar; vistas 360°
- shortDescription EN: Jean‑Georges Miami Tropic Residences | Design District / Midtown | Studios and 1-4 BR · ~852-2,892 sq ft | Luxury residences curated by Chef Jean‑Georges | Airbnb‑friendly | 49th‑floor skydeck with panoramic pool & Sky Bar
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Residencias de lujo con la firma culinaria de Jean‑Georges
- Airbnb‑friendly
- microClaims EN:
- Luxury residences curated by Chef Jean‑Georges
- Airbnb‑friendly
- usableCopyReference:
- Residencias de lujo con la firma culinaria de Jean‑Georges
- Skydeck en piso 49 con piscina y Sky Bar; vistas 360°
- Restaurante privado de Jean‑Georges y abc kitchens
- Spa completo, gimnasio interior/exterior y cancha de squash
- Coworking, estudio de pódcast, salones y jardines interiores
- 49th‑floor skydeck with panoramic pool & Sky Bar
- Residents‑only restaurant by Jean‑Georges; abc kitchens at grade
- Full spa, indoor/outdoor fitness and squash court
- Coworking, podcast studio, lounges and interior gardens
- Cocinas de chef con electrodomésticos Gaggenau
- Encimeras de piedra natural; griferías Gessi
- Ventanales piso‑techo, techos aprox. 3-3.5 m y balcones privados
- ... 8 more in JSON
- needsRewrite:
- Airbnb‑friendly
- Luxury residences curated by Chef Jean‑Georges
- Ubicación AAA entre Design District y Midtown
- Prime location between Design District and Midtown
- 10% al iniciar la construcción
- Estimado fin‑2027 / 2028 (construcción desde 2025).
- Short‑term rentals allowed (no fixed minimum).
- Estimated late‑2027 / early‑2028 (construction commencing 2025).
- Renta corta permitida (Airbnb‑friendly).
- Short‑term rentals allowed (Airbnb‑friendly).
- discardCopy:
- Renta corta permitida (sin mínimo fijo).
- Renta corta permitida (Airbnb‑friendly).

### Highlights / Features
- projectHighlights EN:
- Prime location between Design District and Midtown
- residences EN:
- 49th‑floor skydeck with panoramic pool & Sky Bar
- Residents‑only restaurant by Jean‑Georges; abc kitchens at grade
- Chef kitchens with Gaggenau appliances
- Floor‑to‑ceiling glass, 10–11 ft ceilings and private balconies
- amenities EN:
- 49th‑floor skydeck with panoramic pool & Sky Bar
- Residents‑only restaurant by Jean‑Georges; abc kitchens at grade
- Full spa, indoor/outdoor fitness and squash court
- Coworking, podcast studio, lounges and interior gardens
- Chef kitchens with Gaggenau appliances
- lifestyle EN:
- Not found.
- location EN:
- Prime location between Design District and Midtown

### Unit Mix / Residences
- unitMix ES:
- Estudios y 1-4 dorm · ~80-270 m²
- unitMix EN:
- Studios and 1-4 BR · ~852-2,892 sq ft
- bedrooms: studio, 4 bedrooms
- squareFootageRanges: 852-2,892 sq ft; 2,892 sq ft; 80-270 m2; 270 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 20% a la firma del contrato
- 10% al iniciar la construcción
- 10% al top‑off
- 60% al cierre
- paymentPlan EN:
- 20% at contract
- 10% at groundbreaking
- 10% at top‑off
- 60% at closing
- percentages: 10, 20, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Jean‑Georges Miami Tropic Residences Midtown Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Midtown

### FAQs
- FAQ ES count: 5
- FAQ EN count: 5
- sensitive FAQ claims:
- ¿Plan de pagos? -> payment_plan_claim
- ¿Política de rentas? -> rental_policy_claim, tax_or_legal_claim
- Deposit schedule? -> payment_plan_claim
- Rental policy? -> rental_policy_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, esteban_tone, outdated_price, brand_usage_review, needs_current_verification

## Mercedes-Benz Places Miami

### Identification
- id: mercedes-benz-places
- name: Mercedes-Benz Places Miami
- slug: /proyectos/mercedes-benz-places
- sourceFilePath: src/data/projects/mercedes-benz-places.ts
- isImportedInCatalog: true
- isHidden: true
- hiddenReason: TEMPORARY: hidden from public site pending legal review
- city: Brickell
- neighborhood / area: Brickell
- address: 1133 SW 2nd Avenue, Brickell, next to Southside Park and the Underline
- developer: Custom kitchens with Miele appliances; Architecture by SHoP + interiors Woods Bagot; Architecture by SHoP, interiors by Woods Bagot, landscaping by Field Operations.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 685500
- priceLabel: From USD 685,500
- delivery / completion: 2028
- priceStatus: do_not_publish
- deliveryStatus: do_not_publish

### Images
- heroImage: https://ik.imagekit.io/devrodri/Mercedes/5Nc7cZWg.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Mercedes/5Nc7cZWg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/vu8FiAnw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/CAyVPlnf.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/gFd_dG1i.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/Mc3V8Dxw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/B1Jk_-KQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/1KRHzEWw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/RWcVo0gA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Mercedes/o21XynkQ.jpeg [branded]

### Description / Copy
- shortDescription ES: Mercedes-Benz Places Miami | Brickell | Studios | Primer proyecto residencial de Mercedes-Benz en Norteamérica | Arquitectura por SHoP + interiores Woods Bagot | Studios a 3BR + den
- shortDescription EN: Mercedes-Benz Places Miami | Brickell | Studios | Mercedes-Benz first residential project in North America | Architecture by SHoP + interiors Woods Bagot | Studios to 3BR + den
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Primer proyecto residencial de Mercedes-Benz en Norteamérica
- Arquitectura por SHoP + interiores Woods Bagot
- Ubicado en el corazón de Brickell
- microClaims EN:
- Mercedes-Benz first residential project in North America
- Architecture by SHoP + interiors Woods Bagot
- Located in the heart of Brickell
- usableCopyReference:
- Arquitectura por SHoP + interiores Woods Bagot
- Ubicado en el corazón de Brickell
- Mercedes-Benz first residential project in North America
- Located in the heart of Brickell
- Studios a 3BR + den
- Amenidades Mercedes‑Benz ≈12,000 m²
- Restaurantes, lounge Silver Arrow, simulador de F1 y cine privado
- Parque Southside de ≈0.8 hectáreas con canchas, playground y conexión al Underline
- Studios to 3BR + den
- 130k sf of Mercedes‑Benz amenities
- Restaurants, Silver Arrow lounge, F1 simulator & screening room
- Southside Park (2 acres) with courts, playground & Underline connection
- ... 8 more in JSON
- needsRewrite:
- Primer proyecto residencial de Mercedes-Benz en Norteamérica
- Architecture by SHoP + interiors Woods Bagot
- Piscinas rooftop y sun deck, spa y wellness de última generación
- Rooftop pools & sun deck, state-of-the-art spa & wellness
- Residences fully furnished with Mercedes-Benz design
- 50% at closing (financing available for foreign buyers)
- Who are the designers?
- Architecture by SHoP, interiors by Woods Bagot, landscaping by Field Operations.
- Sin restricciones
- No rental restrictions
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- Residences fully furnished with Mercedes-Benz design
- residences EN:
- 10’ floor-to-ceiling windows and 5’ deep terraces
- Custom kitchens with Miele appliances
- Bathrooms with natural stone, rose-gold fixtures and Duravit
- amenities EN:
- Rooftop pools & sun deck, state-of-the-art spa & wellness
- Restaurants, Silver Arrow lounge, F1 simulator & screening room
- Southside Park (2 acres) with courts, playground & Underline connection
- Custom kitchens with Miele appliances
- 24h concierge, valet and Mercedes-Benz house cars
- lifestyle EN:
- Rooftop pools & sun deck, state-of-the-art spa & wellness
- Restaurants, Silver Arrow lounge, F1 simulator & screening room
- Southside Park (2 acres) with courts, playground & Underline connection
- Integrated smart home technology
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios
- 1 Dormitorio
- 1 Dormitorio + Den
- 2 Dormitorios
- 2 Dormitorios + Den
- 3 Dormitorios
- 3 Dormitorios + Den
- unitMix EN:
- Studios
- 1 Bedroom
- 1 Bedroom + Den
- 2 Bedrooms
- 2 Bedrooms + Den
- 3 Bedrooms
- 3 Bedrooms + Den
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: 000 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: do_not_publish
- paymentPlan ES:
- 20% al contrato
- 10% a los 180 días del contrato
- 10% al llegar al nivel de la residencia
- 10% al top-off
- 50% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at contract
- 10% 180 days from contract
- 10% at residence level
- 10% at top-off
- 50% at closing (financing available for foreign buyers)
- percentages: 10, 20, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 1133 SW 2nd Avenue, Brickell, next to Southside Park and the Underline
- mapQuery: 1133 SW 2nd Avenue, Brickell, next to Southside Park and the Underline
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 8
- FAQ EN count: 8
- sensitive FAQ claims:
- ¿Cuál es el plan de pagos? -> payment_plan_claim
- What is the payment plan? -> payment_plan_claim

### Risk Flags
- legal_review (high): TEMPORARY: hidden from public site pending legal review
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: discard
- reason: Hidden in Esteban catalog pending legal review; do not import to Jacquie without explicit approval.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: true

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- entire project until legal review is cleared
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: legal_review, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, developer_copy, esteban_tone, brand_usage_review, needs_current_verification

## Midtown Park

### Identification
- id: midtown-park
- name: Midtown Park
- slug: /proyectos/midtown-park
- sourceFilePath: src/data/projects/midtown-park.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 3055 N Miami Ave, Miami, FL 33127
- neighborhood / area: Midtown
- address: 3055 N Miami Ave, Miami, FL 33127
- developer: Architecture by Arquitectonica; Design by Meyer Davis Studio; Architecture & design?; Arquitectonica · Meyer Davis Studio.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 700000
- priceLabel: From USD 700,000
- delivery / completion: 2028
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Midtown%20Park/ca7LMYAw.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Midtown%20Park/ca7LMYAw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/vdFMgVgA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/75OtJzHQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/NfINBDkA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/wWNfYD-A.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/e4T70bAA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/WQ2gvs1w.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/DO-mYfRg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Midtown%20Park/DKO5KMKQ.jpeg [usable]

### Description / Copy
- shortDescription ES: Midtown Park | 3055 N Miami Ave, Miami, FL 33127 | JR Suite · 1 baño · 56 m² | Dirección: 3055 N Miami Ave | Finalización estimada 2028 | Arquitectura por Arquitectonica
- shortDescription EN: Midtown Park | 3055 N Miami Ave, Miami, FL 33127 | JR Suite · 1 bath · 588 sq ft | Address: 3055 N Miami Ave | Estimated completion 2028 | Architecture by Arquitectonica
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Dirección: 3055 N Miami Ave
- Finalización estimada 2028
- microClaims EN:
- Address: 3055 N Miami Ave
- Estimated completion 2028
- usableCopyReference:
- Dirección: 3055 N Miami Ave
- Finalización estimada 2028
- Address: 3055 N Miami Ave
- Estimated completion 2028
- Arquitectura por Arquitectonica
- Diseño por Meyer Davis Studio
- Mix de 1 a 3 dormitorios con dens y terrazas
- Mix of 1-3 bedrooms with dens and terraces
- Terrazas amplias en todas las residencias
- Ventanales piso a techo
- Cocinas y baños de diseño contemporáneo
- Generous terraces in all residences
- ... 8 more in JSON
- needsRewrite:
- Architecture by Arquitectonica
- Design by Meyer Davis Studio
- Architecture & design?
- 2028 per construction timeline.
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- Architecture by Arquitectonica
- Design by Meyer Davis Studio
- Generous terraces in all residences
- residences EN:
- Mix of 1-3 bedrooms with dens and terraces
- Generous terraces in all residences
- Floor-to-ceiling windows
- Contemporary kitchens and baths
- amenities EN:
- Contemporary kitchens and baths
- lifestyle EN:
- Not found.
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- JR Suite · 1 baño · 56 m²
- 1 Dormitorio · 1 baño · 62 m²
- 1 Dormitorio + Den · 2 baños · 73-98 m²
- 2 Dormitorios + Den · 2-3 baños · 109-119 m²
- 2 Dormitorios · 2.5 baños · 115 m²
- 3 Dormitorios · 3.5 baños · 150-161 m²
- unitMix EN:
- JR Suite · 1 bath · 588 sq ft
- 1 Bed · 1 bath · 670 sq ft
- 1 Bed + Den · 2 baths · 782-1,060 sq ft
- 2 Bed + Den · 2-3 baths · 1,168-1,276 sq ft
- 2 Bed · 2.5 baths · 1,239 sq ft
- 3 Bed · 3.5 baths · 1,616-1,730 sq ft
- bedrooms: junior suite, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: 782-1,060 sq ft; 1,168-1,276 sq ft; 1,616-1,730 sq ft; 588 sq ft; 670 sq ft; 1,060 sq ft; 1,276 sq ft; 1,239 sq ft; 1,730 sq ft; 73-98 m2; 109-119 m2; 150-161 m2; 56 m2; 62 m2; 98 m2; 119 m2; 115 m2; 161 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- Reserva: $50k (1BR) · $75k (2BR) · $100k (3BR)
- 20% contrato (est. nov 2025)
- 10% inicio de obra (est. jun 2026)
- 10% a los 6 meses de inicio (est. dic 2026)
- 10% top-off (est. dic 2027)
- 50% cierre (est. Q1 2028)
- paymentPlan EN:
- Reservation: $50k (1BR) · $75k (2BR) · $100k (3BR)
- Balance to 20% at contract (est. Nov 2025)
- 10% at groundbreaking (est. Jun 2026)
- 10% six months after groundbreaking (est. Dec 2026)
- 10% at top-off (est. Dec 2027)
- 50% at closing (est. Q1 2028)
- percentages: 10, 20, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 3055 N Miami Ave, Miami, FL 33127
- mapQuery: 3055 N Miami Ave, Miami, FL 33127
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 3
- FAQ EN count: 3
- sensitive FAQ claims:
- No sensitive FAQ claims detected.

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: visible_candidate
- reason: Core project data exists. Use only as a neutral candidate after verification and rewrite.
- canShowCard: true
- canCreateDetailPage: true
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Midtown%20Park/vdFMgVgA.jpeg
- https://ik.imagekit.io/devrodri/Midtown%20Park/75OtJzHQ.jpeg
- https://ik.imagekit.io/devrodri/Midtown%20Park/NfINBDkA.jpeg
- https://ik.imagekit.io/devrodri/Midtown%20Park/wWNfYD-A.jpeg
- https://ik.imagekit.io/devrodri/Midtown%20Park/e4T70bAA.jpeg
- https://ik.imagekit.io/devrodri/Midtown%20Park/WQ2gvs1w.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, developer_copy, needs_current_verification

## Millenia Park

### Identification
- id: millenia-park-orlando
- name: Millenia Park
- slug: /proyectos/millenia-park
- sourceFilePath: src/data/projects/millenia-park.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Orlando, Florida
- neighborhood / area: Orlando
- address: Not found.
- developer: Not found as dedicated field.
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 289900
- priceLabel: From USD 289,900
- delivery / completion: 2024-2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Millenia%20Park/chvfJiMA.jpeg
- gallery count: 4
- ImageKit URL count: 5
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Millenia%20Park/chvfJiMA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millenia%20Park/fzQRPVlg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millenia%20Park/jy_6GXzg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millenia%20Park/Uxvpfdmg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millenia%20Park/fKoXigmg.jpeg [usable]

### Description / Copy
- shortDescription ES: Millenia Park | Orlando, Florida | 1 dormitorio + estudio / 1 baño · ≈70 m² - desde ~US$289,900 | VISA de Inversionista (EB‑5) | 960 residencias · ≈2.300 m² de retail | VISA EB‑5: ruta a la Green Card (vía Centro Regional)
- shortDescription EN: Millenia Park | Orlando, Florida | 1 BR + den / 1 bath · 750 sq ft - from ~US$289,900 | EB‑5 investor visa eligible | 960 homes · 25,000 sq ft retail | EB‑5 Investor Visa: path to Green Card (via Regional Center)
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- VISA de Inversionista (EB‑5)
- 960 residencias · ≈2.300 m² de retail
- A 2 millas de Epic Universe (Universal)
- microClaims EN:
- EB‑5 investor visa eligible
- 960 homes · 25,000 sq ft retail
- 2 miles to Epic Universe (Universal)
- usableCopyReference:
- VISA de Inversionista (EB‑5)
- 960 residencias · ≈2.300 m² de retail
- A 2 millas de Epic Universe (Universal)
- EB‑5 investor visa eligible
- 960 homes · 25,000 sq ft retail
- 2 miles to Epic Universe (Universal)
- Centro de fitness con vista a la piscina
- Cancha de tenis y parque sobre el lago con pista de running
- Parque infantil, dog park y comunidad pet‑friendly
- Sistema de seguridad y CCTV de última generación
- Fitness center overlooking the pool
- Tennis court and lakeside park with running trail
- ... 8 more in JSON
- needsRewrite:
- Piscina estilo resort y elegantes club houses
- Resort‑style pool and elegant club houses
- Mínimo 31 días, hasta 4 alquileres al año (flexible para mensualidades).
- Minimum 31 days; up to 4 leases per year (flexible for monthly rentals).
- discardCopy:
- VISA EB‑5: ruta a la Green Card (vía Centro Regional)
- EB‑5 Investor Visa: path to Green Card (via Regional Center)
- Available - brokers indicate mortgages up to ~50% LTV (subject to approval).

### Highlights / Features
- projectHighlights EN:
- Large walk‑in closets in most units
- residences EN:
- European‑style kitchens with stainless appliances and granite
- Contemporary baths with quartz vanities
- Large walk‑in closets in most units
- Open layouts with ~9 ft ceilings
- In‑unit washer/dryer
- amenities EN:
- Resort‑style pool and elegant club houses
- Fitness center overlooking the pool
- Kids playground, dog park and pet‑friendly community
- European‑style kitchens with stainless appliances and granite
- lifestyle EN:
- Tennis court and lakeside park with running trail
- Kids playground, dog park and pet‑friendly community
- Contemporary baths with quartz vanities
- Large walk‑in closets in most units
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 1 dormitorio + estudio / 1 baño · ≈70 m² - desde ~US$289,900
- 2 dormitorios + estudio / 2 baños · ≈95 m² - desde ~US$364,900
- 3 dormitorios / 2 baños · ≈101–113 m² - desde ~US$419,900
- unitMix EN:
- 1 BR + den / 1 bath · 750 sq ft - from ~US$289,900
- 2 BR + den / 2 baths · 1,023 sq ft - from ~US$364,900
- 3 BR / 2 baths · 1,087–1,215 sq ft - from ~US$419,900
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: 1,087-1,215 sq ft; 750 sq ft; 1,023 sq ft; 1,215 sq ft; 101-113 m2; 70 m2; 95 m2; 113 m2
- residence count: 960
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- Fase 1: 30% contrato · 70% cierre
- Fases 2/3: 30% contrato · 20% inicio de obra · 20% top‑off · 30% cierre
- paymentPlan EN:
- Phase 1: 30% at contract · 70% at closing
- Phases 2/3: 30% at contract · 20% at groundbreaking · 20% at top‑off · 30% at closing
- percentages: 30
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Millenia Park Orlando Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Orlando

### FAQs
- FAQ ES count: 6
- FAQ EN count: 6
- sensitive FAQ claims:
- Foreign financing? -> tax_or_legal_claim

### Risk Flags
- eb5_claim (high): EB-5 / Green Card language found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_delivery (medium): Delivery value is missing or time-sensitive: 2024-2026.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- EB-5 / Opportunity Zone / immigration eligibility copy
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Millenia%20Park/fzQRPVlg.jpeg
- https://ik.imagekit.io/devrodri/Millenia%20Park/jy_6GXzg.jpeg
- https://ik.imagekit.io/devrodri/Millenia%20Park/Uxvpfdmg.jpeg
- https://ik.imagekit.io/devrodri/Millenia%20Park/fKoXigmg.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: eb5_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, esteban_tone, outdated_delivery, needs_current_verification

## Millux Place Brickell

### Identification
- id: millux-place-brickell
- name: Millux Place Brickell
- slug: /proyectos/millux-place-brickell
- sourceFilePath: src/data/projects/millux.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Brickell, Miami
- neighborhood / area: Brickell
- address: Not found.
- developer: Prime Brickell location, design by Kobi Karp
- buildingType: condo-hotel / hospitality-managed residences candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 468000
- priceLabel: From USD 468,000
- delivery / completion: Q4 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Millux/i7490rzQ.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Millux/i7490rzQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/giGN-7TQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/zwY1QyXg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/hc2KyU_w.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/TjuvhOmA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/QAObnYYw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/K8fWIOVw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/yjFef2Rw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Millux/PXfWcs5A.jpeg [usable]

### Description / Copy
- shortDescription ES: Millux Place Brickell | Brickell, Miami | Studios/1-3 dorm · 37-89 m² | Residencias terminadas y amuebladas (Restoration Hardware) | STR: desde 1 noche | Condo‑hotel in‑house · renta 1 noche-6 meses
- shortDescription EN: Millux Place Brickell | Brickell, Miami | Studios/1-3 BR · 397-958 sq ft | Fully finished & furnished (Restoration Hardware) | Short‑term rental friendly (nightly lodging) | In‑house lodging (condo‑hotel); rent nightly up to 6 months
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Residencias terminadas y amuebladas (Restoration Hardware)
- STR: desde 1 noche
- Entrega Q4 2027
- microClaims EN:
- Fully finished & furnished (Restoration Hardware)
- Short‑term rental friendly (nightly lodging)
- Completion Q4 2027
- usableCopyReference:
- Residencias terminadas y amuebladas (Restoration Hardware)
- Entrega Q4 2027
- Fully finished & furnished (Restoration Hardware)
- Completion Q4 2027
- Condo‑hotel in‑house · renta 1 noche-6 meses
- 20 residencias · alquiler a largo plazo
- Mobiliario de lujo incluido (Restoration Hardware)
- ~20 residential units under long‑term guidelines
- Entrega llave en mano con mobiliario RH
- Puertas/ventanales de impacto y balcones
- Cocinas equipadas; acabados premium
- Turn‑key delivery with RH furniture
- ... 8 more in JSON
- needsRewrite:
- STR: desde 1 noche
- Short‑term rental friendly (nightly lodging)
- Ubicación prime en Brickell, diseño Kobi Karp
- In‑house lodging (condo‑hotel); rent nightly up to 6 months
- Prime Brickell location, design by Kobi Karp
- Luxury furniture included (Restoration Hardware)
- ¿Política STR?
- STR policy?
- Nightly-6 months. (<6 months).
- Lodging: nightly-6 months. (<6 months)
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- ~20 residential units under long‑term guidelines
- Prime Brickell location, design by Kobi Karp
- residences EN:
- Impact glazing and balconies
- Equipped kitchens; premium finishes
- amenities EN:
- Equipped kitchens; premium finishes
- lifestyle EN:
- Not found.
- location EN:
- Prime Brickell location, design by Kobi Karp

### Unit Mix / Residences
- unitMix ES:
- Studios/1-3 dorm · 37-89 m²
- unitMix EN:
- Studios/1-3 BR · 397-958 sq ft
- bedrooms: studio, 3 bedrooms
- squareFootageRanges: 397-958 sq ft; 958 sq ft; 37-89 m2; 89 m2
- residence count: 20
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- Reserva US$10.000 (se imputa dentro del 20% del contrato)
- 20% al contrato
- 10% al groundbreaking
- 10% al 4.º piso
- 10% al top‑off
- 50% al cierre
- paymentPlan EN:
- Reservation US$10,000 (credited within the 20% at contract)
- 20% at contract
- 10% at groundbreaking
- 10% at 4th floor
- 10% at top‑off
- 50% at closing
- percentages: 10, 20, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Millux Place Brickell Brickell Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Brickell

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- ¿Política STR? -> rental_policy_claim
- ¿Financiación a extranjeros? -> payment_plan_claim
- STR policy? -> rental_policy_claim
- Foreign financing? -> payment_plan_claim

### Risk Flags
- str_claim (high): STR wording found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: visible_candidate
- reason: Core project data exists. Use only as a neutral candidate after verification and rewrite.
- canShowCard: true
- canCreateDetailPage: true
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Millux/giGN-7TQ.jpeg
- https://ik.imagekit.io/devrodri/Millux/zwY1QyXg.jpeg
- https://ik.imagekit.io/devrodri/Millux/hc2KyU_w.jpeg
- https://ik.imagekit.io/devrodri/Millux/TjuvhOmA.jpeg
- https://ik.imagekit.io/devrodri/Millux/QAObnYYw.jpeg
- https://ik.imagekit.io/devrodri/Millux/K8fWIOVw.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: str_claim, short_term_rental_claim, rental_policy_claim, payment_plan_claim, developer_copy, esteban_tone, needs_current_verification

## Nexo Residences

### Identification
- id: nexo
- name: Nexo Residences
- slug: /proyectos/nexo
- sourceFilePath: src/data/projects/nexo.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: North Miami Beach
- neighborhood / area: Miami Beach
- address: 13899 Biscayne Blvd, North Miami Beach
- developer: 13899 Biscayne Blvd, North Miami Beach; near Oleta River Park, Bal Harbour Shops and Aventura Mall.
- buildingType: single-family homes / master-planned community candidate; villa/townhome component candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 626000
- priceLabel: From USD 626,000
- delivery / completion: 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/1-2-2.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/1-2-2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-3.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-4.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-5.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-6.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-7.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-8.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/Nexo/1-9.jpg [usable]

### Description / Copy
- shortDescription ES: Nexo Residences | North Miami Beach | Studio | VISA de Inversionista (EB‑5) | Alquiler flexible (sin restricciones) | VISA EB‑5: ruta a la Green Card (vía Centro Regional)
- shortDescription EN: Nexo Residences | North Miami Beach | Studio | EB‑5 investor visa eligible | Flexible rental (no restrictions) | EB‑5 Investor Visa: path to Green Card (via Regional Center)
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- VISA de Inversionista (EB‑5)
- Alquiler flexible (sin restricciones)
- Residencias amuebladas
- Sobre Biscayne Blvd
- microClaims EN:
- EB‑5 investor visa eligible
- Flexible rental (no restrictions)
- Furnished residences
- On Biscayne Blvd
- usableCopyReference:
- VISA de Inversionista (EB‑5)
- Residencias amuebladas
- Sobre Biscayne Blvd
- EB‑5 investor visa eligible
- Furnished residences
- On Biscayne Blvd
- 254 residencias en 17 pisos
- Tech Center de dos niveles con coworking, salas y café
- Rooftop observatory con vistas 360° y BBQ
- Residencias terminadas y amuebladas; ventanas piso‑techo y balcones
- 254 residences in 17 stories
- Two‑story Tech Center with coworking, meeting rooms and café
- ... 8 more in JSON
- needsRewrite:
- Alquiler flexible (sin restricciones)
- Flexible rental (no restrictions)
- Sin restricciones: apto Airbnb y más
- Piscina estilo resort, cine al aire libre, fire pits y summer kitchens
- No restrictions: Airbnb & more
- Resort‑style pool, outdoor movie lawn, fire pits and summer kitchens
- Piscina resort, bar exterior, hamacas, fogatas y cine al aire libre
- Resort pool, outdoor bar, hammock lounge, fire pits and movie lawn
- 10% al inicio de la construcción
- 10% 90 días después del inicio de la construcción
- 50% at Closing (financing available for foreign buyers)
- Sí. Elegible vía Centro Regional; inversión mínima US$800.000 y tarifa administrativa ~US$70.000; camino a la Green Card sujeto a aprobación de USCIS.
- ... 7 more in JSON
- discardCopy:
- VISA EB‑5: ruta a la Green Card (vía Centro Regional)
- EB‑5 Investor Visa: path to Green Card (via Regional Center)
- Sí. Elegible vía Centro Regional; inversión mínima US$800.000 y tarifa administrativa ~US$70.000; camino a la Green Card sujeto a aprobación de USCIS.
- ¿Se permiten alquileres de corto plazo?
- Sí. Nexo no tiene restricciones y permite listar en Airbnb, Vrbo, Booking y otras plataformas.
- Yes. Eligible via Regional Center; minimum investment US$800,000 and ~US$70,000 admin fee; path to a Green Card subject to USCIS approval.

### Highlights / Features
- projectHighlights EN:
- 254 residences in 17 stories
- Finished and furnished residences; floor‑to‑ceiling windows and balconies
- Fully finished and furnished residences
- Pet‑friendly building
- residences EN:
- Resort‑style pool, outdoor movie lawn, fire pits and summer kitchens
- Finished and furnished residences; floor‑to‑ceiling windows and balconies
- European kitchens, quartz countertops and premium appliances
- Bathrooms with textured slabs and matte‑black fixtures
- Washer and dryer in every unit
- Floor‑to‑ceiling windows and generous glass‑railing balconies
- Rooftop with summer kitchen and chef's table
- amenities EN:
- Two‑story Tech Center with coworking, meeting rooms and café
- Resort‑style pool, outdoor movie lawn, fire pits and summer kitchens
- Rooftop observatory with 360° views and BBQ
- European kitchens, quartz countertops and premium appliances
- State‑of‑the‑art coworking and conference rooms
- Resort pool, outdoor bar, hammock lounge, fire pits and movie lawn
- Rooftop with summer kitchen and chef's table
- Smart lockers, EV charging, bike storage and kids playground
- Pet‑friendly building
- lifestyle EN:
- Rooftop observatory with 360° views and BBQ
- European kitchens, quartz countertops and premium appliances
- State‑of‑the‑art coworking and conference rooms
- Smart lockers, EV charging, bike storage and kids playground
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studio
- 1 Dormitorio
- 1 Dormitorio + Den
- 2 Dormitorios
- 2 Dormitorios + Den
- 3 Dormitorios
- 3 Dormitorios + Den
- Townhomes 3‑4 Dormitorios
- unitMix EN:
- Studio
- 1 Bedroom
- 1 Bedroom + Den
- 2 Bedrooms
- 2 Bedrooms + Den
- 3 Bedrooms
- 3 Bedrooms + Den
- 3‑4BR Townhomes
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms, 4 bedrooms
- squareFootageRanges: Not detected.
- residence count: 254
- floors: 17

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 20% al contrato
- 10% al inicio de la construcción
- 10% 90 días después del inicio de la construcción
- 10% al llegar al último piso
- 50% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 20% at contract
- 10% at groundbreaking
- 10% 90 days after groundbreaking
- 10% at top‑off
- 50% at Closing (financing available for foreign buyers)
- percentages: 10, 20, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 13899 Biscayne Blvd, North Miami Beach
- mapQuery: 13899 Biscayne Blvd, North Miami Beach
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 5
- FAQ EN count: 5
- sensitive FAQ claims:
- ¿Visa EB‑5? -> eb5_claim
- ¿Se permiten alquileres de corto plazo? -> rental_policy_claim, tax_or_legal_claim
- EB‑5 Visa? -> eb5_claim, tax_or_legal_claim
- Are short‑term rentals allowed? -> rental_policy_claim

### Risk Flags
- eb5_claim (high): EB-5 / Green Card language found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- EB-5 / Opportunity Zone / immigration eligibility copy
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Nexo/1-2.jpg
- https://ik.imagekit.io/devrodri/Nexo/1-3.jpg
- https://ik.imagekit.io/devrodri/Nexo/1-4.jpg
- https://ik.imagekit.io/devrodri/Nexo/1-5.jpg
- https://ik.imagekit.io/devrodri/Nexo/1-6.jpg
- https://ik.imagekit.io/devrodri/Nexo/1-7.jpg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: eb5_claim, short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, needs_current_verification

## Nickelodeon™ Hotels & Resorts Orlando (Condo-Residences)

### Identification
- id: nickelodeon-orlando
- name: Nickelodeon™ Hotels & Resorts Orlando (Condo-Residences)
- slug: /proyectos/nickelodeon-orlando
- sourceFilePath: src/data/projects/nickelodeon.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 8298 W. Irlo Bronson Memorial Hwy, Kissimmee, FL 34747
- neighborhood / area: Kissimmee
- address: 8298 W. Irlo Bronson Memorial Hwy, Kissimmee, FL 34747
- developer: On‑site hotel operation by Karisma/Lion Star; they manage bookings and housekeeping. Personal use when not rented.; Aqua Nick, Lazy River, Club Nick, Snick Lounge, Character Dining, Nick Shop.
- buildingType: condo-hotel / hospitality-managed residences candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 415300
- priceLabel: From USD 415,300
- delivery / completion: Q2 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Nickelodeon/1-2-2.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Nickelodeon/1-2-2.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/1.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/2.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/3.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/4.png [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/5.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/6.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/7.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nickelodeon/8.png [branded]

### Description / Copy
- shortDescription ES: Nickelodeon™ Hotels & Resorts Orlando (Condo-Residences) | 8298 W. Irlo Bronson Memorial Hwy, Kissimmee, FL 34747 | Studio · 1 baño · ≈46 m² + ≈8 m² balcón | A ~10 min de Disney® | Entrega estimada Q2 2026 | 423 suites hoteleras con temáticas Nickelodeon
- shortDescription EN: Nickelodeon™ Hotels & Resorts Orlando (Condo-Residences) | 8298 W. Irlo Bronson Memorial Hwy, Kissimmee, FL 34747 | Studio · 1 bath · ~500 sq.ft + 90 sq.ft balcony | ~10 min to Disney® | Estimated Q2 2026 completion | 423 hotel suites with 3 Nickelodeon Signature themes
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- A ~10 min de Disney®
- Entrega estimada Q2 2026
- Residencias amuebladas listas para rentar
- microClaims EN:
- ~10 min to Disney®
- Estimated Q2 2026 completion
- Turn‑key furnished residences
- usableCopyReference:
- A ~10 min de Disney®
- Entrega estimada Q2 2026
- Residencias amuebladas listas para rentar
- ~10 min to Disney®
- Estimated Q2 2026 completion
- Turn‑key furnished residences
- 423 suites hoteleras con temáticas Nickelodeon
- 4 restaurantes · Le Spatula · Mikey's · Aqua Bite · Express
- 423 hotel suites with 3 Nickelodeon Signature themes
- 4 restaurants · Le Spatula · Mikey's · Aqua Bite · Express
- Residencias entregadas amuebladas (programa de renta disponible)
- Cocina equipada / kitchenette, lavadora-secadora (según tipología)
- ... 8 more in JSON
- needsRewrite:
- Acceso completo al resort: Aqua Nick, gym 24h, club infantil, cabanas VIP
- Full resort access: Aqua Nick, 24h gym, kids club, VIP cabanas
- Estimated possession Q2 2026, subject to construction and approvals.
- discardCopy:
- No está permitida, solo uso vacacional/condo-hotel.
- Estimated possession Q2 2026, subject to construction and approvals.
- Condo-hotel con uso vacacional; No se permite ocupación permanente.

### Highlights / Features
- projectHighlights EN:
- Delivered furnished residences (rental program available)
- residences EN:
- 423 hotel suites with 3 Nickelodeon Signature themes
- Equipped kitchen/kitchenette, washer-dryer (per type)
- amenities EN:
- 4 restaurants · Le Spatula · Mikey's · Aqua Bite · Express
- Equipped kitchen/kitchenette, washer-dryer (per type)
- Full resort access: Aqua Nick, 24h gym, kids club, VIP cabanas
- lifestyle EN:
- 423 hotel suites with 3 Nickelodeon Signature themes
- 4 restaurants · Le Spatula · Mikey's · Aqua Bite · Express
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studio · 1 baño · ≈46 m² + ≈8 m² balcón
- 1 Hab + Kids Den · 2 baños · ≈93 m² + ≈17 m² balcón
- 2 Hab Lockoff · 3 baños · ≈149 m² + ≈25 m² balcón
- unitMix EN:
- Studio · 1 bath · ~500 sq.ft + 90 sq.ft balcony
- 1 Bed + Kids Den · 2 baths · ~1,000 sq.ft + 180 sq.ft balcony
- 2 Bed Lockoff · 3 baths · ~1,600 sq.ft + 270 sq.ft balcony
- bedrooms: studio, 1 bedroom, 2 bedrooms
- squareFootageRanges: 500 sq ft; 90 sq ft; 1,000 sq ft; 180 sq ft; 1,600 sq ft; 270 sq ft; 46 m2; 8 m2; 93 m2; 17 m2; 149 m2; 25 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- Financiado: 10% contrato · +10% a 45 días · +10% a 90 días · 70% cierre
- Contado: 20% contrato · +10% a 90 días · +10% a 180 días · 60% cierre
- paymentPlan EN:
- Financed: 10% at contract · +10% at 45 days · +10% at 90 days · 70% at closing
- Cash: 20% at contract · +10% at 90 days · +10% at 180 days · 60% at closing
- percentages: 10, 20
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 8298 W. Irlo Bronson Memorial Hwy, Kissimmee, FL 34747
- mapQuery: 8298 W. Irlo Bronson Memorial Hwy, Kissimmee, FL 34747
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 7
- FAQ EN count: 7
- sensitive FAQ claims:
- ¿Ocupación permanente? -> rental_policy_claim, tax_or_legal_claim
- ¿Programa de rentas? -> payment_plan_claim
- Permanent occupancy? -> rental_policy_claim
- Rental program? -> rental_policy_claim
- Estimated completion? -> tax_or_legal_claim

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_delivery (medium): Delivery value is missing or time-sensitive: Q2 2026.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_delivery, brand_usage_review, needs_current_verification

## NoMad Residences Wynwood

### Identification
- id: nomad-wynwood
- name: NoMad Residences Wynwood
- slug: /proyectos/nomad
- sourceFilePath: src/data/projects/nomad.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Wynwood, Miami
- neighborhood / area: Wynwood
- address: Not found.
- developer: Streamlined kitchens with Bosch appliances; Q4 2025 (structure topped off Oct‑2024; interiors underway).
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 680000
- priceLabel: From USD 680,000
- delivery / completion: 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Nomad/1.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Nomad/1.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/2.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/3.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/4.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/5.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/6.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/7.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/8.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Nomad/9.jpeg [branded]

### Description / Copy
- shortDescription ES: NoMad Residences Wynwood | Wynwood, Miami | Studios y 1-2 dormitorios · ~43-86 m² | Residencias amuebladas y curadas por NoMad & DesignAgency | Airbnb‑friendly (sin restricciones de alquiler) | Rooftop con piscina estilo resort, cabañas y NoMad Bar
- shortDescription EN: NoMad Residences Wynwood | Wynwood, Miami | Studios and 1-2 BR · ~464-931 sq ft | Residences furnished & curated by NoMad & DesignAgency | Airbnb‑friendly (no rental restrictions) | Rooftop resort‑style pool, cabanas and the iconic NoMad Bar
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Residencias amuebladas y curadas por NoMad & DesignAgency
- Airbnb‑friendly (sin restricciones de alquiler)
- microClaims EN:
- Residences furnished & curated by NoMad & DesignAgency
- Airbnb‑friendly (no rental restrictions)
- usableCopyReference:
- Casa Tua Cucina en planta baja
- Conserjería 24/7, valet y garaje en el edificio
- Arte curado de nivel museo y paisajismo impecable
- Casa Tua Cucina at ground level
- 24/7 concierge, valet and in‑building garage
- Museum‑quality curated art and inspired landscaping
- Puertas corredizas de piso a techo y balcones privados
- Cocinas modernas con electrodomésticos Bosch
- Mobiliario y carpintería italiana; encimeras de piedra
- Duchas tipo spa; lavadora/secadora en unidad
- Floor‑to‑ceiling sliders and private balconies
- Italian cabinetry & woodwork; stone countertops
- ... 8 more in JSON
- needsRewrite:
- Residencias amuebladas y curadas por NoMad & DesignAgency
- Airbnb‑friendly (sin restricciones de alquiler)
- Residences furnished & curated by NoMad & DesignAgency
- Airbnb‑friendly (no rental restrictions)
- Rooftop con piscina estilo resort, cabañas y NoMad Bar
- Biblioteca, coworking y fitness & wellness center
- Rooftop resort‑style pool, cabanas and the iconic NoMad Bar
- Extensive library, co‑working and fitness & wellness center
- Streamlined kitchens with Bosch appliances
- Q4 2025 (estructura ‘topped off’ en oct‑2024; obra en acabados).
- Sin restricciones; alquiler diario (Airbnb) permitido. Requiere CU de Miami, licencia DBPR e impuestos turísticos.
- Sí, residencias completamente amuebladas y curadas por NoMad & DesignAgency (turn‑key).
- ... 5 more in JSON
- discardCopy:
- Sin restricciones; alquiler diario (Airbnb) permitido. Requiere CU de Miami, licencia DBPR e impuestos turísticos.
- No restrictions; daily Airbnb‑type rentals allowed. CU (City of Miami), DBPR license and tourist taxes required.
- Sin restricciones de alquiler; permite renta diaria (Airbnb).

### Highlights / Features
- projectHighlights EN:
- 24/7 concierge, valet and in‑building garage
- residences EN:
- Floor‑to‑ceiling sliders and private balconies
- Streamlined kitchens with Bosch appliances
- Italian cabinetry & woodwork; stone countertops
- Spa‑style showers; in‑residence washer/dryer
- amenities EN:
- Rooftop resort‑style pool, cabanas and the iconic NoMad Bar
- Extensive library, co‑working and fitness & wellness center
- 24/7 concierge, valet and in‑building garage
- Streamlined kitchens with Bosch appliances
- Spa‑style showers; in‑residence washer/dryer
- lifestyle EN:
- Extensive library, co‑working and fitness & wellness center
- Museum‑quality curated art and inspired landscaping
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios y 1-2 dormitorios · ~43-86 m²
- unitMix EN:
- Studios and 1-2 BR · ~464-931 sq ft
- bedrooms: studio, 1 bedroom, 2 bedrooms
- squareFootageRanges: 464-931 sq ft; 931 sq ft; 43-86 m2; 86 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 20% al contrato
- 10% a los 60 días
- 70% al cierre
- paymentPlan EN:
- 20% at contract
- 10% 60 days later
- 70% at closing
- percentages: 10, 20, 70
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: NoMad Residences Wynwood Wynwood Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Wynwood

### FAQs
- FAQ ES count: 5
- FAQ EN count: 5
- sensitive FAQ claims:
- ¿Política de rentas? -> rental_policy_claim, tax_or_legal_claim
- ¿Plan de depósitos? -> payment_plan_claim
- Rental policy? -> rental_policy_claim, tax_or_legal_claim
- Deposit schedule? -> payment_plan_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, brand_usage_review, needs_current_verification

## Oasis Hallandale

### Identification
- id: oasis-hallandale
- name: Oasis Hallandale
- slug: /proyectos/oasis-hallandale
- sourceFilePath: src/data/projects/oasis.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Hallandale Beach
- neighborhood / area: Hallandale Beach
- address: Not found.
- developer: Not found as dedicated field.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 700000
- priceLabel: From USD 700,000
- delivery / completion: 2025-2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Oasis/UpDctSXg.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Oasis/UpDctSXg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/9Ew6UaXQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/2YIKVQpA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/TNvGov_Q.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/D2WVuUzw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/exUc6KXw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/aKzfLilw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/fGgzBYxQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Oasis/BHMTHL7g.jpeg [usable]

### Description / Copy
- shortDescription ES: Oasis Hallandale | Hallandale Beach | 1-3 dormitorios | Desarrollo mixto de ≈4 hectáreas | 2 torres residenciales de 25 pisos | Valet y lobby 24 h; salas de negocios y conferencias
- shortDescription EN: Oasis Hallandale | Hallandale Beach | 1-3 bedrooms | 10‑acre mixed‑use development | Two 25‑story residential towers | Valet and 24/7 lobby; business & conference rooms
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Desarrollo mixto de ≈4 hectáreas
- 2 torres residenciales de 25 pisos
- Retail, oficinas y restaurantes (≈8.800 m²)
- microClaims EN:
- 10‑acre mixed‑use development
- Two 25‑story residential towers
- Retail, offices and restaurants (~95,000 sq ft)
- usableCopyReference:
- Desarrollo mixto de ≈4 hectáreas
- 2 torres residenciales de 25 pisos
- Retail, oficinas y restaurantes (≈8.800 m²)
- 10‑acre mixed‑use development
- Two 25‑story residential towers
- Retail, offices and restaurants (~95,000 sq ft)
- Valet y lobby 24 h; salas de negocios y conferencias
- 2 piscinas con cabañas, hot‑tub + cold plunge y cines
- Simulador de golf, lounge bar con mesas de billar, salón de banquetes
- Parque para mascotas y paw‑wash; cargadores para autos eléctricos; storage
- Valet and 24/7 lobby; business & conference rooms
- 2 pools with cabanas, hot‑tub + cold plunge, indoor & outdoor cinema
- ... 8 more in JSON
- needsRewrite:
- Fitness & wellness center, yoga lawn, mini‑cancha de fútbol indoor
- Fitness & wellness center, yoga lawn, indoor mini soccer field
- 60% at closing (financing available for foreign buyers)
- 1 alquiler por año; contrato mínimo 6 meses. No se permite renta corta (Airbnb).
- 1 lease per year; 6‑month minimum. No short‑term rentals (Airbnb).
- Deposit structure?
- discardCopy:
- 1 alquiler por año; contrato mínimo 6 meses. No se permite renta corta (Airbnb).

### Highlights / Features
- projectHighlights EN:
- Walk‑in closets; powder room in select residences
- residences EN:
- Italian cabinetry with seamless monolithic countertop & island
- Stainless‑steel appliances
- Imported Italian porcelain in kitchens and bathrooms
- Double vanity & frameless glass showers in primary baths
- Walk‑in closets; powder room in select residences
- amenities EN:
- Valet and 24/7 lobby; business & conference rooms
- 2 pools with cabanas, hot‑tub + cold plunge, indoor & outdoor cinema
- Fitness & wellness center, yoga lawn, indoor mini soccer field
- Golf simulator, lounge bar with pool tables, banquet hall
- Pet park & paw‑wash; EV charging; storage
- Imported Italian porcelain in kitchens and bathrooms
- lifestyle EN:
- Fitness & wellness center, yoga lawn, indoor mini soccer field
- Pet park & paw‑wash; EV charging; storage
- Walk‑in closets; powder room in select residences
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 1-3 dormitorios
- Balcones con barandas de vidrio
- Ventanales piso‑techo
- unitMix EN:
- 1-3 bedrooms
- Glass‑railing balconies
- Floor‑to‑ceiling windows
- bedrooms: 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: 25

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- US$10.000 reserva
- 15% al contrato
- 10% al iniciar obra (groundbreaking)
- 15% a los 180 días
- 60% al cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- US$10,000 reservation
- 15% at contract
- 10% at groundbreaking
- 15% at 180 days
- 60% at closing (financing available for foreign buyers)
- percentages: 10, 15, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Oasis Hallandale Hallandale Beach Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Hallandale Beach

### FAQs
- FAQ ES count: 5
- FAQ EN count: 5
- sensitive FAQ claims:
- ¿Política de alquiler? -> rental_policy_claim, tax_or_legal_claim, payment_plan_claim
- ¿Plan de depósitos? -> payment_plan_claim
- Rental policy? -> rental_policy_claim
- Deposit structure? -> payment_plan_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_delivery (medium): Delivery value is missing or time-sensitive: 2025-2027.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Oasis/9Ew6UaXQ.jpeg
- https://ik.imagekit.io/devrodri/Oasis/2YIKVQpA.jpeg
- https://ik.imagekit.io/devrodri/Oasis/TNvGov_Q.jpeg
- https://ik.imagekit.io/devrodri/Oasis/D2WVuUzw.jpeg
- https://ik.imagekit.io/devrodri/Oasis/exUc6KXw.jpeg
- https://ik.imagekit.io/devrodri/Oasis/aKzfLilw.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_delivery, needs_current_verification

## Okan Tower Miami

### Identification
- id: okan-tower
- name: Okan Tower Miami
- slug: /proyectos/okan-tower
- sourceFilePath: src/data/projects/okan-tower.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Downtown Miami
- neighborhood / area: Downtown Miami
- address: Not found.
- developer: Not found as dedicated field.
- buildingType: condo-hotel / hospitality-managed residences candidate; single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 800000
- priceLabel: From USD 800,000
- delivery / completion: 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Okan%20Tower/EL5TgTFw.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Okan%20Tower/EL5TgTFw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/6Y0s1YAQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/L85y24PA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/_w8RMS5g.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/uXLiABbA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/7fko9BDg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/djjw9JWA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/kX2RaQuA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Okan%20Tower/zn3bqFdA.jpeg [branded]

### Description / Copy
- shortDescription ES: Okan Tower Miami | Downtown Miami | Studios | 70 pisos con diseño inspirado en un tulipán | Operado por Hilton Hotels & Resorts | 555 N Miami Ave, frente a Worldcenter
- shortDescription EN: Okan Tower Miami | Downtown Miami | Studios | 70 floors inspired by a tulip | Operated by Hilton Hotels & Resorts | 555 N Miami Ave, next to Worldcenter
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 70 pisos con diseño inspirado en un tulipán
- Operado por Hilton Hotels & Resorts
- Residencias Sky y Short-Term
- microClaims EN:
- 70 floors inspired by a tulip
- Operated by Hilton Hotels & Resorts
- Sky & Short-Term Residences
- usableCopyReference:
- 70 pisos con diseño inspirado en un tulipán
- 70 floors inspired by a tulip
- 555 N Miami Ave, frente a Worldcenter
- 163 Sky Residences (1-3BR) desde piso 51
- 236 Condo-Hotel Residences by Hilton desde el piso 36
- Amenidades: piscina rooftop, spa turco, gimnasio, cine, lounges y wine cellar
- 555 N Miami Ave, next to Worldcenter
- 163 Sky Residences (1-3BR) from 51st
- 236 Hilton Condo-Hotel Residences from floor 36
- Amenities: rooftop pool, Turkish spa, gym, cinema, lounges & wine cellar
- Residencias terminadas y amuebladas
- Ventanas de piso a techo de 3m y terrazas privadas
- ... 8 more in JSON
- needsRewrite:
- Operado por Hilton Hotels & Resorts
- Residencias Sky y Short-Term
- Operated by Hilton Hotels & Resorts
- Sky & Short-Term Residences
- Hilton Hotel & Resort de 5 estrellas integrado
- Integrated 5-star Hilton Hotel & Resort
- Luxury bathrooms with Turkish marble finishes
- 50% at closing (financing available for foreign buyers)
- Sky Residences de lujo en pisos 51-68 y Short-Term Residences by Hilton en pisos 36-50.
- Luxury Sky Residences (floors 51-68) and Hilton Short-Term Residences (floors 36-50).
- Sin restricciones
- No rental restrictions
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- 163 Sky Residences (1-3BR) from 51st
- 236 Hilton Condo-Hotel Residences from floor 36
- Turnkey furnished residences
- residences EN:
- 236 Hilton Condo-Hotel Residences from floor 36
- ~10 ft floor-to-ceiling windows and private terraces
- Italian kitchens with premium appliances
- Luxury bathrooms with Turkish marble finishes
- amenities EN:
- Amenities: rooftop pool, Turkish spa, gym, cinema, lounges & wine cellar
- Italian kitchens with premium appliances
- Hilton services: concierge, room service, housekeeping
- lifestyle EN:
- Not found.
- location EN:
- 555 N Miami Ave, next to Worldcenter

### Unit Mix / Residences
- unitMix ES:
- Studios
- 1 Dormitorio
- 1 Dormitorio + Den
- 2 Dormitorios
- 2 Dormitorios + Den
- 3 Dormitorios
- 3 Dormitorios + Den
- Penthouses
- unitMix EN:
- Studios
- 1 Bedroom
- 1 Bedroom + Den
- 2 Bedrooms
- 2 Bedrooms + Den
- 3 Bedrooms
- 3 Bedrooms + Den
- Penthouses
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: 70

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 30% al contrato
- 10% al nivel de amenidades (piso 12)
- 10% al top-off
- 50% al cierre (con financiación disponible para extranjeros)
- paymentPlan EN:
- 30% at contract
- 10% at amenity level (12th floor)
- 10% at top-off
- 50% at closing (financing available for foreign buyers)
- percentages: 10, 30, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Okan Tower Miami Downtown Miami Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Downtown Miami

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- ¿Qué tipo de residencias hay? -> rental_policy_claim
- ¿Qué servicios incluye Hilton? -> payment_plan_claim
- What types of residences are offered? -> rental_policy_claim
- What Hilton services are included? -> payment_plan_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: visible_candidate
- reason: Core project data exists. Use only as a neutral candidate after verification and rewrite.
- canShowCard: true
- canCreateDetailPage: true
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, esteban_tone, brand_usage_review, needs_current_verification

## One Hollywood Residences

### Identification
- id: one-hollywood-residences
- name: One Hollywood Residences
- slug: /proyectos/one-hollywood-residences
- sourceFilePath: src/data/projects/one-hollywood-residences.ts
- isImportedInCatalog: false
- isHidden: false
- hiddenReason: Not hidden.
- city: 1817 Taylor St, Hollywood, FL 33020
- neighborhood / area: Hollywood
- address: 1817 Taylor St, Hollywood, FL 33020
- developer: Not found as dedicated field.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 420000
- priceLabel: From USD 420,000
- delivery / completion: Q4 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/1.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: needs_review
- image flags:
- hero: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/1.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/2.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/3.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/7.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/5.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/6.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/4.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/Kitchen-scaled.jpg [weak_quality]
- gallery: https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/Bathroom.jpg [usable]

### Description / Copy
- shortDescription ES: One Hollywood Residences | 1817 Taylor St, Hollywood, FL 33020 | Studios · 48 m² (517 ft²) | 23 pisos · 248 residencias | Alquiler mensual flexible (mín. 30 días) | Porte‑cochère de llegada y gran lobby con recepción
- shortDescription EN: One Hollywood Residences | 1817 Taylor St, Hollywood, FL 33020 | Studios · 517 sq ft | 23‑story tower · 248 residences | Flexible monthly rentals (30‑day min) | Porte‑cochère arrival and grand lobby with reception
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 23 pisos · 248 residencias
- Alquiler mensual flexible (mín. 30 días)
- microClaims EN:
- 23‑story tower · 248 residences
- Flexible monthly rentals (30‑day min)
- usableCopyReference:
- 23 pisos · 248 residencias
- 23‑story tower · 248 residences
- Porte‑cochère de llegada y gran lobby con recepción
- Fitness center con estudio de yoga; sauna, spa y salas de tratamiento
- Clubroom multiuso con cocina para eventos y business center
- Kids club y playground; Wi‑Fi en áreas comunes; cargadores para EV
- Rooftop lounge con bar, área de TV, fogoneros y vistas 360°
- Valet para invitados; lockers inteligentes de paquetería
- Porte‑cochère arrival and grand lobby with reception
- Fitness center with yoga studio; sauna, spa and treatment rooms
- Multi‑purpose clubroom with dedicated kitchen and business center
- Kids club & playground; Wi‑Fi in commons; EV chargers
- ... 8 more in JSON
- needsRewrite:
- Alquiler mensual flexible (mín. 30 días)
- Flexible monthly rentals (30‑day min)
- Piscina y spa estilo resort con cabañas + BBQ al aire libre
- Resort‑style pool & spa with cabanas + outdoor BBQ
- Piscina estilo resort, rooftop lounge 360°, spa/sauna, fitness + yoga, clubroom y cowork, kids club, EV chargers, valet.
- Resort‑style pool, 360° rooftop lounge, spa/sauna, fitness+ yoga, clubroom & co‑working, kids club, EV chargers, valet.
- Renta corta permitida tipo Airbnb (estancia mínima 30 días). Requiere licencia de alquiler vacacional de la Ciudad de Hollywood e impuestos turísticos.
- Short‑term rentals (Airbnb) allowed (30‑day minimum stay). City of Hollywood vacation rental license and lodging taxes required.
- discardCopy:
- Renta corta permitida tipo Airbnb (estancia mínima 30 días). Requiere licencia de alquiler vacacional de la Ciudad de Hollywood e impuestos turísticos.
- Short‑term rentals (Airbnb) allowed (30‑day minimum stay). City of Hollywood vacation rental license and lodging taxes required.

### Highlights / Features
- projectHighlights EN:
- Fully finished residences; flooring options
- residences EN:
- Multi‑purpose clubroom with dedicated kitchen and business center
- Fully finished residences; flooring options
- Floor‑to‑ceiling windows with treatments
- Glass‑railing balconies
- European‑style kitchens · quartz countertops
- Bathrooms with imported porcelain, dual vanities and textured showers
- High‑efficiency washer & dryer
- amenities EN:
- Resort‑style pool & spa with cabanas + outdoor BBQ
- Fitness center with yoga studio; sauna, spa and treatment rooms
- Multi‑purpose clubroom with dedicated kitchen and business center
- Kids club & playground; Wi‑Fi in commons; EV chargers
- Rooftop lounge with bar, outdoor TV, fire pits and 360° views
- Guest valet; smart package locker room
- European‑style kitchens · quartz countertops
- lifestyle EN:
- Rooftop lounge with bar, outdoor TV, fire pits and 360° views
- Guest valet; smart package locker room
- Smart key access · prewired smart‑home tech
- European‑style kitchens · quartz countertops
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios · 48 m² (517 ft²)
- 1 dormitorio · 73-88 m² (781-945 ft²)
- 2 dormitorios · 113-115 m² (1,212-1,235 ft²)
- 3 dormitorios · 130-162 m² (1,400-1,745 ft²)
- unitMix EN:
- Studios · 517 sq ft
- 1‑bedroom · 781-945 sq ft
- 2‑bedroom · 1,212-1,235 sq ft
- 3‑bedroom · 1,400-1,745 sq ft
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: 781-945 sq ft; 1,212-1,235 sq ft; 1,400-1,745 sq ft; 517 sq ft; 945 sq ft; 1,235 sq ft; 1,745 sq ft; 73-88 m2; 113-115 m2; 130-162 m2; 48 m2; 88 m2; 115 m2; 162 m2
- residence count: 248
- floors: 23

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- Reserva: US$30k (studios/1BR) o US$50k (2-3BR)
- Completar 20% al contrato
- 10% al groundbreaking
- 10% al top‑off
- 60% al cierre
- paymentPlan EN:
- Reservation: US$30k (studios/1BR) or US$50k (2-3BR)
- Complete 20% at contract
- 10% at groundbreaking
- 10% at top‑off
- 60% at closing
- percentages: 10, 20, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 1817 Taylor St, Hollywood, FL 33020
- mapQuery: 1817 Taylor St, Hollywood, FL 33020
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 7
- FAQ EN count: 7
- sensitive FAQ claims:
- ¿Plan de depósitos? -> payment_plan_claim
- Deposit schedule? -> payment_plan_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- weak_visual_quality (medium): Some image filenames look like screenshots, thumbnails, or weak-quality captures.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Project file exists but is not imported into the Esteban catalog index.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/2.webp
- https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/3.jpg
- https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/7.jpg
- https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/5.jpg
- https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/6.jpg
- https://ik.imagekit.io/devrodri/One%20Hollywood%20Residences/4.jpg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, esteban_tone, weak_visual_quality, needs_current_verification

## One Park Tower by Turnberry

### Identification
- id: one-park-tower
- name: One Park Tower by Turnberry
- slug: /proyectos/one-park-tower
- sourceFilePath: src/data/projects/one-park-tower.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: North Miami
- neighborhood / area: North Miami
- address: Not found.
- developer: Interiors by Meyer Davis; architecture by Arquitectonica; Italian kitchens by Italkraft with Sub‑Zero & Wolf appliances; Bathrooms by Italkraft, frameless showers, soaking tub in select units; Arquitectonica + Meyer Davis; Arquitectonica (architecture), Meyer Davis (interiors), DSBoca (landscape).
- buildingType: single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 990900
- priceLabel: From USD 990,900
- delivery / completion: 2025
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15431.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: needs_review
- image flags:
- hero: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15431.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15436-2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15395-2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15434.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/TU1323_One-Park-Tower_VPInt_01-scaled.jpg [weak_quality]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15402-2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15419.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15421-2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15420.jpg [usable]

### Description / Copy
- shortDescription ES: One Park Tower by Turnberry | North Miami | 1 Dormitorio | SoLé Mia: laguna Crystal Lagoon™ | Diseño Arquitectonica + Meyer Davis | Torre de 33 plantas con 299 residencias y penthouses
- shortDescription EN: One Park Tower by Turnberry | North Miami | 1 Bedroom | SoLé Mia Crystal Lagoon™ | Arquitectonica + Meyer Davis | 33‑story tower with 299 residences and penthouses
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- SoLé Mia: laguna Crystal Lagoon™
- Diseño Arquitectonica + Meyer Davis
- Amenidades resort + Beach Club
- microClaims EN:
- SoLé Mia Crystal Lagoon™
- Arquitectonica + Meyer Davis
- Resort amenities + Beach Club
- usableCopyReference:
- SoLé Mia: laguna Crystal Lagoon™
- Diseño Arquitectonica + Meyer Davis
- SoLé Mia Crystal Lagoon™
- Arquitectonica + Meyer Davis
- Torre de 33 plantas con 299 residencias y penthouses
- Vistas a Bahía Biscayne, Atlántico y Oleta
- Ubicado dentro de SoLé Mia (≈74 hectáreas) con laguna de ≈3 hectáreas
- Dos piscinas: planta baja y terraza social nivel 6
- ONE Beach Club con playas de arena y deportes acuáticos
- Senderos, jardines y acceso a naturaleza (≈15 hectáreas de áreas verdes)
- 33‑story tower with 299 residences and penthouses
- Views to Biscayne Bay, Atlantic Ocean and Oleta River State Park
- ... 8 more in JSON
- needsRewrite:
- Amenidades resort + Beach Club
- Resort amenities + Beach Club
- Interiors by Meyer Davis; architecture by Arquitectonica
- Acceso a la Crystal Lagoon™ de 7 acres con ONE Beach Club, diseño de primer nivel y amenidades resort.
- Access to the 7‑acre Crystal Lagoon™ with ONE Beach Club, top design team and resort‑style amenities.
- Is financing available for foreign buyers?
- Who are the design teams?
- Arquitectonica (architecture), Meyer Davis (interiors), DSBoca (landscape).
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- 33‑story tower with 299 residences and penthouses
- Interiors by Meyer Davis; architecture by Arquitectonica
- Bathrooms by Italkraft, frameless showers, soaking tub in select units
- residences EN:
- Two pools: ground level and 6th‑floor social terrace
- Wraparound balconies, floor‑to‑ceiling glass
- Italian kitchens by Italkraft with Sub‑Zero & Wolf appliances
- Bathrooms by Italkraft, frameless showers, soaking tub in select units
- amenities EN:
- Two pools: ground level and 6th‑floor social terrace
- ONE Beach Club with sandy beaches and water sports
- Italian kitchens by Italkraft with Sub‑Zero & Wolf appliances
- State‑of‑the‑art fitness center and spa with sauna & steam
- Golf simulator, club room, executive lounge & café
- Pet‑friendly with pet spa
- lifestyle EN:
- Views to Biscayne Bay, Atlantic Ocean and Oleta River State Park
- ONE Beach Club with sandy beaches and water sports
- Trails, gardens and access to nature (37+ acres of green)
- State‑of‑the‑art fitness center and spa with sauna & steam
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 1 Dormitorio
- 2 Dormitorios
- 3 Dormitorios
- Penthouses
- unitMix EN:
- 1 Bedroom
- 2 Bedrooms
- 3 Bedrooms
- Penthouses
- bedrooms: 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: 299
- floors: Not found.

### Payment Plan
- paymentPlanStatus: do_not_publish
- paymentPlan ES:
- Not found.
- paymentPlan EN:
- Not found.
- percentages: None parsed.
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: One Park Tower by Turnberry North Miami Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: North Miami

### FAQs
- FAQ ES count: 8
- FAQ EN count: 8
- sensitive FAQ claims:
- ¿Hay financiación para extranjeros? -> payment_plan_claim
- Is financing available for foreign buyers? -> payment_plan_claim

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_delivery (medium): Delivery value is missing or time-sensitive: 2025.
- weak_visual_quality (medium): Some image filenames look like screenshots, thumbnails, or weak-quality captures.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15436-2.jpg
- https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15395-2.jpg
- https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15434.jpg
- https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15402-2.jpg
- https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15419.jpg
- https://ik.imagekit.io/devrodri/One%20Park%20Tower/Group-15421-2.jpg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, developer_copy, esteban_tone, outdated_delivery, weak_visual_quality, needs_current_verification

## Palma Miami Beach

### Identification
- id: palma-miami-beach
- name: Palma Miami Beach
- slug: /proyectos/palma-miami-beach
- sourceFilePath: src/data/projects/palma.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: North Beach, Miami Beach
- neighborhood / area: Miami Beach
- address: 126 residences across 14 stories
- developer: European cabinetry and Bosch appliance package
- buildingType: single-family homes / master-planned community candidate; boutique residential condominium candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 600000
- priceLabel: From USD 600,000
- delivery / completion: 2026
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Palma/Ekinbtkg.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Palma/Ekinbtkg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Palma/YGLGGn8Q.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Palma/Km2ZFxbA.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Palma/1-3oE67g.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Palma/y-dH-evQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Palma/_gOt7jMQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Palma/Bh6nExSw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Palma/eC1S5jbQ.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Sk7mItag.jpg [branded]

### Description / Copy
- shortDescription ES: Palma Miami Beach | North Beach, Miami Beach | 1 dormitorio: 38–53 m² | Residencias terminadas y amuebladas | Sin restricción de alquiler mínimo (STR) | Piscina estilo resort con cabañas
- shortDescription EN: Palma Miami Beach | North Beach, Miami Beach | 1 BR: 405–573 sq ft | Fully finished & furnished residences | No minimum rental restrictions (STR) | Resort‑style pool with cabanas
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Residencias terminadas y amuebladas
- Sin restricción de alquiler mínimo (STR)
- Boutique a pasos de la playa
- microClaims EN:
- Fully finished & furnished residences
- No minimum rental restrictions (STR)
- Boutique, steps from the beach
- usableCopyReference:
- Residencias terminadas y amuebladas
- Boutique a pasos de la playa
- Fully finished & furnished residences
- Boutique, steps from the beach
- Cocina de verano al aire libre con bar y área de eventos
- Salón para residentes junto a la piscina (interior/exterior)
- Gimnasio rooftop totalmente equipado (Technogym)
- Jacuzzi y piscinas de inmersión fría
- Edificio inteligente con fibra óptica y Wi‑Fi en áreas comunes
- Acceso seguro 24/7 a edificio, amenidades y áreas privadas
- Outdoor summer kitchen with bar and event area
- Resident lounge by the pool (indoor/outdoor)
- ... 8 more in JSON
- needsRewrite:
- Sin restricción de alquiler mínimo (STR)
- No minimum rental restrictions (STR)
- Piscina estilo resort con cabañas
- Resort‑style pool with cabanas
- Wellness jacuzzi and cold plunge pools
- 50% at closing (financing available for foreign buyers)
- Sin restricción de alquiler mínimo; STR permitidos (según normativa local de Certificado de Uso).
- No minimum rental restrictions; STR allowed (subject to city Certificate of Use).
- Deposit structure?
- 10% reservation · 10% contract · 10% groundbreaking · 10% pool deck · 10% top‑off · 50% closing (financing available for foreign buyers).
- Sin restricción de alquiler mínimo; STR permitidos
- No minimum rental restrictions; STR allowed
- discardCopy:
- Sin restricción de alquiler mínimo; STR permitidos (según normativa local de Certificado de Uso).
- Sin restricción de alquiler mínimo; STR permitidos

### Highlights / Features
- projectHighlights EN:
- Smart building with fiber and Wi‑Fi in common areas
- Secure 24/7 access to building, amenities and private areas
- residences EN:
- Outdoor summer kitchen with bar and event area
- Floor‑to‑ceiling impact‑resistant sliding glass doors
- Private balconies
- 9-10 ft ceiling heights
- In‑unit washer & dryer
- European cabinetry and Bosch appliance package
- Porcelain baths with frameless glass and European fixtures
- amenities EN:
- Resort‑style pool with cabanas
- Outdoor summer kitchen with bar and event area
- Resident lounge by the pool (indoor/outdoor)
- Rooftop fitness center fully equipped (Technogym)
- Wellness jacuzzi and cold plunge pools
- lifestyle EN:
- Wellness jacuzzi and cold plunge pools
- Smart building with fiber and Wi‑Fi in common areas
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 1 dormitorio: 38–53 m²
- 2 dormitorios: 58–83 m²
- Penthouses: 38–125 m²
- 126 residencias · 14 pisos
- unitMix EN:
- 1 BR: 405–573 sq ft
- 2 BR: 620–889 sq ft
- Penthouses: 414–1,342 sq ft
- 126 residences · 14 stories
- bedrooms: 1 bedroom, 2 bedrooms
- squareFootageRanges: 405-573 sq ft; 620-889 sq ft; 414-1,342 sq ft; 573 sq ft; 889 sq ft; 1,342 sq ft; 38-53 m2; 58-83 m2; 38-125 m2; 53 m2; 83 m2; 125 m2
- residence count: 126
- floors: 14

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 10% a la reserva
- 10% al contrato
- 10% al inicio de obra
- 10% al nivel de piscina
- 10% al top‑off
- 50% al cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- 10% at reservation
- 10% at contract
- 10% at groundbreaking
- 10% at pool deck level
- 10% at top‑off
- 50% at closing (financing available for foreign buyers)
- percentages: 10, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 126 residences across 14 stories
- mapQuery: 126 residences across 14 stories
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 5
- FAQ EN count: 5
- sensitive FAQ claims:
- ¿Renta mínima? -> rental_policy_claim, tax_or_legal_claim
- ¿Plan de depósitos? -> payment_plan_claim
- Minimum rental? -> rental_policy_claim
- Deposit structure? -> payment_plan_claim

### Risk Flags
- str_claim (high): STR wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: str_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, brand_usage_review, needs_current_verification

## Parkside Brickell

### Identification
- id: parkside-brickell
- name: Parkside Brickell
- slug: /proyectos/parkside-brickell
- sourceFilePath: src/data/projects/parkside.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Brickell, Miami
- neighborhood / area: Brickell
- address: 829 para remover condiciones. Plazo total estimado: ~4-6 años
- developer: Yes, developer leaseback program at 10%.
- buildingType: boutique residential condominium candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 500000
- priceLabel: From USD 500,000
- delivery / completion: 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Parkside/y6-PI7-A.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Parkside/y6-PI7-A.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/nQ34Z0IA.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/SB5S8L6Q.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/B_lecjew.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/cZ9cx3ag.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/AajnMI9w.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/VoaLqmDQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/6Hnxx74A.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Parkside/kJTt50zg.jpeg [usable]

### Description / Copy
- shortDescription ES: Parkside Brickell | Brickell, Miami | Estudios, 1 y 2 dormitorios | VISA de Inversionista (EB‑5) | Residencias terminadas y amuebladas | VISA EB‑5: ruta a la Green Card (vía Centro Regional)
- shortDescription EN: Parkside Brickell | Brickell, Miami | Studios, 1 and 2 bedrooms | EB‑5 investor visa eligible | Delivered fully finished and furnished | EB‑5 Investor Visa: path to Green Card (via Regional Center)
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- VISA de Inversionista (EB‑5)
- Residencias terminadas y amuebladas
- STR sin restricciones con gestión in‑house
- Boutique en el corazón de Brickell
- microClaims EN:
- EB‑5 investor visa eligible
- Delivered fully finished and furnished
- No rental restrictions; STR with in‑house management
- Boutique residence in the heart of Brickell
- usableCopyReference:
- VISA de Inversionista (EB‑5)
- Residencias terminadas y amuebladas
- Boutique en el corazón de Brickell
- EB‑5 investor visa eligible
- Delivered fully finished and furnished
- Boutique residence in the heart of Brickell
- Piscina en terraza panorámica y cabañas
- Cocina al aire libre con bar y restaurante en PB
- Gimnasio en la terraza
- Estaciones de carga para vehículos eléctricos
- Zona segura para paquetería
- Shuttle a Brickell City Centre y la playa
- ... 8 more in JSON
- needsRewrite:
- STR sin restricciones con gestión in‑house
- No rental restrictions; STR with in‑house management
- Italian cabinetry and custom lighting design
- 10% al inicio de la construcción
- 10% al completar la estructura
- Sin restricciones; STR permitidos con gestión hotelera en el edificio.
- Yes, developer leaseback program at 10%.
- No restrictions; short‑term rentals allowed with in‑house management.
- Sin restricciones de alquiler; aprobado para renta corta (gestión hotelera en el edificio)
- No rental restrictions; approved for short-term rental (hotel management in the building)
- discardCopy:
- VISA EB‑5: ruta a la Green Card (vía Centro Regional)
- EB‑5 Investor Visa: path to Green Card (via Regional Center)
- Sí. Parkside Brickell ofrece opción de Visa EB‑5 vía Centro Regional, con ruta a la Green Card sujeta a aprobación de USCIS.
- Petición I‑526E (~24-36 meses), Green Card condicional 2 años, luego I‑829 para remover condiciones. Plazo total estimado: ~4-6 años.
- ¿Hay leaseback?
- Sí, programa de leaseback con retorno del 10%.
- Sin restricciones; STR permitidos con gestión hotelera en el edificio.
- Yes. Parkside Brickell offers an EB‑5 option via a Regional Center, with a path to the Green Card subject to USCIS approval.
- I‑526E (~24-36 months), 2‑year conditional Green Card, then I‑829 to remove conditions. Total ~4-6 years (est.).
- Leaseback?
- Yes, developer leaseback program at 10%.

### Highlights / Features
- projectHighlights EN:
- Residences fully furnished
- Italian cabinetry and custom lighting design
- residences EN:
- Outdoor kitchen with bar and ground‑floor restaurant
- Floor‑to‑ceiling impact‑resistant glazing
- Marble countertops and stainless appliances
- Italian cabinetry and custom lighting design
- Glass‑railing balconies
- In‑unit washer & dryer
- amenities EN:
- Rooftop pool with cabanas
- Outdoor kitchen with bar and ground‑floor restaurant
- Rooftop gym
- lifestyle EN:
- Shuttle to Brickell City Centre and the beach
- location EN:
- Shuttle to Brickell City Centre and the beach

### Unit Mix / Residences
- unitMix ES:
- Estudios, 1 y 2 dormitorios
- 187 residencias · 8 niveles
- unitMix EN:
- Studios, 1 and 2 bedrooms
- 187 residences · 8 levels
- bedrooms: studio, 2 bedrooms
- squareFootageRanges: Not detected.
- residence count: 187
- floors: 8

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- US$10.000 a la reserva
- 20% al firmar el contrato
- 10% al inicio de la construcción
- 10% al completar la estructura
- 60% al cierre
- paymentPlan EN:
- US$10,000 at reservation
- 20% at contract
- 10% at groundbreaking
- 10% at top‑off
- 60% at closing
- percentages: 10, 20, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 829 para remover condiciones. Plazo total estimado: ~4-6 años
- mapQuery: 829 para remover condiciones. Plazo total estimado: ~4-6 años
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 7
- FAQ EN count: 7
- sensitive FAQ claims:
- ¿Visa EB‑5? -> eb5_claim
- ¿Monto y costos EB‑5? -> tax_or_legal_claim
- ¿Proceso y tiempos EB‑5? -> eb5_claim
- ¿Hay leaseback? -> returns_claim, leaseback_claim
- ¿Política de alquiler? -> rental_policy_claim, tax_or_legal_claim
- EB‑5 visa? -> eb5_claim, tax_or_legal_claim
- EB‑5 amount & costs? -> tax_or_legal_claim
- EB‑5 process & timing? -> eb5_claim
- Leaseback? -> leaseback_claim
- Rental policy? -> rental_policy_claim

### Risk Flags
- returns_claim (high): Return/yield language found.
- eb5_claim (high): EB-5 / Green Card language found.
- leaseback_claim (high): Leaseback or guaranteed-rent language found.
- str_claim (high): STR wording found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- ROI/returns/rentabilidad claims
- leaseback or guaranteed-rent claims
- EB-5 / Opportunity Zone / immigration eligibility copy
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Parkside/nQ34Z0IA.jpeg
- https://ik.imagekit.io/devrodri/Parkside/SB5S8L6Q.jpeg
- https://ik.imagekit.io/devrodri/Parkside/B_lecjew.jpeg
- https://ik.imagekit.io/devrodri/Parkside/cZ9cx3ag.jpeg
- https://ik.imagekit.io/devrodri/Parkside/AajnMI9w.jpeg
- https://ik.imagekit.io/devrodri/Parkside/VoaLqmDQ.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: returns_claim, eb5_claim, leaseback_claim, str_claim, short_term_rental_claim, no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, needs_current_verification

## Seven Park Residences

### Identification
- id: seven-park
- name: Seven Park Residences
- slug: /proyectos/seven-park
- sourceFilePath: src/data/projects/seven-park.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 218-220 SE 7th St, Hallandale Beach, FL 33009
- neighborhood / area: Hallandale Beach
- address: 218-220 SE 7th St, Hallandale Beach, FL 33009
- salesGalleryAddress: Kadima (dev) · Fortune Development Sales · Sales Gallery: 21495 E Dixie Hwy, Aventura, FL 33180.
- developer: Mia Cucina kitchens + Bosch panel-ready; waterfall quartz; brass fixtures; Kadima (dev) · Fortune Development Sales · Sales Gallery: 21495 E Dixie Hwy, Aventura, FL 33180.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 370000
- priceLabel: From USD 370,000
- delivery / completion: 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Seven%20Park/Portada.jpeg?updatedAt=1759349278151
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: needs_review
- image flags:
- hero: https://ik.imagekit.io/devrodri/Seven%20Park/Portada.jpeg?updatedAt=1759349278151 [weak_quality]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/01.jpeg?updatedAt=1759349277487 [usable]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/1.jpeg?updatedAt=1759349277522 [usable]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/2.jpeg?updatedAt=1759349278070 [usable]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/3.jpeg?updatedAt=1759349277989 [usable]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/4.jpeg?updatedAt=1759349278036 [usable]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/5.jpeg?updatedAt=1759349278236 [usable]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/6.jpeg?updatedAt=1759349278040 [usable]
- gallery: https://ik.imagekit.io/devrodri/Seven%20Park/8.jpeg?updatedAt=1759349277531 [usable]

### Description / Copy
- shortDescription ES: Seven Park Residences | 218-220 SE 7th St, Hallandale Beach, FL 33009 | Studios a 3 dormitorios · ver planos para m² | Frente a Peter Bluesten Park | Amenidades ≈2,800 m² | Piscina tipo resort, 2 hot tubs, cabañas y chaises
- shortDescription EN: Seven Park Residences | 218-220 SE 7th St, Hallandale Beach, FL 33009 | Studios to 3 bedrooms · see plans for m²/sq.ft | Facing Peter Bluesten Park | ~30,000 sq.ft amenities | Resort-style pool, 2 hot tubs, cabanas and chaises
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Frente a Peter Bluesten Park
- Amenidades ≈2,800 m²
- microClaims EN:
- Facing Peter Bluesten Park
- ~30,000 sq.ft amenities
- usableCopyReference:
- Frente a Peter Bluesten Park
- Amenidades ≈2,800 m²
- Facing Peter Bluesten Park
- ~30,000 sq.ft amenities
- BBQ's, coworking + sala de conferencias
- Media room / lounge / party room, content creation room
- Estacionamiento para residentes y visitas; 24 cargadores EV
- Pet-friendly; depósitos privados limitados
- Communal & private BBQs, coworking + conference room
- Media lounge / party room, content creation studio
- Resident & guest parking; 24 EV chargers
- Pet-friendly; limited private storage
- ... 8 more in JSON
- needsRewrite:
- Piscina tipo resort, 2 hot tubs, cabañas y chaises
- Wellness: sauna, vapor, cold plunge; gimnasio ≈280 m²
- Resort-style pool, 2 hot tubs, cabanas and chaises
- Wellness: sauna, steam, cold plunge; ~3,000 sq.ft gym
- Are short-term rentals allowed?
- Uso flexible (short-/long-term)
- Flexible use (short-/long-term)
- discardCopy:
- ¿Se permiten alquileres de corta estancia?
- Sí, desde el día 1. El condominio no impone mínimos; se debe tramitar la licencia de Vacation Rental de Hallandale Beach.
- Yes, from day one. No condo minimums; owners must obtain the Hallandale Beach Vacation Rental license.

### Highlights / Features
- projectHighlights EN:
- 10 ft ceilings; floor-to-ceiling windows; porcelain floors; in-unit W/D
- residences EN:
- Mia Cucina kitchens + Bosch panel-ready; waterfall quartz; brass fixtures
- Italian porcelain baths; frameless showers; brass fixtures
- 10 ft ceilings; floor-to-ceiling windows; porcelain floors; in-unit W/D
- amenities EN:
- Resort-style pool, 2 hot tubs, cabanas and chaises
- Communal & private BBQs, coworking + conference room
- Media lounge / party room, content creation studio
- Wellness: sauna, steam, cold plunge; ~3,000 sq.ft gym
- Pet-friendly; limited private storage
- Mia Cucina kitchens + Bosch panel-ready; waterfall quartz; brass fixtures
- lifestyle EN:
- Media lounge / party room, content creation studio
- Wellness: sauna, steam, cold plunge; ~3,000 sq.ft gym
- Resident & guest parking; 24 EV chargers
- Mia Cucina kitchens + Bosch panel-ready; waterfall quartz; brass fixtures
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios a 3 dormitorios · ver planos para m²
- unitMix EN:
- Studios to 3 bedrooms · see plans for m²/sq.ft
- bedrooms: studio, 3 bedrooms
- squareFootageRanges: 3,000 sq ft; 280 m2
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 10% reserva
- 10% contrato
- 10% groundbreaking
- 10% losa 4º piso
- 10% top-off
- 50% cierre
- paymentPlan EN:
- 10% reservation
- 10% at contract
- 10% at groundbreaking
- 10% 4th-floor slab
- 10% at top-off
- 50% at closing
- percentages: 10, 50
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 218-220 SE 7th St, Hallandale Beach, FL 33009
- mapQuery: 218-220 SE 7th St, Hallandale Beach, FL 33009
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- ¿Se permiten alquileres de corta estancia? -> rental_policy_claim, tax_or_legal_claim
- ¿Cuál es el plan de pagos? -> payment_plan_claim
- ¿Prestamista preferido e incentivos? -> payment_plan_claim
- Are short-term rentals allowed? -> rental_policy_claim, tax_or_legal_claim
- What is the payment plan? -> payment_plan_claim
- Preferred lender and incentives? -> payment_plan_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- weak_visual_quality (medium): Some image filenames look like screenshots, thumbnails, or weak-quality captures.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Seven%20Park/01.jpeg?updatedAt=1759349277487
- https://ik.imagekit.io/devrodri/Seven%20Park/1.jpeg?updatedAt=1759349277522
- https://ik.imagekit.io/devrodri/Seven%20Park/2.jpeg?updatedAt=1759349278070
- https://ik.imagekit.io/devrodri/Seven%20Park/3.jpeg?updatedAt=1759349277989
- https://ik.imagekit.io/devrodri/Seven%20Park/4.jpeg?updatedAt=1759349278036
- https://ik.imagekit.io/devrodri/Seven%20Park/5.jpeg?updatedAt=1759349278236
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, weak_visual_quality, needs_current_verification

## The Lauderdale

### Identification
- id: the-lauderdale
- name: The Lauderdale
- slug: /proyectos/the-lauderdale
- sourceFilePath: src/data/projects/thelauderdale.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 110 NW 4th Avenue, Fort Lauderdale, FL 33312
- neighborhood / area: Fort Lauderdale
- address: 110 NW 4th Avenue, Fort Lauderdale, FL 33312
- developer: Developed by EB5 Development Group
- buildingType: single-family homes / master-planned community candidate; villa/townhome component candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 656400
- priceLabel: From USD 656,400
- delivery / completion: Dic 2029
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/The%20Lauderdale/Aerial-01-FINALkfc-1920x1080.webp
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/The%20Lauderdale/Aerial-01-FINALkfc-1920x1080.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/1.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/2.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/33.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/4.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/5.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/6.jpg [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/7.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20Lauderdale/8.jpg [usable]

### Description / Copy
- shortDescription ES: The Lauderdale | 110 NW 4th Avenue, Fort Lauderdale, FL 33312 | 1 a 4 dormitorios + den · penthouses hasta ≈280 m² | 42 pisos · 422 residencias | Opportunity Zone · Conexión peatonal directa a Brightline | Piscina estilo resort
- shortDescription EN: The Lauderdale | 110 NW 4th Avenue, Fort Lauderdale, FL 33312 | 1 to 4 bedrooms + den · penthouses up to ~3,000+ sq.ft | 42 floors · 422 residences | Opportunity Zone · Direct pedestrian connection to Brightline | Resort-style pool
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 42 pisos · 422 residencias
- Opportunity Zone · Conexión peatonal directa a Brightline
- microClaims EN:
- 42 floors · 422 residences
- Opportunity Zone · Direct pedestrian connection to Brightline
- usableCopyReference:
- 42 pisos · 422 residencias
- 42 floors · 422 residences
- Spa y áreas de bienestar
- Fitness center
- Espacios sociales y lounges
- BBQ y áreas exteriores
- Café y retail en planta baja
- Concierge y seguridad
- Pet-friendly
- Estaciones de carga para vehículos eléctricos
- Social spaces and lounges
- Outdoor BBQ areas
- ... 6 more in JSON
- needsRewrite:
- Opportunity Zone · Direct pedestrian connection to Brightline
- Piscina estilo resort
- Resort-style pool
- Spa and wellness areas
- Spa-style baths with designer fixtures
- 110 NW 4th Avenue, Fort Lauderdale, FL 33312 (Flagler Village). Across from Brightline with a planned pedestrian connection.
- discardCopy:
- Opportunity Zone · Conexión peatonal directa a Brightline
- Opportunity Zone · Direct pedestrian connection to Brightline
- Proyecto aprobado para programa EB-5
- EB-5 approved project
- ¿Opción EB-5 / Opportunity Zone?
- El proyecto se comercializa con opción de inversión EB-5 (sujeto a elegibilidad) y está dentro de una Qualified Opportunity Zone.
- EB-5 / Opportunity Zone option?
- Marketed with an EB-5 investment option (subject to eligibility) and located in a Qualified Opportunity Zone.

### Highlights / Features
- projectHighlights EN:
- Spa-style baths with designer fixtures
- residences EN:
- Ground-floor café and retail
- Floor-to-ceiling, impact-resistant windows
- European-style kitchens with premium appliances
- Spa-style baths with designer fixtures
- amenities EN:
- Resort-style pool
- Spa and wellness areas
- Fitness center
- Social spaces and lounges
- Outdoor BBQ areas
- Ground-floor café and retail
- Concierge and security
- Pet-friendly
- European-style kitchens with premium appliances
- Spa-style baths with designer fixtures
- lifestyle EN:
- Spa and wellness areas
- Keyless entry + smart home / visitor management
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- 1 a 4 dormitorios + den · penthouses hasta ≈280 m²
- unitMix EN:
- 1 to 4 bedrooms + den · penthouses up to ~3,000+ sq.ft
- bedrooms: 4 bedrooms
- squareFootageRanges: 280 m2
- residence count: 422
- floors: 42

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- US$5,000 al firmar la reserva
- Saldo hasta completar 5% dentro de los 30 días
- 5% a los 12 meses de la firma
- 5% a los 24 meses de la firma
- 5% a los 36 meses de la firma
- 80% al cierre (Dic 2029)
- paymentPlan EN:
- US$5,000 due at reservation
- Balance to complete 5% within 30 days
- 5% due 12 months after signing
- 5% due 24 months after signing
- 5% due 36 months after signing
- 80% due at closing (Dec 2029)
- percentages: 5, 80
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 110 NW 4th Avenue, Fort Lauderdale, FL 33312
- mapQuery: 110 NW 4th Avenue, Fort Lauderdale, FL 33312
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- ¿Opción EB-5 / Opportunity Zone? -> eb5_claim, opportunity_zone_claim
- ¿Política de renta? -> payment_plan_claim
- EB-5 / Opportunity Zone option? -> eb5_claim, tax_or_legal_claim, opportunity_zone_claim

### Risk Flags
- eb5_claim (high): EB-5 / Green Card language found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- opportunity_zone_claim (high): Opportunity Zone wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- outdated_delivery (medium): Delivery value is missing or time-sensitive: Dic 2029.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- EB-5 / Opportunity Zone / immigration eligibility copy
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/The%20Lauderdale/1.webp
- https://ik.imagekit.io/devrodri/The%20Lauderdale/2.jpg
- https://ik.imagekit.io/devrodri/The%20Lauderdale/33.jpg
- https://ik.imagekit.io/devrodri/The%20Lauderdale/4.jpg
- https://ik.imagekit.io/devrodri/The%20Lauderdale/5.jpg
- https://ik.imagekit.io/devrodri/The%20Lauderdale/6.jpg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: eb5_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, opportunity_zone_claim, developer_copy, esteban_tone, outdated_price, outdated_delivery, needs_current_verification

## The Rider Wynwood

### Identification
- id: the-rider-wynwood
- name: The Rider Wynwood
- slug: /proyectos/the-rider-wynwood
- sourceFilePath: src/data/projects/rider.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Wynwood, Miami
- neighborhood / area: Wynwood
- address: Not found.
- developer: Not found as dedicated field.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 500000
- priceLabel: From USD 500,000
- delivery / completion: 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Rider/Db459XMg.jpeg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Rider/Db459XMg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/939Bwf8g.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/0Rdn2cTA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/e3-o0eOw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/ph0RAPdg.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/gojj7BvA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/NObbIiIw.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/xjfhvlsA.jpeg [branded]
- gallery: https://ik.imagekit.io/devrodri/Rider/JgjJVkTQ.jpeg [branded]

### Description / Copy
- shortDescription ES: The Rider Wynwood | Wynwood, Miami | Studios, 1, 2 y 3 dormitorios (algunos con den y opción lock‑off) | Residencias terminadas y amuebladas | Renta corta permitida con gestión interna | Rooftop: piscina resort, lounge & bar entre jardines
- shortDescription EN: The Rider Wynwood | Wynwood, Miami | Studios, 1, 2 and 3 bedrooms (some with den and lock‑off option) | Fully finished & furnished residences | Short‑term rental friendly with in‑house management | Rooftop resort pool, lounge & bar set in lush gardens
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Residencias terminadas y amuebladas
- Renta corta permitida con gestión interna
- Wynwood · Midtown · Design District
- microClaims EN:
- Fully finished & furnished residences
- Short‑term rental friendly with in‑house management
- Wynwood · Midtown · Design District
- usableCopyReference:
- Residencias terminadas y amuebladas
- Fully finished & furnished residences
- Fitness + saunas infrarrojas + sala de masajes
- VINYL: lounge con mesa de billar, pantalla de cine y tocadiscos Brionvega
- Ready Set Café para tomas on‑the‑go
- Port‑cochère ‘X Marks the Spot’ y lobby de arte
- Ride‑share de motocicletas y e‑bikes
- ‘BTS’ corners para creación de contenido con pro‑lighting
- Wi‑Fi en todo el edificio, seguridad con smart FOB
- RESET: fitness + cold plunge garden + infrared saunas + massage room
- VINYL: resident lounge with billiards, theater screen & Brionvega DJ turntable
- Ready Set Café for on‑the‑go life
- ... 8 more in JSON
- needsRewrite:
- Wynwood · Midtown · Design District
- Short‑term rental friendly with in‑house management
- Rooftop: piscina resort, lounge & bar entre jardines
- Rooftop resort pool, lounge & bar set in lush gardens
- 60% at closing (financing available for foreign buyers)
- Short‑ and long‑term allowed; STR subject to the city Certificate of Use.
- Política de renta Uso flexible (short-/long-term)
- discardCopy:
- Renta corta permitida con gestión interna
- Permite renta corta y larga; exige Certificado de Uso ("Certificate of Use") de la ciudad.

### Highlights / Features
- projectHighlights EN:
- Not found.
- residences EN:
- Bertazzoni appliance package
- Dekton countertops in kitchens and baths
- amenities EN:
- Rooftop resort pool, lounge & bar set in lush gardens
- RESET: fitness + cold plunge garden + infrared saunas + massage room
- VINYL: resident lounge with billiards, theater screen & Brionvega DJ turntable
- Ready Set Café for on‑the‑go life
- Dekton countertops in kitchens and baths
- lifestyle EN:
- ‘X Marks the Spot’ porte‑cochère and art‑adorned epic lobby
- Property‑wide Wi‑Fi, smart FOB security
- Smart lock entry and smart‑home features
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios, 1, 2 y 3 dormitorios (algunos con den y opción lock‑off)
- 146 unidades en 12 pisos
- unitMix EN:
- Studios, 1, 2 and 3 bedrooms (some with den and lock‑off option)
- 146 residences across 12 stories
- bedrooms: studio, 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: 146
- floors: 12

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 10% a la reserva
- 10% al contrato
- 10% al groundbreaking
- 10% al colado de fundación o a los 6 meses del groundbreaking (lo que ocurra más tarde)
- 60% al cierre (financiación disponible para extranjeros)
- paymentPlan EN:
- 10% at reservation
- 10% at contract
- 10% at groundbreaking
- 10% at foundation pour or six months after groundbreaking (whichever is later)
- 60% at closing (financing available for foreign buyers)
- percentages: 10, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: The Rider Wynwood Wynwood Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Wynwood

### FAQs
- FAQ ES count: 4
- FAQ EN count: 4
- sensitive FAQ claims:
- ¿Política de alquiler? -> rental_policy_claim, tax_or_legal_claim
- Rental policy? -> rental_policy_claim

### Risk Flags
- str_claim (high): STR wording found.
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: str_claim, short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, esteban_tone, brand_usage_review, needs_current_verification

## The Standard Residences, Brickell Miami

### Identification
- id: the-standard-brickell
- name: The Standard Residences, Brickell Miami
- slug: /proyectos/the-standard-brickell
- sourceFilePath: src/data/projects/the-standard-brickell.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 690 SW 1st Avenue, Miami, FL 33130
- neighborhood / area: Brickell
- address: 690 SW 1st Avenue, Miami, FL 33130
- developer: Not found as dedicated field.
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 640000
- priceLabel: From USD 640,000
- delivery / completion: 2027
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Standard%20Brickell/exterior.jpeg?updatedAt=1770565331852
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Standard%20Brickell/exterior.jpeg?updatedAt=1770565331852 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/piscina.jpeg?updatedAt=1770565331923 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/coworking.jpeg?updatedAt=1770565331922 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/Boowling.jpeg?updatedAt=1770565331826 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/Media%20Room.jpeg?updatedAt=1770565331917 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/SPA.jpeg?updatedAt=1770565331889 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/Balcon.jpeg?updatedAt=1770565331918 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/living.jpeg?updatedAt=1770565331886 [branded]
- gallery: https://ik.imagekit.io/devrodri/Standard%20Brickell/bedroom.jpeg?updatedAt=1770565331917 [branded]

### Description / Copy
- shortDescription ES: The Standard Residences, Brickell Miami | 690 SW 1st Avenue, Miami, FL 33130 | Studios | Desde US$640K | Entrega 2027 | Piscina rooftop
- shortDescription EN: The Standard Residences, Brickell Miami | 690 SW 1st Avenue, Miami, FL 33130 | Studios | From $640K | Completion date 2027 | Rooftop pool
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Desde US$640K
- Entrega 2027
- Renta mínima 30 días
- microClaims EN:
- From $640K
- Completion date 2027
- 30-day minimum rentals
- usableCopyReference:
- Desde US$640K
- Entrega 2027
- Renta mínima 30 días
- From $640K
- Completion date 2027
- 30-day minimum rentals
- Piscina rooftop
- Co-working lounge
- Bowling alley privada + lounge
- Screening lounge / media room
- Spa (hammam, sauna, steam room, cold plunge, salt therapy)
- Fitness center
- ... 5 more in JSON
- needsRewrite:
- Contemporary design with modern finishes (per prospectus specifications)
- Estimated delivery 2027 (subject to permits and construction timeline).
- discardCopy:
- Estimated delivery 2027 (subject to permits and construction timeline).

### Highlights / Features
- projectHighlights EN:
- Residences with terrace/balcony (by residence type)
- Contemporary design with modern finishes (per prospectus specifications)
- residences EN:
- Outdoor kitchen / outdoor social area
- Residences with terrace/balcony (by residence type)
- amenities EN:
- Rooftop pool
- Co-working lounge
- Private bowling alley + lounge
- Screening lounge / media room
- Spa (hammam, sauna, steam room, cold plunge, salt therapy)
- Fitness center
- Social lounge + game room
- Outdoor kitchen / outdoor social area
- lifestyle EN:
- Not found.
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios
- 1 dormitorio
- 2 dormitorios
- 3 dormitorios
- unitMix EN:
- Studios
- 1-bedroom
- 2-bedroom
- 3-bedroom
- bedrooms: studio, 1 bedroom, 2 bedrooms, 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 20% al firmar el contrato.
- 15% a los 90 días desde la firma del contrato.
- 65% al cierre.
- paymentPlan EN:
- 20% at contract.
- 15% 90 days from contract.
- 65% at closing.
- percentages: 15, 20, 65
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 690 SW 1st Avenue, Miami, FL 33130
- mapQuery: 690 SW 1st Avenue, Miami, FL 33130
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 5
- FAQ EN count: 5
- sensitive FAQ claims:
- ¿Cuál es el plan de pagos? -> payment_plan_claim
- What is the estimated completion? -> tax_or_legal_claim
- What is the deposit schedule? -> payment_plan_claim

### Risk Flags
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: rental_policy_claim, payment_plan_claim, tax_or_legal_claim, brand_usage_review, needs_current_verification

## The William Residences

### Identification
- id: the-william
- name: The William Residences
- slug: /proyectos/the-william
- sourceFilePath: src/data/projects/the-william.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 2040 NE 163rd St, North Miami Beach, FL 33162
- neighborhood / area: Miami Beach
- address: 2040 NE 163rd St, North Miami Beach, FL 33162
- salesGalleryAddress: Project: 2040 NE 163rd St, North Miami Beach. Sales Gallery: 16251 W Dixie Hwy, NMB 33160.
- developer: Italkraft kitchens + Bosch; seamless quartz; Hansgrohe black; Studios from ~US$380,880 per developer availability (9/25/2025).
- buildingType: residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 380880
- priceLabel: From USD 380,880
- delivery / completion: 2029
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/The%20William%20residences/1.jpg.webp
- gallery count: 4
- ImageKit URL count: 5
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/The%20William%20residences/1.jpg.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20William%20residences/2.jpg.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20William%20residences/3.jpg.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20William%20residences/4.jpg.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/The%20William%20residences/5.jpg.webp [usable]

### Description / Copy
- shortDescription ES: The William Residences | 2040 NE 163rd St, North Miami Beach, FL 33162 | Studios a 3 dormitorios · ver planos para m² | 26 pisos · 374 residencias | Amenidades ≈3,760 m² en dos niveles | Piscina tipo resort y solárium
- shortDescription EN: The William Residences | 2040 NE 163rd St, North Miami Beach, FL 33162 | Studios to 3 bedrooms · see plans for m²/sq.ft | 26 stories · 374 residences | ~40,459 sq.ft amenities across two floors | Resort-style pool and sun deck
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- 26 pisos · 374 residencias
- Amenidades ≈3,760 m² en dos niveles
- microClaims EN:
- 26 stories · 374 residences
- ~40,459 sq.ft amenities across two floors
- usableCopyReference:
- 26 pisos · 374 residencias
- Amenidades ≈3,760 m² en dos niveles
- 26 stories · 374 residences
- ~40,459 sq.ft amenities across two floors
- BBQ exterior + bar con firepits
- Coworking lounge, biblioteca y café
- Gimnasio + yoga + zona outdoor training
- Pickleball en rooftop · valet y concierge 24/7
- Pet-friendly con estaciones y EV chargers
- Outdoor BBQ station + bar with firepits
- Coworking lounge, library and café
- Fitness + yoga + outdoor training zone
- ... 8 more in JSON
- needsRewrite:
- Piscina tipo resort y solárium
- Resort-style pool and sun deck
- Short-term rentals?
- Studios from ~US$380,880 per developer availability (9/25/2025).
- discardCopy:
- No se permiten. Mínimo 90 días por contrato.

### Highlights / Features
- projectHighlights EN:
- Not found.
- residences EN:
- Floor-to-ceiling windows; imported porcelain flooring
- Italkraft kitchens + Bosch; seamless quartz; Hansgrohe black
- Spa-style baths; washer/dryer in every residence
- amenities EN:
- Resort-style pool and sun deck
- Outdoor BBQ station + bar with firepits
- Coworking lounge, library and café
- Fitness + yoga + outdoor training zone
- Rooftop pickleball · 24/7 valet & concierge
- Pet-friendly with stations and EV chargers
- Italkraft kitchens + Bosch; seamless quartz; Hansgrohe black
- Spa-style baths; washer/dryer in every residence
- lifestyle EN:
- Italkraft kitchens + Bosch; seamless quartz; Hansgrohe black
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studios a 3 dormitorios · ver planos para m²
- unitMix EN:
- Studios to 3 bedrooms · see plans for m²/sq.ft
- bedrooms: studio, 3 bedrooms
- squareFootageRanges: Not detected.
- residence count: 374
- floors: 26

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 10% reserva
- 10% contrato
- 10% inicio de obra
- 10% top-off
- 60% cierre
- paymentPlan EN:
- 10% reservation
- 10% at contract
- 10% groundbreaking
- 10% top-off
- 60% at closing
- percentages: 10, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 2040 NE 163rd St, North Miami Beach, FL 33162
- mapQuery: 2040 NE 163rd St, North Miami Beach, FL 33162
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 3
- FAQ EN count: 3
- sensitive FAQ claims:
- ¿Rentas de corta estancia? -> tax_or_legal_claim, payment_plan_claim
- Short-term rentals? -> rental_policy_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/The%20William%20residences/2.jpg.webp
- https://ik.imagekit.io/devrodri/The%20William%20residences/3.jpg.webp
- https://ik.imagekit.io/devrodri/The%20William%20residences/4.jpg.webp
- https://ik.imagekit.io/devrodri/The%20William%20residences/5.jpg.webp
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_price, needs_current_verification

## Twenty Six & 2nd (Wynwood)

### Identification
- id: twenty-six-and-2nd
- name: Twenty Six & 2nd (Wynwood)
- slug: /proyectos/26-and-2nd
- sourceFilePath: src/data/projects/twenty-six-and-2nd.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: Wynwood
- neighborhood / area: Wynwood
- address: Not found.
- developer: Italian bathroom cabinetry by Italkraft and WaterWorks fixtures
- buildingType: boutique residential condominium candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 500000
- priceLabel: From USD 500,000
- delivery / completion: 2028 Q1
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: /images/projects/26-and-2nd.webp
- gallery count: 8
- ImageKit URL count: 8
- local image count: 1
- imageStatus: usable
- image flags:
- hero: /images/projects/26-and-2nd.webp [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/4n5uBSXg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/igHD_Nog.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/2g77yOBg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/x4N4sTUg.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/ZGPMqCzw.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/Twenty-six-kitchen.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/mF57DqjQ.jpeg [usable]
- gallery: https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/MkY7dPhg.jpeg [usable]

### Description / Copy
- shortDescription ES: Twenty Six & 2nd (Wynwood) | Wynwood | Studio | Deeded office + hosting 365d | Wellness y rooftop pool | Residencia + oficina (host 365d)
- shortDescription EN: Twenty Six & 2nd (Wynwood) | Wynwood | Studio | Deeded office + 365d hosting | Wellness & rooftop pool | Residence + office (host 365d)
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Deeded office + hosting 365d
- Wellness y rooftop pool
- Wynwood creative hub
- microClaims EN:
- Deeded office + 365d hosting
- Wellness & rooftop pool
- Wynwood creative hub
- usableCopyReference:
- Deeded office + hosting 365d
- Wynwood creative hub
- Deeded office + 365d hosting
- Residencia + oficina (host 365d)
- Cowork en Studios/Jr
- Boutique 8 pisos, 233 unidades
- Rooftop pool con cabañas y bar
- Glass‑house para yoga/meditación y circuito termal
- Residence + office (host 365d)
- Cowork for Studios/Jr
- 8‑story boutique, 233 residences
- Rooftop pool with cabanas and bar
- ... 7 more in JSON
- needsRewrite:
- Wellness y rooftop pool
- Wellness & rooftop pool
- 10% at advanced construction stage (estimated 2027, to complete 40%)
- 60% at Closing (financing available for foreign buyers, estimated 2028 delivery)
- Sin restricciones
- No rental restrictions
- discardCopy:
- Not found.

### Highlights / Features
- projectHighlights EN:
- 8‑story boutique, 233 residences
- Fully finished and furnished residences
- residences EN:
- Kitchens with top‑of‑the‑line appliance package (microwave, dishwasher, built‑in oven and refrigerator)
- Italian bathroom cabinetry by Italkraft and WaterWorks fixtures
- Washer and dryer in every residence
- amenities EN:
- Cowork for Studios/Jr
- Rooftop pool with cabanas and bar
- Glass‑house for yoga/meditation and thermal circuit
- Kitchens with top‑of‑the‑line appliance package (microwave, dishwasher, built‑in oven and refrigerator)
- lifestyle EN:
- Italian bathroom cabinetry by Italkraft and WaterWorks fixtures
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Studio
- Junior Suite
- Junior Suite + Den
- 1 Dormitorio
- 1 Dormitorio + Den
- unitMix EN:
- Studio
- Junior Suite
- Junior Suite + Den
- 1 Bedroom
- 1 Bedroom + Den
- bedrooms: studio, 1 bedroom
- squareFootageRanges: Not detected.
- residence count: 233
- floors: 8

### Payment Plan
- paymentPlanStatus: needs_current_verification
- paymentPlan ES:
- 10% a la firma de la reserva y contrato
- 10% a los 90 días (completa 20%)
- 10% en groundbreaking (estimado 2026, completa 30%)
- 10% en etapa avanzada de obra (estimado 2027, completa 40%)
- 60% al cierre (con financiación disponible para extranjeros, entrega estimada 2028)
- paymentPlan EN:
- 10% at reservation and contract signing
- 10% in 90 days (to complete 20%)
- 10% at groundbreaking (estimated 2026, to complete 30%)
- 10% at advanced construction stage (estimated 2027, to complete 40%)
- 60% at Closing (financing available for foreign buyers, estimated 2028 delivery)
- percentages: 10, 60
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: Not found.
- mapQuery: Twenty Six & 2nd (Wynwood) Wynwood Florida
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Wynwood

### FAQs
- FAQ ES count: 0
- FAQ EN count: 0
- sensitive FAQ claims:
- No sensitive FAQ claims detected.

### Risk Flags
- no_rental_restrictions_claim (high): No-rental-restrictions wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: visible_candidate
- reason: Core project data exists. Use only as a neutral candidate after verification and rewrite.
- canShowCard: true
- canCreateDetailPage: true
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- exact address
- coordinates
- images recommended for Jacquie:
- https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/4n5uBSXg.jpeg
- https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/igHD_Nog.jpeg
- https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/2g77yOBg.jpeg
- https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/x4N4sTUg.jpeg
- https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/ZGPMqCzw.jpeg
- https://ik.imagekit.io/devrodri/Twenty%20Six%20and%20Second/Twenty-six-kitchen.jpeg
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: no_rental_restrictions_claim, rental_policy_claim, payment_plan_claim, developer_copy, esteban_tone, needs_current_verification

## Viceroy Brickell - The Residences

### Identification
- id: viceroy-brickell-residences
- name: Viceroy Brickell - The Residences
- slug: /proyectos/viceroy-brickell-residences
- sourceFilePath: src/data/projects/viceroy-brickell-residences.ts
- isImportedInCatalog: true
- isHidden: false
- hiddenReason: Not hidden.
- city: 77 SE 5th Street, Miami, FL 33131
- neighborhood / area: Brickell
- address: 77 SE 5th Street, Miami, FL 33131
- developer: Viceroy Brickell - The Residences is developed by Related Group and GTIS Partners. Arquitectonica (architecture), Meyer Davis (interiors).
- buildingType: condo-hotel / hospitality-managed residences candidate; single-family homes / master-planned community candidate; residential condominium / preconstruction residences candidate

### Pricing / Delivery
- priceFromUsd: 609900
- priceLabel: From USD 609,900
- delivery / completion: 2026 Q1
- priceStatus: needs_current_verification
- deliveryStatus: needs_current_verification

### Images
- heroImage: https://ik.imagekit.io/devrodri/Viceroy/1.jpg
- gallery count: 8
- ImageKit URL count: 9
- local image count: 0
- imageStatus: usable
- image flags:
- hero: https://ik.imagekit.io/devrodri/Viceroy/1.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/2.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/3.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/4.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/1.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/6.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/7.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/8.jpg [branded]
- gallery: https://ik.imagekit.io/devrodri/Viceroy/9.jpg [branded]

### Description / Copy
- shortDescription ES: Viceroy Brickell - The Residences | 77 SE 5th Street, Miami, FL 33131 | Estudios | Desde US$609,900 | Ubicación One Brickell (Brickell) | Lobby vidriado con personal 24/7
- shortDescription EN: Viceroy Brickell - The Residences | 77 SE 5th Street, Miami, FL 33131 | Studios | From $609,900 | Prime One Brickell location | Glass-enclosed lobby with 24/7 staff
- longDescription ES: Not found.
- longDescription EN: Not found.
- microClaims ES:
- Desde US$609,900
- Ubicación One Brickell (Brickell)
- microClaims EN:
- From $609,900
- Prime One Brickell location
- usableCopyReference:
- Desde US$609,900
- Ubicación One Brickell (Brickell)
- From $609,900
- Lobby vidriado con personal 24/7
- Simulador multi-deporte (golf, soccer, basketball, F1)
- Sala de cine / screening room
- Summer kitchen + dining exterior cubierto
- Cancha de bocce
- Membresía de beach club (Grand Bay Club, Key Biscayne) (según material)
- Glass-enclosed lobby with 24/7 staff
- Multi-sport simulator (golf, soccer, basketball, F1)
- Movie theater / screening room
- ... 8 more in JSON
- needsRewrite:
- Prime One Brickell location
- Fitness + wellness con saunas y salas de tratamiento
- Deck estilo resort con piscina climatizada, spa exterior y cabanas
- Fitness + wellness center with saunas and treatment rooms
- Resort-style deck with heated pool, outdoor spa and cabanas
- 77 SE 5th Street, Miami, FL 33131.
- The minimum lease term is 30 days, with up to 12 leases per year. Short-term rentals (daily or weekly) are not permitted. The building is fully residential and does not operate as a condo-hotel.
- Viceroy Brickell - The Residences is developed by Related Group and GTIS Partners. Arquitectonica (architecture), Meyer Davis (interiors).
- discardCopy:
- El alquiler mínimo es de 30 días. Se permite alquilar hasta 12 veces por año. No se permiten alquileres de corto plazo (diarios o semanales). El proyecto es 100% residencial y no opera como condo-hotel.
- The minimum lease term is 30 days, with up to 12 leases per year. Short-term rentals (daily or weekly) are not permitted. The building is fully residential and does not operate as a condo-hotel.

### Highlights / Features
- projectHighlights EN:
- Not found.
- residences EN:
- Summer kitchen + covered outdoor dining
- amenities EN:
- Fitness + wellness center with saunas and treatment rooms
- Movie theater / screening room
- Resort-style deck with heated pool, outdoor spa and cabanas
- Summer kitchen + covered outdoor dining
- Bocce court
- Beach club membership (Grand Bay Club, Key Biscayne) (per material)
- lifestyle EN:
- Fitness + wellness center with saunas and treatment rooms
- Summer kitchen + covered outdoor dining
- Beach club membership (Grand Bay Club, Key Biscayne) (per material)
- location EN:
- Not found.

### Unit Mix / Residences
- unitMix ES:
- Estudios
- 1 dormitorio
- 2 dormitorios
- Penthouses (selectos)
- unitMix EN:
- Studios
- 1-bedroom
- 2-bedroom
- Select penthouses
- bedrooms: studio, 1 bedroom, 2 bedrooms
- squareFootageRanges: Not detected.
- residence count: Not found.
- floors: Not found.

### Payment Plan
- paymentPlanStatus: usable_with_verification_note
- paymentPlan ES:
- 20% al firmar el contrato.
- 10% a los 90 días.
- 70% al cierre.
- paymentPlan EN:
- 20% at contract.
- 10% at 90 days.
- 70% at closing.
- percentages: 10, 20, 70
- notes: Payment plan is source text and time-sensitive. Verify against current developer documents before use.

### Location / Map
- exactAddress: 77 SE 5th Street, Miami, FL 33131
- mapQuery: 77 SE 5th Street, Miami, FL 33131
- coordinates: lat=Not found, lng=Not found
- neighborhoodFallback: Not needed.

### FAQs
- FAQ ES count: 6
- FAQ EN count: 6
- sensitive FAQ claims:
- ¿Plan de pagos? -> payment_plan_claim
- ¿Cuál es la política de alquiler? -> rental_policy_claim, tax_or_legal_claim
- Payment plan? -> payment_plan_claim
- What is the rental policy? -> rental_policy_claim, tax_or_legal_claim

### Risk Flags
- short_term_rental_claim (high): Short-term rental / Airbnb / nightly wording found.
- rental_policy_claim (medium): Rental policy wording exists.
- payment_plan_claim (medium): Payment plan exists.
- tax_or_legal_claim (high): Tax, license, permit, approval, or eligibility wording found.
- developer_copy (medium): Developer/designer/brand or certification copy exists.
- esteban_tone (medium): Marketing/investment-style wording exists and should be rewritten.
- outdated_price (high): Price/availability date or latest price-list language found.
- brand_usage_review (medium): Branded project/name/assets require brand usage review.
- needs_current_verification (high): Current verification required for price, delivery, inventory, rental rules, payment plan, copy claims, and image rights.

### Publish Recommendation
- recommendedStatus: needs_review
- reason: Sensitive claims, weak/missing fields, or time-sensitive data require review before Jacquie import.
- canShowCard: false
- canCreateDetailPage: false
- shouldHideFromJacquie: false

### Jacquie Migration Recommendation
- fields safe to migrate:
- id
- name
- slug as reference only
- sourceFilePath
- city/neighborhood candidate
- hero/gallery image URLs as candidates after rights review
- unit mix labels as candidate facts
- amenity/highlight facts after rewrite
- fields to omit:
- tax, permit, license, eligibility language
- Esteban CTAs, hierarchy, visual narrative, investment-first positioning, and literal marketing copy
- fields requiring verification:
- priceFromUsd/current inventory
- delivery/completion
- payment plan
- rental policy
- developer/design/brand claims
- image usage rights
- coordinates
- images recommended for Jacquie:
- Not found.
- copy rewrite notes: Rewrite all public-facing copy in Jacquie tone. Treat repo copy as factual cues only; do not copy literal microclaims, CTAs, investment-first framing, or legal/rental/payment language.
- risk summary: short_term_rental_claim, rental_policy_claim, payment_plan_claim, tax_or_legal_claim, developer_copy, esteban_tone, outdated_price, brand_usage_review, needs_current_verification
