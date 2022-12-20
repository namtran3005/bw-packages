/**
 * Generate projection based on input fields array
 * if array contains 'id', set {'id': { $toString: '$_id' } ,'_id': 0}
 * otherwise property values will be set to '1'
 */
export const createProjection = (fields: string[], path?: string) => {
  return fields.reduce<Record<string, number | { $toString: string } | string>>(
    (acc, field) => {
      const value =
        field === 'id' && !path
          ? {
              $toString: '$_id',
            }
          : 1;

      const pathValue = `$${path}.${field}`;

      if (field === 'id') {
        acc._id = 0;
      }
      acc[field] = path ? pathValue : value;
      return acc;
    },
    {}
  );
};
