# PRECON_VERIFICATION_CHECKLIST.md

## Objetivo

Definir exactamente que debe verificarse antes de que cualquiera de los 5 proyectos candidatos de pre-construction pueda pasar a seleccion final para Jacquie V2.

Este documento no autoriza implementacion. No se deben crear rutas, componentes, JSON ni copiar assets hasta completar verificacion.

## Estados de verificacion

- `verified`: dato confirmado con fuente actual y apto para publicacion.
- `needs_current_verification`: dato conocido desde el export, pero no publicable hasta confirmacion actual.
- `do_not_publish`: dato que no debe publicarse en Jacquie V2.

Regla base:

> Ningun dato critico de Precon se considera publicable hasta estar confirmado con una fuente actual.

## Candidatos bajo revision

1. 2200 Brickell Residences
2. Baccarat Residences
3. Cipriani Residences
4. ELLE Residences Miami
5. Midtown Park

## 1. Checklist general para publicar cualquier proyecto Precon

Antes de publicar cualquier proyecto:

- [ ] Nombre oficial confirmado.
- [ ] Proyecto activo/comercializable confirmado.
- [ ] Precio vigente confirmado si se muestra.
- [ ] Disponibilidad actual confirmada.
- [ ] Fecha de entrega confirmada.
- [ ] Politica de renta confirmada con fuente actual.
- [ ] Payment plan confirmado si se muestra.
- [ ] Developer info confirmado si se muestra.
- [ ] Ubicacion/zona confirmada y normalizada.
- [ ] Hero image aprobado para uso publico.
- [ ] Gallery images aprobadas para uso publico si se usan.
- [ ] Derechos/uso de imagenes confirmados.
- [ ] Claims comerciales revisados y reescritos para Jacquie.
- [ ] Rental/legal claims revisados con fuente oficial.
- [ ] Copy no copiado de Esteban.
- [ ] Copy no copiado literalmente del developer.
- [ ] Sin ROI, rentabilidad, leaseback, EB-5, Green Card, tax/legal claims ni promesas.
- [ ] Jacquie confirma que quiere asociarse comercialmente con el proyecto.
- [ ] Copy ES / EN / FR-CA revisado.
- [ ] FR-CA sin prometer comunicacion humana directa en frances.

## 2. Fuentes recomendadas de verificacion

Usar una o mas fuentes actuales:

- developer site oficial;
- broker package actualizado;
- fact sheet oficial;
- price sheet vigente;
- inventory sheet vigente;
- MLS / OneHome si aplica;
- material oficial actual del sales center;
- confirmacion interna de Jacquie;
- confirmacion de Miami Life Realty / brokerage si corresponde;
- confirmacion escrita sobre uso de imagenes.

No usar como unica fuente:

- repo de Esteban;
- copy heredado;
- capturas viejas;
- PDFs sin fecha actual;
- materiales con claims legales/comerciales sin fuente;
- metadata SEO previa;
- textos promocionales sin revision.

## 3. Reglas de publicacion

- No publicar precio sin verificacion vigente.
- No publicar entrega sin verificacion vigente.
- No publicar rental policy sin fuente actual.
- No publicar payment plan sin confirmacion.
- No publicar disponibilidad si no esta confirmada.
- No publicar developer info si no esta confirmada.
- No publicar claims de ROI, rentabilidad, appreciation, leaseback, return, EB-5, Green Card, tax benefits o garantias.
- No usar imagenes sin confirmar derecho/permiso.
- No usar screenshots como imagen publica.
- No copiar copy de Esteban.
- No copiar copy de developer sin reescritura.
- No usar CTAs tipo reserva, inversion inmediata o urgencia.
- No mostrar un proyecto como "recomendado" sin que Jacquie lo apruebe.
- Si un campo no esta verificado, se omite o el proyecto permanece fuera de la web.

## 4. Checklist especifico: 2200 Brickell Residences

Datos fuente desde el export:

- Name: `2200 Brickell Residences`
- Original slug: `/proyectos/2200-brickell`
- Source file: `src/data/projects/2200-brickell.ts`
- Zona: `Brickell`
- Price from: `US$830,000`
- Delivery: `2026`
- Rental policy: `90 dias`
- Hero image: `https://ik.imagekit.io/devrodri/2200%20Brickell/BTag7Isw.jpeg`
- Status en candidate review: `candidate`

| Campo | Dato fuente | Estado | Nota |
|---|---|---|---|
| Nombre oficial | 2200 Brickell Residences | `needs_current_verification` | Confirmar nombre oficial actual. |
| Proyecto activo/comercializable | Unknown | `needs_current_verification` | Confirmar inventario y estado comercial. |
| Precio vigente | US$830,000 | `needs_current_verification` | No publicar hasta confirmar price sheet actual. |
| Disponibilidad actual | Unknown | `needs_current_verification` | Confirmar si hay unidades disponibles. |
| Fecha de entrega | 2026 | `needs_current_verification` | Verificar si sigue vigente. |
| Politica de renta | 90 dias | `needs_current_verification` | Confirmar con fuente oficial. |
| Payment plan | Export menciona plan por hitos | `needs_current_verification` | No publicar sin confirmacion. |
| Developer info | Embedded en highlights/source | `needs_current_verification` | Normalizar y confirmar si se muestra. |
| Ubicacion/zona | Brickell | `needs_current_verification` | Confirmar zona y wording final. |
| Hero image | ImageKit URL | `needs_current_verification` | Confirmar derechos y calidad. |
| Gallery images | ImageKit URLs en export | `needs_current_verification` | Seleccionar solo si estan aprobadas. |
| Claims comerciales | WELL, rooftop, amenities | `needs_current_verification` | Reescribir en tono Jacquie y verificar. |
| Rental/legal claims | 90 dias | `needs_current_verification` | No usar sin fuente actual. |
| ROI/rentabilidad/leaseback/EB-5 | No detectado en export | `verified` | Mantener fuera de copy. |
| Fit con Jacquie | Posible candidato fuerte | `needs_current_verification` | Jacquie debe aprobar asociacion. |

Decision actual:

- Mantener como `candidate`.
- No publicar todavia.

## 5. Checklist especifico: Baccarat Residences

Datos fuente desde el export:

- Name: `Baccarat Residences`
- Original slug: `/proyectos/baccarat`
- Source file: `src/data/projects/baccarat.ts`
- Zona: `Brickell`
- Price from: `US$1,200,000`
- Delivery: `2028`
- Rental policy: `30-day minimum, up to 3 times per year`
- Hero image: `https://ik.imagekit.io/devrodri/Baccarat/Related-OneBrickell-03-Extrior_Grua-01.jpg`
- Status en candidate review: `candidate`

| Campo | Dato fuente | Estado | Nota |
|---|---|---|---|
| Nombre oficial | Baccarat Residences | `needs_current_verification` | Confirmar naming oficial. |
| Proyecto activo/comercializable | Unknown | `needs_current_verification` | Confirmar inventario actual. |
| Precio vigente | US$1,200,000 | `needs_current_verification` | No publicar sin price sheet vigente. |
| Disponibilidad actual | Unknown | `needs_current_verification` | Confirmar unidades disponibles. |
| Fecha de entrega | 2028 | `needs_current_verification` | Confirmar entrega actual. |
| Politica de renta | 30-day minimum, up to 3 times per year | `needs_current_verification` | Confirmar con documentos actuales. |
| Payment plan | Export menciona plan por hitos | `needs_current_verification` | No publicar sin confirmacion. |
| Developer info | Embedded en source | `needs_current_verification` | Verificar developer y equipos si se muestran. |
| Ubicacion/zona | Brickell | `needs_current_verification` | Confirmar zona final. |
| Hero image | ImageKit URL | `needs_current_verification` | Confirmar derechos y uso de marca. |
| Gallery images | ImageKit URLs en export | `needs_current_verification` | Revisar permisos y calidad. |
| Claims comerciales | marca, marina, beach club, amenities | `needs_current_verification` | Usar muy selectivamente y reescribir. |
| Rental/legal claims | 30-day minimum | `needs_current_verification` | No publicar sin fuente actual. |
| ROI/rentabilidad/leaseback/EB-5 | No detectado en export | `verified` | Mantener fuera de copy. |
| Fit con Jacquie | Candidato premium | `needs_current_verification` | Jacquie debe aprobar asociacion. |

Decision actual:

- Mantener como `candidate`.
- No publicar todavia.

## 6. Checklist especifico: Cipriani Residences

Datos fuente desde el export:

- Name: `Cipriani Residences`
- Original slug: `/proyectos/cipriani`
- Source file: `src/data/projects/cipriani.ts`
- Zona: `Brickell`
- Price from: `US$1,500,000`
- Delivery: `2026`
- Rental policy: `30-day minimum, up to twice per year`
- Hero image: `/images/projects/cipriani.webp`
- Status en candidate review: `candidate`

| Campo | Dato fuente | Estado | Nota |
|---|---|---|---|
| Nombre oficial | Cipriani Residences | `needs_current_verification` | Confirmar naming oficial. |
| Proyecto activo/comercializable | Unknown | `needs_current_verification` | Confirmar inventario actual. |
| Precio vigente | US$1,500,000 | `needs_current_verification` | No publicar sin price sheet vigente. |
| Disponibilidad actual | Unknown | `needs_current_verification` | Confirmar unidades disponibles. |
| Fecha de entrega | 2026 | `needs_current_verification` | Verificar si sigue vigente. |
| Politica de renta | 30-day minimum, up to twice per year | `needs_current_verification` | Confirmar con fuente actual. |
| Payment plan | Export menciona plan por hitos | `needs_current_verification` | No publicar sin confirmacion. |
| Developer info | Embedded en source | `needs_current_verification` | Verificar si se muestra. |
| Ubicacion/zona | Brickell | `needs_current_verification` | Confirmar zona final. |
| Hero image | Local path de Esteban | `needs_current_verification` | No copiar hasta revisar asset y permisos. |
| Gallery images | ImageKit URLs en export | `needs_current_verification` | Revisar permisos y calidad. |
| Claims comerciales | arquitectura, restaurant, amenities | `needs_current_verification` | Reescribir y verificar. |
| Rental/legal claims | 30-day minimum | `needs_current_verification` | No usar sin fuente actual. |
| ROI/rentabilidad/leaseback/EB-5 | No detectado en export | `verified` | Mantener fuera de copy. |
| Fit con Jacquie | Candidato premium | `needs_current_verification` | Jacquie debe aprobar asociacion. |

Decision actual:

- Mantener como `candidate`.
- No publicar todavia.
- Requiere auditoria de asset local antes que otros candidatos con ImageKit hero remoto.

## 7. Checklist especifico: ELLE Residences Miami

Datos fuente desde el export:

- Name: `ELLE Residences Miami`
- Original slug: `/proyectos/elle-residences`
- Source file: `src/data/projects/elle-residences-edgewater.ts`
- Zona: `Edgewater / Miami`
- Address source: `3618 NE 5th Ave, Miami, FL 33137`
- Price from: `US$590,000`
- Delivery: `2028`
- Rental policy: `Flexible rentals: option to use platforms or a fully managed rental program.`
- Hero image: `https://ik.imagekit.io/devrodri/Elle%20Residences/Elle%20Residences%20Miami%2008.jpg`
- Status en candidate review: `candidate`

| Campo | Dato fuente | Estado | Nota |
|---|---|---|---|
| Nombre oficial | ELLE Residences Miami | `needs_current_verification` | Confirmar naming oficial y marca. |
| Proyecto activo/comercializable | Unknown | `needs_current_verification` | Confirmar inventario actual. |
| Precio vigente | US$590,000 | `needs_current_verification` | No publicar sin price sheet vigente. |
| Disponibilidad actual | Unknown | `needs_current_verification` | Confirmar unidades disponibles. |
| Fecha de entrega | 2028 | `needs_current_verification` | Confirmar entrega actual. |
| Politica de renta | Flexible rentals / managed rental program | `needs_current_verification` | Alto cuidado: no presentar como promesa. |
| Payment plan | Export menciona plan por hitos | `needs_current_verification` | No publicar sin confirmacion. |
| Developer info | Embedded en source | `needs_current_verification` | Verificar si se muestra. |
| Ubicacion/zona | Edgewater / Miami | `needs_current_verification` | Normalizar; evitar address largo si no hace falta. |
| Hero image | ImageKit URL | `needs_current_verification` | Confirmar derechos y uso de marca. |
| Gallery images | ImageKit URLs en export | `needs_current_verification` | Revisar permisos y calidad. |
| Claims comerciales | branded amenities, programming, rooftop | `needs_current_verification` | Reescribir con tono sobrio. |
| Rental/legal claims | Flexible rentals / platforms | `needs_current_verification` | No usar sin fuente actual y wording aprobado. |
| ROI/rentabilidad/leaseback/EB-5 | No detectado en export | `verified` | Mantener fuera de copy. |
| Fit con Jacquie | Candidato para balancear seleccion | `needs_current_verification` | Jacquie debe aprobar asociacion. |

Decision actual:

- Mantener como `candidate`.
- No publicar todavia.
- Revisar rental policy con especial cuidado.

## 8. Checklist especifico: Midtown Park

Datos fuente desde el export:

- Name: `Midtown Park`
- Original slug: `/proyectos/midtown-park`
- Source file: `src/data/projects/midtown-park.ts`
- Zona: `Midtown / Miami`
- Address source: `3055 N Miami Ave, Miami, FL 33127`
- Price from: `US$700,000`
- Delivery: `2028`
- Rental policy: `30-day minimum, up to 4 times per year`
- Hero image: `https://ik.imagekit.io/devrodri/Midtown%20Park/ca7LMYAw.jpeg`
- Status en candidate review: `candidate`

| Campo | Dato fuente | Estado | Nota |
|---|---|---|---|
| Nombre oficial | Midtown Park | `needs_current_verification` | Confirmar naming oficial. |
| Proyecto activo/comercializable | Unknown | `needs_current_verification` | Confirmar inventario actual. |
| Precio vigente | US$700,000 | `needs_current_verification` | No publicar sin price sheet vigente. |
| Disponibilidad actual | Unknown | `needs_current_verification` | Confirmar unidades disponibles. |
| Fecha de entrega | 2028 | `needs_current_verification` | Confirmar entrega actual. |
| Politica de renta | 30-day minimum, up to 4 times per year | `needs_current_verification` | Confirmar con fuente actual. |
| Payment plan | Export menciona fechas estimadas | `needs_current_verification` | No publicar sin confirmacion. |
| Developer info | Embedded en source | `needs_current_verification` | Verificar si se muestra. |
| Ubicacion/zona | Midtown / Miami | `needs_current_verification` | Normalizar zona final. |
| Hero image | ImageKit URL | `needs_current_verification` | Confirmar derechos y calidad. |
| Gallery images | ImageKit URLs en export | `needs_current_verification` | Revisar permisos y calidad. |
| Claims comerciales | arquitectura, design, terraces | `needs_current_verification` | Reescribir y verificar. |
| Rental/legal claims | 30-day minimum | `needs_current_verification` | No publicar sin fuente actual. |
| ROI/rentabilidad/leaseback/EB-5 | No detectado en export | `verified` | Mantener fuera de copy. |
| Fit con Jacquie | Candidato para variedad de zona | `needs_current_verification` | Jacquie debe aprobar asociacion. |

Decision actual:

- Mantener como `candidate`.
- No publicar todavia.

## 9. Que hacer si un proyecto tiene datos incompletos

Si un proyecto tiene campos criticos incompletos:

- mantenerlo como `candidate` o `needs review`;
- no mostrarlo en Home;
- no mostrarlo en `/pre-construction`;
- no usarlo como placeholder;
- no crear card visual con datos faltantes;
- no publicar precio parcial;
- no publicar entrega estimada sin fuente actual;
- no publicar rental policy dudosa;
- no usar imagenes no aprobadas;
- no compensar falta de datos con copy promocional.

Campos criticos minimos para pasar a seleccion final:

- nombre oficial;
- proyecto activo/comercializable;
- precio vigente o decision explicita de ocultar precio;
- disponibilidad actual;
- entrega actual o decision explicita de ocultarla;
- rental policy verificada o decision explicita de no mostrarla;
- hero image aprobado;
- derechos de imagen confirmados;
- Jacquie aprueba asociacion comercial;
- copy base sin claims sensibles.

## 10. Decision recomendada

No implementar Precon hasta que al menos 3 proyectos tengan campos criticos en `verified`.

Antes de implementar:

1. Verificar los 5 candidatos.
2. Marcar campos criticos como `verified`, `needs_current_verification` o `do_not_publish`.
3. Seleccionar maximo 3 proyectos para primera version.
4. Crear `PRECON_SELECTION_BRIEF.md`.
5. Decidir si Precon entra como:
   - pagina secundaria `/[locale]/pre-construction`;
   - bloque muy liviano en Home;
   - o se mantiene fuera hasta mas adelante.

Estado actual:

- Ningun candidato esta listo para publicacion.
- Los 5 candidatos siguen en `needs_current_verification`.
- No usar placeholders.
- No crear rutas.
- No copiar assets.
