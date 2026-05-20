// Confirm this public number before launch.
export const WHATSAPP_NUMBER = "17864072591";

export type WhatsAppLocale = "es" | "en" | "fr-ca";
export type WhatsAppContext =
  | "general"
  | "propertyManagement"
  | "midConversion"
  | "final"
  | "preConstruction";

export const WHATSAPP_MESSAGES: Record<
  WhatsAppLocale,
  Record<WhatsAppContext, string>
> = {
  es: {
    general: "Hola Jacquie, quiero hablar sobre mi próximo paso en Miami.",
    propertyManagement:
      "Hola Jacquie, tengo una propiedad en Miami y quiero saber si podés ayudarme a gestionarla.",
    midConversion:
      "Hola Jacquie, quiero saber si mi propiedad puede gestionarse mejor.",
    final:
      "Hola Jacquie, quiero contarte mi situación y ver cuál sería el próximo paso.",
    preConstruction:
      "Hola Jacquie, quiero consultar por un proyecto de preconstrucción en Miami.",
  },
  en: {
    general: "Hi Jacquie, I’d like to talk about my next step in Miami.",
    propertyManagement:
      "Hi Jacquie, I have a property in Miami and would like to know if you can help me manage it.",
    midConversion:
      "Hi Jacquie, I’d like to understand if my property could be managed better.",
    final:
      "Hi Jacquie, I’d like to share my situation and understand the next step.",
    preConstruction:
      "Hi Jacquie, I’d like to ask about a pre-construction project in Miami.",
  },
  "fr-ca": {
    general: "Bonjour Jacquie, j’aimerais parler de mon prochain pas à Miami.",
    propertyManagement:
      "Bonjour Jacquie, j’ai une propriété à Miami et j’aimerais savoir si vous pouvez m’aider à la gérer.",
    midConversion:
      "Bonjour Jacquie, j’aimerais savoir si ma propriété pourrait être mieux gérée.",
    final:
      "Bonjour Jacquie, j’aimerais expliquer ma situation et comprendre la prochaine étape.",
    preConstruction:
      "Bonjour Jacquie, j’aimerais demander de l’information sur un projet en préconstruction à Miami.",
  },
};

function getWhatsAppMessage(
  locale: WhatsAppLocale,
  context: WhatsAppContext,
  projectName?: string,
): string {
  if (context !== "preConstruction" || !projectName) {
    return WHATSAPP_MESSAGES[locale][context];
  }

  const projectMessages: Record<WhatsAppLocale, string> = {
    es: `Hola Jacquie, quiero consultar por un proyecto de preconstrucción en Miami: ${projectName}.`,
    en: `Hi Jacquie, I’d like to ask about the pre-construction project ${projectName} in Miami.`,
    "fr-ca": `Bonjour Jacquie, j’aimerais demander de l’information sur le projet en préconstruction ${projectName} à Miami.`,
  };

  return projectMessages[locale];
}

export function createWhatsAppUrl(
  locale: WhatsAppLocale,
  context: WhatsAppContext = "general",
  projectName?: string,
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    getWhatsAppMessage(locale, context, projectName),
  )}`;
}
