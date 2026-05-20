# PRECON_SECOND_BATCH_REVIEW.md

## Objective

Review whether Baccarat Residences and Cipriani Residences can move from `candidate` to `visible` in Jacquie V2.

This is a planning/review document only. Do not change `/web`, routes, components, UI, or the dataset based on this review until a separate implementation step is approved.

## Current Context

Current public Pre-construction page shows only:

- 2200 Brickell Residences
- ELLE Residences Miami
- Midtown Park

Current staging dataset keeps:

- Baccarat Residences as `candidate`
- Cipriani Residences as `candidate`

Both projects are potentially strong branded Brickell projects, but neither is ready to promote automatically. They need copy rewriting, image review, verification, and risk cleanup before becoming public.

## Baccarat Residences

### 1. Data Available

- Name: Baccarat Residences
- Current dataset slug: `baccarat`
- Source slug: `/proyectos/baccarat`
- Area / city: Brickell / Miami
- Price from: `USD 1,200,000`
- Price status: `needs_current_verification`
- Delivery: `2028`
- Delivery status: `needs_current_verification`
- Hero image:
  - `https://ik.imagekit.io/devrodri/Baccarat/Related-OneBrickell-03-Extrior_Grua-01.jpg`
- Gallery images:
  - Available in the raw export.
  - Current export marks image status as `needs_review`.
  - Recommended-for-Jacquie images are empty in the raw review.
- Address / map:
  - Exact address: not available.
  - Map query candidate: `Baccarat Residences Brickell Florida`.
- Description / copy:
  - Short ES/EN descriptions exist.
  - Long description is not available.
  - Copy includes branded/luxury/developer language.
- Highlights:
  - 75-story tower on the Miami River / Biscayne Bay.
  - 316 residences, 8 penthouses, 28 riverfront flats.
  - Interiors by Meyer Davis Studio.
  - Resort deck, pool, spa, fitness, hammam, screening room.
  - Beach Club membership / marina language exists in source.
- Amenities:
  - Grand Salon.
  - Resort pool.
  - Fitness by Anatomy.
  - Hammam spa.
  - Wine cellar / tasting.
  - Private screening room.
  - Beach Club and marina-related claims exist in source.
- Unit mix:
  - 1-4 bedroom residences and penthouses.
  - 316 flow-through residences + 8 penthouses.
- Payment plan:
  - Exists in source.
  - Includes 10% / 10% / 10% / 10% / 60% structure.
  - Includes financing language for foreign buyers in source.
  - Status: needs current verification.
- Risk flags:
  - rental_policy_claim
  - payment_plan_claim
  - tax_or_legal_claim
  - developer_copy
  - esteban_tone
  - weak_visual_quality
  - brand_usage_review
  - needs_current_verification

### 2. Risks

Baccarat is not ready to move directly to public UI.

Main risks:

- Price and delivery are not currently verified.
- Payment plan is time-sensitive and includes financing language that should not be copied.
- Rental policy copy exists and should not be used publicly without current verification.
- Beach Club, marina, water taxi, and brand claims need review.
- Raw image review marks image status as `needs_review`.
- Recommended-for-Jacquie image list is empty.
- Developer/luxury copy is strong and must be rewritten in Jacquie’s calmer advisory tone.
- Legal/tax claim flag exists.
- Exact address is missing.

### 3. What Could Be Shown

If verified and rewritten, Baccarat could support:

- Card:
  - project name;
  - Brickell / Miami;
  - price from, if current;
  - delivery, if current;
  - information-to-confirm badge;
  - CTA to WhatsApp.

- Detail page:
  - curated overview;
  - controlled gallery only if image rights/quality are approved;
  - selected highlights;
  - unit mix;
  - curated amenities;
  - map using neighborhood/project query if exact address remains unavailable;
  - payment plan only with verification note and only if current.

### 4. What To Omit Or Rewrite

Omit for now:

- rental policy;
- financing available for foreign buyers;
- tax/legal/eligibility language;
- Beach Club claims unless verified;
- private marina / water taxi claims unless verified;
- developer-style luxury language;
- Esteban phrasing;
- any urgency, exclusivity, or investment-first copy.

Rewrite:

- all public descriptions;
- highlights;
- amenities;
- payment plan labels if used;
- any branded claims into neutral, factual, consultive language.

### 5. Jacquie V2 Fit

Potential fit: strong.

Reason:
- Brickell location.
- Recognizable branded project.
- Premium visual/commercial relevance.
- Could help Jacquie offer a curated preconstruction path without making the site a portal.

Current readiness: not enough.

The project can fit Jacquie V2, but not before image and claim review.

### 6. Recommendation

Recommendation: `keep_candidate`.

Do not promote to `visible` until:

- current price is verified;
- delivery is verified;
- image set is approved for public use;
- brand/developer claims are rewritten;
- payment plan is confirmed or omitted;
- rental policy is omitted or verified;
- exact address or acceptable map query is confirmed.

## Cipriani Residences

### 1. Data Available

- Name: Cipriani Residences
- Current dataset slug: `cipriani`
- Source slug: `/proyectos/cipriani`
- Area / city: Brickell / Miami
- Price from: `USD 1,500,000`
- Price status: `needs_current_verification`
- Delivery: `2026`
- Delivery status: `needs_current_verification`
- Hero image:
  - Current staging dataset uses `https://ik.imagekit.io/devrodri/CIpriani/1-2.jpg`.
  - Raw export hero image references `/images/projects/cipriani.webp`, which should not be used directly without checking public availability.
- Gallery images:
  - Multiple ImageKit URLs exist.
  - Raw export marks image status as `usable`, but also reports doubtful images.
  - Recommended-for-Jacquie image list is empty.
- Address / map:
  - Exact address: not available.
  - Map query candidate: `Cipriani Residences Brickell Florida`.
- Description / copy:
  - Short ES/EN descriptions exist.
  - Long description is not available.
  - Copy includes branded/developer/service language.
- Highlights:
  - 80-story tower by Arquitectonica.
  - 1-4 bedroom residences and penthouses.
  - Interiors by 1508 London.
  - Resort deck, pools, spa.
  - Private Cipriani restaurant/service language exists in source.
- Amenities:
  - Lobby with concierge.
  - Private restaurant / catering language exists.
  - Pools, spa, fitness, golf simulator, pickleball.
  - Residents lounge, library, screening room.
  - Beauty/wellness and children’s spaces.
- Unit mix:
  - 1-4 bedroom residences and penthouses.
  - Penthouses with terraces/pools appears in source and should be verified before using.
- Payment plan:
  - Exists in source.
  - Includes 20% contract, 10% in 90 days, 10% at rooftop, 60% closing.
  - Includes financing language for foreign buyers in source.
  - Status: needs current verification.
- Risk flags:
  - rental_policy_claim
  - payment_plan_claim
  - tax_or_legal_claim
  - developer_copy
  - esteban_tone
  - outdated_price
  - brand_usage_review
  - needs_current_verification

### 2. Risks

Cipriani is closer than Baccarat visually, but still not ready to promote automatically.

Main risks:

- Price is flagged as outdated / needs current verification.
- Delivery is not currently verified.
- Payment plan includes time-sensitive and financing language.
- Rental policy copy exists and should not be shown.
- Brand/service claims require careful rewriting.
- Legal/tax risk flag exists.
- Exact address is missing.
- Some source copy is heavily developer-sales-oriented.
- Image list looks usable, but image rights/quality still need final review.

### 3. What Could Be Shown

If verified and rewritten, Cipriani could support:

- Card:
  - project name;
  - Brickell / Miami;
  - price from, if verified;
  - delivery, if verified;
  - information-to-confirm badge;
  - CTA to WhatsApp.

- Detail page:
  - short consultive overview;
  - gallery using ImageKit images if approved;
  - selected project facts;
  - unit mix;
  - curated amenity list;
  - location reference with map query;
  - payment plan only if verified and framed as information to confirm.

### 4. What To Omit Or Rewrite

Omit for now:

- rental policy;
- financing available for foreign buyers;
- legal/tax claims;
- pet policy claims;
- private service claims that sound guaranteed;
- “exclusive” language;
- developer-sales copy;
- Esteban phrasing;
- aggressive luxury language.

Rewrite:

- all hero/overview copy;
- highlights and amenities;
- payment plan labels if used;
- service/restaurant language into neutral fact-based copy.

### 5. Jacquie V2 Fit

Potential fit: strong.

Reason:
- Brickell location.
- Premium branded project.
- Clear enough basic data for a future curated card.
- Strong visual identity if images are approved.

Current readiness: medium, but not publish-ready.

Cipriani may be a good candidate for the next visible batch after verification and copy cleanup.

### 6. Recommendation

Recommendation: `keep_candidate`.

Secondary recommendation:
- Prioritize Cipriani before Baccarat if only one candidate is advanced first.

Conditions before promotion:

- verify current price;
- verify delivery;
- approve image set;
- rewrite all copy in Jacquie tone;
- omit rental policy;
- omit financing/legal language;
- confirm map query or address;
- decide whether payment plan is safe enough to show.

## Comparative Readiness

| Project | Commercial Fit | Data Completeness | Image Readiness | Claim Risk | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Baccarat Residences | Strong | Medium | Needs review | High | keep_candidate |
| Cipriani Residences | Strong | Medium | Better, still needs review | High | keep_candidate |

## What Could Be Implemented Later

If a second batch is approved later:

1. Promote at most 1-2 projects first.
2. Keep `/pre-construction` curated.
3. Do not activate search/filters yet unless total visible count reaches 9/12.
4. Add detail pages only for promoted visible projects.
5. Keep all candidate/needs_review projects hidden from routing and metadata.

## Final Recommendation

Do not promote Baccarat or Cipriani to `visible` yet.

Recommended next step:

1. Verify price and delivery with current official material.
2. Review/approve image rights and quality.
3. Rewrite safe public copy for both projects.
4. Decide whether payment plan should be shown or omitted.
5. Promote Cipriani first if one project is selected for a controlled second batch.
6. Keep Baccarat as candidate until images and brand/claim review are stronger.

Final status:

- Baccarat Residences: `keep_candidate`
- Cipriani Residences: `keep_candidate`
