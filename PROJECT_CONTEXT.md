# PROJECT_CONTEXT.md

# Jacquie Real Estate V2 — Project Context

## Purpose of this document

This document exists to give full strategic and historical context to the Jacquie Real Estate V2 project.

Status:

- This is a current project context document, not only a historical note.
- Historical V1 learnings remain included because they explain what V2 must avoid.
- Current decisions in this document should stay aligned with the approved V2 strategy and implementation briefs.

The goal is to prevent:
- repeating mistakes from V1,
- inheriting conceptual structure from Esteban’s website,
- building UI before defining product direction,
- or letting implementation tools make product decisions.

This file should be read before:
- strategy work,
- architecture decisions,
- UI planning,
- implementation prompts,
- or code generation.

---

# What this project is

Jacquie Real Estate V2 is a professional real estate website for Jacquie Zarate, focused on:

- Property Management
- Short-term rentals
- International buyers/investors
- Real estate advisory in Miami
- Trust-based lead conversion

This is NOT:
- a real estate marketplace,
- a Zillow-style portal,
- a property search engine,
- or a generic realtor site.

The website exists primarily to:
- generate trust,
- reduce uncertainty,
- and convert users into direct conversation (mainly WhatsApp).

---

# Core business focus

Priority order of the business:

1. Property Management
2. Listings (resale)
3. Pre-construction

Listings and pre-construction exist as support and credibility.
They are NOT the main product.

The core commercial value today is:
- management,
- guidance,
- trust,
- and local presence in Miami.

---

# Main conversion goal

Primary CTA:
- WhatsApp

Secondary CTA:
- Contact form

The website is designed to:
- generate conversation,
- not close transactions directly inside the site.

---

# Who is Jacquie

Jacquie Zarate is a Miami real estate advisor / Realtor context focused on:
- personalized attention,
- international clients,
- short-term rental management,
- and trust-based advisory.

Key differentiators:
- direct communication,
- end-to-end follow-up,
- personalized check-ins,
- careful guest selection,
- property care,
- local Miami presence.

Core positioning:
> “Your trusted person in Miami.”

Languages:

- Spanish: first-level website language; confirmed human communication.
- English: first-level website language; confirmed human communication.
- FR-CA: first-level website language for the MVP digital experience.

Important FR-CA rule:

- The website must provide a complete FR-CA experience.
- Do not promise direct human communication in French unless Jacquie confirms it.
- A francophone user should not feel that FR-CA is partial, secondary, or added later.

Realtor wording:

- Confirm whether Jacquie can formally use `Realtor®` in final copy.
- Until confirmed, avoid depending on the registered mark in critical copy.
- Use real estate advisor / Florida real estate professional wording carefully where needed.

Market focus:
- Miami
- Sunny Isles
- South Florida

Main client profile:
- LATAM investors,
- remote buyers,
- first-time investors,
- people who need clarity and guidance.

---

# What happened in V1

V1 started from a fork / conceptual base too close to another project:

## Esteban Firpo

Esteban’s website focused heavily on:
- pre-construction,
- investment metrics,
- catalog structure,
- financing,
- project-first navigation.

That structure influenced V1 too much.

Even after many improvements, V1 still suffered from:
- conceptual inheritance,
- structural similarity,
- and narrative contamination.

Problems detected in V1:
- too many equal-priority sections,
- unclear hierarchy,
- Home behaving too much like a portal,
- trust appearing too late,
- Property Management not clearly dominant,
- too much exploration too early,
- Jacquie not feeling distinct enough.

---

# What we learned from V1

The project taught several critical lessons.

## Trust comes before exploration

Users need:
- confidence,
- guidance,
- and human reassurance
before exploring listings or projects.

## Jacquie must appear early

The brand is personal.
The person matters more than the inventory.

## Property Management is the core

This is the strongest commercial differentiator.
It should dominate the narrative hierarchy.

## Listings are support

Listings help:
- tangibility,
- credibility,
- exploration,
but should not behave like the main product.

## Pre-construction is secondary

It exists because of the brokerage context,
but should never dominate the Home or positioning.

## WhatsApp is the real conversion path

The site is a trust funnel toward conversation.

---

# Product direction for V2

V2 is NOT:
- a redesign of V1,
- nor an iteration of Esteban’s structure.

V2 should feel:
- more personal,
- more editorial,
- more premium,
- more focused,
- and more emotionally aligned with Jacquie.

The experience should communicate:
- calm,
- trust,
- clarity,
- guidance,
- and local support.

Not:
- inventory overload,
- technical investment language,
- or aggressive sales pressure.

---

# Desired visual direction

The site should feel:
- premium,
- modern,
- calm,
- architectural,
- editorial,
- minimal.

NOT:
- corporate,
- flashy,
- portal-like,
- overloaded,
- or generic realtor template.

Visual references:
- Apple
- Stripe editorial sections
- hospitality luxury
- boutique architecture websites

---

# Brand palette

Current V2 palette:

Primary:
#3B274A

Accent:
#A98BB8

Surface:
#F8F5FA

Foreground:
#2B2530

White:
#FFFFFF

Visual direction:

- Deep plum / aubergine.
- Premium, editorial, minimal, restrained.
- Avoid green, navy, brown, bright violet, or decorative purple treatments.

---

# Home philosophy (VERY IMPORTANT)

The Home is:

> a trust-led landing with secondary exploration.

It is NOT:
- a portal,
- a hub,
- or a catalog-first experience.

Correct narrative order should be:

1. Trust
2. Jacquie
3. Property Management
4. How it works
5. Conversion
6. Listings / Precon support

---

# Working model

There are 3 roles in this project.

## 1. User (Rodrigo)
Defines:
- vision,
- product direction,
- business priorities,
- strategic criteria.

## 2. Codex / ChatGPT
Responsible for:
- analysis,
- hierarchy,
- product reasoning,
- narrative structure,
- implementation planning,
- prompt hardening,
- technical review.

Should:
- challenge weak assumptions,
- detect ambiguity,
- avoid product drift.

Should NOT:
- blindly implement,
- improvise hierarchy,
- invent product decisions.

## 3. Cursor
Cursor executes.

Cursor is NOT:
- product owner,
- designer,
- strategist,
- or decision-maker.

Cursor receives:
- precise prompts,
- exact scope,
- exact file targets,
- exact implementation constraints.

---

# Critical implementation philosophy

Implementation must always follow:
1. strategy,
2. narrative,
3. hierarchy,
4. then UI,
5. then code.

Never:
- code first,
- architecture first,
- or refactor first.

---

# Current V2 status

At the moment:
- V2 is a new technical project inside `/web`.
- Header, Hero, Jacquie Trust Section, Property Management Section, Process Section, Mid Conversion CTA, and Listings support placeholder have first implementations.
- The strategic documents remain the source of truth for sequencing and guardrails.

Current Home decisions:

- Trust Proof is not a separate Home section.
- Trust is concentrated in JacquieTrustSection and reinforced naturally in Property Management.
- Process remains independent for now because its first version was visually accepted.
- Process may be compacted later if the Home feels too long.
- Mid Conversion CTA stays short and uses one WhatsApp CTA only.
- Precon is not implemented yet and requires `PRECON_SUPPORT_SECTION_BRIEF.md` before any implementation.
- Final CTA is not implemented yet and requires `FINAL_CTA_BRIEF.md` before any implementation.

Header language decision:

- In Spanish UI, use `Gestión de propiedades`, not `Property Management`.
- EN can use `Property Management`.
- FR-CA can use `Gestion de propriétés` or the final accented FR-CA equivalent approved for UI.

---

# Final reminder

The goal is not:
> “make a better version of Esteban.”

The goal is:
> build the correct digital identity for Jacquie.

That requires:
- trust,
- clarity,
- restraint,
- and strategic focus.

Everything in V2 should be evaluated through that lens.
