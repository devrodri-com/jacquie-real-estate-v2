# PRECON_DETAIL_AND_EXPANSION_BRIEF.md

## Objetivo

Definir dos lineas de trabajo separadas para Pre-construction en Jacquie V2:

1. paginas detalle V1 para los 3 proyectos visibles actuales;
2. plan de expansion/importacion futura del resto de proyectos desde el repo de Esteban.

Este documento no autoriza implementacion. No se deben crear rutas, componentes, JSON, datasets nuevos ni copiar assets hasta una instruccion posterior.

Precon debe seguir siendo soporte secundario dentro de Jacquie V2. La web sigue siendo trust-led, WhatsApp-first y con Property Management como prioridad comercial.

---

# Parte A - Precon Detail Pages V1

## Proyectos iniciales

Crear detalle solo para los 3 proyectos ya visibles en `/pre-construction`:

- 2200 Brickell Residences
- ELLE Residences Miami
- Midtown Park

Rutas futuras esperadas:

- `/[locale]/pre-construction/2200-brickell-residences`
- `/[locale]/pre-construction/elle-residences-miami`
- `/[locale]/pre-construction/midtown-park`

No crear todavia:

- detalles para Baccarat;
- detalles para Cipriani;
- detalles para los 38 proyectos del inventario de Esteban;
- filtros;
- search;
- mapa general;
- comparador;
- pagina tipo catalogo.

## 1. Objetivo de la pagina detalle

Cada pagina detalle debe ayudar al usuario a entender un proyecto con mas contexto que una card, sin convertir la experiencia en una ficha de developer ni en un catalogo de inversion.

Debe lograr:

- explicar que es el proyecto;
- ubicarlo mentalmente en Miami;
- mostrar imagenes de forma editorial;
- presentar datos basicos con cuidado;
- reforzar que la informacion debe verificarse;
- llevar a WhatsApp para revisar si tiene sentido segun la situacion del usuario.

Mensaje de fondo:

> Si este proyecto te interesa, revisemos juntos datos actuales, disponibilidad, precio y fit antes de tomar una decision.

## 2. Diferencia entre card y detail page

La card debe:

- dar una lectura rapida;
- mostrar imagen, nombre, zona, precio desde si existe y entrega si existe;
- marcar "informacion a confirmar";
- ofrecer un CTA discreto.

La pagina detalle debe:

- ampliar contexto;
- ordenar informacion;
- mostrar una galeria controlada;
- explicar que datos son fuente inicial y requieren confirmacion;
- incluir un CTA principal a WhatsApp;
- no sumar claims comerciales que no esten verificados.

La pagina detalle no debe convertirse en:

- brochure de developer;
- ficha MLS;
- landing de inversion;
- pagina de Esteban adaptada visualmente.

## 3. Estructura recomendada

Estructura V1 recomendada:

1. Hero editorial
   - nombre del proyecto;
   - zona / ciudad;
   - precio desde si existe en dataset;
   - entrega si existe en dataset;
   - badge discreto: informacion a confirmar;
   - CTA WhatsApp.

2. Galeria controlada
   - imagen principal;
   - 3 a 5 imagenes de apoyo;
   - visor ampliado si se reutiliza el patron de Listings Detail;
   - sin carousel pesado;
   - sin lightbox complejo si no aporta.

3. Lectura del proyecto
   - parrafo breve, consultivo y no promocional;
   - explicar que se trata de una opcion para evaluar, no una recomendacion cerrada.

4. Datos principales
   - zona;
   - ciudad;
   - precio desde si se muestra;
   - entrega si se muestra;
   - status interno visual: informacion a confirmar;
   - fuente interna: curated inventory / internal curation, no visible al usuario.

5. Que conviene revisar antes de avanzar
   - disponibilidad actual;
   - precio vigente;
   - entrega;
   - developer info;
   - condiciones del proyecto;
   - documentos oficiales actuales.

6. Nota de verificacion
   - sobria, humana, no defensiva.

7. CTA final
   - WhatsApp como accion principal;
   - mensaje contextual con nombre del proyecto;
   - sin CTA de reserva, compra directa o urgencia.

## 4. Que datos mostrar

Mostrar solo datos neutros ya presentes en el dataset o verificados antes de implementar:

- project name;
- area / neighborhood;
- city;
- price from, solo como dato a confirmar si no esta verificado;
- delivery, solo como dato a confirmar si no esta verificado;
- hero image;
- gallery images si son limpias y aprobadas;
- short consultative description reescrita para Jacquie;
- badge o nota de "informacion a confirmar";
- CTA WhatsApp.

Si price/delivery siguen `needs_verification`, no presentarlos como dato definitivo. Pueden mostrarse con lenguaje sobrio:

- ES: "Desde $X, sujeto a confirmacion actual"
- EN: "From $X, subject to current confirmation"
- FR-CA: "A partir de X $, sous reserve de confirmation actuelle"

Si ese wording se siente pesado, omitir price/delivery de la pagina detalle hasta confirmacion.

## 5. Que datos mantener fuera

No mostrar en V1:

- ROI;
- rentabilidad;
- appreciation;
- EB-5;
- leaseback;
- STR;
- "no rental restrictions";
- rental policy;
- payment plan;
- financing as promise;
- developer legal/fiscal claims;
- occupancy assumptions;
- projected income;
- urgency;
- "best investment";
- "exclusive";
- "limited units";
- copy de developer sin reescritura;
- copy de Esteban;
- rankings;
- comparativas.

Tambien mantener fuera:

- amenities largas;
- FAQ largas;
- floorplans;
- brochures;
- payment plan;
- mapas complejos;
- logos si no se confirma derecho/uso.

## 6. Imagenes / galeria

Usar solo imagenes ya disponibles en el inventario o ImageKit si:

- cargan correctamente;
- no son screenshots;
- no tienen branding de Esteban;
- no contienen contacto externo;
- no contienen claims incrustados;
- tienen calidad visual suficiente.

Direccion de galeria:

- premium;
- editorial;
- contenida;
- no grilla masiva;
- imagen principal + preview compacto;
- visor ampliado aceptable si el patron queda sobrio.

No copiar assets del repo de Esteban sin revisar origen y permisos.

## 7. Precio desde y entrega

Ambos son datos sensibles al tiempo.

Regla:

- si no estan verificados con fuente actual, mostrar como `informacion a confirmar` o no mostrar;
- no esconder el status de verificacion;
- no usar price como gancho principal;
- no ordenar por precio;
- no usar "desde" como promesa de disponibilidad.

El precio y entrega deben pesar menos que:

- el nombre;
- la zona;
- la lectura consultiva;
- el CTA a conversacion.

## 8. Como comunicar "informacion a confirmar"

Evitar que suene inseguro o incompleto.

Wording recomendado:

ES:

- "Informacion inicial para revisar con Jacquie."
- "Antes de avanzar, conviene confirmar precio, disponibilidad y condiciones actuales."

EN:

- "Initial information to review with Jacquie."
- "Before moving forward, current pricing, availability, and conditions should be confirmed."

FR-CA:

- "Information initiale a verifier avec Jacquie."
- "Avant d’avancer, le prix, la disponibilite et les conditions actuelles doivent etre confirmes."

Regla FR-CA:

- puede existir copy en frances canadiense;
- no afirmar que Jacquie habla frances;
- no prometer comunicacion humana directa en frances.

## 9. CTA principal

CTA principal:

- WhatsApp.

CTA por proyecto:

ES:

- "Consultar por este proyecto"

EN:

- "Ask about this project"

FR-CA:

- "Demander de l’information sur ce projet"

Prefill WhatsApp:

ES:

- "Hola Jacquie, quiero consultar por el proyecto [Project Name] en Miami."

EN:

- "Hi Jacquie, I’d like to ask about [Project Name] in Miami."

FR-CA:

- "Bonjour Jacquie, j’aimerais demander de l’information sur le projet [Project Name] a Miami."

No agregar:

- reserve now;
- schedule showing;
- buy now;
- invest now;
- limited availability;
- pricing urgency.

## 10. Metadata por proyecto

Metadata debe ser localizada y sobria.

Formato recomendado:

ES title:

- `[Project Name] | Jacquie Zarate`

ES description:

- `Evaluá [Project Name] en [area] con una mirada clara y acompañamiento personalizado, sin promesas exageradas.`

EN title:

- `[Project Name] | Jacquie Zarate`

EN description:

- `Review [Project Name] in [area] with clear guidance and personalized support, without exaggerated promises.`

FR-CA title:

- `[Project Name] | Jacquie Zarate`

FR-CA description:

- `Evaluez [Project Name] a [area] avec un accompagnement clair et personnalise, sans promesses exagerees.`

Canonical/alternates:

- ES / EN / FR-CA;
- no `/fr` alternate;
- `/fr/pre-construction/...` puede redirigir a `/fr-ca/pre-construction/...` por compatibilidad si el redirect global lo cubre.

OG/Twitter:

- usar OG global localizado si no hay imagen OG por proyecto;
- no generar OG por proyecto en V1 salvo instruccion posterior.

## 11. ES / EN / FR-CA

Cada detalle necesita:

- title;
- description;
- labels;
- CTA;
- verification note;
- gallery alt text;
- metadata.

FR-CA:

- usar acentos correctos en interfaz;
- no exponer `/fr`;
- no afirmar comunicacion humana directa en frances;
- usar tono request-oriented.

## 12. Que NO incluir

No incluir:

- ROI;
- rentabilidad;
- EB-5;
- leaseback;
- STR;
- rental restrictions;
- payment plan;
- claims de developer;
- urgencia;
- best investment;
- exclusive;
- no restrictions;
- payment schedule;
- projected income;
- occupancy;
- tax benefits;
- legal/fiscal advice;
- developer copy sin reescritura;
- componentes de Esteban;
- layout de Esteban;
- estructura de catalogo;
- filtros/search/mapa/comparador.

## 13. Riesgos de parecer Esteban

Riesgos principales:

- abrir detalle para demasiados proyectos;
- copiar slugs, textos o estructura de Esteban;
- usar price/payment plan como eje;
- mostrar rental policy como promesa;
- usar grilla pesada de renders;
- agregar filtros o search;
- crear pagina detalle muy larga tipo brochure;
- usar CTAs agresivos;
- hacer que Precon parezca mas importante que Property Management.

Guardrail:

> Si la pagina podria existir casi igual en el sitio de Esteban, no esta lista para Jacquie.

## 14. Criterios de aceptacion

Una Precon Detail Page V1 se acepta si:

- mantiene tono consultivo;
- no parece portal;
- no parece developer sales page;
- usa imagenes limpias y aprobadas;
- no incluye claims sensibles;
- muestra "informacion a confirmar" sin sonar alarmista;
- WhatsApp es la accion principal;
- FR-CA no promete comunicacion humana directa en frances;
- metadata localizada esta correcta;
- mobile no tiene overflow;
- lint/build pasan;
- `/fr` no se convierte en locale valido.

## 15. Orden de implementacion recomendado

1. Extender dataset solo para los 3 visibles con campos detail-safe.
2. Definir slugs finales:
   - `2200-brickell-residences`
   - `elle-residences-miami`
   - `midtown-park`
3. Crear helpers:
   - `getPreconstructionProjectBySlug`
   - `getVisiblePreconstructionDetailSlugs`
4. Crear ruta dinamica:
   - `/[locale]/pre-construction/[projectSlug]`
5. Crear componente detalle enfocado.
6. Linkear cards visibles hacia detalle.
7. Mantener CTA WhatsApp en card.
8. Agregar metadata por proyecto.
9. Validar ES / EN / FR-CA.
10. Auditar visualmente antes de commit.

No implementar detalles de Baccarat/Cipriani en esta tanda.

---

# Parte B - Expansion / importacion futura de Precon

## 1. Fuentes a usar

Fuentes internas/externas permitidas como materia prima:

- `/Users/lolo/PROYECTOS/estebanfirpo-web/PROJECTS_INVENTORY_EXPORT.md`
- `/Users/lolo/PROYECTOS/estebanfirpo-web/src/data/projects/*.ts`
- `/Users/lolo/PROYECTOS/estebanfirpo-web/src/data/projects/index.ts`
- `/Users/lolo/PROYECTOS/estebanfirpo-web/src/data/types.ts`
- ImageKit URLs asociadas;
- export futuro recomendado:
  - `precon-projects-normalized.json`
  - `precon-assets-inventory.csv`
  - `precon-review-notes.md`

No usar como fuente directa publicable:

- copy final de Esteban;
- componentes;
- rutas;
- metadata;
- CTAs;
- orden del catalogo;
- filtros/search;
- narrativa investment-first.

## 2. Formato final recomendado para Jacquie

Recomendacion:

1. generar primero un JSON intermedio fuera de `/web`;
2. revisar/limpiar ese JSON;
3. convertir solo la seleccion aprobada a un archivo TypeScript normalizado dentro de Jacquie.

Formato final dentro de Jacquie:

- `src/data/preconstruction-projects.ts`

Motivo:

- mantiene type safety;
- evita runtime import desde Esteban;
- permite revisar diffs;
- evita traer 38 proyectos directo a UI;
- mantiene control editorial.

No importar modulos del repo de Esteban en runtime.

## 3. Campos minimos por proyecto

Modelo recomendado para expansion:

```ts
type PreconstructionProject = {
  id: string;
  name: string;
  slug: string;
  area: string;
  city: string;
  priceFromUsd?: number;
  priceStatus: "verified" | "needs_current_verification" | "do_not_publish";
  delivery?: string;
  deliveryStatus: "verified" | "needs_current_verification" | "do_not_publish";
  heroImage: string;
  galleryImages: string[];
  shortDescription: {
    es: string;
    en: string;
    frCA: string;
  };
  highlights: {
    es: string[];
    en: string[];
    frCA: string[];
  };
  status: "visible" | "candidate" | "needs_review" | "discard";
  riskFlags: PreconRiskFlag[];
  source: "internal-curation";
  sourceNotes?: string;
};
```

No usar `source: "esteban-inventory"` en data publica o cercana a UI.

## 4. Risk flags

Usar estos flags:

- `legal_review`
- `roi_claim`
- `eb5_claim`
- `leaseback_claim`
- `rental_policy_claim`
- `outdated_price`
- `missing_images`
- `weak_visual_quality`
- `developer_copy`
- `esteban_tone`
- `needs_current_verification`
- `payment_plan_claim`
- `str_claim`
- `no_rental_restrictions_claim`
- `tax_or_legal_claim`
- `brand_usage_review`

Regla:

- cualquier proyecto con `legal_review` queda fuera;
- cualquier proyecto con claims sensibles queda fuera hasta limpieza/verificacion;
- cualquier proyecto con `missing_images` o `weak_visual_quality` no debe entrar visualmente.

## 5. Proyectos que no se deben importar

No importar a UI:

- Mercedes-Benz Places Miami, por legal review;
- cualquier proyecto con claims sensibles no limpiados;
- proyectos sin imagen usable;
- proyectos con datos demasiado incompletos;
- proyectos cuya unica razon de venta sea ROI, rentabilidad, STR, leaseback, EB-5 o no restrictions;
- proyectos con assets tipo screenshot o con branding/contacto externo;
- proyectos que Jacquie no quiera asociar comercialmente con su marca.

Pueden permanecer en inventario interno como `discard` o `needs_review`, pero no en UI.

## 6. Como seleccionar proyectos visibles

No mostrar todos de golpe.

Orden recomendado:

1. mantener 3 visibles;
2. pasar a 6 si hay segunda tanda verificada;
3. pasar a 9 o 12 maximo solo si tiene sentido comercial;
4. no superar 12 sin repensar la arquitectura.

La seleccion debe priorizar:

- fit con Jacquie;
- zonas relevantes;
- claridad del producto;
- imagenes limpias;
- datos verificables;
- baja dependencia de claims legales/rentabilidad;
- utilidad para abrir conversacion;
- variedad moderada sin parecer catalogo.

## 7. Como evitar portal/catalogo

Guardrails:

- sin filtros en primera expansion;
- sin search;
- sin mapa general;
- sin comparador;
- sin "top investments";
- sin ordenar por precio;
- sin badges agresivos;
- sin "featured opportunities" si suena marketplace;
- sin claim de rentabilidad;
- sin payment plan como eje;
- sin rental policy como promesa;
- sin Home llena de renders.

Si hay mas proyectos, usar curadoria editorial:

- grupos pequenos;
- copy consultivo;
- CTA a WhatsApp;
- detalle por proyecto solo para seleccion aprobada;
- no "view all 38".

## 8. Baccarat y Cipriani

Estado actual:

- estan en dataset;
- no se renderizan como visibles;
- deben permanecer como candidatos.

Decision recomendada:

- no implementar detalle para Baccarat/Cipriani en V1;
- considerar como segunda tanda si:
  - Jacquie los aprueba comercialmente;
  - precio/entrega/disponibilidad se verifican;
  - imagenes y uso de marca estan claros;
  - copy puede mantenerse sobrio.

Riesgo Baccarat:

- marca premium fuerte;
- uso de branding/imagenes requiere cuidado;
- no caer en lujo vacio o developer copy.

Riesgo Cipriani:

- marca reconocible;
- asset fuente ya fue normalizado a ImageKit en Jacquie, pero necesita revision;
- amenities/restaurante pueden sonar developer-sales-page si se copian.

## 9. Datos que necesitan verificacion antes de publicar

Antes de publicar cualquier proyecto nuevo:

- precio vigente;
- disponibilidad;
- fecha de entrega;
- developer info;
- imagenes;
- derechos de uso;
- rental/legal claims;
- payment plan si se menciona;
- copy oficial actual;
- nombre oficial;
- direccion/zona;
- project status;
- aprobacion comercial de Jacquie;
- alineacion con Miami Life Realty si corresponde.

Si un dato no esta verificado:

- omitirlo;
- o marcarlo internamente como `needs_current_verification`;
- no presentarlo como definitivo.

## 10. Recomendacion final

Orden recomendado:

1. Implementar primero detail pages de los 3 visibles:
   - 2200 Brickell Residences;
   - ELLE Residences Miami;
   - Midtown Park.
2. Mantener Baccarat y Cipriani como candidatos para segunda tanda.
3. Crear un export normalizado del resto del inventario de Esteban.
4. Marcar risk flags.
5. Seleccionar segunda tanda de 3 proyectos maximo.
6. No importar los 38 proyectos directamente a UI.
7. No agregar filtros/search/mapa/comparador antes de validar que el sitio no se vuelve portal.

Decision de producto:

> Precon puede crecer, pero solo como seleccion curada y conversacional. La expansion no debe cambiar la identidad de Jacquie V2.

