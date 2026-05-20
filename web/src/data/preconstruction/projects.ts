import { normalizedPreconstructionProjectsFromRaw } from "./normalize";
import type {
  PreconstructionProject,
  VisiblePreconstructionProject,
  VisibilityStatus,
} from "./types";

const curatedPreconstructionProjects: PreconstructionProject[] = [
  {
    id: "2200-brickell",
    name: "2200 Brickell Residences",
    slug: "2200-brickell",
    detailSlug: "2200-brickell-residences",
    searchableName: "2200 brickell residences",
    area: "Brickell",
    normalizedArea: "brickell",
    city: "Miami",
    priceFromUsd: 830000,
    priceStatus: "needs_current_verification",
    delivery: "2026",
    deliveryStatus: "needs_current_verification",
    mapQuery: "2200 Brickell Residences, Brickell, Miami, FL",
    buildingType: {
      es: "Boutique de 5 pisos con 105 residencias",
      en: "5-story boutique with 105 residences",
      "fr-ca": "Boutique de 5 étages avec 105 résidences",
    },
    designTeam: "ODA New York",
    description: {
      es: "Un proyecto boutique en Brickell para evaluar si buscás una residencia nueva con escala más contenida, amenidades claras y una ubicación urbana fuerte. La lectura debe enfocarse en confirmar disponibilidad, precio vigente y condiciones actuales antes de avanzar.",
      en: "A boutique project in Brickell to evaluate if you are looking for a new residence with a more contained scale, clear amenities, and a strong urban location. The right read is to confirm availability, current pricing, and current conditions before moving forward.",
      "fr-ca": "Un projet boutique à Brickell à évaluer si vous recherchez une résidence neuve à échelle plus contenue, avec des commodités claires et un emplacement urbain solide. L’approche consiste à confirmer la disponibilité, le prix actuel et les conditions actuelles avant d’avancer.",
    },
    highlights: {
      es: [
        "105 residencias con tipologías de 1 a 4 dormitorios y Garden Villas.",
        "Residencias de aproximadamente 590 a 2,070 sqft con balcones.",
        "Rooftop de gran escala con piscina, spa, pickleball y summer kitchen.",
        "Certificación WELL Building Standard enfocada en salud y bienestar.",
      ],
      en: [
        "105 residences with 1- to 4-bedroom layouts and Garden Villas.",
        "Residences from approximately 590 to 2,070 sq ft with balconies.",
        "Large-scale rooftop with pool, spa, pickleball, and summer kitchen.",
        "WELL Building Standard certification focused on health and wellbeing.",
      ],
      "fr-ca": [
        "105 résidences avec configurations de 1 à 4 chambres et Garden Villas.",
        "Résidences d’environ 590 à 2 070 pi² avec balcons.",
        "Toit-terrasse de grande ampleur avec piscine, spa, pickleball et cuisine d’été.",
        "Certification WELL Building Standard axée sur la santé et le bien-être.",
      ],
    },
    amenities: {
      es: [
        "Piscina estilo resort con cabañas.",
        "Wellness lounge con sauna.",
        "Gimnasio, coworking y salas de conferencia.",
        "Área infantil, cycling lounge y valet 24 horas.",
      ],
      en: [
        "Resort-style pool with cabanas.",
        "Wellness lounge with sauna.",
        "Gym, coworking, and conference rooms.",
        "Children’s area, cycling lounge, and 24-hour valet.",
      ],
      "fr-ca": [
        "Piscine de style resort avec cabanes.",
        "Espace bien-être avec sauna.",
        "Gym, espaces de coworking et salles de conférence.",
        "Espace pour enfants, lounge vélo et valet 24 h.",
      ],
    },
    residenceFeatures: {
      es: [
        "Ventanales de piso a techo con vidrio de impacto.",
        "Cocinas personalizadas por ODA con electrodomésticos Thermador y Bosch.",
        "Balcones privados con barandas de vidrio.",
        "Closets personalizados y baños principales de estilo premium.",
      ],
      en: [
        "Floor-to-ceiling impact glass windows.",
        "Custom kitchens by ODA with Thermador and Bosch appliances.",
        "Private balconies with glass railings.",
        "Custom closets and premium primary bathrooms.",
      ],
      "fr-ca": [
        "Fenêtres pleine hauteur avec verre résistant aux impacts.",
        "Cuisines personnalisées par ODA avec électroménagers Thermador et Bosch.",
        "Balcons privés avec garde-corps en verre.",
        "Penderies personnalisées et salles de bain principales au style premium.",
      ],
    },
    unitMix: {
      es: [
        "1 dormitorio",
        "2 dormitorios",
        "3 dormitorios",
        "Garden Villas de 2 dormitorios",
        "Garden Villas de 4 dormitorios",
      ],
      en: [
        "1 bedroom",
        "2 bedrooms",
        "3 bedrooms",
        "2-bedroom Garden Villas",
        "4-bedroom Garden Villas",
      ],
      "fr-ca": [
        "1 chambre",
        "2 chambres",
        "3 chambres",
        "Garden Villas de 2 chambres",
        "Garden Villas de 4 chambres",
      ],
    },
    paymentPlan: {
      es: [
        "20% al contrato",
        "10% al inicio de obra",
        "10% al top off",
        "60% al cierre",
      ],
      en: [
        "20% at contract",
        "10% at groundbreaking",
        "10% at top-off",
        "60% at closing",
      ],
      "fr-ca": [
        "20 % au contrat",
        "10 % au début des travaux",
        "10 % au top-off",
        "60 % à la clôture",
      ],
    },
    paymentPlanStatus: "needs_current_verification",
    heroImage: "https://ik.imagekit.io/devrodri/2200%20Brickell/BTag7Isw.jpeg",
    galleryImages: [
      "https://ik.imagekit.io/devrodri/2200%20Brickell/XMNHJ8ow.jpeg",
      "https://ik.imagekit.io/devrodri/2200%20Brickell/bw1m7DrA.jpeg",
      "https://ik.imagekit.io/devrodri/2200%20Brickell/xZLyIoxg.jpeg",
      "https://ik.imagekit.io/devrodri/2200%20Brickell/wHA79dJw.jpeg",
      "https://ik.imagekit.io/devrodri/2200%20Brickell/vHAiVX2A.jpeg",
      "https://ik.imagekit.io/devrodri/2200%20Brickell/-zYSgcQw.jpeg",
      "https://ik.imagekit.io/devrodri/2200%20Brickell/Zz7QF-6Q.jpeg",
      "https://ik.imagekit.io/devrodri/2200%20Brickell/7XtnkE7w.jpeg",
    ],
    riskFlags: [
      "rental_policy_claim",
      "payment_plan_unverified",
      "developer_copy",
      "esteban_tone",
      "outdated_price",
      "needs_current_verification",
    ],
    visibilityStatus: "visible",
    detailReady: true,
    source: "internal-curation",
    status: "needs_verification",
  },
  {
    id: "baccarat",
    name: "Baccarat Residences",
    slug: "baccarat",
    searchableName: "baccarat residences",
    area: "Brickell",
    normalizedArea: "brickell",
    city: "Miami",
    priceFromUsd: 1200000,
    priceStatus: "needs_current_verification",
    delivery: "2028",
    deliveryStatus: "needs_current_verification",
    heroImage:
      "https://ik.imagekit.io/devrodri/Baccarat/Related-OneBrickell-03-Extrior_Grua-01.jpg",
    riskFlags: ["needs_current_verification"],
    visibilityStatus: "candidate",
    detailReady: false,
    source: "internal-curation",
    status: "needs_verification",
  },
  {
    id: "cipriani",
    name: "Cipriani Residences",
    slug: "cipriani",
    searchableName: "cipriani residences",
    area: "Brickell",
    normalizedArea: "brickell",
    city: "Miami",
    priceFromUsd: 1500000,
    priceStatus: "needs_current_verification",
    delivery: "2026",
    deliveryStatus: "needs_current_verification",
    heroImage: "https://ik.imagekit.io/devrodri/CIpriani/1-2.jpg",
    riskFlags: ["needs_current_verification"],
    visibilityStatus: "candidate",
    detailReady: false,
    source: "internal-curation",
    status: "needs_verification",
  },
  {
    id: "elle-residences",
    name: "ELLE Residences Miami",
    slug: "elle-residences",
    detailSlug: "elle-residences-miami",
    searchableName: "elle residences miami",
    area: "Edgewater",
    normalizedArea: "edgewater",
    city: "Miami",
    address: "3618 NE 5th Ave, Miami, FL 33137",
    mapQuery: "3618 NE 5th Ave, Miami, FL 33137",
    priceFromUsd: 590000,
    priceStatus: "needs_current_verification",
    delivery: "2028",
    deliveryStatus: "needs_current_verification",
    buildingType: {
      es: "25 pisos y 180 residencias",
      en: "25 floors and 180 residences",
      "fr-ca": "25 étages et 180 résidences",
    },
    description: {
      es: "Un proyecto en Edgewater para revisar si buscás una opción nueva en una zona conectada con Design District, Wynwood, Midtown y Downtown. La selección de amenities es amplia, pero la decisión debe partir de datos actuales confirmados, no de promesas.",
      en: "A project in Edgewater to review if you are looking for a new option in an area connected to the Design District, Wynwood, Midtown, and Downtown. The amenity offering is broad, but the decision should start with current confirmed information, not promises.",
      "fr-ca": "Un projet à Edgewater à évaluer si vous recherchez une option neuve dans un secteur relié au Design District, à Wynwood, à Midtown et à Downtown. L’offre de commodités est large, mais la décision doit partir d’informations actuelles confirmées, et non de promesses.",
    },
    highlights: {
      es: [
        "25 pisos con 180 residencias.",
        "Tipologías de 1 a 2 dormitorios, aproximadamente 450 a 845 sqft.",
        "Lobby doble altura con valet y concierge 24/7.",
        "Rooftop Sky Pool con vistas hacia el norte, este y oeste.",
      ],
      en: [
        "25 floors with 180 residences.",
        "1- to 2-bedroom layouts, approximately 450 to 845 sq ft.",
        "Double-height lobby with valet and 24/7 concierge.",
        "Rooftop Sky Pool with views to the north, east, and west.",
      ],
      "fr-ca": [
        "25 étages avec 180 résidences.",
        "Configurations de 1 à 2 chambres, environ 450 à 845 pi².",
        "Hall double hauteur avec valet et concierge 24 h/24.",
        "Piscine Sky Pool sur le toit avec vues vers le nord, l’est et l’ouest.",
      ],
    },
    amenities: {
      es: [
        "Deck estilo resort con piscina, cabañas y lounge.",
        "Café, restaurant y boutique retail.",
        "Outdoor movie theater, shuffleboard y bocce.",
        "Gym, yoga garden, spa, sauna, steam y cold plunge.",
        "Maison Club con library, listening room y lounge con bar.",
      ],
      en: [
        "Resort-style deck with pool, cabanas, and lounge.",
        "Café, restaurant, and boutique retail.",
        "Outdoor movie theater, shuffleboard, and bocce.",
        "Gym, yoga garden, spa, sauna, steam, and cold plunge.",
        "Maison Club with library, listening room, and lounge with bar.",
      ],
      "fr-ca": [
        "Deck de style resort avec piscine, cabanes et lounge.",
        "Café, restaurant et boutique retail.",
        "Cinéma extérieur, shuffleboard et bocce.",
        "Gym, jardin de yoga, spa, sauna, vapeur et bassin froid.",
        "Maison Club avec bibliothèque, salle d’écoute et lounge avec bar.",
      ],
    },
    residenceFeatures: {
      es: [
        "Ventanales de piso a techo con vidrio de impacto.",
        "Cocinas con electrodomésticos Miele.",
        "Carpintería italiana Italkraft y mesadas de cuarzo.",
        "Piso de madera patrón chevron y smart climate control.",
      ],
      en: [
        "Floor-to-ceiling impact windows and doors.",
        "Kitchens with Miele appliances.",
        "Italian cabinetry by Italkraft and quartz countertops.",
        "Chevron-pattern wood flooring and smart climate control.",
      ],
      "fr-ca": [
        "Fenêtres et portes pleine hauteur avec verre résistant aux impacts.",
        "Cuisines avec électroménagers Miele.",
        "Menuiserie italienne Italkraft et comptoirs en quartz.",
        "Plancher de bois à motif chevron et contrôle intelligent du climat.",
      ],
    },
    unitMix: {
      es: ["1 a 2 dormitorios", "Aproximadamente 450 a 845 sqft"],
      en: ["1 to 2 bedrooms", "Approximately 450 to 845 sq ft"],
      "fr-ca": ["1 à 2 chambres", "Environ 450 à 845 pi²"],
    },
    paymentPlan: {
      es: [
        "20% al contrato",
        "10% al inicio de obra",
        "10% 90 días después o al nivel de amenities, lo que ocurra primero",
        "10% al top-off",
        "Balance al cierre",
      ],
      en: [
        "20% at contract",
        "10% at groundbreaking",
        "10% 90 days later or at amenity level, whichever comes first",
        "10% at top-off",
        "Balance at closing",
      ],
      "fr-ca": [
        "20 % au contrat",
        "10 % au début des travaux",
        "10 % 90 jours plus tard ou au niveau des commodités, selon la première éventualité",
        "10 % au top-off",
        "Solde à la clôture",
      ],
    },
    paymentPlanStatus: "needs_current_verification",
    heroImage:
      "https://ik.imagekit.io/devrodri/Elle%20Residences/Elle%20Residences%20Miami%2008.jpg",
    galleryImages: [
      "https://ik.imagekit.io/devrodri/Elle%20Residences/1.jpeg",
      "https://ik.imagekit.io/devrodri/Elle%20Residences/2.jpeg",
      "https://ik.imagekit.io/devrodri/Elle%20Residences/3.jpeg",
      "https://ik.imagekit.io/devrodri/Elle%20Residences/4.jpeg",
      "https://ik.imagekit.io/devrodri/Elle%20Residences/5.jpeg",
      "https://ik.imagekit.io/devrodri/Elle%20Residences/6.jpeg",
      "https://ik.imagekit.io/devrodri/Elle%20Residences/7.jpeg",
      "https://ik.imagekit.io/devrodri/Elle%20Residences/8.jpeg",
    ],
    riskFlags: [
      "payment_plan_unverified",
      "developer_copy",
      "esteban_tone",
      "outdated_price",
      "needs_current_verification",
    ],
    visibilityStatus: "visible",
    detailReady: true,
    source: "internal-curation",
    status: "needs_verification",
  },
  {
    id: "midtown-park",
    name: "Midtown Park",
    slug: "midtown-park",
    detailSlug: "midtown-park",
    searchableName: "midtown park",
    area: "Midtown",
    normalizedArea: "midtown",
    city: "Miami",
    address: "3055 N Miami Ave, Miami, FL 33127",
    mapQuery: "3055 N Miami Ave, Miami, FL 33127",
    priceFromUsd: 700000,
    priceStatus: "needs_current_verification",
    delivery: "2028",
    deliveryStatus: "needs_current_verification",
    designTeam: "Arquitectonica · Meyer Davis Studio",
    description: {
      es: "Un proyecto en Midtown para evaluar si buscás una residencia nueva en una zona urbana, conectada y con vida de barrio. La página ordena información inicial para revisar con criterio antes de pedir datos oficiales actualizados.",
      en: "A project in Midtown to evaluate if you are looking for a new residence in an urban, connected, neighborhood-driven area. This page organizes initial information so it can be reviewed with clear criteria before requesting updated official materials.",
      "fr-ca": "Un projet à Midtown à évaluer si vous recherchez une résidence neuve dans un secteur urbain, connecté et vivant. Cette page organise l’information initiale pour l’évaluer avec des critères clairs avant de demander les documents officiels à jour.",
    },
    highlights: {
      es: [
        "Arquitectura por Arquitectonica.",
        "Diseño por Meyer Davis Studio.",
        "Mix de 1 a 3 dormitorios, con opciones con den y terrazas.",
        "Ubicación en N Miami Ave, cerca de Design District y Wynwood.",
      ],
      en: [
        "Architecture by Arquitectonica.",
        "Design by Meyer Davis Studio.",
        "Mix of 1 to 3 bedrooms, including den and terrace options.",
        "N Miami Ave location near the Design District and Wynwood.",
      ],
      "fr-ca": [
        "Architecture par Arquitectonica.",
        "Design par Meyer Davis Studio.",
        "Configurations de 1 à 3 chambres, avec options den et terrasses.",
        "Emplacement sur N Miami Ave, près du Design District et de Wynwood.",
      ],
    },
    residenceFeatures: {
      es: [
        "Terrazas amplias en todas las residencias.",
        "Ventanales de piso a techo.",
        "Cocinas y baños de diseño contemporáneo.",
      ],
      en: [
        "Generous terraces in all residences.",
        "Floor-to-ceiling windows.",
        "Contemporary kitchens and baths.",
      ],
      "fr-ca": [
        "Grandes terrasses dans toutes les résidences.",
        "Fenêtres pleine hauteur.",
        "Cuisines et salles de bain au design contemporain.",
      ],
    },
    unitMix: {
      es: [
        "JR Suite · 1 baño · 588 sqft",
        "1 dormitorio · 1 baño · 670 sqft",
        "1 dormitorio + den · 2 baños · 782 a 1,060 sqft",
        "2 dormitorios + den · 2 a 3 baños · 1,168 a 1,276 sqft",
        "3 dormitorios · 3.5 baños · 1,616 a 1,730 sqft",
      ],
      en: [
        "JR Suite · 1 bath · 588 sq ft",
        "1 bedroom · 1 bath · 670 sq ft",
        "1 bedroom + den · 2 baths · 782 to 1,060 sq ft",
        "2 bedrooms + den · 2 to 3 baths · 1,168 to 1,276 sq ft",
        "3 bedrooms · 3.5 baths · 1,616 to 1,730 sq ft",
      ],
      "fr-ca": [
        "JR Suite · 1 sdb · 588 pi²",
        "1 chambre · 1 sdb · 670 pi²",
        "1 chambre + den · 2 sdb · 782 à 1 060 pi²",
        "2 chambres + den · 2 à 3 sdb · 1 168 à 1 276 pi²",
        "3 chambres · 3,5 sdb · 1 616 à 1 730 pi²",
      ],
    },
    paymentPlan: {
      es: [
        "Reserva: $50k para 1BR, $75k para 2BR, $100k para 3BR",
        "Balance hasta 20% al contrato",
        "10% al inicio de obra",
        "10% seis meses después del inicio",
        "10% al top-off",
        "50% al cierre",
      ],
      en: [
        "Reservation: $50k for 1BR, $75k for 2BR, $100k for 3BR",
        "Balance to 20% at contract",
        "10% at groundbreaking",
        "10% six months after groundbreaking",
        "10% at top-off",
        "50% at closing",
      ],
      "fr-ca": [
        "Réservation : 50 k$ pour 1 ch., 75 k$ pour 2 ch., 100 k$ pour 3 ch.",
        "Solde jusqu’à 20 % au contrat",
        "10 % au début des travaux",
        "10 % six mois après le début des travaux",
        "10 % au top-off",
        "50 % à la clôture",
      ],
    },
    paymentPlanStatus: "needs_current_verification",
    heroImage: "https://ik.imagekit.io/devrodri/Midtown%20Park/ca7LMYAw.jpeg",
    galleryImages: [
      "https://ik.imagekit.io/devrodri/Midtown%20Park/vdFMgVgA.jpeg",
      "https://ik.imagekit.io/devrodri/Midtown%20Park/75OtJzHQ.jpeg",
      "https://ik.imagekit.io/devrodri/Midtown%20Park/NfINBDkA.jpeg",
      "https://ik.imagekit.io/devrodri/Midtown%20Park/wWNfYD-A.jpeg",
      "https://ik.imagekit.io/devrodri/Midtown%20Park/e4T70bAA.jpeg",
      "https://ik.imagekit.io/devrodri/Midtown%20Park/WQ2gvs1w.jpeg",
      "https://ik.imagekit.io/devrodri/Midtown%20Park/DO-mYfRg.jpeg",
      "https://ik.imagekit.io/devrodri/Midtown%20Park/DKO5KMKQ.jpeg",
    ],
    riskFlags: [
      "payment_plan_unverified",
      "developer_copy",
      "esteban_tone",
      "outdated_price",
      "needs_current_verification",
    ],
    visibilityStatus: "visible",
    detailReady: true,
    source: "internal-curation",
    status: "needs_verification",
  },
];

function hasDetailSlug(
  project: PreconstructionProject,
): project is VisiblePreconstructionProject {
  return (
    project.visibilityStatus === "visible" &&
    project.detailReady &&
    Boolean(project.detailSlug)
  );
}

const curatedPreconstructionProjectById = new Map(
  curatedPreconstructionProjects.map((project) => [project.id, project]),
);

export const preconstructionProjects: PreconstructionProject[] =
  normalizedPreconstructionProjectsFromRaw.map(
    (project) => curatedPreconstructionProjectById.get(project.id) ?? project,
  );

export function getVisiblePreconstructionProjects(): VisiblePreconstructionProject[] {
  return preconstructionProjects.filter(hasDetailSlug);
}

export function getCandidatePreconstructionProjects(): PreconstructionProject[] {
  return getPreconstructionProjectsByVisibility("candidate");
}

export function getNeedsReviewPreconstructionProjects(): PreconstructionProject[] {
  return getPreconstructionProjectsByVisibility("needs_review");
}

export function getPreconstructionProjectsByVisibility(
  visibilityStatus: VisibilityStatus,
): PreconstructionProject[] {
  return preconstructionProjects.filter(
    (project) => project.visibilityStatus === visibilityStatus,
  );
}

export function getVisiblePreconstructionDetailSlugs(): string[] {
  return getVisiblePreconstructionProjects().map(
    (project) => project.detailSlug,
  );
}

export function getPreconstructionProjectBySlug(
  detailSlug: string,
): PreconstructionProject | undefined {
  return getVisiblePreconstructionProjects().find(
    (project) => project.detailSlug === detailSlug,
  );
}
