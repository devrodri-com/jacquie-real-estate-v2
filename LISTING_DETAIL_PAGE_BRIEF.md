# LISTING_DETAIL_PAGE_BRIEF.md

## Objetivo

Definir la primera version de paginas detalle para los 2 listings reales de Jacquie sin convertir la web en portal inmobiliario.

Las paginas detalle deben servir para:

- dar mas contexto que una card;
- permitir evaluar una propiedad real con informacion clara;
- reforzar confianza y transparencia;
- llevar la conversacion a WhatsApp;
- mantener la experiencia curada, editorial y no MLS-first.

No deben convertirse en fichas de portal, paginas IDX, landing pages agresivas ni copias de una ficha MLS.

## Rutas futuras esperadas

- `/es/listings/3801-s-ocean-dr-2c`
- `/en/listings/3801-s-ocean-dr-2c`
- `/fr-ca/listings/3801-s-ocean-dr-2c`
- `/es/listings/17801-n-bay-rd-505`
- `/en/listings/17801-n-bay-rd-505`
- `/fr-ca/listings/17801-n-bay-rd-505`

No crear:

- `/fr/listings/...`
- `/properties/...`
- `/homes/...`
- rutas sin locale;
- rutas heredadas de V1 o Esteban.

## 1. Diferencia entre card y detail page

La card en `/[locale]/listings` debe seguir siendo una preview curada:

- imagen principal;
- building / zona;
- direccion;
- precio;
- specs basicos;
- MLS secundario;
- CTA a WhatsApp.

La pagina detalle debe agregar contexto util, no volumen de datos:

- una lectura mas clara de la propiedad;
- informacion basica ampliada;
- galeria limitada si hay fotos aprobadas;
- notas de disponibilidad/precio sujeto a confirmacion;
- detalles relevantes confirmados;
- CTA contextual a WhatsApp.

La pagina detalle no debe agregar:

- filtros;
- search;
- mapa si no aporta;
- comparador;
- calculadoras;
- formularios;
- tabla MLS densa;
- claims de inversion.

## 2. Estructura recomendada

Estructura para cada pagina:

1. Hero editorial
   - eyebrow con building + zona;
   - direccion como H1;
   - ciudad;
   - precio vigente verificado;
   - specs inline;
   - CTA principal WhatsApp.

2. Imagen / galeria controlada
   - imagen principal grande;
   - si existen mas fotos aprobadas, mostrar maximo 3 a 5 imagenes;
   - sin carousel complejo en V1;
   - sin thumbnails excesivos;
   - sin imagenes con Esteban, branding externo o marcas de PDF/OneHome visibles.

3. Resumen de propiedad
   - texto breve, reescrito en tono Jacquie V2;
   - no copiar public remarks literal;
   - explicar que se puede revisar si la propiedad encaja con la situacion del usuario.

4. Datos principales
   - tipo;
   - beds;
   - baths;
   - sqft;
   - year built;
   - HOA si esta confirmado;
   - parking si esta confirmado;
   - pets si esta confirmado;
   - furnished si aplica;
   - view/location si esta confirmado.

5. Contexto y consideraciones
   - datos relevantes confirmados;
   - disponibilidad, precio y condiciones sujetos a confirmacion;
   - rental policy solo si se decide mostrar y se redacta sin promesas.

6. Nota de verificacion
   - dejar claro que la informacion debe confirmarse antes de tomar decisiones;
   - tono sobrio, no legal-heavy.

7. CTA final
   - WhatsApp como accion principal;
   - mensaje contextual con direccion o building.

## 3. Datos a mostrar

Campos permitidos si estan verificados:

- building name;
- address;
- city / area;
- MLS;
- current price;
- beds;
- baths;
- sqft;
- property type;
- year built;
- HOA monthly;
- view / location;
- furnished;
- parking;
- pets;
- image(s);
- availability/status como nota sobria, si se decide mostrar;
- source date interna o nota de verificacion, si conviene.

Datos actuales disponibles en `src/data/listings.ts`:

### 3801 S Ocean Dr #2C

- Building: `The Tides Hollywood Beach`
- Area: `Hollywood Beach`
- City: `Hollywood, FL 33019`
- MLS: `A11955684`
- Price: `USD 459,000`
- Beds: `2`
- Baths: `2`
- Size: `874 sqft`
- Type: `Condominium`
- Year built: `1969`
- HOA: `USD 1,038/month`
- View/location: `Oceanfront building`
- Rental policy: `OK to lease`
- Parking: `One Space, Valet`
- Pets: `Conditional, Yes`
- Image: `/images/listings/3801-s-ocean-dr-2c.jpg`
- Status: `verified`

### 17801 N Bay Rd #505

- Building: `Le Frontenac`
- Area: `Sunny Isles Beach`
- City: `Sunny Isles Beach, FL 33160`
- MLS: `A11883428`
- Price: `USD 455,000`
- Beds: `2`
- Baths: `2`
- Size: `1,330 sqft`
- Type: `Condominium`
- Year built: `1991`
- HOA: `USD 755/month`
- View: `Bay view`
- Furnished: `Yes`
- Parking: `Guest, One Space`
- Pets: `No`
- Image: `/images/listings/17801-n-bay-rd-505.jpg`
- Status: `verified`

## 4. Datos a mantener fuera

No mostrar en la primera version:

- price reduced;
- precio anterior;
- historial de precio;
- ROI;
- rentabilidad;
- ocupacion esperada;
- ingresos proyectados;
- calculos de cash flow;
- urgency language;
- datos no confirmados;
- public remarks copiados literal;
- rental policy como promesa comercial;
- cualquier referencia a Esteban;
- datos de contacto de Esteban;
- logos, watermarks o captions provenientes de PDFs si exponen origen no publicable.

Si un dato es sensible pero confirmado, evaluar si realmente ayuda a la conversion antes de mostrarlo.

## 5. Galeria / fotos

Primera version recomendada:

- usar imagen principal actual;
- si hay mas fotos limpias y aprobadas, sumar una galeria editorial limitada;
- maximo 3 a 5 imagenes por listing;
- sin carousel complejo;
- sin lightbox en V1 salvo necesidad clara;
- sin imagenes de baja calidad que bajen percepcion premium;
- sin screenshots de PDF/OneHome;
- sin imagenes con datos de Esteban, marcas ajenas o texto incrustado sensible.

Si no hay mas imagenes aprobadas:

- crear la pagina detalle con una sola imagen fuerte;
- compensar con buen ritmo editorial y datos claros;
- no usar placeholders.

Alt text:

- ES: describir la propiedad de forma simple.
- EN: natural, not keyword-stuffed.
- FR-CA: frances correcto con acentos.

## 6. MLS

MLS debe aportar credibilidad, no dominar.

Reglas:

- mostrar MLS como metadata secundaria;
- no usar MLS como headline;
- no convertir la pagina en ficha MLS;
- no copiar disclaimers MLS si no estan revisados;
- no atribuir contacto ni fuente visible a Esteban;
- no mostrar MLS si en algun momento deja de estar confirmado.

Formato recomendado:

- `MLS A11955684`
- `MLS A11883428`

Ubicacion recomendada:

- debajo de specs o dentro de un bloque de metadata secundaria.

## 7. Disponibilidad, precio y condiciones

Regla:

> La pagina puede mostrar datos verificados, pero debe recordar que disponibilidad, precio y condiciones pueden cambiar.

Copy recomendado:

ES:

> La informacion de la propiedad debe confirmarse antes de tomar decisiones. Disponibilidad, precio y condiciones pueden cambiar.

EN:

> Property information should be confirmed before making decisions. Availability, pricing, and conditions may change.

FR-CA:

> Les informations sur la propriete doivent etre confirmees avant toute decision. La disponibilite, les prix et les conditions peuvent changer.

Nota: el copy final FR-CA de interfaz debe usar acentos correctos aunque este documento este en ASCII.

No mostrar `price reduced` salvo que precio anterior y vigente esten confirmados por fuente actual.

## 8. CTA principal

WhatsApp debe ser el CTA principal.

CTA por idioma:

ES:

- `Consultar por esta propiedad`

EN:

- `Ask about this property`

FR-CA:

- `Demander de l'information sur cette propriete`

El prefill debe usar contexto `listing` y, si es simple, incluir la direccion:

ES:

> Hola Jacquie, quiero consultar por 3801 S Ocean Dr #2C.

EN:

> Hi Jacquie, I would like to ask about 3801 S Ocean Dr #2C.

FR-CA:

> Bonjour Jacquie, j'aimerais demander de l'information sur 3801 S Ocean Dr #2C.

Reglas:

- no prometer respuesta humana en frances;
- no agregar CTA de compra directa;
- no agregar formularios en V1;
- no desplazar WhatsApp con botones secundarios innecesarios.

CTA secundario opcional:

- volver a `/[locale]/listings`;
- debe ser discreto;
- no competir con WhatsApp.

## 9. Metadata por listing

Metadata debe ser especifica, pero sobria.

### 3801 S Ocean Dr #2C

ES title:

- `3801 S Ocean Dr #2C | Jacquie Zarate`

EN title:

- `3801 S Ocean Dr #2C | Jacquie Zarate`

FR-CA title:

- `3801 S Ocean Dr #2C | Jacquie Zarate`

ES description:

- `Conocé 3801 S Ocean Dr #2C en Hollywood Beach con una mirada clara y acompañamiento personalizado en Miami.`

EN description:

- `Review 3801 S Ocean Dr #2C in Hollywood Beach with clear guidance and personalized support in Miami.`

FR-CA description:

- `Découvrez 3801 S Ocean Dr #2C à Hollywood Beach avec un accompagnement clair et personnalisé à Miami.`

### 17801 N Bay Rd #505

ES title:

- `17801 N Bay Rd #505 | Jacquie Zarate`

EN title:

- `17801 N Bay Rd #505 | Jacquie Zarate`

FR-CA title:

- `17801 N Bay Rd #505 | Jacquie Zarate`

ES description:

- `Conocé 17801 N Bay Rd #505 en Sunny Isles Beach con una mirada clara y acompañamiento personalizado en Miami.`

EN description:

- `Review 17801 N Bay Rd #505 in Sunny Isles Beach with clear guidance and personalized support in Miami.`

FR-CA description:

- `Découvrez 17801 N Bay Rd #505 à Sunny Isles Beach avec un accompagnement clair et personnalisé à Miami.`

Metadata rules:

- canonical por locale;
- alternates `es`, `en`, `fr-CA`;
- no alternate `/fr`;
- OG/Twitter pueden usar imagen de la propiedad si se confirma que funciona visualmente;
- si no, mantener OG global localizada;
- no mencionar Esteban;
- no incluir claims de inversion.

## 10. ES / EN / FR-CA

Las paginas detalle deben existir completas en:

- ES;
- EN;
- FR-CA.

Rutas publicas:

- `/es/listings/[id]`
- `/en/listings/[id]`
- `/fr-ca/listings/[id]`

Reglas:

- `fr-ca` sigue siendo routing locale;
- `fr-CA` sigue siendo content locale interno;
- no crear `/fr`;
- no prometer comunicacion humana directa en frances;
- FR-CA debe tener acentos correctos en UI final;
- CTAs FR-CA deben ser request-oriented.

## 11. Que NO incluir

No incluir:

- filtros;
- search;
- mapa si no hace falta;
- comparador;
- favoritos;
- paginacion;
- calculadora hipotecaria;
- calculadora ROI;
- rentabilidad;
- ocupacion;
- income projections;
- rental income promises;
- price reduced sin confirmacion;
- urgency banners;
- `hot deal`;
- `exclusive`;
- `best investment`;
- contacto de Esteban;
- branding de Esteban;
- copy MLS literal;
- layout de portal;
- componentes de Esteban/V1.

## 12. Riesgos de parecer portal

Riesgos principales:

- poner demasiados facts al mismo nivel visual;
- convertir el precio en unico protagonista;
- usar una galeria muy pesada;
- agregar mapa, search o filtros por inercia;
- escribir copy tipo MLS;
- sumar badges comerciales;
- mencionar rental policy como promesa;
- crear paginas demasiado largas para solo 2 propiedades;
- usar CTAs de urgencia;
- agregar demasiados links secundarios.

Mitigacion:

- usar estructura editorial;
- mantener maximo 2 niveles de informacion por bloque;
- WhatsApp como salida principal;
- notas de verificacion claras;
- MLS y datos tecnicos como soporte, no narrativa central.

## 13. Criterios de aceptacion

Antes de aprobar la implementacion:

- cada ruta valida responde 200;
- `/fr/listings/...` redirige a `/fr-ca/listings/...` por compatibilidad existente;
- no se crea `/fr` como locale;
- cards de `/listings` pueden enlazar a detalle solo si el enlace no desplaza WhatsApp;
- detalle muestra datos verificados y omite datos dudosos;
- precio y disponibilidad tienen nota de confirmacion;
- MLS visible pero secundario;
- no aparece Esteban en UI, metadata, alt text, imagenes ni contacto;
- no aparecen ROI, rentabilidad, ocupacion ni claims agresivos;
- FR-CA no promete comunicacion humana directa en frances;
- mobile sin overflow;
- imagenes cargan correctamente;
- `npm run lint` OK;
- `npm run build` OK;
- smoke test en ES / EN / FR-CA OK.

## 14. Orden de implementacion recomendado

1. Extender `src/data/listings.ts`
   - agregar campos que falten para detalle, solo si estan verificados;
   - considerar `description` o `summary` por locale;
   - considerar `images` solo con imagenes aprobadas;
   - no agregar placeholders.

2. Crear helpers de busqueda
   - `getListingById`;
   - `getListingIds`;
   - mantener tipado estricto.

3. Crear pagina dinamica
   - `src/app/[locale]/listings/[listingId]/page.tsx`;
   - validar que `listingId` exista;
   - `notFound()` para ids invalidos.

4. Crear componente de detalle
   - `src/components/listing-detail-page.tsx`;
   - separar presentacion de datos;
   - no mezclar con card existente.

5. Agregar mensajes i18n
   - labels generales;
   - nota de confirmacion;
   - CTAs;
   - summaries por listing si se decide no ponerlos en dataset.

6. Metadata
   - `generateMetadata` por listing y locale;
   - canonical / alternates;
   - OG/Twitter sin claims.

7. Enlazar desde cards
   - hacer que la direccion o imagen pueda ir al detalle;
   - mantener CTA WhatsApp visible en la card;
   - no convertir toda la pagina listings en portal.

8. Validar
   - lint;
   - build;
   - smoke de las 6 rutas detalle;
   - mobile;
   - language switcher;
   - `/fr/listings/...` redirect.

## 15. Decision recomendada

Conviene crear paginas detalle despues de cerrar este brief porque:

- las cards ya estan mas editoriales y no fuerzan logica de portal;
- hay solo 2 listings, lo que permite una experiencia muy curada;
- WhatsApp puede seguir siendo la salida principal;
- los datos criticos estan verificados para una lectura inicial.

Condicion:

No avanzar a detalle si no hay al menos una imagen usable por listing y si el detalle obliga a usar copy MLS literal o placeholders. La pagina debe sentirse como Jacquie ayudando a entender una propiedad, no como un portal mostrando inventario.
