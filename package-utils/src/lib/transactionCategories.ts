export enum BitwalaCategories {
  DEFAULT = 'DEFAULT',
  AIRLINES = 'AIRLINES',
  ENTERTAINMENT = 'ENTERTAINMENT',
  AUTOMOBILE = 'AUTOMOBILE',
  CLOTHING = 'CLOTHING',
  SERVICES = 'SERVICES',
  GOVERNMENT = 'GOVERNMENT',
  RETAIL = 'RETAIL',
  TRANSPORTATION = 'TRANSPORTATION',
  UTILITIES = 'UTILITIES',
  TOURISM = 'TOURISM',
  GROCERIES = 'GROCERIES',
  HOUSEHOLD = 'HOUSEHOLD',
  TECHNOLOGY = 'TECHNOLOGY',
  PHARMACY = 'PHARMACY',
  FOOD_AND_DRINK = 'FOOD_AND_DRINK',
}

export type MccCodes =
  | 4511
  | 5541
  | 5542
  | 4111
  | 4112
  | 4411
  | 4722
  | 5411
  | 5722
  | 5732
  | 5734
  | 5912
  | 5712
  | 5812
  | 5813
  | 5814;

export enum MccCategories {
  'Airlines' = 'Airlines',
  'Amusement and Entertainment' = 'Amusement and Entertainment',
  'Automobile/Vehicle Rentals' = 'Automobile/Vehicle Rentals',
  'Automobiles and Vehicles' = 'Automobiles and Vehicles',
  'Business Services' = 'Business Services',
  'Clothing Stores' = 'Clothing Stores',
  'Contracted Services' = 'Contracted Services',
  'Government Services' = 'Government Services',
  'Hotels and Motels' = 'Hotels and Motels',
  'Mail Order/Telephone Order Providers' = 'Mail Order/Telephone Order Providers',
  'Miscellaneous Stores' = 'Miscellaneous Stores',
  'Personal Service Providers' = 'Personal Service Providers',
  'Professional Services and Membership Organizations' = 'Professional Services and Membership Organizations',
  'Repair Services' = 'Repair Services',
  'Retail Stores' = 'Retail Stores',
  'Service Providers' = 'Service Providers',
  'Transportation' = 'Transportation',
  'Utilities' = 'Utilities',
  'Wholesale Distributors and Manufacturers' = 'Wholesale Distributors and Manufacturers',
}

export const MccCodeToBitwalaMap = {
  4511: BitwalaCategories.AIRLINES,
  5541: BitwalaCategories.AUTOMOBILE,
  5542: BitwalaCategories.AUTOMOBILE,
  4111: BitwalaCategories.TRANSPORTATION,
  4112: BitwalaCategories.TRANSPORTATION,
  4411: BitwalaCategories.TRANSPORTATION,
  4722: BitwalaCategories.TRANSPORTATION,
  5411: BitwalaCategories.GROCERIES,
  5722: BitwalaCategories.DEFAULT,
  5732: BitwalaCategories.TECHNOLOGY,
  5734: BitwalaCategories.TECHNOLOGY,
  5912: BitwalaCategories.PHARMACY,
  5712: BitwalaCategories.HOUSEHOLD,
  5812: BitwalaCategories.FOOD_AND_DRINK,
  5813: BitwalaCategories.FOOD_AND_DRINK,
  5814: BitwalaCategories.FOOD_AND_DRINK,
};

export enum MCCCategoryToBitwalaMap {
  'Airlines' = BitwalaCategories.AIRLINES,
  'Amusement and Entertainment' = BitwalaCategories.ENTERTAINMENT,
  'Automobile/Vehicle Rentals' = BitwalaCategories.AUTOMOBILE,
  'Automobiles and Vehicles' = BitwalaCategories.AUTOMOBILE,
  'Business Services' = BitwalaCategories.SERVICES,
  'Clothing Stores' = BitwalaCategories.CLOTHING,
  'Contracted Services' = BitwalaCategories.SERVICES,
  'Government Services' = BitwalaCategories.GOVERNMENT,
  'Hotels and Motels' = BitwalaCategories.TOURISM,
  'Mail Order/Telephone Order Providers' = BitwalaCategories.DEFAULT,
  'Miscellaneous Stores' = BitwalaCategories.DEFAULT,
  'Personal Service Providers' = BitwalaCategories.SERVICES,
  'Professional Services and Membership Organizations	' = BitwalaCategories.SERVICES,
  'Repair Services' = BitwalaCategories.DEFAULT,
  'Retail Stores' = BitwalaCategories.RETAIL,
  'Service Providers' = BitwalaCategories.SERVICES,
  'Transportation' = BitwalaCategories.TRANSPORTATION,
  'Utilities' = BitwalaCategories.UTILITIES,
  'Wholesale Distributors and Manufacturers' = BitwalaCategories.DEFAULT,
}

const getBitwalaCategory = (
  mccCode: MccCodes,
  mccCategory: MccCategories
): BitwalaCategories =>
  MccCodeToBitwalaMap[mccCode] ||
  MCCCategoryToBitwalaMap[mccCategory as any] || // eslint-disable-line @typescript-eslint/no-explicit-any
  BitwalaCategories.DEFAULT;

export const transactionCategories = {
  getBitwalaCategory,
};
