export interface Pagination {
  number?: number;
  size?: number;
}

export interface ListingParams<EntityFilter> {
  page?: Pagination;
  filter?: EntityFilter;
}

export interface PaginationParams {
  page?: Pagination;
}
