# BACKLOG.md

## Mobile Header Menu

Status: implemented in first version

Problem:

- On mobile, the Header currently shows only brand + language switcher.
- Users do not have access to the main pages from the mobile Header.

Future requirement:

- Add a hamburger button.
- Open a simple dropdown menu.
- Include links:
  - ES: `Gestión de propiedades`, `Sobre Jacquie`, `Contacto`
  - EN: `Property Management`, `About`, `Contact`
  - FR-CA: `Gestion de propriétés`, `À propos`, `Contact`
- Keep the ES / EN / FR-CA language switcher.
- Do not add Listings.
- Do not add Precon.
- Do not add an extra CTA yet.

Implementation notes:

- Scope should stay limited to Header behavior and mobile navigation.
- Desktop Header should remain unchanged unless a future review says otherwise.
- The menu should preserve the current locale in links.
- The language switcher should continue preserving the current path.

## Technical Debt: Playwright / Lockfiles

Status: pending

Problem:

- Playwright was installed from the documentary workspace/root context during audit setup.
- Next build now warns about multiple lockfiles and infers a workspace root from `/Users/lolo/package-lock.json`.
- Build is still passing, so this does not block current work.

Future requirement:

- Review whether Playwright should live in `/web` or in a separate root-level tooling setup.
- Review root vs `/web` lockfile ownership.
- Avoid changing lockfiles until this becomes necessary or the project packaging strategy is clarified.
