export const validTanRegex = /^\d{6}$/; // 6 digits

export const isValidTan = (s: string) => validTanRegex.test(s);
