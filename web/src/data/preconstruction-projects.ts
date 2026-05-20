export type PreconstructionProject = {
  id: string;
  name: string;
  slug: string;
  area: string;
  city?: string;
  priceFromUsd?: number;
  delivery?: string;
  heroImage: string;
  source: "esteban-inventory";
  status: "needs_verification";
};

export const preconstructionProjects: PreconstructionProject[] = [
  {
    id: "2200-brickell",
    name: "2200 Brickell Residences",
    slug: "2200-brickell",
    area: "Brickell",
    city: "Miami",
    priceFromUsd: 830000,
    delivery: "2026",
    heroImage: "https://ik.imagekit.io/devrodri/2200%20Brickell/BTag7Isw.jpeg",
    source: "esteban-inventory",
    status: "needs_verification",
  },
  {
    id: "baccarat",
    name: "Baccarat Residences",
    slug: "baccarat",
    area: "Brickell",
    city: "Miami",
    priceFromUsd: 1200000,
    delivery: "2028",
    heroImage:
      "https://ik.imagekit.io/devrodri/Baccarat/Related-OneBrickell-03-Extrior_Grua-01.jpg",
    source: "esteban-inventory",
    status: "needs_verification",
  },
  {
    id: "cipriani",
    name: "Cipriani Residences",
    slug: "cipriani",
    area: "Brickell",
    city: "Miami",
    priceFromUsd: 1500000,
    delivery: "2026",
    heroImage: "https://ik.imagekit.io/devrodri/CIpriani/1-2.jpg",
    source: "esteban-inventory",
    status: "needs_verification",
  },
  {
    id: "elle-residences",
    name: "ELLE Residences Miami",
    slug: "elle-residences",
    area: "Edgewater",
    city: "Miami",
    priceFromUsd: 590000,
    delivery: "2028",
    heroImage:
      "https://ik.imagekit.io/devrodri/Elle%20Residences/Elle%20Residences%20Miami%2008.jpg",
    source: "esteban-inventory",
    status: "needs_verification",
  },
  {
    id: "midtown-park",
    name: "Midtown Park",
    slug: "midtown-park",
    area: "Midtown",
    city: "Miami",
    priceFromUsd: 700000,
    delivery: "2028",
    heroImage: "https://ik.imagekit.io/devrodri/Midtown%20Park/ca7LMYAw.jpeg",
    source: "esteban-inventory",
    status: "needs_verification",
  },
];
