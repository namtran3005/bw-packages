export enum CustomerType {
  PERSONAL = 'PERSONAL',
  BUSINESS = 'BUSINESS',
}

export const accountsEndpoints: { [key in CustomerType]: string } = {
  [CustomerType.PERSONAL]: 'persons',
  [CustomerType.BUSINESS]: 'businesses',
};
