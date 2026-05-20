# LISTINGS_VERIFICATION_CHECKLIST.md

## Objetivo

Preparar la verificacion final de los 2 listings reales de Jacquie antes de decidir si entran como previews curadas en Home.

Regla base:

> Ningun dato critico del listing se considera publicable hasta estar confirmado con una fuente actual.

## Estados de verificacion

- `verified`: dato confirmado y publicable.
- `needs_current_verification`: dato conocido, historico o probable, pero requiere confirmacion actual antes de publicarse.
- `do_not_publish`: dato que no debe mostrarse en UI.

## 1. Checklist general para publicar un listing

Antes de publicar cualquier listing:

- [ ] Precio vigente confirmado.
- [ ] Precio anterior confirmado si se muestra reduccion.
- [ ] Disponibilidad actual confirmada.
- [ ] Estado MLS actual confirmado.
- [ ] MLS number confirmado.
- [ ] Direccion confirmada.
- [ ] Beds / baths / sqft confirmados.
- [ ] HOA confirmado si se muestra.
- [ ] Rental policy confirmada si se muestra.
- [ ] Parking confirmado si se muestra.
- [ ] Pets confirmado si se muestra.
- [ ] Building name confirmado si se muestra.
- [ ] Imagenes aprobadas para uso publico.
- [ ] Atribucion limpia a Jacquie / Miami Life Realty.
- [ ] Sin nombre, email, telefono, branding o contacto de Esteban.
- [ ] Sin claims de ROI, rentabilidad, ocupacion garantizada o metricas no verificadas.
- [ ] Copy revisado en ES / EN / FR-CA si entra a UI multilingue.

## 2. Checklist especifico: 3801 S Ocean Dr #2C

Listing:

- Address: `3801 S Ocean Dr #2C, Hollywood, FL 33019`
- Building: `The Tides Hollywood Beach`
- MLS known: `A11955684`
- Current source reviewed: `OneHome PDF generated May 19, 2026 at 9:07 p.m.`

| Campo | Dato conocido | Estado | Nota |
|---|---|---|---|
| Precio vigente | USD 459,000 | `verified` | PDF actual muestra `List Price: $459,000`. |
| Precio anterior | USD 489,000 | `needs_current_verification` | Historico previo fuera del PDF actual; no mostrar como `Antes`. |
| Price reduced | Unknown | `do_not_publish` | El PDF actual no confirma precio anterior ni reduccion. |
| Disponibilidad | Active | `verified` | Confirmed active via current MLS share. PDF actual muestra `Status: Active`. |
| Estado MLS | Active | `verified` | Confirmed active via current MLS share. PDF actual muestra `Status: Active`. |
| MLS number | A11955684 | `verified` | Visible en watermark de imagen del PDF y dato conocido confirmado. |
| Direccion | 3801 S Ocean Dr #2C, Hollywood, FL 33019 | `verified` | Confirmada por nombre del PDF actual y listing esperado. |
| Type | Condominium | `verified` | PDF actual muestra `Type: Condominium`. |
| Beds | 2 | `verified` | PDF actual muestra `Beds: 2`. |
| Baths | 2 | `verified` | PDF actual muestra `2 full`. |
| Size | 874 sqft | `verified` | PDF actual muestra `Size: 874 sqft`. |
| Year built | 1969 | `verified` | PDF actual muestra `Year Built: 1969`. |
| HOA | USD 1,038/month | `verified` | PDF actual muestra `HOA Fee: $1,038 Monthly`. |
| View / location | Oceanfront building / Ocean Access / OceanFront | `verified` | PDF actual muestra waterfront details; UI should keep wording neutral. |
| Rental policy | OK To Lease; public remarks mention daily rentals | `verified` | Do not publish income language or aggressive rental claims. |
| Parking | One Space, Valet | `verified` | PDF actual muestra garage/parking features. |
| Pets | Conditional, Yes | `verified` | PDF actual muestra `Pets Allowed: Conditional, Yes`. |
| Building name | The Tides Hollywood Beach | `verified` | PDF actual muestra subdivision `TIDES ON HOLLYWOOD BEACH`. |
| Atribucion | Jacquie / Miami Life Realty for UI | `verified` | PDF trae Esteban como agente de origen; UI debe limpiarlo por completo. |
| Imagenes | Usable image extracted from current PDF | `verified` | Imagen principal local sin referencia visible a Esteban. |
| Contacto Esteban | No publicable | `do_not_publish` | No usar en UI, metadata visible ni contacto. |

## 3. Checklist especifico: 17801 N Bay Rd #505

Listing:

- Address: `17801 N Bay Rd #505, Sunny Isles Beach, FL 33160`
- Building: `Le Frontenac`
- MLS known: `A11883428`
- Current source reviewed: `OneHome PDF generated May 18, 2026 at 10:49 a.m.`

| Campo | Dato conocido | Estado | Nota |
|---|---|---|---|
| Precio vigente | USD 455,000 | `verified` | PDF actual muestra `List Price: $455,000`. |
| Precio anterior | USD 465,000 | `needs_current_verification` | Historico previo fuera del PDF actual; no mostrar como `Previously / Antes / Avant`. |
| Price reduced | Posible reduccion USD 10,000 | `do_not_publish` | El PDF actual no confirma precio anterior; no mostrar reduccion. |
| Disponibilidad | Active | `verified` | Confirmed active via current MLS share. PDF actual muestra `Status: Active`. |
| Estado MLS | Active | `verified` | Confirmed active via current MLS share. PDF actual muestra `Status: Active`. |
| MLS number | A11883428 | `verified` | Visible en watermark de imagen del PDF y dato conocido confirmado. |
| Direccion | 17801 N Bay Rd #505, Sunny Isles Beach, FL 33160 | `verified` | Confirmada por nombre del PDF actual y listing esperado. |
| Type | Condominium | `verified` | PDF actual muestra `Type: Condominium`. |
| Beds | 2 | `verified` | PDF actual muestra `Beds: 2`. |
| Baths | 2 | `verified` | PDF actual muestra `2 full`. |
| Size | 1,330 sqft | `verified` | PDF actual muestra `Size: 1,330 sqft`. |
| Year built | 1991 | `verified` | PDF actual muestra `Year Built: 1991`. |
| HOA | USD 755/month | `verified` | PDF actual muestra `HOA Fee: $755 Monthly`. |
| View | Bay view | `verified` | PDF actual muestra `View: Bay`. |
| Furnished | Yes | `verified` | Public remarks state offered fully furnished. |
| Rental policy | Lease considered yes / no restrictions, OK to lease | `verified` | Do not publish as STR or income claim. |
| Parking | Guest, One Space | `verified` | PDF actual muestra garage/parking features. |
| Pets | No | `verified` | PDF actual muestra `Pets Allowed: No`. |
| Building name | Le Frontenac | `verified` | PDF actual muestra subdivision `LE FRONTENAC CONDO`. |
| Atribucion | Jacquie / Miami Life Realty for UI | `verified` | PDF trae Esteban como agente de origen; UI debe limpiarlo por completo. |
| Imagenes | Usable image extracted from current PDF | `verified` | Imagen principal local sin referencia visible a Esteban. |
| Contacto Esteban | No publicable | `do_not_publish` | No usar en UI, metadata visible ni contacto. |

## 4. Reglas de publicacion

- No mostrar precio si no esta confirmado como vigente.
- No mostrar `price reduced`, `Precio reducido` o `Prix réduit` si precio anterior y precio actual no estan confirmados.
- No mostrar `Previously`, `Antes` o `Avant` si el precio anterior no esta confirmado.
- No mostrar disponibilidad si no esta confirmada.
- No mostrar estado MLS si no esta confirmado.
- No mostrar rental policy si no esta confirmada.
- No mostrar HOA si no esta confirmado vigente.
- No mostrar claims de ROI, rentabilidad, ocupacion, ingresos garantizados o metricas no verificadas.
- No usar lenguaje tipo `hot deal`, `best opportunity`, `exclusive`, `guaranteed`, `alta rentabilidad`.
- No usar Esteban en UI, contacto, atribucion, metadata visible, captions ni imagenes.
- Si una fuente trae datos de Esteban, tratarlo como artefacto de origen y limpiar antes de publicar.

## 5. Que pedir o revisar antes de usar estos listings en Home

Pedir o revisar:

- estado actual de cada listing en MLS / OneHome;
- precio vigente;
- historial de precio si se quiere mencionar reduccion;
- confirmacion de disponibilidad;
- confirmacion de MLS number;
- capturas o export actual con fecha;
- imagenes aprobadas para uso publico;
- URLs finales de imagenes;
- permiso/criterio de uso de imagenes;
- atribucion correcta a Jacquie / Miami Life Realty;
- confirmacion de que no debe aparecer Esteban;
- datos que Jacquie quiere destacar o evitar;
- si se puede mencionar daily rentals para The Tides;
- si Le Frontenac tiene alguna politica de renta relevante o si no debe mencionarse.

## 6. Decision sugerida

Decision actual despues de revisar PDFs vigentes:

- Crear `/[locale]/listings` como pagina secundaria curada de 2 previews reales.
- Mantener listings fuera de Home por ahora.
- No agregar Listings al Header todavia.
- Agregar Listings solo al Footer como exploracion secundaria.
- No crear detalle por listing todavia.
- No crear filtros, search, mapa ni paginacion.
- No mostrar price reduction porque los precios anteriores no estan confirmados dentro de los PDFs actuales.
- No mostrar claims de renta, ROI, ocupacion, disponibilidad garantizada ni urgencia comercial.

Campos criticos para habilitar una preview:

- precio vigente o decision explicita de no mostrar precio;
- disponibilidad;
- estado MLS;
- MLS number;
- direccion;
- beds / baths / sqft;
- building name;
- imagen principal aprobada;
- atribucion limpia sin Esteban;
- copy revisado sin claims no confirmados.

Los campos criticos quedaron `verified` con los PDFs actuales para una preview curada. Los campos no criticos que requieran matices deben omitirse de UI o mantenerse como datos internos.
