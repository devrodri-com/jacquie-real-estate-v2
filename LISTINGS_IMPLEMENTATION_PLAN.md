# LISTINGS_IMPLEMENTATION_PLAN.md

## Objetivo

Definir como incorporar los 2 listings reales de Jacquie en V2 sin convertir la web en portal, catalogo ni experiencia centrada en inventario.

La regla base sigue siendo:

> Listings aportan tangibilidad y prueba de mercado, pero no desplazan la jerarquia de confianza, Jacquie, Property Management y WhatsApp.

Este documento no autoriza implementacion todavia. Primero hay que cerrar verificacion de datos.

## 1. Version minima de Listings

La version minima recomendada no es un portal.

Debe ser una pieza curada y breve:

- 2 listings reales maximo;
- sin filtros;
- sin search;
- sin mapa;
- sin paginacion;
- sin ordenamiento;
- sin grilla extensa;
- sin detalle por slug en la primera tanda;
- con WhatsApp como accion principal.

Formato recomendado:

1. Header editorial de pagina o bloque.
2. Texto corto que explique que son propiedades seleccionadas como referencia de mercado.
3. Dos previews reales, una por listing.
4. Nota de disponibilidad/verificacion sobria.
5. CTA a WhatsApp para preguntar por una propiedad.

No debe sentirse como:

- "browse inventory";
- "search homes";
- "hot deals";
- "exclusive listings";
- portal MLS;
- extension de la web de Esteban.

## 2. Creamos `/[locale]/listings` ahora?

Decision recomendada:

- No crear `/[locale]/listings` hasta que los campos criticos esten verificados.
- Una vez verificados, si conviene incorporar Listings antes de Precon, crear `/[locale]/listings` como pagina curada de 2 propiedades.

Motivo:

- Mostrar placeholders o datos incompletos rompe confianza.
- Una ruta de Listings con datos dudosos comunica que el sitio esta incompleto.
- Una ruta de Listings sin verificacion empuja la V2 hacia una logica de portal antes de tiempo.

Decision practica:

```text
Ahora: verificar datos.
Despues de verificar: crear /[locale]/listings con 2 previews reales.
```

No agregar Listings al Header principal en la primera version. Si se crea la ruta, debe entrar desde un bloque liviano en Home, desde CTA contextual o desde una futura decision de navegacion secundaria.

## 3. Detalle por listing: ahora o despues?

No crear detalle por listing ahora.

Rutas NO recomendadas para la primera tanda:

- `/[locale]/listings/[slug]`
- `/[locale]/properties/[slug]`
- `/[locale]/listing/[slug]`

Motivo:

- Un detalle por listing exige mas datos: galeria, descripcion completa, disclaimers, estado, precio vigente, MLS, permisos de imagen, politicas del edificio y atribucion.
- La pagina de detalle invita a copiar patrones de catalogo, mapa, amenities, filtros o SEO inmobiliario generico.
- Con solo 2 listings, el detalle agrega complejidad sin mejorar la conversion principal.

El detalle puede quedar para fase posterior si:

- hay mas listings;
- Jacquie confirma que quiere usar la web como soporte comercial activo;
- cada propiedad tiene datos completos y vigentes;
- hay imagenes aprobadas;
- existe criterio editorial para que el detalle no parezca portal.

## 4. Datos minimos verificados para publicar

Campos criticos para publicar cualquier preview:

- precio vigente o decision explicita de no mostrar precio;
- disponibilidad actual;
- estado MLS actual;
- MLS number;
- direccion;
- beds;
- baths;
- sqft;
- building name;
- imagen principal aprobada para uso publico;
- atribucion limpia a Jacquie / Miami Life Realty;
- confirmacion de que no aparece Esteban en UI, metadata, imagenes, captions ni contacto;
- fecha de ultima verificacion;
- copy ES / EN / FR-CA revisado.

Campos secundarios que pueden omitirse si no estan verificados:

- HOA;
- year built;
- parking;
- pets;
- furnished;
- view;
- rental policy;
- previous price;
- price reduction.

Regla:

> Si un dato no esta verificado, se omite. No se reemplaza con placeholder.

## 5. Si precio o disponibilidad no estan 100% confirmados

No publicar precio como vigente si no esta confirmado.

Opciones permitidas:

1. Omitir precio y mostrar una CTA:
   - ES: `Consultar disponibilidad`
   - EN: `Ask about availability`
   - FR-CA: `Demander l'information sur la disponibilite`

2. Mostrar precio solo si esta confirmado con fuente actual:
   - incluir `lastVerifiedAt` internamente;
   - no mostrar como urgencia;
   - no usar "deal".

3. Mostrar reduccion solo si precio anterior y vigente estan confirmados:
   - ES: `Precio reducido`
   - EN: `Price reduced`
   - FR-CA: `Prix réduit`

No mostrar:

- precio historico como si fuera vigente;
- `price reduced` si falta precio anterior o vigente confirmado;
- disponibilidad si no esta confirmada;
- estado MLS si no esta confirmado.

## 6. Como mostrar los 2 listings sin parecer portal

Presentacion recomendada:

- titulo editorial;
- maximo 2 previews;
- una imagen principal por propiedad;
- 3 facts maximo por preview;
- texto corto orientado a contexto, no a venta agresiva;
- CTA por propiedad a WhatsApp;
- una nota sobria de que la disponibilidad puede cambiar.

Campos visibles recomendados por card:

- ciudad / zona;
- building name;
- tipo de propiedad;
- beds / baths / sqft;
- precio solo si esta verificado;
- un highlight verificado.

Ejemplo de enfoque:

```text
The Tides Hollywood Beach
Hollywood Beach
2 bed · 2 bath · 874 sqft
Oceanfront building. Daily rentals referenced in listing details, subject to current verification.
```

Pero para UI final, el texto debe escribirse con tono V2, no copiar descripcion MLS.

Visual:

- cards sobrias, no densas;
- imagen contenida;
- sin badges agresivos;
- sin colores de "oferta";
- sin layout de marketplace;
- no mas peso visual que Property Management.

## 7. CTAs

CTA principal global de la seccion/pagina:

- ES: `Preguntar por una propiedad`
- EN: `Ask about a property`
- FR-CA: `Demander de l'information sur une propriété`

Destino:

- WhatsApp usando helper existente con un contexto futuro especifico, por ejemplo `listing` o `general` si todavia no se define contexto nuevo.

Recomendacion:

- Crear contexto `listing` en WhatsApp helper cuando se implemente Listings.
- Mensaje debe ser contextual, sin prometer respuesta en frances.

Mensajes sugeridos:

ES:

> Hola Jacquie, quiero consultar por una propiedad que vi en tu web.

EN:

> Hi Jacquie, I would like to ask about a property I saw on your website.

FR-CA:

> Bonjour Jacquie, j'aimerais demander de l'information sur une propriété vue sur votre site.

CTA por propiedad:

- ES: `Consultar esta propiedad`
- EN: `Ask about this property`
- FR-CA: `Demander de l'information sur cette propriété`

No usar:

- `Comprar ahora`;
- `Reservar`;
- `Invertir ya`;
- `Ver todas`;
- `Browse all inventory`;
- CTAs de urgencia.

## 8. Imagenes

Antes de publicar:

- confirmar URLs finales;
- confirmar permiso de uso publico;
- seleccionar una imagen principal por listing;
- limpiar cualquier imagen/captura con nombres, telefonos, logos o branding de Esteban;
- evitar capturas de OneHome/PDF como imagen publica;
- usar fotos de propiedad reales, no screenshots de ficha;
- optimizar para Next/Image si se importan a `/web/public` o se usan via dominio remoto aprobado.

Recomendacion para primera implementacion:

- usar 1 imagen principal por listing;
- no crear galeria completa;
- no crear carousel;
- no usar imagenes con texto incrustado;
- mantener aspect ratio consistente;
- escribir alt text por idioma.

Si las imagenes vienen desde ImageKit:

- verificar que las URLs sean estables;
- decidir si se referencian remotamente o si se copian a `/web/public/listings`;
- no copiar imagenes hasta confirmar permiso y seleccion final.

## 9. MLS

MLS puede aportar credibilidad, pero no debe dominar.

Reglas:

- Mostrar MLS solo si esta confirmado.
- No mostrar MLS si la fuente actual no lo confirma.
- No usar MLS como elemento principal de la card.
- Si se muestra, usarlo como dato secundario:
  - `MLS A11955684`
  - `MLS A11883428`
- No copiar disclaimers MLS sin revisar.
- No usar datos MLS para atribuir contacto a Esteban.

En Home, MLS puede omitirse para mantener la seccion liviana.

En `/[locale]/listings`, MLS puede aparecer como metadata secundaria si esta verificado.

## 10. Como evitar referencias a Esteban

Regla estricta:

> Esteban puede aparecer en PDFs, OneHome o fuente de datos como artefacto de origen. No es contenido publicable en V2.

No usar:

- nombre de Esteban;
- email;
- telefono;
- foto;
- branding;
- brokerage/contacto de Esteban;
- metadata visible que lo incluya;
- imagenes con su nombre;
- captions o alt text derivados de capturas con su atribucion.

Antes de publicar:

- revisar cada imagen;
- revisar cada texto;
- revisar metadata;
- revisar alt text;
- revisar URLs si contienen identificadores visibles;
- revisar cualquier PDF/export usado como fuente.

Public attribution:

- mantener Jacquie Zarate / Miami Life Realty segun confirmacion;
- si la atribucion formal de listing requiere wording especifico, pedir confirmacion antes de publicar.

## 11. Rutas que se crearian

Primera implementacion despues de verificacion:

- `/es/listings`
- `/en/listings`
- `/fr-ca/listings`

No crear:

- `/fr/listings`;
- `/[locale]/listings/[slug]`;
- `/properties`;
- `/homes`;
- `/inventory`;
- rutas heredadas de V1 o Esteban.

No agregar la ruta al Header principal en la primera tanda salvo decision explicita posterior.

Posibles entradas a la ruta:

- bloque liviano en Home despues del recorrido principal;
- CTA discreto desde una futura seccion Listings Support;
- footer solo si se decide que Listings ya es suficientemente estable para navegacion secundaria.

## 12. Componentes necesarios

Componentes posibles para primera version:

- `ListingsPage`
- `ListingsIntro`
- `ListingPreviewCard`
- `ListingsFinalCta`

Datos:

- `src/data/listings.ts` o similar, con datos verificados y tipados;
- modelo `Listing` separado de componentes;
- no cargar datos desde PDFs directamente;
- no depender de V1.

Modelo minimo sugerido:

```ts
type Listing = {
  id: string;
  buildingName: string;
  address: string;
  city: string;
  state: "FL";
  zip: string;
  mls: string;
  currentPrice?: number;
  previousPrice?: number;
  priceStatus: "verified" | "hidden";
  availabilityStatus: "verified" | "ask";
  propertyType: string;
  beds: number;
  baths: number;
  sizeSqft: number;
  highlights: string[];
  image: {
    src: string;
    alt: Record<"es" | "en" | "fr-ca", string>;
  };
  lastVerifiedAt: string;
};
```

El tipo exacto puede ajustarse en implementacion, pero debe separar datos verificados de presentacion.

## 13. ES / EN / FR-CA

Listings debe existir como experiencia completa en los 3 idiomas.

Reglas:

- rutas publicas:
  - `/es/listings`
  - `/en/listings`
  - `/fr-ca/listings`
- locale de routing:
  - `es`
  - `en`
  - `fr-ca`
- content locale:
  - `es`
  - `en`
  - `fr-CA`
- no crear `/fr`;
- no prometer comunicacion humana directa en frances;
- FR-CA debe usar acentos correctos;
- evitar traducciones literales rigidas.

Nota FR-CA:

La UI puede estar completa en frances canadiense, pero cualquier CTA debe ser request-oriented. No debe sugerir que Jacquie habla frances salvo confirmacion.

## 14. Que queda para fase posterior

Dejar para despues:

- detalle por listing;
- galeria completa;
- carousel;
- mapa;
- filtros;
- search;
- sort;
- favoritos;
- formularios;
- price history visual;
- tax/HOA breakdown completo;
- disclaimers legales extensos;
- SEO por listing;
- schema.org real estate;
- integracion MLS;
- automatizacion de actualizacion de estado;
- Precon;
- fusion Listings + Precon en una seccion conjunta.

## 15. Riesgos

Riesgos de producto:

- volver a parecer portal;
- diluir Property Management;
- hacer que WhatsApp compita con browsing;
- publicar datos desactualizados;
- perder confianza por mostrar placeholders;
- volver visualmente al ADN Esteban/V1.

Riesgos de datos:

- precio vigente no confirmado;
- disponibilidad no confirmada;
- estado MLS desactualizado;
- price reduction mal interpretada;
- rental policy incompleta o sensible;
- imagenes sin permiso claro;
- atribucion contaminada con Esteban.

Riesgos de implementacion:

- crear rutas de detalle prematuras;
- agregar filtros/search por inercia;
- copiar componentes V1;
- usar datos hardcodeados sin `lastVerifiedAt`;
- traducir mal FR-CA;
- incluir `/fr` como alternate o ruta por error;
- agregar Listings al Header y cambiar la jerarquia del sitio.

## Decision recomendada antes de implementar

Los datos actuales no alcanzan todavia para publicar Listings como pieza visible.

Decision recomendada:

1. Pedir/verificar datos criticos de los 2 listings.
2. Confirmar imagenes aprobadas y limpias.
3. Confirmar atribucion publica Jacquie / Miami Life Realty.
4. Recien despues crear `/[locale]/listings` como pagina curada de 2 previews.
5. No crear detalle por listing en esta fase.
6. No agregar Listings al Header principal todavia.

## Informacion que falta pedir ahora

Para cada listing:

- precio vigente confirmado;
- si se puede mostrar precio o conviene ocultarlo;
- precio anterior confirmado si se quiere mostrar reduccion;
- disponibilidad actual;
- estado MLS actual;
- confirmacion del MLS number;
- imagen principal aprobada;
- URLs finales de imagenes;
- permiso de uso publico de imagenes;
- atribucion publica correcta;
- datos que Jacquie quiere destacar;
- datos que Jacquie prefiere omitir;
- confirmacion de que no debe aparecer Esteban en ningun punto.

Sin esa informacion, la implementacion debe esperar.
