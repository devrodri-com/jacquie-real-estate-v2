# MVP Audit Report — Post-P0

Fecha: 2026-05-19
Rutas auditadas: 12 (ES / EN / FR-CA × Home / Property Management / About / Contact)
Herramientas: Claude in Chrome (navegación + accessibility tree + lectura) + Bash sandbox (lint).

---

## Veredicto

**No listo para revisión final.** Hay 1 problema crítico funcional (regresión de WhatsApp prefill), 1 problema crítico narrativo no resuelto y 2 verificaciones que el auditor automatizado no pudo completar y requieren validación manual local.

Con esos 4 puntos cerrados, queda listo.

---

## 1. Cobertura del audit

| Aspecto | Cobertura |
|---|---|
| 12 rutas cargan (status implícito por title) | ✓ confirmado |
| Header desktop estructura | ✓ confirmado |
| Footer desktop estructura | ✓ confirmado |
| Selector de idioma preserva ruta | ✓ confirmado en las 12 rutas |
| Todos los CTAs WhatsApp apuntan al número correcto | ✓ confirmado |
| No aparecen Listings ni Pre-construction | ✓ confirmado |
| FR-CA no promete comunicación humana directa en francés | ✓ confirmado (Hero + Footer + About) |
| ES / EN / FR-CA copy completa | ✓ confirmado |
| `npm run lint` | ✓ pasa sin warnings |
| Errores de consola | ⚠ no capturados (limitación de tooling — ver Anexos) |
| Overflow horizontal | ✗ no verificable sin JS (bloqueado) |
| Mobile cropping / botones cortados | ✗ no verificable sin screenshots (bloqueados) |
| `npm run build` | ✗ no verificable en sandbox (sin internet para descargar swc-linux-arm64) |
| Screenshots guardados | ✗ no se pudieron generar (conflicto de extensión Chrome) |

---

## 2. Problemas críticos

### C1. Regresión: prefills WhatsApp genéricos en `/property-management`

Las páginas `/es/property-management`, `/en/property-management` y `/fr-ca/property-management` tienen los CTAs etiquetados como "Consultar por mi propiedad" / "Ask about my property" / "Demander de l'information sur ma propriété", pero el texto prefijado en WhatsApp es el genérico del Hero:

- ES: `Hola Jacquie, quiero hablar sobre mi próximo paso en Miami.`
- EN: `Hi Jacquie, I'd like to talk about my next step in Miami.`
- FR-CA: `Bonjour Jacquie, j'aimerais parler de mon prochain pas à Miami.`

Esto sucede en el CTA del Hero y en el CTA del Final de cada página `/property-management` (ambos botones, mismo prefill genérico).

Inconsistencia: la sección Property Management del Home **sí** usa prefill específico (`tengo una propiedad en Miami y quiero saber si podés ayudarme a gestionarla`). El usuario que entra al sitio por el Home recibe el mensaje correcto; el que entra directo al `/property-management` (o navega ahí desde el header) recibe el genérico.

Es regresión respecto al trabajo de contextualizar prefills.

### C2. About: headline duplicado con Home

`/es/about`, `/en/about` y `/fr-ca/about` tienen exactamente el mismo headline que el Home Hero en cada idioma:

- ES: "Tu persona de confianza en Miami"
- EN: "Your trusted person in Miami"
- FR-CA: "Votre repère de confiance à Miami"

Fue flagged en reviews anteriores y no se resolvió. About debería profundizar, no repetir el slogan de marca.

### C3. Build no verificado independientemente

El sandbox de auditoría no tiene acceso a internet, por lo que no pudo descargar `@next/swc-linux-arm64-gnu` requerido para compilar Next.js en el entorno de audit. El resultado `npm run build` no se pudo validar acá.

Acción requerida: el usuario debe ejecutar `npm run build` localmente en la Mac antes de considerar el MVP cerrado y confirmar exit 0.

### C4. Verificación visual no completada

El tool de screenshots de Claude in Chrome falla con `Cannot access a chrome-extension:// URL of different extension` — conflicto probable con otra extensión instalada (AdBlock, WebChatGPT, Honey, etc.). Tampoco se pudo ejecutar JavaScript en página, lo que bloquea checks de overflow.

Items pendientes de validación visual manual:

1. **Hero Home (todos los idiomas)**: confirmar que el rectángulo lila vacío detrás de la foto de Jacquie (reportado en review anterior) ya no aparece.
2. **Mobile @ 390px**: validar que el botón del menú móvil no se corta y que los CTAs largos como "Demander de l'information sur ma propriété" no rompen el layout ni quedan clippeados.
3. **Mobile**: validar que el footer y sus links (sobre todo "Sitio por Rodrigo Opalo" / "Site par Rodrigo Opalo") quedan visibles sin overflow.
4. **Overflow horizontal**: validar manualmente en DevTools (sin scroll horizontal en ningún viewport entre 360 y 1920).
5. **Imagen del Hero**: que cargue sin warnings y mantenga relación de aspecto en mobile.

---

## 3. Problemas menores (polish, no bloquean)

### M1. Process inconsistente Home vs `/property-management`
Home "Cómo funciona" usa 3 pasos. `/property-management` "Cómo funciona" usa 4 bullets. Alinear a 3 mantiene coherencia.

### M2. Subline genérico bajo CTAs del Hero
"Acompañamiento personalizado para propietarios e inversores internacionales." / "Personalized guidance for international owners and investors." / "Accompagnement personnalisé pour propriétaires et investisseurs internationaux." → frase intercambiable con cualquier realtor.

### M3. Headline abstracto en Jacquie Trust Section
"Una guía local para tomar decisiones con más confianza" / "Local guidance for more confident decisions" / "Un accompagnement local pour décider avec plus de confiance" → genérico.

### M4. Label "Señales de confianza" / "Trust signals" / "Signaux de confiance"
Suena a checklist. Alternativa más cálida sin cambiar el contenido.

### M5. FR-CA "Repère de confiance"
Funciona pero algo frío para QC. Recomendable pasar por hablante nativo.

### M6. Mid CTA y Final CTA en Home siguen cercanos en peso
Sigue siendo un punto a observar. Si los cambios de jerarquía visual ya bajaron el Mid lo suficiente, OK; verificar manualmente.

### M7. Console / network tracking
Claude in Chrome inicia el tracking de consola/network solo después de la primera invocación del tool, por lo que requiere refresh de página para capturar eventos del load inicial. En esta auditoría no se capturaron errores de consola activos, pero tampoco se puede afirmar que no haya. Validar manualmente con DevTools abierto durante navegación.

---

## 4. Lo que funciona bien y conviene proteger

- **Header limpio** en los 3 idiomas: brand + 3 links + selector ES/EN/FR-CA + menú móvil.
- **Footer consistente**: brand, tagline, nav, contactos (WhatsApp / email / teléfono), copyright, crédito a Rodrigo Opalo.
- **Disclosure FR-CA**: "Site disponible en français canadien. Réponse humaine confirmée en espagnol et en anglais." aparece en el Hero del Home FR-CA y en el footer de cada ruta FR-CA. Cobertura completa.
- **Selector de idioma preserva la ruta**: `/es/about` → EN lleva a `/en/about`, no a `/en`. Confirmado en las 12 rutas.
- **No hay rastros de Listings ni Precon** en ninguna ruta. Limpieza correcta.
- **Página `/property-management` con sección "Transparencia"**: el bloque "No se hacen promesas de ocupación ni rentabilidad garantizada" es un diferenciador fuerte.
- **Sección "Canaux" / "Channels" / "Canales"** en `/contact` declara claramente los idiomas de comunicación humana. Bien hecho.
- **Lint pasa sin output**. Buen indicador de higiene de código.
- **Mobile nav unificada**: "Sobre Jacquie" consistente entre desktop y mobile.

---

## 5. Ubicación del reporte y screenshots

- **Este reporte**: `/Users/lolo/PROYECTOS/jacquie-real-estate-v2/MVP_AUDIT_REPORT.md`
- **Lint log**: `/Users/lolo/PROYECTOS/jacquie-real-estate-v2/MVP_AUDIT_REPORT.md` adjunto / o ver `outputs/lint.log` interno
- **Build log**: sin output válido (no se pudo ejecutar en sandbox; ver C3)
- **Screenshots**: no generados (ver C4 — limitación de tooling)

---

## 6. Recomendación final

**No aprobar la versión "lista para revisión final" todavía.** Pasos en orden:

1. **Arreglar C1** (los 3 prefills en `/property-management` ES/EN/FR-CA — cambiar el texto WhatsApp para que coincida con la intención del label "Consultar por mi propiedad" / "Ask about my property" / "Demander de l'information sur ma propriété"). Es un cambio acotado, puramente de strings.

2. **Decidir C2** (headline `/about`):
   - Opción A: cambiar el headline de About en los 3 idiomas para que profundice y no duplique el de Home.
   - Opción B: aceptar la duplicación como decisión de marca y cerrar.
   Mi recomendación: A. Es la diferencia entre About como página y About como recordatorio.

3. **Verificar C3 localmente**: ejecutar `npm run build` en la Mac y confirmar exit 0. Si falla, resolver antes de cerrar.

4. **Hacer la pasada visual manual C4**: validar en Chrome local los 5 puntos listados (Hero, mobile menu, CTAs largos, footer mobile, overflow). Si pasa, listo.

5. **Items menores M1-M7**: opcionales para esta entrega o para iteración posterior.

Con C1, C2, C3 y C4 cerrados, el MVP queda **listo para revisión final**.

---

## Anexos — limitaciones de tooling encontradas

Para próximas auditorías, considerar que el setup de Claude in Chrome en este entorno tiene los siguientes bloqueos persistentes:

- `screenshot` falla con `Cannot access a chrome-extension:// URL of different extension`.
- `javascript_tool` falla con el mismo error.
- `left_click` sobre elementos del DOM falla con el mismo error.
- Causa probable: alguna de las extensiones instaladas (AdBlock, WebChatGPT, Honey, Capital One, Klarna, Selector de Drive) está inyectando content scripts que conflictan con la API de captura de Claude in Chrome.

Mitigaciones futuras:
- Desinstalar temporalmente AdBlock y WebChatGPT antes de auditorías visuales.
- O usar Playwright con la web expuesta vía ngrok desde la Mac.
- O activar Computer Use en la app de Claude y operar sobre el escritorio en vez de sobre la extensión.
