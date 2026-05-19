# PRECON_EXTRACTION_PLAN.md

## Objetivo

Definir como extraer datos y assets de pre-construction desde el proyecto anterior de Esteban para evaluar su incorporacion futura en Jacquie V2.

Este documento no autoriza implementacion en `/web`.

Pre-construction debe entrar en Jacquie V2 como soporte comercial secundario, no como eje del sitio.

La V2 de Jacquie ya tiene una jerarquia estable:

1. confianza;
2. Jacquie como persona de confianza en Miami;
3. Property Management;
4. WhatsApp;
5. Listings y Precon como soporte.

Precon solo debe reforzar esa narrativa si ayuda al usuario a evaluar opciones con criterio.

## 1. Rol de Precon en Jacquie V2

Precon debe cumplir este rol:

- soporte comercial;
- alternativa para usuarios que tambien quieren evaluar proyectos;
- prueba de que Jacquie puede orientar sobre oportunidades en Miami / South Florida;
- camino de conversacion, no experiencia de inventario;
- contenido curado, no catalogo masivo.

Mensaje estrategico:

> Si tambien estas evaluando pre-construction, puedo ayudarte a entender opciones, contexto y si tiene sentido para tu situacion.

No debe comunicar:

- "Jacquie es principalmente una web de proyectos";
- "el valor principal es el catalogo";
- "la decision se toma comparando cards";
- "Precon es el foco de inversion principal";
- "hay ROI o rentabilidad asegurada".

## 2. Que NO debe pasar

No hacer:

- catalogo masivo;
- portal de proyectos;
- Home llena de proyectos;
- navigation preconstruction-first;
- filtros;
- search;
- mapas;
- rankings;
- "best projects";
- "hot investments";
- grillas densas;
- copia visual de Esteban;
- copia de componentes de Esteban;
- copia de estructura de navegacion de Esteban;
- CTAs de urgencia;
- claims de ROI, rentabilidad, ocupacion o apreciacion;
- financiamiento como promesa;
- metadata SEO heredada;
- copy comercial sin reescritura.

Regla:

> Si una seccion de Precon podria vivir igual en la web de Esteban, todavia no esta suficientemente adaptada a Jacquie.

## 3. Datos a extraer del repo de Esteban

Extraer solo como inventario y fuente de revision.

Campos recomendados:

- project name;
- source slug;
- current route/source path;
- city;
- neighborhood / area;
- address si existe;
- project type;
- developer;
- architect / designer si existe;
- status del proyecto;
- price from;
- price range;
- delivery / estimated completion;
- units;
- residences type;
- bedroom range;
- square footage range;
- rental policy;
- deposit structure;
- HOA / maintenance si existe;
- key highlights;
- amenities;
- short description;
- long description;
- hero image URL/path;
- gallery image URLs/paths;
- logo URL/path si existe;
- map image/path si existe;
- brochure/floorplan links si existen;
- source file path;
- original locale/copy source;
- last updated / last verified si existe;
- notas de riesgo;
- extraction status.

Importante:

- `price from`, `delivery`, `rental policy`, `deposit structure` y `developer` deben entrar como `needs review` salvo que haya confirmacion actual.
- Los slugs de Esteban son referencia interna. No definen rutas finales en Jacquie.
- Las descripciones deben tratarse como materia prima, no como copy publicable.

## 4. Assets a extraer

Extraer assets solo como candidatos.

Tipos de assets:

- hero images;
- gallery images;
- project logos;
- map images;
- location renders;
- amenity renders;
- exterior renders;
- interior renders;
- floorplan images, si existen;
- brochure PDFs, si existen.

Para cada asset registrar:

- project name;
- asset type;
- local path o remote URL;
- source file path;
- dimensions si se pueden obtener;
- format;
- visual quality;
- si contiene texto incrustado;
- si contiene branding de Esteban;
- si contiene logo/developer;
- si parece render, foto real o screenshot;
- si es usable / needs review / discard.

Reglas:

- No copiar assets a `/web` todavia.
- No usar screenshots de la web de Esteban como assets finales.
- No usar imagenes con texto, watermark, contacto o branding de Esteban.
- No usar logos si no esta claro que se pueden mostrar.
- No usar mapas con branding o claims sin revisar.
- Preferir imagenes limpias, editoriales y visualmente premium.

## 5. Datos que NO se reutilizan sin revision

No reutilizar directamente:

- copy comercial;
- headlines;
- CTAs;
- claims de inversion;
- ROI;
- rentabilidad;
- apreciacion esperada;
- "best opportunity";
- "exclusive";
- "limited availability";
- financing/deposit claims;
- rental projections;
- occupancy assumptions;
- developer marketing language;
- legal disclaimers sin contexto;
- metadata SEO;
- title/description heredados;
- slugs como decision final;
- categorizaciones visuales;
- labels promocionales;
- orden de proyectos;
- featured flags heredados.

Todo eso puede entrar como referencia editorial, pero debe reescribirse para Jacquie con tono:

- humano;
- claro;
- premium;
- consultivo;
- no agresivo;
- no investment-first.

## 6. Formato recomendado del inventario exportado

Crear un export limpio desde el repo de Esteban, idealmente fuera de Jacquie primero.

Archivos recomendados:

- `precon-projects-export.json`
- `precon-assets-export.csv`
- `precon-extraction-notes.md`

### `precon-projects-export.json`

Estructura recomendada:

```json
[
  {
    "sourceId": "source-project-id",
    "sourceSlug": "source-slug",
    "sourcePath": "src/data/projects/example.ts",
    "name": "Project name",
    "city": "Miami",
    "neighborhood": "Brickell",
    "address": null,
    "type": "pre-construction",
    "developer": null,
    "status": "needs_review",
    "priceFrom": null,
    "priceRange": null,
    "delivery": null,
    "rentalPolicy": null,
    "depositStructure": null,
    "bedroomRange": null,
    "sizeRange": null,
    "shortDescription": "",
    "highlights": [],
    "amenities": [],
    "heroImage": null,
    "galleryImages": [],
    "logo": null,
    "mapImage": null,
    "sourceLocale": "en",
    "lastVerifiedAt": null,
    "reviewNotes": "",
    "selectionFit": "needs_review"
  }
]
```

### `precon-assets-export.csv`

Columnas recomendadas:

```text
projectName,assetType,sourcePath,urlOrPath,width,height,format,containsText,containsEstebanBranding,visualQuality,status,notes
```

### Estados

Usar:

- `usable`: candidato fuerte, limpio y alineado.
- `needs_review`: podria servir, pero requiere verificacion o reescritura.
- `discard`: no debe entrar a Jacquie.

## 7. Cuantos proyectos deberian entrar inicialmente

No incorporar 33-36 proyectos en Jacquie V2.

Recomendacion inicial:

- extraer todos para inventario;
- seleccionar 3 a 6 proyectos como candidatos;
- publicar inicialmente 3 proyectos como maximo si se decide mostrar Precon.

Motivo:

- 3 proyectos alcanzan para mostrar criterio y acceso;
- mas de 6 empieza a sentirse como catalogo;
- 33-36 recrea directamente el producto de Esteban.

Primera version visible recomendada:

- 0 proyectos visibles hasta completar inventario;
- luego 3 proyectos curados si pasan verificacion;
- CTA principal a conversacion, no browsing.

## 8. Ruta futura: `/pre-construction` o `/projects`

Recomendacion:

- Preferir `/[locale]/pre-construction` si se crea pagina dedicada.
- Evitar `/projects` para Jacquie como ruta inicial.

Motivo:

- `/pre-construction` es mas explicito y menos generico.
- `/projects` puede sonar a catalogo masivo o a estructura heredada de Esteban.
- La ruta debe comunicar asesoria sobre pre-construction, no inventario de proyectos.

Rutas publicas posibles:

- `/es/pre-construction`
- `/en/pre-construction`
- `/fr-ca/pre-construction`

No crear:

- `/fr/pre-construction`;
- `/projects`;
- `/proyectos`;
- rutas heredadas de Esteban;
- detalle por proyecto en la primera fase.

Crear la ruta solo cuando:

- exista inventario limpio;
- haya 3 proyectos seleccionados;
- los claims criticos esten verificados;
- haya brief propio de pagina;
- este claro que no compite con Property Management.

## 9. Precon en Home

No mostrar Precon en Home todavia.

Si se muestra despues, debe ser liviano y secundario.

Formato posible:

- bloque breve despues de Listings o despues de un cierre de conversion;
- titulo consultivo, no promocional;
- 1 a 3 proyectos maximo;
- una frase de criterio;
- CTA a WhatsApp o a pagina dedicada si existe;
- sin filtros;
- sin search;
- sin "view all projects";
- sin grilla densa;
- sin precios si no estan verificados.

Ejemplo de enfoque:

> Si tambien queres evaluar pre-construction, puedo ayudarte a entender que proyectos tienen sentido segun tu objetivo, tu zona de interes y tu tolerancia al proceso.

No usar:

- "Featured projects";
- "Best pre-construction opportunities";
- "Invest in the top projects";
- "High ROI";
- "Limited units";
- "Reserve now".

## 10. Criterios para seleccionar proyectos

Criterios recomendados:

- zona alineada con Jacquie: Miami, Sunny Isles, South Florida;
- claridad del producto;
- claridad de rental policy si se va a mencionar;
- demanda o interes de mercado, sin prometer performance;
- calidad visual de assets;
- proyecto facil de explicar a un comprador/inversor internacional;
- disponibilidad de datos verificables;
- developer conocido o informacion confiable;
- fit con tono premium y consultivo;
- baja necesidad de claims tecnicos complejos;
- utilidad para conversacion con Jacquie.

Evitar proyectos:

- con datos incompletos;
- con precios desactualizados;
- con delivery dudoso;
- con rental policy confusa;
- visualmente pobres;
- demasiado tecnicos;
- demasiado especulativos;
- que dependan de ROI para ser atractivos;
- que requieran disclaimers extensos para no confundir;
- que se sientan como Esteban-first.

## 11. ES / EN / FR-CA

Precon debe respetar el criterio i18n de V2:

- ES / EN / FR-CA son idiomas de primer nivel para la web.
- Ruta publica FR-CA sigue siendo `/fr-ca`.
- Locale interno de contenido puede mapear a `fr-CA`.
- No crear `/fr`.
- No prometer comunicacion humana directa en frances.
- FR-CA debe usar acentos correctos.

Todo proyecto seleccionado necesita:

- nombre consistente;
- zona traducida o localizada correctamente;
- descripcion corta ES / EN / FR-CA;
- highlights ES / EN / FR-CA;
- CTA ES / EN / FR-CA;
- alt text ES / EN / FR-CA;
- disclaimers/notas si aplican.

No usar traducciones automaticas sin revision.

## 12. Verificacion antes de publicar

Antes de publicar cualquier proyecto:

- confirmar que el proyecto sigue vigente;
- confirmar nombre oficial;
- confirmar ciudad/zona;
- confirmar developer si se muestra;
- confirmar price from si se muestra;
- confirmar delivery si se muestra;
- confirmar rental policy si se muestra;
- confirmar disponibilidad de imagenes;
- confirmar permiso/uso publico de assets;
- limpiar branding/contacto de Esteban;
- revisar que no haya claims de ROI/rentabilidad;
- revisar que no haya promesas de ocupacion;
- revisar que no haya financiamiento presentado como promesa;
- revisar copy ES / EN / FR-CA;
- revisar metadata si se crea pagina;
- revisar que WhatsApp siga siendo accion principal.

Campos que deben quedar como `needs_review` si no hay fuente actual:

- price from;
- delivery;
- rental policy;
- deposit structure;
- availability;
- developer;
- amenities;
- floorplans;
- images;
- claims de ubicacion o demanda.

Si un dato no esta verificado:

- omitirlo;
- o marcarlo internamente;
- no publicarlo como hecho.

## 13. Riesgos de volver a parecer Esteban

Riesgos principales:

- traer demasiados proyectos;
- crear una pagina tipo catalogo;
- agregar filtros/search;
- usar cards visualmente iguales;
- usar el mismo orden o slugs;
- copiar textos promocionales;
- usar lenguaje investment-first;
- hacer que Precon pese mas que Property Management;
- agregar Precon al Header antes de tiempo;
- llenar Home con proyectos;
- usar renders como protagonista visual del sitio;
- publicar metadata/copy con tono Esteban;
- usar CTAs orientados a reserva/inversion inmediata.

Guardrail:

> Precon en Jacquie debe responder "puedo ayudarte a evaluar si esto tiene sentido", no "aca esta el inventario para elegir".

## 14. Orden recomendado de trabajo

Orden recomendado:

1. Localizar repo de Esteban.
2. Auditar estructura de datos y assets.
3. Generar `precon-projects-export.json`.
4. Generar `precon-assets-export.csv`.
5. Marcar cada proyecto como `usable`, `needs_review` o `discard`.
6. Seleccionar 3 a 6 candidatos maximo.
7. Pedir confirmacion de datos criticos.
8. Crear `PRECON_SELECTION_BRIEF.md` para definir cuales entran y por que.
9. Crear `PRECON_SUPPORT_SECTION_BRIEF.md` antes de cualquier UI.
10. Recién despues decidir si se implementa:
    - pagina `/[locale]/pre-construction`;
    - bloque liviano en Home;
    - ambos;
    - o ninguno todavia.

No implementar Precon en Jacquie antes de completar los pasos 1-8.

## 15. Recomendacion final

No implementar Precon todavia.

Siguiente paso recomendado:

- ir al repo de Esteban;
- generar un inventario limpio de proyectos y assets;
- traerlo como documento/data de revision, no como codigo de Jacquie;
- seleccionar pocos proyectos con criterio;
- recien despues decidir pagina o bloque.

Decision inicial recomendada:

```text
Precon entra despues de Listings.
Precon empieza con extraccion e inventario, no con UI.
```

El sitio de Jacquie debe seguir siendo trust-led y WhatsApp-first.
