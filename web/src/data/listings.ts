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
  images?: string[];
  status: "verified";
};

const listingImageBase = "https://ik.imagekit.io/devrodri/MLS";

const listingImages = {
  "3801-s-ocean-dr-2c": [
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(4).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(8).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(1).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(6).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(9).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(10).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(14).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia.jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(2).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(3).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(5).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(7).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(11).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(12).jpeg`,
    `${listingImageBase}/3801%20S%20Ocean%20Dr%20_2C%20Hollywood,%20FL%2033019-2902%20-%20MLS%20_A11955684/GetMedia%20(13).jpeg`,
  ],
  "17801-n-bay-rd-505": [
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(20).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(7).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(24).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(23).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(3).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(1).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(4).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(8).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(9).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(10).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(13).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(19).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia.jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(2).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(5).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(6).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(11).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(12).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(14).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(15).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(16).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(17).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(18).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(21).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(22).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(25).jpeg`,
    `${listingImageBase}/17801%20N%20Bay%20Rd%20_505%20Sunny%20Isles%20Beach,%20FL%2033160-1907%20-%20MLS%20_A11883428/GetMedia%20(26).jpeg`,
  ],
} satisfies Record<string, string[]>;

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
    image: listingImages["3801-s-ocean-dr-2c"][0],
    images: listingImages["3801-s-ocean-dr-2c"],
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
    image: listingImages["17801-n-bay-rd-505"][0],
    images: listingImages["17801-n-bay-rd-505"],
    status: "verified",
  },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((listing) => listing.id === id);
}

export function getListingIds(): string[] {
  return listings.map((listing) => listing.id);
}
