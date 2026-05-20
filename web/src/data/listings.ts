export type Listing = {
  id: string;
  address: string;
  city: string;
  area: string;
  mls: string;
  priceUsd: number;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  yearBuilt?: number;
  hoaMonthlyUsd?: number;
  view?: string;
  rentalPolicy?: string;
  furnished?: boolean;
  parking?: string;
  pets?: string;
  buildingName?: string;
  image: string;
  status: "verified";
};

export const listings: Listing[] = [
  {
    id: "3801-s-ocean-dr-2c",
    address: "3801 S Ocean Dr #2C",
    city: "Hollywood, FL 33019",
    area: "Hollywood Beach",
    mls: "A11955684",
    priceUsd: 459000,
    beds: 2,
    baths: 2,
    sqft: 874,
    type: "Condominium",
    yearBuilt: 1969,
    hoaMonthlyUsd: 1038,
    view: "Oceanfront building",
    rentalPolicy: "OK to lease",
    parking: "One Space, Valet",
    pets: "Conditional, Yes",
    buildingName: "The Tides Hollywood Beach",
    image: "/images/listings/3801-s-ocean-dr-2c.jpg",
    status: "verified",
  },
  {
    id: "17801-n-bay-rd-505",
    address: "17801 N Bay Rd #505",
    city: "Sunny Isles Beach, FL 33160",
    area: "Sunny Isles Beach",
    mls: "A11883428",
    priceUsd: 455000,
    beds: 2,
    baths: 2,
    sqft: 1330,
    type: "Condominium",
    yearBuilt: 1991,
    hoaMonthlyUsd: 755,
    view: "Bay view",
    furnished: true,
    parking: "Guest, One Space",
    pets: "No",
    buildingName: "Le Frontenac",
    image: "/images/listings/17801-n-bay-rd-505.jpg",
    status: "verified",
  },
];
