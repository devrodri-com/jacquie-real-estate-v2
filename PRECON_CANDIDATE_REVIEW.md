# PRECON_CANDIDATE_REVIEW.md

## Fuente revisada

Fuente externa:

`/Users/lolo/PROYECTOS/estebanfirpo-web/PROJECTS_INVENTORY_EXPORT.md`

Fecha del export:

`2026-05-19`

Este documento usa el inventario de Esteban solo como fuente de analisis. No copia implementacion, componentes, rutas, layout, navegacion, assets ni narrativa.

## 1. Resumen ejecutivo

El export detecta:

- 38 project source files bajo `src/data/projects/`.
- 37 project objects importados en el catalogo de Esteban.
- 1 project file no importado: `one-hollywood-residences`.
- 1 proyecto oculto por legal review: `mercedes-benz-places`.
- Status counts del export:
  - `usable`: 5
  - `needs review`: 32
  - `discard`: 1

Los 5 candidatos mas limpios detectados son:

- 2200 Brickell Residences
- Baccarat Residences
- Cipriani Residences
- ELLE Residences Miami
- Midtown Park

Importante:

> `usable` en el export no significa publicable en Jacquie V2. Significa que el dato fuente no trae banderas obvias de ROI, leaseback, EB-5 o legal review. Todos requieren verificacion actual antes de entrar a la web.

No se deben importar todos los proyectos porque:

- 33-36 proyectos recrearian una experiencia de catalogo.
- Muchos registros dependen de STR, no restrictions, EB-5, leaseback, ROI, rental legality o claims sensibles.
- La jerarquia de Jacquie V2 no es investment-first.
- Precon debe ser soporte secundario, no el producto principal.
- Copiar el volumen, orden, cards o narrativa de Esteban contaminaria la V2.

Decision de producto recomendada:

- No implementar Precon todavia.
- Verificar primero los 5 candidatos limpios.
- De esos 5, seleccionar 3 como primera presencia potencial.
- No crear catalogo masivo.

## 2. Shortlist recomendada para Jacquie V2

### 1. 2200 Brickell Residences

- Name: `2200 Brickell Residences`
- Slug original: `/proyectos/2200-brickell`
- Source file: `src/data/projects/2200-brickell.ts`
- Zona: Brickell
- Precio desde: `US$830,000`
- Entrega: `2026`
- Rental policy: `90 dias`
- Hero image: `https://ik.imagekit.io/devrodri/2200%20Brickell/BTag7Isw.jpeg`
- Estado recomendado: `candidate`

Por que podria encajar:

- Brickell es una zona relevante para compradores/inversores internacionales.
- El registro no trae banderas obvias de ROI, EB-5, leaseback o legal review.
- Es un producto residencial boutique comparativamente facil de explicar.
- Puede funcionar como referencia curada de mercado sin llevar la narrativa a STR/no restrictions.

Riesgos:

- Precio, entrega y rental policy son sensibles al tiempo.
- Payment plan no debe publicarse sin verificacion.
- La certificacion WELL y otros highlights deben confirmarse si se usan.
- Imagenes requieren revision de derechos y calidad.

Uso recomendado si pasa verificacion:

- Candidato fuerte para una primera seleccion de 3 proyectos.
- Mostrar solo zona, tipo, precio si vigente, entrega si confirmada y una frase editorial.

### 2. Baccarat Residences

- Name: `Baccarat Residences`
- Slug original: `/proyectos/baccarat`
- Source file: `src/data/projects/baccarat.ts`
- Zona: Brickell
- Precio desde: `US$1,200,000`
- Entrega: `2028`
- Rental policy: `30-day minimum, up to 3 times per year`
- Hero image: `https://ik.imagekit.io/devrodri/Baccarat/Related-OneBrickell-03-Extrior_Grua-01.jpg`
- Estado recomendado: `candidate`

Por que podria encajar:

- Proyecto premium y reconocible.
- Buen fit visual/editorial para una web mas sofisticada.
- No aparece marcado con ROI, leaseback, EB-5 ni legal review en el export.
- Puede servir para usuarios que quieren entender opciones high-end sin convertir la pagina en portal.

Riesgos:

- Precio y entrega deben verificarse.
- Rental policy debe confirmarse con fuente actual.
- La marca Baccarat y assets requieren cuidado en uso de imagenes/logos.
- El tono debe evitar lujo vacio o marketing de developer.

Uso recomendado si pasa verificacion:

- Buen candidato para una seleccion curada si se quiere mostrar un proyecto premium.
- No usar como eje de Home.

### 3. Cipriani Residences

- Name: `Cipriani Residences`
- Slug original: `/proyectos/cipriani`
- Source file: `src/data/projects/cipriani.ts`
- Zona: Brickell
- Precio desde: `US$1,500,000`
- Entrega: `2026`
- Rental policy: `30-day minimum, up to twice per year`
- Hero image: `/images/projects/cipriani.webp`
- Estado recomendado: `candidate`

Por que podria encajar:

- Marca reconocible y visualmente premium.
- Proyecto residencial en Brickell, alineado con mercado internacional.
- No trae banderas obvias de ROI, leaseback, EB-5 ni legal review en el export.
- Puede reforzar que Jacquie conoce proyectos relevantes sin abrir un catalogo masivo.

Riesgos:

- El hero image es path local del repo de Esteban, no URL final lista para Jacquie.
- Imagenes deben extraerse/revisarse antes de copiar.
- Entrega 2026 requiere verificacion actual.
- Precio y rental policy requieren confirmacion vigente.

Uso recomendado si pasa verificacion:

- Candidato fuerte, pero no copiar asset local sin inventario de imagenes.

### 4. ELLE Residences Miami

- Name: `ELLE Residences Miami`
- Slug original: `/proyectos/elle-residences`
- Source file: `src/data/projects/elle-residences-edgewater.ts`
- Zona: Edgewater / Miami, address source: `3618 NE 5th Ave, Miami, FL 33137`
- Precio desde: `US$590,000`
- Entrega: `2028`
- Rental policy: `Flexible rentals: option to use platforms or a fully managed rental program.`
- Hero image: `https://ik.imagekit.io/devrodri/Elle%20Residences/Elle%20Residences%20Miami%2008.jpg`
- Estado recomendado: `candidate`

Por que podria encajar:

- Precio de entrada mas accesible que Baccarat/Cipriani.
- Edgewater puede ser relevante para usuarios que buscan crecimiento y ubicacion central.
- Assets parecen completos y no estan marcados como screenshot en el extracto.
- No aparece con ROI, EB-5, leaseback ni legal review en el export.

Riesgos:

- Rental policy es flexible y puede rozar claims sensibles; requiere confirmacion oficial.
- La asociacion de marca ELLE requiere cuidado en copy y uso visual.
- Debe evitarse lenguaje de plataformas/rental program como promesa de gestion o rendimiento.
- Address/zona deben normalizarse para Jacquie.

Uso recomendado si pasa verificacion:

- Candidato interesante para balancear una seleccion inicial: no todo high-ticket Brickell.

### 5. Midtown Park

- Name: `Midtown Park`
- Slug original: `/proyectos/midtown-park`
- Source file: `src/data/projects/midtown-park.ts`
- Zona: Midtown / Miami, address source: `3055 N Miami Ave, Miami, FL 33127`
- Precio desde: `US$700,000`
- Entrega: `2028`
- Rental policy: `30-day minimum, up to 4 times per year`
- Hero image: `https://ik.imagekit.io/devrodri/Midtown%20Park/ca7LMYAw.jpeg`
- Estado recomendado: `candidate`

Por que podria encajar:

- Midtown es una zona facil de conectar con Design District, Wynwood y Edgewater.
- El export no marca ROI, leaseback, EB-5 ni legal review.
- Puede servir como opcion menos obvia que los proyectos ultra-premium de Brickell.
- Es viable como parte de una seleccion curada si Jacquie quiere mostrar variedad.

Riesgos:

- Payment plan contiene fechas estimadas y debe revisarse.
- Delivery y precio necesitan confirmacion actual.
- Rental policy debe verificarse antes de mostrarse.
- Highlights son pocos; puede necesitar copy editorial adicional.

Uso recomendado si pasa verificacion:

- Buen candidato para completar una shortlist de 3 si se quiere evitar que todos sean Brickell.

## 3. Proyectos a descartar o congelar

### Descarte explicito

#### Mercedes-Benz Places Miami

- Slug original: `/proyectos/mercedes-benz-places`
- Estado en export: `discard`
- Motivo: oculto del catalogo publico de Esteban por `HIDDEN_IDS` con nota de legal review.
- Riesgo adicional: rental policy `No rental restrictions`.

Decision:

- No usar en Jacquie V2.
- No mostrar como candidato.
- No extraer copy ni assets para publicacion.
- Solo conservar como referencia interna de "do not publish".

### Congelar por EB-5 / legal / fiscal

Proyectos con EB-5, Green Card, Opportunity Zone o claims de elegibilidad:

- Millenia Park
- Nexo Residences
- Parkside Brickell
- The Lauderdale

Decision:

- Congelar.
- No usar en primera fase.
- Solo reconsiderar con revision legal/compliance y reescritura completa.

### Congelar por leaseback / retorno / ROI

Proyectos con leaseback, retorno fijo, porcentaje de retorno o claims similares:

- Flow House
- Parkside Brickell

Decision:

- No usar en Jacquie V2 inicial.
- No reutilizar ningun texto de retorno, rentabilidad o leaseback.
- Reconsiderar solo si se elimina completamente la narrativa financiera y se verifica oficialmente.

### Congelar por STR / no restrictions / rental legality

Proyectos con banderas de STR, no restrictions, condo-hotel, Airbnb o rental legality:

- 72 Park
- 7200 Collins
- Ambar Residences Orlando
- Ave Maria - Maple Ridge
- Cassia - The Residences at Coral Gables
- Domus Brickell Center
- Domus Brickell Park
- Edge House Miami
- ELLA Miami Beach
- Frida Kahlo Wynwood Residences
- Gaia Residences
- Jean-Georges Miami Tropic Residences
- Millux Place Brickell
- Nexo Residences
- Nickelodeon Hotels & Resorts Orlando
- NoMad Residences Wynwood
- Oasis Hallandale
- Okan Tower Miami
- One Hollywood Residences
- Palma Miami Beach
- Parkside Brickell
- Seven Park Residences
- The Rider Wynwood
- The William Residences
- Twenty Six & 2nd
- Viceroy Brickell - The Residences

Decision:

- No descartarlos todos definitivamente.
- Congelarlos para primera fase porque requieren revision legal/rental-policy.
- Si alguno se retoma, debe reescribirse desde una fuente neutral y verificada.

### Congelar por imagenes dudosas o screenshot-style

Proyecto detectado con assets tipo screenshot en el export:

- Ambar Residences Orlando

Posibles riesgos adicionales:

- rutas con imagenes locales heredadas (`/images/projects/...`) que requieren extraccion manual;
- assets con texto incrustado;
- renders con logos o marcas de developer;
- imagenes copiadas desde materiales que pueden tener restricciones.

Decision:

- No copiar assets hasta completar inventario visual.
- No usar screenshots como imagen publica de Jacquie.

## 4. Datos a verificar antes de usar cualquier proyecto

Para cada proyecto candidato:

- precio vigente;
- disponibilidad actual;
- fecha de entrega actualizada;
- politica de renta;
- payment plan;
- developer info;
- derechos de imagen;
- fuente oficial de imagenes;
- rental/legal claims;
- copy oficial actualizado;
- si hay cambios recientes de proyecto;
- si el proyecto sigue vendiendo unidades;
- si Jacquie quiere asociarse comercialmente con ese proyecto;
- si los datos pueden publicarse en ES / EN / FR-CA sin claims sensibles.

Reglas:

- No mostrar precio si no esta vigente.
- No mostrar entrega si no esta actualizada.
- No mostrar rental policy si no esta confirmada.
- No mostrar payment plan si no esta confirmado.
- No mostrar developer info si no esta verificado.
- No usar imagenes sin derecho/permiso claro.
- No usar textos de developer sin reescritura.

## 5. Que NO copiar de Esteban

No copiar:

- componentes;
- layout;
- cards;
- diseno;
- navegacion;
- CTAs;
- narrativa investment-first;
- textos de ROI/rentabilidad;
- textos de leaseback o retorno;
- estructura de catalogo;
- filtros;
- search;
- orden de secciones;
- slugs como decision final;
- metadata;
- page titles;
- descriptions;
- copy promocional;
- claims de STR/no restrictions sin revisar;
- assets sin auditoria.

La extraccion sirve para responder:

> Que proyectos podria evaluar Jacquie?

No sirve para responder:

> Como debe verse o funcionar la web de Jacquie?

## 6. Como presentar Precon en Jacquie V2 si avanzamos

Presencia recomendada:

- maximo 3 proyectos visibles en primera version;
- maximo 3 a 6 candidatos en inventario editorial;
- sin filtros;
- sin search;
- sin mapa;
- sin ordenamiento;
- sin portal;
- sin detalle por proyecto en primera fase;
- CTA principal a WhatsApp;
- texto consultivo;
- copy reescrito para Jacquie.

Posible pagina secundaria:

- ruta recomendada: `/[locale]/pre-construction`
- solo si hay 3 proyectos verificados;
- no agregar al Header principal al principio;
- no crear `/projects`;
- no crear `/proyectos`;
- no crear `/fr/pre-construction`.

Home:

- preferencia actual: no mostrar Precon todavia.
- si se muestra, que sea una mencion liviana o bloque posterior, nunca arriba del fold.
- no mostrar mas de 1 a 3 proyectos.
- no desplazar Property Management.

Enfoque de copy:

> Si tambien queres evaluar pre-construction, puedo ayudarte a entender que opciones tienen sentido para tu situacion.

No:

> Estos son los mejores proyectos para invertir.

## 7. ES / EN / FR-CA

Precon debe seguir el sistema V2:

- `/es`
- `/en`
- `/fr-ca`

No crear `/fr`.

Cada proyecto publicable necesita:

- nombre;
- zona;
- descripcion corta ES / EN / FR-CA;
- highlights ES / EN / FR-CA;
- alt text ES / EN / FR-CA;
- CTA ES / EN / FR-CA;
- notas/disclaimers si aplican;
- copy revisado, no traduccion automatica literal.

FR-CA:

- usar acentos correctos;
- no prometer comunicacion humana directa en frances;
- mantener la experiencia web completa en frances canadiense.

## 8. Recomendacion final

No conviene avanzar con implementacion de Precon ahora.

Si conviene avanzar con una etapa de verificacion de los 5 candidatos:

1. 2200 Brickell Residences
2. Baccarat Residences
3. Cipriani Residences
4. ELLE Residences Miami
5. Midtown Park

Orden recomendado:

1. Verificar los 5 candidatos contra fuentes actuales.
2. Auditar imagenes hero y gallery de esos 5.
3. Seleccionar 3 proyectos maximo para primera version.
4. Crear `PRECON_SELECTION_BRIEF.md` con la seleccion final y el criterio.
5. Crear `PRECON_SUPPORT_SECTION_BRIEF.md` o `PRECON_PAGE_BRIEF.md` antes de cualquier implementacion.
6. Recien despues decidir si se crea una pagina `/[locale]/pre-construction`.

Decision sugerida para primera seleccion probable, si verifican bien:

- 2200 Brickell Residences
- ELLE Residences Miami
- Midtown Park

Alternativa mas premium:

- Baccarat Residences
- Cipriani Residences
- ELLE Residences Miami

La seleccion final debe depender de:

- datos vigentes;
- calidad visual;
- fit con Jacquie;
- claridad para clientes internacionales;
- bajo riesgo legal/comercial;
- capacidad de explicar el proyecto sin caer en ROI o catalogo.
