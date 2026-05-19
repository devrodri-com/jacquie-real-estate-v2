# FOOTER_BRIEF.md

## 1. Rol del footer dentro de V2

El footer de V2 debe cerrar la experiencia con claridad, no abrir una nueva capa de exploración. Su función es:

- reforzar la marca personal de Jacquie Zarate;
- ofrecer rutas mínimas de navegación;
- dejar contacto directo disponible;
- sostener la coherencia multilingüe ES / EN / FR-CA;
- cerrar con un tono premium, simple y confiable.

El footer no debe convertir el sitio en portal inmobiliario, índice de servicios ni catálogo.

## 2. Estructura recomendada

Estructura mínima:

1. Brand
   - Jacquie Zarate
   - frase corta de posicionamiento por idioma.

2. Navigation
   - links principales permitidos.

3. Contact
   - WhatsApp
   - email
   - teléfono si se decide mostrarlo.

4. Language / FR-CA note
   - solo si aplica por idioma.

5. Credit
   - crédito discreto a Rodrigo Opalo / devrodri.com si corresponde.

Visualmente debe sentirse como cierre editorial: mucho aire controlado, borde superior sutil, tipografía sobria y sin bloques pesados.

## 3. Links permitidos

Links permitidos en el footer:

- ES: Gestion de propiedades, Sobre Jacquie, Contacto
- EN: Property Management, About, Contact
- FR-CA: Gestion de proprietes, A propos, Contact

Nota de implementación editorial:
En la interfaz final, FR-CA debe usar acentos correctos:

- Gestion de propriétés
- À propos

Rutas:

- `/{locale}/property-management`
- `/{locale}/about`
- `/{locale}/contact`

No incluir enlaces a Listings ni Precon en esta versión del footer.

## 4. Contactos permitidos

Contactos permitidos:

- WhatsApp: `+1 786 407 2591`
- Email: `jacqueline@miamiliferealty.com`
- Telefono visible si se decide mostrarlo: `+1 786 407 2591`

WhatsApp debe seguir siendo el canal principal. Email y telefono funcionan como soporte de confianza, no como conversion dominante.

No agregar formulario, Calendly, mapa, social links ni datos no confirmados.

## 5. Copy recomendado ES / EN / FR-CA

### ES

Brand:
`Jacquie Zarate`

Positioning:
`Tu persona de confianza en Miami.`

Navigation title:
`Explorar`

Contact title:
`Contacto`

WhatsApp label:
`WhatsApp`

Email label:
`Email`

Phone label:
`Teléfono`

Optional closing line:
`Acompañamiento personalizado para propietarios, compradores e inversores internacionales.`

Credit:
`Sitio por Rodrigo Opalo`

### EN

Brand:
`Jacquie Zarate`

Positioning:
`Your trusted person in Miami.`

Navigation title:
`Explore`

Contact title:
`Contact`

WhatsApp label:
`WhatsApp`

Email label:
`Email`

Phone label:
`Phone`

Optional closing line:
`Personalized guidance for international owners, buyers, and investors.`

Credit:
`Site by Rodrigo Opalo`

### FR-CA

Brand:
`Jacquie Zarate`

Positioning:
`Votre repère de confiance à Miami.`

Navigation title:
`Explorer`

Contact title:
`Contact`

WhatsApp label:
`WhatsApp`

Email label:
`Courriel`

Phone label:
`Téléphone`

Optional closing line:
`Accompagnement personnalisé pour propriétaires, acheteurs et investisseurs internationaux.`

Language note:
`Site disponible en français canadien. Réponse humaine confirmée en espagnol et en anglais.`

Credit:
`Site par Rodrigo Opalo`

## 6. Reglas para FR-CA

- FR-CA es idioma de primer nivel para la experiencia web.
- La interfaz final debe usar francés correcto con acentos.
- No afirmar que Jacquie habla francés.
- No usar frases que sugieran atencion humana directa en frances.
- Incluir, si se muestra una nota de idioma, la aclaracion discreta:
  `Site disponible en français canadien. Réponse humaine confirmée en espagnol et en anglais.`

## 7. Que NO incluir

No incluir:

- Listings;
- Precon;
- search;
- filtros;
- mapa;
- newsletter;
- formulario;
- Calendly;
- redes sociales no confirmadas;
- claims no confirmados;
- metricas;
- anos de experiencia si no estan confirmados;
- testimonios;
- premios o rankings;
- links de portal o catalogo;
- lenguaje agresivo de venta;
- promesas de ROI, rentabilidad, ocupacion o resultados.

## 8. Criterios de aceptacion

El footer queda aceptado si:

- aparece globalmente en las rutas MVP;
- no compite con la CTA principal de la pagina;
- mantiene la marca Jacquie Zarate como centro;
- ofrece solo links permitidos;
- muestra contacto de forma clara y sobria;
- WhatsApp sigue siendo la accion mas directa;
- no incluye Listings ni Precon;
- FR-CA no promete comunicacion humana directa en frances;
- el credito a Rodrigo Opalo / devrodri.com, si se incluye, es discreto;
- funciona bien en desktop y mobile;
- no genera overflow;
- `npm run lint` y `npm run build` quedan OK cuando se implemente.
