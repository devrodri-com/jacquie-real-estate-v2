import rawPreconstructionExport from "./raw/precon-full-export-for-jacquie.json";
import type {
  PreconstructionProject,
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
  publishRecommendation?: {
    recommendedStatus?: string;
    shouldHideFromJacquie?: boolean;
  };
  riskFlags?: (string | { id?: string })[];
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

function getRecommendedImages(project: RawPreconstructionProject) {
  const recommendedImages =
    project.images?.allImages
      ?.filter((image) => image.recommendedForJacquie && image.url)
      .map((image) => image.url as string) ?? [];

  return recommendedImages.length
    ? recommendedImages
    : (project.images?.galleryImages ?? []);
}

function normalizeProject(
  project: RawPreconstructionProject,
): PreconstructionProject | null {
  const id = project.identification?.id;
  const name = project.identification?.name;
  const heroImage = project.images?.heroImage;

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

  return {
    id,
    name,
    slug,
    searchableName: normalizeSearchValue(name),
    area,
    normalizedArea: normalizeSearchValue(area),
    city: project.identification?.city,
    address: project.identification?.address ?? undefined,
    mapQuery:
      project.identification?.address ??
      project.identification?.neighborhoodArea ??
      project.identification?.city ??
      name,
    priceFromUsd: project.pricingDelivery?.priceFromUsd,
    priceStatus:
      project.pricingDelivery?.priceStatus ?? "needs_current_verification",
    delivery,
    deliveryStatus:
      project.pricingDelivery?.deliveryStatus ?? "needs_current_verification",
    heroImage,
    galleryImages: getRecommendedImages(project),
    riskFlags,
    visibilityStatus,
    detailReady: visibilityStatus === "visible",
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
