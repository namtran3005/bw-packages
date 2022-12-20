export const formatIban = (iban: string) => {
  return iban
    .replace(/[^\dA-Z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
};

export const trimIban = (iban: string) => {
  return iban.replace(/\s+/g, '');
};
