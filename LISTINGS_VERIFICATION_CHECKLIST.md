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

| Campo | Dato conocido | Estado | Nota |
|---|---|---|---|
| Precio vigente | Unknown | `needs_current_verification` | No publicar precio hasta confirmacion actual. |
| Precio anterior | USD 489,000 | `needs_current_verification` | Tratar como historico, no como vigente. |
| Price reduced | Unknown | `needs_current_verification` | Solo mostrar si precio anterior y actual estan confirmados. |
| Disponibilidad | Unknown | `needs_current_verification` | Confirmar antes de cualquier preview. |
| Estado MLS | Unknown | `needs_current_verification` | Confirmar si sigue activo, pendiente, cerrado, etc. |
| MLS number | A11955684 | `needs_current_verification` | Confirmar contra fuente actual. |
| Direccion | 3801 S Ocean Dr #2C, Hollywood, FL 33019 | `needs_current_verification` | Confirmar formato final. |
| Type | Condominium | `needs_current_verification` | Confirmar. |
| Beds | 2 | `needs_current_verification` | Confirmar. |
| Baths | 2 | `needs_current_verification` | Confirmar. |
| Size | 874 sqft | `needs_current_verification` | Confirmar. |
| Year built | 1969 | `needs_current_verification` | Confirmar si se muestra. |
| HOA | USD 1,038/month | `needs_current_verification` | Confirmar vigente antes de publicar. |
| View / location | Partial ocean / Oceanfront | `needs_current_verification` | Confirmar wording exacto. |
| Rental policy | Daily rentals allowed | `needs_current_verification` | Confirmar y revisar matices antes de publicar. |
| Parking | One Space, Valet | `needs_current_verification` | Confirmar. |
| Pets | Conditional, Yes | `needs_current_verification` | Confirmar. |
| Building name | The Tides Hollywood Beach | `needs_current_verification` | Confirmar. |
| Atribucion | Jacquie / Miami Life Realty | `needs_current_verification` | Limpiar cualquier referencia a Esteban. |
| Imagenes | ImageKit / fuente pendiente | `needs_current_verification` | Confirmar permiso y seleccionar imagenes. |
| Contacto Esteban | No publicable | `do_not_publish` | No usar en UI, metadata visible ni contacto. |

## 3. Checklist especifico: 17801 N Bay Rd #505

Listing:

- Address: `17801 N Bay Rd #505, Sunny Isles Beach, FL 33160`
- Building: `Le Frontenac`
- MLS known: `A11883428`

| Campo | Dato conocido | Estado | Nota |
|---|---|---|---|
| Precio vigente | Reportado como USD 455,000 en OneHome/MLS | `needs_current_verification` | Confirmar fuente actual antes de publicar. |
| Precio anterior | USD 465,000 | `needs_current_verification` | Confirmar si se quiere mostrar `Previously / Antes / Avant`. |
| Price reduced | Posible reduccion USD 10,000 | `needs_current_verification` | Solo publicar si ambos precios estan confirmados. |
| Disponibilidad | Unknown | `needs_current_verification` | Confirmar antes de cualquier preview. |
| Estado MLS | Unknown | `needs_current_verification` | Confirmar si sigue activo, pendiente, cerrado, etc. |
| MLS number | A11883428 | `needs_current_verification` | Confirmar contra fuente actual. |
| Direccion | 17801 N Bay Rd #505, Sunny Isles Beach, FL 33160 | `needs_current_verification` | Confirmar formato final. |
| Type | Condominium | `needs_current_verification` | Confirmar. |
| Beds | 2 | `needs_current_verification` | Confirmar. |
| Baths | 2 | `needs_current_verification` | Confirmar. |
| Size | 1,330 sqft | `needs_current_verification` | Confirmar. |
| Year built | 1991 | `needs_current_verification` | Confirmar si se muestra. |
| HOA | USD 755/month | `needs_current_verification` | Confirmar vigente antes de publicar. |
| View | Bay view | `needs_current_verification` | Confirmar wording exacto. |
| Furnished | Yes | `needs_current_verification` | Confirmar si se muestra. |
| Rental policy | Unknown | `needs_current_verification` | No inferir short-term rental policy. |
| Parking | Guest, One Space | `needs_current_verification` | Confirmar. |
| Pets | No | `needs_current_verification` | Confirmar. |
| Building name | Le Frontenac | `needs_current_verification` | Confirmar. |
| Atribucion | Jacquie / Miami Life Realty | `needs_current_verification` | Limpiar cualquier referencia a Esteban. |
| Imagenes | ImageKit / fuente pendiente | `needs_current_verification` | Confirmar permiso y seleccionar imagenes. |
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

Decision recomendada ahora:

- Mantener listings fuera de Home por ahora.
- No crear `/listings` todavia.
- No crear detalle por listing todavia.
- Preparar 2 previews reales solo cuando los campos criticos esten en `verified`.

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

Si cualquiera de esos campos queda en `needs_current_verification`, el listing puede seguir en inventario interno, pero no debe publicarse como preview definitiva.
