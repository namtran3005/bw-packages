/**
 * Generate projection for mongoose `find`
 * based on input fields array
 */
export const createFindProjection = (fields: string[]) => {
  return fields.reduce<Record<string, number>>(
    (acc, field) => {
      if (field === 'id') {
        acc._id = 1; // set `_id` to 1 to copy the value to `id`
      }

      acc[field] = 1;
      return acc;
    },
    { _id: 0 },
  );
};
