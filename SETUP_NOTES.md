# Jacquie Real Estate V2 - Setup Notes

## Scaffold location

The technical Next.js app was created inside:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2/web
```

The repository root remains the documentation and strategy workspace.

## Commands executed

Initial safety checks:

```bash
pwd
```

Confirmed working directory:

```text
/Users/lolo/PROYECTOS/jacquie-real-estate-v2
```

Checked whether `web` already existed:

```bash
if [ -e web ]; then find web -maxdepth 2 -mindepth 1 -print | sed -n '1,80p'; else echo 'web does not exist'; fi
```

Result:

```text
web does not exist
```

Created the Next.js app:

```bash
npx create-next-app@latest web \
  --yes \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm
```

Checked installed framework versions:

```bash
cd /Users/lolo/PROYECTOS/jacquie-real-estate-v2/web
npm list next react react-dom typescript tailwindcss eslint --depth=0
```

Installed `next-intl`:

```bash
npm install next-intl
```

Checked installed `next-intl` version:

```bash
npm list next-intl --depth=0
```

Created the initial i18n and route structure:

```bash
mkdir -p src/i18n/messages 'src/app/[locale]/property-management' 'src/app/[locale]/about' 'src/app/[locale]/contact'
```

Validation commands:

```bash
npm run lint
npm run build
```

## Installed versions

Actual installed versions:

```text
eslint@9.39.4
next-intl@4.12.0
next@16.2.6
react-dom@19.2.4
react@19.2.4
tailwindcss@4.3.0
typescript@5.9.3
```

## Validations

### Lint

Command:

```bash
npm run lint
```

Result:

```text
Passed with no errors.
```

### Build

Command:

```bash
npm run build
```

Result:

```text
Passed with no errors.
```

Build output routes:

```text
/
/_not-found
/[locale]
/[locale]/about
/[locale]/contact
/[locale]/property-management
```

## Next 16 proxy note

Next.js 16 reported that the `middleware` file convention is deprecated.

The scaffold now uses:

```text
web/src/proxy.ts
```

instead of:

```text
web/src/middleware.ts
```

This keeps the `next-intl` request interception aligned with Next 16.

## npm audit note

`npm install` reported moderate vulnerabilities.

No automatic fix was applied:

```text
npm audit fix was not run.
npm audit fix --force was not run.
```

This avoids unreviewed dependency changes during scaffold setup.

## Created structure inside /web

Current app route files:

```text
web/src/app/[locale]/about/page.tsx
web/src/app/[locale]/contact/page.tsx
web/src/app/[locale]/layout.tsx
web/src/app/[locale]/page.tsx
web/src/app/[locale]/property-management/page.tsx
web/src/app/favicon.ico
web/src/app/globals.css
web/src/app/layout.tsx
web/src/app/page.tsx
```

i18n files:

```text
web/src/i18n/messages/en.json
web/src/i18n/messages/es.json
web/src/i18n/messages/fr-CA.json
web/src/i18n/request.ts
web/src/i18n/routing.ts
```

Proxy file:

```text
web/src/proxy.ts
```

## Explicitly not created

The scaffold did not create:

```text
web/src/app/[locale]/listings
web/src/app/[locale]/precon
web/src/app/fr
web/src/app/fr-ca
web/src/app/fr-CA
```

No V1 components were copied into the new app.

## Current i18n decision

The final i18n routing decision is documented in:

```text
I18N_DECISION.md
```

Public routes:

```text
/es
/en
/fr-ca
```

Routing locales:

```text
es
en
fr-ca
```

Content locales:

```text
es
en
fr-CA
```

French Canada remains public as `/fr-ca`, not `/fr`.

`fr-ca` is used by `next-intl` routing and normalized to `fr-CA` before loading content messages.

FR-CA is a first-level website experience, but the site must not promise direct human communication in French unless Jacquie confirms it.

## Current visual tokens

The approved V2 visual direction uses a deep plum / aubergine palette:

```text
primary: #3B274A
accent: #A98BB8
surface: #F8F5FA
foreground: #2B2530
white: #FFFFFF
```

The palette should feel premium, editorial, minimal, and restrained.

Avoid green, navy, brown, bright violet, or decorative purple treatments.
