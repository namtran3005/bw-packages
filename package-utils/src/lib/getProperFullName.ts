export const formatFullName = (name: string | undefined): string => {
  return name
    ? name
        .trim()
        .toLowerCase()
        .replace(/(?:^|[\s-/])./g, match => {
          return match.toUpperCase();
        })
    : '';
};
