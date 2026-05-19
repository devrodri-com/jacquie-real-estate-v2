# CATALOG_ROADMAP.md

## 1. Como incorporar los 2 listings reales de Jacquie

Los listings reales deben entrar como prueba tangible de mercado, no como eje de la web.

Uso recomendado:

- mostrar solo 2 listings verificados;
- presentarlos como seleccion curada;
- evitar lenguaje de marketplace;
- conectar cada listing con conversacion directa por WhatsApp;
- no prometer disponibilidad sin verificacion actual;
- no presentar precio, reduccion o estado si no esta vigente y confirmado.

La funcion principal de estos listings en V2 es decir:

> Jacquie trabaja con oportunidades reales en Miami / South Florida, pero la decision empieza con guia y contexto.

No deben desplazar la prioridad de Property Management.

## 2. Home preview, ruta /listings o detalle por listing

Orden recomendado:

1. Crear primero modelo/inventario de datos verificados.
2. Despues crear una preview liviana en Home o una seccion de soporte, si los datos estan listos.
3. Crear `/[locale]/listings` solo cuando haya una razon clara para explorar mas de 2 propiedades.
4. Crear detalle por listing solo si hay suficiente contenido verificado, imagenes limpias y estado actual.

Decision recomendada para la siguiente fase:

- No crear `/listings` inmediatamente.
- Empezar con 2 previews reales en Home solo cuando:
  - precio vigente este confirmado;
  - imagenes esten seleccionadas;
  - atribucion este limpia de Esteban;
  - disponibilidad/estado este revisado.

Si esa validacion no esta completa, es mejor no mostrar listings que mostrar placeholders.

## 3. Datos minimos de un Listing

Modelo minimo recomendado:

- `id`
- `status`
- `address`
- `city`
- `state`
- `zip`
- `mls`
- `price`
- `previousPrice` opcional
- `priceReduced` booleano opcional
- `propertyType`
- `beds`
- `baths`
- `sizeSqft`
- `yearBuilt`
- `hoaMonthly` opcional
- `viewOrLocation`
- `rentalPolicy`
- `parking`
- `pets`
- `buildingName`
- `shortNote`
- `imageUrls`
- `imageAlt`
- `source`
- `lastVerifiedAt`
- `verificationStatus`

Estados sugeridos:

- `verified`
- `needs_current_verification`
- `draft`
- `do_not_publish`

## 4. Datos que ya tenemos y que falta confirmar

### Listing 1

Datos disponibles:

- Address: `3801 S Ocean Dr #2C, Hollywood, FL 33019`
- MLS: `A11955684`
- Known historical price: `USD 489,000`
- Current price: `needs_current_verification`
- Type: `Condominium`
- Beds: `2`
- Baths: `2`
- Size: `874 sqft`
- Year built: `1969`
- HOA: `USD 1,038/month`
- View / location: `Partial ocean / Oceanfront`
- Rentals: `Daily rentals allowed`
- Parking: `One Space, Valet`
- Pets: `Conditional, Yes`
- Notes: `The Tides Hollywood Beach, short-term rental potential, building allows daily rentals.`

Necesita confirmar:

- precio vigente;
- disponibilidad actual;
- estado MLS actual;
- imagenes aprobadas para uso publico;
- atribucion correcta a Jacquie / Miami Life Realty;
- si se puede mencionar daily rentals sin matices legales adicionales.

### Listing 2

Datos disponibles:

- Address: `17801 N Bay Rd #505, Sunny Isles Beach, FL 33160`
- MLS: `A11883428`
- Price original conocido: `USD 465,000`
- Current price reportado en OneHome/MLS: `USD 455,000`
- Type: `Condominium`
- Beds: `2`
- Baths: `2`
- Size: `1,330 sqft`
- Year built: `1991`
- HOA: `USD 755/month`
- View: `Bay view`
- Furnished: `Yes`
- Parking: `Guest, One Space`
- Pets: `No`
- Notes: `Le Frontenac, renovated 2-bedroom condo, furnished, Sunny Isles Beach.`

Necesita confirmar:

- precio vigente final;
- precio anterior confirmado si se muestra reduccion;
- disponibilidad actual;
- estado MLS actual;
- imagenes aprobadas para uso publico;
- atribucion correcta a Jacquie / Miami Life Realty;
- si mostrar `Price reduced` / `Precio reducido` / `Prix réduit`.

Regla:

- usar siempre precio vigente mas reciente confirmado;
- ningun precio se considera publicable hasta confirmacion actual;
- marcar reduccion solo si precio anterior y actual estan confirmados;
- no usar lenguaje de urgencia o deal.

## 5. Como incorporar Pre-construction sin parecer la web de Esteban

Pre-construction debe entrar como soporte secundario, no como estrategia principal.

Posicionamiento correcto:

> Si tambien queres evaluar oportunidades de pre-construction, Jacquie puede ayudarte a entender opciones y contexto.

No debe entrar como:

- landing de proyectos;
- portal de inventario;
- grilla dominante;
- ranking de oportunidades;
- enfoque de ROI;
- narrativa preconstruction-first.

La primera version deberia ser editorial y curada:

- pocos proyectos;
- mucha explicacion de criterio;
- CTA a conversacion;
- foco en si tiene sentido para el usuario;
- no foco en cantidad de unidades.

## 6. Extraccion necesaria desde el repo de Esteban

Pedir/exportar desde Esteban solo como fuente de datos y assets, no como base visual.

Extraer:

- lista de proyectos;
- nombre del proyecto;
- ciudad/zona;
- tipo;
- estado;
- rango de precio si esta confirmado;
- developer si corresponde;
- entrega estimada si esta confirmada;
- imagenes principales;
- URLs de imagenes;
- textos descriptivos;
- amenities;
- fuentes;
- fecha de ultima verificacion;
- slugs actuales solo como referencia;
- metadatos SEO solo como referencia, no para copiar directo.

No extraer como base:

- componentes;
- layout;
- rutas;
- filtros;
- taxonomia visual;
- cards existentes;
- copy promocional;
- claims de inversion;
- estructuras de landing.

## 7. Formato de export/inventario recomendado desde Esteban

Formato recomendado:

- `projects-export.json`
- `projects-assets.csv`
- carpeta opcional de imagenes o manifest de ImageKit

Estructura minima para `projects-export.json`:

```json
[
  {
    "sourceId": "example",
    "sourceSlug": "example-project",
    "name": "Project name",
    "city": "Miami",
    "area": "Brickell",
    "type": "pre-construction",
    "status": "needs_review",
    "priceFrom": null,
    "delivery": null,
    "developer": null,
    "shortDescription": "",
    "highlights": [],
    "amenities": [],
    "imageUrls": [],
    "sourceFiles": [],
    "lastVerifiedAt": null,
    "notes": ""
  }
]
```

Campos de estado:

- `usable`
- `needs_review`
- `discard`

## 8. Que NO copiar de Esteban

No copiar:

- Home actual;
- componentes visuales;
- cards;
- filtros;
- buscador;
- navegacion;
- rutas heredadas;
- estructura de proyecto como portal;
- orden de secciones;
- textos promocionales;
- claims de rentabilidad;
- idea de preconstruction como protagonista;
- branding visual;
- metadata que mencione a Esteban;
- datos de contacto de Esteban;
- nombres, telefono, email o marca de Esteban;
- patrones tipo marketplace.

La presencia de Esteban en PDFs, OneHome, capturas o exports es artefacto de origen. No es contenido publicable para Jacquie.

## 9. Orden recomendado

### Fase 1: Listings primero

1. Confirmar datos vigentes de los 2 listings.
2. Elegir imagenes publicables.
3. Limpiar atribucion y fuentes.
4. Crear modelo de datos V2.
5. Crear previews curadas en Home.
6. Medir si la Home mantiene jerarquia trust-led.
7. Decidir despues si hace falta `/listings`.

### Fase 2: Precon despues

1. Exportar inventario desde Esteban.
2. Clasificar proyectos: `usable`, `needs_review`, `discard`.
3. Definir criterios editoriales de entrada.
4. Crear `PRECON_SUPPORT_SECTION_BRIEF.md`.
5. Solo despues implementar una presencia secundaria.

No implementar Precon antes de tener brief propio.

## 10. Riesgos de volver a parecer portal/catalogo

Riesgos principales:

- demasiadas propiedades en Home;
- grillas dominantes;
- filtros prematuros;
- search bar;
- mapas;
- labels tipo hot deal;
- precios sin contexto;
- proyectos precon ocupando la narrativa principal;
- CTAs hacia explorar inventario en vez de hablar con Jacquie;
- copiar cards o estructura visual de Esteban;
- usar lenguaje de ROI, rentabilidad, ocupacion o urgencia;
- convertir a Jacquie en intermediaria de inventario y no en persona de confianza.

Guardrail:

Si una seccion hace que el usuario piense primero en catalogo y no en Jacquie/confianza, no entra en Home.

## 11. Criterios para decidir si un proyecto precon entra o no

Un proyecto precon puede entrar si:

- tiene datos actuales y verificables;
- tiene imagenes utilizables y limpias;
- no depende de claims agresivos de inversion;
- puede explicarse en lenguaje claro;
- aporta contexto real para el usuario;
- tiene sentido para compradores/inversores internacionales;
- no compite con Property Management como prioridad comercial;
- puede presentarse como opcion curada, no como inventario masivo;
- no arrastra branding/contacto de Esteban;
- no requiere promesas de ROI o rentabilidad para justificar su presencia.

Un proyecto no debe entrar si:

- tiene datos incompletos;
- tiene imagenes dudosas;
- requiere claims no confirmados;
- solo funciona como ficha de catalogo;
- depende de urgencia comercial;
- no esta alineado con el tono premium y humano de Jacquie V2.

## Recomendacion final

Para MVP + fase siguiente:

1. No agregar Precon todavia.
2. No crear `/listings` todavia.
3. Preparar primero datos verificados de los 2 listings reales.
4. Reintroducir Listings como preview curada en Home solo cuando no haya placeholders.
5. Planificar Precon con brief propio despues de cerrar Listings.
