// Returns if a value is an object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (value: any): value is object =>
  value && typeof value === 'object' && value.constructor === Object;
