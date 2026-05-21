import rawPreconstructionExport from "./raw/precon-full-export-for-jacquie.json";
import type {
  LocalizedPreconstructionList,
  LocalizedPreconstructionText,
  PreconstructionProject,
  RentalPolicyCategory,
  PreconstructionRiskFlag,
  VerificationStatus,
  VisibilityStatus,
} from "./types";

type RawImageCandidate = {
  recommendedForJacquie?: boolean;
  url?: string;
};

type RawPreconstructionProject = {
  identification?: {
    id?: string;
    name?: string;
    slug?: string;
    city?: string;
    neighborhoodArea?: string;
    address?: string | null;
    isHidden?: boolean;
    hiddenReason?: string | null;
    buildingType?: string | null;
    developer?: string[] | null;
  };
  images?: {
    heroImage?: string;
    galleryImages?: string[];
    allImages?: RawImageCandidate[];
  };
  pricingDelivery?: {
    priceFromUsd?: number;
    priceStatus?: VerificationStatus;
    deliveryCompletion?: string | null;
    deliveryStatus?: VerificationStatus;
  };
  descriptionCopy?: {
    shortDescriptionEs?: string | null;
    shortDescriptionEn?: string | null;
  };
  highlightsFeatures?: {
    categorizedEs?: {
      amenities?: string[];
      projectHighlights?: string[];
      residences?: string[];
    };
    categorizedEn?: {
      amenities?: string[];
      projectHighlights?: string[];
      residences?: string[];
    };
  };
  locationMap?: {
    exactAddress?: string | null;
    mapQuery?: string | null;
    neighborhoodFallback?: string | null;
  };
  paymentPlan?: {
    paymentPlanEn?: string[];
    paymentPlanEs?: string[];
    paymentPlanStatus?: VerificationStatus;
  };
  publishRecommendation?: {
    recommendedStatus?: string;
    shouldHideFromJacquie?: boolean;
  };
  rawSourceFields?: {
    rentalPolicyEn?: string | null;
    rentalPolicyEs?: string | null;
    unitMixEn?: unknown[];
    unitMixEs?: unknown[];
  };
  riskFlags?: (string | { id?: string })[];
  unitMixResidences?: {
    unitMixEn?: string[];
    unitMixEs?: string[];
  };
};

type RawPreconstructionExport = {
  projects: RawPreconstructionProject[];
};

const visibleProjectIds = new Set([
  "2200-brickell",
  "elle-residences",
  "midtown-park",
]);

const candidateProjectIds = new Set(["baccarat", "cipriani"]);

const sensitiveRiskFlags = new Set<PreconstructionRiskFlag>([
  "roi_claim",
  "profitability_claim",
  "returns_claim",
  "appreciation_claim",
  "projected_income_claim",
  "eb5_claim",
  "leaseback_claim",
  "str_claim",
  "short_term_rental_claim",
  "no_rental_restrictions_claim",
  "rental_policy_claim",
  "payment_plan_claim",
  "payment_plan_unverified",
  "developer_legal_claim",
  "developer_tax_claim",
  "tax_or_legal_claim",
]);

function normalizeSlug(slug?: string) {
  return (slug ?? "")
    .replace(/^\/proyectos\//, "")
    .replace(/^\/+/, "")
    .trim();
}

function normalizeSearchValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function normalizeDetailSlug(id: string, slug: string) {
  const detailSlugById: Record<string, string> = {
    "2200-brickell": "2200-brickell-residences",
    baccarat: "baccarat-residences",
    cipriani: "cipriani-residences",
    "elle-residences": "elle-residences-miami",
  };

  return detailSlugById[id] ?? slug;
}

function getSortDelivery(delivery?: string | null) {
  if (!delivery) {
    return undefined;
  }

  const yearMatch = delivery.match(/20\d{2}/);

  return yearMatch ? Number(yearMatch[0]) : undefined;
}

function includesAny(value: string, terms: string[]) {
  const normalized = normalizeSearchValue(value);

  return terms.some((term) => normalized.includes(term));
}

function getRentalPolicyCategory(project: RawPreconstructionProject): RentalPolicyCategory {
  const source = [
    project.rawSourceFields?.rentalPolicyEs,
    project.rawSourceFields?.rentalPolicyEn,
    ...(project.riskFlags ?? []).map((flag) =>
      typeof flag === "string" ? flag : flag.id ?? "",
    ),
  ]
    .filter(Boolean)
    .join(" ");

  if (!source) {
    return "to_confirm";
  }

  if (includesAny(source, ["6 meses", "6 months", "six months"])) {
    return "6_months";
  }

  if (includesAny(source, ["90 dias", "90 days", "90-day"])) {
    return "90_days";
  }

  if (includesAny(source, ["60 dias", "60 days", "60-day"])) {
    return "60_days";
  }

  if (includesAny(source, ["30 dias", "30 days", "30-day"])) {
    return "30_days";
  }

  if (
    includesAny(source, [
      "sin restricciones",
      "no restrictions",
      "no rental restrictions",
    ])
  ) {
    return "no_restrictions";
  }

  if (
    includesAny(source, [
      "renta corta",
      "short term",
      "short-term",
      "airbnb",
      "str_claim",
    ])
  ) {
    return "short_term";
  }

  return "to_confirm";
}

function normalizeRiskFlag(
  flag: string | { id?: string },
): PreconstructionRiskFlag | null {
  const flagId = typeof flag === "string" ? flag : flag.id;

  if (!flagId) {
    return null;
  }

  const normalized = flagId.trim().toLowerCase().replaceAll("-", "_");

  if (normalized === "payment_plan_claim") {
    return "payment_plan_unverified";
  }

  if (normalized === "legal_review") {
    return "legal_review";
  }

  const allowedFlags: PreconstructionRiskFlag[] = [
    "roi_claim",
    "profitability_claim",
    "returns_claim",
    "appreciation_claim",
    "projected_income_claim",
    "eb5_claim",
    "leaseback_claim",
    "str_claim",
    "short_term_rental_claim",
    "no_rental_restrictions_claim",
    "rental_policy_claim",
    "payment_plan_unverified",
    "developer_copy",
    "developer_legal_claim",
    "developer_tax_claim",
    "tax_or_legal_claim",
    "outdated_price",
    "outdated_delivery",
    "missing_images",
    "weak_visual_quality",
    "legal_review",
    "brand_usage_review",
    "esteban_tone",
    "needs_current_verification",
  ];

  return allowedFlags.includes(normalized as PreconstructionRiskFlag)
    ? (normalized as PreconstructionRiskFlag)
    : null;
}

function getVisibilityStatus(
  project: RawPreconstructionProject,
): VisibilityStatus {
  const id = project.identification?.id ?? "";
  const isLegalReview =
    id === "mercedes-benz-places" ||
    project.identification?.isHidden ||
    project.publishRecommendation?.shouldHideFromJacquie;

  if (isLegalReview) {
    return "hidden/legal_review";
  }

  if (visibleProjectIds.has(id)) {
    return "visible";
  }

  if (candidateProjectIds.has(id)) {
    return "candidate";
  }

  if (project.publishRecommendation?.recommendedStatus === "discard") {
    return "discard";
  }

  return "needs_review";
}

function isRemoteImageUrl(url: string | undefined) {
  return Boolean(url?.startsWith("https://ik.imagekit.io/"));
}

function uniqueImageUrls(urls: string[]) {
  return Array.from(new Set(urls.filter(isRemoteImageUrl)));
}

function getImageCandidates(project: RawPreconstructionProject) {
  const recommendedImages =
    project.images?.allImages
      ?.filter((image) => image.recommendedForJacquie && image.url)
      .map((image) => image.url as string) ?? [];

  const allImages =
    project.images?.allImages
      ?.map((image) => image.url)
      .filter((url): url is string => Boolean(url)) ?? [];

  return uniqueImageUrls([
    project.images?.heroImage ?? "",
    ...recommendedImages,
    ...(project.images?.galleryImages ?? []),
    ...allImages,
  ]);
}

function getPublicImages(project: RawPreconstructionProject) {
  const candidates = getImageCandidates(project);

  return {
    heroImage: candidates[0],
    galleryImages: candidates.slice(1, 9),
  };
}

const sensitiveCopyTerms = [
  "airbnb",
  "best investment",
  "eb-5",
  "eb5",
  "exclusive",
  "financing available",
  "financiacion",
  "financiación",
  "guarantee",
  "garant",
  "leaseback",
  "no rental restrictions",
  "profitability",
  "projected income",
  "rentabilidad",
  "return",
  "roi",
  "short-term rental",
  "str",
  "tax",
];

function getSafeList(items: string[] | undefined, limit: number) {
  return (items ?? [])
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .filter((item) => !includesAny(item, sensitiveCopyTerms))
    .slice(0, limit);
}

function normalizeRawUnitItem(item: unknown): string | null {
  if (typeof item === "string") {
    return item;
  }

  if (item && typeof item === "object" && "label" in item) {
    const label = (item as { label?: unknown }).label;

    return typeof label === "string" ? label : null;
  }

  return null;
}

function getUnitMix(project: RawPreconstructionProject): LocalizedPreconstructionList | undefined {
  const es = getSafeList(
    [
      ...(project.unitMixResidences?.unitMixEs ?? []),
      ...((project.rawSourceFields?.unitMixEs ?? [])
        .map(normalizeRawUnitItem)
        .filter(Boolean) as string[]),
    ],
    5,
  );
  const en = getSafeList(
    [
      ...(project.unitMixResidences?.unitMixEn ?? []),
      ...((project.rawSourceFields?.unitMixEn ?? [])
        .map(normalizeRawUnitItem)
        .filter(Boolean) as string[]),
    ],
    5,
  );

  if (!es.length && !en.length) {
    return undefined;
  }

  return {
    es,
    en,
    "fr-ca": [
      "Les typologies doivent être confirmées avec les documents officiels à jour.",
    ],
  };
}

function getPaymentPlan(project: RawPreconstructionProject): LocalizedPreconstructionList | undefined {
  const es = getSafeList(project.paymentPlan?.paymentPlanEs, 6);
  const en = getSafeList(project.paymentPlan?.paymentPlanEn, 6);

  if (!es.length && !en.length) {
    return undefined;
  }

  return {
    es,
    en,
    "fr-ca": [
      "Le plan de paiement est disponible comme information initiale et doit être confirmé avec les documents officiels à jour.",
    ],
  };
}

function getHighlights(
  project: RawPreconstructionProject,
  area: string,
): LocalizedPreconstructionList {
  const es = getSafeList(
    project.highlightsFeatures?.categorizedEs?.projectHighlights,
    4,
  );
  const en = getSafeList(
    project.highlightsFeatures?.categorizedEn?.projectHighlights,
    4,
  );

  return {
    es: es.length
      ? es
      : [
          `Proyecto ubicado en ${area}.`,
          "Precio, entrega y disponibilidad sujetos a confirmación actual.",
        ],
    en: en.length
      ? en
      : [
          `Project located in ${area}.`,
          "Pricing, delivery, and availability are subject to current confirmation.",
        ],
    "fr-ca": [
      `Projet situé dans le secteur ${area}.`,
      "Le prix, la livraison et la disponibilité doivent être confirmés avec les informations actuelles.",
    ],
  };
}

function getAmenities(project: RawPreconstructionProject): LocalizedPreconstructionList | undefined {
  const es = getSafeList(project.highlightsFeatures?.categorizedEs?.amenities, 5);
  const en = getSafeList(project.highlightsFeatures?.categorizedEn?.amenities, 5);

  if (!es.length && !en.length) {
    return undefined;
  }

  return {
    es,
    en,
    "fr-ca": [
      "Les commodités doivent être vérifiées avec les informations officielles à jour.",
    ],
  };
}

function getResidenceFeatures(project: RawPreconstructionProject): LocalizedPreconstructionList | undefined {
  const es = getSafeList(project.highlightsFeatures?.categorizedEs?.residences, 4);
  const en = getSafeList(project.highlightsFeatures?.categorizedEn?.residences, 4);

  if (!es.length && !en.length) {
    return undefined;
  }

  return {
    es,
    en,
    "fr-ca": [
      "Les caractéristiques des résidences doivent être confirmées avec les documents officiels à jour.",
    ],
  };
}

function getDescription(
  name: string,
  area: string,
): LocalizedPreconstructionText {
  return {
    es: `${name} es un proyecto en ${area} para revisar con una mirada clara sobre zona, precio inicial y etapa actual. La prioridad es confirmar información vigente antes de evaluar si encaja con tu situación.`,
    en: `${name} is a project in ${area} to review with a clear look at area, starting price, and current stage. The priority is to confirm current information before evaluating whether it fits your situation.`,
    "fr-ca": `${name} est un projet dans le secteur ${area} à évaluer avec une lecture claire du secteur, du prix de départ et de l’étape actuelle. La priorité est de confirmer les informations à jour avant d’évaluer s’il correspond à votre situation.`,
  };
}

function getMapQuery(
  project: RawPreconstructionProject,
  name: string,
  area: string,
) {
  const candidates = [
    project.locationMap?.exactAddress,
    project.identification?.address,
    project.locationMap?.mapQuery,
    project.locationMap?.neighborhoodFallback,
    project.identification?.neighborhoodArea,
    project.identification?.city,
  ].filter((value): value is string => Boolean(value));

  const usableCandidate = candidates.find((candidate) =>
    includesAny(candidate, [
      "fl",
      "florida",
      "miami",
      "brickell",
      "hollywood",
      "orlando",
      "wynwood",
      "beach",
      "hallandale",
      "naples",
      "kissimmee",
    ]),
  );

  return usableCandidate ?? `${name}, ${area}, Florida`;
}

function getIsPublicCatalogCandidate(
  project: RawPreconstructionProject,
  visibilityStatus: VisibilityStatus,
  heroImage: string,
) {
  if (visibilityStatus === "discard") {
    return false;
  }

  if (visibilityStatus === "hidden/legal_review") {
    return false;
  }

  return Boolean(project.identification?.name && heroImage);
}

function normalizeProject(
  project: RawPreconstructionProject,
): PreconstructionProject | null {
  const id = project.identification?.id;
  const name = project.identification?.name;
  const publicImages = getPublicImages(project);
  const heroImage = publicImages.heroImage;

  if (!id || !name || !heroImage) {
    return null;
  }

  const visibilityStatus = getVisibilityStatus(project);
  const riskFlags = Array.from(
    new Set(
      (project.riskFlags ?? [])
        .map(normalizeRiskFlag)
        .filter((flag): flag is PreconstructionRiskFlag => Boolean(flag)),
    ),
  );

  if (
    visibilityStatus !== "visible" &&
    riskFlags.some((flag) => sensitiveRiskFlags.has(flag)) &&
    !riskFlags.includes("needs_current_verification")
  ) {
    riskFlags.push("needs_current_verification");
  }

  const slug = normalizeSlug(project.identification?.slug) || id;
  const area =
    project.identification?.neighborhoodArea ??
    project.identification?.city ??
    "Miami";
  const delivery = project.pricingDelivery?.deliveryCompletion ?? undefined;
  const isPublicCatalogCandidate = getIsPublicCatalogCandidate(
    project,
    visibilityStatus,
    heroImage,
  );
  const detailSlug = isPublicCatalogCandidate
    ? normalizeDetailSlug(id, slug)
    : undefined;

  return {
    id,
    name,
    slug,
    detailSlug,
    searchableName: normalizeSearchValue(name),
    area,
    normalizedArea: normalizeSearchValue(area),
    rentalPolicyCategory: getRentalPolicyCategory(project),
    city: project.identification?.city,
    address:
      project.locationMap?.exactAddress ??
      project.identification?.address ??
      undefined,
    mapQuery: getMapQuery(project, name, area),
    priceFromUsd: project.pricingDelivery?.priceFromUsd,
    sortPrice: project.pricingDelivery?.priceFromUsd,
    priceStatus:
      project.pricingDelivery?.priceStatus ?? "needs_current_verification",
    delivery,
    sortDelivery: getSortDelivery(delivery),
    deliveryStatus:
      project.pricingDelivery?.deliveryStatus ?? "needs_current_verification",
    buildingType:
      project.identification?.buildingType &&
      !includesAny(project.identification.buildingType, ["candidate"])
        ? {
            es: project.identification.buildingType,
            en: project.identification.buildingType,
            "fr-ca": project.identification.buildingType,
          }
        : undefined,
    description: getDescription(name, area),
    highlights: getHighlights(project, area),
    amenities: getAmenities(project),
    residenceFeatures: getResidenceFeatures(project),
    unitMix: getUnitMix(project),
    paymentPlan: getPaymentPlan(project),
    paymentPlanStatus:
      project.paymentPlan?.paymentPlanStatus ?? "needs_current_verification",
    heroImage,
    galleryImages: publicImages.galleryImages,
    riskFlags,
    visibilityStatus,
    isPublicCatalogCandidate,
    detailReady: isPublicCatalogCandidate,
    exclusionReason: isPublicCatalogCandidate
      ? undefined
      : visibilityStatus === "hidden/legal_review"
        ? "hidden/legal_review"
        : visibilityStatus === "discard"
          ? "discard"
          : "missing_public_catalog_fields",
    source: "raw-import",
    status: "needs_verification",
  };
}

export const rawPreconstructionProjects = (
  rawPreconstructionExport as unknown as RawPreconstructionExport
).projects;

export const normalizedPreconstructionProjectsFromRaw =
  rawPreconstructionProjects
    .map(normalizeProject)
    .filter(
      (project): project is PreconstructionProject => project !== null,
    );
