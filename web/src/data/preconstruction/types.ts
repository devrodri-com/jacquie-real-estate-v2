export type PreconstructionLocale = "es" | "en" | "fr-ca";

export type LocalizedPreconstructionText = Record<
  PreconstructionLocale,
  string
>;

export type LocalizedPreconstructionList = Record<
  PreconstructionLocale,
  string[]
>;

export type VerificationStatus =
  | "verified"
  | "needs_current_verification"
  | "do_not_publish";

export type VisibilityStatus =
  | "visible"
  | "candidate"
  | "needs_review"
  | "discard"
  | "hidden/legal_review";

export type RentalPolicyCategory =
  | "no_restrictions"
  | "short_term"
  | "30_days"
  | "60_days"
  | "90_days"
  | "6_months"
  | "to_confirm";

export type PreconstructionRiskFlag =
  | "roi_claim"
  | "profitability_claim"
  | "returns_claim"
  | "appreciation_claim"
  | "projected_income_claim"
  | "eb5_claim"
  | "leaseback_claim"
  | "str_claim"
  | "short_term_rental_claim"
  | "no_rental_restrictions_claim"
  | "rental_policy_claim"
  | "payment_plan_claim"
  | "payment_plan_unverified"
  | "developer_copy"
  | "developer_legal_claim"
  | "developer_tax_claim"
  | "tax_or_legal_claim"
  | "outdated_price"
  | "outdated_delivery"
  | "missing_images"
  | "weak_visual_quality"
  | "legal_review"
  | "brand_usage_review"
  | "esteban_tone"
  | "needs_current_verification";

export type PreconstructionProject = {
  id: string;
  name: string;
  slug: string;
  detailSlug?: string;
  searchableName: string;
  area: string;
  normalizedArea: string;
  rentalPolicyCategory: RentalPolicyCategory;
  city?: string;
  address?: string;
  mapQuery?: string;
  priceFromUsd?: number;
  sortPrice?: number;
  priceStatus: VerificationStatus;
  delivery?: string;
  sortDelivery?: number;
  deliveryStatus: VerificationStatus;
  buildingType?: LocalizedPreconstructionText;
  designTeam?: string;
  description?: LocalizedPreconstructionText;
  highlights?: LocalizedPreconstructionList;
  amenities?: LocalizedPreconstructionList;
  residenceFeatures?: LocalizedPreconstructionList;
  unitMix?: LocalizedPreconstructionList;
  paymentPlan?: LocalizedPreconstructionList;
  paymentPlanStatus?: VerificationStatus;
  heroImage: string;
  galleryImages?: string[];
  riskFlags: PreconstructionRiskFlag[];
  visibilityStatus: VisibilityStatus;
  isPublicCatalogCandidate: boolean;
  detailReady: boolean;
  exclusionReason?: string;
  source: "internal-curation" | "raw-import";
  status: "needs_verification";
};

export type VisiblePreconstructionProject = PreconstructionProject & {
  detailSlug: string;
  visibilityStatus: "visible";
  detailReady: true;
};

export type PublicPreconstructionProject = PreconstructionProject & {
  detailSlug: string;
  isPublicCatalogCandidate: true;
  detailReady: true;
};
