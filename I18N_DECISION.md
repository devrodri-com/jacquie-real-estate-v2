# I18N Decision

## Decision status

Approved.

## Public routes

The V2 MVP uses these public language routes:

```text
/es
/en
/fr-ca
```

There is no valid public `/fr` locale route.

## Routing locales

The locales used by `next-intl` routing are:

```text
es
en
fr-ca
```

`fr-ca` is intentionally lower-case at the routing layer because it maps directly to the public URL segment `/fr-ca`.

## Content locales

The canonical content locales are:

```text
es
en
fr-CA
```

French Canada content is stored and loaded as `fr-CA`, including:

```text
web/src/i18n/messages/fr-CA.json
```

## Reason

With `next-intl@4.12.0`, Next.js 16, and `web/src/proxy.ts`, using `fr-CA` directly as a routing locale while exposing it publicly as `/fr-ca` caused a redirect loop.

The loop appeared when `next-intl` tried to reconcile the uppercase internal locale casing with the lower-case public route segment.

## Implementation decision

Use `fr-ca` for public routing and normalize it to `fr-CA` before loading content messages.

The explicit mapping is:

```text
toContentLocale("es") -> "es"
toContentLocale("en") -> "en"
toContentLocale("fr-ca") -> "fr-CA"
```

The type split is:

```text
RouteLocale = "es" | "en" | "fr-ca"
ContentLocale = "es" | "en" | "fr-CA"
```

This keeps the public URL strategy clean while preserving the canonical content locale for French Canada.

## Validations

Validated locally after implementation:

```text
/es -> 200
/en -> 200
/fr-ca -> 200
/fr -> 404
/fr-ca/property-management -> 200
```

Project checks:

```text
npm run lint -> OK
npm run build -> OK
```

## Product guardrail

ES, EN, and FR-CA are first-level website experiences for the MVP.

Jacquie is confirmed to communicate directly in Spanish and English. The website must not claim direct human communication in French unless Jacquie confirms it.
